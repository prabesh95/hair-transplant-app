import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-green text-ivory-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Clinic Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-olive-gold">Regrowe</h3>
            <p className="text-soft-sage">
              Specializing in advanced Direct Hair Transplant techniques for natural-looking results.
            </p>
            <div className="flex items-center space-x-2 text-soft-sage">
              <Phone size={18} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-soft-sage">
              <Mail size={18} />
              <span>contact@regrowe.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-olive-gold">Quick Links</h3>
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
            <h3 className="text-xl font-bold text-olive-gold">Clinic Hours</h3>
            <div className="space-y-2 text-soft-sage">
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>Saturday: 10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>Sunday: Closed</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-olive-gold">Our Location</h3>
            <div className="flex items-start space-x-2 text-soft-sage">
              <MapPin size={18} className="mt-1" />
              <span>
                123 Medical Center Drive<br />
                Suite 456<br />
                Beverly Hills, CA 90210
              </span>
            </div>
            <div className="pt-4">
              <h4 className="font-medium text-olive-gold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-soft-sage hover:text-white transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-soft-sage hover:text-white transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-soft-sage hover:text-white transition">
                  <Twitter size={20} />
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