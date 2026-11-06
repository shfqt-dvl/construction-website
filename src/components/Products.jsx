
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, X } from "lucide-react";
import "./Products.css";

// IMPORT YOUR PRODUCT ARRAYS
import { cementProducts } from "../pages/products/CementProducts";
import { chemicalProducts } from "../pages/products/ChemicalsProducts";
import { hardwareProducts } from "../pages/products/HardwareProducts";
import { paintProducts } from "../pages/products/PaintProducts";
import { pipesProducts } from "../pages/products/PipesProducts";
import { sanitaryProducts } from "../pages/products/SanitaryProducts";
import { steelProducts } from "../pages/products/SteelProducts";
import { waterTankProducts } from "../pages/products/WaterTankProducts";

/* ==========================================
   CATEGORY DATA
========================================== */

const categories = [
  {
    id: 1,
    name: "Cement",
    icon: "🏗️",
    image:
      "https://images.jdmagicbox.com/v2/comp/ahmedabad/m9/079pxx79.xx79.250328165002.t6m9/catalogue/non-trade-cement-supplier-satellite-ahmedabad-building-material-dealers-2a8t19h767.jpg",
    imageAlt: "Construction work and building materials",
    description:
      "Quality cement from trusted brands for strong and durable construction.",
    path: "/products/cement",
    linkText: "Explore Cement",
    keywords: "building concrete opc ppc",
  },
  {
    id: 2,
    name: "Steel",
    icon: "🔩",
    image:
      "https://apit.ae/wp-content/uploads/2024/10/Differences-Between-Rebar-and-Wire-1024x640.jpeg",
    imageAlt: "Steel and industrial construction work",
    description:
      "Reliable TMT steel, bars and coils for residential and commercial construction.",
    path: "/products/steel",
    linkText: "Explore Steel",
    keywords: "tmt bars rods coils iron",
  },
  {
    id: 3,
    name: "Paints",
    icon: "🎨",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Painting and finishing work",
    description:
      "Explore trusted paint brands for beautiful and long-lasting finishes.",
    path: "/products/paints",
    linkText: "Explore Paints",
    keywords: "interior exterior primer colours",
  },
  {
    id: 4,
    name: "Sanitary",
    icon: "🚿",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Modern bathroom and sanitary fixtures",
    description: "Sanitary products for modern bathrooms and homes.",
    path: "/products/sanitary",
    linkText: "Explore Sanitary",
    keywords: "bathroom taps basins toilets",
  },
  {
    id: 5,
    name: "Pipes & Fittings",
    icon: "🔧",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtVD4P12-U63pZeHeOz-K55yyE2G4nDMbD9v1GCsWWw&s=10",
    imageAlt: "Tools and equipment for construction work",
    description: "Pipes and fittings for reliable plumbing solutions.",
    path: "/products/pipes",
    linkText: "Explore Pipes & Fittings",
    keywords: "plumbing pvc cpvc water fittings",
  },
  {
    id: 6,
    name: "Chemicals",
    icon: "🧪",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh2_HfbQcQx_zcfAE5R_kMS8evyy7CMDjqacAAOGsjxQ&s=10",
    imageAlt: "Chemical materials in a laboratory setting",
    description:
      "Construction chemicals and solutions for better performance.",
    path: "/products/chemicals",
    linkText: "Explore Chemicals",
    keywords: "waterproofing adhesives sealants",
  },
  {
    id: 7,
    name: "Hardware",
    icon: "🛠️",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Hand tools and hardware equipment",
    description:
      "Essential hardware products for construction and repair work.",
    path: "/products/hardware",
    linkText: "Explore Hardware",
    keywords: "tools locks screws hinges accessories",
  },
  {
    id: 8,
    name: "Water Tanks",
    icon: "💧",
    image:
      "https://i.pinimg.com/736x/79/97/2f/79972f146873039a43a7f9e4fca1a62a.jpg",
    imageAlt: "Water storage and infrastructure",
    description:
      "Durable water storage tanks from trusted manufacturers.",
    path: "/products/water-tanks",
    linkText: "Explore Water Tanks",
    keywords: "water storage overhead tanks",
  },
];

const filters = [
  "All Products",
  "Cement",
  "Steel",
  "Paints",
  "Sanitary",
  "Pipes & Fittings",
  "Chemicals",
  "Hardware",
  "Water Tanks",
];

/* ==========================================
   BRAND DATA
========================================== */

const brands = [
  { name: "ACC", logo: "/acc.png", domain: "acclimited.com", url: "https://www.acclimited.com/" },
  { name: "Ambuja", logo: "/ambuja-logo.png", domain: "ambujacement.com", url: "https://www.ambujacement.com/" },
  { name: "MP Birla", logo: "/mp-birla-group-logo.png", domain: "mpbirlacement.com", url: "https://www.mpbirlacement.com/" },
  { name: "Bangur", logo: "/bangur.png", domain: "shreecement.com", url: "https://www.shreecement.com/" },
  { name: "JSW", logo: "/jsw-logo.png", domain: "jsw.in", url: "https://www.jsw.in/" },
  { name: "Kamdhenu", logo: "/kamdhenu.png", domain: "kamdhenulimited.com", url: "https://www.kamdhenulimited.com/" },
  { name: "Mahabir", logo: "/mahabir.png", domain: "mahabir.com", url: "https://www.google.com/search?q=Mahabir+TMT+official" },
  { name: "Vijay TMT", logo: "/vijay-logo.png", domain: "vijaytmt.com", url: "https://www.google.com/search?q=Vijay+TMT+official" },
  { name: "Asian Paints", logo: "/asian-logo.png", domain: "asianpaints.com", url: "https://www.asianpaints.com/" },
  { name: "Nerolac", logo: "/Nerolac-Logo.png", domain: "nerolac.com", url: "https://www.nerolac.com/" },
   { name: "JK Cement", logo: "/jkcement.png", domain: "jkcement.com", url: "https://jkmaxxpaints.com/" },
  { name: "Birla Opus", logo: "/opus-logo.png", domain: "birlaopus.com", url: "https://www.birlaopus.com/" },
  { name: "Berger", logo: "/berger.png", domain: "bergerpaints.com", url: "https://www.bergerpaints.com/" },
  { name: "CERA", logo: "/cera-logo.png", domain: "cera-india.com", url: "https://www.cera-india.com/" },
  { name: "Hindware", logo: "/hindware-logo.png", domain: "hindware.com", url: "https://www.hindware.com/" },
  { name: "Parryware", logo: "/parryware.png", domain: "parryware.in", url: "https://www.parryware.in/" },
  { name: "Glocera", logo: "/golocera-logo.png", domain: "glocera.com", url: "https://www.google.com/search?q=Glocera+official" },
  { name: "Astral", logo: "/astral.png", domain: "astralpipes.com", url: "https://www.astralpipes.com/" },
  { name: "Prince", logo: "/prince-logo.png", domain: "princepipes.com", url: "https://www.princepipes.com/" },
  { name: "IDOL", logo: "/idol-logo.png", domain: "idol.com", url: "https://www.google.com/search?q=IDOL+plumbing+brand+India" },
  { name: "Finolex", logo: "/Finolex.png", domain: "finolexpipes.com", url: "https://www.finolexpipes.com/" },
  { name: "Ashirvad", logo: "/Ashrivad.png", domain: "ashirvad.com", url: "https://www.ashirvad.com/" },
  { name: "Fevicol", logo: "/fevi-logo.png", domain: "fevicol.in", url: "https://www.fevicol.in/" },
  { name: "Dr. Fixit", logo: "/drfixit-logo.png", domain: "drfixit.co.in", url: "https://www.drfixit.co.in/" },
  { name: "Pidilite", logo: "/pidilite.png", domain: "pidilite.com", url: "https://www.pidilite.com/" },
  { name: "Jindal", logo: "/jindal.png", domain: "jindalsteelpower.com", url: "https://www.jindalsteelpower.com/" },
  { name: "Supreme", logo: "/supreme.png", domain: "supreme.co.in", url: "https://www.supreme.co.in/" },
  { name: "Aquatech", logo: "/aquatech.png", domain: "aquatech.com", url: "https://www.google.com/search?q=Aquatech+India+water+tank+official" },
  { name: "JK Wall Putty", logo: "/jk-putty.png", domain: "jkcement.com", url: "https://www.jkcement.com/" },
  { name: "Crompton", logo: "/crompton.png", domain: "crompton.co.in", url: "https://www.crompton.co.in/" },
];

/* ==========================================
   ALL PRODUCTS FOR GLOBAL SEARCH
========================================== */

const allProducts = [
  ...cementProducts.map((product) => ({
    ...product,
    category: "Cement",
    categoryPath: "/products/cement",
  })),
  ...steelProducts.map((product) => ({
    ...product,
    category: "Steel",
    categoryPath: "/products/steel",
  })),
  ...paintProducts.map((product) => ({
    ...product,
    category: "Paints",
    categoryPath: "/products/paints",
  })),
  ...sanitaryProducts.map((product) => ({
    ...product,
    category: "Sanitary",
    categoryPath: "/products/sanitary",
  })),
  ...pipesProducts.map((product) => ({
    ...product,
    category: "Pipes & Fittings",
    categoryPath: "/products/pipes",
  })),
  ...chemicalProducts.map((product) => ({
    ...product,
    category: "Chemicals",
    categoryPath: "/products/chemicals",
  })),
  ...hardwareProducts.map((product) => ({
    ...product,
    category: "Hardware",
    categoryPath: "/products/hardware",
  })),
  ...waterTankProducts.map((product) => ({
    ...product,
    category: "Water Tanks",
    categoryPath: "/products/water-tanks",
  })),
];

/* ==========================================
   INFINITE BRAND MARQUEE
========================================== */

function BrandMarquee() {
  const viewportRef = useRef(null);

  const dragRef = useRef({
    active: false,
    pointerId: null,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
  });

  const pausedRef = useRef(false);
  const lastTimeRef = useRef(0);
  const SPEED = 45;

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    let frameId;

    const animate = (time) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      const delta = Math.min(
        (time - lastTimeRef.current) / 1000,
        0.05
      );

      lastTimeRef.current = time;

      const halfWidth = viewport.scrollWidth / 2;

      if (
        !pausedRef.current &&
        !dragRef.current.active &&
        halfWidth > 0
      ) {
        viewport.scrollLeft += SPEED * delta;

        if (viewport.scrollLeft >= halfWidth) {
          viewport.scrollLeft -= halfWidth;
        }
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      lastTimeRef.current = 0;
    };
  }, []);

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    const viewport = viewportRef.current;
    if (!viewport) return;

    dragRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: viewport.scrollLeft,
      moved: false,
    };

    viewport.classList.add("is-dragging");

    const handleMove = (moveEvent) => {
      const drag = dragRef.current;

      if (!drag.active || moveEvent.pointerId !== drag.pointerId) {
        return;
      }

      const distance = moveEvent.clientX - drag.startX;

      if (Math.abs(distance) > 5) {
        drag.moved = true;
      }

      if (drag.moved) {
        const halfWidth = viewport.scrollWidth / 2;
        if (halfWidth <= 0) return;

        let nextPosition = drag.startScrollLeft - distance;

        nextPosition =
          ((nextPosition % halfWidth) + halfWidth) % halfWidth;

        viewport.scrollLeft = nextPosition;

        if (moveEvent.cancelable) {
          moveEvent.preventDefault();
        }
      }
    };

    const handleUp = (upEvent) => {
      if (upEvent.pointerId !== dragRef.current.pointerId) return;

      dragRef.current.active = false;
      viewport.classList.remove("is-dragging");

      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);

      setTimeout(() => {
        dragRef.current.moved = false;
      }, 100);
    };

    window.addEventListener("pointermove", handleMove, {
      passive: false,
    });
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", handleUp);
  };

  const handleClickCapture = (event) => {
    if (dragRef.current.moved) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <section
      className="brand-strip"
      aria-label="Brands available at Mushad"
    >
    <div className="brand-strip-heading">
  <span
    className="products-eyebrow"
    style={{ fontWeight: 600 }}
  >
    OUR TRUSTED BRANDS
  </span>
</div>

      <div
        className="brand-marquee"
        ref={viewportRef}
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
        onPointerDown={handlePointerDown}
        onClickCapture={handleClickCapture}
      >
        <div className="brand-marquee-track">
          {[0, 1].map((copy) => (
            <div
              className="brand-marquee-group"
              key={copy}
              aria-hidden={copy === 1}
            >
              {brands.map((brand, index) => (
                <a
                  className="brand-logo-card"
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`${copy}-${brand.name}-${index}`}
                  draggable="false"
                  tabIndex={copy === 1 ? -1 : 0}
                  onDragStart={(event) => event.preventDefault()}
                >
                  <img
  src={brand.logo}
  alt={`${brand.name} logo`}
  loading="lazy"
  draggable="false"
/>

                  <span>{brand.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   PRODUCTS PAGE
========================================== */

function Products() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Products");

  const query = search.trim().toLowerCase();
  const isSearching = query.length > 0;

  // Search actual products by heading/name only.
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesFilter =
        activeFilter === "All Products" ||
        product.category === activeFilter;

      const heading = (product.name || "").toLowerCase();

      return matchesFilter && heading.includes(query);
    });
  }, [query, activeFilter]);

  // Show categories when search is empty.
  const filteredCategories = useMemo(() => {
    return categories.filter((category) => {
      const matchesFilter =
        activeFilter === "All Products" ||
        category.name === activeFilter;

      return matchesFilter;
    });
  }, [activeFilter]);

  const clearSearch = () => {
    setSearch("");
    setActiveFilter("All Products");
  };

  return (
    <main className="products-page">
      {/* HERO */}
      <section className="products-hero">
        <div className="products-hero-inner">
          <div className="products-hero-content">
            <span className="products-eyebrow">
              MUSHAD CONSTRUCTION & HARDWARE
            </span>

            <h1>
              Everything You Need
              <br />
              <span>To Build Better.</span>
            </h1>

            <p>
              Explore construction materials and hardware categories
              for your residential and commercial projects.
            </p>

            <a
              href="#product-categories"
              className="products-hero-button"
            >
              Explore Categories
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="products-hero-visual">
            <div className="products-3d-scene">
              <img
                src="/house.avif"
                alt="Building protected by advanced construction technology"
                className="protection-building-image"
              />

              <div className="protection-caption">
                <span>BUILT TO LAST</span>
                <p>Strength. Safety. Protection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY CATALOGUE */}
      <section
        className="products-section"
        id="product-categories"
      >
        <div className="products-heading">
          <span className="products-eyebrow">
            EXPLORE OUR RANGE
          </span>

          <h2>
            Construction <strong>Materials</strong>
          </h2>

          <p>
            Find the right category for your construction,
            renovation and hardware requirements.
          </p>
        </div>

        {/* SEARCH */}
        <div className="products-toolbar">
          <label className="products-search">
            <Search size={20} aria-hidden="true" />

            <input
              type="search"
              placeholder="Search ACC, Ambuja, Vijay TMT, CERA..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search products by name or brand"
            />

            {search && (
              <button
                type="button"
                className="products-clear-search"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={17} />
              </button>
            )}
          </label>
        </div>

        {/* FILTERS */}
        <div
          className="products-filter-list"
          aria-label="Filter products"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`products-filter ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* SEARCH RESULTS: INDIVIDUAL PRODUCTS */}
        {isSearching && (
          <>
            <div className="products-results-heading">
              <h3>
                Search Results
                <span> ({filteredProducts.length})</span>
              </h3>

              <p>Products matching “{search}”</p>
            </div>

            <div className="product-category-grid">
              {filteredProducts.map((product) => (
                <div
                  key={`${product.category}-${product.id}`}
                  className="product-category-card"
                >
                  <div className="product-card-image-wrap">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-card-image"
                      loading="lazy"
                    />

                    <span className="product-image-label">
                      {product.brand || product.category}
                    </span>
                  </div>

                  <div className="product-card-content">
                    <h3>{product.name}</h3>

                    <p>{product.description}</p>

                    {product.price && (
                      <p className="product-search-price">
                        {product.price}
                      </p>
                    )}

                    <a
                      className="category-link"
                      href={`https://wa.me/919162512232?text=${encodeURIComponent(
                        `Hello, I want to enquire about ${product.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enquire Now
                      <ArrowRight size={17} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="products-empty-state">
                <Search size={34} aria-hidden="true" />

                <h3>No products found</h3>

                <p>
                  Try searching with another product name or brand.
                </p>

                <button type="button" onClick={clearSearch}>
                  View All Categories
                </button>
              </div>
            )}
          </>
        )}

        {/* CATEGORY CARDS: DEFAULT VIEW */}
        {!isSearching && (
          <>
            <div className="product-category-grid">
              {filteredCategories.map((category) => (
                <Link
                  key={category.id}
                  to={category.path}
                  className="product-category-card"
                >
                  <div className="product-card-image-wrap">
                    <img
                      src={category.image}
                      alt={category.imageAlt}
                      className="product-card-image"
                      loading="lazy"
                    />

                    <span className="product-card-number">
                      {String(category.id).padStart(2, "0")}
                    </span>

                    <span className="product-image-label">
                      {category.name}
                    </span>
                  </div>

                  <div className="product-card-content">
                    <h3>{category.name}</h3>

                    <p>{category.description}</p>

                    <span className="category-link">
                      {category.linkText}
                      <ArrowRight size={17} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {filteredCategories.length === 0 && (
              <div className="products-empty-state">
                <Search size={34} aria-hidden="true" />

                <h3>No categories found</h3>

                <p>
                  Select another category to continue.
                </p>

                <button type="button" onClick={clearSearch}>
                  View All Categories
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* BRAND MARQUEE */}
      <BrandMarquee />

   
    </main>
  );
}

export default Products;
