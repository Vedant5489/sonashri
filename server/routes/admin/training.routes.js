import express from "express";
import {
    getAllTrainingRequests,
    updateTrainingStatus,
} from "../../controllers/training.controller.js";

const router = express.Router();

router.get("/", getAllTrainingRequests);
router.patch("/:id/status", updateTrainingStatus);

export default router;
