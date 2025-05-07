import React from 'react';
import { CheckCircle, Leaf, UserCheck, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <CheckCircle className="text-olive-gold heading-h3"  />,
      title: "Proven Results",
      description: "98% patient satisfaction rate with natural-looking outcomes"
    },
    {
      icon: <Leaf className="text-olive-gold heading-h3"  />,
      title: "Advanced DHT Technique",
      description: "Minimally invasive procedure with faster recovery"
    },
    {
      icon: <UserCheck className="text-olive-gold heading-h3"  />,
      title: "Personalized Care",
      description: "Custom treatment plans for each patient's unique needs"
    },
    {
      icon: <Clock className="text-olive-gold heading-h3"  />,
      title: "Same-Day Procedures",
      description: "Most patients return home the same day"
    }
  ];

  return (
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="heading-h2 font-bold text-forest-green">Why Choose Our Clinic?</h2>
          <div className="w-20 h-1 bg-olive-gold mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <div className="mr-4 mt-1 ">
                {feature.icon}
              </div>
              <div>
                <h4 className="heading-h4 font-semibold text-forest-green mb-2">{feature.title}</h4>
                <p className="text-stone-gray text-body">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;