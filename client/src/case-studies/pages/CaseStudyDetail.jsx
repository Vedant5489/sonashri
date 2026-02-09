import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { fetchCaseStudyById } from "../../api/caseStudies.api";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const CaseStudyDetail = () => {
  const { id } = useParams();
  const [study, setStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaseStudyById(id)
      .then((data) => {
        setStudy(data || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="case-loading">Loading…</div>;
  if (!study) return <div className="case-loading">Select a case study</div>;

  return (
    <article className="case-detail">
      <header className="case-hero">
        <h1>{study.title}</h1>
        <p className="case-summary">{study.summary}</p>

        {study.cover_image && (
          <img
            src={`${API_BASE}${study.cover_image}`}
            alt={study.title}
          />
        )}
      </header>

      <section className="case-content">
        <ReactMarkdown>{study.content}</ReactMarkdown>
      </section>
    </article>
  );
};

export default CaseStudyDetail;
