import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhatWeOffer from "../components/WhatWeOffer";
import CaseStudiesDisplay from "../components/CaseStudiesDisplay";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeOffer />
      <CaseStudiesDisplay
        title="Our Recent Work"
        subtitle="Practical engineering and digital solutions delivering measurable business impact."
        limit={3}
      />
      <Footer />
    </>
  );
}
