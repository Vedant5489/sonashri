import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import CaseStudiesHeader from "../components/CaseStudiesHeader";
import CaseStudiesGrid from "../components/CaseStudiesGrid";
import { CASE_STUDY_LAYOUT } from "../config/caseStudiesConfig";
import { fetchCaseStudies } from "../../api/caseStudies.api";
import Loader from "../../components/Loader";
import "../styles/caseStudies.css";

const CaseStudies = () => {
  const [allStudies, setAllStudies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(
    CASE_STUDY_LAYOUT.initialCount
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.title = "SES | Case Studies";
  }, []);

  useEffect(() => {
    fetchCaseStudies()
      .then((data) => {
        setAllStudies(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <Loader />
        <Footer />
      </>
    );
  }

  if (error) return <p>Failed to load case studies.</p>;

  return (
    <>
      <Navbar/>
      <section className="case-studies-page">
        <div className="case-studies-animate">
          <CaseStudiesHeader />

          <CaseStudiesGrid
            studies={allStudies.slice(0, visibleCount)}
          />

          {visibleCount < allStudies.length && (
            <div className="load-more-wrapper">
              <button
                className="load-more-btn"
                onClick={() =>
                  setVisibleCount((prev) => prev + CASE_STUDY_LAYOUT.loadStep)
                }
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default CaseStudies;
