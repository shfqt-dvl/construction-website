
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import "./Services.css";

const features = [
  "Industrial building construction",
  "Warehouse and storage facilities",
  "Industrial flooring and foundations",
  "Structural construction support",
  "Construction material coordination",
  "Durable building solutions",
];

export default function Industrial() {
  return (
    <main className="service-detail-page">
      {/* Industrial Hero Section */}
      <section className="service-detail-hero industrial-hero">
        <div className="service-detail-content">
          <span className="service-eyebrow">
            INDUSTRIAL CONSTRUCTION
          </span>

          <h1>
            Strength for
            <br />
            <span>Industry.</span>
          </h1>

          <p>
            Explore practical construction solutions for
            industrial buildings, warehouses and facilities
            where durability and functionality matter.
          </p>

          <Link to="/contact" className="service-detail-button">
            Discuss Your Project <ArrowRight size={18} />
          </Link>
        </div>

        <img
          src="/indus.jpg"
          alt="Industrial facility construction"
          className="service-detail-image"
        />
      </section>

      {/* Industrial Features Section */}
      <section className="service-detail-section">
        <div className="service-detail-heading">
          <span>OUR EXPERTISE</span>

          <h2>Industrial Construction Solutions</h2>

          <p>
            Construction support for industrial facilities,
            storage areas and operational spaces.
          </p>
        </div>

        <div className="service-feature-grid">
          {features.map((feature) => (
            <article className="service-feature-card" key={feature}>
              <CheckCircle size={23} />
              <h3>{feature}</h3>
            </article>
          ))}
        </div>
      </section>

      {/* Industrial CTA Section */}
      <section className="service-detail-cta">
        <h2>Planning an Industrial Project?</h2>

        <p>
          Discuss your construction and building material needs.
        </p>

        <Link to="/contact" className="service-detail-button">
          Contact Us <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
