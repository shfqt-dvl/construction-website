import Hero from "../components/Hero";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <main className="home-page">
      <Hero />

      <Products />

      <Testimonials />
    </main>
  );
}

export default Home;