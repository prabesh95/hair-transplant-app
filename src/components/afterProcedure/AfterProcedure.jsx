import React from 'react';
import { Calendar, HeartPulse, AlertCircle } from 'lucide-react';
import RecoveryTimeline from './RecoveryTimeline';
import WarningSigns from './WarningSigns';

const AfterProcedure = () => {
  return (
    <div className='py-12'  id='aftercare'>
    <div className="max-w-7xl mx-auto px-4 py-12 lg:px-0">
      <h2 className="heading-h2 font-bold text-forest-green  text-center">
        After Your Hair Transplant
      </h2>
      <div className="w-20 h-1 bg-olive-gold mx-auto mt-4 mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Recovery Timeline */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Calendar className="text-olive-gold mr-3 heading-h2"  />
            <h3 className="heading-h3 font-semibold text-forest-green">Recovery Timeline</h3>
          </div>
          <RecoveryTimeline />
        </div>

        {/* Warning Signs */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <AlertCircle className="text-olive-gold mr-3  heading-h2"  />
            <h3 className="heading-h3 font-semibold text-forest-green">Warning Signs</h3>
          </div>
          <WarningSigns />
        </div>
      </div>

      <div className="bg-soft-sage/20 p-6 rounded-lg">
        <h3 className="heading-h3 font-semibold text-forest-green mb-4 flex items-center">
          <HeartPulse className="text-olive-gold mr-2 heading-h2"  />
          Follow-Up Care
        </h3>
        <span>
        <ul className="space-y-2 text-stone-gray">
          <li className="flex items-start ">
            <span className="text-olive-gold mr-2 text-body">•</span>
            <span className='text-body'>First follow-up: 7-10 days post-op for suture removal (if applicable)</span>
          </li>
          <li className="flex items-start">
            <span className="text-olive-gold mr-2 text-body">•</span>
            <span className='text-body'>Monthly checkups for first 3 months</span>
          </li>
        </ul>
        </span>
      </div>
    </div>
    </div>
  );
};

export default AfterProcedure;