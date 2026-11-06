
import "./Footer.css";

function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Products", href: "#products" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact Us", href: "#contact" },
  ];

  const productLinks = [
    { label: "Construction Materials", href: "#products" },
    { label: "Hardware Tools", href: "#products" },
    { label: "Paints & Finishes", href: "#products" },
    { label: "Plumbing Products", href: "#products" },
    { label: "Sanitary Products", href: "#products" },
  ];

  const contactDetails = [
    {
      label: "Visit Our Store",
      value: "Khodaibagh, Garkha, Bihar 841415",
      image: "/images/store.png",
      href: "https://www.google.com/maps/search/?api=1&query=Mushad+Construction+Hardware+Store+Khodaibagh+Garkha+Bihar+841415",
      external: true,
    },
    {
      label: "Call Our Store",
      value: "+91 91625 12232",
      image: "/images/phone.png",
      href: "tel:+919162512232",
    },
    {
      label: "Email Us",
      value: "barkat.cpr@gmail.com",
      image: "/images/email.png",
      href: "mailto:barkat.cpr@gmail.com",
    },
  ];

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

        {/* STORE BRAND */}

        <div className="footer-section footer-brand-section">
          <div className="footer-brand">
            <img
              src="/images/avatar.png"
              alt="Mushad Construction logo"
              className="footer-logo"
            />

            <div className="footer-brand-text">
              <h2>Mushad Construction</h2>
              <span>&amp; Hardware Store</span>
            </div>
          </div>

          <p className="footer-description">
            Your trusted partner for construction and hardware solutions.
            Explore construction materials, plumbing products, paints,
            sanitary items, hardware tools, and more at our store.
          </p>

          <a
            href="https://wa.me/919162512232"
            target="_blank"
            rel="noreferrer"
            className="footer-whatsapp-link"
          >
            <img src="/images/whatsapp.png" alt="" />
            <span>Chat with Our Team</span>
          </a>
        </div>

        {/* QUICK LINKS */}

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* PRODUCT LINKS */}

        <div className="footer-section">
          <h3>Our Products</h3>

          <ul className="footer-links">
            {productLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT DETAILS */}

        <div className="footer-section footer-contact-section">
          <h3>Contact Us</h3>

          <div className="footer-contact-list">
            {contactDetails.map((detail) => (
              <a
                key={detail.label}
                href={detail.href}
                className="footer-contact-item"
                target={detail.external ? "_blank" : undefined}
                rel={detail.external ? "noreferrer" : undefined}
              >
                <span className="footer-contact-icon">
                  <img src={detail.image} alt="" />
                </span>

                <span className="footer-contact-text">
                  <strong>{detail.label}</strong>
                  <span>{detail.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Mushad Construction &amp; Hardware
          Store. All Rights Reserved.
        </p>

        <a href="#home" className="footer-back-to-top">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
