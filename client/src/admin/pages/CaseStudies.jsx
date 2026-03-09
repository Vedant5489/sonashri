import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import "../styles/caseStudies.css";

import {
  fetchCaseStudies,
  createCaseStudy,
  updateCaseStudy,
  toggleCaseStudyPublish,
  deleteCaseStudy
} from "../services/adminApi";

const emptyForm = {
  title: "",
  summary: "",
  content: "",
  category: "",
  is_published: false,
  cover_image: null,
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


const CaseStudies = () => {
  const formRef = useRef(null);

  const [caseStudies, setCaseStudies] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [showPreview, setShowPreview] = useState(true);

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
      setIsEditing(false);
      setShowPreview(true);
      await loadCaseStudies();

      scrollToTop();
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
    setIsEditing(true);
    setSelectedCaseStudy(null);
    setShowPreview(true);

    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

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

  /* ================= DELETE ================= */

const handleDelete = async (id) => {

  const confirmDelete = window.confirm(
    "Delete this case study?\n\nThis will permanently remove the case study and its image."
  );

  if (!confirmDelete) return;

  const loadingToast = toast.loading("Deleting case study...");

  try {

    await deleteCaseStudy(id);

    toast.success("Case study deleted successfully", {
      id: loadingToast,
    });

    await loadCaseStudies();

    setSelectedCaseStudy(null);

  } catch {
    toast.error("Failed to delete case study", {
      id: loadingToast,
    });
  }
};

  return (
    <div className="case-studies">
      {/* ================= HEADER ================= */}
      <div className="case-header">
        <div>
          <h1>Case Studies</h1>
          <p className="case-subtitle">
            Create, review and publish case studies
          </p>
        </div>
      </div>

      {/* ================= LIST ================= */}
      {!selectedCaseStudy && (
        <div className="case-table-wrapper">
          <table className="case-table">
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
                  <td colSpan="4" className="empty-state">
                    No case studies yet
                  </td>
                </tr>
              )}

              {caseStudies.map((cs) => (
                <tr key={cs.id}>
                  <td
                    className="case-title-cell"
                    onClick={() => {
                      setSelectedCaseStudy(cs);
                      setIsEditing(false);
                      setEditingId(null);
                    }}
                  >
                    {cs.title}
                  </td>
                  <td>{cs.category || "-"}</td>
                  <td>
                    <span
                      className={`case-status ${
                        cs.is_published ? "published" : "draft"
                      }`}
                    >
                      {cs.is_published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="case-actions">
                    <button
                      className="btn-secondary"
                      onClick={() => handleEdit(cs)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn-primary"
                      onClick={() => handlePublishToggle(cs.id)}
                    >
                      Toggle Publish
                    </button>

                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(cs.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ================= VIEW ================= */}
      {selectedCaseStudy && (
        <div className="case-view">
          <button
            className="btn-back"
            onClick={() => {
              setSelectedCaseStudy(null);
              setEditingId(null);
              setIsEditing(false);
              setForm(emptyForm);
            }}
          >
            ← Back to list
          </button>

          <h2>{selectedCaseStudy.title}</h2>

          {selectedCaseStudy.cover_image && (
            <img
              src={`http://localhost:5000${selectedCaseStudy.cover_image}`}
              alt=""
              className="case-cover"
            />
          )}

          <p className="case-meta">
            <strong>Category:</strong> {selectedCaseStudy.category || "-"}
          </p>

          <p className="case-summary">
            {selectedCaseStudy.summary}
          </p>

          <div className="case-content markdown-view">
            <ReactMarkdown>
              {selectedCaseStudy.content}
            </ReactMarkdown>
          </div>
        </div>
      )}

      {/* ================= FORM ================= */}
      {!selectedCaseStudy && (
        <div
          className={`case-form ${isEditing ? "editing" : ""}`}
          ref={formRef}
        >
          <h2>{editingId ? "Edit Case Study" : "Add New Case Study"}</h2>

          <form onSubmit={handleSubmit}>
            <input
              placeholder="Title"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
            />

            <textarea
              placeholder="Summary"
              value={form.summary}
              onChange={(e) =>
                setForm({ ...form, summary: e.target.value })
              }
            />

            {/* ===== MARKDOWN CONTENT ===== */}
            <div className="markdown-editor">
              <div className="markdown-header">
                <label>Content</label>
                <button
                  type="button"
                  onClick={() => setShowPreview((p) => !p)}
                  className="markdown-toggle"
                >
                  {showPreview ? "Hide Preview" : "Show Preview"}
                </button>
              </div>

              <textarea
                placeholder={`Paste content from Word here.

Use headings, bullet points and paragraphs.
Formatting will be preserved.`}
                rows="10"
                value={form.content}
                onChange={(e) =>
                  setForm({ ...form, content: e.target.value })
                }
              />

              {showPreview && (
                <div className="markdown-preview">
                  <ReactMarkdown>
                    {form.content || "Live preview will appear here…"}
                  </ReactMarkdown>
                </div>
              )}
            </div>

            <input
              placeholder="Category"
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
            />

            <label className="publish-toggle">
              <input
                type="checkbox"
                checked={form.is_published}
                onChange={(e) =>
                  setForm({ ...form, is_published: e.target.checked })
                }
              />
              Published
            </label>


            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setForm({ ...form, cover_image: e.target.files[0] })
              }
            />

            {isEditing && (
              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  setForm(emptyForm);
                  setEditingId(null);
                  setIsEditing(false);
                  scrollToTop();
                }}
              >
                Cancel Edit
              </button>
            )}

            <button type="submit" className="btn-primary">
              {editingId ? "Update Case Study" : "Create Case Study"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;
