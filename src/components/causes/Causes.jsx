import React from 'react';
import { Activity, AlertCircle, Droplets, HeartPulse, Radiation, Hash, ChevronRight } from 'lucide-react';

const Causes = () => {
  const causes = [
    {
      icon: <Activity className="text-olive-gold" size={20} />,
      title: "Androgenetic Alopecia (Male Pattern Baldness)",
      description: "The most common cause, affecting 50% of men by age 50. Caused by genetic sensitivity to dihydrotestosterone (DHT) which shrinks hair follicles.",
      percentage: "95% of male hair loss cases"
    },
    {
      icon: <AlertCircle className="text-olive-gold" size={20} />,
      title: "Hormonal Imbalances",
      description: "Thyroid disorders, pregnancy, menopause, or PCOS can disrupt hair growth cycles.",
      percentage: "Affects 12% of patients"
    },
   
    {
      icon: <Droplets className="text-olive-gold" size={20} />,
      title: "Nutritional Deficiencies",
      description: "Low iron, zinc, vitamin D, or protein intake starves hair follicles of essential nutrients.",
      percentage: "Found in 40% of diffuse thinning"
    },
    {
      icon: <Radiation className="text-olive-gold" size={20} />,
      title: "Medical Treatments",
      description: "Chemotherapy, radiation, and certain medications cause temporary but dramatic shedding.",
      percentage: "90% of chemo patients"
    },
    {
      icon: <HeartPulse className="text-olive-gold" size={20} />,
      title: "Autoimmune Conditions",
      description: "Alopecia areata occurs when immune system attacks hair follicles.",
      percentage: "2% of population affected"
    },
    {
      icon: <Hash className="text-olive-gold" size={20} />,
      title: "Traction Alopecia",
      description: "Caused by tight hairstyles that pull on roots over time.",
      percentage: "Common in certain professions"
    }
  ];

  const preventionTips = [
    "Maintain balanced diet rich in iron and protein",
    "Manage stress through meditation/exercise",
    "Avoid tight hairstyles and excessive heat styling",
    "Use gentle, sulfate-free hair products",
    "Get thyroid levels checked annually",
    "Consider minoxidil for early pattern baldness",
    "Protect scalp from sun damage",
    "Quit smoking (reduces blood flow to follicles)"
  ];

  return (
    <div className='bg-soft-sage ' id='causes'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-12 ">
      {/* Hero Section */}
      <section className="text-center my-8">
        <h2 className="text-h2 sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem] font-bold text-forest-green ">
          Causes of Hair Loss
        </h2>
        <p className="text-base  mt-1 mx-auto">
          Understanding the root causes is the first step toward effective treatment
        </p>
        <div className="w-20 h-1 bg-olive-gold mx-auto mt-4"></div>

      </section>

      {/* Main Causes */}
      <section className="mb-16">
        <h3 className="text-h3 sm:text-[1.375rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-[2rem] font-bold text-forest-green mb-4">
          Primary Causes of Hair Thinning
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {causes.map((cause, index) => (
            <div key={`${cause}-${index}`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  {cause.icon}
                </div>
                <div>
                  <h4 className="text-h4 sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem] font-semibold text-forest-green mb-2">{cause.title}</h4>
                  <p className="text-stone-gray mb-3">{cause.description}</p>
                  <span className="text-sm bg-dusty-rose text-ivory-white px-3 py-1 rounded-full">
                    {cause.percentage}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Diagnosis Section */}
      <section className="mb-16 ">
        <h3 className="text-h3 sm:text-[1.375rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-[2rem] font-bold text-forest-green mb-6">
          How We Diagnose Your Hair Loss
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className=" text-lg text-stone-gray mb-6">
              Our trichologists use advanced diagnostic tools to pinpoint your specific cause:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <ChevronRight className="text-olive-gold mr-2 mt-1 flex-shrink-0 text-body" size={18} />
                <span className="text-stone-gray text-body"><strong>Trichoscopy:</strong> 200x magnification of hair and scalp</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-body text-olive-gold mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-body text-stone-gray"><strong>Blood Tests:</strong> Check for hormonal/nutritional imbalances</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-body text-olive-gold mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-body text-stone-gray"><strong>Pull Test:</strong> Measures active shedding severity</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-body text-olive-gold mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-body text-stone-gray"><strong>Scalp Biopsy:</strong> For suspected autoimmune conditions</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-h4 sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem] font-semibold text-forest-green mb-4">
              Prevention Tips
            </h4>
            <ul className="space-y-2 text-stone-gray">
              {preventionTips.map((tip, index) => (
                <li key={`${tip}-${index}`} className="flex items-start">
                  <ChevronRight className="text-olive-gold mr-2 mt-1" size={16} />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Causes;