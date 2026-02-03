import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/whatWeOffer.css";

import productDesignImg from "../assets/product-design.jpg";
import prototypingImg from "../assets/prototyping.jpg";

/* Motion-enabled Link */
const MotionLink = motion(Link);

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

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
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export default function WhatWeOffer() {
  return (
    <section className="offer-section">
      <motion.div
        className="offer-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <motion.h2 className="offer-title" variants={fadeUpVariants}>
          Our Solutions
          <span className="offer-underline" />
        </motion.h2>

        {/* Intro */}
        <motion.p className="offer-intro" variants={fadeUpVariants}>
          Engineering-driven solutions for the automotive industry, covering the
          complete journey from concept to realization.
        </motion.p>

        {/* Cards */}
        <div className="offer-cards">
          {/* Product Design */}
          <MotionLink
            to="/services/product-design"
            className="offer-card"
            variants={fadeUpVariants}
          >
            <img src={productDesignImg} alt="Product Design" />
            <div className="offer-card-content">
              <h3>Product Design</h3>
              <p>
                Concept-to-CAD engineering focused on performance, strength, and
                manufacturability.
              </p>
            </div>
          </MotionLink>

          {/* Prototyping */}
          <MotionLink
            to="/services/prototyping"
            className="offer-card"
            variants={fadeUpVariants}
          >
            <img src={prototypingImg} alt="Prototyping" />
            <div className="offer-card-content">
              <h3>Prototyping</h3>
              <p>
                Rapid CNC and validation workflows to bring designs into
                real-world form.
              </p>
            </div>
          </MotionLink>
        </div>
      </motion.div>
    </section>
  );
}
