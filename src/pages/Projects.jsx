
import { Link } from "react-router-dom";
import {
  House,
  Building2,
  Factory,
  ArrowRight,
} from "lucide-react";
import "./Projects.css";

const projectCategories = [
  {
    title: "Residential Projects",
    description:
      "House construction, residential buildings and home development.",
    image: "/proj1.webp",
    path: "/projects/residential",
    icon: House,
  },
  {
    title: "Commercial Projects",
    description:
      "Offices, retail spaces and commercial building development.",
    image: "/proj3.webp",
    path: "/projects/commercial",
    icon: Building2,
  },
  {
    title: "Industrial Projects",
    description:
      "Warehouses, industrial buildings and facility development.",
    image: "/proj2.webp",
    path: "/projects/industrial",
    icon: Factory,
  },
];

export default function Projects() {
  return (
    <main className="services-page">
      {/* ALL PROJECTS HERO */}
      <section className="services-main-hero">
        <img
          src="/projback.jpg"
          alt="Mushad Construction projects"
          className="services-main-hero-bg"
        />

        <div className="services-main-overlay"></div>

        <div className="services-main-content">
          <span className="services-eyebrow">
            MUSHAD CONSTRUCTION & HARDWARE
          </span>

          <h1>
            Projects Built
            <br />
            <span>With Purpose.</span>
          </h1>

          <p>
            Explore our construction project categories,
            discover different building requirements and
            discuss your next project with our team.
          </p>

          <Link
            to="/contact#contact-form"
            className="services-main-button"
          >
            Discuss Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* PROJECT CATEGORIES */}
      <section
        className="services-main-section"
        id="explore-all-projects"
      >
        <div className="services-section-heading">
          <span>PROJECT CATEGORIES</span>

          <h2>Explore Our Projects</h2>

          <p>
            Select a category to explore its construction focus
            and project information.
          </p>
        </div>

        <div className="projects-category-grid">
          {projectCategories.map((project) => {
            const Icon = project.icon;

            return (
              <article
                className="services-category-card"
                key={project.path}
              >
                <Link
                  to={project.path}
                  className="services-card-image-link"
                  aria-label={`View ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="services-card-image"
                    loading="lazy"
                  />
                </Link>

                <div className="services-card-body">
                  <div className="services-category-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <Link
                    to={project.path}
                    className="services-category-link"
                  >
                    Explore Projects
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
