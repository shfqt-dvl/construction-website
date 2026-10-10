import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useUser } from "@clerk/react";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const { isSignedIn, isLoaded, user } = useUser();

  const {
    cart,
    cartTotal,
    addOrder,
    clearCart,
  } = useCart();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "Cash on Delivery",
    message: "",
  });

  /* Loading Clerk */
  if (!isLoaded) {
    return (
      <div className="account-loading">
        Loading checkout...
      </div>
    );
  }

  /* Login required */
  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }

  /* Empty cart */
  if (cart.length === 0) {
    return (
      <div className="account-loading">
        <h2>Your cart is empty.</h2>
        <p>Please add products before checkout.</p>
      </div>
    );
  }

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = (e) => {
    e.preventDefault();

    /* Clean phone number */
    const cleanPhone = customer.phone.replace(/\s+/g, "");

    /* Validate Indian mobile number */
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(cleanPhone)) {
      alert(
        "Please enter a valid 10-digit Indian mobile number."
      );
      return;
    }

    /* Generate Order ID */
    const orderId =
      "MUSHAD-" +
      Date.now().toString().slice(-6);

    /* Order date */
    const orderDate =
      new Date().toLocaleString("en-IN");

    /* Order items for WhatsApp */
    const orderItems = cart
      .map(
        (item) =>
          `${item.name} - ${item.quantity} ${
            item.unit
          } - ₹${item.price * item.quantity}`
      )
      .join("\n");

    /* WhatsApp message */
    const whatsappMessage = `Hello Mushad Construction & Hardware Store,

I want to place an order.

ORDER ID: ${orderId}
ORDER DATE: ${orderDate}

CUSTOMER DETAILS
Name: ${customer.name}
Phone: ${cleanPhone}
Address: ${customer.address}
City: ${customer.city}
Payment Method: ${customer.paymentMethod}

ORDER DETAILS
${orderItems}

TOTAL AMOUNT: ₹${cartTotal}

Additional Message:
${customer.message || "None"}

Please confirm my order and availability.`;

    /* WhatsApp link */
    const whatsappLink =
      `https://wa.me/919162512232?text=` +
      encodeURIComponent(whatsappMessage);

    /* Create order */
    const orderData = {
      orderId,

      /* Clerk user ID */
      userId: user.id,

      /* Clerk account information */
      userEmail:
        user.primaryEmailAddress?.emailAddress || "",

      userName:
        user.fullName ||
        user.firstName ||
        customer.name,

      orderDate,

      customerName: customer.name,
      phone: cleanPhone,
      address: customer.address,
      city: customer.city,

      paymentMethod:
        customer.paymentMethod,

      total: cartTotal,

      status: "Order Placed",

      items: cart,
    };

    /* Save order */
    addOrder(orderData);

    /* Open WhatsApp */
    window.open(
      whatsappLink,
      "_blank"
    );

    /*
      Go to success page BEFORE clearing the cart.
      This prevents the empty-cart screen
      from appearing before Order Success.
    */
    navigate("/order-success", {
      state: {
        orderId,
        orderDate,
        customerName: customer.name,
        total: cartTotal,
      },
    });

    /*
      Clear cart after navigation.
      The order has already been saved above.
    */
    clearCart();
  };

  return (
    <section className="checkout-page">

      <h1>Checkout</h1>

      <p className="checkout-subtitle">
        Enter your details to place your order.
      </p>

      <div className="checkout-container">

        {/* Customer Form */}
        <form
          className="checkout-form"
          onSubmit={placeOrder}
        >

          <h2>Customer Details</h2>

          {/* Name */}
          <label>Full Name</label>

          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          {/* Phone */}
          <label>Phone Number</label>

          <input
            type="tel"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
            placeholder="Enter 10-digit mobile number"
            maxLength="10"
            required
          />

          {/* Address */}
          <label>Address</label>

          <textarea
            name="address"
            value={customer.address}
            onChange={handleChange}
            placeholder="Enter your complete address"
            rows="4"
            required
          />

          {/* City */}
          <label>City</label>

          <input
            type="text"
            name="city"
            value={customer.city}
            onChange={handleChange}
            placeholder="Enter your city"
            required
          />

          {/* Payment */}
          <label>Payment Method</label>

          <div className="payment-options">

            <label className="payment-option">

              <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={
                  customer.paymentMethod ===
                  "Cash on Delivery"
                }
                onChange={handleChange}
              />

              <span>
                💵 Cash on Delivery
              </span>

            </label>

            <label className="payment-option">

              <input
                type="radio"
                name="paymentMethod"
                value="Online Payment"
                checked={
                  customer.paymentMethod ===
                  "Online Payment"
                }
                onChange={handleChange}
              />

              <span>
                💳 Online Payment
              </span>

            </label>

          </div>

          {/* Message */}
          <label>Additional Message</label>

          <textarea
            name="message"
            value={customer.message}
            onChange={handleChange}
            placeholder="Any additional instructions (optional)"
            rows="3"
          />

          {/* Place Order */}
          <button
            type="submit"
            className="place-order-btn"
          >
            💬 Place Order on WhatsApp
          </button>

        </form>

        {/* Order Summary */}
        <div className="checkout-summary">

          <h2>Order Summary</h2>

          {cart.map((item) => (

            <div
              className="checkout-item"
              key={item.id}
            >

              <div>

                <strong>
                  {item.name}
                </strong>

                <p>
                  {item.quantity} × ₹
                  {item.price}
                </p>

              </div>

              <strong>
                ₹
                {item.price *
                  item.quantity}
              </strong>

            </div>

          ))}

          {/* Total */}
          <div className="checkout-total">

            <span>Total</span>

            <strong>
              ₹{cartTotal}
            </strong>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Checkout;