import { motion } from "framer-motion";
import "../../styles/services/servicesHero.css";

const videoVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.9,
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

export default function ServicesHero({ hero }) {
  return (
    <section className="services-hero">
      {/* Background Video */}
      <motion.video
        className="services-hero-video"
        src={hero.video}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        variants={videoVariants}
        initial="hidden"
        animate="show"
      />

      {/* Overlay */}
      <div className="services-hero-overlay" />

      {/* Content */}
      <motion.div
        className="services-hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={fadeUpVariants}>
          {hero.title}
        </motion.h1>

        <motion.ul
          className="services-hero-bullets"
          variants={fadeUpVariants}
        >
          {hero.bullets.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
