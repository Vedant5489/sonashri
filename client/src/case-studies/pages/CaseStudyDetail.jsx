import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Loader from "../../components/Loader";
import { fetchCaseStudyById } from "../../api/caseStudies.api";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const [study, setStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchCaseStudyById(id)
      .then((data) => {
        setStudy(data);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });

  }, [id]); // triggers when sidebar navigation changes case study

  if (loading) {
    return (
      <div className="case-detail-loader">
        <Loader />
      </div>
    );
  }
  
  if (!study) return <div className="case-loading">Select a case study</div>;

  return (
    <article className="case-detail">
      <header className="case-hero">
        <h1>{study.title}</h1>
        <p className="case-summary">{study.summary}</p>

        {study.cover_image && (
          <img
            src={study.cover_image}
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