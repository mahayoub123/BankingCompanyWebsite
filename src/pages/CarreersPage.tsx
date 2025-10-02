import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import HeroCareers from "../components/HeroCareers/HeroCareers";
import NavBar from "../components/NavBar/NavBar";
import OurBenfits from "../components/OurBenfits/OurBenfits";
import OurValues from "../components/OurValues/OurValues";

const CarreersPage = () => {
  return (
    <div>
      <NavBar />
      <HeroCareers />
      <OurValues />
      <OurBenfits />
      <FAQ />
      <Footer />
    </div>
  );
};

export default CarreersPage;
