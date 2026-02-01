import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/services/capabilityExplorer.css";

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

export default function CapabilityExplorer({ capabilities }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = capabilities[activeIndex];

  return (
    <section className="capability-section">
      <motion.div
        className="capability-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <motion.h2 variants={fadeUpVariants}>
          Our Capabilities
        </motion.h2>

        <motion.p className="capability-intro" variants={fadeUpVariants}>
          A closer look at how we deliver value across every stage of the
          engineering process.
        </motion.p>

        <div className="capability-layout">
          {/* Tabs */}
          <div className="capability-tabs">
            {capabilities.map((item, index) => (
              <button
                key={index}
                className={`capability-tab ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="capability-content">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeItem.image}
                src={activeItem.image}
                alt={activeItem.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.title}
                className="capability-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h3>{activeItem.title}</h3>
                <p>{activeItem.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
