import BackButton from "../components/BackButton";

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
        "Sanitary products including wash basins, bathroom fittings and accessories.",
    },
    {
      icon: "🔧",
      title: "Hardware Products",
      description:
        "Useful hardware products including screws, nails, tools and other essentials.",
    },
    {
      icon: "💧",
      title: "Water Tanks",
      description:
        "Durable water storage tanks suitable for homes and commercial requirements.",
    },
    {
      icon: "🧪",
      title: "Construction Chemicals",
      description:
        "Construction chemicals and solutions for different building requirements.",
    },
  ];

  return (
    <>
      <BackButton />

      <div
        style={{
          padding: "35px 8% 80px",
          background: "#fff",
          minHeight: "100vh",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "800",
            marginBottom: "15px",
          }}
        >
          Our Services
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "18px",
            maxWidth: "800px",
            margin: "0 auto 50px",
            lineHeight: "1.7",
          }}
        >
          We provide a wide range of construction materials and
          hardware solutions to meet your building requirements.
        </p>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "#fff",
                padding: "30px 25px",
                borderRadius: "15px",
                boxShadow: "0 8px 20px rgba(0,0,0,.08)",
                border: "1px solid #f1f1f1",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  fontSize: "42px",
                  marginBottom: "15px",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontSize: "21px",
                  marginBottom: "12px",
                  color: "#222",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  textAlign: "left",
                  color: "#666",
                  fontSize: "15px",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "60px",
            padding: "40px",
            borderRadius: "20px",
            background: "#f97316",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "30px",
              marginBottom: "12px",
            }}
          >
            Need Construction Materials?
          </h2>

          <p
            style={{
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            Contact us for product availability and enquiries.
          </p>

          <a
            href="https://wa.me/9162522232"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 25px",
              background: "#fff",
              color: "#f97316",
              textDecoration: "none",
              borderRadius: "25px",
              fontWeight: "bold",
            }}
          >
            💬 Contact Us
          </a>
        </div>
      </div>
    </>
  );
}

export default Services;