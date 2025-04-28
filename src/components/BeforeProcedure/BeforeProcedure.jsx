import React from 'react';
import { ClipboardCheck, Scissors, Droplet, HeartPulse } from 'lucide-react';
import PreparationChecklist from './PreparationChecklist';
import MedicalEvaluation from './MedicalEvaluation';

const BeforeProcedure = () => {
  return (
    <div className='py-12'id='before-treatment'>
    <div className="max-w-6xl mx-auto px-4 py-12" >
      <h1 className="text-2xl md:text-3xl font-bold text-forest-green mb-8 text-center">
        Before Your Hair Transplant
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Preparation Checklist */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <ClipboardCheck className="text-olive-gold mr-3" size={24} />
            <h2 className="text-2xl font-semibold text-forest-green">Preparation Checklist</h2>
          </div>
          <PreparationChecklist />
        </div>

        {/* Medical Evaluation */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <HeartPulse className="text-olive-gold mr-3" size={24} />
            <h2 className="text-2xl font-semibold text-forest-green">Medical Evaluation</h2>
          </div>
          <MedicalEvaluation />
        </div>
      </div>

      <div className="mt-12 bg-soft-sage/20 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-forest-green mb-4 flex items-center">
          <Scissors className="text-olive-gold mr-2" size={20} />
          Donor Area Preparation
        </h2>
        <ul className="space-y-2 text-stone-gray">
          <li className="flex items-start">
            <Droplet className="text-olive-gold mr-2 mt-1" size={16} />
            <span>Stop haircuts 4 weeks prior to allow sufficient donor hair length</span>
          </li>
          <li className="flex items-start">
            <Droplet className="text-olive-gold mr-2 mt-1" size={16} />
            <span>No chemical treatments 2 weeks before procedure</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default BeforeProcedure;