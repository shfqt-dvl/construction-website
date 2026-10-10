import "./CementGallery.css";
import banner2 from "../../assets/banner2.jpg";

function CementGallery() {
  return (
    <main className="cement-gallery-page">

      {/* Hero Banner */}
      <section
        className="cement-gallery-hero"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <div className="cement-gallery-overlay">
          <span> CEMENT GALLERY</span>

          <h1>
            Strength That Builds Tomorrow
          </h1>

          <p>
            Quality cement for strong, durable and
            long-lasting construction.
          </p>
        </div>
      </section>

      {/* Article */}
      <section className="cement-gallery-article">

        <span className="cement-gallery-label">
          ABOUT CEMENT
        </span>

        <h2>
          Building Strong Foundations with Quality Cement
        </h2>

        <p>
          Cement is one of the most important materials
          used in construction. It plays a vital role in
          foundations, columns, beams, slabs, masonry and
          many other construction applications.
        </p>

        <p>
          Choosing suitable and reliable cement is important
          for achieving strong and durable construction.
          Different construction projects may require
          different cement products depending on their
          application and requirements.
        </p>

        <p>
          At Mushad Construction & Hardware Store, we aim
          to provide quality cement products from trusted
          brands for homeowners, builders, contractors and
          construction professionals.
        </p>

      </section>

      {/* Key Points */}
      <section className="cement-gallery-points">

        <span className="cement-gallery-label">
          KEY POINTS
        </span>

        <h2>
          Why Quality Cement Matters
        </h2>

        <div className="cement-gallery-grid">

          <div className="cement-gallery-card">
            <span>🏗️</span>
            <h3>Strong Structures</h3>
            <p>
              Quality cement contributes to strong and
              durable construction.
            </p>
          </div>

          <div className="cement-gallery-card">
            <span>🛡️</span>
            <h3>Durability</h3>
            <p>
              Proper cement selection supports long-term
              structural performance.
            </p>
          </div>

          <div className="cement-gallery-card">
            <span>🏠</span>
            <h3>Wide Applications</h3>
            <p>
              Cement is used in residential, commercial
              and infrastructure construction.
            </p>
          </div>

          <div className="cement-gallery-card">
            <span>✅</span>
            <h3>Trusted Brands</h3>
            <p>
              We provide cement from reputed brands,
              subject to availability.
            </p>
          </div>

        </div>

      </section>

      {/* Applications */}
      <section className="cement-gallery-applications">

        <span className="cement-gallery-label">
          APPLICATIONS
        </span>

        <h2>
          Common Uses of Cement
        </h2>

        <div className="cement-application-list">
          <div>🏠 Residential Construction</div>
          <div>🏢 Commercial Buildings</div>
          <div>🏗️ Foundations & RCC Work</div>
          <div>🧱 Masonry Work</div>
          <div>🛣️ Infrastructure Projects</div>
          <div>🏭 Industrial Construction</div>
        </div>

      </section>

      {/* Brands */}
      <section className="cement-gallery-brands">

        <span className="cement-gallery-label">
          TRUSTED BRANDS
        </span>

        <h2>
          Cement Brands We Offer
        </h2>

        <div className="cement-brand-list">
          <span>Ambuja</span>
          <span>ACC</span>
          <span>Birla</span>
          <span>JSW</span>
          <span>Nuvoco</span>
        </div>

        <p>
          Brand availability may vary. Please contact us
          for current stock and availability.
        </p>

      </section>

      {/* Bottom Slogan */}
      <section className="cement-gallery-slogan">

        <h2>
          Build Strong. Build Smart. Build with Confidence.
        </h2>

        <p>
          Mushad Construction & Hardware Store — Your
          trusted partner for quality construction materials.
        </p>

      </section>

    </main>
  );
}

export default CementGallery;