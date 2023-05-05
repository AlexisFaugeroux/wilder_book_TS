import express from "express";
import wilderController from "../controller/wilder";

const wilderRouter = express.Router();

wilderRouter.get("/api/wilder", wilderController.read);
wilderRouter.post("/api/wilder", wilderController.create);
wilderRouter.put("/api/wilder", wilderController.update);
wilderRouter.delete("/api/wilder/:id", wilderController.delete);

export default wilderRouter;
