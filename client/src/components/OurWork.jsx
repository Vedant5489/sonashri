import { motion } from "framer-motion";
import "../styles/ourWork.css";

// Temporary mock data (will come from DB later)
const workData = [
  {
    id: 1,
    title: "Motorcycle Chassis Development",
    category: "Product Design",
    description:
      "Design and validation of a high-strength motorcycle front chassis with optimized weight and durability.",
  },
  {
    id: 2,
    title: "CNC Prototyping for EV Components",
    category: "Prototyping",
    description:
      "Rapid prototyping and tolerance validation for electric motor housing components.",
  },
  {
    id: 3,
    title: "Manufacturing Feasibility Study",
    category: "Research",
    description:
      "Process optimization and tooling feasibility study for mass-scale automotive production.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
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

export default function OurWork() {
  return (
    <section className="work-section">
      <motion.div
        className="work-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <motion.h2 variants={fadeUpVariants}>
          Our Work
        </motion.h2>

        <motion.p className="work-intro" variants={fadeUpVariants}>
          A glimpse into our engineering expertise through selected case studies,
          prototypes, and research-driven projects.
        </motion.p>

        {/* Work Grid */}
        <div className="work-grid">
          {workData.map((item) => (
            <motion.div
              key={item.id}
              className="work-card"
              variants={fadeUpVariants}
            >
              <span className="work-category">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
