import React from 'react';
import { Shield, Activity, Coffee } from 'lucide-react';

const ComfortManagement = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-start">
        <div className="bg-soft-sage/20 p-2 rounded-full mr-4">
          <Shield className="text-olive-gold" size={18} />
        </div>
        <div>
          <h3 className="font-semibold text-forest-green">Anesthesia</h3>
          <p className="text-sm text-stone-500">
            Local anesthesia keeps the procedure pain-free. Mild discomfort may occur during initial numbing.
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="bg-soft-sage/20 p-2 rounded-full mr-4">
          <Activity className="text-olive-gold" size={18} />
        </div>
        <div>
          <h3 className="font-semibold text-forest-green">Breaks</h3>
          <p className="text-sm text-stone-500">
            Scheduled breaks every 60-90 minutes for stretching, restroom use, and snacks.
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="bg-soft-sage/20 p-2 rounded-full mr-4">
          <Coffee className="text-olive-gold" size={18} />
        </div>
        <div>
          <h3 className="font-semibold text-forest-green">Entertainment</h3>
          <p className="text-sm text-stone-500">
            Watch movies, listen to music, or nap during the procedure. We provide devices and headphones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComfortManagement;