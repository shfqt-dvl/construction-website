import "./WhyChooseUs.css";

function WhyChooseUs() {
  const reasons = [
    {
      icon: "⭐",
      title: "Genuine Quality Products",
      description:
        "We focus on genuine construction materials from trusted and established brands.",
    },
    {
      icon: "💰",
      title: "Competitive Pricing",
      description:
        "Get quality construction and hardware products at competitive market prices.",
    },
    {
      icon: "🚚",
      title: "Delivery Support",
      description:
        "We provide delivery support for suitable orders and construction requirements.",
    },
    {
      icon: "🤝",
      title: "Trusted Customer Service",
      description:
        "Our team is available to help customers choose suitable products for their needs.",
    },
    {
      icon: "🏗️",
      title: "Complete Construction Range",
      description:
        "Cement, steel, paints, pipes, sanitaryware, tanks, chemicals and hardware under one roof.",
    },
    {
      icon: "🏪",
      title: "One-Stop Hardware Store",
      description:
        "Save time by finding multiple construction and hardware requirements at one place.",
    },
    {
      icon: "📦",
      title: "Availability Support",
      description:
        "Ask us about current stock, available brands, product options and pricing.",
    },
    {
      icon: "💬",
      title: "Easy WhatsApp Enquiry",
      description:
        "Quickly contact us through WhatsApp to ask about products, prices and availability.",
    },
  ];

  const whatsappMessage =
    "Hello, I need help choosing construction materials.";

  const whatsappURL = `https://wa.me/919162512232?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section id="why-us" className="why fade-in">
      <div className="why-content">

        {/* Heading */}

        <span className="why-label">
          WHY CHOOSE US
        </span>

        <h2>
          Building Trust with{" "}
          <strong>Quality & Service</strong>
        </h2>

        <p>
          Mushad Construction & Hardware Store provides
          construction materials and hardware products for
          homeowners, contractors, builders and construction
          professionals.
        </p>

        {/* Cards */}

        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div
              className="why-box"
              key={index}
            >
              <div className="why-icon">
                {reason.icon}
              </div>

              <h3>
                {reason.title}
              </h3>

              <p>
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom WhatsApp CTA */}

        <div className="why-bottom">

          <div>
            <strong>
              Need help choosing the right material?
            </strong>

            <span>
              Ask our team about your requirement.
            </span>
          </div>

          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Ask on WhatsApp →
          </a>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;