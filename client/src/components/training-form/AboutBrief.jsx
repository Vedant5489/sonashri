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
        </h2>

        <p className="section-subtitle">
          We provide hands-on, industry-oriented training designed to bridge the gap between academic learning and real-world plant operations. Our programs combine practical shop-floor exposure with training in mechanical engineering software such as CAD-based design and digital engineering tools. By integrating technical skills, process understanding, and professional discipline, we prepare candidates to confidently contribute in modern manufacturing and product development environments.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutBrief;
