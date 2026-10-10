import "./SanitaryGallery.css";
import sanitaryBanner from "../../assets/sanitary-banner.jpg";

function SanitaryGallery() {
  return (
    <main className="sanitary-gallery-page">

      <section
        className="sanitary-gallery-hero"
        style={{ backgroundImage: `url(${sanitaryBanner})` }}
      >
        <div className="sanitary-gallery-overlay">
          <span>SANITARY GALLERY</span>

          <h1>
            Comfort, Style and Everyday Convenience
          </h1>

          <p>
            Quality sanitary solutions designed for modern
            bathrooms and everyday living.
          </p>
        </div>
      </section>

      <section className="sanitary-gallery-article">

        <span className="sanitary-gallery-label">
          ABOUT SANITARY PRODUCTS
        </span>

        <h2>
          Creating Better Bathroom Spaces
        </h2>

        <p>
          Sanitary products are an important part of modern
          homes, commercial buildings and other construction
          projects. They combine everyday functionality with
          comfort and design.
        </p>

        <p>
          Choosing suitable sanitary products can help create
          practical, comfortable and attractive bathroom
          spaces. Different projects may require different
          fittings, fixtures and designs.
        </p>

        <p>
          At Mushad Construction & Hardware Store, we aim to
          provide quality sanitary solutions for homeowners,
          builders, contractors and construction professionals.
        </p>

      </section>

      <section className="sanitary-gallery-points">

        <span className="sanitary-gallery-label">
          KEY POINTS
        </span>

        <h2>
          What Makes a Good Sanitary Space?
        </h2>

        <div className="sanitary-gallery-grid">

          <div className="sanitary-gallery-card">
            <span>🚿</span>
            <h3>Everyday Comfort</h3>
            <p>
              Designed to support comfortable everyday
              bathroom use.
            </p>
          </div>

          <div className="sanitary-gallery-card">
            <span>✨</span>
            <h3>Modern Design</h3>
            <p>
              Stylish solutions can improve the appearance
              of bathroom spaces.
            </p>
          </div>

          <div className="sanitary-gallery-card">
            <span>💧</span>
            <h3>Practical Solutions</h3>
            <p>
              Suitable fittings help create functional
              bathroom environments.
            </p>
          </div>

          <div className="sanitary-gallery-card">
            <span>🏠</span>
            <h3>Multiple Spaces</h3>
            <p>
              Suitable for residential and commercial
              bathroom projects.
            </p>
          </div>

        </div>

      </section>

      <section className="sanitary-gallery-applications">

        <span className="sanitary-gallery-label">
          APPLICATIONS
        </span>

        <h2>
          Where Sanitary Products Are Used
        </h2>

        <div className="sanitary-application-list">
          <div>🏠 Residential Bathrooms</div>
          <div>🏢 Commercial Buildings</div>
          <div>🚿 Bathroom Renovation</div>
          <div>🏨 Hotels & Guest Houses</div>
          <div>🏗️ New Construction</div>
          <div>🏪 Commercial Spaces</div>
        </div>

      </section>

      <section className="sanitary-gallery-brands">

        <span className="sanitary-gallery-label">
          TRUSTED BRANDS
        </span>

        <h2>
          Sanitary Brands We Offer
        </h2>

        <div className="sanitary-brand-list">
          <span>Glocera</span>
          <span>Parryware</span>
          <span>Hindware</span>
          <span>Cera</span>
        </div>

        <p>
          Brand availability may vary depending on current
          stock.
        </p>

      </section>

      <section className="sanitary-gallery-slogan">

        <h2>
          Better Bathrooms. Better Living.
        </h2>

        <p>
          Mushad Construction & Hardware Store — Your trusted
          partner for quality construction materials.
        </p>

      </section>

    </main>
  );
}

export default SanitaryGallery;