import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Square, Smartphone, Wifi, Settings, Sun, Cloud, CloudRain, Snowflake } from "lucide-react";

const InteractiveDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(0);
  
  const weatherScenarios = [
    {
      name: "Sunny Morning",
      icon: Sun,
      gradient: "from-yellow-300 via-orange-200 to-blue-300",
      particles: "☀️",
      description: "Perfect day ahead!"
    },
    {
      name: "Cloudy Day",
      icon: Cloud,
      gradient: "from-gray-300 via-blue-200 to-gray-400",
      particles: "☁️",
      description: "Cozy weather outside"
    },
    {
      name: "Rainy Day",
      icon: CloudRain,
      gradient: "from-gray-400 via-blue-300 to-gray-600",
      particles: "🌧️",
      description: "Stay warm inside"
    },
    {
      name: "Snowy Winter",
      icon: Snowflake,
      gradient: "from-blue-100 via-white to-gray-200",
      particles: "❄️",
      description: "Winter wonderland"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWeather((prev) => (prev + 1) % weatherScenarios.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsOpen(!isOpen);
    setTimeout(() => setIsAnimating(false), 1500);
  };

  return (
    <section id="demo" className="py-12 sm:py-20 bg-secondary/30 scroll-snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
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
          {/* Professional Curtain Demo */}
          <div className="relative order-2 lg:order-1">
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-1 sm:p-2 shadow-elegant">
              <div className="relative h-64 sm:h-80 md:h-96 bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                {/* Modern Window Frame Structure */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl border border-slate-600 shadow-2xl">
                  {/* Modern Minimalist Frame */}
                  <div className="absolute inset-2 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl">
                    {/* Glass Reflection Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                  </div>
                  
                  {/* Window Glass Area */}
                  <div className="absolute inset-3 rounded-xl overflow-hidden backdrop-blur-sm">
                    {/* Dynamic Weather Background */}
                    <div className={`w-full h-full bg-gradient-to-br ${weatherScenarios[currentWeather].gradient} transition-all duration-1000`}>
                      {/* Animated Weather Particles */}
                      <div className="absolute inset-0 overflow-hidden">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute text-2xl animate-bounce"
                            style={{
                              left: `${(i * 12) + 10}%`,
                              top: `${(i % 3) * 30 + 10}%`,
                              animationDelay: `${i * 0.5}s`,
                              animationDuration: '3s'
                            }}
                          >
                            {weatherScenarios[currentWeather].particles}
                          </div>
                        ))}
                      </div>
                      
                      {/* Beautiful Landscape Elements */}
                      <div className="absolute bottom-0 left-0 right-0">
                        {/* Ground/Horizon */}
                        <div className="h-16 bg-gradient-to-t from-green-400 to-green-300 opacity-80"></div>
                        
                        {/* Trees */}
                        <div className="absolute bottom-16 left-4">
                          <div className="w-2 h-8 bg-amber-800 rounded-sm"></div>
                          <div className="absolute -top-4 -left-2 w-6 h-6 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="absolute bottom-16 right-8">
                          <div className="w-2 h-10 bg-amber-800 rounded-sm"></div>
                          <div className="absolute -top-5 -left-3 w-8 h-8 bg-green-600 rounded-full"></div>
                        </div>
                        
                        {/* Mountains */}
                        <div className="absolute bottom-16 left-1/3 w-0 h-0 border-l-8 border-r-8 border-b-12 border-transparent border-b-gray-600 opacity-60"></div>
                        <div className="absolute bottom-16 right-1/4 w-0 h-0 border-l-6 border-r-6 border-b-10 border-transparent border-b-gray-500 opacity-50"></div>
                      </div>
                      
                      {/* Weather Info Overlay */}
                      <div className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 transition-all duration-500 ${
                        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                      }`}>
                        <div className="flex items-center space-x-2">
                          {(() => {
                            const IconComponent = weatherScenarios[currentWeather].icon;
                            return <IconComponent className="w-4 h-4 text-blue-600" />;
                          })()}
                          <div className="text-xs">
                            <div className="font-semibold text-gray-800">{weatherScenarios[currentWeather].name}</div>
                            <div className="text-gray-600">{weatherScenarios[currentWeather].description}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    

                    
                    {/* Modern Smart Curtain Track */}
                    <div className="absolute -top-2 left-1 right-1 h-1.5 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-full shadow-lg z-20">
                      <div className="absolute top-0.5 right-2 w-2 h-0.5 bg-slate-900 rounded-full">
                        <div className={`w-0.5 h-0.5 rounded-full transition-all duration-300 ${
                          isAnimating ? 'bg-blue-400 animate-pulse' : 'bg-emerald-400'
                        }`}></div>
                      </div>
                      {/* Modern LED indicators */}
                      <div className="absolute top-0 left-3 w-1 h-1 bg-blue-400 rounded-full opacity-60"></div>
                      <div className="absolute top-0 right-8 w-1 h-1 bg-emerald-400 rounded-full opacity-60"></div>
                    </div>

                    {/* Left Curtain Panel */}
                    <div 
                      className={`absolute top-0 bottom-0 left-0 bg-gradient-to-r from-indigo-200 via-indigo-100 to-indigo-50 shadow-2xl transition-all duration-2500 ease-in-out z-10 ${
                        isOpen ? 'w-0 -translate-x-full opacity-0 scale-x-0' : 'w-1/2 translate-x-0 opacity-100 scale-x-100'
                      }`}
                      style={{
                        transformOrigin: 'left center',
                        borderRight: '2px solid rgba(99, 102, 241, 0.3)'
                      }}
                    >
                      {/* Realistic Fabric Folds */}
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div 
                          key={`left-fold-${i}`}
                          className="absolute top-0 bottom-0 bg-gradient-to-r from-indigo-300/30 to-transparent"
                          style={{
                            left: `${i * 16}%`,
                            width: '14%',
                            transform: `rotateY(${i * 4}deg) translateZ(${i * 2}px)`,
                            boxShadow: `inset 3px 0 6px rgba(0,0,0,0.15), 0 0 10px rgba(99, 102, 241, 0.1)`
                          }}
                        />
                      ))}
                    </div>

                    {/* Right Curtain Panel */}
                    <div 
                      className={`absolute top-0 bottom-0 right-0 bg-gradient-to-l from-indigo-200 via-indigo-100 to-indigo-50 shadow-2xl transition-all duration-2500 ease-in-out z-10 ${
                        isOpen ? 'w-0 translate-x-full opacity-0 scale-x-0' : 'w-1/2 translate-x-0 opacity-100 scale-x-100'
                      }`}
                      style={{
                        transformOrigin: 'right center',
                        borderLeft: '2px solid rgba(99, 102, 241, 0.3)'
                      }}
                    >
                      {/* Realistic Fabric Folds */}
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div 
                          key={`right-fold-${i}`}
                          className="absolute top-0 bottom-0 bg-gradient-to-l from-indigo-300/30 to-transparent"
                          style={{
                            right: `${i * 16}%`,
                            width: '14%',
                            transform: `rotateY(${-i * 4}deg) translateZ(${i * 2}px)`,
                            boxShadow: `inset -3px 0 6px rgba(0,0,0,0.15), 0 0 10px rgba(99, 102, 241, 0.1)`
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Dynamic Light Streaming Effect */}
                    <div className={`absolute inset-0 transition-all duration-2500 ${
                      isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}>
                      {/* Sunbeams Animation */}
                      {isOpen && (
                        <>
                          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-yellow-300/60 to-transparent transform rotate-12 animate-pulse"></div>
                          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-yellow-200/50 to-transparent transform -rotate-6 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                          <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-yellow-300/40 to-transparent transform rotate-6 animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </>
                      )}
                      
                      {/* Overall lighting based on weather */}
                      <div className={`absolute inset-0 transition-all duration-1000 ${
                        currentWeather === 0 ? 'bg-yellow-200/30' : // Sunny
                        currentWeather === 1 ? 'bg-gray-200/20' : // Cloudy
                        currentWeather === 2 ? 'bg-blue-200/25' : // Rainy
                        'bg-blue-100/30' // Snowy
                      }`}></div>
                    </div>
                  </div>
                </div>
                
                {/* Status Indicator */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-effect rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isAnimating ? 'bg-accent animate-pulse' : 'bg-green-500'
                      }`}></div>
                      <span className="text-sm font-medium">
                        {isAnimating ? 'Curtains Moving...' : 
                         isOpen ? `Enjoying ${weatherScenarios[currentWeather].name}` : 'Window Covered'
                        }
                      </span>
                    </div>
                    {isAnimating && (
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div className="bg-accent h-1 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional App Mockup */}
          <div className="animate-fade-in order-1 lg:order-2">
            <div className="bg-gradient-to-br from-primary to-primary-glow rounded-2xl sm:rounded-3xl p-1 sm:p-2 shadow-elegant">
              <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 text-foreground bg-background">
                {/* App Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">SmartCurtain</h3>
                      <p className="text-xs text-muted-foreground">Connected Devices</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Wifi className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-green-500 font-medium">Online</span>
                  </div>
                </div>
                
                {/* Room Selection */}
                <div className="mb-6">
                  <div className="flex items-center justify-between p-4 bg-secondary rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-sm">🏠</span>
                      </div>
                      <div>
                        <span className="font-medium">Living Room</span>
                        <p className="text-xs text-muted-foreground">Smart Curtain System</p>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Control Buttons */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                  <Button
                    variant={isOpen ? "outline" : "default"}
                    onClick={handleToggle}
                    disabled={isAnimating}
                    className="h-16 sm:h-20 flex flex-col items-center justify-center hover-lift relative overflow-hidden"
                  >
                    <Play className="w-4 h-4 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
                    <span className="font-medium text-sm sm:text-base">Open</span>
                    {isAnimating && !isOpen && (
                      <div className="absolute inset-0 bg-accent/20 animate-pulse"></div>
                    )}
                  </Button>
                  
                  <Button
                    variant={!isOpen ? "outline" : "default"}
                    onClick={handleToggle}
                    disabled={isAnimating}
                    className="h-16 sm:h-20 flex flex-col items-center justify-center hover-lift relative overflow-hidden"
                  >
                    <Square className="w-4 h-4 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
                    <span className="font-medium text-sm sm:text-base">Close</span>
                    {isAnimating && isOpen && (
                      <div className="absolute inset-0 bg-accent/20 animate-pulse"></div>
                    )}
                  </Button>
                </div>
                
                {/* Quick Settings */}
                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Quick Settings</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs">
                    Schedule
                  </Button>
                </div>
                
                <div className="text-center pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    {isAnimating ? (
                      <span className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                        <span>Processing command...</span>
                      </span>
                    ) : (
                      'Ready for your command'
                    )}
                  </p>
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