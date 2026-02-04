import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/services/capabilityExplorer.css";

const fadeSlide = {
  hidden: { opacity: 0, y: 5 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3 },
  },
};

export default function CapabilityExplorer({ capabilities }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = capabilities[activeIndex];

  return (
    <section className="capability-section">
      <div className="capability-container">
        {/* Heading */}
        <h2 className="capability-title">
          Our Capabilities
          <span className="capability-title-underline" />
        </h2>

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
          {/* Image */}
          <div className="capability-image">
            <div className="capability-image-frame">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.image}
                  src={active.image}
                  alt={active.title}
                  variants={fadeSlide}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                />
              </AnimatePresence>
            </div>
          </div>


          {/* Text */}
          <div className="capability-text">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                variants={fadeSlide}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <h3>{active.title}</h3>
                <p>{active.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
