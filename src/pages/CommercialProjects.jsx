import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import "./Services.css";

const details = [
  "Office and commercial building requirements",
  "Retail shops and showroom spaces",
  "Structural and civil construction",
  "Commercial building materials and finishing",
];

export default function CommercialProjects() {
  return (
    <main className="service-detail-page">
      <section className="service-detail-hero commercial-hero">
        <div className="service-detail-content">
          <span className="service-eyebrow">
            PROJECT CATEGORY / COMMERCIAL
          </span>

          <h1>
            Commercial
            <br />
            <span>Building Projects.</span>
          </h1>

          <p>
            Explore commercial construction requirements
            for offices, retail properties, showrooms and
            business spaces.
          </p>

          <Link to="/contact" className="service-detail-button">
            Discuss a Project <ArrowRight size={18} />
          </Link>
        </div>

        <img
          src="/comerical.webp"
          alt="Commercial construction project"
          className="service-detail-image"
        />
      </section>

      <section className="service-detail-section">
        <div className="service-detail-heading">
          <span>PROJECT OVERVIEW</span>
          <h2>Commercial Construction</h2>
          <p>
            Explore common construction considerations
            for commercial properties.
          </p>
        </div>

        <div className="service-feature-grid">
          {details.map((item) => (
            <article className="service-feature-card" key={item}>
              <CheckCircle size={23} />
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="service-detail-cta">
        <h2>Planning a Commercial Project?</h2>
        <p>Connect with us to discuss your requirements.</p>

        <Link to="/contact" className="service-detail-button">
          Contact Us <ArrowRight size={18} />
        </Link>

        <div style={{ marginTop: 22 }}>
          <Link to="/projects" className="services-category-link">
            <ArrowLeft size={16} /> Back to All Projects
          </Link>
        </div>
      </section>
    </main>
  );
}