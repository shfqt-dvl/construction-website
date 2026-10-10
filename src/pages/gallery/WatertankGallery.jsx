import "./WatertankGallery.css";
import waterTankBanner from "../../assets/water-tank-banner.jpg";

function WatertankGallery() {
  return (
    <main className="watertank-gallery-page">

      {/* HERO */}
      <section
        className="watertank-gallery-hero"
        style={{
          backgroundImage: `url(${waterTankBanner})`,
        }}
      >
        <div className="watertank-gallery-overlay">

          <span>WATER TANK GALLERY</span>

          <h1>
            Store Water. Secure Your Supply.
          </h1>

          <p>
            Reliable water storage solutions for homes,
            buildings and construction projects.
          </p>

        </div>
      </section>

      {/* ARTICLE */}
      <section className="watertank-gallery-article">

        <span className="watertank-gallery-label">
          ABOUT WATER TANKS
        </span>

        <h2>
          Reliable Water Storage for Everyday Needs
        </h2>

        <p>
          Water tanks play an important role in storing
          water for residential, commercial and other
          building requirements.
        </p>

        <p>
          A suitable water storage solution should be
          selected according to the building, available
          space, water requirement and installation
          conditions.
        </p>

        <p>
          At Mushad Construction & Hardware Store, we aim
          to provide reliable water storage solutions for
          homeowners, builders, contractors and construction
          professionals.
        </p>

      </section>

      {/* KEY POINTS */}
      <section className="watertank-gallery-points">

        <span className="watertank-gallery-label">
          KEY POINTS
        </span>

        <h2>
          Important Features of Water Storage
        </h2>

        <div className="watertank-gallery-grid">

          <div className="watertank-gallery-card">
            <span>💧</span>

            <h3>Water Storage</h3>

            <p>
              Provides convenient storage for everyday
              water requirements.
            </p>
          </div>

          <div className="watertank-gallery-card">
            <span>🏠</span>

            <h3>Residential Use</h3>

            <p>
              Suitable water storage solutions for homes
              and residential buildings.
            </p>
          </div>

          <div className="watertank-gallery-card">
            <span>🏢</span>

            <h3>Commercial Use</h3>

            <p>
              Water storage solutions can also support
              commercial buildings.
            </p>
          </div>

          <div className="watertank-gallery-card">
            <span>🛡️</span>

            <h3>Long-Term Utility</h3>

            <p>
              Properly selected tanks can provide dependable
              water storage over time.
            </p>
          </div>

        </div>

      </section>

      {/* APPLICATIONS */}
      <section className="watertank-gallery-applications">

        <span className="watertank-gallery-label">
          APPLICATIONS
        </span>

        <h2>
          Common Water Tank Applications
        </h2>

        <div className="watertank-application-list">

          <div>🏠 Homes</div>
          <div>🏢 Commercial Buildings</div>
          <div>🏨 Hotels & Guest Houses</div>
          <div>🏫 Institutions</div>
          <div>🏗️ Construction Projects</div>
          <div>🏪 Shops & Commercial Spaces</div>

        </div>

      </section>

      {/* BRANDS */}
      <section className="watertank-gallery-brands">

        <span className="watertank-gallery-label">
          WATER TANK BRANDS
        </span>

        <h2>
          Trusted Water Tank Brands
        </h2>

        <div className="watertank-brand-list">

          <span>Balaji</span>
          <span>Prince</span>
          <span>Astral</span>

        </div>

        <p>
          Brand availability may vary depending on current
          stock.
        </p>

      </section>

      {/* SLOGAN */}
      <section className="watertank-gallery-slogan">

        <h2>
          Store Smart. Stay Prepared.
        </h2>

        <p>
          Mushad Construction & Hardware Store — Your trusted
          partner for quality construction materials.
        </p>

      </section>

    </main>
  );
}

export default WatertankGallery;