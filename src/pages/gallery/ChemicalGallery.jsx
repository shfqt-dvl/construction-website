import "./ChemicalGallery.css";
import chemicalBanner from "../../assets/chemicals-banner.jpg";

function ChemicalGallery() {
  return (
    <main className="chemical-gallery-page">

      {/* HERO */}
      <section
        className="chemical-gallery-hero"
        style={{ backgroundImage: `url(${chemicalBanner})` }}
      >
        <div className="chemical-gallery-overlay">
          <span>CONSTRUCTION CHEMICALS</span>

          <h1>
            Better Protection. Stronger Construction.
          </h1>

          <p>
            Quality construction chemicals for repair,
            protection, waterproofing and long-lasting
            building performance.
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="chemical-gallery-article">

        <span className="chemical-gallery-label">
          ABOUT CONSTRUCTION CHEMICALS
        </span>

        <h2>
          Protecting and Improving Modern Construction
        </h2>

        <p>
          Construction chemicals are specially developed
          materials used to improve the performance,
          protection and durability of buildings and
          construction surfaces.
        </p>

        <p>
          They can be used for applications such as
          waterproofing, concrete repair, crack treatment,
          bonding, sealing and surface protection. Choosing
          the right solution depends on the construction
          requirement and application.
        </p>

        <p>
          At Mushad Construction & Hardware Store, we aim
          to provide reliable construction chemical solutions
          for homeowners, builders, contractors and
          construction professionals.
        </p>

      </section>

      {/* KEY POINTS */}
      <section className="chemical-gallery-points">

        <span className="chemical-gallery-label">
          KEY POINTS
        </span>

        <h2>
          Why Construction Chemicals Matter
        </h2>

        <div className="chemical-gallery-grid">

          <div className="chemical-gallery-card">
            <span>💧</span>

            <h3>Waterproofing</h3>

            <p>
              Helps protect suitable construction areas
              against water-related problems.
            </p>
          </div>

          <div className="chemical-gallery-card">
            <span>🛠️</span>

            <h3>Repair Solutions</h3>

            <p>
              Useful for selected repair and maintenance
              applications.
            </p>
          </div>

          <div className="chemical-gallery-card">
            <span>🛡️</span>

            <h3>Surface Protection</h3>

            <p>
              Helps improve protection and durability of
              construction surfaces.
            </p>
          </div>

          <div className="chemical-gallery-card">
            <span>🏗️</span>

            <h3>Construction Support</h3>

            <p>
              Suitable solutions can improve performance
              in different construction applications.
            </p>
          </div>

        </div>

      </section>

      {/* APPLICATIONS */}
      <section className="chemical-gallery-applications">

        <span className="chemical-gallery-label">
          APPLICATIONS
        </span>

        <h2>
          Common Uses of Construction Chemicals
        </h2>

        <div className="chemical-application-list">

          <div>💧 Waterproofing</div>
          <div>🏗️ Concrete Protection</div>
          <div>🛠️ Concrete Repair</div>
          <div>🔧 Crack Treatment</div>
          <div>🧱 Bonding & Adhesion</div>
          <div>🏠 Building Maintenance</div>

        </div>

      </section>

      {/* SOLUTIONS */}
      <section className="chemical-gallery-solutions">

        <span className="chemical-gallery-label">
          CHEMICAL SOLUTIONS
        </span>

        <h2>
          Solutions for Different Construction Needs
        </h2>

        <div className="chemical-solution-list">

          <span>Waterproofing Solutions</span>
          <span>Repair Solutions</span>
          <span>Bonding Solutions</span>
          <span>Surface Protection</span>
          <span>Construction Maintenance</span>

        </div>

        <p>
          Product availability may vary. Please contact us
          for current products and requirements.
        </p>

      </section>

      {/* SLOGAN */}
      <section className="chemical-gallery-slogan">

        <h2>
          Protect Today. Build Better Tomorrow.
        </h2>

        <p>
          Mushad Construction & Hardware Store — Your
          trusted partner for quality construction materials.
        </p>

      </section>

    </main>
  );
}

export default ChemicalGallery;