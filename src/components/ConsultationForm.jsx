import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';


const ConsultationForm = () => {
    const [countries, setCountries] = useState([]);
    const [newClientData, setNewClientData] = useState({
      fullname: "",
      email: "",
      phoneNumber: "",
      country: "",
      message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: "" });
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewClientData(prev => ({
        ...prev,
        [name]: value
      }));      
    };
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
          setCountries(data.sort((a, b) => 
            a.name.common.localeCompare(b.name.common)
          ));
        });
    }, []);
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus({ success: null, message: "" });
  
      try {
        const response = await fetch('/api/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newClientData),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          setSubmitStatus({ success: true, message: "Form submitted successfully!" });
          // Reset form after successful submission
          setNewClientData({
            fullname: "",
            email: "",
            phoneNumber: "",
            country: "",
            message: ""
          });
        } else {
          throw new Error(data.message || 'Failed to submit form');
        }
      } catch (error) {
        setSubmitStatus({ success: false, message: error.message });
      } finally {
        setIsSubmitting(false);
      }
    };
    
  return (
    <>
    <div className='py-12' id='consultation-form'>
    <div className=" bg-white p-6 rounded-lg shadow-md text-stone-gray py-12" >
      <h3 className="heading-h3 font-semibold text-forest-green mb-4 flex items-center">
        <Calendar className="text-olive-gold mr-2 heading-h2"  />
        Book a Consultation
      </h3>
      <form className="space-y-4 text-sm">
        {/* Full Name */}
        <div>
          <input 
            name='fullname'
            value={newClientData.fullname}
            onChange={handleInputChange}
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
            name="email"
            value={newClientData.email}
            onChange={handleInputChange}
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
            name="phoneNumber"
            type="tel" 
            value={newClientData.phoneNumber}
            onChange={handleInputChange}
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
            name="country"
            value={newClientData.country}
            onChange={handleInputChange}
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
            name="message"
            value={newClientData.message}
            onChange={handleInputChange}
            placeholder="Your Message (Optional)"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-md 
                      focus:ring-2 focus:ring-olive-gold focus:border-olive-gold
                      placeholder-gray-400"
          ></textarea>
        </div>
        
        {submitStatus.message && (
        <div className={`p-3 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {submitStatus.message}
        </div>
      )}
         <button 
        type="submit" 
        disabled={isSubmitting}
        className={`w-full bg-olive-gold text-white py-3 px-4 rounded-md 
                  hover:bg-forest-green transition-colors text-base
                  focus:ring-2 focus:ring-offset-2 focus:ring-olive-gold
                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? 'Submitting...' : 'Request Appointment'}
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