import { motion } from "framer-motion";
import "../../styles/services/servicesOverview.css";

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

export default function ServicesOverview({ overview }) {
  return (
    <section className="services-overview">
      <motion.div
        className="services-overview-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        {/* Heading */}
        <motion.h2 variants={fadeUpVariants}>
          {overview.title}
        </motion.h2>

        {/* Bullet Points */}
        <ul className="services-overview-list">
          {overview.points.map((point, index) => (
            <motion.li key={index} variants={fadeUpVariants}>
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
