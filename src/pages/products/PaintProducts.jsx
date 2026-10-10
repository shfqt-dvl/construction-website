import "./PaintProducts.css";

const paintProducts = [
  {
    id: 1,
    name: "Nerolac Paints",
    brand: "Nerolac",
    image: "/src/assets/paints-banner.jpg",
    price: "Contact for current price",
    description:
      "Quality paints and finishes suitable for residential, commercial and general building applications.",
  },
  {
    id: 2,
    name: "Asian Paints",
    brand: "Asian Paints",
    image: "/src/assets/Asian-Paints-Shares-Fall-Post-Q3-Results-1-1200x720.jpg",
    price: "Contact for current price",
    description:
      "A wide range of paint and finishing solutions for interior and exterior applications.",
  },
  {
    id: 3,
    name: "Birla Opus",
    brand: "Birla Opus",
    image: "/src/assets/opus.jpg",
    price: "Contact for current price",
    description:
      "Paint and finishing products suitable for creating attractive and durable spaces.",
  },
];

function PaintProducts() {
  const whatsappNumber = "919162512232";

  const handleEnquiry = (product) => {
    const message = `Hello, I want to enquire about ${product.name}. What is the current price and is it available in stock?`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="paint-products-page">

      <section className="paint-products-header">
        <span>OUR PAINT PRODUCTS</span>

        <h1>Quality Paints for Beautiful Spaces</h1>

        <p>
          Explore our range of trusted paint brands for
          residential, commercial and construction
          requirements.
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