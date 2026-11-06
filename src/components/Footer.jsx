import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import "./Footer.css";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "All Products", path: "/products" },
  { label: "All Services", path: "/services" },
  { label: "Our Projects", path: "/projects" },
  { label: "Gallery", path: "/gallery" },
  { label: "Blogs", path: "/blogs" },
  { label: "FAQs", path: "/faqs" },
  { label: "Contact Us", path: "/contact" },
];

const productLinks = [
  { label: "Cement", path: "/products/cement" },
  { label: "Steel & TMT Bars", path: "/products/steel" },
  { label: "Paints", path: "/products/paints" },
  { label: "Pipes", path: "/products/pipes" },
  { label: "Water Tanks", path: "/products/water-tanks" },
  { label: "Sanitary Products", path: "/products/sanitary" },
  { label: "Construction Chemicals", path: "/products/chemicals" },
  { label: "Hardware Products", path: "/products/hardware" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* SHOP BRAND */}
        <div className="footer-section footer-brand">
          <Link to="/" className="footer-brand-heading">
            <img
              src="/company.png"
              alt="Mushad Construction & Hardware Store logo"
              className="footer-logo"
            />

            <span>
              Mushad Construction
              <strong>&amp; Hardware Store</strong>
            </span>
          </Link>

          <p className="footer-description">
            Your Trusted Partner for Premium Construction &amp;
            Hardware Solutions. We provide quality building
            materials, plumbing products, paints, sanitary items,
            hardware tools, and much more.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>

          <ul>
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* PRODUCT LINKS */}
        <div className="footer-section footer-links">
          <h3>Our Products</h3>

          <ul>
            {productLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section footer-contact">
          <h3>Contact</h3>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <MapPin size={19} />
            </span>

            <div>
              <strong>Our Location</strong>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Mushad+Construction+Hardware+Store+Khodaibagh+Garkha+Bihar+841415"
                target="_blank"
                rel="noopener noreferrer"
              >
                Khodaibagh, Saran, Bihar
              </a>
            </div>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <Phone size={19} />
            </span>

            <div>
              <strong>Call Us</strong>

              <a href="tel:+919162512232">
                +91 9162512232
              </a>
            </div>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <Mail size={19} />
            </span>

            <div>
              <strong>Email Us</strong>

              <a href="mailto:mushadconstruction@gmail.com">
                mushadconstruction@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Mushad Construction &amp;
          Hardware Store. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;