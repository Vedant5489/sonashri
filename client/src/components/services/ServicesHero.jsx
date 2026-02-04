import { motion } from "framer-motion";
import "../../styles/services/servicesHero.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ServicesHero({ hero }) {
  return (
    <section className="services-hero">
      <motion.video
        className="services-hero-video"
        src={hero.video}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="services-hero-gradient" />

      <motion.div
        className="services-hero-panel"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.span
          className="services-hero-domain"
          variants={fadeUp}
        >
          {hero.title.toUpperCase()}
        </motion.span>

        <motion.h1 variants={fadeUp}>
          {hero.title}
        </motion.h1>

        <motion.div
          className="services-hero-divider"
          variants={fadeUp}
        />

        <motion.ul
          className="services-hero-bullets"
          variants={fadeUp}
        >
          {hero.bullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
