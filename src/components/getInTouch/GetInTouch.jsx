import React from 'react';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import ConsultationForm from '../ConsultationForm';

const GetInTouch = () => {
  return (
    <section className="py-12 bg-forest-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="heading-h2 font-bold text-olive-gold">Get In Touch</h2>
          <p className="text-soft-sage mt-2 text-body">We're here to answer your questions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-olive-gold/20 p-3 rounded-full mr-4">
                <Phone className="text-olive-gold" size={20} />
              </div>
              <div>
                <h4 className="heading-h4 font-semibold mb-1">Call Us</h4>
                <p className="text-soft-sage text-body">+1 (555) 123-4567</p>
                <p className="text-soft-sage text-sm mt-1">Mon-Fri, 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-olive-gold/20 p-3 rounded-full mr-4">
                <Mail className="text-olive-gold" size={20} />
              </div>
              <div>
                <h4 className="heading-h4 font-semibold mb-1">Email Us</h4>
                <p className="text-soft-sage text-body">contact@hairclinic.com</p>
                <p className="text-soft-sage text-sm mt-1">Response within 24 hours</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-olive-gold/20 p-3 rounded-full mr-4">
                <MapPin className="text-olive-gold" size={20} />
              </div>
              <div>
                <h4 className="heading-h4 font-semibold mb-1">Visit Us</h4>
                <p className="text-soft-sage text-body">123 Medical Center Drive</p>
                <p className="text-soft-sage text-body">Suite 456, Beverly Hills, CA 90210</p>
              </div>
            </div>
          </div>
          
          {/* Appointment Form */}
          <ConsultationForm/>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;