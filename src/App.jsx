
import { Routes, Route } from "react-router-dom";

// MAIN COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";
import QuotePopup from "./components/QuotePopup";

// MAIN PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./components/Contact";
import Quote from "./components/Quote";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

// PROJECTS
import Projects from "./pages/Projects";
import ResidentialProjects from "./pages/ResidentialProjects";
import CommercialProjects from "./pages/CommercialProjects";
import IndustrialProjects from "./pages/IndustrialProjects";

// BLOGS, GALLERY AND FAQS
import Blogs from "./pages/Blogs";
import Gallery from "./pages/Gallery";
import Faqs from "./pages/Faqs";

// SERVICES
import Services from "./pages/Services";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import Industrial from "./pages/Industrial";
import Renovation from "./pages/Renovation";

// PRODUCT CATEGORY PAGES
import CementProducts from "./pages/products/CementProducts";
import SteelProducts from "./pages/products/SteelProducts";
import PaintProducts from "./pages/products/PaintProducts";
import PipesProducts from "./pages/products/PipesProducts";
import WaterTankProducts from "./pages/products/WaterTankProducts";
import SanitaryProducts from "./pages/products/SanitaryProducts";
import ChemicalsProducts from "./pages/products/ChemicalsProducts";
import HardwareProducts from "./pages/products/HardwareProducts";

// PRODUCT GALLERY PAGES
import CementGallery from "./pages/gallery/CementGallery.jsx";
import ChemicalGallery from "./pages/gallery/ChemicalGallery.jsx";
import PaintGallery from "./pages/gallery/PaintGallery.jsx";
import PipesGallery from "./pages/gallery/PipesGallery.jsx";
import HardwareGallery from "./pages/gallery/HardwareGallery.jsx";
import SanitaryGallery from "./pages/gallery/SanitaryGallery.jsx";
import SteelGallery from "./pages/gallery/SteelGallery.jsx";
import WatertankGallery from "./pages/gallery/WatertankGallery.jsx";

function App() {
  return (
    <>
      {/* AUTOMATIC SCROLL TO TOP ON ROUTE CHANGE */}
      <ScrollToTop />

      {/* NAVBAR */}
      <Navbar />

      {/* ALL ROUTES */}
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* SERVICES */}
        <Route path="/services" element={<Services />} />

        <Route
          path="/services/residential"
          element={<Residential />}
        />

        <Route
          path="/services/commercial"
          element={<Commercial />}
        />

        <Route
          path="/services/industrial"
          element={<Industrial />}
        />

        <Route
          path="/services/renovation"
          element={<Renovation />}
        />

        {/* PROJECTS */}
        <Route path="/projects" element={<Projects />} />

        <Route
          path="/projects/residential"
          element={<ResidentialProjects />}
        />

        <Route
          path="/projects/commercial"
          element={<CommercialProjects />}
        />

        <Route
          path="/projects/industrial"
          element={<IndustrialProjects />}
        />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />

        {/* GET A QUOTE PAGE */}
        <Route path="/quote" element={<Quote />} />

        {/* BLOGS */}
        <Route path="/blogs" element={<Blogs />} />

        {/* MAIN GALLERY */}
        <Route path="/gallery" element={<Gallery />} />

        {/* FAQS */}
        <Route path="/faqs" element={<Faqs />} />

        {/* ADMIN */}
        <Route path="/admin" element={<Admin />} />

        {/* MAIN PRODUCTS */}
        <Route path="/products" element={<Products />} />

        {/* PRODUCT CATEGORY PAGES */}
        <Route
          path="/products/cement"
          element={<CementProducts />}
        />

        <Route
          path="/products/steel"
          element={<SteelProducts />}
        />

        <Route
          path="/products/paints"
          element={<PaintProducts />}
        />

        <Route
          path="/products/pipes"
          element={<PipesProducts />}
        />

        <Route
          path="/products/water-tanks"
          element={<WaterTankProducts />}
        />

        <Route
          path="/products/sanitary"
          element={<SanitaryProducts />}
        />

        <Route
          path="/products/chemicals"
          element={<ChemicalsProducts />}
        />

        <Route
          path="/products/hardware"
          element={<HardwareProducts />}
        />

        {/* PRODUCT GALLERY PAGES */}
        <Route
          path="/gallery/cement"
          element={<CementGallery />}
        />

        <Route
          path="/gallery/chemicals"
          element={<ChemicalGallery />}
        />

        <Route
          path="/gallery/paints"
          element={<PaintGallery />}
        />

        <Route
          path="/gallery/pipes"
          element={<PipesGallery />}
        />

        <Route
          path="/gallery/hardware"
          element={<HardwareGallery />}
        />

        <Route
          path="/gallery/sanitary"
          element={<SanitaryGallery />}
        />

        <Route
          path="/gallery/steel"
          element={<SteelGallery />}
        />

        <Route
          path="/gallery/water-tank"
          element={<WatertankGallery />}
        />

        {/* 404 — KEEP LAST */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* GLOBAL COMPONENTS */}
      <Footer />
      <BackToTop />

      {/* GLOBAL QUOTE POPUP */}
      <QuotePopup />
    </>
  );
}

export default App;
