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
      <CaseStudiesDisplay />
      <Footer />
    </>
  );
}
