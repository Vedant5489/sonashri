import express from "express";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

router.get("/cloudinary-test", async (req, res) => {
    try {
        const result = await cloudinary.api.ping();
        res.json({
            message: "Cloudinary connection successful",
            cloudinary: result
        });
    } catch (error) {
        res.status(500).json({
            message: "Cloudinary connection failed",
            error: error.message
        });
    }
});

export default router;