import { NavLink } from "react-router-dom";
import { useUser } from "@clerk/react";
import "./Navbar.css";

function Navbar() {
  const { isSignedIn, user } = useUser();

  // ================================
  // ADMIN EMAIL
  // ================================

  const ADMIN_EMAIL = "shafkatamanullah@gmail.com";

  const currentEmail =
    user?.primaryEmailAddress?.emailAddress || "";

  const isAdmin =
    isSignedIn && currentEmail === ADMIN_EMAIL;

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* ================================
            LOGO
        ================================= */}

        <NavLink to="/" className="brand-logo">

          <span className="brand-main">
            MUSHAD
          </span>

          <span className="brand-sub">
            Construction & Hardware Store
          </span>

        </NavLink>

        {/* ================================
            NAVIGATION
        ================================= */}

        <ul className="nav-links">

          {/* HOME */}

          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>

          {/* PRODUCTS */}

          <li>
            <NavLink to="/products">
              Products
            </NavLink>
          </li>

          {/* SERVICES */}

          <li>
            <NavLink to="/services">
              Services
            </NavLink>
          </li>

          {/* ABOUT */}

          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>

          {/* CONTACT */}

          <li>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>

          {/* ================================
              LOGIN / ACCOUNT
          ================================= */}

          <li>

            {isSignedIn ? (

              <NavLink
                to="/account"
                className="login-link"
              >
                👤 My Account
              </NavLink>

            ) : (

              <NavLink
                to="/login"
                className="login-link"
              >
                Login
              </NavLink>

            )}

          </li>

          {/* ================================
              ADMIN
          ================================= */}

          {isAdmin && (

            <li>

              <NavLink
                to="/admin"
                className="admin-nav-link"
              >
                🛠️ Admin
              </NavLink>

            </li>

          )}

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;