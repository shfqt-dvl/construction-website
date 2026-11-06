
import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  ChevronDown,
} from "lucide-react";

import "./Navbar.css";

const dropdowns = [
  {
    label: "Products",
    items: [
      { label: "All Products", to: "/products#explore-all-products" },
      { label: "Cement", to: "/products/cement" },
      { label: "Steel", to: "/products/steel" },
      { label: "Paints", to: "/products/paints" },
      { label: "Pipes", to: "/products/pipes" },
      { label: "Water Tanks", to: "/products/water-tanks" },
      { label: "Sanitaryware", to: "/products/sanitary" },
      { label: "Construction Chemicals", to: "/products/chemicals" },
      { label: "Hardware", to: "/products/hardware" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "All Services", to: "/services" },
      { label: "Residential Construction", to: "/services/residential" },
      { label: "Commercial Construction", to: "/services/commercial" },
      { label: "Industrial Construction", to: "/services/industrial" },
      { label: "Renovation & Remodeling", to: "/services/renovation" },
    ],
  },
  {
    label: "Projects",
    items: [
      { label: "All Projects", to: "/projects#explore-all-projects" },
      { label: "Residential Projects", to: "/projects/residential" },
      { label: "Commercial Projects", to: "/projects/commercial" },
      { label: "Industrial Projects", to: "/projects/industrial" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Products Gallery", to: "/gallery" },
      { label: "Blogs & Articles", to: "/blogs" },
      { label: "FAQs", to: "/faqs" },
    ],
  },
];

const mainLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navbarHovered, setNavbarHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  const navbarRef = useRef(null);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isTransparentHome = isHomePage && !scrolled;

  /* =========================================
     NAVBAR SCROLL BEHAVIOR

     Home:
     Transparent until hero section ends.

     Other pages:
     Always white navbar.
  ========================================= */

  useEffect(() => {
    let animationFrame;

    const updateNavbar = () => {
      if (!isHomePage) {
        setScrolled(true);
        setNavbarHovered(false);
        return;
      }

      const hero = document.querySelector(".hero");

      if (!hero) {
        setScrolled(window.scrollY > 20);
        return;
      }

      const heroBottom =
        hero.getBoundingClientRect().bottom + window.scrollY;

      const navbarHeight =
        navbarRef.current?.offsetHeight || 0;

      const heroEndPoint = heroBottom - navbarHeight;

      setScrolled(window.scrollY >= heroEndPoint);
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateNavbar);
    };

    updateNavbar();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isHomePage, location.pathname]);

  /* CLOSE MENUS AFTER NAVIGATION */

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown("");
    setNavbarHovered(false);
  }, [location.pathname, location.hash]);

  /* CLOSE MOBILE MENU ON DESKTOP RESIZE */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) {
        setMenuOpen(false);
        setOpenDropdown("");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* CLOSE NAVIGATION MENUS */

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown("");
  };

  /* TOGGLE DROPDOWN */

  const toggleDropdown = (label) => {
    setOpenDropdown((current) =>
      current === label ? "" : label
    );
  };

  /* HIGHLIGHT ACTIVE DROPDOWN */

  const isDropdownActive = (items) => {
    return items.some((item) => {
      const itemPath = item.to.split("#")[0];

      if (itemPath === "/") {
        return location.pathname === "/";
      }

      return (
        location.pathname === itemPath ||
        location.pathname.startsWith(`${itemPath}/`)
      );
    });
  };

  /* NAVBAR CLASS NAMES */

const navbarClassName = [
  "navbar",
  scrolled ? "scrolled" : "",
  isTransparentHome ? "transparent-home" : "",
  isTransparentHome && navbarHovered ? "navbar-hovered" : "",
  menuOpen ? "menu-open" : "",
]
  .filter(Boolean)
  .join(" ");

  return (
    <header
      ref={navbarRef}
      className={navbarClassName}
      onMouseEnter={() => {
        if (isTransparentHome && window.innerWidth > 760) {
          setNavbarHovered(true);
        }
      }}
      onMouseLeave={() => {
        setNavbarHovered(false);
      }}
    >
      {/* TOP INFORMATION BAR */}

      <div className="nav-topbar">
        <div className="nav-topbar-inner">
          <div className="nav-topbar-left">
            <a
              href="tel:+919162512232"
              className="nav-info-item"
            >
              <Phone size={14} aria-hidden="true" />
              <span>+91 91625 12232</span>
            </a>

            <a
              href="mailto:mushadconstruction@gmail.com"
              className="nav-info-item nav-email"
            >
              <Mail size={15} aria-hidden="true" />
              <span>mushadconstruction@gmail.com</span>
            </a>
          </div>

          <div className="nav-topbar-right">
            <Clock size={14} aria-hidden="true" />
            <span>Every Day: 7:00 AM – 7:00 PM</span>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}

      <div className="nav-main">
        <div className="container nav-inner">
          {/* BRAND LOGO */}

          <Link
            className="brand-logo"
            to="/"
            onClick={closeMenu}
            aria-label="MUSHAD Construction and Hardware Home"
          >
            <img
              className="shop-logo"
              src="/company.png"
              alt="MUSHAD logo"
            />

            <span className="brand-text">
              <strong>MUSHAD</strong>
              <small>CONSTRUCTION &amp; HARDWARE</small>
            </span>
          </Link>

          {/* NAVIGATION LINKS */}

          <nav
            id="primary-navigation"
            className={`nav-links ${
              menuOpen ? "nav-links-open" : ""
            }`}
            aria-label="Main navigation"
          >
            {/* HOME AND ABOUT */}

            {mainLinks.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                end={to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {label}
              </NavLink>
            ))}

            {/* DROPDOWNS */}

            {dropdowns.map(({ label, items }) => {
              const isOpen = openDropdown === label;
              const isActive = isDropdownActive(items);

              return (
                <div
                  className={`nav-dropdown ${
                    isOpen ? "dropdown-open" : ""
                  }`}
                  key={label}
                  onMouseEnter={() => {
                    if (window.innerWidth > 760) {
                      setOpenDropdown(label);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth > 760) {
                      setOpenDropdown("");
                    }
                  }}
                >
                  <button
                    className={`nav-link nav-dropdown-trigger ${
                      isActive ? "active" : ""
                    }`}
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => toggleDropdown(label)}
                  >
                    <span>{label}</span>

                    <ChevronDown
                      className="nav-chevron"
                      size={15}
                      aria-hidden="true"
                    />
                  </button>

                  <div className="nav-dropdown-menu">
                    {items.map((item) => (
                      <NavLink
                        key={item.label}
                        to={item.to}
                        end={
                          item.to.split("#")[0] === "/services" ||
                          item.to.split("#")[0] === "/projects" ||
                          item.to.split("#")[0] === "/products" ||
                          item.to === "/gallery"
                        }
                        onClick={closeMenu}
                        className={({ isActive: itemActive }) =>
                          `nav-dropdown-item ${
                            itemActive ? "active" : ""
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* MOBILE CONTACT DETAILS */}

            <div className="nav-mobile-details">
              <a
                href="tel:+919162512232"
                onClick={closeMenu}
              >
                <Phone size={16} aria-hidden="true" />
                Call Store
              </a>

              <a
                href="mailto:mushadconstruction@gmail.com"
                onClick={closeMenu}
              >
                <Mail size={16} aria-hidden="true" />
                Email Us
              </a>
            </div>

            {/* MOBILE CONTACT BUTTON */}

            <Link
              className="nav-contact-mobile"
              to="/contact"
              onClick={closeMenu}
            >
              Contact Us <span aria-hidden="true">↗</span>
            </Link>
          </nav>

          {/* DESKTOP CONTACT BUTTON */}

          <Link
            className="nav-contact"
            to="/contact"
            onClick={closeMenu}
          >
            Contact Us
            <span aria-hidden="true">↗</span>
          </Link>

          {/* MOBILE MENU BUTTON */}

          <button
            className="menu-toggle"
            type="button"
            onClick={() => {
              setMenuOpen((open) => !open);
              setOpenDropdown("");
            }}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={25} aria-hidden="true" />
            ) : (
              <Menu size={25} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
