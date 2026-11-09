
import "./CementProducts.css";

export const cementProducts = [
  {
    id: 1,
    name: "ACC Cement",
    brand: "Adani Cements",
    image: "/16829-10915_image_0.png",
    price: "Contact for price",
    description:
      "Quality cement suitable for residential and commercial construction, foundations, masonry and general concrete work.",
  },
  {
    id: 2,
    name: "Ambuja Compocem",
    brand: "Adani Cements",
    image: "/ambuja1.png",
    price: "Contact for price",
    description:
      "Reliable cement suitable for a wide range of residential and commercial construction applications.",
  },
  {
    id: 3,
    name: "Ambuja Kawach",
    brand: "Adani Cements",
    image: "/kawach.png",
    price: "Contact for price",
    description:
      "Cement suitable for roof, foundation and other construction requirements.",
  },
  {
    id: 4,
    name: "Birla Cement",
    brand: "Birla",
    image: "/birla-cem.png",
    price: "Contact for price",
    description:
      "Cement suitable for different building and construction requirements.",
  },
  {
    id: 5,
    name: "JSW Cement",
    brand: "JSW",
    image: "/jsw-cement-2.png",
    price: "Contact for price",
    description:
      "Quality cement solution for construction projects requiring dependable performance.",
  },
  {
    id: 6,
    name: "Nuvoco Cement",
    brand: "Nuvoco",
    image: "/Nuvoco-PSC-Cement.png",
    price: "Contact for price",
    description:
      "Construction cement suitable for residential and commercial building applications.",
  },
];

function CementProducts() {
  const whatsappNumber = "919162512232";

  const handleEnquiry = (product) => {
    const message =
      "Hello, I want to enquire about " +
      product.name +
      ". What is the current price and is it available in stock?";

    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="cement-products-page">
      <section className="cement-products-header">
        <span>OUR CEMENT PRODUCTS</span>

        <h1>Quality Cement for Strong Construction</h1>

        <p>
          Explore cement brands available at Mushad
          Construction &amp; Hardware Store. Contact us for
          current prices and availability.
        </p>
      </section>

      <section className="cement-products-list">
        {cementProducts.map((product) => (
          <div
            className="cement-product-card"
            key={product.id}
          >
            <div className="cement-product-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="cement-product-info">
              <span className="cement-product-brand">
                {product.brand}
              </span>

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <div className="cement-product-bottom">
                <div className="cement-price">
                  <small>Price</small>
                  <strong>{product.price}</strong>
                </div>

                <button
                  type="button"
                  className="cement-enquiry-btn"
                  onClick={() => handleEnquiry(product)}
                >
                  💬 Enquire on WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="cement-products-note">
        <h2>Need Current Price or Stock Information?</h2>

        <p>
          Prices and availability may change. Contact
          Mushad Construction &amp; Hardware Store for the
          latest information.
        </p>
      </section>
    </main>
  );
}

export default CementProducts;
