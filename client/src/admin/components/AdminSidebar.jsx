import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import toast from "react-hot-toast";

const handleLogout = () => {
  localStorage.removeItem("admin_token");
  toast.success("Logged out");
  window.location.href = "/admin/login";
};

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <h2 className="admin-logo">Sonashri Admin</h2>

      <nav>
        <NavLink to="/admin" end>
          Dashboard
        </NavLink>
        <NavLink to="/admin/training">
          Training Requests
        </NavLink>
        <NavLink to="/admin/case-studies">
          Case Studies
        </NavLink>
        <NavLink to="/admin/recent-works">
          Recent Works
        </NavLink>
        <button onClick={handleLogout}>Logout</button>

      </nav>
    </aside>
  );
};

export default AdminSidebar;
