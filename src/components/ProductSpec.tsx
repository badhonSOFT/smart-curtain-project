import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { 
  Smartphone, 
  Wifi, 
  Settings, 
  Shield, 
  Package, 
  Truck, 
  Wrench,
  CheckCircle,
  Calendar,
  Activity,
  Home,
  Zap
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProductSpec = () => {
  useEffect(() => {
    // Hero animations
    const heroTl = gsap.timeline();
    
    heroTl.fromTo(".spec-title", 
      { opacity: 0, y: 50, rotationX: 15 },
      { opacity: 1, y: 0, rotationX: 0, duration: 1.5, ease: "power3.out" }
    )
    .fromTo(".spec-line",
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 1.8, ease: "power2.inOut" }, "-=1.0"
    )
    .fromTo(".spec-subtitle",
      { opacity: 0, y: 30, filter: "blur(8px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }, "-=0.8"
    );

    // Section headings animation
    gsap.fromTo(".section-heading", 
      { opacity: 0, y: 40, scale: 0.95 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 1.0, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section-heading",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cards stagger animation
    gsap.fromTo(".feature-card", 
      { opacity: 0, y: 60, rotationY: 15, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        rotationY: 0,
        scale: 1,
        duration: 0.8, 
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".feature-card",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Product sections animation
    gsap.fromTo(".product-section", 
      { opacity: 0, x: -50, scale: 0.95 },
      { 
        opacity: 1, 
        x: 0, 
        scale: 1,
        duration: 1.2, 
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".product-section",
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Small cards animation (What You Get, Order & Delivery)
    gsap.fromTo(".small-card", 
      { opacity: 0, y: 30, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.6, 
        ease: "back.out(1.2)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".small-card",
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-secondary/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.1),transparent_50%)] bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.05),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="mb-6 sm:mb-8 inline-block">
              <h1 className="spec-title text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 tracking-normal px-2">
                SOHUB Smart Curtain Bangladesh Edition
              </h1>
              <svg className="spec-line w-full h-2 sm:h-3" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0 8 Q50 2 100 8" stroke="url(#curveGradient)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="spec-subtitle text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
              Elegant, motorized curtains with smart control. Choose Sliding Curtain or Roller Blind, both with Wi-Fi or Zigbee connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Common Features */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="section-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-black px-2">✨ Common Features (Both Types)</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
            <Card className="feature-card group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Smartphone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-black">Control</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>SOHUB Smart Home App (Android/iOS)</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>Voice control ready</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>Optional wall switch or remote</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-black">Automation</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>Schedule open/close</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>Scene control</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>Sunrise/sunset timing</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>Group control</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Wifi className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-black">Connectivity</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>Wi-Fi (2.4GHz)</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>Zigbee 3.0 (hub auto-added if selected)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Wrench className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-black">Installation</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>DIY guide included</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>Professional setup available</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-black">Power</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>AC 220V (BD standard)</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>Optional backup battery</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-black">Warranty & Support</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>12 months motor/electronics</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>6 months workmanship</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>Local service & remote assistance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sliding Curtain System */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">🚪 Sliding Curtain System (Track Type)</h2>
            <p className="text-lg text-muted-foreground">Perfect for large windows, living rooms, and conference spaces</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-primary/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-background to-secondary/20 p-6 rounded-2xl shadow-xl border border-accent/20">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/src/assets/sliding-curtain.jpg" 
                    alt="Sliding Curtain Track System" 
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-lg text-sm font-bold shadow-md">
                    Track Type
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-black mb-2">Sliding Curtain System</h3>
                  <p className="text-sm text-muted-foreground">Professional track-based solution</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-background to-accent/5 p-6 rounded-xl border border-accent/20">
                <h3 className="font-semibold text-black mb-4 flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Track & Specifications
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="font-medium text-foreground">Track</span>
                    <span className="text-muted-foreground bg-accent/10 px-2 py-1 rounded text-sm">Aluminum alloy, ceiling or wall mount</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="font-medium text-foreground">Width</span>
                    <span className="text-muted-foreground bg-accent/10 px-2 py-1 rounded text-sm">Up to 6m</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="font-medium text-foreground">Open Styles</span>
                    <span className="text-muted-foreground bg-accent/10 px-2 py-1 rounded text-sm">Single or Center-open</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="font-medium text-foreground">Motor</span>
                    <span className="text-muted-foreground bg-accent/10 px-2 py-1 rounded text-sm">Quiet DC brushless</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="font-medium text-foreground">Speed</span>
                    <span className="text-muted-foreground bg-accent/10 px-2 py-1 rounded text-sm">15–25 cm/s adjustable</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="font-medium text-foreground">Noise</span>
                    <span className="text-muted-foreground bg-accent/10 px-2 py-1 rounded text-sm">≤ 35 dB</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium text-foreground">Load</span>
                    <span className="text-muted-foreground bg-accent/10 px-2 py-1 rounded text-sm">Up to 50 kg per track</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-background to-accent/5 p-6 rounded-xl border border-accent/20">
                <h3 className="font-semibold text-black mb-4 flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Extras Available
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>Optional curves</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>Fascia cover</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>Wall remote</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>Extended power cable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roller Blind System */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">🪟 Roller Blind System (Tubular Motor)</h2>
            <p className="text-lg text-muted-foreground">Ideal for compact windows, offices, and minimalist interiors</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-primary/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-background to-secondary/20 p-6 rounded-2xl shadow-xl border border-accent/20">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/src/assets/roller-curtain.jpg" 
                    alt="Roller Blind System" 
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-lg text-sm font-bold shadow-md">
                    Tubular Motor
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-black mb-2">Roller Blind System</h3>
                  <p className="text-sm text-muted-foreground">Compact tubular motor solution</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-background to-accent/5 p-6 rounded-xl border border-accent/20">
                <h3 className="font-semibold text-black mb-4 flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Tube & Specifications
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="font-medium text-foreground">Tube</span>
                    <span className="text-muted-foreground bg-accent/10 px-2 py-1 rounded text-sm">45 mm aluminum</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="font-medium text-foreground">Width</span>
                    <span className="text-muted-foreground bg-accent/10 px-2 py-1 rounded text-sm">Up to 3 m</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="font-medium text-foreground">Mounting</span>
                    <span className="text-muted-foreground bg-accent/10 px-2 py-1 rounded text-sm">Inside or outside frame</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="font-medium text-foreground">Motor</span>
                    <span className="text-muted-foreground bg-accent/10 px-2 py-1 rounded text-sm">Integrated tubular</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="font-medium text-foreground">Torque</span>
                    <span className="text-muted-foreground bg-accent/10 px-2 py-1 rounded text-sm">1.2 Nm</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="font-medium text-foreground">Noise</span>
                    <span className="text-muted-foreground bg-accent/10 px-2 py-1 rounded text-sm">≤ 35 dB</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium text-foreground">Load</span>
                    <span className="text-muted-foreground bg-accent/10 px-2 py-1 rounded text-sm">Up to 15 kg</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-background to-accent/5 p-6 rounded-xl border border-accent/20">
                <h3 className="font-semibold text-black mb-4 flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Fabrics & Extras
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="font-medium text-foreground">Fabrics</span>
                    <span className="text-muted-foreground bg-accent/10 px-2 py-1 rounded text-sm">Blackout, light filtering, solar screen, custom</span>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>Side guides</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>Cassette valance</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>Dual blinds option</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-12 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">📦 What You Get</h2>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Card className="group hover:shadow-md transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardContent className="p-4 text-center">
                <Settings className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-medium text-sm text-black">Motor</h3>
                <p className="text-xs text-muted-foreground">(Wi-Fi or Zigbee)</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-md transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardContent className="p-4 text-center">
                <Home className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-medium text-sm text-black">Track/Tube</h3>
                <p className="text-xs text-muted-foreground">Custom-sized</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-md transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardContent className="p-4 text-center">
                <Wrench className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-medium text-sm text-black">Brackets</h3>
                <p className="text-xs text-muted-foreground">& fixings</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-md transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardContent className="p-4 text-center">
                <Package className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-medium text-sm text-black">End caps</h3>
                <p className="text-xs text-muted-foreground">carriers/bottom bar</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-md transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardContent className="p-4 text-center">
                <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-medium text-sm text-black">Power cable</h3>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-md transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardContent className="p-4 text-center">
                <CheckCircle className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-medium text-sm text-black">Quick-start</h3>
                <p className="text-xs text-muted-foreground">guide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Order & Delivery */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">🛒 Order & Delivery</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="group hover:shadow-md transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardContent className="p-4 text-center">
                <Smartphone className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-medium text-sm mb-1 text-black">Order Process</h3>
                <p className="text-xs text-muted-foreground mb-1">Buy Now flow with measurement form</p>
                <Badge variant="secondary" className="text-xs">Zigbee → Hub auto-added</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-md transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardContent className="p-4 text-center">
                <Truck className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-medium text-sm mb-1 text-black">Delivery</h3>
                <p className="text-xs text-muted-foreground mb-1">3–4 weeks after confirmation</p>
                <Badge variant="secondary" className="text-xs">Nationwide</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-md transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardContent className="p-4 text-center">
                <Activity className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-medium text-sm mb-1 text-black">Payment</h3>
                <p className="text-xs text-muted-foreground mb-1">10% deposit or 100%</p>
                <Badge variant="default" className="bg-accent text-xs">৳30–50 install discount</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-md transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardContent className="p-4 text-center">
                <CheckCircle className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-medium text-sm mb-1 text-black">Support</h3>
                <p className="text-xs text-muted-foreground">Professional installation</p>
                <p className="text-xs text-muted-foreground">Video tutorials</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSpec;