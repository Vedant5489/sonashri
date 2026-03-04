// src/components/services/PartsShowcase.jsx

import { useState, useRef } from "react";
import "../../styles/services/partsShowcase.css";

import part1 from "../../assets/prototyping/parts/part1.png";
import part2 from "../../assets/prototyping/parts/part2.png";
import part3 from "../../assets/prototyping/parts/part3.png";
import part4 from "../../assets/prototyping/parts/part4.png";
import part5 from "../../assets/prototyping/parts/part5.png";
import part6 from "../../assets/prototyping/parts/part6.png";
import part7 from "../../assets/prototyping/parts/part7.png";
import part8 from "../../assets/prototyping/parts/part8.png";
import part9 from "../../assets/prototyping/parts/part9.png";
import part10 from "../../assets/prototyping/parts/part10.png";

const parts = [
  { image: part1, name: "Front Fender 2WL" },
  { image: part2, name: "End Cap" },
  { image: part3, name: "2W Chassis Parts" },
  { image: part4, name: "Battery Top Cover" },
  { image: part5, name: "Fuel Tank 2WL" },
  { image: part6, name: "Silencer Shield" },
  { image: part7, name: "Fuel lid Assembly" },
  { image: part8, name: "2W Brace" },
  { image: part9, name: "Engine Mount Assembly" },
  { image: part10, name: "Water Through - Export item" },
];

export default function PartsShowcase() {
  const [index, setIndex] = useState(0);

  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  const next = () =>
    setIndex((prev) => (prev === parts.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setIndex((prev) => (prev === 0 ? parts.length - 1 : prev - 1));

  /* Swipe handling */

  const handleTouchStart = (e) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;

    const dist = touchStart.current - touchEnd.current;

    if (dist > 50) next();
    if (dist < -50) prev();

    touchStart.current = null;
    touchEnd.current = null;
  };

  const active = parts[index];

  return (
    <section className="parts-section">
      <div className="parts-container">

        <h2 className="parts-title">
          Prototype Components
        </h2>

        <div
          className="parts-slider"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

          <button className="parts-arrow left" onClick={prev}>
            ‹
          </button>

          <img src={active.image} alt={active.name} />

          <div className="parts-overlay">
            {active.name}
          </div>

          <button className="parts-arrow right" onClick={next}>
            ›
          </button>

          <div className="parts-pagination">
            {parts.map((_, i) => (
              <button
                key={i}
                className={`parts-dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}