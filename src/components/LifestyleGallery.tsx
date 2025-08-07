import { Component as ImageSlider } from "@/components/ui/image-auto-slider";

const LifestyleGallery = () => {

  return (
    <section id="gallery" className="py-12 sm:py-20 scroll-snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Transform Every Room
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            See how smart curtains enhance different spaces in your home with effortless style and functionality.
          </p>
        </div>

        {/* Professional Image Slider */}
        <ImageSlider />

        <div className="text-center mt-8 sm:mt-16">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-effect">
            <span className="text-sm sm:text-base md:text-lg font-medium warm-gradient bg-clip-text text-transparent">
              Premium living. Fair pricing. #TruePrice
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleGallery;