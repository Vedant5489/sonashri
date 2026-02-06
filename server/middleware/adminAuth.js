import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.adminId = decoded.adminId;
        next();
    } catch {
        res.status(401).json({ message: "Invalid token" });
    }
};

export default adminAuth;
