import "./PaintGallery.css";
import paintsBanner from "../../assets/paints-banner.jpg";

function PaintGallery() {
  return (
    <main className="paint-gallery-page">

      {/* Hero Banner */}
      <section
        className="paint-gallery-hero"
        style={{
          backgroundImage: `url(${paintsBanner})`,
        }}
      >
        <div className="paint-gallery-overlay">
          <span>PAINT GALLERY</span>

          <h1>
            Add Colour. Create Beautiful Spaces.
          </h1>

          <p>
            Quality paints and colour solutions for
            beautiful, protected and long-lasting spaces.
          </p>
        </div>
      </section>

      {/* Article */}
      <section className="paint-gallery-article">
        <span className="paint-gallery-label">
          ABOUT PAINTS
        </span>

        <h2>
          Bringing Colour and Protection to Every Space
        </h2>

        <p>
          Paint plays an important role in improving the
          appearance of homes, offices, commercial buildings
          and other spaces. It can add colour while also
          helping protect surfaces.
        </p>

        <p>
          Different surfaces and environments may require
          different types of paint. Choosing a suitable
          product can help achieve the desired appearance
          and finish.
        </p>

        <p>
          At Mushad Construction & Hardware Store, we aim
          to provide quality paint solutions for homeowners,
          builders, contractors and construction
          professionals.
        </p>
      </section>

      {/* Key Points */}
      <section className="paint-gallery-points">
        <span className="paint-gallery-label">
          KEY POINTS
        </span>

        <h2>
          Why Quality Paint Matters
        </h2>

        <div className="paint-gallery-grid">

          <div className="paint-gallery-card">
            <span>🎨</span>
            <h3>
              Beautiful Finishes
            </h3>
            <p>
              Quality paints can help create attractive
              and appealing spaces.
            </p>
          </div>

          <div className="paint-gallery-card">
            <span>🛡️</span>
            <h3>
              Surface Protection
            </h3>
            <p>
              Paint can help protect surfaces from
              everyday environmental conditions.
            </p>
          </div>

          <div className="paint-gallery-card">
            <span>🏠</span>
            <h3>
              Multiple Applications
            </h3>
            <p>
              Paint solutions are available for different
              residential and commercial requirements.
            </p>
          </div>

          <div className="paint-gallery-card">
            <span>✨</span>
            <h3>
              Modern Colours
            </h3>
            <p>
              Different colours and finishes help create
              the desired look for a space.
            </p>
          </div>

        </div>
      </section>

      {/* Applications */}
      <section className="paint-gallery-applications">
        <span className="paint-gallery-label">
          APPLICATIONS
        </span>

        <h2>
          Where Paints Are Used
        </h2>

        <div className="paint-application-list">
          <div>🏠 Residential Buildings</div>
          <div>🏢 Offices & Commercial Buildings</div>
          <div>🏪 Shops & Showrooms</div>
          <div>🏨 Hotels & Guest Houses</div>
          <div>🏭 Industrial Spaces</div>
          <div>🎨 Interior & Exterior Surfaces</div>
        </div>
      </section>

      {/* Paint Types */}
      <section className="paint-gallery-types">
        <span className="paint-gallery-label">
          PAINT SOLUTIONS
        </span>

        <h2>
          Different Paint Solutions
        </h2>

        <div className="paint-type-list">
          <span>Interior Paints</span>
          <span>Exterior Paints</span>
          <span>Wall Finishes</span>
          <span>Protective Coatings</span>
        </div>

        <p>
          Product availability may vary depending on
          current stock and requirements.
        </p>
      </section>

      {/* Brands */}
      <section className="paint-gallery-brands">
        <span className="paint-gallery-label">
          TRUSTED BRANDS
        </span>

        <h2>
          Paint Brands We Offer
        </h2>

        <div className="paint-brand-list">
          <span>Nerolac</span>
          <span>Asian Paints</span>
          <span>Birla Opus</span>
        </div>

        <p>
          Brand availability may vary depending on
          current stock.
        </p>
      </section>

      {/* Slogan */}
      <section className="paint-gallery-slogan">
        <h2>
          Colour Your World. Protect Your Space.
        </h2>

        <p>
          Mushad Construction & Hardware Store — Your
          trusted partner for quality construction materials.
        </p>
      </section>

    </main>
  );
}

export default PaintGallery;