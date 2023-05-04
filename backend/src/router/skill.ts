import express from "express";
import skillController from "../controller/skill";

const skillRouter = express.Router();

skillRouter.get("/api/skill", skillController.read);
skillRouter.post("/api/skill", skillController.create);
skillRouter.put("/api/skill/:id", skillController.update);
skillRouter.delete("/api/skill/:id", skillController.delete);

export default skillRouter;
