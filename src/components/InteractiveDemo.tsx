import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Pause, MoreHorizontal, Smartphone } from "lucide-react";

const InteractiveDemo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [curtainPosition, setCurtainPosition] = useState(50); // 0-100%
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationState, setAnimationState] = useState('stopped'); // 'opening', 'closing', 'stopped'
  
  const handleOpen = () => {
    setCurtainPosition(100);
    setAnimationState('stopped');
  };

  const handleClose = () => {
    setCurtainPosition(0);
    setAnimationState('stopped');
  };

  const handlePause = () => {
    if (isAnimating) {
      setIsAnimating(false);
      setAnimationState('stopped');
    }
  };

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(".demo-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(".demo-content",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.0,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);



  return (
    <section ref={sectionRef} id="demo" className="py-12 sm:py-20 bg-secondary/30 scroll-snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="demo-title text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Professional Smart Curtain Demo
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Watch our premium motorized curtains in action. Experience smooth, whisper-quiet operation with realistic fabric movement and professional-grade automation.
          </p>
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-accent-light text-accent text-xs sm:text-sm font-medium mt-4">
            Built for Bangladesh. Priced with #TruePrice.
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Real Curtain Demo */}
          <div className="demo-content relative order-2 lg:order-1 h-96 overflow-hidden">
            {/* Curtain Track */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-full shadow-lg z-20">
              <div className="absolute top-1 left-4 w-2 h-1 bg-gray-800 rounded-full"></div>
              <div className="absolute top-1 right-4 w-2 h-1 bg-gray-800 rounded-full"></div>
            </div>
            
            {/* Left Curtain Panel */}
            <div 
              className="absolute top-3 bottom-0 left-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 shadow-2xl z-10"
              style={{
                width: `${Math.max(5, (100 - curtainPosition) / 2)}%`,
                transition: 'width 1.5s ease-in-out'
              }}
            >
              {/* Realistic Fabric Folds */}
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={`left-fold-${i}`}
                  className="absolute top-0 bottom-0 bg-gradient-to-r from-gray-400/40 to-transparent shadow-inner"
                  style={{
                    left: `${i * 8}%`,
                    width: '6%',
                    transform: `rotateY(${i % 2 === 0 ? '15deg' : '-15deg'})`,
                    boxShadow: 'inset 2px 0 4px rgba(0,0,0,0.2)'
                  }}
                />
              ))}
              {/* Curtain Hem */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-400 shadow-md"></div>
            </div>

            {/* Right Curtain Panel */}
            <div 
              className="absolute top-3 bottom-0 right-0 bg-gradient-to-l from-gray-300 via-gray-200 to-gray-100 shadow-2xl z-10"
              style={{
                width: `${Math.max(5, (100 - curtainPosition) / 2)}%`,
                transition: 'width 1.5s ease-in-out'
              }}
            >
              {/* Realistic Fabric Folds */}
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={`right-fold-${i}`}
                  className="absolute top-0 bottom-0 bg-gradient-to-l from-gray-400/40 to-transparent shadow-inner"
                  style={{
                    right: `${i * 8}%`,
                    width: '6%',
                    transform: `rotateY(${i % 2 === 0 ? '-15deg' : '15deg'})`,
                    boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.2)'
                  }}
                />
              ))}
              {/* Curtain Hem */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-400 shadow-md"></div>
            </div>
          </div>

          {/* Modern Mobile UI */}
          <div className="demo-content order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* iPhone Frame */}
              <div className="w-72 sm:w-80 h-[580px] sm:h-[640px] bg-black rounded-[3rem] p-2 shadow-2xl">
                {/* iPhone Screen */}
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-gradient-to-b from-blue-300 to-blue-600">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 text-white text-sm font-semibold pt-8">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                      </div>
                      <div className="w-6 h-3 border border-white rounded-sm relative">
                        <div className="w-4 h-2 bg-white rounded-sm absolute top-0.5 left-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Title */}
                  <div className="text-center py-4">
                    <h3 className="text-white text-xl font-bold">Smart Curtain</h3>
                    <p className="text-white/80 text-sm">Living Room</p>
                  </div>

                  {/* Curtain Visualization */}
                  <div className="flex-1 flex items-center justify-center px-8 py-8">
                    <div className="relative w-48 h-64 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 overflow-hidden">
                      {/* Curtain Track */}
                      <div className="absolute top-2 left-2 right-2 h-1 bg-white/30 rounded-full"></div>
                      
                      {/* Left Curtain Panel */}
                      <div 
                        className="absolute top-4 bottom-4 bg-gradient-to-r from-gray-300 to-gray-200 shadow-lg"
                        style={{
                          left: '8px',
                          width: `${Math.max(5, (100 - curtainPosition) / 2)}%`,
                          transition: 'width 1.5s ease-in-out'
                        }}
                      >
                        {/* Fabric texture */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-transparent"></div>
                      </div>
                      
                      {/* Right Curtain Panel */}
                      <div 
                        className="absolute top-4 bottom-4 bg-gradient-to-l from-gray-300 to-gray-200 shadow-lg"
                        style={{
                          right: '8px',
                          width: `${Math.max(5, (100 - curtainPosition) / 2)}%`,
                          transition: 'width 1.5s ease-in-out'
                        }}
                      >
                        {/* Fabric texture */}
                        <div className="absolute inset-0 bg-gradient-to-l from-gray-400/20 to-transparent"></div>
                      </div>
                      
                      {/* Position Indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-white text-xs font-medium">{curtainPosition}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Control Buttons */}
                  <div className="px-8 pb-8">
                    <div className="flex justify-center space-x-4 mb-4">
                      <Button
                        onClick={handleOpen}
                        disabled={curtainPosition >= 100}
                        className="px-6 py-3 rounded-full bg-green-500/80 backdrop-blur-sm border border-white/30 hover:bg-green-500 transition-all duration-300 disabled:opacity-50 text-white font-semibold"
                        title="Open Curtains"
                      >
                        Open
                      </Button>
                      
                      <Button
                        onClick={handleClose}
                        disabled={curtainPosition <= 0}
                        className="px-6 py-3 rounded-full bg-red-500/80 backdrop-blur-sm border border-white/30 hover:bg-red-500 transition-all duration-300 disabled:opacity-50 text-white font-semibold"
                        title="Close Curtains"
                      >
                        Close
                      </Button>
                    </div>
                    
                    {/* More Link */}
                    <div className="text-center">
                      <button className="text-white/80 text-sm hover:text-white transition-colors flex items-center justify-center space-x-1">
                        <MoreHorizontal className="w-4 h-4" />
                        <span>More</span>
                      </button>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                      <p className="text-white/80 text-xs text-center">
                        'Ready'
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;