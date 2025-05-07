import React from "react";
import { hairTransplantTechniques } from "../../data/TechniqueData";


const TransplantTechniques = () => {
  return (
    <div id="techniques" className="overflow-hidden py-12">
    <div className="container mx-auto px-4 py-8 lg:px-0 max-w-7xl">
      <h2 className="heading-h2 font-bold text-center mb-12 text-stone-gray">Hair Transplant Techniques</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hairTransplantTechniques.map((technique) => (
          <div 
            key={technique.id}
            className={`rounded-lg overflow-hidden shadow-lg border-t-4 bg-ivory-white border-${technique.color}`}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={technique.image} 
                alt={technique.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h4 className="heading-h4 font-bold mb-3 text-forest-green">{technique.name}</h4>
              <p className="text-stone-gray mb-4 text-body">{technique.description}</p>
              
              <ul className="space-y-2">
                {technique.pros.map((pro, index) => (
                  <span>
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-2 text-olive-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-gray text-body">{pro}</span>
                  </li>
                  </span>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="overflow-x-auto"> 
      <span>
      <table className="w-full border-separate border-spacing-y-2 text-body min-w-[640px] mt-14">
  <thead>
    <tr className="bg-muted-teal text-[#F5F1E9] sticky top-0">
      <th className="p-4 text-left rounded-tl-lg">Technique</th>
      <th className="p-4 text-left">Scarring</th>
      <th className="p-4 text-left">Graft Survival</th>
      <th className="p-4 text-left">Session Size</th>
      <th className="p-4 text-left rounded-tr-lg">Recovery Time</th>
    </tr>
  </thead>
  <tbody>
    {hairTransplantTechniques.map((tech) => (
      <tr 
        key={tech.id}
        className="transition-all duration-200 hover:bg-dusty-rose/50 hover:text-[#2F4F3A] hover:shadow-lg hover:rounded-lg"
        style={{
          color: '#2F4F3A',
        }}
      >
        <td className="p-4 font-semibold border-l-4 border-transparent hover:border-[#5B7C78] first:rounded-l-lg">{tech.name}</td>
        <td className="p-4">Tiny dots</td>
        <td className="p-4">85-90%</td>
        <td className="p-4">1,500-3,000</td>
        <td className="p-4 last:rounded-r-lg">5-10 days</td>
      </tr>
    ))}
  </tbody>
</table>
</span>
</div > 
    </div>
    
    </div>
  );
};

export default TransplantTechniques;