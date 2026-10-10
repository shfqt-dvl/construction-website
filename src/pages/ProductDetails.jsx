import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products";
import BackButton from "../components/BackButton";
import "./ProductDetails.css";

function ProductDetails() {
  const { addToCart, cart } = useCart();
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) =>
      item.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <>
        <BackButton />

        <div className="product-not-found">
          <h2>Product Not Found</h2>

          <button onClick={() => navigate("/products")}>
            Back to Products
          </button>
        </div>
      </>
    );
  }

  const total = product.price * quantity;

  const whatsappMessage = `Hello Mushad Construction & Hardware Store,

I want to order:

Product: ${product.name}
Brand: ${product.brand}
Quantity: ${quantity} ${product.unit}
Price: ₹${product.price}
Total: ₹${total}

Please confirm availability.`;

  const whatsappLink = `https://wa.me/91${"9162512232".replace(
    /^91/,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  // Check whether this product is already in cart
  const isInCart = cart.some(
    (item) => item.id === product.id
  );

  return (
    <>
      <BackButton />

      <section className="product-details">
        <div className="product-details-container">

          {/* Product Image */}
          <div className="product-details-image">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          {/* Product Information */}
          <div className="product-details-info">

            <span className="product-category">
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <p className="product-brand">
              <strong>Brand:</strong> {product.brand}
            </p>

            <div className="product-price">
              ₹{product.price}
              <span> / {product.unit}</span>
            </div>

            <div className="product-stock">
              ✅ {product.stock}
            </div>

            <p className="product-description">
              {product.description}
            </p>

            {/* Quantity */}
            <h3>Quantity</h3>

            <div className="quantity-box">

              <button
                onClick={() =>
                  quantity > 1 &&
                  setQuantity(quantity - 1)
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
              >
                +
              </button>

            </div>

            {/* Total */}
            <div className="product-total">
              Total: ₹{total}
            </div>

            {/* Buttons */}
            <div className="product-actions">

              {/* Cart Button */}
              {isInCart ? (
                <button
                  className="cart-btn"
                  onClick={() => navigate("/cart")}
                >
                  🛍️ Go to Cart
                </button>
              ) : (
                <button
                  className="cart-btn"
                  onClick={() =>
                    addToCart(product, quantity)
                  }
                >
                  🛒 Add to Cart
                </button>
              )}

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-order-btn"
              >
                💬 Order on WhatsApp
              </a>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;