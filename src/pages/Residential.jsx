import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import "./Services.css";

const features = [
  "Residential building construction",
  "Foundation and structural work",
  "Quality construction materials",
  "Flooring and finishing solutions",
  "Home improvement and development",
];

export default function Residential() {
  return (
    <main className="service-detail-page">
      <section className="service-detail-hero residential-hero">
        <div className="service-detail-content">
          <span className="service-eyebrow">
            RESIDENTIAL CONSTRUCTION
          </span>

          <h1>
            Building Homes,
            <br />
            <span>Creating Futures.</span>
          </h1>

          <p>
            Explore construction solutions for residential
            properties, from foundations and structural work
            to finishing and material requirements.
          </p>

          <Link to="/contact" className="service-detail-button">
            Discuss Your Project <ArrowRight size={18} />
          </Link>
        </div>

        <img
          src="/resid.jpg"
          alt="Residential house construction"
          className="service-detail-image"
        />
      </section>

      <section className="service-detail-section">
        <div className="service-detail-heading">
          <span>OUR EXPERTISE</span>
          <h2>Residential Construction Solutions</h2>
          <p>
            Explore the key areas of residential construction
            and building material requirements.
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
        <h2>Planning Your Dream Home?</h2>
        <p>
          Contact us to discuss your construction requirements.
        </p>

        <Link to="/contact" className="service-detail-button">
          Contact Us <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}