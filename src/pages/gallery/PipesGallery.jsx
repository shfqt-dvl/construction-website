import "./PipesGallery.css";
import pipesBanner from "../../assets/pipes-banner.jpg";

function PipesGallery() {
  return (
    <main className="pipes-gallery-page">

      {/* HERO */}
      <section
        className="pipes-gallery-hero"
        style={{
          backgroundImage: `url(${pipesBanner})`,
        }}
      >
        <div className="pipes-gallery-overlay">

          <span>PIPES & FITTINGS GALLERY</span>

          <h1>
            Reliable Flow. Strong Connections.
          </h1>

          <p>
            Quality pipes and fittings for reliable
            plumbing, water supply and modern
            construction applications.
          </p>

        </div>
      </section>

      {/* ARTICLE */}
      <section className="pipes-gallery-article">

        <span className="pipes-gallery-label">
          ABOUT PIPES & FITTINGS
        </span>

        <h2>
          Reliable Plumbing Solutions for Every Project
        </h2>

        <p>
          Pipes and fittings are essential components
          of modern plumbing and water-management
          systems. They help transport water and other
          suitable fluids safely through residential,
          commercial and construction projects.
        </p>

        <p>
          Choosing suitable pipes and fittings is
          important for creating reliable plumbing
          systems. The right products depend on the
          application, installation requirements and
          project specifications.
        </p>

        <p>
          At Mushad Construction & Hardware Store, we
          aim to provide reliable pipe and fitting
          solutions for homeowners, plumbers, builders,
          contractors and construction professionals.
        </p>

      </section>

      {/* KEY POINTS */}
      <section className="pipes-gallery-points">

        <span className="pipes-gallery-label">
          KEY POINTS
        </span>

        <h2>
          Why Quality Pipes & Fittings Matter
        </h2>

        <div className="pipes-gallery-grid">

          <div className="pipes-gallery-card">
            <span>💧</span>

            <h3>
              Reliable Water Flow
            </h3>

            <p>
              Suitable plumbing products help support
              reliable water-supply systems.
            </p>
          </div>

          <div className="pipes-gallery-card">
            <span>🔧</span>

            <h3>
              Secure Connections
            </h3>

            <p>
              Proper fittings help create dependable
              connections between plumbing components.
            </p>
          </div>

          <div className="pipes-gallery-card">
            <span>🛡️</span>

            <h3>
              Long-Term Performance
            </h3>

            <p>
              Quality products can support durable
              plumbing installations when properly used.
            </p>
          </div>

          <div className="pipes-gallery-card">
            <span>🏠</span>

            <h3>
              Multiple Applications
            </h3>

            <p>
              Pipes and fittings are used across
              residential and commercial projects.
            </p>
          </div>

        </div>

      </section>

      {/* APPLICATIONS */}
      <section className="pipes-gallery-applications">

        <span className="pipes-gallery-label">
          APPLICATIONS
        </span>

        <h2>
          Common Uses of Pipes & Fittings
        </h2>

        <div className="pipes-application-list">

          <div>
            🏠 Residential Plumbing
          </div>

          <div>
            🏢 Commercial Buildings
          </div>

          <div>
            💧 Water Supply Systems
          </div>

          <div>
            🚿 Bathroom Plumbing
          </div>

          <div>
            🏗️ Construction Projects
          </div>

          <div>
            🔧 Plumbing Maintenance
          </div>

        </div>

      </section>

      {/* PIPE SOLUTIONS */}
      <section className="pipes-gallery-solutions">

        <span className="pipes-gallery-label">
          PIPE SOLUTIONS
        </span>

        <h2>
          Different Pipe & Fitting Solutions
        </h2>

        <div className="pipes-solution-list">

          <span>PVC Pipes</span>
          <span>CPVC Pipes</span>
          <span>UPVC Pipes</span>
          <span>Pipe Fittings</span>
          <span>Elbows & Tees</span>
          <span>Connectors</span>

        </div>

        <p>
          Product availability may vary depending on
          current stock and project requirements.
        </p>

      </section>

      {/* BRANDS */}
      <section className="pipes-gallery-brands">

        <span className="pipes-gallery-label">
          TRUSTED BRANDS
        </span>

        <h2>
          Pipe Brands We Offer
        </h2>

        <div className="pipes-brand-list">

          <span>Astral</span>
          <span>Ashirvad</span>
          <span>Supreme</span>
          <span>Finolex</span>

        </div>

        <p>
          Brand availability may vary depending on
          current stock.
        </p>

      </section>

      {/* SLOGAN */}
      <section className="pipes-gallery-slogan">

        <h2>
          Better Connections. Reliable Flow.
        </h2>

        <p>
          Mushad Construction & Hardware Store —
          Your trusted partner for quality
          construction materials.
        </p>

      </section>

    </main>
  );
}

export default PipesGallery;