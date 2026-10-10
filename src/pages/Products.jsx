import { Link } from "react-router-dom";
import "./Products.css";

const categories = [
  {
    id: 1,
    name: "Cement",
    icon: "🏗️",
    description:
      "Quality cement for strong and durable construction.",
    path: "/products/cement",
  },
  {
    id: 2,
    name: "Steel",
    icon: "🔩",
    description:
      "Reliable TMT steel for residential and commercial projects.",
    path: "/products/steel",
  },
  {
    id: 3,
    name: "Paints",
    icon: "🎨",
    description:
      "Quality paints and finishes for beautiful spaces.",
    path: "/products/paints",
  },
  {
    id: 4,
    name: "Pipes & Fittings",
    icon: "🔧",
    description:
      "Pipes and fittings for dependable plumbing systems.",
    path: "/products/pipes",
  },
  {
    id: 5,
    name: "Water Tanks",
    icon: "💧",
    description:
      "Durable water storage solutions for every requirement.",
    path: "/products/water-tank",
  },
  {
    id: 6,
    name: "Sanitary",
    icon: "🚿",
    description:
      "Quality sanitary products for modern bathrooms.",
    path: "/products/sanitary",
  },
  {
    id: 7,
    name: "Chemicals",
    icon: "🧪",
    description:
      "Construction chemicals for protection and durability.",
    path: "/products/chemicals",
  },
  {
    id: 8,
    name: "Hardware",
    icon: "🛠️",
    description:
      "Essential hardware tools and construction accessories.",
    path: "/products/hardware",
  },
];

function Products() {
  return (
    <section className="products-section" id="products">

      <div className="products-heading">
        <span>OUR PRODUCTS</span>

        <h2>
          Quality Materials for Every Project
        </h2>

        <p>
          Explore our range of trusted construction and
          hardware materials.
        </p>
      </div>

      <div className="product-category-grid">

        {categories.map((category) => (
          <Link
            to={category.path}
            className="product-category-card"
            key={category.id}
          >
            <div className="product-category-icon">
              {category.icon}
            </div>

            <h3>{category.name}</h3>

            <p>{category.description}</p>

            <span className="category-link">
              Explore Products →
            </span>
          </Link>
        ))}

      </div>

    </section>
  );
}

export default Products;