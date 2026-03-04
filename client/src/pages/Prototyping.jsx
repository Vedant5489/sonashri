import ServicesLayout from "../layouts/ServicesLayout";
import { prototypingData } from "../data/prototyping";
import { useEffect } from "react";

export default function Prototyping() {
  useEffect(() => {
    document.title = "SES | Product Design";
  }, []);
  return <ServicesLayout data={prototypingData} />;
}
