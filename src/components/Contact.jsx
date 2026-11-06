
import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useLocation } from "react-router-dom";
import "./Contact.css";

const PHONE_NUMBER = "919162512232";

const STORE_ADDRESS =
  "Mushad Construction & Hardware Store, VRJ5+CG3, Garkha-Paterha Road, Khodaibagh, Garkha, Bihar 841415";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(STORE_ADDRESS);

const PRODUCT_CATEGORIES = [
  "Cement",
  "Steel & TMT Bars",
  "Paints",
  "Sanitary Products",
  "Pipes & Fittings",
  "Construction Chemicals",
  "Hardware",
  "Water Tanks",
  "Other Materials",
];

function Contact() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });

  const [formError, setFormError] = useState("");

  // Scroll to enquiry form when arriving through /contact#contact-form
  useEffect(() => {
    if (location.hash !== "#contact-form") {
      return;
    }

    const timer = setTimeout(() => {
      const enquiryForm = document.getElementById("contact-form");

      if (enquiryForm) {
        enquiryForm.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (formError) {
      setFormError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError("");

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    if (!name || !phone || !formData.product) {
      setFormError(
        "Please fill in your name, phone number and product category."
      );
      return;
    }

    const phoneDigits = phone.replace(/\D/g, "");

    if (phoneDigits.length < 10 || phoneDigits.length > 13) {
      setFormError("Please enter a valid phone number.");
      return;
    }

    const whatsappMessage = [
      "Hello Mushad Construction & Hardware Store!",
      "",
      "I would like to enquire about construction materials.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Product Category: ${formData.product}`,
      `Requirement Details: ${
        message || "Please contact me to discuss my requirements."
      }`,
      "",
      "Please share the price and availability. Thank you!",
    ].join("\n");

    const whatsappURL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="contact-page">
      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="contact-container contact-hero-grid">
          <div className="contact-hero-content">
            <span className="contact-eyebrow" />

            <h1>
              Let's Build
              <br />
              <span>Something Stronger.</span>
            </h1>

            <p className="contact-hero-description">
              Looking for reliable construction materials or hardware supplies?
              Connect with our team to discuss your project requirements,
              product availability and enquiries.
            </p>

            <div className="contact-hero-actions">
              <a
                href="#contact-form"
                className="contact-btn contact-btn-primary"
              >
                Send an Enquiry
                <ArrowRight size={18} />
              </a>

              <a
                href={`https://wa.me/${PHONE_NUMBER}`}
                className="contact-btn contact-btn-whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="contact-hero-trust">
              <img
                src="/trust.png"
                alt=""
                className="contact-small-image"
              />

              <span>
                Personal assistance for your material requirements
              </span>
            </div>
          </div>

          <div className="contact-hero-visual">
            <div className="contact-hero-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1100&q=85"
                alt="Construction professionals working on a building project"
                className="contact-hero-image"
              />

              <div className="contact-image-overlay" />

              <div className="contact-image-caption">
                <img
                  src="/building.png"
                  alt="Building"
                  className="contact-caption-icon"
                />

                <div>
                  <strong>Building Better Together</strong>
                  <span>Your project, our support.</span>
                </div>
              </div>
            </div>

            <div className="contact-floating-card">
              <img
                src="/Materials.png"
                alt="Construction materials"
                className="contact-floating-icon"
              />

              <div>
                <strong>Need Materials?</strong>
                <span>Let's discuss your needs.</span>
              </div>
            </div>

            <span className="contact-hero-decoration contact-decoration-one" />
            <span className="contact-hero-decoration contact-decoration-two" />
          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="contact-options-section">
        <div className="contact-container">
          <div className="contact-section-heading">
            <span className="contact-section-label">GET IN TOUCH</span>

            <h2>We're Just a Message Away.</h2>

            <p>
              Choose whichever way is most convenient for you to connect with
              our store.
            </p>
          </div>

          <div className="contact-info-grid">
            {/* STORE */}
            <article className="contact-info-card">
              <div className="contact-info-icon">
                <img
                  src="/map.png"
                  alt="Store"
                  className="contact-option-image"
                />
              </div>

              <h3>Visit Our Store</h3>

              <p>
                Come and discuss your construction requirements.
              </p>

              <strong className="contact-info-detail">
                Khodaibagh, Saran, Bihar
              </strong>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="contact-text-link"
              >
                Get Directions
                <ExternalLink size={15} />
              </a>
            </article>

            {/* PHONE */}
            <article className="contact-info-card">
              <div className="contact-info-icon">
                <img
                  src="/phone.png"
                  alt="Phone"
                  className="contact-option-image"
                />
              </div>

              <h3>Call Our Team</h3>

              <p>
                Speak with us about products and availability.
              </p>

              <strong className="contact-info-detail">
                +91 91625 12232
              </strong>

              <a
                href="tel:+919162512232"
                className="contact-text-link"
              >
                Call Now
                <ArrowRight size={16} />
              </a>
            </article>

            {/* WHATSAPP */}
            <article className="contact-info-card">
              <div className="contact-info-icon contact-whatsapp-icon">
                <img
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  className="contact-option-image"
                />
              </div>

              <h3>WhatsApp Enquiry</h3>

              <p>
                Send your questions directly to our team.
              </p>

              <strong className="contact-info-detail">
                Chat with our store
              </strong>

              <a
                href={`https://wa.me/${PHONE_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="contact-text-link"
              >
                Start Chat
                <ArrowRight size={16} />
              </a>
            </article>

            {/* EMAIL */}
            <article className="contact-info-card">
              <div className="contact-info-icon">
                <img
                  src="/email.png"
                  alt="Email"
                  className="contact-option-image"
                />
              </div>

              <h3>Email Enquiry</h3>

              <p>
                Prefer email? Send your product enquiry to our team.
              </p>

              <strong className="contact-info-detail">
                Get in touch with us
              </strong>

              <a
                href="mailto:"
                className="contact-text-link"
              >
                Email Us
                <ArrowRight size={16} />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* PRODUCT ENQUIRY */}
      <section
        className="contact-enquiry-section"
        id="contact-form"
      >
        <div className="contact-container">
          <div className="contact-enquiry-layout">
            <div className="contact-enquiry-info">
              <span className="contact-section-label">
                PRODUCT ENQUIRY
              </span>

              <h2>
                Tell Us What
                <br />
                Your Project Needs.
              </h2>

              <p className="contact-enquiry-description">
                Share a few details about the materials you're looking for.
                We'll prepare your enquiry message so you can send it to us
                through WhatsApp.
              </p>

              {/* BENEFITS */}
              <div className="contact-benefit-list">
                <div className="contact-benefit">
                  <span className="contact-benefit-icon">
                    <img
                      src="/whatsapp.png"
                      alt=""
                      className="contact-benefit-image"
                    />
                  </span>

                  <div>
                    <strong>Direct Communication</strong>

                    <p>
                      Your enquiry opens directly in WhatsApp.
                    </p>
                  </div>
                </div>

                <div className="contact-benefit">
                  <span className="contact-benefit-icon">
                    <img
                      src="/Materials.png"
                      alt=""
                      className="contact-benefit-image"
                    />
                  </span>

                  <div>
                    <strong>Product Requirements</strong>

                    <p>
                      Tell us which materials you need.
                    </p>
                  </div>
                </div>

                <div className="contact-benefit">
                  <span className="contact-benefit-icon">
                    <img
                      src="/check.png"
                      alt=""
                      className="contact-benefit-image"
                    />
                  </span>

                  <div>
                    <strong>Simple &amp; Convenient</strong>

                    <p>
                      No account creation is required.
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-help-note">
                <img
                  src="/trust.png"
                  alt=""
                  className="contact-small-image"
                />

                <p>
                  Not sure which product you need? Call us and we'll help you
                  get started.
                </p>
              </div>
            </div>

            {/* ENQUIRY FORM */}
            <div className="contact-form-card">
              <div className="contact-form-heading">
                <span className="contact-form-icon">
                  <img
                    src="/enquiry.png"
                    alt=""
                    className="contact-form-heading-image"
                  />
                </span>

                <div>
                  <span className="contact-form-kicker">
                    YOUR ENQUIRY
                  </span>

                  <h3>How can we help?</h3>

                  <p>
                    Fill in the details below to get started.
                  </p>
                </div>
              </div>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">
                      Your Name <span>*</span>
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-phone">
                      Phone Number <span>*</span>
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-product">
                    Product Category <span>*</span>
                  </label>

                  <select
                    id="contact-product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select a product category
                    </option>

                    {PRODUCT_CATEGORIES.map((category) => (
                      <option
                        key={category}
                        value={category}
                      >
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">
                    Requirement Details{" "}
                    <span className="optional-label">
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="3"
                    placeholder="Tell us about the materials, quantity or your project..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {formError && (
                  <p
                    className="contact-form-error"
                    role="alert"
                  >
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  className="contact-submit-button"
                >
                  Continue to WhatsApp
                  <ArrowRight size={17} />
                </button>

                <p className="contact-form-disclaimer">
                  WhatsApp will open with your enquiry details. Review the
                  message and press <strong>Send</strong> there to submit it.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* STORE LOCATION */}
      <section className="contact-location-section">
        <div className="contact-container">
          <div className="contact-location-card">
            <div className="contact-location-content">
              <span className="contact-section-label">
                FIND OUR STORE
              </span>

              <h2>
                Mushad Construction &amp; Hardware Store
              </h2>

              <p className="contact-location-address">
                <img
                  src="/map.png"
                  alt=""
                  className="contact-inline-image"
                />
                Khodaibagh, Garkha, Bihar 841415
              </p>

              <div className="contact-mini-map">
                <iframe
                  title="Mushad Construction & Hardware Store Location"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    "Mushad Construction & Hardware Store, Khodaibagh, Garkha, Bihar 841415"
                  )}&z=15&output=embed`}
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="contact-btn contact-btn-primary contact-map-button"
              >
                Open in Google Maps
                <ExternalLink size={17} />
              </a>
            </div>

            {/* STORE DETAILS */}
            <div className="contact-location-details">
              <div className="contact-detail-row">
                <span className="contact-detail-icon">
                  <img
                    src="/clock.png"
                    alt=""
                    className="contact-detail-image"
                  />
                </span>

                <div>
                  <span className="contact-detail-label">
                    STORE HOURS
                  </span>

                  <strong>7:00 AM – 7:00 PM</strong>

                  <p>Monday – Sunday</p>
                </div>
              </div>

              <div className="contact-detail-row">
                <span className="contact-detail-icon">
                  <img
                    src="/phone.png"
                    alt=""
                    className="contact-detail-image"
                  />
                </span>

                <div>
                  <span className="contact-detail-label">
                    STORE ENQUIRIES
                  </span>

                  <strong>
                    Call or message us for assistance.
                  </strong>

                  <a href="tel:+919162512232">
                    +91 91625 12232
                  </a>
                </div>
              </div>

              <div className="contact-detail-row">
                <span className="contact-detail-icon">
                  <img
                    src="/whatsapp.png"
                    alt=""
                    className="contact-detail-image"
                  />
                </span>

                <div>
                  <span className="contact-detail-label">
                    QUICK SUPPORT
                  </span>

                  <strong>
                    Have a product question?
                  </strong>

                  <a
                    href={`https://wa.me/${PHONE_NUMBER}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
              </div>

              <div className="contact-detail-row">
                <span className="contact-detail-icon">
                  <img
                    src="/email.png"
                    alt=""
                    className="contact-detail-image"
                  />
                </span>

                <div>
                  <span className="contact-detail-label">
                    EMAIL SUPPORT
                  </span>

                  <strong>
                    Send us your questions.
                  </strong>

                  <a href="mailto:">
                    Email our store
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
