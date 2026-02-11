import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const AboutBrief = () => {
  return (
    <section className="training-about">
      <motion.div
        className="container"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="section-title">
          About Our Training
          <span className="brand-underline" />
        </h2>

        <p className="section-subtitle">
          We provide hands-on industry-oriented training designed to bridge
          the gap between academic learning and real-world plant operations.
          Our programs focus on practical exposure, digital tools, process
          optimization, and professional discipline — preparing candidates to
          confidently contribute in modern manufacturing environments.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutBrief;
