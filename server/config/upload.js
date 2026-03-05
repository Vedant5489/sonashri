import multer from "multer";
import path from "path";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js";

const slugify = (text) =>
    text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => {
        const title = req.body.title || "case-study";
        const slug = slugify(title);
        const ext = path.extname(file.originalname);

        return {
            folder: "sonashri/case-studies",
            public_id: `${slug}-${Date.now()}`,
            format: ext.replace(".", ""),
            transformation: [
                { quality: "auto", fetch_format: "auto" }
            ]
        };
    },
});

const upload = multer({ storage });

export default upload;