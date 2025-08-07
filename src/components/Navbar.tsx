import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SparklesText } from "@/components/ui/sparkles-text";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check active section
      const sections = ['hero', 'demo', 'features', 'faq'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Demo', id: 'demo' },
    { label: 'Features', id: 'features' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/Modern Blue and Gray Smart Curtain Logo.png" 
              alt="SmartCurtain Logo" 
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => scrollToSection('hero')}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-200 font-medium ${
                  activeSection === item.id 
                    ? 'text-accent font-semibold' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => navigate('/effortless-living')}
              className="text-accent hover:text-accent-warm transition-colors duration-200 font-medium"
            >
              #EffortlessLiving
            </button>
          </div>

          {/* Desktop Buy Now CTA */}
          <Button 
            onClick={() => scrollToSection('customize')}
            className="hidden sm:flex bg-black hover:bg-gray-800 text-white font-button-weight px-4 sm:px-6 py-2.5 rounded-xl relative overflow-hidden transition-colors"
            title="Tap to customize your curtain"
          >
            <SparklesText 
              text="Buy Now" 
              className="text-sm font-medium text-white"
              sparklesCount={4}
              colors={{ first: "#ffffff", second: "#e5e7eb" }}
            />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-effect border-b border-border">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 transition-colors duration-200 font-medium ${
                    activeSection === item.id 
                      ? 'text-accent font-semibold' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  navigate('/effortless-living');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-accent hover:text-accent-warm transition-colors duration-200 font-medium"
              >
                #EffortlessLiving
              </button>
              <Button 
                onClick={() => scrollToSection('customize')}
                className="w-full mt-4 bg-black hover:bg-gray-800 text-white font-button-weight py-3 rounded-xl"
              >
                Buy Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;