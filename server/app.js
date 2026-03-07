import express from "express";
import cors from "cors";

import publicTrainingRoutes from "./routes/public/training.routes.js";
import publicCaseStudyRoutes from "./routes/public/caseStudy.routes.js";

import adminTrainingRoutes from "./routes/admin/training.routes.js";
import adminCaseStudyRoutes from "./routes/admin/caseStudy.routes.js";
import adminAuthRoutes from "./routes/admin/auth.routes.js";
import cloudinaryTestRoutes from "./routes/cloudinaryTest.routes.js";


const app = express();

app.use(cors());
app.use(express.json());

// health check
app.get("/", (req, res) => {
    res.send("🚀 Sonashri API is running");
});

// HEALTH CHECK API FOR MONITOR
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});
// DATABASE HEALTH CHECK API FOR health check script
router.get("/db-health", async (req, res) => {
    try {
        await db.query("SELECT 1");
        res.status(200).json({ status: "ok" });
    } catch (error) {
        res.status(500).json({ status: "db_error" });
    }
});

app.use("/api", cloudinaryTestRoutes);

app.get("/api/test500", (req, res) => {
    res.status(500).json({ error: "Server exploded" });
});

app.get("/api/slow", async (req, res) => {
    await new Promise(r => setTimeout(r, 1500));
    res.json({ message: "Slow response" });
});

// ================= PUBLIC ROUTES =================
app.use("/api/training", publicTrainingRoutes);
app.use("/api/case-studies", publicCaseStudyRoutes);

// ================= ADMIN ROUTES =================
app.use("/api/admin/training", adminTrainingRoutes);
app.use("/api/admin/case-studies", adminCaseStudyRoutes);
app.use("/api/admin/auth", adminAuthRoutes);

// ================= STATIC =================
app.use("/uploads", express.static("uploads"));

export default app;
