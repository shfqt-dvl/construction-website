import BackButton from "../components/BackButton";

function Contact() {
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
          Contact Us
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
          Have a question about a product or need construction
          materials? Get in touch with us.
        </p>

        {/* Contact Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              padding: "30px",
              background: "#f9fafb",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,.06)",
            }}
          >
            <div style={{ fontSize: "40px" }}>📍</div>

            <h3 style={{ margin: "15px 0 10px" }}>
              Visit Us
            </h3>

            <p style={{ color: "#666" }}>
              Khodaibagh, Chapra, Bihar
            </p>
          </div>

          <div
            style={{
              padding: "30px",
              background: "#f9fafb",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,.06)",
            }}
          >
            <div style={{ fontSize: "40px" }}>📞</div>

            <h3 style={{ margin: "15px 0 10px" }}>
              Call Us
            </h3>

            <a
              href="tel:+919162512232"
              style={{
                color: "#f97316",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              +91 9162512232
            </a>
          </div>

          <div
            style={{
              padding: "30px",
              background: "#f9fafb",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,.06)",
            }}
          >
            <div style={{ fontSize: "40px" }}>💬</div>

            <h3 style={{ margin: "15px 0 10px" }}>
              WhatsApp
            </h3>

            <a
              href="https://wa.me/9162512232"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#f97316",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Chat With Us
            </a>
          </div>
        </div>

        {/* Enquiry Section */}
        <div
          style={{
            maxWidth: "750px",
            margin: "0 auto",
            padding: "35px",
            background: "#f9fafb",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,.06)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "25px",
              fontSize: "28px",
            }}
          >
            Product Enquiry
          </h2>

          <p
            style={{
              color: "#666",
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            For product prices, availability or orders, contact us
            directly on WhatsApp.
          </p>

          <a
            href="https://wa.me/9162512232"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "block",
              width: "fit-content",
              margin: "0 auto",
              padding: "14px 30px",
              background: "#f97316",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "30px",
              fontWeight: "bold",
            }}
          >
            💬 Message Us on WhatsApp
          </a>
        </div>

        {/* Location */}
        <div
          style={{
            marginTop: "50px",
            textAlign: "center",
            padding: "30px",
            background: "#fff7ed",
            borderRadius: "15px",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>
            📍 Mushad Construction & Hardware Store
          </h2>

          <p style={{ color: "#555" }}>
            Khodaibagh, Chapra, Bihar
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;