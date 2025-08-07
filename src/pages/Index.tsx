import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InteractiveDemo from "@/components/InteractiveDemo";
import ProductComparison from "@/components/ProductComparison";
import FeaturesSection from "@/components/FeaturesSection";
import CustomizeSection from "@/components/CustomizeSection";
import LifestyleGallery from "@/components/LifestyleGallery";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="scroll-snap-y">
        <HeroSection />
        <InteractiveDemo />
        <ProductComparison />
        <FeaturesSection />
        <CustomizeSection />
        <LifestyleGallery />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
