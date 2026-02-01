import { motion } from "framer-motion";
import "../../styles/services/servicesCaseStudies.css";

// Temporary preview data (later from DB)
const previewCases = [
  {
    title: "Motorcycle Chassis Design Validation",
    tag: "Product Design",
    summary:
      "Structural design and validation of a lightweight motorcycle front chassis optimized for strength and manufacturability.",
  },
  {
    title: "EV Motor Housing CNC Prototype",
    tag: "Prototyping",
    summary:
      "CNC prototyping and dimensional validation of an electric motor housing for early-stage testing.",
  },
  {
    title: "Manufacturing Feasibility Assessment",
    tag: "Research",
    summary:
      "Engineering feasibility and process evaluation for scalable automotive component production.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 24,
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

export default function ServicesCaseStudies() {
  return (
    <section className="services-cases">
      <motion.div
        className="services-cases-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        {/* Heading */}
        <motion.h2 variants={fadeUpVariants}>
          Selected Case Studies
        </motion.h2>

        <motion.p className="services-cases-intro" variants={fadeUpVariants}>
          A snapshot of our engineering work across design, prototyping, and
          manufacturing-focused projects.
        </motion.p>

        {/* Cards */}
        <div className="services-cases-grid">
          {previewCases.map((item, index) => (
            <motion.div
              key={index}
              className="services-case-card"
              variants={fadeUpVariants}
            >
              <span className="services-case-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="services-cases-cta"
          variants={fadeUpVariants}
        >
          <button className="btn-secondary">View More Case Studies</button>
        </motion.div>
      </motion.div>
    </section>
  );
}
