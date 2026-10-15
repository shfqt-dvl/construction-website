import "./Services.css";

function Services() {
  const services = [
    {
      icon: "🏗️",
      title: "Construction Materials",
      description:
        "Quality construction materials for residential and commercial projects.",
    },
    {
      icon: "🧱",
      title: "Cement & Steel",
      description:
        "Cement and TMT steel products from trusted and well-known brands.",
    },
    {
      icon: "🎨",
      title: "Paints",
      description:
        "Interior and exterior paints for residential and commercial buildings.",
    },
    {
      icon: "🚰",
      title: "Plumbing Products",
      description:
        "PVC, CPVC and UPVC pipes, fittings and other plumbing products.",
    },
    {
      icon: "🚿",
      title: "Sanitary Products",
      description:
        "Wash basins, bathroom fittings and sanitary accessories.",
    },
    {
      icon: "🔧",
      title: "Hardware Products",
      description:
        "Screws, nails, tools and other essential hardware products.",
    },
    {
      icon: "💧",
      title: "Water Tanks",
      description:
        "Durable water storage tanks for homes and commercial buildings.",
    },
    {
      icon: "🧪",
      title: "Construction Chemicals",
      description:
        "Construction chemicals and solutions for different building requirements.",
    },
  ];

  return (
    <section className="services-page">
      {/* Page Header */}
      <div className="services-header">
        <span>WHAT WE OFFER</span>
        <h1>
          Our <strong>Services</strong>
        </h1>
        <p>
          We provide a wide range of construction materials and
          hardware solutions to meet your building requirements.
        </p>
      </div>

      {/* Services Cards */}
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="services-cta">
        <span>LET'S BUILD TOGETHER</span>
        <h2>Need Construction Materials?</h2>
        <p>
          Contact Mushad Construction & Hardware Store for
          product availability, pricing and enquiries.
        </p>
        <a
          href="https://wa.me/919162512232"
          target="_blank"
          rel="noopener noreferrer"
          className="services-cta-button"
        >
          💬 Contact Us on WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Services;