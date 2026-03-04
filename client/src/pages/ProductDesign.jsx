import ServicesLayout from "../layouts/ServicesLayout";
import { productDesignData } from "../data/productDesign";
import { useEffect } from "react";

export default function ProductDesign() {
  useEffect(() => {
    document.title = "SES | Product Design";
  }, []);

  return <ServicesLayout data={productDesignData} />;
}
