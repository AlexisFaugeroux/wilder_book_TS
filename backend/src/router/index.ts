import express from "express";
import wilderRouter from "./wilder";
import skillRouter from "./skill";
import gradeRouter from "./grade";

const router = express.Router();

router.use(wilderRouter, skillRouter, gradeRouter);

export default router;
