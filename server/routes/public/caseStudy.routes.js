import express from "express";
import {
    getPublishedCaseStudies,
    getPublishedCaseStudyById,
} from "../../controllers/caseStudy.controller.js";

const router = express.Router();

router.get("/", getPublishedCaseStudies);
router.get("/:id", getPublishedCaseStudyById);

export default router;
