import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Steel.css";

const steelProducts = [
  {
    id: "mahavir-tmt",
    name: "Mahavir TMT",
    brand: "Mahavir",
    price: 62000,
    unit: "ton",
    image: "/products/tmt-bars.jpg",
  },
  {
    id: "vijay-tmt",
    name: "Vijay TMT",
    brand: "Vijay",
    price: 61500,
    unit: "ton",
    image: "/products/tmt-bars.jpg",
  },
  {
    id: "kamdhenu-tmt",
    name: "Kamdhenu TMT",
    brand: "Kamdhenu",
    price: 62500,
    unit: "ton",
    image: "/products/tmt-bars.jpg",
  },
  {
    id: "steel-coils",
    name: "Steel Coils",
    brand: "Quality Steel",
    price: 65000,
    unit: "ton",
    image: "/products/steel-coils.jpg",
  },
];

function Steel() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  const handleBuyNow = (product) => {
    addToCart(product, 1);
    navigate("/checkout");
  };

  return (
    <section className="steel-products-page">

      <div className="steel-products-header">
        <span>OUR STEEL RANGE</span>

        <h1>Strong Steel for Strong Construction</h1>

        <p>
          Reliable TMT bars and steel products for
          residential and commercial construction.
        </p>
      </div>

      <div className="steel-products-grid">

        {steelProducts.map((product) => (
          <div
            className="steel-product-card"
            key={product.id}
          >

            <div className="steel-product-image-box">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="steel-product-content">

              <span className="steel-brand">
                {product.brand}
              </span>

              <h2>{product.name}</h2>

              <p className="steel-price">
                ₹{product.price} / {product.unit}
              </p>

              <div className="steel-product-buttons">

                <button
                  className="buy-now-btn"
                  onClick={() => handleBuyNow(product)}
                >
                  Buy Now
                </button>

                <button
                  className="add-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Steel;