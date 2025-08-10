import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Typewriter } from "@/components/ui/typewriter-text";
import { CheckCircle, Info, Package, CreditCard, Truck, Smartphone } from "lucide-react";

const CustomizeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [curtainType, setCurtainType] = useState("");
  const [motorType, setMotorType] = useState("");
  const [curtainSize, setCurtainSize] = useState("");
  const [installation, setInstallation] = useState("");
  const [remoteSetup, setRemoteSetup] = useState(false);
  const [paymentType, setPaymentType] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: ""
  });
  


  const needsZigbeeHub = motorType === "zigbee";
  const fullPaymentDiscount = paymentType === "full" ? 500 : 0;
  
  useEffect(() => {
    if (curtainType && currentStep === 1) setCurrentStep(2);
    else if (motorType && currentStep === 2) setCurrentStep(3);
    else if (curtainSize && currentStep === 3) setCurrentStep(4);
    else if (installation && currentStep === 4) setCurrentStep(5);
    else if (currentStep === 5) setCurrentStep(6);
    else if (customerInfo.name && customerInfo.phone && customerInfo.address && currentStep === 6) setCurrentStep(7);
  }, [curtainType, motorType, curtainSize, installation, customerInfo, currentStep]);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(".customize-title",
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

      gsap.fromTo(".customize-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.2,
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

  const calculatePrice = () => {
    if (!curtainType || !motorType) {
      return { basePrice: 0, zigbeeHub: 0, installationCost: 0, remoteCost: 0, subtotal: 0, total: 0, discount: 0 };
    }
    
    let basePrice = curtainType === "sliding" ? 8000 : 7000;
    let zigbeeHub = needsZigbeeHub ? 2000 : 0;
    let installationCost = installation === "professional" ? 1000 : 0;
    let remoteCost = remoteSetup ? 500 : 0;
    
    let subtotal = basePrice + zigbeeHub + installationCost + remoteCost;
    let total = subtotal - fullPaymentDiscount;
    
    return { basePrice, zigbeeHub, installationCost, remoteCost, subtotal, total, discount: fullPaymentDiscount };
  };

  const pricing = calculatePrice();

  const handleConfirmOrder = async () => {
    if (!curtainType || !motorType || !curtainSize || !installation || !paymentType || 
        !customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert('Please fill all required fields');
      return;
    }

    setIsSubmitting(true);
    
    const orderData = {
      id: Date.now().toString(),
      curtainType,
      motorType,
      curtainSize,
      installation,
      remoteSetup,
      paymentType,
      customerInfo,
      pricing,
      orderDate: new Date().toISOString(),
      status: 'pending'
    };

    try {
      setShowModal(true);
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Get existing orders from localStorage
      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      
      // Add new order
      existingOrders.push(orderData);
      
      // Save back to localStorage
      localStorage.setItem('orders', JSON.stringify(existingOrders));
      
      setOrderComplete(true);
      
      // Show success for 1.5 seconds then refresh page
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      
    } catch (error) {
      setShowModal(false);
      alert('Error submitting order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="customize" className="py-12 sm:py-20 scroll-snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="customize-title text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Customize & Order <Typewriter 
              text="Your Smart Curtain"
              speed={80}
              loop={true}
              deleteSpeed={40}
              delay={2000}
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
            />
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Build your perfect smart curtain system with transparent pricing at every step.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="order-2 lg:order-1">
            <Card className="customize-card p-6 h-fit sticky top-24">
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden">
                <img 
                  src={curtainType === "roller" ? "/src/assets/roller-curtain.jpg" : "/src/assets/sliding-curtain.jpg"}
                  alt={`${curtainType} curtain with ${motorType} motor`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-lg capitalize">{curtainType} Curtain</h3>
                <p className="text-sm text-muted-foreground capitalize">{motorType} Motor System</p>
              </div>
            </Card>
          </div>
          
          {/* Selection Table & Order Summary */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Selection Table */}
            <Card className="customize-card p-6">
              <h3 className="text-xl font-semibold mb-6">Configure Your Smart Curtain</h3>
              <div className="h-[600px] overflow-y-scroll space-y-6 pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {/* Curtain Type */}
                <div className={`transition-all duration-500 relative ${currentStep >= 1 ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                  {currentStep < 1 && <div className="absolute inset-0 bg-gray-200/80 rounded-xl z-10"></div>}
                  <h4 className="font-semibold text-lg mb-4">1. Curtain Type</h4>
                  <RadioGroup value={curtainType} onValueChange={setCurtainType}>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:bg-secondary/50 hover:border-primary/30 transition-all">
                        <RadioGroupItem value="sliding" id="sliding" />
                        <Label htmlFor="sliding" className="font-medium cursor-pointer flex-1">
                          Sliding Curtain
                          <p className="text-sm text-muted-foreground mt-1">Wide windows & patio doors</p>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:bg-secondary/50 hover:border-primary/30 transition-all">
                        <RadioGroupItem value="roller" id="roller" />
                        <Label htmlFor="roller" className="font-medium cursor-pointer flex-1">
                          Roller Curtain
                          <p className="text-sm text-muted-foreground mt-1">Standard windows</p>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Motor Type */}
                <div className={`transition-all duration-500 relative ${currentStep >= 2 ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                  {currentStep < 2 && <div className="absolute inset-0 bg-gray-200/80 rounded-xl z-10"></div>}
                  <h4 className="font-semibold text-lg mb-4">2. Motor Type</h4>
                  <RadioGroup value={motorType} onValueChange={setMotorType}>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:bg-secondary/50 hover:border-primary/30 transition-all">
                        <RadioGroupItem value="wifi" id="wifi" />
                        <Label htmlFor="wifi" className="font-medium cursor-pointer flex-1">
                          Wi-Fi Motor
                          <p className="text-sm text-muted-foreground mt-1">Direct internet connection</p>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:bg-secondary/50 hover:border-primary/30 transition-all">
                        <RadioGroupItem value="zigbee" id="zigbee" />
                        <Label htmlFor="zigbee" className="font-medium cursor-pointer flex-1">
                          Zigbee Motor
                          <p className="text-sm text-muted-foreground mt-1">Smart home integration</p>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                  
                  {needsZigbeeHub && (
                    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                      <div className="flex items-start space-x-3">
                        <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-blue-900">Zigbee Hub Required</p>
                          <p className="text-sm text-blue-700 mt-1">
                            Zigbee motors require a Hub. We've added one — transparently, as part of our #TruePrice model.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Curtain Size */}
                <div className={`transition-all duration-500 relative ${currentStep >= 3 ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                  {currentStep < 3 && <div className="absolute inset-0 bg-gray-200/80 rounded-xl z-10"></div>}
                  <h4 className="font-semibold text-lg mb-4">3. Curtain Size</h4>
                  <Input
                    placeholder="e.g., 8x6 feet"
                    value={curtainSize}
                    onChange={(e) => setCurtainSize(e.target.value)}
                    className="text-base p-3"
                  />
                </div>

                {/* Installation */}
                <div className={`transition-all duration-500 relative ${currentStep >= 4 ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                  {currentStep < 4 && <div className="absolute inset-0 bg-gray-200/80 rounded-xl z-10"></div>}
                  <h4 className="font-semibold text-lg mb-4">4. Installation</h4>
                  <RadioGroup value={installation} onValueChange={setInstallation}>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:bg-secondary/50 hover:border-primary/30 transition-all">
                        <RadioGroupItem value="self" id="self" />
                        <Label htmlFor="self" className="font-medium cursor-pointer flex-1">
                          Self Installation
                          <p className="text-sm text-muted-foreground mt-1">DIY with guide & support</p>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:bg-secondary/50 hover:border-primary/30 transition-all">
                        <RadioGroupItem value="professional" id="professional" />
                        <Label htmlFor="professional" className="font-medium cursor-pointer flex-1">
                          Professional Installation
                          <p className="text-sm text-muted-foreground mt-1">Expert installation team</p>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Remote Setup */}
                <div className={`transition-all duration-500 relative ${currentStep >= 5 ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                  {currentStep < 5 && <div className="absolute inset-0 bg-gray-200/80 rounded-xl z-10"></div>}
                  <h4 className="font-semibold text-lg mb-4">5. Remote Setup</h4>
                  <div className="flex items-center justify-between p-4 border-2 rounded-xl hover:bg-secondary/30 transition-colors">
                    <div className="flex-1">
                      <Label htmlFor="remote" className="font-medium cursor-pointer">
                        Remote Configuration Setup
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        We'll configure your smart curtain remotely
                      </p>
                    </div>
                    <Switch
                      id="remote"
                      checked={remoteSetup}
                      onCheckedChange={setRemoteSetup}
                    />
                  </div>
                </div>

                {/* Customer Information */}
                <div className={`transition-all duration-500 relative ${currentStep >= 6 ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                  {currentStep < 6 && <div className="absolute inset-0 bg-gray-200/80 rounded-xl z-10"></div>}
                  <h4 className="font-semibold text-lg mb-4">6. Delivery Information</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium mb-2 block">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={customerInfo.name}
                          onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                          className="h-10 text-base"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium mb-2 block">Phone</Label>
                        <Input
                          id="phone"
                          placeholder="01XXXXXXXXX"
                          value={customerInfo.phone}
                          onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                          className="h-10 text-base"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address" className="text-sm font-medium mb-2 block">Address</Label>
                      <Textarea
                        id="address"
                        placeholder="Your complete address"
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                        className="min-h-[60px] text-base"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Options */}
                <div className={`transition-all duration-500 relative ${currentStep >= 7 ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                  {currentStep < 7 && <div className="absolute inset-0 bg-gray-200/80 rounded-xl z-10"></div>}
                  <h4 className="font-semibold text-lg mb-4">7. Payment Method</h4>
                  <RadioGroup value={paymentType} onValueChange={setPaymentType}>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3 p-3 border-2 rounded-xl hover:bg-secondary/50 hover:border-green-200 transition-all">
                        <RadioGroupItem value="cod" id="cod" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="cod" className="font-medium cursor-pointer flex items-center">
                            <Truck className="w-4 h-4 mr-2 text-green-600" />
                            Cash on Delivery
                          </Label>
                          <p className="text-xs text-muted-foreground mt-1">Pay on delivery</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 border-2 border-green-200 rounded-xl hover:bg-green-50 transition-colors bg-green-50/50">
                        <RadioGroupItem value="full" id="full" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="full" className="font-medium cursor-pointer flex items-center">
                            <Smartphone className="w-4 h-4 mr-2 text-green-600" />
                            Online Payment
                            <span className="ml-2 px-2 py-1 bg-green-600 text-white text-xs rounded-full">Save ৳500</span>
                          </Label>
                          <p className="text-xs text-green-700 mt-1">SSL Commerce</p>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </Card>
            
            {/* Order Summary */}
            <Card className="customize-card p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Package className="w-5 h-5 mr-2" />
                Order Summary
              </h3>
              
              <div className="space-y-4">
                {curtainType && motorType ? (
                  <div className="flex justify-between">
                    <span className="font-medium capitalize">{curtainType} Curtain + {motorType} Motor</span>
                    <span>৳{pricing.basePrice.toLocaleString()}</span>
                  </div>
                ) : (
                  <div className="flex justify-between text-gray-400">
                    <span>Select curtain type and motor</span>
                    <span>৳0</span>
                  </div>
                )}
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Track Size</span>
                  <span>{curtainSize || "TBD"}</span>
                </div>
                
                {needsZigbeeHub && (
                  <div className="flex justify-between">
                    <span>Zigbee Hub</span>
                    <span>৳{pricing.zigbeeHub.toLocaleString()}</span>
                  </div>
                )}
                
                {installation === "professional" && (
                  <div className="flex justify-between">
                    <span>Professional Installation</span>
                    <span>৳{pricing.installationCost.toLocaleString()}</span>
                  </div>
                )}
                
                {remoteSetup && (
                  <div className="flex justify-between">
                    <span>Remote Setup</span>
                    <span>৳{pricing.remoteCost.toLocaleString()}</span>
                  </div>
                )}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between font-medium">
                    <span>Subtotal</span>
                    <span>৳{pricing.subtotal.toLocaleString()}</span>
                  </div>
                  
                  {fullPaymentDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Full Payment Discount</span>
                      <span>-৳{fullPaymentDiscount}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-xl font-bold mt-2 pt-2 border-t">
                    <span>Total</span>
                    <span>৳{pricing.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={handleConfirmOrder}
                disabled={isSubmitting || currentStep < 7}
                className="w-full mt-6 warm-gradient font-semibold text-lg py-4 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : 'Confirm Order'}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                What you see is what you pay — no hidden markup, no branding tax. This is #TruePrice.
              </p>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Loading/Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-auto text-center shadow-2xl">
            {!orderComplete ? (
              <div className="space-y-6">
                <div className="w-16 h-16 mx-auto">
                  <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Processing Your Order</h3>
                  <p className="text-gray-600">Please wait while we confirm your smart curtain order...</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Order Confirmed!</h3>
                  <p className="text-gray-600 mb-4">Thank you for your order. We'll contact you within 24 hours to confirm delivery details.</p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-800 font-medium">Order ID: #{orderData.id}</p>
                    <p className="text-sm text-green-700">Total: ৳{pricing.total.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CustomizeSection;