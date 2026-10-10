import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! We will contact you shortly.");
  };

  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h2>
            Let's Talk About Your
            <strong> Construction Needs</strong>
          </h2>

          <p className="contact-intro">
            Need cement, steel, pipes, paints, sanitary products
            or other construction materials? Contact Mushad
            Construction & Hardware Store for product information,
            availability and enquiries.
          </p>

          {/* CONTACT DETAILS */}

          <div className="contact-details">

            <div className="contact-info-box">
              <div className="contact-icon">
                📍
              </div>

              <div>
                <h3>Visit Our Store</h3>
                <p>
                  Khodaibagh, Saran,
                  <br />
                  Bihar, India
                </p>
              </div>
            </div>

            <div className="contact-info-box">
              <div className="contact-icon">
                📞
              </div>

              <div>
                <h3>Call Us</h3>
                <p>
                  +91 9162512232
                </p>
              </div>
            </div>

            <div className="contact-info-box">
              <div className="contact-icon">
                💬
              </div>

              <div>
                <h3>WhatsApp Enquiry</h3>
                <p>
                  Contact us for product availability
                  and current prices.
                </p>
              </div>
            </div>

            <div className="contact-info-box">
              <div className="contact-icon">
                📧
              </div>

              <div>
                <h3>Email Us</h3>
                <p>
                  barkat.cpr@gmail.com
                </p>
              </div>
            </div>

          </div>

          {/* BUSINESS NOTE */}

          <div className="contact-note">
            <span>🏗️</span>

            <div>
              <strong>Looking for construction materials?</strong>

              <p>
                Tell us what you need and our team will
                help you with the available options.
              </p>
            </div>
          </div>

        </div>


        {/* RIGHT SIDE - FORM */}

        <div className="contact-form-card">

          <span className="contact-form-label">
            SEND AN ENQUIRY
          </span>

          <h2>
            How Can We Help?
          </h2>

          <p>
            Fill in your details and send us your enquiry.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="contact-form-row">

              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
              />

            </div>

            <input
              type="email"
              placeholder="Your Email"
            />

            <select defaultValue="" required>
              <option value="" disabled>
                What are you looking for?
              </option>

              <option value="cement">
                Cement
              </option>

              <option value="steel">
                Steel & TMT
              </option>

              <option value="paints">
                Paints
              </option>

              <option value="pipes">
                Pipes & Fittings
              </option>

              <option value="water-tanks">
                Water Tanks
              </option>

              <option value="sanitary">
                Sanitary Products
              </option>

              <option value="chemicals">
                Construction Chemicals
              </option>

              <option value="hardware">
                Hardware
              </option>

              <option value="other">
                Other
              </option>
            </select>

            <textarea
              rows="5"
              placeholder="Tell us what you need..."
              required
            ></textarea>

            <button type="submit">
              Send Enquiry
              <span>→</span>
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;