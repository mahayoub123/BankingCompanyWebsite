import Footer from "../components/Footer/Footer";
import HeroAbout from "../components/HeroAbout/HeroAbout";
import MissionVision from "../components/MissionVision/MissionVision";
import NavBar from "../components/NavBar/NavBar";
import PressSection from "../components/PressSection/PressSection";

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <HeroAbout />
      <MissionVision />
      <PressSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
