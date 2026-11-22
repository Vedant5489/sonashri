import app from "./app.js";
import db from "./config/db.js";

const PORT = process.env.PORT || 5000;

// Test DB connection
async function testDB() {
    try {
        const connection = await db.getConnection();
        console.log("✅ MySQL connected successfully");
        connection.release();
    } catch (err) {
        console.error("❌ MySQL connection failed:", err);
    }
}

testDB();

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
