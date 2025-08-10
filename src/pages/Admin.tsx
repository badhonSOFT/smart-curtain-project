import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Eye, Filter, LogOut } from "lucide-react";
import AdminLogin from "@/components/AdminLogin";
import { downloadPDF } from "@/components/PDFInvoice";

interface Order {
  id: string;
  curtainType: string;
  motorType: string;
  curtainSize: string;
  installation: string;
  remoteSetup: boolean;
  paymentType: string;
  customerInfo: {
    name: string;
    phone: string;
    address: string;
  };
  pricing: {
    total: number;
    basePrice: number;
    zigbeeHub: number;
    installationCost: number;
    remoteCost: number;
  };
  orderDate: string;
  status: string;
}



const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const loadOrders = () => {
      const savedOrders = localStorage.getItem('orders');
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      }
    };
    loadOrders();
    
    // Refresh orders every 5 seconds
    const interval = setInterval(loadOrders, 5000);
    return () => clearInterval(interval);
  }, []);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [paymentFilter, setPaymentFilter] = useState<string>("all");

  if (!isLoggedIn) {
    return <AdminLogin onLogin={() => setIsLoggedIn(true)} />;
  }

  const filteredOrders = orders.filter(order => {
    const statusMatch = statusFilter === "all" || order.status === statusFilter;
    const paymentMatch = paymentFilter === "all" || order.payment === paymentFilter;
    return statusMatch && paymentMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "confirmed": return "bg-blue-100 text-blue-800";
      case "completed": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const exportPDF = (order: Order) => {
    downloadPDF(order);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-gray-600">Manage smart curtain orders and customers</p>
          </div>
          <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>

            <Select value={paymentFilter} onValueChange={setPaymentFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by Payment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Payments</SelectItem>
                <SelectItem value="cod">Cash on Delivery</SelectItem>
                <SelectItem value="full">Online Payment</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Orders Table */}
        <Card>
          <CardHeader>
            <CardTitle>Orders ({filteredOrders.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Order ID</th>
                    <th className="text-left p-3">Customer</th>
                    <th className="text-left p-3">Phone</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Payment</th>
                    <th className="text-left p-3">Installation</th>
                    <th className="text-left p-3">Product Details</th>
                    <th className="text-left p-3">Amount</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{order.id}</td>
                      <td className="p-3">{order.customerInfo.name}</td>
                      <td className="p-3">{order.customerInfo.phone}</td>
                      <td className="p-3">
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <Badge variant={order.paymentType === "full" ? "default" : "secondary"}>
                          {order.paymentType === "full" ? "Online" : "COD"}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <Badge variant={order.installation === "professional" ? "default" : "outline"}>
                          {order.installation === "professional" ? "Professional" : "Self"}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">
                          <div>{order.curtainType} - {order.motorType}</div>
                          <div className="text-gray-500">{order.curtainSize}</div>
                        </div>
                      </td>
                      <td className="p-3 font-medium">৳{order.pricing.total.toLocaleString()}</td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => exportPDF(order)}>
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;