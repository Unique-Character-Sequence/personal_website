import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import AboutSection from './components/AboutSection/AboutSection';
import ContactsSection from './components/ContactsSection/ContactsSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 pt-4 sm:pt-16 pb-4 mt-10">
        <HeroSection />
      </div>
      <AboutSection />
      <ProjectsSection />
      <ContactsSection />
    </main>
  )
};

export default Home;

