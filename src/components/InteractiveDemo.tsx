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
          {/* Real Curtain Demo */}
          <div className="relative order-2 lg:order-1 h-96 overflow-hidden">
            {/* Curtain Track */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-full shadow-lg z-20">
              <div className="absolute top-1 left-4 w-2 h-1 bg-gray-800 rounded-full"></div>
              <div className="absolute top-1 right-4 w-2 h-1 bg-gray-800 rounded-full"></div>
            </div>
            
            {/* Left Curtain Panel */}
            <div 
              className={`absolute top-3 bottom-0 left-0 w-1/2 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 shadow-2xl transition-all duration-1000 ease-in-out z-10 ${
                isOpen ? '-translate-x-3/4' : 'translate-x-0'
              }`}
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
              className={`absolute top-3 bottom-0 right-0 w-1/2 bg-gradient-to-l from-gray-300 via-gray-200 to-gray-100 shadow-2xl transition-all duration-1000 ease-in-out z-10 ${
                isOpen ? 'translate-x-3/4' : 'translate-x-0'
              }`}
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

          {/* Apple iPhone Mockup */}
          <div className="animate-fade-in order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* iPhone Frame */}
              <div className="w-72 sm:w-80 h-[580px] sm:h-[640px] bg-black rounded-[3rem] p-2 shadow-2xl">
                {/* iPhone Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  
                  {/* Screen Content */}
                  <div className="h-full bg-white">
                    {/* Realistic Status Bar */}
                    <div className="flex justify-between items-center px-6 py-3 text-black text-sm font-semibold">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        </div>
                        <div className="w-6 h-3 border border-black rounded-sm relative">
                          <div className="w-4 h-2 bg-green-500 rounded-sm absolute top-0.5 left-0.5"></div>
                          <div className="w-1 h-1 bg-black absolute -right-0.5 top-1"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Professional Navigation */}
                    <div className="px-6 py-4 border-b border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                            <Smartphone className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">SmartHome</h3>
                            <p className="text-sm text-gray-500">2 devices connected</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-green-600 font-medium">Online</span>
                        </div>
                      </div>
                      
                      {/* Navigation Tabs */}
                      <div className="flex space-x-1 bg-gray-100 rounded-xl p-1">
                        <div className="flex-1 py-2 px-3 bg-white rounded-lg shadow-sm">
                          <span className="text-sm font-semibold text-blue-600">Curtains</span>
                        </div>
                        <div className="flex-1 py-2 px-3 text-center">
                          <span className="text-sm text-gray-500">Lights</span>
                        </div>
                        <div className="flex-1 py-2 px-3 text-center">
                          <span className="text-sm text-gray-500">Climate</span>
                        </div>
                      </div>
                    </div>
                
                    {/* Room Card */}
                    <div className="px-6 py-4">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center shadow-md">
                              <span className="text-lg">🏠</span>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">Living Room</h4>
                              <p className="text-xs text-blue-600 font-medium">Smart Curtain • Active</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-green-600 font-semibold">Connected</span>
                          </div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>Last updated: 2 min ago</span>
                          <span>Battery: 98%</span>
                        </div>
                      </div>
                    </div>
                
                    {/* Professional Control Buttons */}
                    <div className="px-6 py-4">
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          onClick={handleToggle}
                          disabled={isAnimating}
                          className={`h-24 flex flex-col items-center justify-center relative overflow-hidden border-0 rounded-2xl shadow-lg transition-all duration-300 ${
                            !isOpen ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-green-200' : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          <Play className="w-7 h-7 mb-2" />
                          <span className="font-bold text-sm">OPEN</span>
                          <span className="text-xs opacity-80">Curtains</span>
                          {isAnimating && !isOpen && (
                            <div className="absolute inset-0 bg-white/20 animate-pulse rounded-2xl"></div>
                          )}
                        </Button>
                        
                        <Button
                          onClick={handleToggle}
                          disabled={isAnimating}
                          className={`h-24 flex flex-col items-center justify-center relative overflow-hidden border-0 rounded-2xl shadow-lg transition-all duration-300 ${
                            isOpen ? 'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-red-200' : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          <Square className="w-7 h-7 mb-2" />
                          <span className="font-bold text-sm">CLOSE</span>
                          <span className="text-xs opacity-80">Curtains</span>
                          {isAnimating && isOpen && (
                            <div className="absolute inset-0 bg-white/20 animate-pulse rounded-2xl"></div>
                          )}
                        </Button>
                      </div>
                    </div>
                
                    {/* Quick Settings */}
                    <div className="flex items-center justify-between p-3 bg-gray-100 rounded-xl mx-6">
                      <div className="flex items-center space-x-2">
                        <Settings className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-900">Quick Settings</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs text-blue-600">
                        Schedule
                      </Button>
                    </div>
                    
                    <div className="text-center pt-4 border-t border-gray-200 mx-6">
                      <p className="text-sm text-gray-600">
                        {isAnimating ? (
                          <span className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
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
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;