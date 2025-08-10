import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="mb-4">By accessing and using SmartCurtain services, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Product Information</h2>
            <p className="mb-4">We strive to provide accurate product information, but we do not warrant that product descriptions or other content is accurate, complete, reliable, or error-free.</p>
            <ul className="list-disc pl-6 mb-4">
              <li>All measurements and specifications are approximate</li>
              <li>Colors may vary due to monitor settings</li>
              <li>Product availability is subject to change</li>
              <li>We reserve the right to modify product specifications</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Pricing and Payment</h2>
            <p className="mb-4">All prices are listed in Bangladeshi Taka (৳) and are subject to change without notice.</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Prices include applicable taxes unless otherwise stated</li>
              <li>Payment is required at the time of order placement</li>
              <li>We accept bKash, Nagad, credit/debit cards, and bank transfers</li>
              <li>Orders are subject to acceptance and product availability</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Installation Services</h2>
            <p className="mb-4">Professional installation services are available for an additional fee:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Installation appointments are subject to technician availability</li>
              <li>Customer must provide safe and accessible installation environment</li>
              <li>Additional charges may apply for complex installations</li>
              <li>Installation warranty is separate from product warranty</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Warranty</h2>
            <p className="mb-4">SmartCurtain products come with the following warranty coverage:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>2-year warranty on motors and mechanical components</li>
              <li>1-year warranty on electronic components and controls</li>
              <li>Warranty covers manufacturing defects only</li>
              <li>Damage from misuse, accidents, or normal wear is not covered</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="mb-4">SmartCurtain shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our products or services.</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">User Responsibilities</h2>
            <p className="mb-4">By using our products and services, you agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Use products only as intended and according to instructions</li>
              <li>Maintain products in good working condition</li>
              <li>Provide accurate information for orders and support</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Privacy</h2>
            <p className="mb-4">Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Modifications</h2>
            <p className="mb-4">We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="mb-4">These terms are governed by the laws of Bangladesh. Any disputes will be resolved in the courts of Dhaka, Bangladesh.</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contact Information</h2>
            <p>For questions about these Terms & Conditions, contact us at:</p>
            <p className="mt-2">
              Email: legal@smartcurtain.bd<br />
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

export default TermsConditions;