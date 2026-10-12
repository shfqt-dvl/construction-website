import "./PipesProducts.css";

import princePipes from "../../assets/Pvc-Prince-Pipe-Fitting (1).jpg";
import astralPipes from "../../assets/astral-pipes-fittings-distributors.jpg";
import filomaxPipes from "../../assets/flexible_pvc_transparent_tubes.jpg";
import idolPipes from "../../assets/products/1754117518.webp";

const pipesProducts = [
  {
    id: 1,
    name: "Prince Pipes & Fittings",
    brand: "Prince",
    image: princePipes,
    price: "Contact for current price",
    description:
      "Plumbing products designed for reliable water distribution and construction requirements.",
  },
  {
    id: 2,
    name: "Astral Pipes & Fittings",
    brand: "Astral",
    image: astralPipes,
    price: "Contact for current price",
    description:
      "Reliable plumbing pipes and fittings suitable for residential, commercial and construction plumbing systems.",
  },
  {
    id: 3,
    name: "Filomax Pipes & Fittings",
    brand: "Filomax",
    image: filomaxPipes,
    price: "Contact for current price",
    description:
      "Quality plumbing solutions for dependable water supply and drainage requirements.",
  },
  {
    id: 4,
    name: "Idol Pipes & Fittings",
    brand: "Idol",
    image: idolPipes,
    price: "Contact for current price",
    description:
      "Pipes and fittings suitable for various plumbing and building applications.",
  },
];

function PipesProducts() {
  const whatsappNumber = "919162512232";

  const handleEnquiry = (product) => {
    const message = `Hello, I want to enquire about ${product.name}. What is the current price and is it available in stock?`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="pipes-products-page">
      <section className="pipes-products-header">
        <span>OUR PIPES & FITTINGS</span>

        <h1>Reliable Plumbing Solutions</h1>

        <p>
          Explore our range of trusted pipes and fittings
          for residential, commercial and construction
          plumbing requirements.
        </p>
      </section>

      <section className="pipes-products-list">
        {pipesProducts.map((product) => (
          <div
            className="pipes-product-card"
            key={product.id}
          >
            <div className="pipes-product-image">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
            </div>

            <div className="pipes-product-info">
              <span className="pipes-product-brand">
                {product.brand}
              </span>

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <div className="pipes-product-bottom">
                <div className="pipes-price">
                  <small>Price</small>
                  <strong>{product.price}</strong>
                </div>

                <button
                  type="button"
                  className="pipes-enquiry-btn"
                  onClick={() => handleEnquiry(product)}
                >
                  💬 Enquire on WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="pipes-products-note">
        <h2>Need Current Price or Stock Information?</h2>

        <p>
          Prices and availability may change. Contact
          Mushad Construction & Hardware Store for the
          latest information.
        </p>
      </section>
    </main>
  );
}

export default PipesProducts;
