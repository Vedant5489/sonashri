import { useState } from "react";
import AdminSidebar from "./components/AdminSidebar";
import { Outlet } from "react-router-dom";
import "./styles/admin.css";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">
      {/* Mobile toggle button */}
      <button
        className={`admin-sidebar-toggle ${sidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span className={`toggle-text ${sidebarOpen ? "fade-in" : "fade-out"}`}>
          {sidebarOpen ? "← Back" : "☰ Menu"}
        </span>
      </button>


      {/* Backdrop (click-away) */}
      {sidebarOpen && (
        <div
          className="admin-backdrop"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
