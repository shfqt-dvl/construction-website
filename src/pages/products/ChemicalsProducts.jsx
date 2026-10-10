import "./ChemicalsProducts.css";

const chemicalProducts = [
  {
    id: 1,
    name: "Conchem Construction Chemicals",
    brand: "Conchem",
    image: "/src/assets/chemicals-banner.jpg",
    price: "Contact for current price",
    description:
      "Construction chemical solutions suitable for different building, repair and construction applications.",
  },
  {
    id: 2,
    name: "Dr. Fixit",
    brand: "Dr. Fixit",
    image: "/src/assets/16191739476082a23b4efc6.webp",
    price: "Contact for current price",
    description:
      "Construction chemical products for waterproofing, protection and maintenance requirements.",
  },
];

function ChemicalsProducts() {
  const whatsappNumber = "919162512232";

  const handleEnquiry = (product) => {
    const message = `Hello, I want to enquire about ${product.name}. What is the current price and is it available in stock?`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="chemicals-products-page">

      <section className="chemicals-products-header">
        <span>OUR CONSTRUCTION CHEMICALS</span>

        <h1>Construction Chemicals for Better Protection</h1>

        <p>
          Explore our range of construction chemical
          products for waterproofing, protection,
          repair and building requirements.
        </p>
      </section>

      <section className="chemicals-products-list">

        {chemicalProducts.map((product) => (
          <div
            className="chemicals-product-card"
            key={product.id}
          >

            <div className="chemicals-product-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="chemicals-product-info">

              <span className="chemicals-product-brand">
                {product.brand}
              </span>

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <div className="chemicals-product-bottom">

                <div className="chemicals-price">
                  <small>Price</small>
                  <strong>{product.price}</strong>
                </div>

                <button
                  className="chemicals-enquiry-btn"
                  onClick={() => handleEnquiry(product)}
                >
                  💬 Enquire on WhatsApp
                </button>

              </div>

            </div>

          </div>
        ))}

      </section>

      <section className="chemicals-products-note">

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

export default ChemicalsProducts;