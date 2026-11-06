
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  MessageCircle,
} from "lucide-react";

import "./Gallery.css";

const galleryHeroImage = "/galleryback.png";

const galleryCategories = [
  {
    title: "Cement",
    subtitle: "The foundation of every strong structure.",
    description:
      "Explore cement products and essential materials for durable construction.",
    image: "/cmnts.avif",
    path: "/gallery/cement",
    number: "01",
  },
  {
    title: "Steel & TMT Bars",
    subtitle: "Strength that stands the test of time.",
    description:
      "Discover steel products used for structural strength and reinforcement.",
    image: "/steel.webp",
    path: "/gallery/steel",
    number: "02",
  },
  {
    title: "Paints",
    subtitle: "Bring your spaces to life.",
    description:
      "Explore colours, finishes and paint solutions for different spaces.",
    image: "/pnts.jpg",
    path: "/gallery/paints",
    number: "03",
  },
  {
    title: "Pipes & Fittings",
    subtitle: "Reliable solutions behind every wall.",
    description:
      "Browse plumbing products and fittings for everyday water systems.",
    image: "/pipes2.jpg",
    path: "/gallery/pipes",
    number: "04",
  },
  {
    title: "Hardware",
    subtitle: "The little things that build big things.",
    description:
      "Find tools and hardware essentials for construction and maintenance.",
    image: "/hwdr.jpg",
    path: "/gallery/hardware",
    number: "05",
  },
  {
    title: "Sanitaryware",
    subtitle: "Comfort meets everyday functionality.",
    description:
      "Discover sanitary products and bathroom essentials for modern spaces.",
    image: "/sanitry.jfif",
    path: "/gallery/sanitary",
    number: "06",
  },
  {
    title: "Construction Chemicals",
    subtitle: "Protection that lasts longer.",
    description:
      "Explore waterproofing and building-protection product categories.",
    image: "/chncl.webp",
    path: "/gallery/chemicals",
    number: "07",
  },
  {
    title: "Water Tanks",
    subtitle: "Dependable water-storage solutions.",
    description:
      "Explore storage solutions for residential and commercial requirements.",
    image: "/wtrtnks.webp",
    path: "/gallery/water-tank",
    number: "08",
  },
];

function Gallery() {
  return (
    <section className="gallery-page" id="product-gallery">
      {/* Hero Banner */}
      <div className="gallery-hero">
        <div
          className="gallery-hero-image"
          style={{
            backgroundImage: `url("${galleryHeroImage}")`,
          }}
        />

        <div className="gallery-hero-overlay" />

        <div className="gallery-hero-content">
          

          <h2>
            Explore Our
            <br />
            <span>Product Gallery.</span>
          </h2>

          <p>
            From essential building materials to the finishing
            touches, explore the products that bring every
            construction project together.
          </p>

          <a
            href="#gallery-categories"
            className="gallery-hero-button"
          >
            Browse Categories
            <ArrowRight size={17} />
          </a>

          <div className="gallery-hero-caption">
          
          </div>
        </div>

        <div className="gallery-hero-index">
          <span>01</span>
          <span className="gallery-index-divider" />
          <span>08</span>
        </div>
      </div>

      {/* Product Categories */}
      <div
        className="gallery-content"
        id="gallery-categories"
      >
        <div className="gallery-heading">
          <div className="gallery-heading-copy">
            <span className="gallery-eyebrow gallery-eyebrow-blue">
              <Building2 size={15} />
              BUILT AROUND YOUR NEEDS
            </span>

            <h2>
              Find What
              <span> You Need.</span>
            </h2>

            <p>
              Explore our range of construction materials,
              hardware essentials and finishing products.
              Choose a category to see more.
            </p>
          </div>

          
        </div>

        <div className="gallery-grid">
          {galleryCategories.map((item, index) => (
            <article
              className="gallery-card"
              key={item.number}
              style={{
                "--card-index": index,
              }}
            >
              <Link
                to={item.path}
                className="gallery-card-link"
                aria-label={`Explore ${item.title} gallery`}
              >
                <div className="gallery-card-image">
                  <img
                    src={item.image}
                    alt={`${item.title} products`}
                    loading="lazy"
                  />

                  <div className="gallery-card-image-overlay" />

                  <span className="gallery-card-number">
                    {item.number}
                  </span>

                  <span className="gallery-card-top-arrow">
                    <ArrowUpRight size={18} />
                  </span>

                  <span className="gallery-image-label">
                    MUSHAD COLLECTION
                  </span>
                </div>

                <div className="gallery-card-content">
                  <div className="gallery-card-text">
                    <h3>{item.title}</h3>

                    <span className="gallery-card-subtitle">
                      {item.subtitle}
                    </span>

                    <p>{item.description}</p>
                  </div>

                  <div className="gallery-card-footer">
                    <span>Explore Category</span>

                    <span className="gallery-card-arrow">
                      <ArrowRight size={17} />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Contact Strip */}
        <div className="gallery-contact-strip">
          <div className="gallery-contact-icon">
            <MessageCircle size={22} />
          </div>

          <div className="gallery-contact-text">
            <h3>Looking for something specific?</h3>

            <p>
              Talk to our team about product availability
              and your construction requirements.
            </p>
          </div>

          <Link
            to="/contact"
            className="gallery-contact-button"
          >
            Contact Us
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
