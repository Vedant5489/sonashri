import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import CaseStudiesSidebar from "../components/CaseStudiesSidebar";
import CaseStudyDetail from "./CaseStudyDetail";
import "../styles/caseStudiesLayout.css";
import { useState } from "react";


const CaseStudiesLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar />

      <div className="case-layout">
        <button
          className="case-sidebar-toggle"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          Case Studies
        </button>

        <aside className={`case-layout-left ${sidebarOpen ? "open" : ""}`}>
          <CaseStudiesSidebar />
        </aside>

        <main className="case-layout-right">
          <CaseStudyDetail />
        </main>
      </div>
      <Footer/>
    </>
  );
};

export default CaseStudiesLayout;
