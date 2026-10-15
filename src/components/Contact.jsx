import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <span>GET IN TOUCH</span>
        <h1>Contact Us</h1>
        <p>
          Have a question about a product or need construction
          materials? Get in touch with us.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="contact-cards">
        <div className="contact-card">
          <div className="contact-icon">📍</div>
          <h3>Visit Us</h3>
          <p>Khodaibagh, Chapra, Bihar</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <h3>Call Us</h3>
          <a href="tel:+919162512232">+91 9162512232</a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">💬</div>
          <h3>WhatsApp</h3>
          <a
            href="https://wa.me/919162512232"
            target="_blank"
            rel="noreferrer"
          >
            Chat With Us
          </a>
        </div>
      </div>

      {/* Product Enquiry */}
      <div className="contact-enquiry">
        <h2>Product Enquiry</h2>
        <p>
          For product prices and availability, contact us directly
          on WhatsApp.
        </p>
        <a
          className="contact-whatsapp-button"
          href="https://wa.me/919162512232"
          target="_blank"
          rel="noreferrer"
        >
          💬 Message Us on WhatsApp
        </a>
      </div>

      {/* Location */}
      <div className="contact-location">
        <h2>📍 Mushad Construction &amp; Hardware Store</h2>
        <p>Khodaibagh, Chapra, Bihar</p>
      </div>
    </section>
  );
}

export default Contact;