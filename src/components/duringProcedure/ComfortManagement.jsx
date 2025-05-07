import React from 'react';
import { Shield, Activity, Coffee } from 'lucide-react';

const ComfortManagement = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-start">
        <div className="bg-soft-sage/20 p-2 rounded-full mr-4">
          <Shield className="text-olive-gold heading-h3"  />
        </div>
        <div>
          <h4 className="heading-h4 font-semibold text-forest-green">Anesthesia</h4>
          <p className="text-body text-stone-500">
            Local anesthesia keeps the procedure pain-free. Mild discomfort may occur during initial numbing.
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="bg-soft-sage/20 p-2 rounded-full mr-4">
          <Activity className="text-olive-gold heading-h3"  />
        </div>
        <div>
          <h4 className="heading-h4 font-semibold text-forest-green">Breaks</h4>
          <p className="text-body text-stone-500">
            Scheduled breaks every 60-90 minutes for stretching, restroom use, and snacks.
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="bg-soft-sage/20 p-2 rounded-full mr-4">
          <Coffee className="text-olive-gold heading-h3"  />
        </div>
        <div>
          <h4 className="font-semibold text-forest-green heading-h4">Entertainment</h4>
          <p className="text-body text-stone-500">
            Watch movies, listen to music, or nap during the procedure. We provide devices and headphones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComfortManagement;