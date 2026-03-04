import Navbar from "../components/Navbar";
import ServicesHero from "../components/services/ServicesHero";
import ServicesOverview from "../components/services/ServicesOverview";
import CapabilityExplorer from "../components/services/CapabilityExplorer";
import PartsShowcase from "../components/services/PartsShowcase";
import ClientsStrip from "../components/ClientsStrip";
import CaseStudiesDisplay from "../components/CaseStudiesDisplay";
import Footer from "../components/Footer";

export default function ServicesLayout({
  data,
  showParts = false,
  showClients = false
}) {
  return (
    <>
      <Navbar />

      <ServicesHero hero={data.hero} />

      <ServicesOverview overview={data.overview} />

      <CapabilityExplorer capabilities={data.capabilities} />

      {showParts && <PartsShowcase />}

      {showClients && <ClientsStrip />}

      <CaseStudiesDisplay />

      <Footer />
    </>
  );
}