import { useState } from "react";
import "./Quote.css";

function Quote() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    material: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = () => {
    const message = `Hello Mushad Construction & Hardware,

Name: ${form.name}
Phone: ${form.phone}

Material Required: ${form.material}
Quantity: ${form.quantity}

Please send me the price and availability.`;

    const url = `https://wa.me/919162512232?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="quote" id="quote">
      <h2>Request a Free Quote</h2>

      <p>
        Tell us what you need and we'll respond on WhatsApp.
      </p>

      <div className="quote-form">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <input
          type="text"
          name="material"
          placeholder="Material Required"
          onChange={handleChange}
        />

        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          onChange={handleChange}
        />

        <button onClick={sendWhatsApp}>
          Send on WhatsApp
        </button>

      </div>
    </section>
  );
}

export default Quote;