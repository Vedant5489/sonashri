import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CaseStudyCard from "../../case-studies/components/CaseStudyCard";
import { fetchCaseStudies } from "../../api/caseStudies.api";
import "./caseStudiesSection.css";

const CaseStudiesSection = () => {
  const [studies, setStudies] = useState([]);

  useEffect(() => {
    fetchCaseStudies()
      .then((data) => {
        if (Array.isArray(data)) {
          setStudies(data.slice(0, 3));
        }
      })
      .catch(() => {});
  }, []);

  if (studies.length === 0) return null;

  return (
    <section className="home-case-studies">
      <div className="home-case-header">
        <h2 className="section-title">Case Studies</h2>
        <p className="section-subtitle">
          Real-world engineering and digital solutions with measurable impact.
        </p>
      </div>

      <div className="home-case-grid">
        {studies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>

      <div className="home-case-cta">
        <Link to="/case-studies" className="btn-primary">
          View all case studies
        </Link>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
