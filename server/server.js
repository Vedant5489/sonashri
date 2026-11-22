import app from "./app.js";
import db from "./config/db.js";
import net from "node:net";

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

const testMySQLNetwork = () => {
    const host = process.env.DB_HOST;
    const port = Number(process.env.DB_PORT || 3306);

    console.log(`🔍 Testing MySQL TCP connection: ${host}:${port}`);

    const socket = net.createConnection({ host, port });

    socket.setTimeout(10000);

    socket.on("connect", () => {
        console.log("✅ MYSQL TCP CONNECTION SUCCESS");
        socket.end();
    });

    socket.on("timeout", () => {
        console.error("❌ MYSQL TCP TIMEOUT after 10 seconds");
        socket.destroy();
    });

    socket.on("error", (err) => {
        console.error("❌ MYSQL TCP ERROR:", err.code, err.message);
    });
};

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

testMySQLNetwork();