import "./Services.css";

import serviceIcon1 from "../assets/services/service-icon1.png";
import serviceIcon2 from "../assets/services/service-icon2.png";
import serviceIcon3 from "../assets/services/service-icon3.png";
import serviceIcon4 from "../assets/services/service-icon4.png";
import serviceIcon5 from "../assets/services/service-icon5.png";

function Services() {
  const services = [
    {
      icon: serviceIcon5,
      title: "Cement & Concrete",
      description:
        "Quality cement and concrete materials from trusted brands for foundations, columns, beams, slabs and general construction.",
    },
    {
      icon: serviceIcon1,
      title: "Steel & TMT",
      description:
        "Reliable TMT bars, steel products and coils suitable for residential, commercial and infrastructure projects.",
    },
    {
      icon: serviceIcon3,
      title: "Plumbing Solutions",
      description:
        "PVC, CPVC and UPVC pipes, fittings, taps, showers and water storage solutions for different plumbing requirements.",
    },
    {
      icon: serviceIcon4,
      title: "Paints & Finishing",
      description:
        "Paints and finishing solutions from trusted brands to improve the appearance and protection of interior and exterior surfaces.",
    },
    {
      icon: serviceIcon2,
      title: "Sanitary & Hardware",
      description:
        "Bathroom sanitary products, fittings, screws, nails and essential hardware items for construction and renovation work.",
    },
  ];

  return (
    <section className="services-section" id="services">

      <div className="services-container">

        {/* Heading */}
        <div className="services-heading">

          <span>WHAT WE PROVIDE</span>

          <h2>
            Complete Construction
            <strong> Solutions</strong>
          </h2>

          <p>
            Everything you need for your construction and hardware
            requirements, available under one roof.
          </p>

        </div>

        {/* Services */}
        <div className="services-grid">

          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
            >

              {/* Icon */}
              <div className="service-icon">
                <img
                  src={service.icon}
                  alt={service.title}
                />
              </div>

              {/* Title */}
              <h3>{service.title}</h3>

              {/* Description */}
              <p>{service.description}</p>

              {/* Button */}
              <a
                href="#contact"
                className="service-btn"
              >
                Enquire Now →
              </a>

            </div>
          ))}

        </div>

        {/* Bottom message */}
        <div className="services-bottom">

          <h3>
            Looking for the right construction materials?
          </h3>

          <p>
            Contact Mushad Construction & Hardware Store
            for product information and material enquiries.
          </p>

          <a
            href="#contact"
            className="services-contact-btn"
          >
            Contact Us
          </a>

        </div>

      </div>

    </section>
  );
}

export default Services;