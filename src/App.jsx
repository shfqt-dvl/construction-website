import { Routes, Route } from "react-router-dom";

// MAIN COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import BackToTop from "./components/BackToTop";
import WhatsAppButton from "./components/WhatsappButton.jsx";
import CallButton from "./components/CallButton";
import ScrollToTop from "./components/ScrollToTop";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services.jsx";
import Contact from "./components/Contact";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

// PRODUCT PAGES
import CementProducts from "./pages/products/CementProducts";
import SteelProducts from "./pages/products/SteelProducts";
import PaintProducts from "./pages/products/PaintProducts";
import PipesProducts from "./pages/products/PipesProducts";
import WaterTankProducts from "./pages/products/WaterTankProducts";
import SanitaryProducts from "./pages/products/SanitaryProducts";
import ChemicalsProducts from "./pages/products/ChemicalsProducts";
import HardwareProducts from "./pages/products/HardwareProducts";

// GALLERY PAGES
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
      <ScrollToTop />

      <Navbar />

      <Routes>
        {/* HOME */}

        <Route path="/" element={<Home />} />

        {/* MAIN PAGES */}

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />

        {/* ADMIN */}

        <Route path="/admin" element={<Admin />} />

        {/* PRODUCTS */}

        <Route path="/products" element={<Products />} />

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

        {/* GALLERIES */}

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

        {/* 404 */}

        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* GLOBAL COMPONENTS */}

      <Footer />

      <BackToTop />

      <WhatsAppButton />

      <CallButton />
    </>
  );
}

export default App;