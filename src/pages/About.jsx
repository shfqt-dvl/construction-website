
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";

const features = [
  {
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=180&q=80",
    title: "Quality You Can Trust",
    description:
      "Construction and hardware products selected to meet your building requirements.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=180&q=80",
    title: "Established Brands",
    description:
      "Access products from recognised brands and explore available options.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=180&q=80",
    title: "Value-Driven Solutions",
    description:
      "Practical product choices and competitive pricing for your requirements.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=180&q=80",
    title: "Customer Commitment",
    description:
      "Helpful guidance and responsive assistance at every step.",
  },
];

export default function About() {
  const scrollToDetails = () => {
    document.getElementById("about-details")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="about-page">
      {/* FIRST SCREEN — MUSHAD INTRO */}

      <section className="about-intro">
        <div className="about-blueprint" />

        <div className="about-intro-top">
          <span>ABOUT MUSHAD</span>
          <div className="about-intro-line" />
          <span>OUR COMMITMENT TO QUALITY</span>
        </div>

        <div className="about-intro-center">
          <div className="about-intro-overline">
            BUILDING CONFIDENCE. CREATING VALUE.
          </div>

          <h1 className="about-image-word">MUSHAD</h1>

          <div className="about-intro-subtitle">
            CONSTRUCTION & HARDWARE STORE
          </div>

          <p className="about-intro-description">
            A dependable destination for construction materials,
            hardware products and solutions that support your
            building aspirations.
          </p>
        </div>
      </section>

      {/* COMPLETE ABOUT DETAILS */}

      <section className="about-details" id="about-details">

        {/* WHO WE ARE */}

        <section className="about-main">
          <div className="about-content">
            <span className="about-small-title">
              WHO WE ARE
            </span>

            <h2>
              Built on Trust.
              <strong>Driven by Quality.</strong>
            </h2>

            <p>
              MUSHAD Construction & Hardware Store, located in
              Khodaibagh, Garkha, Saran, Bihar, is committed to
              serving customers with dependable construction
              materials and hardware solutions.
            </p>

            <p>
              Our product portfolio includes cement, steel, TMT
              bars, paints, plumbing products, sanitary items,
              water tanks, construction chemicals and a wide
              range of hardware essentials.
            </p>

            <p>
              We believe that every building project deserves
              the right materials and informed choices. Through
              quality-focused product options, competitive
              pricing and customer-oriented assistance, we aim
              to make your purchasing experience convenient
              and reliable.
            </p>

            <div className="about-features">
              {features.map((feature) => (
                <div className="about-feature" key={feature.title}>
                  <div className="about-feature-image">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      loading="lazy"
                    />
                  </div>

                  <div className="about-feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/contact" className="about-contact-button">
              Connect With Us
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="about-main-visual">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1100&q=90"
              alt="Construction workers at a building site"
              loading="lazy"
            />

            <div className="about-image-caption">
              <span>OUR COMMITMENT</span>
              <strong>Supporting Every Stage of Construction</strong>
            </div>
          </div>
        </section>

        {/* STORE LOCATION */}

        <section className="about-location">
          <div className="about-location-image">
            <img
              src="/shop.jpg"
              alt="Mushad Construction and Hardware Store"
              loading="lazy"
            />
          </div>

          <div className="about-location-content">
            <span>VISIT OUR STORE</span>
            <h2>Mushad Construction & Hardware Store</h2>
            <p>
              Khodaibagh, Garkha, Saran, Bihar 841415
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Mushad+Construction+Hardware+Store+Khodaibagh+Garkha+Bihar+841415"
            target="_blank"
            rel="noopener noreferrer"
            className="about-location-button"
          >
            Get Directions
            <ArrowRight size={18} />
          </a>
        </section>

      </section>
    </main>
  );
}
