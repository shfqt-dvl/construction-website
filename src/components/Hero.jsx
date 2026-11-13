
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import "./Hero.css";

const slides = [
  {
    desktopSrc: "\himg1.png",
    mobileSrc: "\himg1-mobile.png",
    alt: "Building foundation construction",
    title: "STRENGTH",
    highlight: " IN EVERY STRUCTURE.",
  },
  {
    desktopSrc: "\himg2.png",
    mobileSrc: "himg2-mobile.png",
    alt: "Building plaster and painting work",
    title: "QUALITY",
    highlight: " IN EVERY DETAIL.",
  },
  {
    desktopSrc: "\himg3.png",
    mobileSrc: "himg3-mobile.png",
    alt: "Completed building roof construction",
    title: "STRENGTH",
    highlight: " IN EVERY BRICK.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // AUTOMATIC SLIDER
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // MANUAL SLIDE NAVIGATION
  const showSlide = (index) => {
    setCurrentSlide(index);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section
      className="hero"
      id="home"
      aria-label="Mushad Construction and Hardware Store"
    >
      {/* FULL SCREEN BACKGROUND SLIDER */}
      <div className="hero-background" aria-hidden="true">
        {slides.map((slide, index) => (
          <picture
            key={slide.desktopSrc}
            className={`hero-picture ${
              currentSlide === index ? "hero-image-active" : ""
            }`}
          >
            {/* MOBILE IMAGE */}
            <source
              media="(max-width: 760px)"
              srcSet={slide.mobileSrc}
            />

            {/* DESKTOP IMAGE */}
            <img
              className="hero-image"
              src={slide.desktopSrc}
              alt=""
              loading={index === 0 ? "eager" : "lazy"}
            />
          </picture>
        ))}
      </div>

      {/* IMAGE OVERLAY */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* HERO CONTENT */}
      <div className="hero-content" key={currentSlide}>
        <div className="hero-heading-wrap">
          <h1>
            {activeSlide.title}
            <span>{activeSlide.highlight}</span>
          </h1>
        </div>

        <div className="hero-buttons">
          <Link to="/products" className="btn btn-primary">
            Explore Products
            <ArrowRight size={18} aria-hidden="true" />
          </Link>

          <Link
            to="/contact#contact-form"
            className="btn btn-secondary"
          >
            <Phone size={17} aria-hidden="true" />
            CONTACT US
          </Link>
        </div>
      </div>

      {/* SLIDER DOTS */}
      <div
        className="hero-slider-dots"
        role="group"
        aria-label="Choose construction image"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.desktopSrc}
            type="button"
            className={
              index === currentSlide
                ? "hero-slider-dot active"
                : "hero-slider-dot"
            }
            onClick={() => showSlide(index)}
            aria-label={`Show image ${index + 1}`}
            aria-pressed={index === currentSlide}
          />
        ))}
      </div>
    </section>
  );
}