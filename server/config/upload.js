import multer from "multer";
import path from "path";

const slugify = (text) =>
    text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

const storage = multer.diskStorage({
    destination: "uploads/case-studies",
    filename: (req, file, cb) => {
        const title = req.body.title || "case-study";
        const slug = slugify(title);
        const ext = path.extname(file.originalname);

        cb(null, `${slug}-${Date.now()}${ext}`);
    },
});

const upload = multer({ storage });

export default upload;
