import React from 'react';
import { Award, HeartPulse, Home } from 'lucide-react';

const OurClinic = () => {
  return (
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="heading-h2 font-bold text-forest-green">Our Clinic</h2>
          <div className="w-20 h-1 bg-olive-gold mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-soft-sage/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="text-olive-gold  heading-h2"  />
            </div>
            <h4 className="heading-h4 font-semibold text-forest-green mb-2">State-of-the-Art Facility</h4>
            <p className="text-stone-gray text-body">
              Our 5,000 sq ft clinic features the latest hair restoration technology with 
              dedicated procedure rooms, recovery lounges, and sterile environments.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-soft-sage/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-olive-gold  heading-h2"  />
            </div>
            <h4 className="heading-h4 font-semibold text-forest-green mb-2">Award-Winning Care</h4>
            <p className="text-stone-gray text-body">
              Recognized as "Best Hair Transplant Clinic" for 3 consecutive years with 
              over 2,000 successful procedures performed.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-soft-sage/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartPulse className="text-olive-gold  heading-h2"  />
            </div>
            <h4 className="heading-h4 font-semibold text-forest-green mb-2">Patient-Centered Approach</h4>
            <p className="text-stone-gray text-body">
              From consultation to aftercare, we prioritize your comfort and satisfaction 
              with personalized treatment plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClinic;