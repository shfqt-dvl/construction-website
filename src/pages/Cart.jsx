import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import BackButton from "../components/BackButton";
import "./Cart.css";

function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    clearCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <>
        <BackButton />

        <section className="cart-page empty-cart">
          <div>
            <div className="empty-cart-icon">🛒</div>

            <h1>Your Cart is Empty</h1>

            <p>
              You haven't added any products to your cart yet.
            </p>

            <Link
              to="/products"
              className="continue-shopping"
            >
              Browse Products
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <BackButton />

      <section className="cart-page">

        <h1>Your Cart</h1>

        <p className="cart-subtitle">
          Review your selected products before placing your order.
        </p>

        <div className="cart-container">

          {/* Products */}
          <div className="cart-products">

            {cart.map((item) => (
              <div
                className="cart-item"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-info">

                  <h3>{item.name}</h3>

                  <p>
                    <strong>Brand:</strong>{" "}
                    {item.brand}
                  </p>

                  <p className="cart-item-price">
                    ₹{item.price} / {item.unit}
                  </p>

                  <div className="cart-quantity">

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity - 1
                        )
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                </div>

                <div className="cart-item-right">

                  <strong>
                    ₹{item.price * item.quantity}
                  </strong>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}

            <button
              className="clear-cart"
              onClick={clearCart}
            >
              Clear Cart
            </button>

          </div>

          {/* Order Summary */}
          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Products</span>
              <span>{cart.length}</span>
            </div>

            <div className="summary-row total-row">

              <strong>Total</strong>

              <strong>
                ₹{cartTotal}
              </strong>

            </div>

            {/* Checkout */}
            <Link
              to="/checkout"
              className="order-whatsapp"
            >
              💬 Proceed to Checkout
            </Link>

            {/* Continue Shopping */}
            <Link
              to="/products"
              className="continue-shopping cart-shopping"
            >
              ← Continue Shopping
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}

export default Cart;