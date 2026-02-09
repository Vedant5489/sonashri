import express from "express";
import cors from "cors";

import publicTrainingRoutes from "./routes/public/training.routes.js";
import publicCaseStudyRoutes from "./routes/public/caseStudy.routes.js";

import adminTrainingRoutes from "./routes/admin/training.routes.js";
import adminCaseStudyRoutes from "./routes/admin/caseStudy.routes.js";
import adminAuthRoutes from "./routes/admin/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// health check
app.get("/", (req, res) => {
    res.send("🚀 Sonashri API is running");
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
