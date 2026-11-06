import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import "./Services.css";

const features = [
  "Home renovation and remodeling",
  "Wall repairs and surface finishing",
  "Flooring and tile work",
  "Painting and finishing improvements",
  "Kitchen and bathroom upgrades",
  "Property repair and improvement",
];

export default function Renovation() {
  return (
    <main className="service-detail-page">
      <section className="service-detail-hero renovation-hero">
        <div className="service-detail-content">
          <span className="service-eyebrow">
            RENOVATION & REMODELING
          </span>

          <h1>
            Refresh Your Space,
            <br />
            <span>Reimagine Living.</span>
          </h1>

          <p>
            Improve your existing property with renovation,
            repair and remodeling solutions designed to make
            spaces more functional and attractive.
          </p>

          <Link to="/contact" className="service-detail-button">
            Discuss Your Project <ArrowRight size={18} />
          </Link>
        </div>

        <img
          src="/reno.jpg"
          alt="Property renovation and remodeling"
          className="service-detail-image"
        />
      </section>

      <section className="service-detail-section">
        <div className="service-detail-heading">
          <span>OUR EXPERTISE</span>
          <h2>Renovation & Remodeling Solutions</h2>
          <p>
            Explore improvements that can refresh and upgrade
            residential and commercial spaces.
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

      <section className="service-detail-cta">
        <h2>Ready to Improve Your Space?</h2>
        <p>
          Contact us to discuss your renovation requirements.
        </p>

        <Link to="/contact" className="service-detail-button">
          Contact Us <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}