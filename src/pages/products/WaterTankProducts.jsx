import "./WaterTankProducts.css";


const waterTankProducts = [

  {
    id: 1,
    name: "Sintex Water Tanks",
    brand: "Sintex",
    image: "/src/assets/products/wtr-tank.jpeg",
    price: "Contact for current price",
    description:
      "srong water storage tanks suitable for homes and commercial building.",
  },
  {
    id: 2,
    name: "Balaji Water Tanks",
    brand: "Balaji",
    image: "/src/assets/balaji-four-layer-storage-water-tank-781.jpg",
    price: "Contact for current price",
    description:
      "Reliable water storage tanks suitable for homes, commercial buildings and construction requirements.",
  },
  {
    id: 3,
    name: "Prince Water Tanks",
    brand: "Prince",
    image: "/src/assets/water-tank-banner.jpg",
    price: "Contact for current price",
    description:
      "Durable water storage solutions suitable for residential and commercial water storage needs.",
  },
  {
    id: 3,
    name: "Supreme Water Tanks",
    brand: "Supreme",
    image: "/src/assets/products/34f0c128-5f3c-44ec-9af1-0d63df360da5_tinywow_cfa25250-8ebf-4d04-898d-830f0c48bbf7_Three-Layer-Overhead-Water-Tank-Blue_31261860.webp",
    price: "Contact for current price",
    description:
      "Quality water storage solutions for homes, buildings and other water storage applications.",
  },
];

function WaterTankProducts() {
  const whatsappNumber = "919161512232";

  const handleEnquiry = (product) => {
    const message = `Hello, I want to enquire about ${product.name}. What is the current price and is it available in stock?`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="water-tank-products-page">

      <section className="water-tank-products-header">
        <span>OUR WATER TANK PRODUCTS</span>

        <h1>Reliable Water Storage Solutions</h1>

        <p>
          Explore our range of water storage tanks from
          trusted brands. Contact us for current prices
          and availability.
        </p>
      </section>

      <section className="water-tank-products-list">

        {waterTankProducts.map((product) => (
          <div
            className="water-tank-product-card"
            key={product.id}
          >

            <div className="water-tank-product-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="water-tank-product-info">

              <span className="water-tank-product-brand">
                {product.brand}
              </span>

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <div className="water-tank-product-bottom">

                <div className="water-tank-price">
                  <small>Price</small>
                  <strong>{product.price}</strong>
                </div>

                <button
                  className="water-tank-enquiry-btn"
                  onClick={() => handleEnquiry(product)}
                >
                  💬 Enquire on WhatsApp
                </button>

              </div>

            </div>

          </div>
        ))}

      </section>

      <section className="water-tank-products-note">

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

export default WaterTankProducts;