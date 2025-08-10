interface Order {
  id: string;
  customer: string;
  phone: string;
  status: string;
  payment: string;
  installation: string;
  importStatus: string;
  amount: number;
  date: string;
}

export const generatePDFContent = (order: Order) => {
  const invoiceHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Invoice ${order.id}</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .header { text-align: center; margin-bottom: 30px; }
        .company { font-size: 24px; font-weight: bold; color: #2563eb; }
        .invoice-details { display: flex; justify-content: space-between; margin: 20px 0; }
        .customer-info, .invoice-info { width: 45%; }
        .table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .table th, .table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        .table th { background-color: #f8f9fa; }
        .total { text-align: right; font-size: 18px; font-weight: bold; margin-top: 20px; }
        .footer { margin-top: 40px; text-align: center; color: #666; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="company">TruePrice Smart Curtains</div>
        <p>Premium Smart Home Solutions</p>
      </div>
      
      <div class="invoice-details">
        <div class="customer-info">
          <h3>Bill To:</h3>
          <p><strong>${order.customer}</strong></p>
          <p>Phone: ${order.phone}</p>
        </div>
        <div class="invoice-info">
          <h3>Invoice Details:</h3>
          <p><strong>Invoice #:</strong> ${order.id}</p>
          <p><strong>Date:</strong> ${order.date}</p>
          <p><strong>Status:</strong> ${order.status}</p>
        </div>
      </div>
      
      <table class="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Payment Status</th>
            <th>Installation</th>
            <th>Import Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Smart Curtain System</td>
            <td>${order.payment}</td>
            <td>${order.installation}</td>
            <td>${order.importStatus}</td>
            <td>৳${order.amount.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
      
      <div class="total">
        <p>Total Amount: ৳${order.amount.toLocaleString()}</p>
      </div>
      
      <div class="footer">
        <p>Thank you for choosing TruePrice Smart Curtains!</p>
        <p>Contact: info@trueprice.com | +880 1234-567890</p>
      </div>
    </body>
    </html>
  `;
  
  return invoiceHTML;
};

export const downloadPDF = (order: Order) => {
  const content = generatePDFContent(order);
  const blob = new Blob([content], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `invoice-${order.id}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};