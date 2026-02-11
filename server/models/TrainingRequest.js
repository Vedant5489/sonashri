import mongoose from "mongoose";

const trainingRequestSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        qualification: { type: String },
        interestArea: { type: String },
        message: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model("TrainingRequest", trainingRequestSchema);
