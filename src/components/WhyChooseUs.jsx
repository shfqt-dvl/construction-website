import {
  Star,
  BadgeIndianRupee,
  Truck,
  Headset,
  Building2,
  Store,
  PackageCheck,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import "./WhyChooseUs.css";

const reasons = [
  {
    icon: Star,
    title: "Genuine Quality Products",
    description:
      "We focus on genuine construction materials from trusted and established brands.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Competitive Pricing",
    description:
      "Get quality construction and hardware products at competitive market prices.",
  },
  {
    icon: Truck,
    title: "Delivery Support",
    description:
      "We provide delivery support for suitable orders and construction requirements.",
  },
  {
    icon: Headset,
    title: "Trusted Customer Service",
    description:
      "Our team is available to help customers choose suitable products for their needs.",
  },
  {
    icon: Building2,
    title: "Complete Construction Range",
    description:
      "Cement, steel, paints, pipes, sanitaryware, tanks, chemicals and hardware under one roof.",
  },
  {
    icon: Store,
    title: "One-Stop Hardware Store",
    description:
      "Save time by finding multiple construction and hardware requirements at one place.",
  },
  {
    icon: PackageCheck,
    title: "Availability Support",
    description:
      "Ask us about current stock, available brands, product options and pricing.",
  },
  {
    icon: MessageCircle,
    title: "Easy WhatsApp Enquiry",
    description:
      "Contact us through WhatsApp to ask about products, prices and availability.",
  },
];

const whatsappURL = `https://wa.me/919162512232?text=${encodeURIComponent(
  "Hello, I need help choosing construction materials."
)}`;

function WhyChooseUs() {
  return (
    <section id="why-us" className="why-section">
      <div className="why-content">
        <div className="why-heading">
          <span className="why-label">WHY CHOOSE US</span>

          <h2>
            Building Trust with{" "}
            <strong>Quality &amp; Service</strong>
          </h2>

          <p>
            Mushad Construction &amp; Hardware Store provides
            construction materials and hardware products for
            homeowners, contractors, builders and construction
            professionals.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article className="why-box" key={reason.title}>
                <div className="why-icon">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>

                <span className="why-card-decoration" aria-hidden="true">
                  <ArrowUpRight size={19} />
                </span>
              </article>
            );
          })}
        </div>

        <div className="why-bottom">
          <div className="why-bottom-content">
            <span className="why-bottom-icon">
              <MessageCircle size={25} />
            </span>

            <div>
              <strong>Need help choosing the right material?</strong>
              <span>Ask our team about your requirements.</span>
            </div>
          </div>

          <a
            href={whatsappURL}
            className="why-whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={19} />
            Ask on WhatsApp
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;