import express from "express";
import upload from "../../config/upload.js";
import adminAuth from "../../middleware/adminAuth.js";
import {
    getAllCaseStudies,
    createCaseStudy,
    updateCaseStudy,
    togglePublishStatus,
} from "../../controllers/caseStudy.controller.js";

const router = express.Router();

// everything below is protected
router.use(adminAuth);

router.get("/", getAllCaseStudies);

// 🔴 multer MUST be before controller
router.post("/", upload.single("cover_image"), createCaseStudy);
router.put("/:id", upload.single("cover_image"), updateCaseStudy);

router.patch("/:id/publish", togglePublishStatus);

export default router;
