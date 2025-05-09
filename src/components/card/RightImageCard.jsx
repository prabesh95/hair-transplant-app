import React from 'react';
import { ArrowRight } from 'lucide-react';
import dhtImage from '../../assets/extras/direct_hair_transplant.jpg';// Replace with your image
import { HashLink } from 'react-router-hash-link';

const RightImageCard = () => {
  return (
    // <div className='my-12 bg-gradient-to-b from-muted-teal/10 to-soft-sage/20 min-h-screen py-12'>
    <div className="max-w-7xl mx-auto my-8 p-4 py-12 lg:px-0" id='anti-hair-loss'>
      {/* Card Container */}
      <div className="bg-white  overflow-hidden">{/*rounded-xl shadow-lg*/}
        {/* Title at Top */}
        <div className="pt-6 ">
          <h2 className="font-bold text-h2 sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem] text-forest-green text-center">
            Direct Hair Transplant (DHT)
          </h2>
          <p className="text-base  lg:text-lg mt-1 text-center">
            The Gold Standard in Hair Restoration
          </p>
          <div className="w-20 h-1 bg-olive-gold mx-auto mt-4"></div>
        </div>

        {/* Content + Image Row - Key changes here */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Content - Now vertically centered */}
          <div className="lg:w-1/2  md:p-8 lg:px-0 flex flex-col justify-center"> {/* Added flex centering */}
            <div className="   mt-4"> {/* Wrapper div for content */}
              <p className="md:text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem] text-stone-gray mb-4 text-center lg:text-left">
                DHT is the most advanced hair transplantation method, offering superior results
                compared to traditional techniques like FUE and FUT.
              </p>

              <ul className="space-y-3 mb-6 text-stone-gray ">
                <li className="flex items-start ">
                  <span className="text-olive-gold mr-2 text-span md:text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem]">•</span>
                  <span className="text-span md:text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem]">Near 100% graft survival rate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-olive-gold mr-2 text-span md:text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem]">•</span>
                  <span className="text-span md:text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem]">Maximum density results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-olive-gold mr-2 text-span md:text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem]">•</span>
                  <span className="text-span md:text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem]">Minimal scarring</span>
                </li>
              </ul>

              <div className=" lg:text-left mb-3">
                <HashLink
                  to="/hair-transplant#dht-technique"
                  className=" inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base bg-olive-gold text-white rounded-lg hover:bg-forest-green transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 sm:ml-2" size={16} />
                </HashLink>
              </div>
            </div>
          </div>

          {/* Right Image - Aligns naturally with centered content */}
          <div className="lg:w-1/2 bg-gray-100 flex items-center p-0">
            <img
              src={dhtImage}
              alt="DHT Procedure"
              className="w-full h-auto object-cover min-h-[300px] lg:min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default RightImageCard;