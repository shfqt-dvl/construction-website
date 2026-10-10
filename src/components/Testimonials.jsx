import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Home Builder",
      rating: "★★★★★",
      text: "Good range of construction materials and helpful service. It is convenient to get multiple materials from one store.",
    },
    {
      name: "Amit Singh",
      role: "Contractor",
      rating: "★★★★★",
      text: "The staff is helpful and the product range is good for regular construction requirements. I would recommend this store.",
    },
    {
      name: "Mohammad Asif",
      role: "Homeowner",
      rating: "★★★★★",
      text: "I was able to find the materials I needed for my house construction. The team helped me understand the available options.",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        {/* Heading */}

        <div className="testimonials-heading">
          <span>WHAT OUR CUSTOMERS SAY</span>

          <h2>
            Trusted by{" "}
            <strong>Our Customers</strong>
          </h2>

          <p>
            We value the trust of homeowners, builders,
            contractors and customers who choose us for
            their construction requirements.
          </p>
        </div>

        {/* Testimonials */}

        <div className="testimonials-grid">

          {testimonials.map((testimonial, index) => (
            <div
              className="testimonial-card"
              key={index}
            >

              <div className="testimonial-top">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3>
                    {testimonial.name}
                  </h3>

                  <span>
                    {testimonial.role}
                  </span>
                </div>
              </div>

              <div className="testimonial-rating">
                {testimonial.rating}
              </div>

              <p>
                "{testimonial.text}"
              </p>

              <div className="testimonial-quote">
                “
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;