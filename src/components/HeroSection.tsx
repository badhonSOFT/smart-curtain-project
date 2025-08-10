import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center scroll-snap-start relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero_video.mp4" type="video/mp4" />
          {/* Fallback gradient if video fails to load */}
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="text-white">
          <div className="mb-6 sm:mb-8">
            <h1 className="font-black tracking-tight leading-tight mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
                Smart Curtain Solutions for the Modern Bangladeshi Home
              </span>
            </h1>
            <div className="flex justify-center">
              <div className="w-3/4 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse-glow shadow-lg"></div>
            </div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed opacity-90 font-normal px-4">
            Professional-grade motorized curtains with Wi-Fi & Zigbee connectivity. Transform any window into a smart home centerpiece with whisper-quiet operation.
          </p>
          
          <Button 
            onClick={() => document.getElementById('customize')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg font-bold bg-gradient-to-r from-black via-gray-900 to-black hover:from-gray-800 hover:via-black hover:to-gray-800 text-white px-8 py-4 rounded-xl transition-all duration-1000 ease-in-out transform hover:scale-105 hover:shadow-2xl animate-fade-in"
          >
            Get Your Smart Curtain
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;