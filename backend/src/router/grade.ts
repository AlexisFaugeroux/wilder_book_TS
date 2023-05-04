import express from "express";
import gradeController from "../controller/grade";

const gradeRouter = express.Router();

gradeRouter.get("/api/grade", gradeController.read);
gradeRouter.post("/api/grade", gradeController.create);
// gradeRouter.put("/api/grade/:id", gradeController.update);
// gradeRouter.delete("/api/grade/:id", gradeController.delete);

export default gradeRouter;
