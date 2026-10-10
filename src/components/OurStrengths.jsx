import "./OurStrengths.css";

function OurStrengths() {
  const strengths = [
    {
      icon: "🏗️",
      number: "08+",
      title: "Product Categories",
      text: "A wide range of construction and hardware materials available for different project requirements.",
    },
    {
      icon: "🏷️",
      number: "20+",
      title: "Trusted Brands",
      text: "Products sourced from established brands across cement, steel, paints, plumbing and more.",
    },
    {
      icon: "⭐",
      number: "Quality",
      title: "Materials",
      text: "We focus on providing genuine and dependable materials for construction requirements.",
    },
    {
      icon: "💬",
      number: "Easy",
      title: "Product Enquiry",
      text: "Contact us easily to check product availability, brands and current pricing.",
    },
  ];

  return (
    <section className="strengths-section">
      <div className="strengths-container">

        {/* Heading */}

        <div className="strengths-heading">
          <span>OUR STRENGTHS</span>

          <h2>
            Why Builders{" "}
            <strong>Choose Us</strong>
          </h2>

          <p>
            From everyday hardware requirements to major
            construction materials, we aim to make sourcing
            quality products simple and convenient.
          </p>
        </div>

        {/* Strength Cards */}

        <div className="strengths-grid">
          {strengths.map((strength, index) => (
            <div
              className="strength-card"
              key={index}
            >
              <div className="strength-icon">
                {strength.icon}
              </div>

              <strong className="strength-number">
                {strength.number}
              </strong>

              <h3>
                {strength.title}
              </h3>

              <p>
                {strength.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OurStrengths;