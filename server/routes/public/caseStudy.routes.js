import express from "express";
import { getPublishedCaseStudies } from "../../controllers/caseStudy.controller.js";

const router = express.Router();

router.get("/", getPublishedCaseStudies);

export default router;
