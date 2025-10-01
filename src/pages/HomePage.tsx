import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import OurFeatures from "../components/OurFeatures/OurFeatures";
import ProductsSection from "../components/ProductSection/ProductSection";
import UseCases from "../components/UseCases/UseCases";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductsSection />
      <UseCases />
      <OurFeatures />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;
