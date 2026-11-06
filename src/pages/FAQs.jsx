
import { Link } from "react-router-dom";
import {
  ChevronDown,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import "./FAQs.css";

const faqGroups = [
  {
    heading: "Products & Availability",
    questions: [
      {
        question: "What types of products does MUSHAD offer?",
        answer:
          "Our website features categories such as cement, steel, paints, pipes, hardware, sanitaryware, construction chemicals and water tanks. Contact us to confirm the products currently available.",
      },
      {
        question: "How can I check whether a product is available?",
        answer:
          "Visit the relevant product page or contact our team with the product name, brand and quantity you require. Availability should be confirmed directly with the store.",
      },
      {
        question: "Can I enquire about a particular brand?",
        answer:
          "Yes. Contact us with the product category and brand name. Our team can help you check the relevant product information and availability.",
      },
    ],
  },
  {
    heading: "Orders & Pricing",
    questions: [
      {
        question: "How can I get a price quotation?",
        answer:
          "Contact our team with your required materials, approximate quantities and any relevant specifications. We can discuss the quotation process and applicable prices.",
      },
      {
        question: "Can I enquire about bulk material requirements?",
        answer:
          "You can contact us with your material list, quantity estimates and project requirements. The team can discuss availability and the next steps.",
      },
      {
        question: "Does the website support online ordering?",
        answer:
          "This website provides product information and contact options. Please contact the store to confirm the current ordering, payment and delivery arrangements.",
      },
    ],
  },
  {
    heading: "Construction Support",
    questions: [
      {
        question: "Can you help me identify the materials I need?",
        answer:
          "You can share your general project requirements with our team. For structural design, material specifications and quantities, consult a qualified engineer or construction professional.",
      },
      {
        question: "How do I contact MUSHAD?",
        answer:
          "Visit the Contact Us page to find the available contact methods. You can also use the WhatsApp or call buttons on the website if those details are configured correctly.",
      },
    ],
  },
];

function Faqs() {
  return (
    <main className="faqs-page">

 {/* Hero Section */}
<section className="faqs-hero">
  <img
    src="/faqs1.jpg"
    alt="Construction materials and building work"
    className="faqs-hero-image"
  />

  <div className="faqs-hero-overlay"></div>

  <div className="faqs-hero-content">
    <span className="faqs-eyebrow">HERE TO HELP</span>

    <h1>
      Frequently Asked
      <br />
      <span>Questions.</span>
    </h1>

    <p>
      Find answers to common questions about products,
      availability, quotations and getting in touch with our team.
    </p>

    <a href="#faq-list" className="faqs-hero-button">
      Explore FAQs
      <ChevronDown size={18} aria-hidden="true" />
    </a>
  </div>
</section>

      {/* FAQ Content */}
      <section className="faqs-content" id="faq-list">
        <div className="faqs-heading">
          <span className="faqs-eyebrow">QUICK ANSWERS</span>

          <h2>How Can We Help?</h2>

          <p>
            Choose a topic below and expand a question to read its answer.
          </p>
        </div>

        <div className="faqs-layout">
          {/* Questions */}
          <div className="faqs-questions">
            {faqGroups.map((group) => (
              <section className="faq-group" key={group.heading}>
                <h3>{group.heading}</h3>

                {group.questions.map((faq) => (
                  <details
                    className="faq-item"
                    key={faq.question}
                  >
                    <summary>
                      <span>{faq.question}</span>

                      <ChevronDown
                        size={20}
                        className="faq-chevron"
                        aria-hidden="true"
                      />
                    </summary>

                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </section>
            ))}
          </div>

          {/* Contact Card */}
          <aside className="faqs-contact-card">
            <span className="faqs-contact-icon">
              <MessageCircle
                size={27}
                aria-hidden="true"
              />
            </span>

            <span className="faqs-eyebrow">
              STILL HAVE QUESTIONS?
            </span>

            <h3>Let's Talk About Your Requirements.</h3>

            <p>
              Contact our team for product enquiries, availability
              and information about your construction material needs.
            </p>

            <Link
              to="/contact"
              className="faqs-contact-button"
            >
              Contact Us
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Faqs;
