import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/contact.css";
import aboutBg from "../assets/about-bg.png";

/* ===== VALUE DRIVERS DATA ===== */
const valueDrivers = [
  {
    title: "Best Cost Structure",
    text: "Flexible business model as per client’s need like Time and Material, Fixed Bid",
  },
  {
    title: "Deliverables of Highest Quality",
    text: "Ensured by team of experienced engineers",
  },
  {
    title: "Strict Adherence",
    text: "To delivery schedules",
  },
  {
    title: "Subject Matter Experts",
    text: "Teams led by highly qualified experts with international experience",
  },
  {
    title: "Data Security",
    text: "Highest level strict control over biometric access and authorization rights",
  },
  {
    title: "Non-Disclosure Agreements",
    text: "Strict adherence to NDAs ensured by high level of ethics and stringent legal code",
  },
  {
    title: "Clear & Concise Communication",
    text: "Transparent communication with client",
  },
  {
    title: "Project Execution Excellence",
    text: "Established processes and excellent project management skills ensuring error free delivery",
  },
];

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.8, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};
const Contact = () => {
  const [current, setCurrent] = useState(0);
  const [typedText, setTypedText] = useState("");
  const typingSpeed = 35; // speed per character

  useEffect(() => {
    document.title = "About Us";
  }, []);

  // Typewriter and 
  useEffect(() => {
  let typingTimeout;
  let slideTimeout;

  const fullText = valueDrivers[current].text;

  // 1️⃣ Typing logic
  if (typedText.length < fullText.length) {
    typingTimeout = setTimeout(() => {
      setTypedText(fullText.slice(0, typedText.length + 1));
    }, typingSpeed);
  } 
  // 2️⃣ When typing finishes → wait 1 second → change slide
  else {
    slideTimeout = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % valueDrivers.length);
      setTypedText(""); // reset for next slide
    }, 1200);
  }

  return () => {
    clearTimeout(typingTimeout);
    clearTimeout(slideTimeout);
  };
}, [typedText, current]);

  /* ===== FADE UP + MARQUEE ACTIVATION ===== */
  useEffect(() => {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          // 👇 Stop observing after first animation
          observerInstance.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <>
    {/* ================= HERO IMAGE SECTION ================= */}
      <section className="contact-hero">
        <motion.img
          src={aboutBg}
          alt="About Background"
          className="contact-hero-image"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        />

        <div className="contact-hero-overlay" />

        <motion.div
          className="contact-hero-content"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="contact-hero-tag">
            SONASHRI ENGINEERING & SOLUTIONS
          </span>

          <h1 className="contact-hero-title">
            About <span>Us</span>
          </h1>

          <div className="contact-hero-underline" />
        </motion.div>
      </section>
    <section className="contact-section">
      <div className="container">
        {/* ================= ABOUT ================= */}
        <div className="contact-header fade-up">          

          <div className="about-content">
            <p>
              For over seven years, Sonashri Engineering & Solutions Pvt Ltd
              has been delivering high-impact engineering services to the global
              Mechanical and Automotive industry.
            </p>

            <p>
              We are a CAD-powered engineering partner transforming concepts
              into production-ready realities through precision design, smart
              development, and agile prototyping solutions.
            </p>

            <h3 className="sub-title">Who We Are</h3>
            <ul>
              <li>
                Next-generation engineering services company driven by
                innovation, speed, and technical excellence.
              </li>
              <li>
                Support across full product lifecycle ensuring accuracy,
                manufacturability, and performance.
              </li>
            </ul>

            <h3 className="sub-title">What We Do</h3>
            <ul>
              <li>
                <strong>CAD-Powered Design Excellence:</strong> Advanced 3D
                modeling, engineering detailing, and system-level development.
              </li>
              <li>
                <strong>Development & Prototyping Solutions:</strong> Rapid
                prototyping, validation support, and manufacturing-ready
                engineering.
              </li>
              <li>
                <strong>Engineering Staffing Solutions:</strong> Connecting OEMs
                and Tier suppliers with highly skilled professionals.
              </li>
            </ul>

            <h3 className="sub-title">Why We Stand Out</h3>
            <ul>
              <li>Integrated design-to-prototype capabilities</li>
              <li>Strong automotive domain expertise</li>
              <li>Agile project execution</li>
              <li>Skilled engineering workforce</li>
              <li>Global service mindset</li>
            </ul>
          </div>
        </div>

        {/* ================= VISION / MISSION / GOAL ================= */}
        <div className="vmg-section fade-up">

          {/* Vision */}
          <div className="vmg-card">
            <div className="vmg-icon">
              <svg viewBox="0 0 64 64" className="vmg-svg">
                <circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M6 32h52M32 6c8 8 8 44 0 52M32 6c-8 8-8 44 0 52" 
                      fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Vision</h3>
            <p>
              To be a trusted global engineering partner enabling innovation,
              accelerating product development, and strengthening the future of
              mobility and mechanical engineering
            </p>
          </div>

          {/* Mission */}
          <div className="vmg-card">
            <div className="vmg-icon">
              <svg viewBox="0 0 64 64" className="vmg-svg">
                <path d="M12 52L52 12" stroke="currentColor" strokeWidth="3" fill="none"/>
                <polygon points="42,12 52,12 52,22" fill="currentColor"/>
              </svg>
            </div>
            <h3>Mission</h3>
            <p>
              Drive profitable & sustainable growth by delivering excellence
              Customer Oriented & Innovation Focused.
            </p>
          </div>

          {/* Goal */}
          <div className="vmg-card">
            <div className="vmg-icon">
              <svg viewBox="0 0 64 64" className="vmg-svg">
                <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="32" cy="32" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="32" cy="32" r="3" fill="currentColor"/>
              </svg>
            </div>
            <h3>Goal</h3>
            <p>
              To deliver world-Class engineering, empower exceptional talent,
              build lasting partnerships that drive sustainable growth and
              industry leadership
            </p>
          </div>

        </div>

        {/* ================= VALUE DRIVERS SLIDESHOW ================= */}
        <div className="value-drivers-section fade-up">
          <h2 className="section-title">
            Value Drivers for Excellence in Client Engagements
          </h2>

          <div className="value-slider">
            <div key={current} className="value-slide">
              <div className="value-content">
                <div className="value-icon">
                  {current === 0 && (
                    <svg viewBox="0 0 64 64" className="value-svg">
                      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path d="M20 32h24" stroke="currentColor" strokeWidth="4"/>
                    </svg>
                  )}

                  {current === 1 && (
                    <svg viewBox="0 0 64 64" className="value-svg">
                      <polygon points="32,8 56,56 8,56" stroke="currentColor" strokeWidth="4" fill="none"/>
                    </svg>
                  )}

                  {current === 2 && (
                    <svg viewBox="0 0 64 64" className="value-svg">
                      <path d="M16 32h32M32 16v32" stroke="currentColor" strokeWidth="4"/>
                    </svg>
                  )}

                  {current === 3 && (
                    <svg viewBox="0 0 64 64" className="value-svg">
                      <circle cx="32" cy="24" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path d="M16 56c4-12 28-12 32 0" stroke="currentColor" strokeWidth="4" fill="none"/>
                    </svg>
                  )}

                  {current === 4 && (
                    <svg viewBox="0 0 64 64" className="value-svg">
                      <rect x="16" y="20" width="32" height="28" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path d="M24 20v-8h16v8" stroke="currentColor" strokeWidth="4"/>
                    </svg>
                  )}

                  {current === 5 && (
                    <svg viewBox="0 0 64 64" className="value-svg">
                      <rect x="16" y="16" width="32" height="40" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <line x1="24" y1="28" x2="40" y2="28" stroke="currentColor" strokeWidth="4"/>
                      <line x1="24" y1="36" x2="40" y2="36" stroke="currentColor" strokeWidth="4"/>
                    </svg>
                  )}

                  {current === 6 && (
                    <svg viewBox="0 0 64 64" className="value-svg">
                      <path d="M16 48l32-32" stroke="currentColor" strokeWidth="4"/>
                      <circle cx="48" cy="16" r="6" stroke="currentColor" strokeWidth="4" fill="none"/>
                    </svg>
                  )}

                  {current === 7 && (
                    <svg viewBox="0 0 64 64" className="value-svg">
                      <rect x="16" y="16" width="10" height="32" fill="currentColor"/>
                      <rect x="32" y="24" width="10" height="24" fill="currentColor"/>
                      <rect x="48" y="32" width="10" height="16" fill="currentColor"/>
                    </svg>
                  )}
                </div>

                <div className="value-text">
                  <h3>{valueDrivers[current].title}</h3>
                  <p>{typedText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CLIENT STRIP ================= */}
        <div className="clients-section fade-up">
          <h2 className="section-title section-title-center">
            Our Valuable Clients
          </h2>

          <div className="marquee">
            <div className="track-wrapper">
              <div className="track left">
                <img src="/clients/hinduja.png" alt="" />
                <img src="/clients/renault.png" alt="" />
                <img src="/clients/tvs.png" alt="" />
                <img src="/clients/philips.png" alt="" />
                <img src="/clients/john.png" alt="" />
                <img src="/clients/mahindra.png" alt="" />
                <img src="/clients/jbm.png" alt="" />

                {/* Duplicate for seamless loop */}
                <img src="/clients/hinduja.png" alt="" />
                <img src="/clients/renault.png" alt="" />
                <img src="/clients/tvs.png" alt="" />
                <img src="/clients/philips.png" alt="" />
                <img src="/clients/john.png" alt="" />
                <img src="/clients/mahindra.png" alt="" />
                <img src="/clients/jbm.png" alt="" />
              </div>
            </div>
          </div>

          <div className="marquee">
            <div className="track-wrapper">
              <div className="track right">
                <img src="/clients/3dp.png" alt="" />
                <img src="/clients/avl.png" alt="" />
                <img src="/clients/cummins.png" alt="" />
                <img src="/clients/suzuki.png" alt="" />
                <img src="/clients/magna.png" alt="" />
                <img src="/clients/eka.png" alt="" />
                <img src="/clients/ather.png" alt="" />

                {/* Duplicate */}
                <img src="/clients/3dp.png" alt="" />
                <img src="/clients/avl.png" alt="" />
                <img src="/clients/cummins.png" alt="" />
                <img src="/clients/suzuki.png" alt="" />
                <img src="/clients/magna.png" alt="" />
                <img src="/clients/eka.png" alt="" />
                <img src="/clients/ather.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;