import { 
  Smartphone, 
  Shield, 
  Clock, 
  Zap, 
  Wifi, 
  Wrench,
  Sun,
  Volume2 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Smart App Control",
      description: "Control from anywhere with our intuitive mobile app"
    },
    {
      icon: Wifi,
      title: "Wi-Fi & Zigbee Ready", 
      description: "Connect via Wi-Fi or Zigbee for smart home integration"
    },
    {
      icon: Shield,
      title: "Child Safety Lock",
      description: "Built-in safety features for peace of mind"
    },
    {
      icon: Clock,
      title: "Schedule & Timer",
      description: "Set automatic open/close times for daily routines"
    },
    {
      icon: Zap,
      title: "Whisper Quiet Motor",
      description: "Premium motors designed for silent operation"
    },
    {
      icon: Sun,
      title: "Light Sensor",
      description: "Automatically adjust based on natural light"
    },
    {
      icon: Wrench,
      title: "Easy Installation",
      description: "Professional installation or DIY-friendly setup"
    },
    {
      icon: Volume2,
      title: "Voice Assistant",
      description: "Works with Alexa, Google Home, and Apple HomeKit"
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-20 bg-secondary/30 scroll-snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for Smart Living
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 sm:mb-6 px-2">
            Premium features without premium markup. Every smart curtain comes with these capabilities built-in.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-accent font-medium px-2">
            Everything you need — with no inflated prices or fake features. That's #TruePrice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-lift group"
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-3 sm:mb-4">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-16 text-center">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-accent/10 text-accent">
            <div className="w-2 h-2 bg-accent rounded-full mr-2 sm:mr-3"></div>
            <span className="font-medium text-xs sm:text-sm md:text-base">All features included • No hidden fees • Transparent pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;