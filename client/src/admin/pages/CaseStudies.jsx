import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  fetchCaseStudies,
  createCaseStudy,
  updateCaseStudy,
  toggleCaseStudyPublish,
} from "../services/adminApi";

const emptyForm = {
  title: "",
  summary: "",
  content: "",
  category: "",
  is_published: false,
  cover_image: null,
};

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const loadCaseStudies = async () => {
    try {
      const data = await fetchCaseStudies();
      setCaseStudies(Array.isArray(data) ? data : []);
    } catch {
      toast.error("Failed to load case studies");
    }
  };

  useEffect(() => {
    loadCaseStudies();
  }, []);

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.summary || !form.content) {
      toast.error("Title, summary and content are required");
      return;
    }

    const loadingToast = toast.loading(
      editingId ? "Updating case study..." : "Creating case study..."
    );

    try {
      if (editingId) {
        await updateCaseStudy(editingId, form);
        toast.success("Case study updated successfully", {
          id: loadingToast,
        });
      } else {
        await createCaseStudy(form);
        toast.success("Case study created successfully", {
          id: loadingToast,
        });
      }

      setForm(emptyForm);
      setEditingId(null);
      loadCaseStudies();
    } catch {
      toast.error("Operation failed", { id: loadingToast });
    }
  };

  /* ================= EDIT ================= */

  const handleEdit = (cs) => {
    setForm({
      title: cs.title,
      summary: cs.summary,
      content: cs.content,
      category: cs.category || "",
      is_published: cs.is_published,
      cover_image: null,
    });

    setEditingId(cs.id);
    setSelectedCaseStudy(null);

    toast("Editing case study");
  };

  /* ================= PUBLISH ================= */

  const handlePublishToggle = async (id) => {
    const loadingToast = toast.loading("Updating publish status...");

    try {
      await toggleCaseStudyPublish(id);
      toast.success("Publish status updated", { id: loadingToast });
      loadCaseStudies();
    } catch {
      toast.error("Failed to update status", { id: loadingToast });
    }
  };

  return (
    <>
      <h1>Case Studies</h1>

      {/* ================= LIST ================= */}
      <table style={{ width: "100%", marginBottom: 30 }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {caseStudies.length === 0 && (
            <tr>
              <td colSpan="4">No case studies yet</td>
            </tr>
          )}

          {caseStudies.map((cs) => (
            <tr key={cs.id}>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedCaseStudy(cs)}
              >
                {cs.title}
              </td>
              <td>{cs.category || "-"}</td>
              <td>{cs.is_published ? "Published" : "Draft"}</td>
              <td>
                <button
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    handleEdit(cs);
                  }}
                >
                  Edit
                </button>{" "}
                <button onClick={() => handlePublishToggle(cs.id)}>
                  Toggle Publish
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ================= VIEW ================= */}
      {selectedCaseStudy && (
        <div>
          <button onClick={() => setSelectedCaseStudy(null)}>← Back</button>

          <h2>{selectedCaseStudy.title}</h2>

          {selectedCaseStudy.cover_image && (
            <img
              src={`http://localhost:5000${selectedCaseStudy.cover_image}`}
              alt=""
              style={{ maxWidth: "100%", marginBottom: 16 }}
            />
          )}

          <p>
            <strong>Category:</strong> {selectedCaseStudy.category}
          </p>
          <p>
            <strong>Summary:</strong> {selectedCaseStudy.summary}
          </p>

          <hr />

          <p>{selectedCaseStudy.content}</p>
        </div>
      )}

      {/* ================= FORM ================= */}
      {!selectedCaseStudy && (
        <>
          <h2>{editingId ? "Edit Case Study" : "Add Case Study"}</h2>

          <form onSubmit={handleSubmit}>
            <input
              placeholder="Title"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
            />
            <br /><br />

            <textarea
              placeholder="Summary"
              value={form.summary}
              onChange={(e) =>
                setForm({ ...form, summary: e.target.value })
              }
            />
            <br /><br />

            <textarea
              placeholder="Content"
              rows="6"
              value={form.content}
              onChange={(e) =>
                setForm({ ...form, content: e.target.value })
              }
            />
            <br /><br />

            <input
              placeholder="Category"
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
            />
            <br /><br />

            <label>
              <input
                type="checkbox"
                checked={form.is_published}
                onChange={(e) =>
                  setForm({ ...form, is_published: e.target.checked })
                }
              />
              Published
            </label>

            <br /><br />

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setForm({ ...form, cover_image: e.target.files[0] })
              }
            />

            <br /><br />

            <button type="submit">
              {editingId ? "Update" : "Create"}
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default CaseStudies;
