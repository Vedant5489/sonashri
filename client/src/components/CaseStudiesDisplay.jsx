import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CaseStudyCard from "../case-studies/components/CaseStudyCard";
import { fetchCaseStudies } from "../api/caseStudies.api";
import "../styles/caseStudiesDisplay.css";

const CaseStudiesDisplay = () => {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    fetchCaseStudies()
      .then((data) => {
        if (Array.isArray(data)) {
          setCaseStudies(data.slice(0, 3));
        }
      })
      .catch(() => {});
  }, []);

  if (caseStudies.length === 0) return null;

  return (
    <section className="case-studies-display">
      <div className="csd-header">
        <h2 className="csd-title">
          Case Studies
          <span className="csd-underline" />
        </h2>

        <p className="csd-subtitle">
          Practical engineering and digital solutions delivering measurable
          business impact.
        </p>
      </div>


      <div className="csd-grid">
        {caseStudies.map((cs) => (
          <CaseStudyCard key={cs.id} study={cs} />
        ))}
      </div>

      <div className="csd-cta">
        <Link to="/case-studies" className="btn-primary">
          View all case studies
        </Link>
      </div>
    </section>
  );
};

export default CaseStudiesDisplay;
