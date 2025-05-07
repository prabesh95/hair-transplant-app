import React from 'react';
import { Clock, Shield, Activity, User } from 'lucide-react';
import ProcedureTimeline from './ProcedureTimeline';
import ComfortManagement from './ComfortManagement';

const DuringProcedure = () => {
  return (
    <div className='bg-soft-sage py-12' id='during-treatment'>
    <div className="max-w-7xl mx-auto px-4 py-12 lg:px-0" >
      <h2 className="heading-h2 font-bold text-forest-green  text-center">
        During Your Hair Transplant
      </h2>
      <div className="w-20 h-1 bg-olive-gold mx-auto mt-4 mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Procedure Timeline */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Clock className="text-olive-gold mr-3 heading-h2" size={24} />
            <h3 className="heading-h3 font-semibold text-forest-green">Procedure Timeline</h3>
          </div>
          <ProcedureTimeline />
        </div>

        {/* Comfort Management */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Shield className="text-olive-gold mr-3 heading-h2" size={24} />
            <h3 className="heading-h3 font-semibold text-forest-green">Comfort Management</h3>
          </div>
          <ComfortManagement />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="heading-h3 font-semibold text-forest-green mb-4 flex items-center">
          <Activity className="text-olive-gold mr-2 heading-h2" size={20} />
          What to Expect
        </h3>
        <span>
        <ul className="space-y-3 text-stone-gray">
          <li className="flex items-start">
            <User className="text-olive-gold mr-2 mt-1 text-body" size={16} />
            <span className='text-body'>You'll be awake but relaxed throughout the procedure</span>
          </li>
          <li className="flex items-start">
            <User className="text-olive-gold mr-2 mt-1 text-body" size={16} />
            <span className='text-body'>Periodic breaks are provided for your comfort</span>
          </li>
        </ul>
        </span>
      </div>
    </div>
    </div>
  );
};

export default DuringProcedure;