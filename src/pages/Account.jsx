
import { useUser, useClerk } from "@clerk/react";
import { Navigate, Link } from "react-router-dom";
import "./Account.css";

function Account() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return (
      <div className="account-loading">
        <div className="account-loader"></div>
        <p>Loading your account...</p>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }

  const name =
    user.fullName ||
    user.firstName ||
    user.username ||
    "Valued Customer";

  const email =
    user.primaryEmailAddress?.emailAddress || "Email not available";

  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const memberSince = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-IN", {
        month: "long",
        year: "numeric",
      })
    : "Mushad Customer";

  return (
    <main className="account-page">
      <section className="account-hero">
        <span className="account-eyebrow">MY ACCOUNT</span>

        <h1>
          Welcome back, <span>{name.split(" ")[0]}!</span>
        </h1>

        <p>
          Your personal space for a stronger building experience.
        </p>
      </section>

      <section className="account-dashboard">
        <div className="account-profile-card">
          <div className="account-avatar">{initials}</div>

          <div className="account-profile-info">
            <span className="account-small-label">
              YOUR ACCOUNT
            </span>

            <h2>{name}</h2>
            <p className="account-email">{email}</p>

            <span className="account-status">
              <span className="account-status-dot"></span>
              Signed in successfully
            </span>
          </div>

          <button
            className="account-logout"
            onClick={() => signOut({ redirectUrl: "/login" })}
          >
            <span>↪</span> Logout
          </button>
        </div>

        <div className="account-welcome-card">
          <div className="account-welcome-content">
            <span className="account-small-label">
              BUILD WITH CONFIDENCE
            </span>

            <h2>Your next project starts here.</h2>

            <p>
              Explore quality construction materials, discover
              trusted brands, and connect with our team for your
              building requirements.
            </p>

            <Link to="/products" className="account-primary-btn">
              Explore Products <span>→</span>
            </Link>
          </div>

          <div className="account-building-icon" aria-hidden="true">
            🏗️
          </div>
        </div>

        <div className="account-section-heading">
          <div>
            <span className="account-small-label">QUICK ACCESS</span>
            <h2>How can we help you?</h2>
          </div>
        </div>

        <div className="account-action-grid">
          <Link to="/products" className="account-action-card">
            <div className="account-action-icon">🧱</div>
            <h3>Explore Products</h3>
            <p>
              Browse cement, steel, paints, pipes, and more.
            </p>
            <span className="account-action-link">
              View Products →
            </span>
          </Link>

          <Link to="/services" className="account-action-card">
            <div className="account-action-icon">🛠️</div>
            <h3>Our Services</h3>
            <p>
              Discover how we can support your construction needs.
            </p>
            <span className="account-action-link">
              Explore Services →
            </span>
          </Link>

          <a
            href="https://wa.me/919162512232"
            target="_blank"
            rel="noopener noreferrer"
            className="account-action-card"
          >
            <div className="account-action-icon">💬</div>
            <h3>Product Enquiry</h3>
            <p>
              Contact our team for product details and pricing.
            </p>
            <span className="account-action-link">
              Chat on WhatsApp →
            </span>
          </a>

          <a href="/#contact" className="account-action-card">
            <div className="account-action-icon">📍</div>
            <h3>Contact Mushad</h3>
            <p>
              Have a question? Get in touch with our team.
            </p>
            <span className="account-action-link">
              Contact Us →
            </span>
          </a>
        </div>

        <div className="account-member-note">
          <span className="account-member-icon">✓</span>
          <div>
            <strong>Your account, made simple.</strong>
            <p>
              Signed in as {email}
              {user.createdAt && ` · Member since ${memberSince}`}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Account;
