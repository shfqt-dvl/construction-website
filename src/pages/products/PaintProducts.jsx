import "./PaintProducts.css";

import nerolacPaint from "../../assets/products/nerolac.jpeg";
import asianPaints from "../../assets/Asian-Paints-Shares-Fall-Post-Q3-Results-1-1200x720.jpg";
import birlaOpus from "../../assets/products/birla-opus.jpeg";
import paintRange from "../../assets/products/paints.jpeg";
import opusPaint from "../../assets/opus.jpg";

const paintProducts = [
  {
    id: 1,
    name: "Nerolac Paints",
    brand: "Nerolac",
    image: nerolacPaint,
    price: "Contact for current price",
    description:
      "Quality paints and finishes for residential, commercial and general building applications.",
  },
  {
    id: 2,
    name: "Asian Paints",
    brand: "Asian Paints",
    image: asianPaints,
    price: "Contact for current price",
    description:
      "Paint solutions for interior walls, exterior walls and a variety of finishing requirements.",
  },
  {
    id: 3,
    name: "Birla Opus Paints",
    brand: "Birla Opus",
    image: birlaOpus,
    price: "Contact for current price",
    description:
      "Decorative paints and finishes to help create attractive residential and commercial spaces.",
  },
  {
    id: 4,
    name: "Interior Wall Paints",
    brand: "Interior Paint Range",
    image: paintRange,
    price: "Contact for current price",
    description:
      "Explore interior wall paint options for bedrooms, living rooms, offices and other indoor spaces.",
  },
  {
    id: 5,
    name: "Decorative Paint Range",
    brand: "Decorative Finishes",
    image: opusPaint,
    price: "Contact for current price",
    description:
      "Explore paint and finishing options for refreshing and decorating your home or commercial property.",
  },
];

function PaintProducts() {
  const whatsappNumber = "919162512232";

  const handleEnquiry = (product) => {
    const message = `Hello, I want to enquire about ${product.name}. What is the current price and is it available in stock?`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="paint-products-page">
      <section className="paint-products-header">
        <span>OUR PAINT PRODUCTS</span>

        <h1>Quality Paints for Beautiful Spaces</h1>

        <p>
          Explore our range of trusted paint brands and
          decorative finishes for residential, commercial
          and construction requirements.
        </p>
      </section>

      <section className="paint-products-list">
        {paintProducts.map((product) => (
          <div
            className="paint-product-card"
            key={product.id}
          >
            <div className="paint-product-image">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
            </div>

            <div className="paint-product-info">
              <span className="paint-product-brand">
                {product.brand}
              </span>

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <div className="paint-product-bottom">
                <div className="paint-price">
                  <small>Price</small>
                  <strong>{product.price}</strong>
                </div>

                <button
                  type="button"
                  className="paint-enquiry-btn"
                  onClick={() => handleEnquiry(product)}
                >
                  💬 Enquire on WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="paint-products-note">
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

export default PaintProducts;
