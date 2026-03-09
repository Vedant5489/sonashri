import CaseStudyCard from "./CaseStudyCard";

const CaseStudiesGrid = ({ studies }) => {
  return (
    <div className="case-grid">
      {studies.map((study) => (
        <CaseStudyCard key={study.id} study={study} />
      ))}
    </div>
  );
};

export default CaseStudiesGrid;