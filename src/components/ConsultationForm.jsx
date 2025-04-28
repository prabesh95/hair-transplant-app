import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';


const ConsultationForm = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
          setCountries(data.sort((a, b) => 
            a.name.common.localeCompare(b.name.common)
          ));
        });
    }, []);
  return (
    <>
    <div className='py-12' id='consultation-form'>
    <div className="z-30 bg-white p-6 rounded-lg shadow-md text-stone-gray py-12" >
      <h3 className="text-xl font-semibold text-forest-green mb-4 flex items-center">
        <Calendar className="text-olive-gold mr-2" size={20} />
        Book a Consultation
      </h3>
      <form className="space-y-4">
        {/* Full Name */}
        <div>
          <input 
            type="text" 
            placeholder="Full Name *" 
            className="w-full px-4 py-3 border border-gray-300 rounded-md 
                      focus:ring-2 focus:ring-olive-gold focus:border-olive-gold
                      placeholder-gray-400"
            required
          />
        </div>
        
        {/* Email */}
        <div>
          <input 
            type="email" 
            placeholder="Email Address *" 
            className="w-full px-4 py-3 border border-gray-300 rounded-md 
                      focus:ring-2 focus:ring-olive-gold focus:border-olive-gold
                      placeholder-gray-400"
            required
          />
        </div>
        
        {/* Phone */}
        <div>
          <input 
            type="tel" 
            placeholder="Phone Number *" 
            className="w-full px-4 py-3 border border-gray-300 rounded-md 
                      focus:ring-2 focus:ring-olive-gold focus:border-olive-gold
                      placeholder-gray-400"
            required
          />
        </div>
        
        {/* Country Select with Flags */}
        <div>
          <select 
            className="w-full px-4 py-3 border border-gray-300 rounded-md 
                      focus:ring-2 focus:ring-olive-gold focus:border-olive-gold
                      appearance-none bg-white"
          >
            <option value="">Select Country *</option>
            {countries.map((country) => (
              <option key={country.cca2} value={country.cca2}>
              {country.flag} {country.name.common}
            </option>
            ))}
          </select>
        </div>
        
        {/* Message Textarea */}
        <div>
          <textarea 
            placeholder="Your Message (Optional)"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-md 
                      focus:ring-2 focus:ring-olive-gold focus:border-olive-gold
                      placeholder-gray-400"
          ></textarea>
        </div>
        
        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-olive-gold text-white py-3 px-4 rounded-md 
                    hover:bg-forest-green transition-colors font-medium
                    focus:ring-2 focus:ring-offset-2 focus:ring-olive-gold"
        >
          Request Appointment
        </button>
        
        {/* Privacy Note */}
        <p className="text-xs text-gray-500 mt-2">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
    </div>
    
    </>
  );
};

export default ConsultationForm;