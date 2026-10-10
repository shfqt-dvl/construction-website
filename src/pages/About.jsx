import BackButton from "../components/BackButton";
import "./About.css";

import aboutImage from "../assets/about/parallax1.jpg";

function About() {
  return (
    <>
      <BackButton />

      <section className="about-page">

        {/* Header */}
        <div className="about-header">
          <span>ABOUT OUR STORE</span>

          <h1>
            About <strong>MUSHAD</strong>
          </h1>

          <p>
            Your trusted partner for quality construction materials
            and hardware products in Khodaibagh, Chapra, Bihar.
          </p>
        </div>

        {/* Main About */}
        <div className="about-main">

          {/* Image */}
          <div className="about-image-box">

            <img
              src={aboutImage}
              alt="Mushad Construction and Hardware Store"
            />

            <div className="about-image-label">
              <strong>MUSHAD</strong>
              <span>Construction & Hardware Store</span>
            </div>

          </div>

          {/* Content */}
          <div className="about-content">

            <span className="about-small-title">
              WHO WE ARE
            </span>

            <h2>
              Building Trust Through
              <strong> Quality & Service</strong>
            </h2>

            <p>
              Mushad Construction & Hardware Store is a trusted
              construction and hardware material store serving
              customers in Khodaibagh, Chapra, Bihar.
            </p>

            <p>
              We provide a wide range of construction materials
              including cement, steel, TMT bars, paints, plumbing
              products, sanitary items and hardware products.
            </p>

            <p>
              Our goal is simple — provide quality products at
              competitive prices while making construction material
              purchasing convenient for our customers.
            </p>

            {/* Features */}
            <div className="about-features">

              <div className="about-feature">
                <span>✓</span>
                <p>Quality Materials</p>
              </div>

              <div className="about-feature">
                <span>✓</span>
                <p>Trusted Brands</p>
              </div>

              <div className="about-feature">
                <span>✓</span>
                <p>Competitive Prices</p>
              </div>

              <div className="about-feature">
                <span>✓</span>
                <p>Reliable Service</p>
              </div>

            </div>

          </div>

        </div>

        {/* Why Choose Us */}
        <div className="why-us">

          <div className="why-us-heading">

            <span>WHY CHOOSE US</span>

            <h2>
              Everything You Need,
              <strong> Under One Roof</strong>
            </h2>

          </div>

          <div className="why-us-grid">

            <div className="why-card">
              <div className="why-icon">🏗️</div>
              <h3>Quality Materials</h3>
              <p>
                Reliable construction and hardware products
                from trusted brands.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">💰</div>
              <h3>Competitive Prices</h3>
              <p>
                Quality construction products at reasonable
                and competitive prices.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>Trusted Service</h3>
              <p>
                Helpful and honest service focused on
                customer satisfaction.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">📦</div>
              <h3>Wide Range</h3>
              <p>
                Multiple construction and hardware categories
                available in one place.
              </p>
            </div>

          </div>

        </div>

        {/* Location */}
        <div className="about-location">

          <div>
            <span>📍</span>
          </div>

          <div>
            <h2>Visit Our Store</h2>

            <p>
              Khodaibagh, Chapra, Bihar
            </p>
          </div>

        </div>

      </section>
    </>
  );
}

export default About;