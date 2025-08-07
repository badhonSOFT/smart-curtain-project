import { useState } from "react";
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
  const [curtainType, setCurtainType] = useState("sliding");
  const [motorType, setMotorType] = useState("wifi");
  const [curtainSize, setCurtainSize] = useState("");
  const [installation, setInstallation] = useState("professional");
  const [remoteSetup, setRemoteSetup] = useState(false);
  const [paymentType, setPaymentType] = useState("cod");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const needsZigbeeHub = motorType === "zigbee";
  const fullPaymentDiscount = paymentType === "full" ? 500 : 0;

  const calculatePrice = () => {
    let basePrice = curtainType === "sliding" ? 8000 : 7000;
    let zigbeeHub = needsZigbeeHub ? 2000 : 0;
    let installationCost = installation === "professional" ? 1000 : 0;
    let remoteCost = remoteSetup ? 500 : 0;
    
    let subtotal = basePrice + zigbeeHub + installationCost + remoteCost;
    let total = subtotal - fullPaymentDiscount;
    
    return { basePrice, zigbeeHub, installationCost, remoteCost, subtotal, total, discount: fullPaymentDiscount };
  };

  const pricing = calculatePrice();

  return (
    <section id="customize" className="py-12 sm:py-20 scroll-snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
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

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Configuration Form */}
          <div className="lg:col-span-2">
            <Card className="p-4 sm:p-6">
              <div className="space-y-6 sm:space-y-8">
                {/* Curtain Type */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Curtain Type</Label>
                  <RadioGroup value={curtainType} onValueChange={setCurtainType}>
                    <div className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
                      <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:bg-secondary/50 hover:border-primary/30 transition-all">
                        <RadioGroupItem value="sliding" id="sliding" className="scale-125" />
                        <Label htmlFor="sliding" className="font-medium cursor-pointer flex-1">
                          Sliding Curtain
                          <p className="text-sm text-muted-foreground mt-1">Wide windows & patio doors</p>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:bg-secondary/50 hover:border-primary/30 transition-all">
                        <RadioGroupItem value="roller" id="roller" className="scale-125" />
                        <Label htmlFor="roller" className="font-medium cursor-pointer flex-1">
                          Roller Curtain
                          <p className="text-sm text-muted-foreground mt-1">Standard windows</p>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Motor Type */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Motor Type</Label>
                  <RadioGroup value={motorType} onValueChange={setMotorType}>
                    <div className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
                      <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:bg-secondary/50 hover:border-primary/30 transition-all">
                        <RadioGroupItem value="wifi" id="wifi" className="scale-125" />
                        <Label htmlFor="wifi" className="font-medium cursor-pointer flex-1">
                          Wi-Fi Motor
                          <p className="text-sm text-muted-foreground mt-1">Direct internet connection</p>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:bg-secondary/50 hover:border-primary/30 transition-all">
                        <RadioGroupItem value="zigbee" id="zigbee" className="scale-125" />
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
                <div>
                  <Label htmlFor="size" className="text-lg font-semibold mb-4 block">
                    Curtain Size (in feet)
                  </Label>
                  <Input
                    id="size"
                    placeholder="e.g., 8x6 feet"
                    value={curtainSize}
                    onChange={(e) => setCurtainSize(e.target.value)}
                    className="text-lg p-4"
                  />
                </div>

                {/* Installation */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Installation</Label>
                  <RadioGroup value={installation} onValueChange={setInstallation}>
                    <div className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
                      <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:bg-secondary/50 hover:border-primary/30 transition-all">
                        <RadioGroupItem value="self" id="self" className="scale-125" />
                        <Label htmlFor="self" className="font-medium cursor-pointer flex-1">
                          Self Installation
                          <p className="text-sm text-muted-foreground mt-1">DIY with guide & support</p>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:bg-secondary/50 hover:border-primary/30 transition-all">
                        <RadioGroupItem value="professional" id="professional" className="scale-125" />
                        <Label htmlFor="professional" className="font-medium cursor-pointer flex-1">
                          Professional Installation
                          <p className="text-sm text-muted-foreground mt-1">Expert installation team</p>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Remote Setup */}
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

                {/* Customer Information */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold block">Delivery Information</Label>
                  <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium mb-2 block">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                        className="h-12 text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium mb-2 block">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="01XXXXXXXXX"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                        className="h-12 text-base"
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
                      className="min-h-[80px] text-base"
                    />
                  </div>
                </div>

                {/* Payment Options */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Payment Method</Label>
                  <RadioGroup value={paymentType} onValueChange={setPaymentType}>
                    <div className="space-y-4">
                      {/* Cash on Delivery */}
                      <div className="flex items-start space-x-3 p-4 border-2 rounded-xl hover:bg-secondary/50 hover:border-green-200 transition-all">
                        <RadioGroupItem value="cod" id="cod" className="mt-1 scale-125" />
                        <div className="flex-1">
                          <Label htmlFor="cod" className="font-medium cursor-pointer flex items-center">
                            <Truck className="w-5 h-5 mr-2 text-green-600" />
                            Cash on Delivery (COD)
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Pay when your smart curtain is delivered and installed
                          </p>
                          <div className="flex items-center mt-2 text-xs text-green-600">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            <span>No advance payment required</span>
                          </div>
                        </div>
                      </div>

                      {/* 10% Advance */}
                      <div className="flex items-start space-x-3 p-4 border rounded-xl hover:bg-secondary/50 transition-colors">
                        <RadioGroupItem value="advance" id="advance" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="advance" className="font-medium cursor-pointer flex items-center">
                            <CreditCard className="w-4 h-4 mr-2 text-blue-600" />
                            10% Advance Payment
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Pay 10% now via bKash/Nagad/Card, rest on delivery
                          </p>
                          <div className="flex items-center mt-2 text-xs text-blue-600">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            <span>Secure your order with minimal payment</span>
                          </div>
                        </div>
                      </div>

                      {/* Full Payment */}
                      <div className="flex items-start space-x-3 p-4 border-2 border-green-200 rounded-xl hover:bg-green-50 transition-colors bg-green-50/50">
                        <RadioGroupItem value="full" id="full" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="full" className="font-medium cursor-pointer flex items-center">
                            <Smartphone className="w-4 h-4 mr-2 text-green-600" />
                            100% Online Payment
                            <span className="ml-2 px-2 py-1 bg-green-600 text-white text-xs rounded-full">Save ৳500</span>
                          </Label>
                          <p className="text-sm text-green-700 mt-1">
                            Complete payment online and get instant ৳500 discount!
                          </p>
                          <div className="mt-2 text-xs text-green-600">
                            <div className="flex items-center mb-1">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              <span>bKash, Nagad, Rocket, Card payments</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              <span>Instant order confirmation</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>

                  {/* Payment Security Note */}
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl">
                    <div className="flex items-start space-x-2">
                      <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-medium text-blue-900">Secure Payment Guarantee</p>
                        <p className="text-blue-700 mt-1">
                          All online payments are processed through SSL encrypted gateways. 
                          Your financial information is completely secure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-24">
            <Card className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center">
                <Package className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Order Summary
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium capitalize">{curtainType} Curtain + {motorType} Motor</span>
                  <span>৳{pricing.basePrice.toLocaleString()}</span>
                </div>
                
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
              
              <Button className="w-full mt-4 sm:mt-6 warm-gradient font-semibold text-lg py-4 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all">
                Confirm Order
              </Button>
              
              <p className="text-xs text-center text-muted-foreground mt-3 sm:mt-4">
                What you see is what you pay — no hidden markup, no branding tax. This is #TruePrice.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;