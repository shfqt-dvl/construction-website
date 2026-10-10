import { Link } from "react-router-dom";
import "./Gallery.css";

const galleries = [
  {
    id: "cement",
    title: "Cement Gallery",
    icon: "🏗️",
    description:
      "Explore our cement collection, construction applications, quality information and trusted brands.",
    link: "/gallery/cement",
  },
  {
    id: "steel",
    title: "Steel Gallery",
    icon: "🔩",
    description:
      "Learn about TMT bars, steel products and their important role in strong construction.",
    link: "/gallery/steel",
  },
  {
    id: "paints",
    title: "Paint Gallery",
    icon: "🎨",
    description:
      "Discover paints, finishes, colours and solutions for residential and commercial projects.",
    link: "/gallery/paints",
  },
  {
    id: "sanitary",
    title: "Sanitary Gallery",
    icon: "🚿",
    description:
      "Explore sanitary products and understand their applications in modern bathrooms.",
    link: "/gallery/sanitary",
  },
  {
    id: "pipes",
    title: "Pipes & Fittings Gallery",
    icon: "🔧",
    description:
      "Learn about plumbing pipes, fittings and reliable water-management solutions.",
    link: "/gallery/pipes",
  },
  {
    id: "chemicals",
    title: "Construction Chemicals Gallery",
    icon: "🧪",
    description:
      "Information about construction chemicals, waterproofing and building protection solutions.",
    link: "/gallery/chemicals",
  },
  {
    id: "water-tank",
    title: "Water Tank Gallery",
    icon: "💧",
    description:
      "Explore water-storage solutions and important information about water tanks.",
    link: "/gallery/water-tank",
  },
  {
    id: "hardware",
    title: "Hardware Gallery",
    icon: "🛠️",
    description:
      "Explore hardware tools and their applications in construction and maintenance.",
    link: "/gallery/hardware",
  },
];

function Gallery() {
  return (
    <section className="gallery">

      {/* Background decorations */}
      <div className="gallery-bg-circle gallery-bg-circle-one"></div>
      <div className="gallery-bg-circle gallery-bg-circle-two"></div>

      {/* Header */}
      <div className="gallery-header">
        <span className="gallery-label">
          PRODUCT GALLERY
        </span>

        <h2>
          Explore Our <span>Construction Materials</span>
        </h2>

        <p>
          Discover useful information, applications and highlights
          about the construction materials we provide at
          Mushad Construction & Hardware Store.
        </p>
      </div>

      {/* Gallery cards */}
      <div className="gallery-grid">

        {galleries.map((gallery, index) => (
          <div
            className="gallery-card"
            key={gallery.id}
            style={{
              "--gallery-delay": `${index * 0.08}s`,
            }}
          >

            <div className="gallery-card-glow"></div>

            <div className="gallery-icon">
              <span>{gallery.icon}</span>
            </div>

            <div className="gallery-content">

              <h3>
                {gallery.title}
              </h3>

              <p>
                {gallery.description}
              </p>

              <Link
                to={gallery.link}
                className="gallery-view-btn"
              >
                <span>Explore Gallery</span>
                <span className="gallery-arrow">→</span>
              </Link>

            </div>

          </div>
        ))}

      </div>

      {/* Bottom slogan */}
      <div className="gallery-slogan">

        <div className="slogan-line"></div>

        <h2>
          Quality Materials.
          <span> Stronger Construction.</span>
        </h2>

        <p>
          Mushad Construction & Hardware Store —
          Your trusted partner for building materials.
        </p>

      </div>

    </section>
  );
}

export default Gallery;