import "./Stats.css";

import fact1 from "../assets/services/fact1.png";
import fact2 from "../assets/services/fact2.png";
import fact3 from "../assets/services/fact3.png";
import fact4 from "../assets/services/fact4.png";

function Stats() {
  const facts = [
    {
      image: fact1,
      number: "10+",
      title: "Years of Experience",
      text: "Trusted experience in construction materials.",
    },
    {
      image: fact2,
      number: "500+",
      title: "Products",
      text: "Wide range of quality construction products.",
    },
    {
      image: fact3,
      number: "1000+",
      title: "Happy Customers",
      text: "Serving customers with reliable products.",
    },
    {
      image: fact4,
      number: "24/7",
      title: "Customer Support",
      text: "Always ready to help with your requirements.",
    },
  ];

  return (
    <section className="stats-section">

      <div className="stats-container">

        <div className="stats-heading">
          <span>WHY CHOOSE US</span>

          <h2>
            Built on <strong>Trust & Quality</strong>
          </h2>

          <p>
            We provide dependable construction and hardware solutions
            with quality products and customer-focused service.
          </p>
        </div>

        <div className="stats-grid">

          {facts.map((fact, index) => (
            <div className="stat-card" key={index}>

              <div className="stat-image">
                <img
                  src={fact.image}
                  alt={fact.title}
                />
              </div>

              <div className="stat-content">

                <h3>{fact.number}</h3>

                <h4>{fact.title}</h4>

                <p>{fact.text}</p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;