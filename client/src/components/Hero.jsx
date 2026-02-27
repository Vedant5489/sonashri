import { motion } from "framer-motion";
import "../styles/hero.css";
import heroVideo from "../assets/hero-video/hero.mp4";
import heroPoster from "../assets/hero-video/hero-poster.png";

const videoVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2.3, ease: "easeOut" }
  }
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
    },
  },
};

const textVariants = {
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

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background Video with Fade */}
      <motion.video
        className="hero-video"
        src={heroVideo}
        poster={heroPoster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        variants={videoVariants}
        initial="hidden"
        animate="visible"
      />

      <div className="hero-overlay" />

      {/* Content */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={textVariants}>
          Engineering Precision.
          <br />
          <span>From Design to Prototype.</span>
        </motion.h1>

        <motion.p variants={textVariants}>
          Automotive product design, prototyping and manufacturing
          excellence—powered by innovation, automation and engineering rigor.
        </motion.p>
      </motion.div>
    </section>
  );
}
