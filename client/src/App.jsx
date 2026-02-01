import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDesign from "./pages/ProductDesign";
import Prototyping from "./pages/Prototyping";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/product-design" element={<ProductDesign />} />
        <Route path="/services/prototyping" element={<Prototyping />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
