import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Hero from "../components/Hero";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";

import "./Home.css";

const homeServices = [
  {
    title: "Residential Construction",
    image: "/rr.avif",
    description: "Construction solutions for residential spaces and homes.",
    path: "/services/residential",
  },
  {
    title: "Commercial Construction",
    image: "/com.jpg",
    description: "Practical solutions for offices, showrooms and commercial spaces.",
    path: "/services/commercial",
  },
  {
    title: "Industrial Construction",
    image: "/inds.jpg",
    description: "Building solutions for industrial facilities and warehouses.",
    path: "/services/industrial",
  },
];

const homeProjects = [
  {
    title: "Residential Projects",
    image: "/proj1.webp",
    path: "/projects/residential",
  },
  {
    title: "Commercial Projects",
    image: "/proj3.webp",
    path: "/projects/commercial",
  },
  {
    title: "Industrial Projects",
    image: "/proj2.webp",
    path: "/projects/industrial",
  },
];

function Home() {
  return (
    <main className="home-page">
      <Hero />

      {/* PRODUCTS — KEEPING EXISTING COMPONENT UNCHANGED */}
      <Products />

      {/* ABOUT PREVIEW */}
      <section className="home-about-preview">
        <div className="home-about-image">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85"
            alt="Construction work at a building site"
            loading="lazy"
          />

          <span className="home-image-label">
            ABOUT MUSHAD
          </span>
        </div>

        <div className="home-about-content">
          <span className="home-section-label">
            WHO WE ARE
          </span>

          <h2>
            Built on Trust.
            <strong>Driven by Quality.</strong>
          </h2>

          <p>
            MUSHAD Construction & Hardware Store is committed
            to providing dependable construction materials,
            quality-focused product options and helpful
            customer assistance for your building requirements.
          </p>

          <Link to="/about" className="home-preview-button">
            Explore More
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="home-preview-section home-services-preview">
        <div className="home-section-heading">
          <span className="home-section-label">
            WHAT WE DO
          </span>

          <h2>
            Comprehensive Construction Solutions.
            <strong>Built Around Your Needs.</strong>
          </h2>

          <p>
            Discover construction solutions for residential,
            commercial and industrial requirements.
          </p>
        </div>

        <div className="home-preview-grid">
          {homeServices.map((service) => (
            <article className="home-preview-card" key={service.path}>
              <Link
                to={service.path}
                className="home-preview-card-image"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />
              </Link>

              <div className="home-preview-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link to={service.path} className="home-card-link">
                  Discover More
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="home-preview-action">
          <Link to="/services" className="home-preview-button">
            Explore All Services
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="home-preview-section home-projects-preview">
        <div className="home-section-heading">
          <span className="home-section-label">
            OUR WORK
          </span>

          <h2>
            Projects Built
            <strong>With Purpose.</strong>
          </h2>

          <p>
            Explore our project categories and discover the
            different building requirements we work around.
          </p>
        </div>

        <div className="home-preview-grid">
          {homeProjects.map((project) => (
            <article className="home-preview-card" key={project.path}>
              <Link
                to={project.path}
                className="home-preview-card-image"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </Link>

              <div className="home-preview-card-content">
                <h3>{project.title}</h3>

                <Link to={project.path} className="home-card-link">
                  Explore Projects
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="home-preview-action">
          <Link to="/projects" className="home-preview-button">
            Explore All Projects
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}

export default Home;