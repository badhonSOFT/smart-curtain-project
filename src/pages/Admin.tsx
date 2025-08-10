import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Eye, Filter, LogOut } from "lucide-react";
import AdminLogin from "@/components/AdminLogin";
import { downloadPDF } from "@/components/PDFInvoice";

interface Order {
  id: string;
  customer: string;
  phone: string;
  status: "Pending" | "Confirmed" | "Imported";
  payment: "10%" | "100%";
  installation: "Yes" | "No";
  importStatus: "Not Ordered" | "Ordered" | "Delivered";
  amount: number;
  date: string;
}

const mockOrders: Order[] = [
  { id: "ORD001", customer: "Ahmed Hassan", phone: "01712345678", status: "Pending", payment: "10%", installation: "Yes", importStatus: "Not Ordered", amount: 15000, date: "2024-01-15" },
  { id: "ORD002", customer: "Fatima Khan", phone: "01823456789", status: "Confirmed", payment: "100%", installation: "No", importStatus: "Ordered", amount: 25000, date: "2024-01-14" },
  { id: "ORD003", customer: "Rahman Ali", phone: "01934567890", status: "Imported", payment: "100%", installation: "Yes", importStatus: "Delivered", amount: 18000, date: "2024-01-13" }
];

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [orders, setOrders] = useState<Order[]>(mockOrders);
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
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Confirmed": return "bg-blue-100 text-blue-800";
      case "Imported": return "bg-green-100 text-green-800";
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
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Confirmed">Confirmed</SelectItem>
                <SelectItem value="Imported">Imported</SelectItem>
              </SelectContent>
            </Select>

            <Select value={paymentFilter} onValueChange={setPaymentFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by Payment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Payments</SelectItem>
                <SelectItem value="10%">10% Paid</SelectItem>
                <SelectItem value="100%">100% Paid</SelectItem>
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
                    <th className="text-left p-3">Import Status</th>
                    <th className="text-left p-3">Amount</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{order.id}</td>
                      <td className="p-3">{order.customer}</td>
                      <td className="p-3">{order.phone}</td>
                      <td className="p-3">
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <Badge variant={order.payment === "100%" ? "default" : "secondary"}>
                          {order.payment}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <Badge variant={order.installation === "Yes" ? "default" : "outline"}>
                          {order.installation}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <Badge className={
                          order.importStatus === "Delivered" ? "bg-green-100 text-green-800" :
                          order.importStatus === "Ordered" ? "bg-blue-100 text-blue-800" :
                          "bg-gray-100 text-gray-800"
                        }>
                          {order.importStatus}
                        </Badge>
                      </td>
                      <td className="p-3 font-medium">৳{order.amount.toLocaleString()}</td>
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