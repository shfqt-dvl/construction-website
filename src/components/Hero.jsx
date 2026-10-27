import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MaskedHeading from "../components/MaskedHeading";
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
            rgba(35, 45, 60, 0.70),
            rgba(35, 45, 60, 0.76)
          ),
          url(${backgrounds[currentSlide]})
        `,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content hero-animation">

          {/* BRAND NAME */}

          <div className="hero-brand">
            <MaskedHeading
              tag="div"
              className="hero-brand-main"
              text="MUSHAD"
              duration={0.9}
              stagger={0.08}
              trigger="view"
              align="center"
              weight={900}
              tracking={-0.02}
              lineHeight={1.05}
            />

            <div className="hero-brand-sub">
              Construction &amp; Hardware Store
            </div>
          </div>

          {/* MAIN HEADING */}

          <h1>
            Your Trusted Partner for Premium
            <br />
            Construction &amp; Hardware Solutions
          </h1>

          {/* DESCRIPTION */}

          <p className="hero-description">
            Mushad Construction &amp; Hardware Store provides quality
            construction materials including cement, steel, paints,
            sanitary items, plumbing products, hardware tools, and
            more — all under one roof.
          </p>

          {/* HIGHLIGHTS */}

          <div className="hero-points">
            <span>✔ Quality Materials</span>
            <span>✔ Trusted Service</span>
            <span>✔ Complete Construction Solutions</span>
          </div>

          {/* BUTTONS */}

          <div className="hero-buttons">
            <Link to="/products" className="hero-btn">
              Explore Products
            </Link>

            <Link to="/contact" className="hero-btn secondary">
              Contact Us
            </Link>
          </div>

          {/* BACKGROUND SLIDER DOTS */}

          <div className="hero-dots">
            {backgrounds.map((_, index) => (
              <button
                key={index}
                type="button"
                className={
                  currentSlide === index
                    ? "hero-dot active"
                    : "hero-dot"
                }
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={
                  currentSlide === index ? "true" : undefined
                }
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;