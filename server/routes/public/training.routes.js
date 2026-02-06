import express from "express";
import { createTrainingRequest } from "../../controllers/training.controller.js";

const router = express.Router();

router.post("/", createTrainingRequest);

export default router;
