import React from 'react';
import { AlertTriangle } from 'lucide-react';

const WarningSigns = () => {
  const warnings = [
    {
      symptom: "Excessive bleeding",
      action: "Apply gentle pressure with clean gauze and contact us immediately"
    },
    {
      symptom: "Severe swelling/pain",
      action: "Use prescribed medications and cold compresses. Call if persistent"
    },
    {
      symptom: "Pus or foul odor",
      action: "Possible infection - requires urgent medical attention"
    },
    {
      symptom: "Fever above 38°C (100.4°F)",
      action: "Contact our emergency line immediately"
    },
    {
      symptom: "Sudden graft loss",
      action: "Save any dislodged grafts in saline and call us"
    }
  ];

  return (
    <div className="space-y-4">
      {warnings.map((warning, index) => (
        <div key={index} className="flex items-start">
          <div className="bg-red-50 p-2 rounded-full mr-4">
            <AlertTriangle className="text-red-500 heading-h3" size={18} />
          </div>
          <div>
            <h4 className="font-semibold text-red-600 heading-h4">{warning.symptom}</h4>
            <p className="text-body text-stone-500">{warning.action}</p>
          </div>
        </div>
      ))}
      <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
        <p className="font-medium  text-yellow-700">
          <span className="text-body">Emergency Contact:</span > Call +977 (98) 123-4567 for any urgent concerns
        </p>
      </div>
    </div>
  );
};

export default WarningSigns;