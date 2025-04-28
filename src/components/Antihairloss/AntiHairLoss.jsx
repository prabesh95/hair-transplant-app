import React from 'react';
import { CheckCircle } from 'lucide-react';
// import antiHairLossImage from '../../assets/anti-hairloss-treatment.jpg'; // Replace with your image path

const AntiHairLoss = () => {
  const treatments = [
    "FDA-approved Minoxidil solutions (5% concentration)",
    "Prescription Finasteride (DHT blocker)",
    "Low-Level Laser Therapy (LLLT) caps/devices",
    "Platelet-Rich Plasma (PRP) injections",
    "Custom vitamin blends (Biotin, Zinc, Iron)",
    "Corticosteroid treatments for inflammation",
    "Microneedling to stimulate follicles",
    "Specialized scalp care regimens"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Content List */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-forest-green mb-6">
            Anti-Hair Loss Treatments
          </h1>
          <p className="text-stone-gray mb-8">
            Clinically-proven solutions to slow, stop, and reverse hair loss:
          </p>
          
          <ul className="space-y-4">
            {treatments.map((treatment, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="text-olive-gold mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-stone-gray">{treatment}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <button className="bg-olive-gold hover:bg-forest-green text-white px-6 py-3 rounded-lg transition-colors">
              Get Treatment Plan
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <img 
            // src={antiHairLossImage} 
            alt="Anti hair loss treatment" 
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
          <div className="mt-4 text-sm text-stone-500 text-center">
            Before & after 6 months of combined therapy
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiHairLoss;