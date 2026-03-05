import app from "./app.js";
import db from "./config/db.js";

const PORT = process.env.PORT || 5000;

db.getConnection()
    .then(() => console.log("✅ Database connected"))
    .catch(err => console.error("❌ DB connection failed:", err));

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
