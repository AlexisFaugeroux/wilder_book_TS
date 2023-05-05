import { Request, Response } from "express";

import dataSource from "../utils";
import { Wilder } from "../entity/Wilder";
import { Skill } from "../entity/Skill";
import { Grade } from "../entity/Grade";

const gradeController = {
  create: async (req: Request, res: Response) => {
    try {
      console.log(req.body);
      const wilderFromDB = await dataSource
        .getRepository(Wilder)
        .findOneBy({ name: req.body.wilder });

      if (wilderFromDB === null) throw new Error("No wilder found");

      // console.log("Wilder from DB", wilderFromDB);

      const skillFromDB = await dataSource
        .getRepository(Skill)
        .findOneBy({ name: req.body.skill });

      if (skillFromDB === null) throw new Error("No skill found");

      // console.log("Skill from DB", skillFromDB);

      await dataSource.getRepository(Grade).save({
        grade: req.body.grade,
        skill: skillFromDB,
        wilder: wilderFromDB,
      });
      res.send("Created Grade");
    } catch (error) {
      console.log(error);
      res.send("Error while creating skill");
    }
  },
  read: async (req: Request, res: Response) => {
    try {
      const gradesFromDB = await dataSource.getRepository(Grade).find();
      res.send(gradesFromDB);
    } catch (error) {
      res.send("Error while reading grades");
    }
  },
};

export default gradeController;
