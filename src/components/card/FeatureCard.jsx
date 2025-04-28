import dhtImage from '../../assets/extras/direct_hair_transplant.jpg';
import React, { useState } from 'react';
import {  Plus, Minus } from 'lucide-react';
 // Replace with your actual image path

const FeatureCard = () => {
  const [expandedSections, setExpandedSections] = useState({
    howItWorks: false,
    advantages: false,
    candidates: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div id="dht-technique" className='my-12 min-h-screen py-12'>
      <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-4 text-center ">
    Direct Hair Transplant (DHT) <br/> The Gold Standard in Hair Restoration
  </h2>
  <div className="w-20 h-1 bg-olive-gold mx-auto mt-4 "></div>
    <div className="max-w-7xl mx-auto   sm:p-3">
      <div className=" flex flex-col lg:flex-row-reverse"> {/* Changed to flex-row-reverse */}
        
        {/* Image - Top on mobile, Left on desktop */}
        <div className="lg:w-1/2 bg-gray-100 flex items-center justify-center p-0 order-first"> {/* Removed padding and set order-first */}
          <img 
            src={dhtImage} 
            alt="Direct Hair Transplant Procedure"
            className="w-full h-auto object-contain max-h-[400px] lg:max-h-[500px]"
          />
        </div>

        {/* Text Content - Right Side */}
        <div className="lg:w-1/2 p-4 md:p-6 lg:p-8 ">
          
          
          <p className="text-stone-gray mb-6 text-base md:text-lg">
            Direct Hair Transplant (DHT) is the most advanced and refined method of hair transplantation, offering superior results compared to traditional techniques like Follicular Unit Extraction (FUE) and Follicular Unit Transplantation (FUT). DHT is a modified and optimized version of FUE, designed to maximize graft survival and ensure natural-looking, dense hair growth.
          </p>

          {/* How Does DHT Work? - Collapsible */}
          <div className="mb-4 border-b border-soft-sage pb-4">
            <button 
              className="flex items-center justify-between w-full text-left"
              onClick={() => toggleSection('howItWorks')}
            >
              <h3 className="text-xl font-semibold text-forest-green">How Does DHT Work?</h3>
              {expandedSections.howItWorks ? (
                <Minus  className="text-olive-gold" size={24} />
              ) : (
                <Plus  className="text-olive-gold" size={24} />
              )}
            </button>
            
            {expandedSections.howItWorks && (
              <ul className="space-y-3 mt-3 text-base">
                <li className="flex items-start">
                  <span className="text-olive-gold mr-2">•</span>
                  <span className="text-stone-gray"><strong>Recipient Site Creation</strong> – Tiny, precise slits are made in the bald or thinning areas of the scalp before extracting grafts.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-olive-gold mr-2">•</span>
                  <span className="text-stone-gray"><strong>Graft Extraction</strong> – Hair follicles are carefully harvested from the donor area (usually the back or sides of the head) using a micro-punch tool.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-olive-gold mr-2">•</span>
                  <span className="text-stone-gray"><strong>Immediate Transplantation</strong> – Unlike traditional methods where grafts are stored outside the body, DHT transplants the follicles within minutes (2-20 minutes) of extraction, minimizing exposure and damage.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-olive-gold mr-2">•</span>
                  <span className="text-stone-gray"><strong>Natural Angle & Direction</strong> – The pre-made slits ensure that each graft is placed at the correct angle and direction, mimicking natural hair growth.</span>
                </li>
              </ul>
            )}
          </div>

          {/* Advantages - Collapsible */}
          <div className="mb-6 border-b border-soft-sage pb-4">
            <button 
              className="flex items-center justify-between w-full text-left"
              onClick={() => toggleSection('advantages')}
            >
              <h3 className="text-xl font-semibold text-forest-green">Advantages of DHT Over Other Techniques</h3>
              {expandedSections.advantages ? (
                <Minus className="text-olive-gold" size={24} />
              ) : (
                <Plus className="text-olive-gold" size={24} />
              )}
            </button>
            
            {expandedSections.advantages && (
              <ul className="space-y-2 mt-3">
                <li className="flex items-start">
                  <span className="text-olive-gold mr-2">✔</span>
                  <span className="text-stone-gray"><strong>Near 100% Graft Survival</strong> – Since grafts are transplanted immediately, they remain healthy and intact, leading to higher success rates.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-olive-gold mr-2">✔</span>
                  <span className="text-stone-gray"><strong>Maximum Density</strong> – More grafts survive compared to FUE/FUT, resulting in thicker, fuller hair.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-olive-gold mr-2">✔</span>
                  <span className="text-stone-gray"><strong>Faster Procedure</strong> – Reduced time between extraction and implantation improves efficiency.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-olive-gold mr-2">✔</span>
                  <span className="text-stone-gray"><strong>Minimal Scarring</strong> – No linear scars (unlike FUT), and the extraction sites heal almost invisibly.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-olive-gold mr-2">✔</span>
                  <span className="text-stone-gray"><strong>Natural Results</strong> – Precise placement ensures a seamless, undetectable hairline.</span>
                </li>
              </ul>
            )}
          </div>

          {/* Candidates - Collapsible */}
          <div className="mb-6 border-b border-soft-sage pb-4">
            <button 
              className="flex items-center justify-between w-full text-left"
              onClick={() => toggleSection('candidates')}
            >
              <h3 className="text-xl font-semibold text-forest-green">Who is a Good Candidate for DHT?</h3>
              {expandedSections.candidates ? (
                <Minus className="text-olive-gold" size={24} />
              ) : (
                <Plus className="text-olive-gold" size={24} />
              )}
            </button>
            
            {expandedSections.candidates && (
              <ul className="list-disc list-inside space-y-1 text-stone-gray mt-3">
                <li>Men and women with androgenetic alopecia (pattern baldness).</li>
                <li>Those looking for high-density, permanent hair restoration.</li>
                <li>Patients with stable donor areas (enough healthy hair follicles for extraction).</li>
                <li>Individuals who want minimal downtime and faster recovery compared to older methods.</li>
              </ul>
            )}
          </div>

          {/* Recovery & Results (not collapsible) */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-forest-green mb-3">Recovery & Results</h3>
            <ul className="list-disc list-inside space-y-1 text-stone-gray">
              <li><strong>Healing Time:</strong> 7-10 days for crusts to fall off.</li>
              <li><strong>Shedding Phase:</strong> Transplanted hairs may shed in 2-4 weeks (normal part of the process).</li>
              <li><strong>New Growth:</strong> Visible results appear in 3-4 months, with full density achieved in 8-12 months.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FeatureCard;