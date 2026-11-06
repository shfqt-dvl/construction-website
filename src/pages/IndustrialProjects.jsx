import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import "./Services.css";

const details = [
  "Industrial facility construction requirements",
  "Warehouse and storage buildings",
  "Industrial flooring and foundations",
  "Construction materials and structural work",
];

export default function IndustrialProjects() {
  return (
    <main className="service-detail-page">
      <section className="service-detail-hero industrial-hero">
        <div className="service-detail-content">
          <span className="service-eyebrow">
            PROJECT CATEGORY / INDUSTRIAL
          </span>

          <h1>
            Industrial
            <br />
            <span>Construction Projects.</span>
          </h1>

          <p>
            Explore construction considerations for industrial
            facilities, warehouses and functional workspaces.
          </p>

          <Link to="/contact" className="service-detail-button">
            Discuss a Project <ArrowRight size={18} />
          </Link>
        </div>

        <img
          src="/industrial.png"
          alt="Industrial construction project"
          className="service-detail-image"
        />
      </section>

      <section className="service-detail-section">
        <div className="service-detail-heading">
          <span>PROJECT OVERVIEW</span>
          <h2>Industrial Construction</h2>
          <p>
            Explore key areas to consider when planning
            industrial construction and facilities.
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
        <h2>Planning an Industrial Project?</h2>
        <p>Let's discuss your project requirements.</p>

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