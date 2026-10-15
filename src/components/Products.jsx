import { Link } from "react-router-dom";
import "./Products.css";

const categories = [
  {
    id: 1,
    name: "Cement",
    icon: "🏗️",
    description:
      "Quality cement from trusted brands for strong and durable construction.",
    path: "/products/cement",
    linkText: "Explore Cement →",
  },
  {
    id: 2,
    name: "Steel",
    icon: "🔩",
    description:
      "Reliable TMT steel, bars and coils for residential and commercial construction.",
    path: "/products/steel",
    linkText: "Explore Steel →",
  },
  {
    id: 3,
    name: "Paints",
    icon: "🎨",
    description:
      "Explore trusted paint brands for beautiful and long-lasting finishes.",
    path: "/products/paints",
    linkText: "Explore Paint Brands →",
  },
  {
    id: 4,
    name: "Sanitary",
    icon: "🚿",
    description:
      "Sanitary products for modern bathrooms and homes.",
    path: "/products/sanitary",
    linkText: "Explore Sanitary →",
  },
  {
    id: 5,
    name: "Pipes & Fittings",
    icon: "🔧",
    description:
      "Pipes and fittings for reliable plumbing solutions.",
    path: "/products/pipes",
    linkText: "Explore Pipes & Fittings →",
  },
  {
    id: 6,
    name: "Chemicals",
    icon: "🧪",
    description:
      "Construction chemicals and solutions for better performance.",
    path: "/products/chemicals",
    linkText: "Explore Chemicals →",
  },
  {
    id: 7,
    name: "Hardware",
    icon: "🛠️",
    description:
      "Essential hardware products for construction and repair work.",
    path: "/products/hardware",
    linkText: "Explore Hardware →",
  },
  {
    id: 8,
    name: "Water Tanks",
    icon: "💧",
    description:
      "Durable water storage tanks from trusted manufacturers.",
    path: "/products/water-tanks",
    linkText: "Explore Water Tanks →",
  },
];

function Products() {
  return (
    <section className="products-section" id="products">
      <div className="products-heading">
        <span>OUR PRODUCTS</span>

        <h2>
          Construction <strong>Materials</strong>
        </h2>

        <p>
          Explore our range of quality construction materials
          and hardware products.
        </p>
      </div>

      <div className="product-category-grid">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.path}
            className="product-category-card"
          >
            <div className="product-category-icon">
              {category.icon}
            </div>

            <h3>{category.name}</h3>

            <p>{category.description}</p>

            <span className="category-link">
              {category.linkText}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Products;