import React from 'react';
import { Clock, Shield, Activity, User } from 'lucide-react';
import ProcedureTimeline from './ProcedureTimeline';
import ComfortManagement from './ComfortManagement';

const DuringProcedure = () => {
  return (
    <div className='bg-soft-sage py-12' id='during-treatment'>
    <div className="max-w-6xl mx-auto px-4 py-12 " >
      <h2 className="text-2xl md:text-3xl font-bold text-forest-green mb-8 text-center">
        During Your Hair Transplant
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Procedure Timeline */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Clock className="text-olive-gold mr-3" size={24} />
            <h3 className="text-lg font-semibold text-forest-green">Procedure Timeline</h3>
          </div>
          <ProcedureTimeline />
        </div>

        {/* Comfort Management */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Shield className="text-olive-gold mr-3" size={24} />
            <h3 className="text-lg font-semibold text-forest-green">Comfort Management</h3>
          </div>
          <ComfortManagement />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-forest-green mb-4 flex items-center">
          <Activity className="text-olive-gold mr-2" size={20} />
          What to Expect
        </h3>
        <ul className="space-y-3 text-stone-gray">
          <li className="flex items-start">
            <User className="text-olive-gold mr-2 mt-1" size={16} />
            <span>You'll be awake but relaxed throughout the procedure</span>
          </li>
          <li className="flex items-start">
            <User className="text-olive-gold mr-2 mt-1" size={16} />
            <span>Periodic breaks are provided for your comfort</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default DuringProcedure;