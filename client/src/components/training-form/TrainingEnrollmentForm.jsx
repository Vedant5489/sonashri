import { motion } from "framer-motion";
import { useState } from "react";
import { submitTrainingRequest } from "../../api/training.api";
import toast from "react-hot-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const TrainingEnrollmentForm = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    qualification: "",
    interestArea: "",
    message: "",
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      await submitTrainingRequest(formData);
      setLoading(false);
      
      toast.success("Application submitted successfully!");
      
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        qualification: "",
        interestArea: "",
        message: "",
      });

    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };
  
  return (
    <section className="training-form-section">
      <motion.div
        className="container"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="section-title">
          Training Enrollment Form
          <span className="brand-underline" />
        </h2>

        <p className="section-subtitle">
          Fill in your details below to express your interest in joining our
          industry training programs.
        </p>

        <form className="training-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="qualification"
            placeholder="Highest Qualification"
            value={formData.qualification}
            onChange={handleChange}
          />

          <input
            type="text"
            name="interestArea"
            placeholder="Area of Interest (Design / ERP / Manufacturing etc.)"
            value={formData.interestArea}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Tell us briefly about yourself or your expectations..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
        </button>

        </form>
      </motion.div>
    </section>
  );
};

export default TrainingEnrollmentForm;
