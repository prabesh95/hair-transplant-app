import React from 'react';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import ConsultationForm from '../ConsultationForm';

const GetInTouch = () => {
  return (
    <section className="py-12 bg-forest-green text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-olive-gold">Get In Touch</h2>
          <p className="text-soft-sage mt-2">We're here to answer your questions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-olive-gold/20 p-3 rounded-full mr-4">
                <Phone className="text-olive-gold" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                <p className="text-soft-sage">+1 (555) 123-4567</p>
                <p className="text-soft-sage text-sm mt-1">Mon-Fri, 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-olive-gold/20 p-3 rounded-full mr-4">
                <Mail className="text-olive-gold" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                <p className="text-soft-sage">contact@hairclinic.com</p>
                <p className="text-soft-sage text-sm mt-1">Response within 24 hours</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-olive-gold/20 p-3 rounded-full mr-4">
                <MapPin className="text-olive-gold" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
                <p className="text-soft-sage">123 Medical Center Drive</p>
                <p className="text-soft-sage">Suite 456, Beverly Hills, CA 90210</p>
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