import React from 'react';
import OurClinic from '../ourClinic/OurClinic';
import OurDoctors from '../ourDoctors/OurDoctors';
import WhyChooseUs from '../whyChooseUs/WhyChooseUs';
import GetInTouch from '../getInTouch/GetInTouch';

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-forest-green text-white">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Hair Restoration Clinic</h1>
          <p className="text-xl text-soft-sage max-w-3xl mx-auto">
            Pioneers in Direct Hair Transplantation with a commitment to excellence and natural results
          </p>
        </div>
      </div>
      
      {/* Components */}
      <OurClinic />
      <OurDoctors />
      <WhyChooseUs />
      <GetInTouch />
    </div>
  );
};

export default AboutPage;