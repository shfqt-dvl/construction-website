import "./SteelGallery.css";
import steelBanner from "../../assets/steel-banner.jpg";

function SteelGallery() {
  return (
    <main className="steel-gallery-page">

      {/* Hero Banner */}
      <section
        className="steel-gallery-hero"
        style={{
          backgroundImage: `url(${steelBanner})`,
        }}
      >
        <div className="steel-gallery-overlay">
          <span>STEEL GALLERY</span>

          <h1>
            Strength That Supports Every Structure
          </h1>

          <p>
            Reliable steel solutions for strong,
            durable and long-lasting construction.
          </p>
        </div>
      </section>

      {/* Article */}
      <section className="steel-gallery-article">
        <span className="steel-gallery-label">
          ABOUT STEEL
        </span>

        <h2>
          Building Stronger Structures with Quality Steel
        </h2>

        <p>
          Steel is one of the most important materials
          used in modern construction. It provides strength,
          support and durability to a wide range of
          structures.
        </p>

        <p>
          Steel is commonly used in residential buildings,
          commercial projects, foundations, columns, beams,
          slabs and many other construction applications.
        </p>

        <p>
          At Mushad Construction & Hardware Store, we aim
          to provide reliable steel products for builders,
          contractors, homeowners and construction
          professionals.
        </p>
      </section>

      {/* Key Points */}
      <section className="steel-gallery-points">
        <span className="steel-gallery-label">
          KEY POINTS
        </span>

        <h2>
          Why Quality Steel Matters
        </h2>

        <div className="steel-gallery-grid">

          <div className="steel-gallery-card">
            <span>🏗️</span>
            <h3>High Strength</h3>
            <p>
              Steel provides strong structural support
              for different construction requirements.
            </p>
          </div>

          <div className="steel-gallery-card">
            <span>🛡️</span>
            <h3>Durability</h3>
            <p>
              Properly selected steel supports long-term
              structural performance.
            </p>
          </div>

          <div className="steel-gallery-card">
            <span>🏢</span>
            <h3>Wide Applications</h3>
            <p>
              Steel can be used across residential,
              commercial and industrial projects.
            </p>
          </div>

          <div className="steel-gallery-card">
            <span>⚙️</span>
            <h3>Reliable Material</h3>
            <p>
              Quality steel helps provide dependable
              structural solutions.
            </p>
          </div>

        </div>
      </section>

      {/* Applications */}
      <section className="steel-gallery-applications">
        <span className="steel-gallery-label">
          APPLICATIONS
        </span>

        <h2>
          Common Uses of Steel
        </h2>

        <div className="steel-application-list">
          <div>🏠 Residential Construction</div>
          <div>🏢 Commercial Buildings</div>
          <div>🏗️ RCC Construction</div>
          <div>🏭 Industrial Projects</div>
          <div>🌉 Infrastructure Projects</div>
          <div>🔩 Structural Work</div>
        </div>
      </section>

      {/* Steel Types */}
      <section className="steel-gallery-types">
        <span className="steel-gallery-label">
          STEEL PRODUCTS
        </span>

        <h2>
          Different Steel Solutions
        </h2>

        <div className="steel-type-list">
          <span>TMT Bars</span>
          <span>Steel Coils</span>
          <span>Construction Steel</span>
          <span>Structural Steel</span>
        </div>

        <p>
          Product availability may vary depending on
          current stock and requirements.
        </p>
      </section>

      {/* Slogan */}
      <section className="steel-gallery-slogan">
        <h2>
          Strong Foundations. Stronger Futures.
        </h2>

        <p>
          Mushad Construction & Hardware Store — Your
          trusted partner for quality construction materials.
        </p>
      </section>

    </main>
  );
}

export default SteelGallery;