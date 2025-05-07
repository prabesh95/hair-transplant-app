import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-forest-green text-ivory-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Clinic Info */}
          <div className="space-y-4">
            <h4 className="heading-h4 font-bold text-olive-gold">Regrowe</h4>
            <p className="text-soft-sage text-base">
              Specializing in advanced Direct Hair Transplant techniques for natural-looking results.
            </p>
            <div className="flex items-center space-x-2 text-soft-sage">
              <Phone className="text-sm" />
              <span className='text-sm'>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-soft-sage">
              <Mail className="text-sm" />
              <span className='text-sm'>contact@regrowe.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="heading-h4 font-bold text-olive-gold">Quick Links</h4>
            <ul className="space-y-2 text-soft-sage">
              <li><a href="/about" className="hover:text-white transition">About DHT</a></li>
              <li><a href="/procedure" className="hover:text-white transition">The Procedure</a></li>
              <li><a href="/results" className="hover:text-white transition">Before & After</a></li>
              <li><a href="/pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="/faq" className="hover:text-white transition">FAQs</a></li>
            </ul>
          </div>

          {/* Clinic Hours */}
          <div className="space-y-4">
            <h4 className="heading-h4 font-bold text-olive-gold">Clinic Hours</h4>
            <div className="space-y-2 text-soft-sage">
              <div className="flex items-center space-x-2">
                <Clock className="text-sm" />
                <span className="text-sm">Mon-Fri: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-sm" />
                <span className="text-sm">Saturday: 10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-sm" />
                <span className="text-sm">Sunday: Closed</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="heading-h4 font-bold text-olive-gold">Our Location</h4>
            <div className="flex items-start space-x-2 text-soft-sage">
              <MapPin  className="mt-1 text-sm" />
              <span className='text-sm'>
                123 Medical Center Drive<br />
                Suite 456<br />
                Beverly Hills, CA 90210
              </span>
            </div>
            <div className="pt-4">
              <h4 className="heading-h4 text-olive-gold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-soft-sage hover:text-white transition text-sm">
                  <Facebook  />
                </a>
                <a href="#" className="text-soft-sage hover:text-white transition text-sm">
                  <Instagram  />
                </a>
                <a href="#" className="text-soft-sage hover:text-white transition text-sm">
                  <Twitter  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-soft-sage/20 mt-12 pt-8 text-center text-soft-sage">
          <p>© {new Date().getFullYear()} Regrowe. All rights reserved.</p>
          <div className="mt-2 text-sm">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a> | 
            <a href="/terms" className="hover:text-white transition ml-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;