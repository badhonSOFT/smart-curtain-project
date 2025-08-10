import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InteractiveDemo from "@/components/InteractiveDemo";
import ProductSpec from "@/components/ProductSpec";
import ProductComparison from "@/components/ProductComparison";

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
        <div id="specs">
          <ProductSpec />
        </div>
        <ProductComparison />
        <CustomizeSection />
        <LifestyleGallery />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
