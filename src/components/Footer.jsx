import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>Mushad Construction & Hardware Store</h2>

          <p>
            Your Trusted Partner for Premium Construction & Hardware Solutions.
            We provide quality building materials, plumbing products, paints,
            sanitary items, hardware tools, and much more.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📍 Khodaibagh, Saran, Bihar</p>
          <p>📞 +91 9162512232</p>
          <p>📧 barkat.cpr@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Mushad Construction & Hardware Store. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;