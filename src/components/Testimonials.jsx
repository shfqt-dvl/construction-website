
import {
    Star,
    ArrowUpRight,
    MessageSquareText,
} from "lucide-react";
import "./Testimonials.css";

const googleReviewLink =
    "https://www.google.com/maps/place/Mushad+Construction+%26+Hardware+Store/@25.8810118,84.8087876,600m/data=!3m1!1e3!4m8!3m7!1s0x3992b71a36fff781:0x2f51f6456ef6744a!8m2!3d25.8810118!4d84.8087876!9m1!1b1!16s%2Fg%2F11gf1rlhbj?entry=ttu&g_ep=EgoyMDI2MTExNS4wIKXMDSoASAFQAw%3D%3D";

function Testimonials() {
    const reviews = [
        {
            name: "Raziur Rahman",
            role: "Customer",
            rating: 5,
            text: "A good place to find construction materials. The product range is useful and the overall shopping experience was convenient.",
        },
        {
            name: "MD Faizan",
            role: "Customer",
            rating: 5,
            text: "Good variety of construction and hardware products. Helpful service and a convenient place for different building requirements.",
        },
        {
            name: "Manauwer Ali",
            role: "Customer",
            rating: 5,
            text: "Good collection of materials with helpful staff. A useful store for construction and hardware-related needs.",
        },
        {
            name: "Juned Alam",
            role: "Customer",
            rating: 5,
            text: "A convenient place for construction products. Good product options and a helpful experience overall.",
        },
        {
            name: "Mr. Azad Alam",
            role: "Contractor",
            rating: 5,
            text: "Good range of construction materials. It is convenient to find different products for regular construction work in one place.",
        },
        {
            name: "Mr. Danish Khan",
            role: "Builder",
            rating: 5,
            text: "A useful store for building materials and hardware requirements. The product selection makes it easier to explore different options.",
        },
    ];

    const openGoogleReview = () => {
        window.open(
            googleReviewLink,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <section className="testimonials-section">
            <div className="testimonial-bg-design">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="testimonials-container">

                <div className="testimonials-heading">
                    <span>TESTIMONIALS</span>
                    <h2>
                        What Our Customers <strong>Say</strong>
                    </h2>
                    <p>
                        We value the trust and experiences of our customers.
                    </p>
                </div>

                <div className="google-review-heading">
                    <span className="google-g">G</span>
                    <span>Customer Reviews</span>
                    <span className="feedback-line"></span>
                </div>

                <div className="testimonials-grid">
                    {reviews.map((item) => (
                        <div className="review-card" key={item.name}>
                            <div className="review-card-top">
                                <div className="review-avatar">
                                    {item.name.charAt(0)}
                                </div>

                                <div className="review-user">
                                    <h3>{item.name}</h3>
                                    <span>{item.role}</span>
                                </div>

                                <span className="google-mini">G</span>
                            </div>

                            <div className="review-stars">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        fill={
                                            i < item.rating ? "#fbbc04" : "none"
                                        }
                                        color={
                                            i < item.rating ? "#fbbc04" : "#64748b"
                                        }
                                    />
                                ))}
                            </div>

                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* SHARE EXPERIENCE BAR */}

                <div className="share-experience-bar">
                    <div className="share-experience-info">
                        <div className="share-icon">
                            <MessageSquareText size={22} />
                        </div>

                        <div>
                            <h3>Share Your Experience</h3>
                            <p>
                                Your feedback helps us serve you better.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="share-review-button"
                        onClick={openGoogleReview}
                    >
                        Write a Review
                        <ArrowUpRight size={17} />
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Testimonials;
