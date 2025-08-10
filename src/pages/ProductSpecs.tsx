import Navbar from "@/components/Navbar";
import ProductSpec from "@/components/ProductSpec";
import Footer from "@/components/Footer";

const ProductSpecs = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <ProductSpec />
      </main>
      <Footer />
    </div>
  );
};

export default ProductSpecs;