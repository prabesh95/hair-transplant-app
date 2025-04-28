import React from 'react';
import { Calendar, HeartPulse, AlertCircle } from 'lucide-react';
import RecoveryTimeline from './RecoveryTimeline';
import WarningSigns from './WarningSigns';

const AfterProcedure = () => {
  return (
    <div className='py-12'  id='aftercare'>
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-forest-green mb-8 text-center">
        After Your Hair Transplant
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Recovery Timeline */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Calendar className="text-olive-gold mr-3" size={24} />
            <h2 className="text-2xl font-semibold text-forest-green">Recovery Timeline</h2>
          </div>
          <RecoveryTimeline />
        </div>

        {/* Warning Signs */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <AlertCircle className="text-olive-gold mr-3" size={24} />
            <h2 className="text-2xl font-semibold text-forest-green">Warning Signs</h2>
          </div>
          <WarningSigns />
        </div>
      </div>

      <div className="bg-soft-sage/20 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-forest-green mb-4 flex items-center">
          <HeartPulse className="text-olive-gold mr-2" size={20} />
          Follow-Up Care
        </h2>
        <ul className="space-y-2 text-stone-gray">
          <li className="flex items-start">
            <span className="text-olive-gold mr-2">•</span>
            <span>First follow-up: 7-10 days post-op for suture removal (if applicable)</span>
          </li>
          <li className="flex items-start">
            <span className="text-olive-gold mr-2">•</span>
            <span>Monthly checkups for first 3 months</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default AfterProcedure;