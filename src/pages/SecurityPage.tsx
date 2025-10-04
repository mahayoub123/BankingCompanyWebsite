import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import HeroSeq from "../components/HeroSeq/HeroSeq";
import NavBar from "../components/NavBar/NavBar";
import Protect from "../components/Protect/Protect";

const SecurityPage = () => {
  return (
    <div>
      <NavBar />
      <HeroSeq />
      <FAQ />
      <Protect />
      <Footer />
    </div>
  );
};

export default SecurityPage;
