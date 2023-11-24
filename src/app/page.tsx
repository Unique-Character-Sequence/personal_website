import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import AboutSection from './components/AboutSection';
const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 pt-4 sm:pt-16 pb-4 mt-10">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  )
};

export default Home;

