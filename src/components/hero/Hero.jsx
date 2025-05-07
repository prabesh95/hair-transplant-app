import { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import heroVideo from "../../assets/hero/neograf_hero_video.mp4"

const Hero = () => {
  const heroContent = {
    title: "The Art of Hair Restoration",
    subtitle: "Natural-looking results with advanced FUE technology",
    path: "/contacts#consultation-form",
    cta: "Book Consultation",
    video: heroVideo
  };

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Ensure video loops properly
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
        video.play().catch(error => {
          console.log("Auto-play prevented, trying with user interaction:", error);
        });
      });

      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
      });
    }

    return () => {
      if (video) {
        video.removeEventListener('loadeddata', () => {});
        video.removeEventListener('ended', () => {});
      }
    };
  }, []);

  // Play video when user interacts with page (to handle autoplay restrictions)
  const handleUserInteraction = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play().catch(error => {
        console.log("Playback failed:", error);
      });
    }
  };

  return (
    <div 
      className="pt-20" 
      id="hero-1"
      onClick={handleUserInteraction}
    >
      <div className="relative w-full h-[90vh] overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          preload="auto"
        >
          <source src={heroContent.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Loading overlay */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <div className="text-white text-lg">Loading...</div>
          </div>
        )}

        {/* Content Overlay - Modified for left alignment and vertical centering */}
        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="max-w-7xl w-full mx-auto px-8 text-ivory-white">
            <div className="w-full max-w-2xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-left">
                {heroContent.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-left">
                {heroContent.subtitle}
              </p>
              <div className="text-left">
                <HashLink smooth to={heroContent.path}>
                  <button className="bg-olive-gold hover:bg-forest-green text-ivory-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 border-2 border-olive-gold hover:border-forest-green">
                    {heroContent.cta}
                  </button>
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


