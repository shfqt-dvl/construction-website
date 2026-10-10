import { useUser, useClerk, useAuth } from "@clerk/react";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Account.css";

function Account() {
  const { user, isLoaded, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const { getToken } = useAuth();

  const clerkName = user?.fullName || "";
  const clerkEmail =
    user?.primaryEmailAddress?.emailAddress || "";

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [saved, setSaved] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [saving, setSaving] = useState(false);

  // =================================
  // LOAD CUSTOMER FROM MONGODB
  // =================================

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user) {
      return;
    }

    const loadProfile = async () => {
      try {
        setLoadingProfile(true);

        const token = await getToken();

        if (!token) {
          throw new Error(
            "Unable to get Clerk authentication token"
          );
        }

        const response = await fetch(
          "http://localhost:5000/api/customers",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to load profile"
          );
        }

        const customer = data.find(
          (item) => item.clerkUserId === user.id
        );

        if (customer) {
          setProfile({
            name: customer.name || clerkName,
            email: customer.email || clerkEmail,
            phone: customer.phone || "",
            address: customer.address || "",
            city: customer.city || "",
            state: customer.state || "",
            pincode: customer.pincode || "",
          });
        } else {
          setProfile({
            name: clerkName,
            email: clerkEmail,
            phone: "",
            address: "",
            city: "",
            state: "",
            pincode: "",
          });
        }
      } catch (error) {
        console.error("Profile loading error:", error);

        setProfile({
          name: clerkName,
          email: clerkEmail,
          phone: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
        });
      } finally {
        setLoadingProfile(false);
      }
    };

    loadProfile();
  }, [
    isLoaded,
    isSignedIn,
    user,
    clerkName,
    clerkEmail,
    getToken,
  ]);

  // =================================
  // HANDLE INPUT
  // =================================

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });

    setSaved(false);
  };

  // =================================
  // SAVE PROFILE TO MONGODB
  // =================================

  const handleSave = async (e) => {
    e.preventDefault();

    if (!isSignedIn || !user) {
      alert("Please login to save your profile.");
      return;
    }

    setSaving(true);
    setSaved(false);

    try {
      const token = await getToken();

      if (!token) {
        throw new Error(
          "Unable to get Clerk authentication token"
        );
      }

      const response = await fetch(
        "http://localhost:5000/api/customers",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            name: profile.name,
            email: profile.email,
            phone: profile.phone,
            address: profile.address,
            city: profile.city,
            state: profile.state,
            pincode: profile.pincode,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to save profile"
        );
      }

      console.log(
        "Customer successfully saved to MongoDB:",
        data
      );

      setProfile({
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        address: data.address || "",
        city: data.city || "",
        state: data.state || "",
        pincode: data.pincode || "",
      });

      setSaved(true);
    } catch (error) {
      console.error("Profile save error:", error);

      alert(
        `Unable to save profile: ${error.message}`
      );
    } finally {
      setSaving(false);
    }
  };

  // =================================
  // LOGOUT
  // =================================

  const handleLogout = async () => {
    try {
      await signOut({
        redirectUrl: "/",
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // =================================
  // CLERK LOADING
  // =================================

  if (!isLoaded) {
    return (
      <div className="account-loading">
        Loading your account...
      </div>
    );
  }

  // =================================
  // LOGIN REQUIRED
  // =================================

  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }

  // =================================
  // WHATSAPP
  // =================================

  const whatsappMessage = encodeURIComponent(
    "Hello, I need help regarding construction materials."
  );

  // =================================
  // PROFILE LOADING
  // =================================

  if (loadingProfile) {
    return (
      <div className="account-loading">
        Loading your profile...
      </div>
    );
  }

  // =================================
  // ACCOUNT PAGE
  // =================================

  return (
    <main className="account-page">

      {/* ================================
          ACCOUNT HEADER
      ================================= */}

      <section className="account-header">
        <div className="account-header-content">

          <span className="account-label">
            👤 MY ACCOUNT
          </span>

          <h1>
            Welcome to Your <strong>Account</strong>
          </h1>

          <p>
            Manage your personal information, contact details
            and construction material enquiries from one place.
          </p>

        </div>
      </section>

      {/* ================================
          ACCOUNT CONTENT
      ================================= */}

      <section className="account-content">

        <div className="account-layout">

          {/* ================================
              PROFILE CARD
          ================================= */}

          <div className="account-profile-card">

            <div className="profile-top">

              <div className="profile-avatar">
                {profile.name
                  ? profile.name.charAt(0).toUpperCase()
                  : "👤"}
              </div>

              <div>
                <h2>
                  {profile.name || "Your Profile"}
                </h2>

                <p>
                  {profile.email ||
                    "Add your email address"}
                </p>
              </div>

            </div>

            <div className="profile-divider"></div>

            <div className="profile-info">

              {/* PHONE */}

              <div className="profile-info-item">

                <span>📞</span>

                <div>
                  <small>Phone</small>

                  <strong>
                    {profile.phone || "Not added"}
                  </strong>
                </div>

              </div>

              {/* ADDRESS */}

              <div className="profile-info-item">

                <span>📍</span>

                <div>
                  <small>Address</small>

                  <strong>
                    {profile.address || "Not added"}
                  </strong>
                </div>

              </div>

              {/* LOCATION */}

              <div className="profile-info-item">

                <span>🏙️</span>

                <div>
                  <small>Location</small>

                  <strong>
                    {profile.city || profile.state
                      ? `${profile.city || ""}${
                          profile.city && profile.state
                            ? ", "
                            : ""
                        }${profile.state || ""}`
                      : "Not added"}
                  </strong>
                </div>

              </div>

            </div>

            {/* LOGOUT */}

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              🚪 Logout
            </button>

          </div>

          {/* ================================
              PROFILE FORM
          ================================= */}

          <div className="account-form-card">

            <div className="account-form-heading">

              <div>

                <span>
                  PERSONAL INFORMATION
                </span>

                <h2>
                  Your Profile Details
                </h2>

                <p>
                  Keep your contact information updated so
                  we can assist you with your enquiries.
                </p>

              </div>

              <div className="form-heading-icon">
                ✏️
              </div>

            </div>

            <form onSubmit={handleSave}>

              {/* NAME + EMAIL */}

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />

                </div>

                <div className="form-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />

                </div>

              </div>

              {/* PHONE + PINCODE */}

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />

                </div>

                <div className="form-group">

                  <label>
                    Pincode
                  </label>

                  <input
                    type="text"
                    name="pincode"
                    value={profile.pincode}
                    onChange={handleChange}
                    placeholder="Enter pincode"
                  />

                </div>

              </div>

              {/* ADDRESS */}

              <div className="form-group">

                <label>
                  Full Address
                </label>

                <textarea
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Enter your complete address"
                ></textarea>

              </div>

              {/* CITY + STATE */}

              <div className="form-row">

                <div className="form-group">

                  <label>
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={profile.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                  />

                </div>

                <div className="form-group">

                  <label>
                    State
                  </label>

                  <input
                    type="text"
                    name="state"
                    value={profile.state}
                    onChange={handleChange}
                    placeholder="Enter your state"
                  />

                </div>

              </div>

              {/* SAVE */}

              <div className="form-actions">

                <button
                  type="submit"
                  className="save-profile-btn"
                  disabled={saving}
                >
                  {saving
                    ? "⏳ Saving..."
                    : "💾 Save Profile"}
                </button>

                {saved && (
                  <span className="saved-message">
                    ✓ Profile saved successfully
                  </span>
                )}

              </div>

            </form>

          </div>

        </div>

        {/* ================================
            QUICK ACTIONS
        ================================= */}

        <div className="account-actions-section">

          <div className="section-heading">

            <span>
              QUICK ACTIONS
            </span>

            <h2>
              How Can We Help You?
            </h2>

          </div>

          <div className="account-action-grid">

            {/* PRODUCTS */}

            <a
              href="/products"
              className="account-action-card"
            >

              <div className="action-icon">
                🏗️
              </div>

              <h3>
                Explore Products
              </h3>

              <p>
                Browse cement, steel, paints, pipes and
                other construction materials.
              </p>

              <strong>
                View Products →
              </strong>

            </a>

            {/* WHATSAPP */}

            <a
              href={`https://wa.me/919162512232?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="account-action-card"
            >

              <div className="action-icon whatsapp">
                💬
              </div>

              <h3>
                WhatsApp Enquiry
              </h3>

              <p>
                Ask about product prices, availability
                and current stock.
              </p>

              <strong>
                Chat With Us →
              </strong>

            </a>

            {/* CONTACT */}

            <a
              href="/#contact"
              className="account-action-card"
            >

              <div className="action-icon">
                📞
              </div>

              <h3>
                Contact Store
              </h3>

              <p>
                Get in touch with Mushad Construction
                & Hardware Store.
              </p>

              <strong>
                Contact Us →
              </strong>

            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Account;