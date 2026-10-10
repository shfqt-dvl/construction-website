import { Navigate } from "react-router-dom";
import { useUser, useAuth } from "@clerk/react";
import { useEffect, useState } from "react";
import "./Admin.css";

function Admin() {
  const { isSignedIn, isLoaded, user } = useUser();
  const { getToken } = useAuth();

  // ==========================================
  // ADMIN EMAIL
  // ==========================================

  const ADMIN_EMAIL = "shafkatamanullah@gmail.com";

  // ==========================================
  // CUSTOMER STATES
  // ==========================================

  const [customers, setCustomers] = useState([]);
  const [customersLoading, setCustomersLoading] = useState(true);
  const [customersError, setCustomersError] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // ==========================================
  // CURRENT USER EMAIL
  // ==========================================

  const currentEmail =
    user?.primaryEmailAddress?.emailAddress || "";

  // ==========================================
  // LOAD CUSTOMERS
  // ==========================================

  const loadCustomers = async () => {
    try {
      setCustomersLoading(true);
      setCustomersError("");

      const token = await getToken();

      if (!token) {
        throw new Error(
          "Unable to get Clerk authentication token."
        );
      }

      const response = await fetch(
        "http://localhost:5000/api/admin/customers",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const contentType =
        response.headers.get("content-type") || "";

      if (!contentType.includes("application/json")) {
        throw new Error(
          "Backend returned an invalid response. Make sure your backend is running on port 5000."
        );
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to load customers."
        );
      }

      setCustomers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(
        "Admin customer loading error:",
        error
      );

      setCustomersError(
        error.message || "Unable to load customers."
      );
    } finally {
      setCustomersLoading(false);
    }
  };

  // ==========================================
  // LOAD CUSTOMERS AFTER ADMIN LOGIN
  // ==========================================

  useEffect(() => {
    if (!isLoaded || !isSignedIn) {
      return;
    }

    if (
      currentEmail.toLowerCase() !==
      ADMIN_EMAIL.toLowerCase()
    ) {
      setCustomersLoading(false);
      return;
    }

    loadCustomers();
  }, [isLoaded, isSignedIn, currentEmail]);

  // ==========================================
  // FORMAT DATE
  // ==========================================

  const formatDate = (date) => {
    if (!date) {
      return "Not available";
    }

    try {
      return new Date(date).toLocaleDateString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      );
    } catch {
      return "Not available";
    }
  };

  // ==========================================
  // DELETE CUSTOMER
  // ==========================================

  const handleDeleteCustomer = async (customer) => {
    const customerName =
      customer.name || "this customer";

    const confirmed = window.confirm(
      `Are you sure you want to delete ${customerName}?\n\nThis will permanently remove the customer's profile from MongoDB.`
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeleteLoading(true);

      const token = await getToken();

      if (!token) {
        throw new Error(
          "Unable to get Clerk authentication token."
        );
      }

      const response = await fetch(
        `http://localhost:5000/api/admin/customers/${customer._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const contentType =
        response.headers.get("content-type") || "";

      if (!contentType.includes("application/json")) {
        throw new Error(
          "Backend returned an invalid response."
        );
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to delete customer."
        );
      }

      // Remove customer from screen
      setCustomers((previousCustomers) =>
        previousCustomers.filter(
          (item) => item._id !== customer._id
        )
      );

      // Close modal if open
      if (
        selectedCustomer?._id === customer._id
      ) {
        setSelectedCustomer(null);
      }

      alert("Customer deleted successfully.");
    } catch (error) {
      console.error(
        "Customer delete error:",
        error
      );

      alert(
        error.message ||
          "Unable to delete customer."
      );
    } finally {
      setDeleteLoading(false);
    }
  };

  // ==========================================
  // REFRESH CUSTOMERS
  // ==========================================

  const refreshCustomers = () => {
    loadCustomers();
  };

  // ==========================================
  // LOADING ADMIN
  // ==========================================

  if (!isLoaded) {
    return (
      <div className="admin-loading">
        <div className="admin-loading-box">

          <div className="admin-spinner"></div>

          <h2>
            Loading Admin Panel...
          </h2>

          <p>
            Please wait...
          </p>

        </div>
      </div>
    );
  }

  // ==========================================
  // LOGIN REQUIRED
  // ==========================================

  if (!isSignedIn) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  // ==========================================
  // ADMIN PROTECTION
  // ==========================================

  if (
    currentEmail.toLowerCase() !==
    ADMIN_EMAIL.toLowerCase()
  ) {
    return (
      <div className="admin-access-denied">

        <div className="admin-denied-box">

          <div className="admin-denied-icon">
            🔒
          </div>

          <h1>
            Access Denied
          </h1>

          <p>
            You don't have permission to
            access the admin panel.
          </p>

          <p>
            Please login with the authorized
            administrator account.
          </p>

        </div>

      </div>
    );
  }

  // ==========================================
  // ADMIN PAGE
  // ==========================================

  return (
    <section className="admin-page">

      <div className="admin-container">

        {/* =====================================
            HEADER
        ====================================== */}

        <header className="admin-header">

          <div className="admin-header-content">

            <span className="admin-label">
              MUSHAD ADMIN PANEL
            </span>

            <h1>
              Website Dashboard
            </h1>

            <p>
              Manage your Mushad Construction &
              Hardware website from one place.
            </p>

          </div>

          <div className="admin-profile">

            <div className="admin-profile-icon">
              👤
            </div>

            <div className="admin-profile-info">

              <strong>
                {user?.firstName ||
                  "Administrator"}
              </strong>

              <span>
                {currentEmail}
              </span>

            </div>

          </div>

        </header>

        {/* =====================================
            WELCOME
        ====================================== */}

        <div className="admin-welcome">

          <div>

            <span className="admin-welcome-small">
              WELCOME BACK 👋
            </span>

            <h2>
              Manage Your Business Website
            </h2>

            <p>
              Keep your products, brands,
              gallery and website information
              updated.
            </p>

          </div>

          <div className="admin-business-icon">
            🏗️
          </div>

        </div>

        {/* =====================================
            DASHBOARD CARDS
        ====================================== */}

        <div className="admin-dashboard-grid">

          {/* PRODUCTS */}

          <div className="admin-card">

            <div className="admin-card-icon">
              🧱
            </div>

            <div className="admin-card-content">

              <h3>
                Products
              </h3>

              <p>
                Manage construction and hardware
                products displayed on your website.
              </p>

              <button
                className="admin-card-button"
                onClick={() =>
                  window.location.href =
                    "/products"
                }
              >
                View Products →
              </button>

            </div>

          </div>

          {/* BRANDS */}

          <div className="admin-card">

            <div className="admin-card-icon">
              🏷️
            </div>

            <div className="admin-card-content">

              <h3>
                Brands
              </h3>

              <p>
                Manage cement, steel, paint,
                plumbing and sanitary brands.
              </p>

              <button
                className="admin-card-button"
                onClick={() =>
                  window.location.href =
                    "/brands"
                }
              >
                View Brands →
              </button>

            </div>

          </div>

          {/* GALLERY */}

          <div className="admin-card">

            <div className="admin-card-icon">
              🖼️
            </div>

            <div className="admin-card-content">

              <h3>
                Gallery
              </h3>

              <p>
                View and manage images of your
                shop, products and materials.
              </p>

              <button
                className="admin-card-button"
                onClick={() =>
                  window.location.href =
                    "/gallery"
                }
              >
                View Gallery →
              </button>

            </div>

          </div>

          {/* SERVICES */}

          <div className="admin-card">

            <div className="admin-card-icon">
              🔧
            </div>

            <div className="admin-card-content">

              <h3>
                Services
              </h3>

              <p>
                Manage the services offered by
                Mushad Construction & Hardware.
              </p>

              <button
                className="admin-card-button"
                onClick={() =>
                  window.location.href =
                    "/#services"
                }
              >
                View Services →
              </button>

            </div>

          </div>

          {/* CUSTOMER ENQUIRIES */}

          <div className="admin-card">

            <div className="admin-card-icon">
              💬
            </div>

            <div className="admin-card-content">

              <h3>
                Customer Enquiries
              </h3>

              <p>
                Review customer enquiries and
                quotation requests.
              </p>

              <button
                className="admin-card-button"
                onClick={() =>
                  window.location.href =
                    "/contact"
                }
              >
                View Contact →
              </button>

            </div>

          </div>

          {/* WEBSITE */}

          <div className="admin-card">

            <div className="admin-card-icon">
              🌐
            </div>

            <div className="admin-card-content">

              <h3>
                Website
              </h3>

              <p>
                Open your public website and
                check how visitors see your
                business.
              </p>

              <button
                className="admin-card-button"
                onClick={() =>
                  window.location.href = "/"
                }
              >
                Open Website →
              </button>

            </div>

          </div>

        </div>

        {/* =====================================
            CUSTOMER MANAGEMENT
        ====================================== */}

        <div className="admin-customer-section">

          <div className="admin-section-title">

            <span className="admin-label">
              CUSTOMER MANAGEMENT
            </span>

            <h2>
              Registered Customers
            </h2>

            <p>
              View and manage customer profiles
              saved through your website.
            </p>

          </div>

          {/* CUSTOMER SUMMARY */}

          <div className="admin-customer-summary">

            <div className="admin-customer-stat">

              <div className="admin-customer-stat-icon">
                👥
              </div>

              <div>

                <strong>
                  {customersLoading
                    ? "..."
                    : customers.length}
                </strong>

                <span>
                  Total Customers
                </span>

              </div>

            </div>

            <button
              className="admin-refresh-button"
              onClick={refreshCustomers}
              disabled={customersLoading}
            >
              {customersLoading
                ? "Loading..."
                : "🔄 Refresh Customers"}
            </button>

          </div>

          {/* ERROR */}

          {customersError && (
            <div className="admin-customer-error">

              <div className="admin-error-icon">
                ⚠️
              </div>

              <div>

                <strong>
                  Unable to load customers
                </strong>

                <p>
                  {customersError}
                </p>

              </div>

            </div>
          )}

          {/* LOADING */}

          {customersLoading &&
            !customersError && (
              <div className="admin-customer-loading">

                <div className="admin-spinner"></div>

                <p>
                  Loading customer information...
                </p>

              </div>
            )}

          {/* NO CUSTOMERS */}

          {!customersLoading &&
            !customersError &&
            customers.length === 0 && (
              <div className="admin-no-customers">

                <div className="admin-no-customers-icon">
                  👥
                </div>

                <h3>
                  No Customers Found
                </h3>

                <p>
                  Customers who save their
                  profile information will
                  appear here.
                </p>

              </div>
            )}

          {/* CUSTOMER TABLE */}

          {!customersLoading &&
            !customersError &&
            customers.length > 0 && (

              <div className="admin-customer-table-wrapper">

                <table className="admin-customer-table">

                  <thead>

                    <tr>

                      <th>
                        #
                      </th>

                      <th>
                        Customer
                      </th>

                      <th>
                        Email
                      </th>

                      <th>
                        Phone
                      </th>

                      <th>
                        Location
                      </th>

                      <th>
                        Joined
                      </th>

                      <th>
                        Actions
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {customers.map(
                      (customer, index) => (

                        <tr
                          key={
                            customer._id ||
                            customer.clerkUserId ||
                            index
                          }
                        >

                          <td>
                            <span className="customer-number">
                              {index + 1}
                            </span>
                          </td>

                          <td>

                            <div className="admin-customer-name">

                              <div className="admin-customer-avatar">
                                {customer.name
                                  ?.charAt(0)
                                  ?.toUpperCase() ||
                                  "👤"}
                              </div>

                              <div>

                                <strong>
                                  {customer.name ||
                                    "Not provided"}
                                </strong>

                                <span>
                                  Customer
                                </span>

                              </div>

                            </div>

                          </td>

                          <td>

                            <span className="customer-email">
                              {customer.email ||
                                "Not provided"}
                            </span>

                          </td>

                          <td>
                            {customer.phone ||
                              "Not provided"}
                          </td>

                          <td>

                            {customer.city ||
                            customer.state ? (
                              <>
                                {customer.city ||
                                  ""}

                                {customer.city &&
                                customer.state
                                  ? ", "
                                  : ""}

                                {customer.state ||
                                  ""}
                              </>
                            ) : (
                              "Not provided"
                            )}

                          </td>

                          <td>
                            {formatDate(
                              customer.createdAt
                            )}
                          </td>

                          <td>

                            <div className="admin-customer-actions">

                              {/* VIEW */}

                              <button
                                className="admin-view-customer-button"
                                onClick={() =>
                                  setSelectedCustomer(
                                    customer
                                  )
                                }
                              >
                                👁️ View
                              </button>

                              {/* DELETE */}

                              <button
                                className="admin-delete-customer-button"
                                onClick={() =>
                                  handleDeleteCustomer(
                                    customer
                                  )
                                }
                                disabled={deleteLoading}
                              >
                                🗑️ Delete
                              </button>

                            </div>

                          </td>

                        </tr>

                      )
                    )}

                  </tbody>

                </table>

              </div>

            )}

        </div>

        {/* =====================================
            CUSTOMER DETAILS MODAL
        ====================================== */}

        {selectedCustomer && (

          <div
            className="admin-customer-modal-overlay"
            onClick={() =>
              setSelectedCustomer(null)
            }
          >

            <div
              className="admin-customer-modal"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <button
                className="admin-modal-close"
                onClick={() =>
                  setSelectedCustomer(null)
                }
              >
                ×
              </button>

              <div className="admin-modal-top">

                <div className="admin-modal-avatar">

                  {selectedCustomer.name
                    ?.charAt(0)
                    ?.toUpperCase() ||
                    "👤"}

                </div>

                <div>

                  <span className="admin-label">
                    CUSTOMER PROFILE
                  </span>

                  <h2>
                    {selectedCustomer.name ||
                      "Customer"}
                  </h2>

                </div>

              </div>

              <div className="admin-customer-details">

                <div className="customer-detail-box">

                  <span>
                    📧
                  </span>

                  <div>

                    <strong>
                      Email
                    </strong>

                    <p>
                      {selectedCustomer.email ||
                        "Not provided"}
                    </p>

                  </div>

                </div>

                <div className="customer-detail-box">

                  <span>
                    📞
                  </span>

                  <div>

                    <strong>
                      Phone
                    </strong>

                    <p>
                      {selectedCustomer.phone ||
                        "Not provided"}
                    </p>

                  </div>

                </div>

                <div className="customer-detail-box">

                  <span>
                    🏠
                  </span>

                  <div>

                    <strong>
                      Address
                    </strong>

                    <p>
                      {selectedCustomer.address ||
                        "Not provided"}
                    </p>

                  </div>

                </div>

                <div className="customer-detail-box">

                  <span>
                    🏙️
                  </span>

                  <div>

                    <strong>
                      City
                    </strong>

                    <p>
                      {selectedCustomer.city ||
                        "Not provided"}
                    </p>

                  </div>

                </div>

                <div className="customer-detail-box">

                  <span>
                    📍
                  </span>

                  <div>

                    <strong>
                      State
                    </strong>

                    <p>
                      {selectedCustomer.state ||
                        "Not provided"}
                    </p>

                  </div>

                </div>

                <div className="customer-detail-box">

                  <span>
                    📮
                  </span>

                  <div>

                    <strong>
                      Pincode
                    </strong>

                    <p>
                      {selectedCustomer.pincode ||
                        "Not provided"}
                    </p>

                  </div>

                </div>

                <div className="customer-detail-box">

                  <span>
                    📅
                  </span>

                  <div>

                    <strong>
                      Profile Created
                    </strong>

                    <p>
                      {formatDate(
                        selectedCustomer.createdAt
                      )}
                    </p>

                  </div>

                </div>

                <div className="customer-detail-box">

                  <span>
                    🔄
                  </span>

                  <div>

                    <strong>
                      Last Updated
                    </strong>

                    <p>
                      {formatDate(
                        selectedCustomer.updatedAt
                      )}
                    </p>

                  </div>

                </div>

              </div>

              {/* MODAL ACTIONS */}

              <div className="admin-modal-actions">

                <button
                  className="admin-delete-customer-button admin-modal-delete-button"
                  onClick={() =>
                    handleDeleteCustomer(
                      selectedCustomer
                    )
                  }
                  disabled={deleteLoading}
                >
                  {deleteLoading
                    ? "Deleting..."
                    : "🗑️ Delete Customer"}
                </button>

                <button
                  className="admin-modal-done-button"
                  onClick={() =>
                    setSelectedCustomer(null)
                  }
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        )}

        {/* =====================================
            BUSINESS INFORMATION
        ====================================== */}

        <div className="admin-business-section">

          <div className="admin-section-title">

            <span className="admin-label">
              BUSINESS INFORMATION
            </span>

            <h2>
              Mushad Construction & Hardware
            </h2>

            <p>
              Your construction and hardware
              material supplier in Khodaibagh,
              Chapra, Bihar.
            </p>

          </div>

          <div className="admin-info-grid">

            <div className="admin-info-box">

              <span>
                📍
              </span>

              <div>

                <h4>
                  Location
                </h4>

                <p>
                  Khodaibagh, Chapra, Bihar
                </p>

              </div>

            </div>

            <div className="admin-info-box">

              <span>
                📞
              </span>

              <div>

                <h4>
                  Contact
                </h4>

                <p>
                  +91 9162512232
                </p>

              </div>

            </div>

            <div className="admin-info-box">

              <span>
                🏗️
              </span>

              <div>

                <h4>
                  Business Type
                </h4>

                <p>
                  Construction & Hardware
                  Materials
                </p>

              </div>

            </div>

            <div className="admin-info-box">

              <span>
                🔐
              </span>

              <div>

                <h4>
                  Admin Account
                </h4>

                <p>
                  Authorized Clerk Account
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================
            PRODUCT CATEGORIES
        ====================================== */}

        <div className="admin-categories">

          <div className="admin-section-title">

            <span className="admin-label">
              PRODUCT CATEGORIES
            </span>

            <h2>
              Your Main Categories
            </h2>

          </div>

          <div className="admin-category-list">

            <span>
              🧱 Cement
            </span>

            <span>
              🏗️ Steel & TMT
            </span>

            <span>
              🔩 Steel Coils
            </span>

            <span>
              🚰 Pipes & Fittings
            </span>

            <span>
              🚿 Sanitary Items
            </span>

            <span>
              🎨 Paints
            </span>

            <span>
              🛢️ Water Tanks
            </span>

            <span>
              🔧 Hardware
            </span>

            <span>
              🪨 Stones
            </span>

            <span>
              ⚙️ Construction Chemicals
            </span>

          </div>

        </div>

        {/* =====================================
            QUICK ACTIONS
        ====================================== */}

        <div className="admin-quick-actions">

          <h2>
            Quick Actions
          </h2>

          <div className="admin-actions">

            <button
              onClick={() =>
                window.location.href = "/"
              }
            >
              🏠 Home
            </button>

            <button
              onClick={() =>
                window.location.href =
                  "/products"
              }
            >
              🧱 Products
            </button>

            <button
              onClick={() =>
                window.location.href =
                  "/brands"
              }
            >
              🏷️ Brands
            </button>

            <button
              onClick={() =>
                window.location.href =
                  "/gallery"
              }
            >
              🖼️ Gallery
            </button>

            <button
              onClick={() =>
                window.location.href =
                  "/contact"
              }
            >
              📞 Contact
            </button>

          </div>

        </div>

        {/* =====================================
            FOOTER
        ====================================== */}

        <footer className="admin-footer">

          <p>
            © {new Date().getFullYear()} Mushad
            Construction & Hardware
          </p>

          <span>
            Admin Dashboard
          </span>

        </footer>

      </div>

    </section>
  );
}

export default Admin;