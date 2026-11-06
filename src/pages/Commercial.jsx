
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import "./Services.css";

const features = [
  "Office buildings and workspaces",
  "Retail shops and showrooms",
  "Commercial property development",
  "Civil and structural construction",
  "Construction material coordination",
  "Finishing and improvement work",
];

export default function Commercial() {
  return (
    <main className="service-detail-page">
      {/* Commercial Hero Section */}
      <section className="service-detail-hero commercial-hero">
        <div className="service-detail-content">
          <span className="service-eyebrow">
            COMMERCIAL CONSTRUCTION
          </span>

          <h1>
            Spaces That
            <br />
            <span>Drive Business.</span>
          </h1>

          <p>
            Discover construction solutions for offices, shops,
            showrooms and commercial properties, with a focus
            on functionality and durability.
          </p>

          <Link to="/contact" className="service-detail-button">
            Discuss Your Project <ArrowRight size={18} />
          </Link>
        </div>

        <img
          src="/cmr.avif"
          alt="Commercial building construction"
          className="service-detail-image"
        />
      </section>

      {/* Commercial Features Section */}
      <section className="service-detail-section">
        <div className="service-detail-heading">
          <span>OUR EXPERTISE</span>

          <h2>Commercial Construction Solutions</h2>

          <p>
            Construction solutions for business environments
            and commercial property requirements.
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

      {/* Commercial CTA Section */}
      <section className="service-detail-cta">
        <h2>Have a Commercial Project in Mind?</h2>

        <p>
          Tell us about your project and material requirements.
        </p>

        <Link to="/contact" className="service-detail-button">
          Contact Us <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
