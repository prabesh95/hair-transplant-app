import React from 'react';
import { Calendar } from 'lucide-react';

const RecoveryTimeline = () => {
  const milestones = [
    { period: "First 24 hours", details: "Minor swelling and redness. Avoid touching grafts." },
    { period: "Day 2-3", details: "Begin gentle washing with provided shampoo." },
    { period: "Week 1", details: "Scabs begin to fall off naturally." },
    { period: "Week 2", details: "Return to work/social activities. No strenuous exercise." },
    { period: "Month 1", details: "Transplanted hair sheds (normal part of process)." },
    { period: "Months 3-4", details: "New hair begins to grow." },
    { period: "Month 6", details: "Visible thickening and coverage." },
    { period: "Month 12", details: "Final results apparent." }
  ];

  return (
    <div className="space-y-3">
      {milestones.map((milestone, index) => (
        <div key={index} className="flex items-start">
          <div className="bg-soft-sage/20 p-2 rounded-full mr-4">
            <Calendar className="text-olive-gold" size={18} />
          </div>
          <div>
            <h3 className="font-semibold text-forest-green">{milestone.period}</h3>
            <p className="text-sm text-stone-500">{milestone.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecoveryTimeline;