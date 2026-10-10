import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

// ================================
// MAIN COMPONENTS
// ================================

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import BackToTop from "./components/BackToTop";
import WhatsAppButton from "./components/WhatsappButton.jsx";
import CallButton from "./components/CallButton";
import ScrollToTop from "./components/ScrollToTop";

// ================================
// PAGES
// ================================

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Account from "./pages/Account";
import Admin from "./pages/Admin";

// ================================
// PRODUCT PAGES
// ================================

import CementProducts from "./pages/products/CementProducts";
import SteelProducts from "./pages/products/SteelProducts";
import PaintProducts from "./pages/products/PaintProducts";
import PipesProducts from "./pages/products/PipesProducts";
import WaterTankProducts from "./pages/products/WaterTankProducts";
import SanitaryProducts from "./pages/products/SanitaryProducts";
import ChemicalsProducts from "./pages/products/ChemicalsProducts";
import HardwareProducts from "./pages/products/HardwareProducts";

// ================================
// GALLERY PAGES
// ================================

import CementGallery from "./pages/gallery/CementGallery";
import ChemicalGallery from "./pages/gallery/ChemicalGallery";
import PaintGallery from "./pages/gallery/PaintGallery";
import PipesGallery from "./pages/gallery/PipesGallery";
import HardwareGallery from "./pages/gallery/HardwareGallery";
import SanitaryGallery from "./pages/gallery/SanitaryGallery";
import SteelGallery from "./pages/gallery/SteelGallery";
import WatertankGallery from "./pages/gallery/WatertankGallery";

// ================================
// APP
// ================================

function App() {
  return (
    <>
      {/* ================================
          SCROLL TO TOP
      ================================= */}

      <ScrollToTop />

      {/* ================================
          NAVBAR
      ================================= */}

      <Navbar />

      {/* ================================
          ROUTES
      ================================= */}

      <Routes>

        {/* ================================
            HOME
        ================================= */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* ================================
            ABOUT
        ================================= */}

        <Route
          path="/about"
          element={<About />}
        />

        {/* ================================
            SERVICES
        ================================= */}

        <Route
          path="/services"
          element={<Services />}
        />

        {/* ================================
            CONTACT
        ================================= */}

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* ================================
            ACCOUNT
        ================================= */}

        <Route
          path="/account"
          element={<Account />}
        />

        {/* ================================
            LOGIN
        ================================= */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* ================================
            ADMIN
        ================================= */}

        <Route
          path="/admin"
          element={<Admin />}
        />

        {/* ================================
            PRODUCTS MAIN PAGE
        ================================= */}

        <Route
          path="/products"
          element={<Products />}
        />

        {/* ================================
            PRODUCT PAGES
        ================================= */}

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

        {/* ================================
            GALLERY PAGES
        ================================= */}

        <Route
          path="/gallery/cement"
          element={<CementGallery />}
        />

        <Route
          path="/gallery/chemical"
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

        {/* ================================
            404
        ================================= */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      {/* ================================
          GLOBAL COMPONENTS
      ================================= */}

      <Footer />

      <BackToTop />

      <WhatsAppButton />

      <CallButton />
    </>
  );
}

export default App;