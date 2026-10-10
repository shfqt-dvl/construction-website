import { Link } from "react-router-dom";
import "./Brands.css";

const brandCategories = [
  {
    id: 1,
    icon: "🏗️",
    category: "Cement",
    description:
      "Trusted cement brands for strong foundations, concrete work and durable construction.",
    brands: ["ACC", "Ambuja", "Birla", "JSW", "Nuvoco"],
    path: "/products/cement",
  },
  {
    id: 2,
    icon: "🔩",
    category: "Steel",
    description:
      "Reliable TMT and steel brands for residential, commercial and structural projects.",
    brands: ["Mahavir TMT", "Vijay TMT", "Kamdhenu"],
    path: "/products/steel",
  },
  {
    id: 3,
    icon: "🎨",
    category: "Paints",
    description:
      "Quality paint brands for attractive finishes, protection and long-lasting surfaces.",
    brands: ["Nerolac", "Asian Paints", "Birla Opus"],
    path: "/products/paints",
  },
  {
    id: 4,
    icon: "🔧",
    category: "Pipes & Fittings",
    description:
      "Dependable plumbing brands for water supply, drainage and complete plumbing systems.",
    brands: ["Astral", "Filomax", "Idol", "Prince"],
    path: "/products/pipes",
  },
  {
    id: 5,
    icon: "💧",
    category: "Water Tanks",
    description:
      "Reliable water storage brands for homes, commercial buildings and construction projects.",
    brands: ["Balaji", "Prince", "Astral"],
    path: "/products/water-tanks",
  },
  {
    id: 6,
    icon: "🚿",
    category: "Sanitary",
    description:
      "Well-known sanitaryware brands for modern bathrooms and residential spaces.",
    brands: ["Glocera", "Parryware", "Hindware", "Cera"],
    path: "/products/sanitary",
  },
  {
    id: 7,
    icon: "🧪",
    category: "Construction Chemicals",
    description:
      "Construction chemical solutions for waterproofing, repair and building protection.",
    brands: ["Conchem", "Dr. Fixit"],
    path: "/products/chemicals",
  },
];

function Brands() {
  return (
    <section className="brands-section" id="brands">

      <div className="brands-container">

        {/* ================================
            HEADING
        ================================= */}

        <div className="brands-heading">

          <span>BRANDS WE DEAL IN</span>

          <h2>
            Trusted Brands.{" "}
            <strong>Reliable Materials.</strong>
          </h2>

          <p>
            We work with established brands across cement,
            steel, paints, plumbing, sanitaryware and
            construction chemicals to provide dependable
            materials for your projects.
          </p>

        </div>

        {/* ================================
            BRAND CARDS
        ================================= */}

        <div className="brands-grid">

          {brandCategories.map((brand) => (
            <Link
              to={brand.path}
              className="brand-card"
              key={brand.id}
            >

              <div className="brand-icon">
                {brand.icon}
              </div>

              <h3>
                {brand.category}
              </h3>

              <p className="brand-description">
                {brand.description}
              </p>

              <div className="brand-names">

                {brand.brands.map((name, index) => (
                  <span key={index}>
                    {name}
                  </span>
                ))}

              </div>

              <span className="brand-link">
                View Products →
              </span>

            </Link>
          ))}

        </div>

        {/* ================================
            BOTTOM CTA
        ================================= */}

        <div className="brands-cta">

          <div>
            <span>LOOKING FOR A SPECIFIC BRAND?</span>

            <h3>
              Ask us about current availability and pricing.
            </h3>
          </div>

          <a
            href="https://wa.me/919162512232?text=Hello%2C%20I%20want%20to%20enquire%20about%20your%20available%20brands."
            target="_blank"
            rel="noopener noreferrer"
            className="brands-whatsapp-btn"
          >
            💬 Enquire on WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}

export default Brands;