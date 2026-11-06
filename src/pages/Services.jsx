
import { Link } from "react-router-dom";
import {
  House,
  Building2,
  Factory,
  Hammer,
  ArrowRight,
} from "lucide-react";
import "./Services.css";

const services = [
  {
    title: "Residential Construction",
    description:
      "Thoughtful construction solutions for residential spaces, supporting every stage from foundational work to final finishes.",
    image: "/rr.avif",
    path: "/services/residential",
    icon: House,
  },
  {
    title: "Commercial Construction",
    description:
      "Practical building solutions for offices, retail spaces, showrooms and commercial developments.",
    image: "/com.jpg",
    path: "/services/commercial",
    icon: Building2,
  },
  {
    title: "Industrial Construction",
    description:
      "Construction solutions designed around the functional requirements of industrial buildings, facilities and warehouses.",
    image: "/inds.jpg",
    path: "/services/industrial",
    icon: Factory,
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Renewing existing spaces through repair, renovation and improvement solutions that enhance functionality and appeal.",
    image: "/hh.webp",
    path: "/services/renovation",
    icon: Hammer,
  },
];

export default function Services() {
  return (
    <main className="services-page">
      {/* SERVICES HERO */}
      <section className="services-main-hero">
        <div className="services-main-content">
          <span className="services-eyebrow">
            MUSHAD CONSTRUCTION & HARDWARE
          </span>

          <h1>
            Comprehensive Construction Solutions.
            <br />
            <span>Built Around Your Needs.</span>
          </h1>

          <p>
            Bringing together dependable solutions for residential,
            commercial and industrial construction, along with
            renovation and remodeling requirements.
          </p>

          <Link to="/contact" className="services-main-button">
            Discuss Your Requirements <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* SERVICES CATEGORY SECTION */}
      <section className="services-main-section">
        <div className="services-section-heading">
          <span>OUR CAPABILITIES</span>

          <h2>Solutions for Every Building Need</h2>

          <p>
            Explore our range of construction services and discover
            solutions aligned with your project requirements.
          </p>
        </div>

        <div className="services-category-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="services-category-card"
                key={service.path}
              >
                <Link
                  to={service.path}
                  className="services-card-image-link"
                  aria-label={`Explore ${service.title}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="services-card-image"
                    loading="lazy"
                  />
                </Link>

                <div className="services-card-body">
                  <div className="services-category-icon">
                    <Icon size={30} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <Link
                    to={service.path}
                    className="services-category-link"
                  >
                    Discover More <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="services-summary-cta">
        <h2>Let's Move Your Project Forward</h2>

        <p>
          Share your requirements with us and connect with our team
          to explore the right solutions for your needs.
        </p>

        <Link to="/contact" className="services-main-button">
          Connect With Our Team <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
