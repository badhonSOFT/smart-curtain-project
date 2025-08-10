import { useEffect, useRef, useState } from "react";
import { Check, X, Star, Shield, Zap } from "lucide-react";

const ComparisonSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const comparisonData = [
    {
      feature: "Installation Effort",
      smart: "Professional or DIY installation in under 1 hour",
      regular: "Manual setup, sewing, and drilling",
      icon: <Zap className="w-4 h-4" />
    },
    {
      feature: "Remote Control",
      smart: "App, remote, voice assistant",
      regular: "Manual pull only",
      icon: <Zap className="w-4 h-4" />
    },
    {
      feature: "Noise Level",
      smart: "Whisper-quiet motor (≤30dB)",
      regular: "Varies, often uneven",
      icon: <Zap className="w-4 h-4" />
    },
    {
      feature: "Smart Home Integration",
      smart: "Wi-Fi/Zigbee, Alexa, Google, Siri",
      regular: "None",
      icon: <Zap className="w-4 h-4" />
    },
    {
      feature: "Automation & Scheduling",
      smart: "Timers, sunrise/sunset, light sensor",
      regular: "No automation",
      icon: <Zap className="w-4 h-4" />
    },
    {
      feature: "Energy Efficiency",
      smart: "Helps regulate temperature & save energy",
      regular: "Depends on user action",
      icon: <Zap className="w-4 h-4" />
    },
    {
      feature: "Child & Pet Safety",
      smart: "Cordless, safety lock in app",
      regular: "Cords can be hazardous",
      icon: <Shield className="w-4 h-4" />
    },
    {
      feature: "Maintenance",
      smart: "Low; motor lasts years",
      regular: "Wear from manual pulling",
      icon: <Star className="w-4 h-4" />
    },
    {
      feature: "Warranty",
      smart: "2-Year motor & installation warranty",
      regular: "Limited or none",
      icon: <Shield className="w-4 h-4" />
    },
    {
      feature: "Price",
      smart: "Starts from ৳9,000",
      regular: "Starts from ৳2,500",
      icon: <Star className="w-4 h-4" />
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="comparison"
      className={`py-24 md:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Feature Comparison
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
            Smart vs. Traditional
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Experience the future of home automation with intelligent curtain technology
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <th className="text-left py-8 px-10 font-bold text-gray-900 text-xl">Features</th>
                  <th className="text-center py-8 px-10 font-bold text-white text-xl bg-gradient-to-r from-amber-500 to-orange-500 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        RECOMMENDED
                      </div>
                    </div>
                    Smart Curtain
                  </th>
                  <th className="text-left py-8 px-10 font-bold text-gray-900 text-xl">Regular Curtain</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={`border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                  }`}>
                    <td className="py-8 px-10">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                          {row.icon}
                        </div>
                        <span className="font-semibold text-gray-900 text-lg">{row.feature}</span>
                      </div>
                    </td>
                    <td className="py-8 px-10 bg-gradient-to-r from-amber-50 to-orange-50 border-l border-r border-amber-200/50">
                      <div className="flex items-start gap-4">
                        <div className="p-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0 mt-1">
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-gray-800 font-medium leading-relaxed">{row.smart}</span>
                      </div>
                    </td>
                    <td className="py-8 px-10">
                      <div className="flex items-start gap-4">
                        <div className="p-1.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex-shrink-0 mt-1">
                          <X className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-gray-600 leading-relaxed">{row.regular}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-8">
          {comparisonData.map((row, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg text-gray-600 shadow-sm">
                    {row.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl">{row.feature}</h3>
                </div>
              </div>
              
              {/* Smart Curtain Card */}
              <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200/50 relative">
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    BEST
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="font-bold text-amber-800 text-lg">Smart Curtain</span>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed pl-10">{row.smart}</p>
              </div>
              
              {/* Regular Curtain Card */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-1.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex-shrink-0">
                    <X className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="font-bold text-gray-900 text-lg">Regular Curtain</span>
                </div>
                <p className="text-gray-600 leading-relaxed pl-10">{row.regular}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Upgrade Your Home?</h3>
            <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who've made the smart choice
            </p>
            <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Get Your Smart Curtain Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;