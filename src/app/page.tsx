import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/AboutSection/AboutSection";
import ContactsSection from "./components/ContactsSection/ContactsSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Parallax from "./components/Parallax";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Parallax />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactsSection />
    </main>
  );
};

export default Home;
