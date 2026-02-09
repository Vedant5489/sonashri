import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

// Case Studies (Public)
import CaseStudies from "./case-studies/pages/CaseStudies";
import CaseStudiesLayout from "./case-studies/pages/CaseStudiesLayout";

// Admin
import Adminlogin from "./admin/pages/Adminlogin";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/pages/AdminDashboard";
import CaseStudiesAdmin from "./admin/pages/CaseStudies";
import TrainingRequests from "./admin/pages/TrainingRequests";
import ProtectedRoute from "./admin/ProtectedRoute";
import ProductDesign from "./pages/ProductDesign";
import Prototyping from "./pages/Prototyping";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= PUBLIC ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:id" element={<CaseStudiesLayout />} />

        <Route path="/services/product-design" element={<ProductDesign />} />
        <Route path="/services/prototyping" element={<Prototyping />} />

        {/* ================= ADMIN ================= */}
        <Route path="/admin/login" element={<Adminlogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="case-studies" element={<CaseStudiesAdmin />} />
          <Route path="training-requests" element={<TrainingRequests />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
