import { Link, Navigate, useParams } from "react-router-dom";
import { useUser } from "@clerk/react";
import { useCart } from "../context/CartContext";
import "./TrackOrder.css";

function TrackOrder() {
  const { orderId } = useParams();
  const { orders } = useCart();
  const { isSignedIn, isLoaded, user } = useUser();

  if (!isLoaded) {
    return (
      <div className="account-loading">
        Loading order...
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }

  // Find order AND make sure it belongs to logged-in user
  const order = orders.find(
    (item) =>
      item.orderId === orderId &&
      item.userId === user.id
  );

  if (!order) {
    return (
      <section className="track-page">
        <div className="track-box">

          <div className="track-icon">
            ❌
          </div>

          <h1>Order Not Found</h1>

          <p>
            We couldn't find this order in your account.
          </p>

          <Link
            to="/my-orders"
            className="track-btn"
          >
            📦 My Orders
          </Link>

        </div>
      </section>
    );
  }

  return (
    <section className="track-page">

      <div className="track-box">

        <div className="track-icon">
          📦
        </div>

        <h1>Track Your Order</h1>

        <p className="order-id">
          <strong>Order ID:</strong>{" "}
          {order.orderId}
        </p>

        {/* Current Status */}
        <div className="order-status">

          <div className="status-dot"></div>

          <div>
            <strong>
              {order.status}
            </strong>

            <p>
              Your order has been placed
              successfully.
            </p>
          </div>

        </div>

        {/* Tracking Steps */}
        <div className="tracking-steps">

          <div className="tracking-step active">
            <span>✓</span>

            <div>
              <strong>Order Placed</strong>

              <p>
                Your order has been received.
              </p>
            </div>
          </div>

          <div className="tracking-step">
            <span>2</span>

            <div>
              <strong>Order Confirmed</strong>

              <p>
                Store will confirm availability.
              </p>
            </div>
          </div>

          <div className="tracking-step">
            <span>3</span>

            <div>
              <strong>Preparing Order</strong>

              <p>
                Your products are being prepared.
              </p>
            </div>
          </div>

          <div className="tracking-step">
            <span>4</span>

            <div>
              <strong>Out for Delivery</strong>

              <p>
                Your order is on the way.
              </p>
            </div>
          </div>

          <div className="tracking-step">
            <span>5</span>

            <div>
              <strong>Delivered</strong>

              <p>
                Order delivered successfully.
              </p>
            </div>
          </div>

        </div>

        {/* Order Information */}
        <div className="tracking-total">

          <span>
            Payment Method
          </span>

          <strong>
            {order.paymentMethod}
          </strong>

        </div>

        <div className="tracking-total">

          <span>
            Total Amount
          </span>

          <strong>
            ₹{order.total}
          </strong>

        </div>

        {/* Buttons */}
        <div className="tracking-buttons">

          <Link
            to="/my-orders"
            className="track-btn"
          >
            ← My Orders
          </Link>

          <a
            href={`https://wa.me/919162512232?text=${encodeURIComponent(
              `Hello Mushad Construction & Hardware Store,

I want to contact you regarding my order.

Order ID: ${order.orderId}
Customer: ${order.customerName}
Total: ₹${order.total}

Please provide an update about my order.`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="contact-order-btn"
          >
            💬 Contact About Order
          </a>

        </div>

      </div>

    </section>
  );
}

export default TrackOrder;