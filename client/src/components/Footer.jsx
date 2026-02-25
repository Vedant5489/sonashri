import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import logo from "../assets/logo.png";

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Brand */}
        <div className="footer-brand">
          <img src={logo} alt="Sonashri Engineering & Solutions" />
          <p>
            Precision-driven automotive product design, prototyping, and
            engineering solutions built with reliability, performance, and
            long-term value at the core.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services/product-design">
                Product Design
              </Link>
            </li>
            <li>
              <Link to="/services/prototyping">
                Prototyping
              </Link>
            </li>
            <li>
              <Link to="/training">Training & Career</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Pune, Maharashtra, India</p>

          <p>
            <a href="mailto:info@sonashriengineering.com">
              info@sonashriengineering.com
            </a>
          </p>

          <p>
            <a href="tel:+919876543210">
              +91 98765 43210
            </a>
          </p>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Sonashri Engineering & Solutions. 
        All rights reserved.
      </div>
    </footer>
  );
}