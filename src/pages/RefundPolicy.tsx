import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Refund Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">30-Day Return Policy</h2>
            <p className="mb-4">We offer a 30-day return policy for all smart curtain products. If you are not completely satisfied with your purchase, you may return it within 30 days of delivery for a full refund.</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Return Conditions</h2>
            <p className="mb-4">To be eligible for a return, your item must be:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>In original condition with all components included</li>
              <li>Unused and in the same condition as received</li>
              <li>In original packaging with all accessories</li>
              <li>Accompanied by the original receipt or proof of purchase</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Non-Returnable Items</h2>
            <p className="mb-4">The following items cannot be returned:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Custom-sized curtains made to specific measurements</li>
              <li>Items damaged by misuse or normal wear and tear</li>
              <li>Products returned after 30 days from delivery</li>
              <li>Items without original packaging or accessories</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Refund Process</h2>
            <p className="mb-4">Once we receive your returned item, we will:</p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Inspect the product within 2-3 business days</li>
              <li>Send you an email confirmation of the refund approval</li>
              <li>Process the refund to your original payment method</li>
              <li>Refunds typically appear within 5-10 business days</li>
            </ol>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Return Shipping</h2>
            <p className="mb-4">Return shipping costs:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Free return shipping for defective or damaged products</li>
              <li>Customer responsible for return shipping costs for other returns</li>
              <li>We recommend using a trackable shipping service</li>
              <li>SmartCurtain is not responsible for lost return packages</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Exchanges</h2>
            <p className="mb-4">We currently do not offer direct exchanges. If you need a different product, please return the original item and place a new order.</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Warranty Claims</h2>
            <p className="mb-4">Defective products under warranty may be repaired or replaced at no cost. Please contact our support team to initiate a warranty claim.</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contact for Returns</h2>
            <p>To initiate a return, please contact us at:</p>
            <p className="mt-2">
              Email: returns@smartcurtain.bd<br />
              Phone: +880 1XXXXXXXXX<br />
              Address: Dhaka, Bangladesh
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;