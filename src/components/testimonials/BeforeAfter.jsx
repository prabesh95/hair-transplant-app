import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = React.useRef(null);

  const images = [
    {
      before: '/before-after/1-before.jpg',
      after: '/before-after/1-after.jpg',
      name: 'Client 1',
    },
    {
      before: '/before-after/2-before.jpg',
      after: '/before-after/2-after.jpg',
      name: 'Client 2',
    },
    {
      before: '/before-after/3-before.jpg',
      after: '/before-after/3-after.jpg',
      name: 'Client 3',
    },
    {
      before: '/before-after/4-before.jpg',
      after: '/before-after/4-after.jpg',
      name: 'Client 4',
    },
    {
      before: '/before-after/5-before.jpg',
      after: '/before-after/5-after.jpg',
      name: 'Client 5',
    },
    // Add more images as needed
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
      prevIndex >= images.length - visibleItems ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - visibleItems : prevIndex - 1
    );
  };

  const itemWidth = containerWidth / Math.min(visibleItems, images.length);

  return (
    <div id='gallery' className='py-12'>
    <div className="relative max-w-7xl mx-auto px-4 py-12" >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">Before & After Results</h2>
      
      <div className="relative" ref={containerRef}>
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * itemWidth}px)`,
              width: `${images.length * itemWidth}px`
            }}
          >
            {images.map((image, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 p-2"
                style={{ width: `${itemWidth}px` }}
              >
                <div className="grid grid-cols-1 gap-4 p-4 bg-white rounded-lg shadow h-full">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Before</h3>
                    <img 
                      src={image.before} 
                      alt={`Before ${image.name}`} 
                      className="w-full h-48 md:h-64 object-cover rounded-lg mx-auto"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">After</h3>
                    <img 
                      src={image.after} 
                      alt={`After ${image.name}`} 
                      className="w-full h-48 md:h-64 object-cover rounded-lg mx-auto"
                    />
                  </div>
                  <p className="text-center pt-2 font-medium">{image.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {images.length > visibleItems && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md transition-all z-10"
              aria-label="Previous images"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md transition-all z-10"
              aria-label="Next images"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </>
        )}
      </div>
      
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: Math.ceil(images.length / visibleItems) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * visibleItems)}
            className={`w-3 h-3 rounded-full ${currentIndex >= index * visibleItems && currentIndex < (index + 1) * visibleItems ? 'bg-gray-800' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default BeforeAfter;