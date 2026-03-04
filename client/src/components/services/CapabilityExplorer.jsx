import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/services/capabilityExplorer.css";

const fadeSlide = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3 },
  },
};

export default function CapabilityExplorer({ capabilities }) {

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  if (!capabilities || capabilities.length === 0) return null;

  const active = capabilities?.[activeIndex];

  const hasSlideshow = active?.slideshow?.length > 0;

  const activeSlide = hasSlideshow
    ? active?.slideshow?.[slideIndex]
    : null;

  useEffect(() => {
    setSlideIndex(0);
  }, [activeIndex]);

  /* ---------- Navigation ---------- */

  const nextSlide = () => {
    if (!active?.slideshow) return;

    setSlideIndex((prev) =>
      prev === active.slideshow.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    if (!active?.slideshow) return;

    setSlideIndex((prev) =>
      prev === 0 ? active.slideshow.length - 1 : prev - 1
    );
  };

  /* ---------- Swipe Logic ---------- */

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {

    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    const threshold = 80; // prevents accidental swipes

    if (distance > threshold) nextSlide();
    if (distance < -threshold) prevSlide();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="capability-section">

      <div className="capability-container">

        <h2 className="capability-title">
          Our Capabilities
          <span className="capability-title-underline" />
        </h2>

        {/* Tabs */}

        <div className="capability-tabs">

          {capabilities.map((item, index) => (

            <button
              key={index}
              className={`capability-tab ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {item.title}
            </button>

          ))}

        </div>

        {/* Content */}

        <div className="capability-content">

          {/* Image / Slideshow */}

          <div className="capability-image">

            <div
              className="capability-image-frame"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >

              {hasSlideshow && (
                <button className="slide-arrow left" onClick={prevSlide}>
                  ‹
                </button>
              )}

              <AnimatePresence mode="wait">

                <motion.img
                  key={hasSlideshow ? activeSlide?.image : active?.image}
                  src={hasSlideshow ? activeSlide?.image : active?.image}
                  alt={active?.title}
                  variants={fadeSlide}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                />

              </AnimatePresence>

              {hasSlideshow && (
                <button className="slide-arrow right" onClick={nextSlide}>
                  ›
                </button>
              )}

              {hasSlideshow && (
                <div className="capability-pagination">

                  {active.slideshow.map((_, index) => (

                    <button
                      key={index}
                      className={`pagination-dot ${index === slideIndex ? "active" : ""}`}
                      onClick={() => setSlideIndex(index)}
                    />

                  ))}

                </div>
              )}

            </div>

          </div>

          {/* Text */}

          <div className="capability-text">

            <AnimatePresence mode="wait">

              <motion.div
                key={hasSlideshow ? activeSlide?.title : active?.title}
                variants={fadeSlide}
                initial="hidden"
                animate="show"
                exit="exit"
              >

                <h3>
                  {hasSlideshow ? activeSlide?.title : active?.title}
                </h3>

                {Array.isArray(hasSlideshow ? activeSlide?.description : active?.description) ? (

                  <ul className="capability-list">

                    {(hasSlideshow ? activeSlide?.description : active?.description).map((item, index) => (

                      <li key={index}>{item}</li>

                    ))}

                  </ul>

                ) : (

                  <p>
                    {hasSlideshow
                      ? activeSlide?.description
                      : active?.description}
                  </p>

                )}

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>

    </section>
  );
}