
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { X } from "lucide-react";
import "./Quote.css";

const WHATSAPP_NUMBER = "919162512232";

function Quote({ onClose, isPopup = false }) {
  const [searchParams] = useSearchParams();
  const serviceFromUrl = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: serviceFromUrl,
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Mushad Construction & Hardware!

I would like to discuss my project.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Project Details: ${formData.message || "Not provided"}

Please contact me to discuss further.`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className={`quote-page ${isPopup ? "quote-page-popup" : ""}`}>
      <section className="quote-section">
        <div className="quote-intro">
          {isPopup && (
            <button
              type="button"
              className="quote-close-btn"
              onClick={onClose}
              aria-label="Close quote form"
            >
              <X size={22} />
            </button>
          )}

          <span className="quote-eyebrow">
            LET'S BUILD SOMETHING GREAT
          </span>

          <h1>
            Get a <span>Free Quote</span>
          </h1>

          <p>
            Tell us about your project. Our team will connect with you
            to discuss your requirements and the best possible solution.
          </p>

          <div className="quote-info">
            <div className="quote-info-icon">✦</div>
            <div>
              <h3>Have a project in mind?</h3>
              <p>
                Share your details and let's bring your vision to life.
              </p>
            </div>
          </div>
        </div>

        <div className="quote-form-card">
          <div className="quote-form-heading">
            <span>PROJECT ENQUIRY</span>
            <h2>Discuss Your Project</h2>
            <p>Fill in your details and we'll get in touch.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="quote-field">
              <label htmlFor="quote-name">Full Name *</label>
              <input
                id="quote-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="quote-field">
              <label htmlFor="quote-phone">Phone Number *</label>
              <input
                id="quote-phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9+\-\s]{10,15}"
                title="Please enter a valid phone number"
                required
              />
            </div>

            <div className="quote-field">
              <label htmlFor="quote-service">Service Required *</label>
              <select
                id="quote-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="Residential">Residential Construction</option>
                <option value="Commercial">Commercial Construction</option>
                <option value="Industrial">Industrial Construction</option>
                <option value="Renovation">Renovation & Remodeling</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="quote-field">
              <label htmlFor="quote-message">Project Details</label>
              <textarea
                id="quote-message"
                name="message"
                placeholder="Tell us a little about your project..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="quote-submit-btn">
              Send Enquiry on WhatsApp
              <span>↗</span>
            </button>

            <p className="quote-form-note">
              Your enquiry will open directly in WhatsApp.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Quote;
