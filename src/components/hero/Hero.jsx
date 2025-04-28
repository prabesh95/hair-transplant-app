import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from '../../assets/hero/adult-male-having-balding-problems.jpg';
import image2 from '../../assets/hero/man-getting-hair-loss-treatment.jpg';
import image3 from '../../assets/hero/mature-man-going-through-follicular-unit-extraction-process.jpg';
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Premium Hair Restoration",
      subtitle: "Natural-looking results with advanced FUE technology",
      path :"/contacts#consultation-form",
      cta:"Book Consultation" ,
      image: image1
    },
    {
      id: 2,
      title: "Non-Surgical Solutions",
      subtitle: "Effective treatments for hair loss prevention",
      path: "/hair-transplant/#procedure-summary",
      cta: "Ecplore Treatments",
      image: image2
    },
    {
      id: 3,
      title: "Personalized Care",
      subtitle: "Tailored solutions for your unique needs",
      cta: "Learn More",
      path: "/services/#male-transplant",
      image: image3
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="pt-20" id="hero-1">
      
    <div className="relative w-full h-[90vh] overflow-hidden ">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 relative"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "90vh",
            }}
          >
            {/* Overlay with brand colors */}
            <div className="absolute inset-0  flex items-center">
              <div className="max-w-7xl mx-auto px-8 text-ivory-white">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                  {slide.subtitle}
                </p>
                <HashLink smooth to={slide.path}>
                <button className="bg-olive-gold hover:bg-forest-green text-ivory-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 border-2 border-olive-gold hover:border-forest-green">
                  {slide.cta}
                </button>
                </HashLink>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-ivory-white/80 text-forest-green p-2 rounded-full hover:bg-olive-gold hover:text-ivory-white transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-ivory-white/80 text-forest-green p-2 rounded-full hover:bg-olive-gold hover:text-ivory-white transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-olive-gold w-6"
                : "bg-ivory-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Hero;