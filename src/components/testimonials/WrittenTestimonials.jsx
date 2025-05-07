import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WrittenTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = React.useRef(null);

  const testimonials = [
    {
      text: "The hair transplant changed my life completely. The results are amazing and the staff was very professional throughout the entire process.",
      author: "John D.",
      rating: 5,
    },
    {
      text: "I was nervous at first, but the team made me feel comfortable. Now, six months later, I couldn't be happier with my decision.",
      author: "Sarah M.",
      rating: 5,
    },
    {
      text: "Excellent service from consultation to aftercare. My hair looks natural and I've regained my confidence.",
      author: "Michael T.",
      rating: 4,
    },
    {
      text: "The procedure was painless and the recovery was quicker than I expected. Highly recommend this clinic for anyone considering a hair transplant.",
      author: "David L.",
      rating: 5,
    },
    {
      text: "Professional staff and excellent results. It's been a year since my procedure and I'm still thrilled with the outcome.",
      author: "Emma R.",
      rating: 5,
    },
    // Add more testimonials as needed
  ];

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);
        
        if (width >= 1280) {
          setVisibleItems(3);
        } else if (width >= 768) {
          setVisibleItems(2);
        } else {
          setVisibleItems(1);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= testimonials.length - visibleItems ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - visibleItems : prevIndex - 1
    );
  };

  const itemWidth = containerWidth / Math.min(visibleItems, testimonials.length);

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
    ));
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-8">
      <h2 className="heading-h2 font-bold text-center mb-8 text-gray-800">Client Feedback</h2>
      
      <div className="relative" ref={containerRef}>
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * itemWidth}px)`,
              width: `${testimonials.length * itemWidth}px`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 p-2"
                style={{ width: `${itemWidth}px` }}
              >
                <div className="bg-white rounded-lg shadow h-full p-6 flex flex-col">
                  <div className=" mb-4 text-center">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-body italic mb-6 text-lg flex-grow">"{testimonial.text}"</p>
                  <p className="text-body  font-semibold text-gray-800 text-center">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {testimonials.length > visibleItems && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md transition-all z-10"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md transition-all z-10"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </>
        )}
      </div>
      
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: Math.ceil(testimonials.length / visibleItems) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * visibleItems)}
            className={`w-3 h-3 rounded-full ${currentIndex >= index * visibleItems && currentIndex < (index + 1) * visibleItems ? 'bg-gray-800' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default WrittenTestimonials;