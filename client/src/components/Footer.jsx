import { motion } from "framer-motion";
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
            engineering solutions built for the future.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Training & Career</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Pune, Maharashtra, India</p>
          <p>contact@sonashri.com</p>
          <p>+91 9XXXXXXXXX</p>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Sonashri Engineering & Solutions. All rights
        reserved.
      </div>
    </footer>
  );
}
