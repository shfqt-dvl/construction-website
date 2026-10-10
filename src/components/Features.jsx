import "./Features.css";

function Features() {
  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Quick and reliable delivery of construction materials."
    },
    {
      icon: "🏗️",
      title: "Premium Quality",
      description: "We supply only trusted and high-quality products."
    },
    {
      icon: "💰",
      title: "Affordable Prices",
      description: "Competitive pricing for every construction project."
    },
    {
      icon: "🤝",
      title: "Trusted Service",
      description: "Serving customers with honesty and satisfaction."
    }
  ];

  return (
    <section className="features">
      <h2>Why Choose Us?</h2>

      <div className="feature-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;