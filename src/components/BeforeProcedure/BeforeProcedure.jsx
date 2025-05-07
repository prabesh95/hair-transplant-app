import React from 'react';
import { ClipboardCheck, Scissors, Droplet, HeartPulse } from 'lucide-react';
import PreparationChecklist from './PreparationChecklist';
import MedicalEvaluation from './MedicalEvaluation';

const BeforeProcedure = () => {
  return (
    <div className='py-12'id='before-treatment'>
    <div className="max-w-7xl mx-auto px-4 py-12 lg:px-0" >
      <h2 className="heading-h2 font-bold text-forest-green mb-8 text-center">
        Before Your Hair Transplant
      </h2>
      <div className="w-20 h-1 bg-olive-gold mx-auto mt-4 mb-8  "></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Preparation Checklist */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <ClipboardCheck className="text-olive-gold mr-3" size={24} />
            <h3 className="heading-h3 text-forest-green">Preparation Checklist</h3>
          </div>
          <PreparationChecklist />
        </div>

        {/* Medical Evaluation */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <HeartPulse className="text-olive-gold mr-3 heading-h2" size={24} />
            <h3 className="heading-h3 font-semibold text-forest-green">Medical Evaluation</h3>
          </div>
          <MedicalEvaluation />
        </div>
      </div>

      <div className="mt-12 bg-soft-sage/20 p-6 rounded-lg">
        <h3 className="heading-h3 font-semibold text-forest-green mb-4 flex items-center">
          <Scissors className="text-olive-gold mr-2 heading-h2" size={20} />
          Donor Area Preparation
        </h3>
        <span>
        <ul className="space-y-2 text-stone-gray text-body">
          <li className="flex items-start">
            <Droplet className="text-olive-gold mr-2 mt-1" size={16} />
            <span>Stop haircuts 4 weeks prior to allow sufficient donor hair length</span>
          </li>
          <li className="flex items-start">
            <Droplet className="text-olive-gold mr-2 mt-1" size={16} />
            <span>No chemical treatments 2 weeks before procedure</span>
          </li>
        </ul>
        </span>
      </div>
    </div>
    </div>
  );
};

export default BeforeProcedure;