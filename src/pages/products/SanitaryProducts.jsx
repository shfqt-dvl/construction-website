import "./SanitaryProducts.css";

import glocera from "../../assets/products/glocera.jpg";
import parryware from "../../assets/parryware.jpg";
import hindware from "../../assets/products/sanitary3.jpeg";
import cera from "../../assets/products/sanitary2.jpeg";

const sanitaryProducts = [
  {
    id: 1,
    name: "Glocera Sanitary",
    brand: "Glocera",
    image: glocera,
    price: "Contact for current price",
    description:
      "Quality sanitary products and bathroom solutions suitable for modern residential and commercial spaces.",
  },
  {
    id: 2,
    name: "Parryware Sanitary",
    brand: "Parryware",
    image: parryware,
    price: "Contact for current price",
    description:
      "Reliable bathroom and sanitary products for residential and commercial requirements.",
  },
  {
    id: 3,
    name: "Hindware Sanitary",
    brand: "Hindware",
    image: hindware,
    price: "Contact for current price",
    description:
      "Sanitaryware and bathroom solutions suitable for modern bathrooms and building projects.",
  },
  {
    id: 4,
    name: "Cera Sanitary",
    brand: "Cera",
    image: cera,
    price: "Contact for current price",
    description:
      "Quality sanitaryware and bathroom products for residential and commercial applications.",
  },
];

function SanitaryProducts() {
  const whatsappNumber = "919162512232";

  const handleEnquiry = (product) => {
    const message = `Hello, I want to enquire about ${product.name}. What is the current price and is it available in stock?`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="sanitary-products-page">
      <section className="sanitary-products-header">
        <span>OUR SANITARY PRODUCTS</span>

        <h1>Quality Sanitary Solutions for Modern Spaces</h1>

        <p>
          Explore our range of trusted sanitary brands for
          bathrooms, homes, commercial buildings and
          construction projects.
        </p>
      </section>

      <section className="sanitary-products-list">
        {sanitaryProducts.map((product) => (
          <div
            className="sanitary-product-card"
            key={product.id}
          >
            <div className="sanitary-product-image">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
            </div>

            <div className="sanitary-product-info">
              <span className="sanitary-product-brand">
                {product.brand}
              </span>

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <div className="sanitary-product-bottom">
                <div className="sanitary-price">
                  <small>Price</small>
                  <strong>{product.price}</strong>
                </div>

                <button
                  type="button"
                  className="sanitary-enquiry-btn"
                  onClick={() => handleEnquiry(product)}
                >
                  💬 Enquire on WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="sanitary-products-note">
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

export default SanitaryProducts;
