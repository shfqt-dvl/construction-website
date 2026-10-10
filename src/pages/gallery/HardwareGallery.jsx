import "./HardwareGallery.css";
import hardwareBanner from "../../assets/hardware-banner.jpg";

function HardwareGallery() {
  return (
    <main className="hardware-gallery-page">

      <section
        className="hardware-gallery-hero"
        style={{ backgroundImage: `url(${hardwareBanner})` }}
      >
        <div className="hardware-gallery-overlay">
          <span>HARDWARE GALLERY</span>

          <h1>
            The Right Tools for Every Job
          </h1>

          <p>
            Reliable hardware solutions for construction,
            repair, maintenance and everyday building work.
          </p>
        </div>
      </section>

      <section className="hardware-gallery-article">

        <span className="hardware-gallery-label">
          ABOUT HARDWARE
        </span>

        <h2>
          Essential Hardware for Construction and Repair
        </h2>

        <p>
          Hardware products are essential for construction,
          installation, repair and maintenance work. From
          fasteners and hand tools to other everyday hardware
          materials, the right products help make construction
          work easier and more efficient.
        </p>

        <p>
          Different projects require different hardware
          solutions. Choosing suitable materials and tools
          can help improve the quality, safety and efficiency
          of construction and repair work.
        </p>

        <p>
          At Mushad Construction & Hardware Store, we provide
          hardware solutions for homeowners, builders,
          contractors, workers and construction professionals.
        </p>

      </section>

      <section className="hardware-gallery-points">

        <span className="hardware-gallery-label">
          KEY POINTS
        </span>

        <h2>
          Why Good Hardware Matters
        </h2>

        <div className="hardware-gallery-grid">

          <div className="hardware-gallery-card">
            <span>🔧</span>
            <h3>Useful Tools</h3>
            <p>
              Suitable tools help make construction and
              repair work easier.
            </p>
          </div>

          <div className="hardware-gallery-card">
            <span>🔩</span>
            <h3>Reliable Fasteners</h3>
            <p>
              Quality fasteners help create secure
              connections.
            </p>
          </div>

          <div className="hardware-gallery-card">
            <span>🏗️</span>
            <h3>Construction Support</h3>
            <p>
              Hardware plays an important role in many
              construction applications.
            </p>
          </div>

          <div className="hardware-gallery-card">
            <span>🛠️</span>
            <h3>Everyday Applications</h3>
            <p>
              Useful for installation, maintenance and
              general repair work.
            </p>
          </div>

        </div>

      </section>

      <section className="hardware-gallery-applications">

        <span className="hardware-gallery-label">
          APPLICATIONS
        </span>

        <h2>
          Common Hardware Applications
        </h2>

        <div className="hardware-application-list">
          <div>🏠 Home Repair</div>
          <div>🏗️ Construction Work</div>
          <div>🔩 Fastening & Fixing</div>
          <div>🔧 Installation Work</div>
          <div>🛠️ Maintenance</div>
          <div>🏢 Commercial Projects</div>
        </div>

      </section>

      <section className="hardware-gallery-solutions">

        <span className="hardware-gallery-label">
          HARDWARE SOLUTIONS
        </span>

        <h2>
          Materials for Different Jobs
        </h2>

        <div className="hardware-type-list">
          <span>Fasteners</span>
          <span>Hand Tools</span>
          <span>Construction Hardware</span>
          <span>Repair Materials</span>
          <span>General Hardware</span>
        </div>

        <p>
          Product availability may vary. Please contact us
          for current stock and requirements.
        </p>

      </section>

      <section className="hardware-gallery-slogan">

        <h2>
          Build Better. Fix Smarter. Work with Confidence.
        </h2>

        <p>
          Mushad Construction & Hardware Store — Your trusted
          partner for quality construction materials.
        </p>

      </section>

    </main>
  );
}

export default HardwareGallery;