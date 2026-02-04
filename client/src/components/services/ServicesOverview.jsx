import { motion } from "framer-motion";
import "../../styles/services/servicesOverview.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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
        <motion.h2 className="services-overview-title" variants={fadeUp}>
          {overview.title}
          <span className="services-overview-underline" />
        </motion.h2>

        {/* Bullet Points */}
        <ul className="services-overview-list">
          {overview.points.map((point, index) => (
            <motion.li key={index} variants={fadeUp}>
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
