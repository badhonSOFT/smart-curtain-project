import { Meteors } from "@/components/ui/meteors";
import { RainbowButton } from "@/components/ui/rainbow-button";

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-white scroll-snap-start relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center pt-16 sm:pt-20">
        {/* Minimal Header with Meteors Overlay */}
        <div className="relative overflow-hidden">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-3 sm:mb-4 tracking-tight leading-tight relative z-10">
            Experience the Future of Home Automation
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed relative z-10">
            Premium smart curtains that automatically adjust to your daily routine. Control light, privacy, and energy efficiency with just a tap.
          </p>
          
          <RainbowButton 
            onClick={() => document.getElementById('customize')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base relative z-10 mt-4 hover:scale-105 transition-transform"
          >
            🎉 Get Your Smart Curtain
          </RainbowButton>
          
          {/* Meteors covering the text area */}
          <Meteors number={15} className="bg-gray-300 before:from-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;