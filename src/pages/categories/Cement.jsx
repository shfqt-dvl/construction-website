import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cement.css";

const cementProducts = [
  {
    id: "cement-acc",
    name: "ACC Cement",
    brand: "ACC",
    price: 400,
    unit: "Bag",
    image: "/products/birla-cem.jpg",
  },
  {
    id: "cement-ambuja",
    name: "Ambuja Cement",
    brand: "Ambuja",
    price: 400,
    unit: "Bag",
    image: "/products/birla-cem.jpg",
  },
  {
    id: "cement-birla",
    name: "Birla Cement",
    brand: "Birla",
    price: 400,
    unit: "Bag",
    image: "/products/birla-cem.jpg",
  },
  {
    id: "cement-jsw",
    name: "JSW Cement",
    brand: "JSW",
    price: 400,
    unit: "Bag",
    image: "/products/birla-cem.jpg",
  },
  {
    id: "cement-nuvoco",
    name: "Nuvoco Cement",
    brand: "Nuvoco",
    price: 400,
    unit: "Bag",
    image: "/products/birla-cem.jpg",
  },
];

function Cement() {
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();

  const [addedProduct, setAddedProduct] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    setAddedProduct(product.id);
  };

  const handleBuyNow = (product) => {
    addToCart(product, 1);
    navigate("/checkout");
  };

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <main className="cement-products-page">

      {/* Header */}
      <section className="cement-products-header">

        <span>OUR CEMENT RANGE</span>

        <h1>Choose the Right Cement for Your Project</h1>

        <p>
          Explore cement from trusted brands available at
          Mushad Construction & Hardware Store.
        </p>

      </section>

      {/* Products */}
      <section className="cement-products-section">

        <div className="cement-products-grid">

          {cementProducts.map((product) => (

            <div
              className="cement-product-card"
              key={product.id}
            >

              <div className="cement-product-image-box">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>

              <div className="cement-product-info">

                <span className="cement-brand">
                  {product.brand}
                </span>

                <h2>
                  {product.name}
                </h2>

                <p className="cement-unit">
                  Price per {product.unit}
                </p>

                <div className="cement-price">
                  ₹{product.price}
                </div>

                {/* Buttons */}
                <div className="cement-product-buttons">

                  {/* Left */}
                  <button
                    className="buy-now-btn"
                    onClick={() => handleBuyNow(product)}
                  >
                    Buy Now
                  </button>

                  {/* Right */}
                  {isInCart(product.id) ||
                  addedProduct === product.id ? (

                    <button
                      className="go-cart-btn"
                      onClick={() => navigate("/cart")}
                    >
                      Go to Cart
                    </button>

                  ) : (

                    <button
                      className="add-cart-btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>

                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}

export default Cement;