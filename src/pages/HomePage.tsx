import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import ProductsSection from "../components/ProductSection/ProductSection";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductsSection />
    </div>
  );
};

export default HomePage;
