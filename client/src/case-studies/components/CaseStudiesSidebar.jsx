import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCaseStudies } from "../../api/caseStudies.api";
import Loader from "../../components/Loader";
const CaseStudiesSidebar = () => {
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    fetchCaseStudies()
      .then((data) => {
        if (Array.isArray(data)) setStudies(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="case-sidebar">
        <Loader />
      </div>
    );
  }

  return (
    <div className="case-sidebar">
      <button
        className="case-back-btn"
        onClick={() => navigate("/case-studies")}
      >
        ← Back to all case studies
      </button>

      <div className="case-sidebar-list">
        {studies.map((cs) => (
          <div
            key={cs.id}
            className={`case-sidebar-item ${
              String(cs.id) === id ? "active" : ""
            }`}
            onClick={() => navigate(`/case-studies/${cs.id}`)}
          >
            <h4>{cs.title}</h4>
            <p>{cs.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesSidebar;