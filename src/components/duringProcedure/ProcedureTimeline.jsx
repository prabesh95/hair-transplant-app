import React from 'react';
import { Clock } from 'lucide-react';

const ProcedureTimeline = () => {
  const stages = [
    { time: "0-30 mins", title: "Preparation", description: "Local anesthesia administered" },
    { time: "1-3 hours", title: "Donor Extraction", description: "Follicular units harvested (FUE/DHT method)" },
    { time: "30 mins", title: "Graft Preparation", description: "Follicles sorted under microscope" },
    { time: "2-4 hours", title: "Recipient Site Creation", description: "Micro-channels made at natural angles" },
    { time: "2-5 hours", title: "Graft Placement", description: "Follicles implanted into recipient sites" },
    { time: "30 mins", title: "Post-Op Instructions", description: "Bandaging and care guidelines provided" }
  ];

  return (
    <div className="space-y-4">
      {stages.map((stage, index) => (
        <div key={index} className="flex items-start">
          <div className="bg-soft-sage/20 p-2 rounded-full mr-4">
            <Clock className="text-olive-gold" size={18} />
          </div>
          <div>
            <div className="flex items-baseline">
              <span className="font-medium text-forest-green mr-2">{stage.time}</span>
              <span className="font-semibold text-stone-700">{stage.title}</span>
            </div>
            <p className="text-sm text-stone-500">{stage.description}</p>
          </div>
        </div>
      ))}
      <p className="text-sm text-stone-500 mt-4 pl-12">
        * Total procedure time typically 4-8 hours depending on graft count
      </p>
    </div>
  );
};

export default ProcedureTimeline;