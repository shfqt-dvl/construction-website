import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import "./Services.css";

const details = [
  "Residential building and house construction",
  "Foundation and structural requirements",
  "Building materials and finishing",
  "Residential property development",
];

export default function ResidentialProjects() {
  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-content">
          <span className="service-eyebrow">
            PROJECT CATEGORY / RESIDENTIAL
          </span>

          <h1>
            Residential
            <br />
            <span>Construction Projects.</span>
          </h1>

          <p>
            Explore residential construction requirements,
            including house building, structural work,
            construction materials and finishing.
          </p>

          <Link to="/contact" className="service-detail-button">
            Discuss a Project <ArrowRight size={18} />
          </Link>
        </div>

        <img
          src="/proj1.png"
          alt="Residential construction project"
          className="service-detail-image"
        />
      </section>

      <section className="service-detail-section">
        <div className="service-detail-heading">
          <span>PROJECT OVERVIEW</span>
          <h2>Residential Construction</h2>
          <p>
            Explore common areas involved in residential
            construction and material planning.
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
        <h2>Planning a Residential Project?</h2>
        <p>Let's discuss your requirements.</p>

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