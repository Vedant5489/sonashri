import Navbar from "../components/Navbar";
import ServicesHero from "../components/services/ServicesHero";
import ServicesOverview from "../components/services/ServicesOverview";
import CapabilityExplorer from "../components/services/CapabilityExplorer";
import CaseStudiesDisplay from "../components/CaseStudiesDisplay";
import Footer from "../components/Footer";

export default function ServicesLayout({ data }) {
  return (
    <>
      <Navbar />

      <ServicesHero hero={data.hero} />

      <ServicesOverview overview={data.overview} />

      <CapabilityExplorer capabilities={data.capabilities} />

      <CaseStudiesDisplay />

      <Footer />
    </>
  );
}
