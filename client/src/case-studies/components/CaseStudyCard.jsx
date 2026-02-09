import { Link } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const CaseStudyCard = ({ study }) => {
  return (
    <Link to={`/case-studies/${study.id}`} className="case-card">
      <div className="case-card-image">
        <img
          src={
            study.cover_image
              ? `${API_BASE}${study.cover_image}`
              : "/placeholder.jpg"
          }
          alt={study.title}
        />
      </div>

      <div className="case-card-content">
        {study.category && (
          <span className="case-category">{study.category}</span>
        )}
        <h3 className="case-title">{study.title}</h3>
        <p className="case-summary">{study.summary}</p>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
