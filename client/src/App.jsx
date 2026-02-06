import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDesign from "./pages/ProductDesign";
import Prototyping from "./pages/Prototyping";
import ScrollToTop from "./components/ScrollToTop";

/* Admin */
import AdminLogin from "./admin/pages/AdminLogin";
import ProtectedRoute from "./admin/ProtectedRoute";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/pages/AdminDashboard";
import TrainingRequests from "./admin/pages/TrainingRequests";
import CaseStudies from "./admin/pages/CaseStudies";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* ================= PUBLIC WEBSITE ================= */}
        <Route path="/" element={<Home />} />
        <Route
          path="/services/product-design"
          element={<ProductDesign />}
        />
        <Route
          path="/services/prototyping"
          element={<Prototyping />}
        />

        {/* ================= ADMIN LOGIN (PUBLIC) ================= */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ================= ADMIN (PROTECTED) ================= */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="training" element={<TrainingRequests />} />
          <Route path="case-studies" element={<CaseStudies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
