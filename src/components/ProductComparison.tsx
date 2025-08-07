import { Card } from "@/components/ui/card";
import { ShiningText } from "@/components/ui/shining-text";
import { CheckCircle, ArrowRight, Wifi, Zap } from "lucide-react";
import slidingCurtain from "@/assets/sliding-curtain.jpg";
import rollerCurtain from "@/assets/roller-curtain.jpg";

const ProductComparison = () => {
  const curtainTypes = [
    {
      id: "sliding",
      name: "Sliding Curtain",
      color: "bg-green-500",
      image: slidingCurtain,
      description: "Perfect for wide windows and patio doors. Smooth horizontal movement with premium track system.",
      features: [
        "Wide window coverage",
        "Premium aluminum track",
        "Whisper-quiet operation",
        "Dual motor option available"
      ],
      badge: "Most Popular"
    },
    {
      id: "roller", 
      name: "Roller Curtain",
      color: "bg-purple-500",
      image: rollerCurtain,
      description: "Ideal for standard windows. Clean vertical rolling with space-saving design.",
      features: [
        "Compact design",
        "Easy maintenance", 
        "Blackout fabric option",
        "Child-safe operation"
      ],
      badge: "Space Saver"
    }
  ];

  return (
    <section className="py-12 sm:py-20 scroll-snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Choose Your Perfect Smart Curtain
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            <ShiningText text="Both types offer the same smart features. Choose based on your window type and design preference." />
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {curtainTypes.map((curtain) => (
            <Card key={curtain.id} className="relative overflow-hidden hover-lift border-0 shadow-lg">
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className={`${curtain.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {curtain.badge}
                </div>
              </div>

              {/* Professional Product Image */}
              <div className="h-48 sm:h-56 md:h-64 relative overflow-hidden rounded-xl sm:rounded-2xl">
                <img 
                  src={curtain.image} 
                  alt={`${curtain.name} in modern interior`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Tech indicators */}
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 flex justify-between">
                  <div className="glass-effect rounded-lg px-2 sm:px-3 py-1 sm:py-2 flex items-center">
                    <Wifi className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-500" />
                    <span className="text-xs sm:text-sm font-medium text-white">Wi-Fi Ready</span>
                  </div>
                  <div className="glass-effect rounded-lg px-2 sm:px-3 py-1 sm:py-2 flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-1 sm:mr-2"></div>
                    <span className="text-xs sm:text-sm font-medium text-white">Zigbee</span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{curtain.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                  {curtain.description}
                </p>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mb-6">
                  {curtain.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Starting from</p>
                      <p className="text-lg sm:text-xl font-bold">৳X — at #TruePrice</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-accent font-medium">No hidden markup</p>
                      <p className="text-xs text-muted-foreground">Transparent pricing</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            <span className="font-semibold text-accent">#TruePrice Promise:</span> What you see is what you pay — no inflated prices, no fake discounts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;