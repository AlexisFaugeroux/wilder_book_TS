import { Request, Response } from "express";

import dataSource from "../utils";
import { Wilder } from "../entity/Wilder";

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
      const wilders = await dataSource.manager.find(Wilder, {
        relations: {
          grades: {
            skill: true,
          },
        },
      });
      res.send(wilders);
    } catch (err) {
      console.log(err);
      res.send("Error while getting the wilders");
    }
  },
  update: async (req: Request, res: Response) => {
    console.log(req.body);
    try {
      if (!req.body.newData.name && !req.body.newData.city)
        return res.json("Empty body");

      if (!req.body.newData.name) delete req.body.newData.name;
      if (!req.body.newData.city) delete req.body.newData.city;

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
