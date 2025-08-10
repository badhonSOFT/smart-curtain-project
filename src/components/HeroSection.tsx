import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(".hero-title", 
      { opacity: 0, y: 60, rotationX: 15 },
      { opacity: 1, y: 0, rotationX: 0, duration: 2.0, ease: "power3.out" }
    )
    .fromTo(".hero-line",
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 1.5, ease: "power2.inOut" }, "-=1.2"
    )
    .fromTo(".hero-subtitle",
      { opacity: 0, y: 30, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }, "-=0.8"
    )
    .fromTo(".hero-button",
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 1.0, ease: "back.out(1.2)" }, "-=0.6"
    );
  }, []);

  return (
    <section ref={heroRef} id="hero" className="h-screen flex items-center justify-center scroll-snap-start relative overflow-hidden">
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
          <div className="mb-6 sm:mb-8 inline-block">
            <h1 className="hero-title font-semibold tracking-tight leading-tight mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
                Introducing Smart Curtains
              </span>
            </h1>
            <svg className="hero-line w-full h-3" viewBox="0 0 100 12" preserveAspectRatio="none">
              <path d="M0 8 Q50 2 100 8" stroke="url(#curveGradient)" strokeWidth="4" fill="none" strokeLinecap="round"/>
              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <p className="hero-subtitle text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed text-white font-bold px-4">
            The Next Step for the Modern Bangladeshi Home
          </p>
          
          <Button 
            onClick={() => document.getElementById('customize')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-button text-lg font-bold bg-gradient-to-r from-black via-gray-900 to-black hover:from-gray-800 hover:via-black hover:to-gray-800 text-white px-8 py-4 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >
            Get Your Smart Curtain
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;