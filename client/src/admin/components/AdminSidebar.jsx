import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import toast from "react-hot-toast";

const handleLogout = () => {
  localStorage.removeItem("admin_token");
  toast.success("Logged out");
  window.location.href = "/admin/login";
};

const handleNavClick = () => {
  if (window.innerWidth < 992) {
    setOpen(false);
  }
};

const AdminSidebar = ({ open, setOpen }) => {
  return (
    <div className={`admin-sidebar ${open ? "open" : ""}`}>
      <h2 className="admin-logo">Sonashri Admin</h2>

      <nav className="admin-nav">
        <NavLink to="/admin" end className="nav-item" onClick={handleNavClick}>
          Dashboard
        </NavLink>

        <NavLink to="/admin/training-requests" className="nav-item" onClick={handleNavClick}>
          Training Requests
        </NavLink>

        <NavLink to="/admin/case-studies" className="nav-item" onClick={handleNavClick}>
          Case Studies
        </NavLink>
      </nav>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};


export default AdminSidebar;
