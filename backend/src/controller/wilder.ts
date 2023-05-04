import { Request, Response } from "express";

import dataSource from "../utils";
import { Wilder } from "../entity/Wilder";
import { Skill } from "../entity/Skill";
import { Grade } from "../entity/Grade";

const wilderController = {
  create: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Wilder).save(req.body);
      res.send("Created wilder");
    } catch (error) {
      console.log(error);
      res.send("Error while creating wilder");
    }
  },
  read: async (req: Request, res: Response) => {
    try {
      const grades = await dataSource.getRepository(Grade).find();

      const wilders = await dataSource.getRepository(Wilder).find();

      const data = wilders.map((wilder) => {
        const wilderGrades = grades.filter(
          (grade) => grade.wilder.id === wilder.id
        );

        const wilderGradeLean = wilderGrades.map((el) => {
          return { title: el.skill.name, votes: el.grade };
        });
        const result = {
          ...wilder,
          skills: wilderGradeLean,
        };
        return result;
      });
      res.send(data);
    } catch (error) {
      console.log(error);
      res.send("Error while creating wilder");
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      await dataSource
        .getRepository(Wilder)
        .update(req.body.id, req.body.newData);

      res.send("updated");
    } catch (error) {
      res.send("Error while creating wilder");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      // await dataSource
      // .getRepository(Grade)
      // .delete({skillId: req.params.id});

      await dataSource
        .getRepository(Wilder)
        .delete(parseInt(req.params.id, 10));

      res.send("deleted");
    } catch (error) {
      res.send("Error while creating wilder");
    }
  },
  // addSkill: async (req: Request, res: Response) => {
  //   try {
  //     const wilderToUpdate = await dataSource
  //       .getRepository(Wilder)
  //       .findOneBy({ name: req.body.wilderName });

  //     if (wilderToUpdate === null) throw new Error("Wilder not found");

  //     const skillToAdd = await dataSource
  //       .getRepository(Skill)
  //       .findOneBy({ name: req.body.skillName });

  //     if (skillToAdd === null) throw new Error("No skill provided");

  //     wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
  //     await dataSource.getRepository(Wilder).save(wilderToUpdate);
  //     res.send("Skill added to wilder");
  //   } catch (error) {
  //     res.send("Error while creating skill");
  //   }
  // },
};

export default wilderController;
