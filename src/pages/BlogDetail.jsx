
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, HardHat } from "lucide-react";
import "./BlogDetail.css";

const blogArticles = {
  "choosing-right-cement": {
    category: "MATERIAL GUIDE",
    title: "How to Choose the Right Cement for Your Construction",
    intro:
      "The right cement improves the strength and durability of a building. Choose it according to your construction needs and project specifications.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
    sections: [
      {
        heading: "1. Understand Cement Types",
        paragraphs: [
          "OPC is commonly used for structural work, while PPC is suitable for general construction and masonry. Select the type according to your project requirements.",
        ],
      },
      {
        heading: "2. Check the Grade",
        paragraphs: [
          "Cement grade should match the structural design. Always follow your engineer’s recommendation instead of choosing only by price.",
        ],
      },
      {
        heading: "3. Check Cement Quality",
        bullets: [
          "Check the manufacturing date.",
          "Avoid damaged or moisture-exposed bags.",
          "Look for hard lumps.",
          "Buy from a trusted supplier.",
        ],
      },
      {
        heading: "4. Store Cement Properly",
        paragraphs: [
          "Keep cement in a dry, covered area, raised above the floor and away from moisture. Use older stock first.",
        ],
      },
    ],
    takeaway:
      "Choose cement based on its type, grade, quality and freshness. Follow the specifications approved for your project.",
  },

  "construction-steel-guide": {
    category: "BUILDING TIPS",
    title: "What to Consider When Selecting Construction Steel",
    intro:
      "Construction steel strengthens concrete structures. Choosing the right grade and maintaining proper quality are essential for safe construction.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85",
    sections: [
      {
        heading: "1. Choose the Right Grade",
        paragraphs: [
          "Steel grade, diameter and quantity should match the structural design. Do not replace specified steel without professional approval.",
        ],
      },
      {
        heading: "2. Check Quality Standards",
        paragraphs: [
          "Verify the manufacturer, product markings and applicable BIS standards before purchasing reinforcement steel.",
        ],
      },
      {
        heading: "3. Inspect the Steel",
        bullets: [
          "Check for cracks and excessive rust.",
          "Confirm diameter and length.",
          "Look for proper product markings.",
          "Avoid unidentified materials.",
        ],
      },
      {
        heading: "4. Store Steel Properly",
        paragraphs: [
          "Keep steel above ground and away from mud, oil and other contaminants. Store different sizes and grades separately.",
        ],
      },
      {
        heading: "5. Compare Suppliers",
        paragraphs: [
          "Compare brand, grade, price, quality documentation and delivery before finalizing your supplier.",
        ],
      },
    ],
    takeaway:
      "Always use the specified steel grade and purchase quality-verified materials from a reliable supplier.",
  },

  "home-renovation-checklist": {
    category: "HOME IMPROVEMENT",
    title: "Planning a Home Renovation: Materials Checklist",
    intro:
      "A proper materials checklist helps organize renovation work, control expenses and reduce unnecessary purchases.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    sections: [
      {
        heading: "1. Plan Your Renovation",
        paragraphs: [
          "Decide which areas need renovation and finalize the work with your contractor before purchasing materials.",
        ],
      },
      {
        heading: "2. Basic Construction Materials",
        bullets: [
          "Cement, sand and aggregates",
          "Bricks or blocks",
          "Steel, if required",
          "Waterproofing materials",
        ],
      },
      {
        heading: "3. Flooring and Paint",
        bullets: [
          "Tiles or flooring materials",
          "Tile adhesive and grout",
          "Wall putty and primer",
          "Interior or exterior paint",
        ],
      },
      {
        heading: "4. Plumbing and Electrical",
        paragraphs: [
          "Prepare a list of pipes, fittings, wires, switches and fixtures according to the approved layout.",
        ],
      },
      {
        heading: "5. Doors and Hardware",
        bullets: [
          "Doors and window fittings",
          "Locks, handles and hinges",
          "Cabinet accessories",
          "Sealants and installation items",
        ],
      },
      {
        heading: "6. Manage Purchases",
        paragraphs: [
          "Buy materials in stages, track delivery dates and keep purchase records to avoid wastage and delays.",
        ],
      },
    ],
    takeaway:
      "Plan materials according to each renovation stage and confirm quantities with your contractor.",
  },

  "choosing-home-paint": {
    category: "PAINT & FINISHES",
    title: "Things to Know Before Choosing Paint for Your Home",
    intro:
      "The right paint improves the appearance of your home and protects surfaces. Consider the room, surface and finish before choosing a product.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1400&q=85",
    sections: [
      {
        heading: "1. Choose Paint for the Surface",
        paragraphs: [
          "Interior walls, exterior walls, metal and wood require different paint products. Select paint according to the surface and environment.",
        ],
      },
      {
        heading: "2. Understand Paint Finishes",
        bullets: [
          "Matte: Smooth, low-shine appearance.",
          "Satin: Balanced finish with easier cleaning.",
          "Gloss: Shiny finish for selected surfaces.",
        ],
      },
      {
        heading: "3. Prepare the Surface",
        paragraphs: [
          "Clean the surface and repair cracks, peeling paint or dampness. Use suitable primer and putty before painting.",
        ],
      },
      {
        heading: "4. Consider Room Conditions",
        paragraphs: [
          "Kitchens and bathrooms may require moisture-resistant paint, while exterior walls need protection against weather.",
        ],
      },
      {
        heading: "5. Estimate Paint Quantity",
        paragraphs: [
          "Measure the wall area and check the product coverage. Test the shade under your room’s lighting before applying it everywhere.",
        ],
      },
    ],
    takeaway:
      "Choose paint according to the surface, finish and room conditions. Proper preparation ensures a better result.",
  },

  "pipes-plumbing-guide": {
    category: "PLUMBING",
    title: "Choosing Pipes and Plumbing Materials for Your Building",
    intro:
      "A reliable plumbing system depends on the right pipes, fittings and installation methods for water supply and drainage.",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1400&q=85",
    sections: [
      {
        heading: "1. Identify the Application",
        paragraphs: [
          "Water supply, drainage and hot water systems may require different pipe materials. Choose according to the system’s purpose.",
        ],
      },
      {
        heading: "2. Common Pipe Materials",
        bullets: [
          "PVC: Commonly used for drainage.",
          "CPVC: Suitable for many hot and cold water systems.",
          "HDPE: Used in water supply and underground applications.",
          "Metal pipes: Selected for specific requirements.",
        ],
      },
      {
        heading: "3. Check Pipe Size and Pressure",
        paragraphs: [
          "Pipe diameter, pressure rating and temperature limits should match the plumbing design.",
        ],
      },
      {
        heading: "4. Choose Compatible Fittings",
        bullets: [
          "Use matching pipe fittings.",
          "Check elbows, tees and connectors.",
          "Follow the recommended joining method.",
          "Avoid incompatible components.",
        ],
      },
      {
        heading: "5. Plan Installation",
        paragraphs: [
          "Ensure proper pipe placement, maintenance access and testing before covering or using the plumbing system.",
        ],
      },
    ],
    takeaway:
      "Choose pipes according to application, pressure and compatibility. Consult a qualified plumber for installation.",
  },

  "materials-budget-guide": {
    category: "PROJECT PLANNING",
    title: "How to Prepare a Construction Materials Budget",
    intro:
      "A clear materials budget helps estimate construction costs, compare suppliers and manage project spending.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
    sections: [
      {
        heading: "1. Define the Project Scope",
        paragraphs: [
          "Finalize drawings, measurements and work requirements before estimating material costs.",
        ],
      },
      {
        heading: "2. Prepare a Materials List",
        bullets: [
          "Cement, sand and aggregates",
          "Steel and masonry materials",
          "Pipes and electrical supplies",
          "Tiles, paint and finishing products",
          "Hardware and fixtures",
        ],
      },
      {
        heading: "3. Compare Supplier Quotations",
        paragraphs: [
          "Compare product specifications, quantity, brand, price, transport charges and delivery terms.",
        ],
      },
      {
        heading: "4. Plan Delivery and Wastage",
        paragraphs: [
          "Estimate realistic material quantities and arrange deliveries according to the construction schedule.",
        ],
      },
      {
        heading: "5. Track Your Expenses",
        bullets: [
          "Record every purchase.",
          "Keep invoices and quotations.",
          "Track delivered quantities.",
          "Monitor unused materials.",
        ],
      },
      {
        heading: "6. Keep a Contingency",
        paragraphs: [
          "Set aside a reasonable amount for unexpected expenses or changes after discussing the project risks with your contractor.",
        ],
      },
    ],
    takeaway:
      "A good construction budget includes accurate quantities, clear specifications and regular expense tracking.",
  },
};

function BlogDetail() {
  const { slug } = useParams();
  const article = blogArticles[slug];

  if (!article) {
    return (
      <main className="blog-detail-page">
        <div className="blog-not-found">
          <h1>Article Not Found</h1>
          <p>The blog article you are looking for may have moved.</p>

          <Link to="/blogs" className="blog-back-link">
            <ArrowLeft size={17} />
            Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="blog-detail-page">
      <section className="blog-detail-hero">
        <div className="blog-detail-hero-overlay" />

        <div className="blog-detail-hero-content">
          <Link to="/blogs" className="blog-back-link">
            <ArrowLeft size={17} />
            Back to Blogs
          </Link>

          <span className="blog-detail-category">
            <BookOpen size={15} />
            {article.category}
          </span>

          <h1>{article.title}</h1>
          <p>{article.intro}</p>
        </div>
      </section>

      <article className="blog-detail-content">
        <div className="blog-detail-image">
          <img src={article.image} alt={article.title} />
        </div>

        <div className="blog-detail-body">
          {article.sections.map((section) => (
            <section
              className="blog-detail-section"
              key={section.heading}
            >
              <h2>{section.heading}</h2>

              {section.paragraphs?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              {section.bullets && (
                <ul>
                  {section.bullets.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="blog-detail-contact">
            <div className="blog-detail-contact-icon">
              <HardHat size={22} />
            </div>

            <div className="blog-detail-contact-text">
              <span>NEED HELP WITH YOUR PROJECT?</span>
              <h3>Let’s find the right materials.</h3>
              <p>
                Talk to the Mushad Construction &amp; Hardware Store team
                about your material requirements.
              </p>
            </div>

            <Link
              to="/contact"
              className="blog-detail-contact-button"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

export default BlogDetail;
