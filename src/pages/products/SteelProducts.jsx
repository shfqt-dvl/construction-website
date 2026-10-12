
import "./SteelProducts.css";

import steelBanner from "../../assets/steel-banner.jpg";
import vijayTmt from "../../assets/pr-tmt1.jpg";
import kamdhenuTmt from "../../assets/kamdhenu-tmt-bar.jpg";

const steelProducts = [
  {
    id: 1,
    name: "Mahavir TMT",
    brand: "Mahavir TMT",
    image: steelBanner,
    price: "Contact for current price",
    description:
      "Reliable TMT steel suitable for residential, commercial and general construction applications.",
  },
  {
    id: 2,
    name: "Vijay TMT",
    brand: "Vijay TMT",
    image: vijayTmt,
    price: "Contact for current price",
    description:
      "Quality TMT steel for reinforced concrete structures and construction projects.",
  },
  {
    id: 3,
    name: "Kamdhenu TMT",
    brand: "Kamdhenu",
    image: kamdhenuTmt,
    price: "Contact for current price",
    description:
      "TMT reinforcement steel suitable for various residential and commercial construction needs.",
  },
];

function SteelProducts() {
  const whatsappNumber = "919162512232";

  const handleEnquiry = (product) => {
    const message = `Hello, I want to enquire about ${product.name}. What is the current price and is it available in stock?`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="steel-products-page">
      <section className="steel-products-header">
        <span>OUR STEEL PRODUCTS</span>

        <h1>Reliable Steel for Strong Structures</h1>

        <p>
          Explore our range of TMT steel products from
          trusted brands. Contact us for current prices
          and availability.
        </p>
      </section>

      <section className="steel-products-list">
        {steelProducts.map((product) => (
          <div
            className="steel-product-card"
            key={product.id}
          >
            <div className="steel-product-image">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
            </div>

            <div className="steel-product-info">
              <span className="steel-product-brand">
                {product.brand}
              </span>

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <div className="steel-product-bottom">
                <div className="steel-price">
                  <small>Price</small>
                  <strong>{product.price}</strong>
                </div>

                <button
                  type="button"
                  className="steel-enquiry-btn"
                  onClick={() => handleEnquiry(product)}
                >
                  💬 Enquire on WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="steel-products-note">
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

export default SteelProducts;
