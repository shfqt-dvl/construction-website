import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, HardHat } from "lucide-react";
import "./BlogDetail.css";

const blogArticles = {
  "choosing-right-cement": {
    category: "MATERIAL GUIDE",
    title: "How to Choose the Right Cement for Your Construction",
    intro:
      "Cement plays an important role in the strength, durability and performance of a building. Choosing the right type depends on the construction stage, environmental conditions and project requirements.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
    sections: [
      {
        heading: "1. Understand the Different Types of Cement",
        paragraphs: [
          "Ordinary Portland Cement (OPC) is commonly used for structural work such as columns, beams and slabs. Portland Pozzolana Cement (PPC) is often selected for general construction and masonry because of its workability and long-term performance.",
          "Other cement varieties may be suitable for specific conditions. Always check the intended application and follow the recommendation of your engineer or contractor.",
        ],
      },
      {
        heading: "2. Check the Grade and Application",
        paragraphs: [
          "Cement grades indicate strength characteristics. The grade and type should be selected according to the structural design and the construction work being carried out.",
          "Avoid choosing cement only because it is popular or inexpensive. Different applications can have different requirements.",
        ],
      },
      {
        heading: "3. Inspect Quality Before Purchasing",
        bullets: [
          "Check the manufacturing date and use fresh cement wherever possible.",
          "Ensure the bags are sealed and free from tears or moisture damage.",
          "Look for a consistent product appearance and avoid cement containing hard lumps.",
          "Purchase from a reliable supplier and check the manufacturer’s product details.",
        ],
      },
      {
        heading: "4. Store Cement Properly",
        paragraphs: [
          "Cement should be stored in a dry, covered area away from direct moisture. Keep bags raised from the floor and avoid placing them directly against damp walls.",
          "Use older stock first and keep storage conditions protected from rain and humidity.",
        ],
      },
      {
        heading: "5. Plan the Quantity",
        paragraphs: [
          "Estimate cement requirements using the project drawings and the quantities provided by your contractor. Buying too much can lead to storage problems, while buying too little can interrupt work.",
          "For structural construction, cement selection and mix proportions should be determined by qualified professionals.",
        ],
      },
    ],
    takeaway:
      "Choose cement based on the application, product specifications, freshness and storage condition—not just price. For structural work, follow the engineer’s specifications.",
  },

  "construction-steel-guide": {
    category: "BUILDING TIPS",
    title: "What to Consider When Selecting Construction Steel",
    intro:
      "Steel reinforcement helps concrete structures resist tensile forces. Selecting suitable steel and ensuring proper handling are important steps in building safe and durable structures.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85",
    sections: [
      {
        heading: "1. Select Steel According to the Structural Design",
        paragraphs: [
          "Reinforcement steel is available in different grades and sizes. The required grade, diameter and quantity should be specified by the structural engineer according to the design.",
          "Do not substitute one grade or diameter for another without professional approval.",
        ],
      },
      {
        heading: "2. Check Product Standards and Certification",
        paragraphs: [
          "Ask the supplier for the relevant product specifications and quality documentation. In India, reinforcement bars should comply with the applicable BIS standards for the product.",
          "Verify the manufacturer and product details before making a purchase.",
        ],
      },
      {
        heading: "3. Inspect the Steel",
        bullets: [
          "Check for excessive rust, pitting, cracks or visible damage.",
          "Confirm the diameter and length against the required specification.",
          "Look for consistent rib patterns and product markings.",
          "Ensure the steel is not mixed with unidentified or mismatched material.",
        ],
      },
      {
        heading: "4. Consider Storage and Handling",
        paragraphs: [
          "Steel should be stored off the ground and arranged to avoid contamination with mud, oil or other materials. Keep it organized by size and grade to prevent mix-ups on site.",
          "Surface rust and serious corrosion are not the same; if there is uncertainty about the condition of reinforcement, seek a qualified site professional’s assessment.",
        ],
      },
      {
        heading: "5. Compare Suppliers Carefully",
        paragraphs: [
          "Compare quotations based on grade, size, brand, documentation, delivery and final quantity. A lower price alone may not represent better value if specifications or supply reliability differ.",
        ],
      },
    ],
    takeaway:
      "Use the exact steel specification approved for the project, verify quality documentation and make sure the material is stored and handled properly.",
  },

  "home-renovation-checklist": {
    category: "HOME IMPROVEMENT",
    title: "Planning a Home Renovation: Materials Checklist",
    intro:
      "A well-organized materials checklist helps reduce delays, avoid unnecessary purchases and keep renovation work coordinated. Prepare the list after finalizing the scope and discussing it with your contractor.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    sections: [
      {
        heading: "1. Start with the Scope of Work",
        paragraphs: [
          "Identify which rooms or areas will be renovated and whether the work includes structural changes, flooring, plumbing, electrical work, painting or fixtures.",
          "Measurements and drawings help create more accurate material estimates.",
        ],
      },
      {
        heading: "2. Structural and Masonry Materials",
        bullets: [
          "Cement and other specified binding materials",
          "Sand and aggregates, where required",
          "Bricks, blocks or other masonry units",
          "Reinforcement steel if specified by the engineer",
          "Waterproofing products for designated areas",
        ],
      },
      {
        heading: "3. Flooring and Wall Finishes",
        bullets: [
          "Tiles, stone or selected flooring material",
          "Tile adhesive and grout, where appropriate",
          "Wall putty and primer",
          "Interior or exterior paint",
          "Skirting, trims and finishing accessories",
        ],
      },
      {
        heading: "4. Plumbing and Electrical Requirements",
        paragraphs: [
          "List pipes, fittings, valves, sanitary fixtures and accessories according to the plumbing plan. For electrical work, include approved wires, conduits, switches, sockets and other specified components.",
          "Electrical and plumbing work should be planned and completed by qualified professionals.",
        ],
      },
      {
        heading: "5. Doors, Windows and Hardware",
        bullets: [
          "Door and window frames or replacement units",
          "Locks, handles, hinges and other hardware",
          "Sealants and installation accessories",
          "Cabinet fittings and other selected fixtures",
        ],
      },
      {
        heading: "6. Keep a Purchase and Delivery Plan",
        paragraphs: [
          "Divide purchases by work stage. Arrange bulky materials before the work begins and schedule finishing products closer to the time they will be used.",
          "Keep a record of quantities, supplier quotations, delivery dates and remaining stock. Add a reasonable contingency for wastage or changes after discussing it with your contractor.",
        ],
      },
    ],
    takeaway:
      "A room-wise and work-stage-wise checklist makes renovation easier to manage. Confirm quantities and specifications with your contractor before purchasing.",
  },

  "choosing-home-paint": {
    category: "PAINT & FINISHES",
    title: "Things to Know Before Choosing Paint for Your Home",
    intro:
      "The right paint can improve the appearance of a room and help protect its surfaces. Consider the room’s use, surface condition, finish and maintenance needs before selecting a product.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1400&q=85",
    sections: [
      {
        heading: "1. Choose Paint for the Right Surface",
        paragraphs: [
          "Interior walls, exterior walls, metal and wood may require different paint systems. Check that the product is designed for the surface and environment where it will be applied.",
          "Exterior paint should be selected for weather exposure, while interior paint should suit the room’s usage and cleaning requirements.",
        ],
      },
      {
        heading: "2. Understand Paint Finishes",
        bullets: [
          "Matte: a low-sheen appearance that can help reduce the visibility of minor surface imperfections.",
          "Satin or soft sheen: a balanced finish that may be easier to clean than matte, depending on the product.",
          "Gloss: a reflective finish often used for selected trim or detail surfaces.",
        ],
      },
      {
        heading: "3. Prepare the Surface Properly",
        paragraphs: [
          "Good preparation is essential for a lasting finish. The surface should be clean, dry and free from loose paint, dust and other contaminants.",
          "Cracks, dampness and peeling should be addressed before painting. Primer and putty should be selected according to the surface and paint system.",
        ],
      },
      {
        heading: "4. Consider the Room",
        paragraphs: [
          "Kitchens, bathrooms and high-traffic areas may need products designed for easier cleaning or moisture resistance. For exterior walls, consider exposure to sun, rain and local conditions.",
          "Ask the supplier about the product’s coverage, recommended coats, drying time and maintenance requirements.",
        ],
      },
      {
        heading: "5. Estimate Paint Quantity",
        paragraphs: [
          "Measure the wall area and check the coverage rate printed on the product. Actual consumption depends on surface condition, application method and the number of coats.",
          "A small test patch can help you evaluate the shade and finish under the room’s lighting before painting the full area.",
        ],
      },
    ],
    takeaway:
      "Select paint based on the surface, room conditions and finish you want. Proper preparation and following the manufacturer’s instructions are key to a good result.",
  },

  "pipes-plumbing-guide": {
    category: "PLUMBING",
    title: "Choosing Pipes and Plumbing Materials for Your Building",
    intro:
      "Plumbing systems carry water and manage drainage throughout a building. Pipe material, size and fittings should be selected according to the system’s purpose and installation conditions.",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1400&q=85",
    sections: [
      {
        heading: "1. Identify the Plumbing Application",
        paragraphs: [
          "Water supply, hot water, drainage and rainwater systems may require different pipe materials. First identify the system and the operating conditions before choosing a product.",
        ],
      },
      {
        heading: "2. Understand Common Pipe Materials",
        bullets: [
          "PVC: commonly used in selected drainage and non-hot-water applications, depending on the product specification.",
          "CPVC: used in many hot and cold water supply systems where the product is rated for the application.",
          "HDPE: used in various water supply and underground applications with suitable fittings and installation methods.",
          "Metal pipes: may be selected for specific systems based on design, durability and compatibility requirements.",
        ],
      },
      {
        heading: "3. Check Pipe Size and Pressure Rating",
        paragraphs: [
          "The pipe diameter affects flow and system performance. Pressure rating and temperature limits should suit the intended use.",
          "Pipe sizing should be planned by a qualified plumbing professional, especially for multi-storey buildings.",
        ],
      },
      {
        heading: "4. Select Compatible Fittings",
        bullets: [
          "Use fittings intended for the selected pipe material and size.",
          "Check valves, elbows, tees, couplers and connectors required by the layout.",
          "Use the recommended joining method and installation accessories.",
          "Avoid mixing incompatible products or unverified components.",
        ],
      },
      {
        heading: "5. Consider Installation and Maintenance",
        paragraphs: [
          "Think about access for repairs, protection from physical damage and whether the pipes will be concealed or exposed.",
          "Follow the manufacturer’s installation instructions and conduct appropriate testing before covering pipes or putting the system into use.",
        ],
      },
    ],
    takeaway:
      "Choose plumbing materials according to the system, pressure, temperature and compatibility requirements. Confirm specifications with a qualified plumber.",
  },

  "materials-budget-guide": {
    category: "PROJECT PLANNING",
    title: "How to Prepare a Construction Materials Budget",
    intro:
      "A construction materials budget helps you estimate costs, compare supplier quotations and track spending. A clear budget should include quantities, specifications, delivery and a plan for managing changes.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
    sections: [
      {
        heading: "1. Define the Project Scope",
        paragraphs: [
          "Start with drawings, measurements and the agreed scope of work. A reliable estimate depends on knowing what is included and what is excluded.",
          "For structural materials, use quantities and specifications prepared or approved by the project’s qualified professionals.",
        ],
      },
      {
        heading: "2. Prepare a Materials Quantity List",
        bullets: [
          "Cement, sand and aggregates",
          "Steel reinforcement and structural materials",
          "Bricks, blocks and masonry products",
          "Pipes, fittings and plumbing materials",
          "Electrical materials",
          "Tiles, paint and finishing products",
          "Hardware, fixtures and accessories",
        ],
      },
      {
        heading: "3. Compare Supplier Quotations",
        paragraphs: [
          "Request quotations with product brand, grade, size, unit, quantity and price clearly mentioned. Compare like-for-like specifications rather than only comparing the total amount.",
          "Also check transport charges, unloading, taxes, delivery schedule and payment terms.",
        ],
      },
      {
        heading: "4. Include Delivery and Wastage",
        paragraphs: [
          "Some materials may require additional quantity because of cutting, handling or installation. Discuss realistic allowances with your contractor instead of adding an arbitrary amount.",
          "Consider whether materials need to be delivered in stages to reduce storage issues and damage.",
        ],
      },
      {
        heading: "5. Track Spending During Construction",
        bullets: [
          "Record every purchase and delivery.",
          "Compare actual quantities with the estimate.",
          "Keep invoices and supplier details.",
          "Track unused or returned materials.",
          "Review changes before approving additional purchases.",
        ],
      },
      {
        heading: "6. Maintain a Contingency",
        paragraphs: [
          "Construction projects can encounter price changes, design updates or unforeseen site conditions. A contingency amount can help manage these changes.",
          "The suitable contingency depends on project size, scope certainty and risk. Discuss it with your project manager or contractor.",
        ],
      },
    ],
    takeaway:
      "A useful budget is based on accurate quantities, clear product specifications and regular tracking. Keep supplier quotations and purchase records organized throughout the project.",
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
          {article.sections.map((section, index) => (
            <section className="blog-detail-section" key={section.heading}>
              <h2>{section.heading}</h2>

              {section.paragraphs?.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}

              {section.bullets && (
                <ul>
                  {section.bullets.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
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

            <Link to="/contact" className="blog-detail-contact-button">
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