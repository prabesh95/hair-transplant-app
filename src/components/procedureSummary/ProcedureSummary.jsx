import React from 'react';
import { Clock, UserCheck, Shield, Activity, Calendar } from 'lucide-react';
import procedureImage from '../../assets/extras/direct_hair_transplant.jpg'; // Replace with your image

const ProcedureSummary = () => {
  const steps = [
    {
      icon: <UserCheck className="text-olive-gold" size={20} />,
      title: "Consultation",
      description: "Detailed scalp analysis and donor area evaluation"
    },
    {
      icon: <Activity className="text-olive-gold" size={20} />,
      title: "Preparation",
      description: "Local anesthesia administered to donor and recipient areas"
    },
    {
      icon: <Shield className="text-olive-gold" size={20} />,
      title: "Graft Extraction",
      description: "Follicular units carefully harvested (FUE/DHT method)"
    },
    {
      icon: <UserCheck className="text-olive-gold" size={20} />,
      title: "Graft Preparation",
      description: "Extracted follicles sorted and prepared under microscope"
    },
    {
      icon: <Activity className="text-olive-gold" size={20} />,
      title: "Recipient Site Creation",
      description: "Micro-channels made at precise angles for natural growth"
    },
    {
      icon: <Shield className="text-olive-gold" size={20} />,
      title: "Graft Placement",
      description: "Follicles implanted into recipient sites"
    }
  ];

  const keyFacts = [
    { icon: <Clock size={18} />, text: "4-8 hours procedure time" },
    { icon: <Calendar size={18} />, text: "1-2 days recovery before returning to work" },
    { icon: <UserCheck size={18} />, text: "95%+ graft survival rate with DHT" },
    { icon: <Activity size={18} />, text: "No visible linear scarring" }
  ];

  return (
    <div className='bg-soft-sage py-12 text-body' id='procedure-summary'>
    <div className="max-w-7xl mx-auto px-4 py-12 lg:px-0" >
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Image Steps */}
        <div className="lg:w-1/2">
          <img 
            src={procedureImage} 
            alt="Hair transplant procedure" 
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
          <div className="mt-8 bg-soft-sage/20 p-6 rounded-lg">
            <h3 className="heading-h3 font-semibold text-forest-green mb-3">Post-Procedure Care</h3>
            <ul className="space-y-2 text-stone-gray">
              <li className="flex items-start ">
                <span className="text-olive-gold mr-2 text-body">•</span>
                <span className='text-body'>No heavy exercise for 1 week</span>
              </li>
              <li className="flex items-start">
                <span className="text-olive-gold mr-2 text-body">•</span>
                <span className='text-body'>Special shampoo after 48 hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-olive-gold mr-2 text-body">•</span>
                <span className='text-body'>Sleep at 45° angle for first 3 nights</span>
              </li>
              <li className="flex items-start">
                <span className="text-olive-gold mr-2 text-body">•</span>
                <span className='text-body'>Follow-up appointments at 1 week, 1 month, and 3 months</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Procedure Section */}
        <div className="lg:w-1/2">
          <h2 className="heading-h2 font-bold text-forest-green mb-12">
            Hair Transplant Procedure Summary
          </h2>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-soft-sage/20 p-2 rounded-full mr-4">
                  {step.icon}
                </div>
                <div>
                  <h4 className="heading-h4 font-semibold text-forest-green">{step.title}</h4>
                  <p className="text-stone-gray text-body">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {keyFacts.map((fact, index) => (
              <div key={index} className="flex items-center bg-dusty-rose/30 p-3 rounded-lg shadow-sm">
                <div className="text-olive-gold mr-2 text-body">{fact.icon}</div>
                <span className="text-muted-teal text-body">{fact.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        
      </div>
      <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h4 className="heading-h4 font-bold mb-3">Follow-Up Visits</h4>
        <p className="text-gray-700 text-body">
          The surgeon monitors healing and hair growth progress. Additional sessions may be recommended for optimal density.
        </p>
      </div>
      {/* Expected Results */}
      <div className="my-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="heading-h4 font-bold mb-3">Expected Results</h4>
        <span>
        <ul className="list-disc pl-5 text-gray-700">
          <li className='text-body'>Natural-looking hair growth in previously bald/thinning areas.</li>
          <li className='text-body'>Permanent results since transplanted hair is resistant to balding.</li>
        </ul>
        </span>
      </div>
    </div>
    </div>
  );
};

export default ProcedureSummary;