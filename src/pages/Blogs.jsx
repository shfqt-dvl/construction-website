
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  HardHat,
  Layers3,
  Paintbrush,
  House,
  Wrench,
  ClipboardList,
} from "lucide-react";

import "./Blogs.css";

const articles = [
  {
    slug: "choosing-right-cement",
    category: "MATERIAL GUIDE",
    title: "How to Choose the Right Cement for Your Construction",
    description:
      "Understand the key factors to consider when selecting cement for different building requirements.",
    type: "Construction Guide",
    icon: Layers3,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85",
  },
  {
    slug: "construction-steel-guide",
    category: "BUILDING TIPS",
    title: "What to Consider When Selecting Construction Steel",
    description:
      "Learn about steel quality, intended applications and important checks before purchasing construction materials.",
    type: "Material Guide",
    icon: HardHat,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=85",
  },
  {
    slug: "home-renovation-checklist",
    category: "HOME IMPROVEMENT",
    title: "Planning a Home Renovation: Materials Checklist",
    description:
      "Prepare a practical checklist of materials to discuss with your contractor before renovation work begins.",
    type: "Planning Tips",
    icon: House,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    slug: "choosing-home-paint",
    category: "PAINT & FINISHES",
    title: "Things to Know Before Choosing Paint for Your Home",
    description:
      "Explore finishes, surface preparation and room requirements before starting a painting project.",
    type: "Finishing Guide",
    icon: Paintbrush,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1000&q=85",
  },
  {
    slug: "pipes-plumbing-guide",
    category: "PLUMBING",
    title: "Choosing Pipes and Plumbing Materials for Your Building",
    description:
      "Understand the factors that matter when selecting pipes and plumbing products for a building.",
    type: "Product Guide",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    slug: "materials-budget-guide",
    category: "PROJECT PLANNING",
    title: "How to Prepare a Construction Materials Budget",
    description:
      "Organise material estimates, compare quotations and track expenses throughout your project.",
    type: "Planning Guide",
    icon: ClipboardList,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85",
  },
];

function Blogs() {
  return (
    <main className="blogs-page">
      {/* Hero banner */}
      <section className="blogs-hero">
        <div className="blogs-hero-overlay" />

        <div className="blogs-hero-decoration blogs-decoration-one" />
        <div className="blogs-hero-decoration blogs-decoration-two" />

        <div className="blogs-hero-content">
          <span className="blogs-eyebrow">
            <BookOpen size={15} />
            THE MUSHAD KNOWLEDGE DESK
          </span>

          <h1>
            Knowledge That
            <br />
            <span>Builds Better.</span>
          </h1>

          <p>
            Practical ideas, material guides and helpful insights
            to make your construction and home improvement projects
            easier to plan.
          </p>

          <a href="#latest-articles" className="blogs-hero-button">
            Explore Articles
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Articles */}
      <section className="blogs-content" id="latest-articles">
        <div className="blogs-section-heading">
          <div>
            <span className="blogs-section-label">
              KNOWLEDGE FOR EVERY PROJECT
            </span>

            <h2>
              Insights &amp; <span>Articles</span>
            </h2>

            <p>
              Useful information to help you understand materials,
              plan projects and make informed decisions.
            </p>
          </div>

          <div className="blogs-count">
            <BookOpen size={18} />
            <span>Building Resources</span>
          </div>
        </div>

        <div className="blogs-grid">
          {articles.map((article, index) => {
            const Icon = article.icon;
            const articleLink = `/blogs/${article.slug}`;

            return (
              <article
                className="blog-card"
                key={article.slug}
                style={{
                  "--blog-delay": `${index * 90}ms`,
                }}
              >
                {/* Article image */}
                <Link
                  to={articleLink}
                  className="blog-image-link"
                  aria-label={`Read ${article.title}`}
                >
                  <div className="blog-image">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                    />

                    <div className="blog-image-overlay" />
                  </div>
                </Link>

                {/* Article content */}
                <div className="blog-card-content">
                  <div className="blog-date">
                    <span className="blog-date-icon">
                      <Icon size={15} />
                    </span>

                    {article.type}
                  </div>

                  <h3>{article.title}</h3>

                  <p>{article.description}</p>

                  <Link
                    to={articleLink}
                    className="blog-read-more"
                    aria-label={`Read more about ${article.title}`}
                  >
                    <span>Read More</span>
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom information panel */}
        <div className="blogs-info-panel">
          <div className="blogs-info-icon">
            <HardHat size={25} />
          </div>

          <div className="blogs-info-content">
            <span>PLANNING YOUR NEXT PROJECT?</span>

            <h3>
              Good construction starts with the right information.
            </h3>

            <p>
              Understand your material requirements before making
              important decisions about your project.
            </p>
          </div>

          <Link to="/contact" className="blogs-info-button">
            Talk to Our Team
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="blogs-cta">
        <div className="blogs-cta-inner">
          <div className="blogs-cta-icon">
            <Wrench size={25} />
          </div>

          <div className="blogs-cta-text">
            <span>WE'RE HERE TO HELP</span>

            <h2>Need Help Choosing Building Materials?</h2>

            <p>
              Contact Mushad Construction &amp; Hardware Store to
              discuss your product requirements.
            </p>
          </div>

          <Link to="/contact" className="blogs-cta-button">
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Blogs;
