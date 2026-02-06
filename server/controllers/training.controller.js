import db from "../config/db.js";

export const createTrainingRequest = async (req, res) => {
    try {
        const { name, email, phone, role, message } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({ message: "Required fields missing" });
        }

        const query = `
      INSERT INTO training_requests (name, email, phone, role, message)
      VALUES (?, ?, ?, ?, ?)
    `;

        await db.execute(query, [name, email, phone, role, message]);

        res.status(201).json({ message: "Training request submitted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

export const getAllTrainingRequests = async (req, res) => {
    try {
        const [rows] = await db.execute(
            "SELECT * FROM training_requests ORDER BY created_at DESC"
        );

        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};


export const updateTrainingStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const allowed = ["NEW", "CONTACTED", "REJECTED", "CONVERTED"];
        if (!allowed.includes(status)) {
            return res.status(400).json({ message: "Invalid status" });
        }

        await db.execute(
            "UPDATE training_requests SET status = ? WHERE id = ?",
            [status, id]
        );

        res.json({ message: "Status updated" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

