import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <NavLink to="/" onClick={closeMenu}>
            <img src={logo} alt="Sonashri Engineering & Solutions" />
          </NavLink>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>

        {/* Links */}
        <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services/product-design"
              onClick={closeMenu}
            >
              Product Design
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services/prototyping"
              onClick={closeMenu}
            >
              Prototyping
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="contact-btn"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
