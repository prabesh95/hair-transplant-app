import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VideoTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = React.useRef(null);

  const videos = [
    {
      id: 'youtube-id-1',
      title: 'Client Experience 1',
    },
    {
      id: 'youtube-id-2',
      title: 'Client Experience 2',
    },
    {
      id: 'youtube-id-3',
      title: 'Client Experience 3',
    },
    {
      id: 'youtube-id-4',
      title: 'Client Experience 4',
    },
    {
      id: 'youtube-id-5',
      title: 'Client Experience 5',
    },
    // Add more videos as needed
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
      prevIndex >= videos.length - visibleItems ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - visibleItems : prevIndex - 1
    );
  };

  const itemWidth = containerWidth / Math.min(visibleItems, videos.length);

  return (
    <div className='bg-ivory-white py-12' id='testimonials'>
    <div className="relative max-w-7xl mx-auto px-4 py-12" >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">Video Testimonials</h2>
      
      <div className="relative" ref={containerRef}>
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * itemWidth}px)`,
              width: `${videos.length * itemWidth}px`
            }}
          >
            {videos.map((video, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 p-2"
                style={{ width: `${itemWidth}px` }}
              >
                <div className="bg-white rounded-lg shadow h-full p-4">
                  <div className="aspect-w-16 aspect-h-9 w-full">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-48 md:h-64 rounded-lg"
                    ></iframe>
                  </div>
                  <h3 className="text-lg font-semibold mt-4 text-center">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {videos.length > visibleItems && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md transition-all z-10"
              aria-label="Previous videos"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md transition-all z-10"
              aria-label="Next videos"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </>
        )}
      </div>
      
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: Math.ceil(videos.length / visibleItems) }).map((_, index) => (
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

export default VideoTestimonials;