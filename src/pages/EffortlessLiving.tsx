import { ArrowLeft, Heart, Home, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EffortlessLiving = () => {
  const navigate = useNavigate();

  const lifestyleBenefits = [
    {
      icon: Home,
      title: "Smart Home Integration",
      description: "Seamlessly connect with your existing smart home ecosystem. Works with Alexa, Google Home, and Apple HomeKit for unified control."
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Automatically adjust curtains based on sunlight to maintain optimal room temperature, reducing your energy consumption and costs."
    },
    {
      icon: Shield,
      title: "Privacy on Demand",
      description: "Instant privacy at the touch of a button. Perfect for video calls, movie nights, or whenever you need personal space."
    },
    {
      icon: Clock,
      title: "Time Freedom",
      description: "No more rushing to open or close curtains. Set schedules that match your lifestyle and let technology handle the rest."
    }
  ];

  const dailyScenarios = [
    {
      time: "6:30 AM",
      scenario: "Gentle Wake-up",
      description: "Curtains gradually open to natural sunlight, helping you wake up naturally and energized."
    },
    {
      time: "9:00 AM",
      scenario: "Work Mode",
      description: "Automatically adjust for optimal lighting during video calls and focused work sessions."
    },
    {
      time: "6:00 PM",
      scenario: "Relaxation Time",
      description: "Create the perfect ambiance for dinner and family time with automated lighting control."
    },
    {
      time: "10:00 PM",
      scenario: "Sleep Preparation",
      description: "Gradually dim the room and close curtains for optimal sleep environment."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 hero-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-accent-light text-accent text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Our Philosophy & Promise
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="apple-gradient bg-clip-text text-transparent">
              #EffortlessLiving
            </span>
            <br />
            <span className="text-foreground">Redefined</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            We believe technology should simplify your life, not complicate it. 
            Smart curtains aren't just about automation — they're about giving you 
            more time for what truly matters.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-left">
            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary-light flex items-center justify-center mb-3 sm:mb-4">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Instant Control</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Control from anywhere with our intuitive app, voice commands, or automated schedules.
              </p>
            </div>

            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent-light flex items-center justify-center mb-3 sm:mb-4">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">#TruePrice Promise</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Honest pricing without markup, fake discounts, or hidden fees. Just fair value.
              </p>
            </div>

            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary-light flex items-center justify-center mb-3 sm:mb-4">
                <Home className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Made for Bangladesh</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Designed specifically for Bangladeshi homes, weather, and lifestyle preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Life Scenarios */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">A Day in Your Smart Home</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              See how smart curtains seamlessly integrate into your daily routine, 
              making every moment more comfortable and convenient.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {dailyScenarios.map((scenario, index) => (
              <div key={index} className="relative">
                <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full">
                  <div className="text-center mb-3 sm:mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary text-primary-foreground font-bold text-sm sm:text-lg mb-2">
                      {scenario.time.split(' ')[0]}
                    </div>
                    <p className="text-xs text-muted-foreground">{scenario.time.split(' ')[1]}</p>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-center">{scenario.scenario}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{scenario.description}</p>
                </div>
                
                {index < dailyScenarios.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Benefits */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Why Smart Curtains Transform Lives</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Beyond convenience, smart curtains offer real benefits that improve 
              your daily quality of life in meaningful ways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {lifestyleBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 sm:space-x-6 glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* #TruePrice Philosophy */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">#TruePrice Philosophy</h2>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
              "We believe you deserve honest pricing from day one. No inflated costs, 
              no fake discounts, no hidden charges. When you buy from us, you pay for 
              actual value — not marketing tricks or brand premiums."
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-left">
              <div className="bg-background rounded-lg sm:rounded-xl p-3 sm:p-4">
                <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">No Fake Discounts</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  We never inflate prices just to offer "sales." Our price is always fair.
                </p>
              </div>
              
              <div className="bg-background rounded-lg sm:rounded-xl p-3 sm:p-4">
                <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">Transparent Costs</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Every charge is clearly explained. No surprises, no hidden fees.
                </p>
              </div>
              
              <div className="bg-background rounded-lg sm:rounded-xl p-3 sm:p-4 sm:col-span-2 md:col-span-1">
                <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">Quality First</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Premium materials and technology without the premium markup.
                </p>
              </div>
            </div>
            
            <Button 
              onClick={() => navigate('/')}
              className="mt-6 sm:mt-8 warm-gradient font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base"
            >
              Experience #TruePrice Today
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EffortlessLiving;