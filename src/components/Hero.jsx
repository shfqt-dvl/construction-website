import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

import bg1 from "../assets/projects/project1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/projects/project4.jpg";
import bg4 from "../assets/bg4.jpg";
import bg5 from "../assets/bg5.jpg";
import bg6 from "../assets/projects/project2.jpg";

function Hero() {
  const backgrounds = [bg5, bg2, bg3, bg4, bg1, bg6];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) =>
        current === backgrounds.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(15, 23, 42, 0.65),
            rgba(15, 23, 42, 0.72)
          ),
          url(${backgrounds[currentSlide]})
        `,
      }}
    >
      <div className="hero-overlay">

        <div className="hero-content hero-animation">

          {/* Company Name */}
          <div className="hero-brand">
            <div className="hero-brand-main">
              MUSHAD
            </div>

            <div className="hero-brand-sub">
              Construction & Hardware Store
            </div>
          </div>

          {/* Main Heading */}
          <h1>
            Your Trusted Partner for Premium
            Construction & Hardware Solutions
          </h1>

          {/* Description */}
          <p>
            Mushad Construction & Hardware Store provides quality
            construction materials including cement, steel, paints,
            sanitary items, plumbing products, hardware tools, and
            more — all under one roof.
          </p>

          {/* Highlights */}
          <div className="hero-points">
            <span>✔ Quality Materials</span>
            <span>✔ Trusted Service</span>
            <span>✔ Complete Construction Solutions</span>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">

            <Link
              to="/products"
              className="hero-btn"
            >
              Explore Products
            </Link>

            <Link
              to="/contact"
              className="hero-btn secondary"
            >
              Contact Us
            </Link>

          </div>

          {/* Slider Dots */}
          <div className="hero-dots">
            {backgrounds.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "hero-dot active"
                    : "hero-dot"
                }
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;