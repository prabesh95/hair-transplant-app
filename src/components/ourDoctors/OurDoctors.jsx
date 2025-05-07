import React from 'react';
import { BadgeCheck, ClipboardSignature, Shield } from 'lucide-react';
import doctor1 from "../../assets/extras/doctor1.png"
import doctor2 from "../../assets/extras/doctor2.png"

const OurDoctors = () => {
  return (
    <section className="py-12 bg-ivory-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="heading-h2 font-bold text-forest-green">Our Medical Team</h2>
          <p className="text-olive-gold mt-2 text-body">Board-Certified Hair Restoration Specialists</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Doctor 1 */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-soft-sage">
              <img 
                src={doctor1} 
                alt="Dr. Smith" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="heading-h3 font-bold text-forest-green">Dr. Jonathan Smith</h3>
              <h4 className="text-olive-gold mb-3 heading-h4"> Chief Hair Transplant Surgeon</h4>
              <div className="flex items-center text-stone-gray mb-2 ">
                <BadgeCheck className="text-muted-teal mr-2 text-body"/>
                <span className='text-body'>15+ years experience</span>
              </div>
              <div className="flex items-center text-stone-gray mb-2 ">
                <ClipboardSignature className="text-muted-teal mr-2 text-body"  />
                <span className='text-body'>2,500+ procedures</span>
              </div>
              <div className="flex items-center text-stone-gray ">
                <Shield className="text-muted-teal mr-2 text-body"  />
                <span className='text-body'>Board Certified</span>
              </div>
            </div>
          </div>
          
          {/* Doctor 2 */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-soft-sage">
              <img 
                src={doctor2} 
                alt="Dr. Johnson" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="heading-h3 font-bold text-forest-green">Dr. Sarah Johnson</h3>
              <h4 className="text-olive-gold mb-3 heading-h4">DHT Specialist</h4>
              <div className="flex items-center text-stone-gray mb-2 ">
                <BadgeCheck className="text-muted-teal mr-2 text-body"  />
                <span className='text-body'>10+ years experience</span>
              </div>
              <div className="flex items-center text-stone-gray mb-2 ">
                <ClipboardSignature className="text-muted-teal mr-2 text-body"  />
                <span className='text-body'>1,800+ procedures</span>
              </div>
              <div className="flex items-center text-stone-gray ">
                <Shield className="text-muted-teal mr-2 text-body"  />
                <span className='text-body'>Fellowship Trained</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;