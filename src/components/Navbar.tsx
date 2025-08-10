import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";

import { gsap } from "gsap";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initial navbar animation
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -60, opacity: 0, scale: 0.98 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1.5, 
          ease: "power3.out", 
          delay: 0.5
        }
      );
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Only check sections on home page
      if (location.pathname === '/') {
        const sections = ['hero', 'demo', 'specs', 'compare', 'faq', 'customize'];
        let current = '';
        let minDistance = Infinity;
        
        // Find the section closest to the top of viewport
        sections.forEach(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const distanceFromTop = Math.abs(rect.top);
            
            // If section is visible and closer to top than previous sections
            if (rect.bottom > 0 && rect.top < window.innerHeight && distanceFromTop < minDistance) {
              minDistance = distanceFromTop;
              current = section;
            }
          }
        });
        
        setActiveSection(current);
      } else {
        setActiveSection('');
      }
    };
    
    // Initial call with delay to ensure DOM is ready
    setTimeout(handleScroll, 100);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Demo', id: 'demo' },
    { label: 'Compare', id: 'compare' },
    { label: 'FAQ', id: 'faq' },
  ];
  
  const pageItems = [
    { label: 'Specs', path: '/specs' },
  ];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-0.5">
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
            <button
              onClick={() => scrollToSection('demo')}
              className={`transition-colors duration-200 font-medium hover:text-accent ${
                activeSection === 'demo' 
                  ? 'font-bold text-accent' 
                  : 'text-black'
              }`}
            >
              Demo
            </button>
            <button
              onClick={() => {
                if (location.pathname === '/') {
                  document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/specs');
                }
              }}
              className={`transition-colors duration-200 font-medium hover:text-accent ${
                location.pathname === '/specs' || activeSection === 'specs'
                  ? 'font-bold text-accent' 
                  : 'text-black'
              }`}
            >
              Specs
            </button>
            <button
              onClick={() => scrollToSection('compare')}
              className={`transition-colors duration-200 font-medium hover:text-accent ${
                activeSection === 'compare' 
                  ? 'font-bold text-accent' 
                  : 'text-black'
              }`}
            >
              Compare
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className={`transition-colors duration-200 font-medium hover:text-accent ${
                activeSection === 'faq' 
                  ? 'font-bold text-accent' 
                  : 'text-black'
              }`}
            >
              FAQ
            </button>
            <button 
              onClick={() => navigate('/effortless-living')}
              className={`transition-colors duration-200 font-medium hover:text-accent ${
                location.pathname === '/effortless-living'
                  ? 'text-accent font-bold'
                  : 'text-black'
              }`}
            >
              #EffortlessLiving
            </button>
          </div>

          {/* Desktop Buy Now CTA */}
          <ShimmerButton 
            onClick={() => scrollToSection('customize')}
            className="hidden sm:flex px-4 py-2 text-sm"
            title="Tap to customize your curtain"
          >
            Buy Now
          </ShimmerButton>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-effect border-b border-border">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('demo')}
                className={`block w-full text-left py-2 transition-colors duration-200 font-medium hover:text-accent ${
                  activeSection === 'demo' 
                    ? 'font-bold text-accent' 
                    : 'text-black'
                }`}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  if (location.pathname === '/') {
                    document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/specs');
                  }
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 transition-colors duration-200 font-medium hover:text-accent ${
                  location.pathname === '/specs' || activeSection === 'specs'
                    ? 'font-bold text-accent' 
                    : 'text-black'
                }`}
              >
                Specs
              </button>
              <button
                onClick={() => scrollToSection('compare')}
                className={`block w-full text-left py-2 transition-colors duration-200 font-medium hover:text-accent ${
                  activeSection === 'compare' 
                    ? 'font-bold text-accent' 
                    : 'text-black'
                }`}
              >
                Compare
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className={`block w-full text-left py-2 transition-colors duration-200 font-medium hover:text-accent ${
                  activeSection === 'faq' 
                    ? 'font-bold text-accent' 
                    : 'text-black'
                }`}
              >
                FAQ
              </button>
              <button 
                onClick={() => {
                  navigate('/effortless-living');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 transition-colors duration-200 font-medium hover:text-accent ${
                  location.pathname === '/effortless-living'
                    ? 'text-accent font-bold'
                    : 'text-black'
                }`}
              >
                #EffortlessLiving
              </button>
              <ShimmerButton 
                onClick={() => scrollToSection('customize')}
                className="w-full mt-4 px-4 py-2 text-sm"
              >
                Buy Now
              </ShimmerButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;