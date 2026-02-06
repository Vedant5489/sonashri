import AdminSidebar from "./components/AdminSidebar";
import { Outlet } from "react-router-dom";
import "./styles/admin.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
