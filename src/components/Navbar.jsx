import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "@clerk/react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { isSignedIn, user } = useUser();

  const ADMIN_EMAIL = "shafkatamanullah@gmail.com";

  const currentEmail =
    user?.primaryEmailAddress?.emailAddress || "";

  const isAdmin =
    isSignedIn && currentEmail === ADMIN_EMAIL;

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navClass = ({ isActive }) =>
    isActive ? "active" : "";

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* BRAND LOGO */}
        <NavLink to="/" className="brand-logo" onClick={closeMenu}>
          <img
            src="/logo2.png"
            alt="Mushad Construction Logo"
            className="brand-logo-img"
          />

          <span className="brand-text">
            <span className="brand-main">MUSHAD</span>
            <span className="brand-sub">
              Construction &amp; Hardware Store
            </span>
          </span>
        </NavLink>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* NAVIGATION LINKS */}
        <div
          id="main-navigation"
          className={`navbar-menu ${menuOpen ? "menu-open" : ""}`}
        >
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                end
                className={navClass}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/products"
                className={navClass}
                onClick={closeMenu}
              >
                Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={navClass}
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={navClass}
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={navClass}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>

            {isAdmin && (
              <li>
                <NavLink
                  to="/admin"
                  className={navClass}
                  onClick={closeMenu}
                >
                  Admin
                </NavLink>
              </li>
            )}
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
