import "./HardwareProducts.css";

import hardwareTools from "../../assets/13.png";
import fasteners from "../../assets/fasteners.webp";
import nails from "../../assets/mild-steel-coil-wire-nails-966.jpg";
import hardwareBanner from "../../assets/hardware-banner.jpg";

const hardwareProducts = [
  {
    id: 1,
    name: "Hardware Tools",
    brand: "Mushad Hardware",
    image: hardwareTools,
    price: "Contact for current price",
    description:
      "Essential hardware tools and accessories suitable for construction, repair and everyday building requirements.",
  },
  {
    id: 2,
    name: "Screws & Fasteners",
    brand: "Hardware",
    image: fasteners,
    price: "Contact for current price",
    description:
      "Reliable screws and fasteners for different construction, installation and repair applications.",
  },
  {
    id: 3,
    name: "Nails",
    brand: "Hardware",
    image: nails,
    price: "Contact for current price",
    description:
      "Quality nails suitable for general construction, fixing and building requirements.",
  },
  {
    id: 4,
    name: "Construction Accessories",
    brand: "Mushad Hardware",
    image: hardwareBanner,
    price: "Contact for current price",
    description:
      "Useful construction accessories and hardware products for builders, contractors and homeowners.",
  },
];

function HardwareProducts() {
  const whatsappNumber = "919162512232";

  const handleEnquiry = (product) => {
    const message = `Hello, I want to enquire about ${product.name}. What is the current price and is it available in stock?`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="hardware-products-page">
      <section className="hardware-products-header">
        <span>OUR HARDWARE PRODUCTS</span>

        <h1>Essential Hardware for Every Project</h1>

        <p>
          Explore our range of hardware tools, screws,
          nails and construction accessories for your
          building and repair requirements.
        </p>
      </section>

      <section className="hardware-products-list">
        {hardwareProducts.map((product) => (
          <div
            className="hardware-product-card"
            key={product.id}
          >
            <div className="hardware-product-image">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
            </div>

            <div className="hardware-product-info">
              <span className="hardware-product-brand">
                {product.brand}
              </span>

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <div className="hardware-product-bottom">
                <div className="hardware-price">
                  <small>Price</small>
                  <strong>{product.price}</strong>
                </div>

                <button
                  type="button"
                  className="hardware-enquiry-btn"
                  onClick={() => handleEnquiry(product)}
                >
                  💬 Enquire on WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="hardware-products-note">
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

export default HardwareProducts;
