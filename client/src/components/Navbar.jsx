import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const isServicesActive = location.pathname.startsWith("/services");
  const isTrainingActive = location.pathname.startsWith("/training");
  const isCaseStudiesActive = location.pathname.startsWith("/case-studies");

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/" onClick={closeAll}>
            <img src={logo} alt="Sonashri Engineering & Solutions" />
          </NavLink>
        </div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>

        <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeAll}>
              Home
            </NavLink>
          </li>

          {/* SERVICES */}
          <li
            className={`services-dropdown ${
              isServicesActive ? "active" : ""
            } ${servicesOpen ? "open" : ""}`}
          >
            <button
              className="services-trigger"
              onClick={() => setServicesOpen(!servicesOpen)}
              type="button"
            >
              Services
              <span className={`chevron ${servicesOpen ? "open" : ""}`} />
            </button>

            <ul className={`services-menu ${servicesOpen ? "open" : ""}`}>
              <li>
                <NavLink to="/services/product-design" onClick={closeAll}>
                  Product Design
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/prototyping" onClick={closeAll}>
                  Prototyping
                </NavLink>
              </li>
            </ul>
          </li>

          <li className={isCaseStudiesActive ? "active" : ""}>
            <NavLink to="/case-studies" onClick={closeAll}>
              Case Studies
            </NavLink>
          </li>

          <li className={isTrainingActive ? "active" : ""}>
            <NavLink to="/training" onClick={closeAll}>
              Training and Career
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="contact-btn"
              onClick={closeAll}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
