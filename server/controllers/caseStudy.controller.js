import db from "../config/db.js";
import cloudinary from "../config/cloudinary.js";

/**
 * ADMIN: Get all case studies (published + drafts)
 */
export const getAllCaseStudies = async (req, res) => {
    try {
        const [rows] = await db.execute(
            "SELECT * FROM case_studies ORDER BY created_at DESC"
        );
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch case studies" });
    }
};

/**
 * ADMIN: Create new case study
 */
export const createCaseStudy = async (req, res) => {
    try {
        console.log("REQ BODY:", req.body);
        console.log("REQ FILE:", req.file);

        if (!req.body) {
            return res.status(400).json({ message: "Form data missing" });
        }

        const title = req.body.title;
        const summary = req.body.summary;
        const content = req.body.content;
        const category = req.body.category || "";
        const isPublished = req.body.is_published === "true";

        if (!title || !summary || !content) {
            return res.status(400).json({ message: "Required fields missing" });
        }

        const coverImage = req.file ? req.file.path : null;

        await db.execute(
            `
      INSERT INTO case_studies
      (title, summary, content, category, cover_image, is_published)
      VALUES (?, ?, ?, ?, ?, ?)
      `,
            [title, summary, content, category, coverImage, isPublished]
        );

        res.status(201).json({ message: "Case study created successfully" });
    } catch (err) {
        console.error("INSERT ERROR:", err);
        res.status(500).json({ message: "Failed to create case study" });
    }
};

/**
 * ADMIN: Update case study
 */
/**
 * ADMIN: Update case study
 * If new image uploaded:
 * 1. delete old Cloudinary image
 * 2. save new image
 */
export const updateCaseStudy = async (req, res) => {
    try {

        const { id } = req.params;
        const { title, summary, content, category } = req.body;
        const isPublished = req.body.is_published === "true";

        /* ================= FETCH EXISTING ================= */

        const [[existing]] = await db.execute(
            "SELECT cover_image FROM case_studies WHERE id = ?",
            [id]
        );

        if (!existing) {
            return res.status(404).json({
                message: "Case study not found"
            });
        }

        let newCoverImage = existing.cover_image;

        /* ================= IMAGE REPLACEMENT ================= */

        if (req.file) {

            const oldImage = existing.cover_image;

            // delete old image from cloudinary
            if (oldImage) {

                try {

                    const parts = oldImage.split("/");
                    const fileName = parts[parts.length - 1];
                    const publicId = fileName.split(".")[0];

                    await cloudinary.uploader.destroy(publicId);

                } catch (cloudErr) {
                    console.error("Old image deletion failed:", cloudErr);
                }

            }

            // save new image
            newCoverImage = req.file.path;

        }

        /* ================= UPDATE DATABASE ================= */

        await db.execute(
            `
            UPDATE case_studies
            SET title=?, summary=?, content=?, category=?, cover_image=?, is_published=?
            WHERE id=?
            `,
            [
                title,
                summary,
                content,
                category,
                newCoverImage,
                isPublished,
                id,
            ]
        );

        res.json({
            message: "Case study updated successfully"
        });

    } catch (err) {

        console.error("UPDATE ERROR:", err);

        res.status(500).json({
            message: "Failed to update case study"
        });

    }
};


/**
 * ADMIN: Toggle publish status
 */
export const togglePublishStatus = async (req, res) => {
    try {
        const { id } = req.params;

        await db.execute(
            "UPDATE case_studies SET is_published = NOT is_published WHERE id=?",
            [id]
        );

        res.json({ message: "Publish status updated" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to toggle publish status" });
    }
};

/**
 * ADMIN: Delete case study
 * 1. Delete Cloudinary image
 * 2. Delete DB row
 */
export const deleteCaseStudy = async (req, res) => {
    try {

        const { id } = req.params;

        /* ================= FETCH CASE STUDY ================= */

        const [[caseStudy]] = await db.execute(
            "SELECT cover_image FROM case_studies WHERE id = ?",
            [id]
        );

        if (!caseStudy) {
            return res.status(404).json({
                message: "Case study not found"
            });
        }

        const imageUrl = caseStudy.cover_image;

        /* ================= DELETE CLOUDINARY IMAGE ================= */

        if (imageUrl) {

            try {

                // extract public_id from Cloudinary URL
                const parts = imageUrl.split("/");
                const fileName = parts[parts.length - 1];
                const publicId = fileName.split(".")[0];

                await cloudinary.uploader.destroy(publicId);

            } catch (cloudErr) {
                console.error("Cloudinary delete failed:", cloudErr);
            }

        }

        /* ================= DELETE DB ROW ================= */

        await db.execute(
            "DELETE FROM case_studies WHERE id = ?",
            [id]
        );

        res.json({
            message: "Case study deleted successfully"
        });

    } catch (err) {

        console.error("DELETE CASE STUDY ERROR:", err);

        res.status(500).json({
            message: "Failed to delete case study"
        });

    }
};

/**
 * PUBLIC: Get published case studies only
 */
export const getPublishedCaseStudies = async (req, res) => {
    try {
        const [rows] = await db.execute(
            "SELECT * FROM case_studies WHERE is_published = TRUE ORDER BY created_at DESC"
        );
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch case studies" });
    }
};

/* ================= GET SINGLE PUBLISHED CASE STUDY ================= */
export const getPublishedCaseStudyById = async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await db.query(
            "SELECT * FROM case_studies WHERE id = ? AND is_published = 1 LIMIT 1",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json(null);
        }

        res.json(rows[0]);
    } catch (error) {
        console.error("Error fetching case study by id:", error);
        res.status(500).json({ message: "Failed to fetch case study" });
    }
};
