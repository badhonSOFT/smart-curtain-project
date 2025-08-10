import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Package, Truck, CheckCircle, Clock } from "lucide-react";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const mockOrderData = {
    id: "ORD001",
    status: "In Transit",
    customer: "Ahmed Hassan",
    product: "Smart Sliding Curtain System",
    orderDate: "2024-01-15",
    estimatedDelivery: "2024-01-22",
    trackingSteps: [
      { status: "Order Placed", date: "2024-01-15", completed: true, icon: CheckCircle },
      { status: "Processing", date: "2024-01-16", completed: true, icon: Package },
      { status: "Shipped", date: "2024-01-18", completed: true, icon: Truck },
      { status: "In Transit", date: "2024-01-20", completed: true, icon: Truck },
      { status: "Delivered", date: "2024-01-22", completed: false, icon: CheckCircle }
    ]
  };

  const handleTrackOrder = () => {
    if (!orderId.trim()) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setOrderData(mockOrderData);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Track Your Order</h1>
          <p className="text-base sm:text-lg text-gray-600 px-4">Enter your order ID to get real-time updates on your smart curtain delivery</p>
        </div>

        {/* Order ID Input */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Enter Order ID (e.g., ORD001)"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="h-12 text-lg"
              />
            </div>
            <Button 
              onClick={handleTrackOrder}
              disabled={isLoading || !orderId.trim()}
              className="h-12 px-8 bg-blue-600 hover:bg-blue-700"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Tracking...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Track Order</span>
                </div>
              )}
            </Button>
          </div>
        </Card>

        {/* Order Details */}
        {orderData && (
          <div className="space-y-6">
            {/* Order Summary */}
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Order Details</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium">Order ID:</span> {orderData.id}</p>
                    <p><span className="font-medium">Customer:</span> {orderData.customer}</p>
                    <p><span className="font-medium">Product:</span> {orderData.product}</p>
                    <p><span className="font-medium">Order Date:</span> {orderData.orderDate}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Delivery Info</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium">Current Status:</span> 
                      <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {orderData.status}
                      </span>
                    </p>
                    <p><span className="font-medium">Estimated Delivery:</span> {orderData.estimatedDelivery}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Tracking Timeline */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Order Progress</h3>
              <div className="space-y-4">
                {orderData.trackingSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h4 className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                            {step.status}
                          </h4>
                          <span className={`text-sm ${step.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                            {step.completed ? step.date : 'Pending'}
                          </span>
                        </div>
                        {index < orderData.trackingSteps.length - 1 && (
                          <div className={`w-0.5 h-8 ml-5 mt-2 ${
                            step.completed ? 'bg-green-200' : 'bg-gray-200'
                          }`}></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Support Section */}
            <Card className="p-6 bg-blue-50 border-blue-200">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                <p className="text-gray-600 mb-4">Our customer support team is here to assist you</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                    Call Support: +880 1XXXXXXXXX
                  </Button>
                  <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                    Email: support@smartcurtain.bd
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Help Section */}
        {!orderData && (
          <Card className="p-6 bg-gray-50">
            <h3 className="text-lg font-semibold mb-4">How to Track Your Order</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <p>Enter your Order ID in the field above</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <p>Click "Track Order" to get real-time updates</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <p>View detailed progress and delivery information</p>
              </div>
            </div>
          </Card>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TrackOrder;