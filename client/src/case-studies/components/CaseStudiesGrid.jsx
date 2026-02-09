import CaseStudyCard from "./CaseStudyCard";
import { CASE_STUDY_LAYOUT } from "../config/caseStudiesConfig";

const CaseStudiesGrid = ({ studies }) => {
  return (
    <div
      className="case-grid"
      style={{
        gridTemplateColumns: `repeat(${CASE_STUDY_LAYOUT.columns}, 1fr)`,
      }}
    >
      {studies.map((study) => (
        <CaseStudyCard key={study.id} study={study} />
      ))}
    </div>
  );
};

export default CaseStudiesGrid;
