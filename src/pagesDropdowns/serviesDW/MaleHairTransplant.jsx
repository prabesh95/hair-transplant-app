import React from 'react';
import { CheckCircle, ChevronRight, Slice, User, Shield, Leaf } from 'lucide-react';
// import BeforeAfterSlider from '../../components/BeforeAfterSlider';
import ConsultationForm from '../../components/ConsultationForm';

const MaleHairTransplant = () => {
  const benefits = [
    {
      icon: <User className="text-olive-gold" size={24} />,
      title: "Natural Hairline Design",
      description: "Customized to match facial structure and age appropriateness"
    },
    {
      icon: <Slice className="text-olive-gold" size={24} />,
      title: "Minimally Invasive",
      description: "No visible scarring with advanced FUE/DHT techniques"
    },
    {
      icon: <Shield className="text-olive-gold" size={24} />,
      title: "Permanent Results",
      description: "Transplanted hair grows naturally for life"
    },
    {
      icon: <Leaf className="text-olive-gold" size={24} />,
      title: "Natural Growth Pattern",
      description: "Hair grows in the correct direction and angle"
    }
  ];

  const procedureSteps = [
    "Consultation & Hair Analysis",
    "Donor Area Assessment",
    "Local Anesthesia Administration",
    "Follicular Unit Extraction",
    "Graft Preparation",
    "Recipient Site Creation",
    "Graft Implantation",
    "Post-Op Instructions"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-lg md:text-xl">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-forest-green mb-4">
          Male Hair Transplant
        </h1>
        <p className="text-xl text-stone-gray max-w-3xl mx-auto">
          Specialized solutions for male pattern baldness using the most advanced hair restoration techniques
        </p>
      </section>

      {/* Before/After Slider */}
      {/* <section className="mb-16">
        <BeforeAfterSlider 
          beforeImage="/male-hair-before.jpg"
          afterImage="/male-hair-after.jpg"
          caption="6 months post FUE procedure"
        />
      </section> */}

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-forest-green mb-8 text-center">
          Why Choose Our Male Hair Transplant?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <div className="mr-4 mt-1">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-forest-green mb-2">{benefit.title}</h3>
                <p className="text-stone-gray">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Procedure Section */}
      <section className="mb-16">
        <div className="bg-soft-sage/20 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-forest-green mb-6">
            The Male Hair Transplant Procedure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-stone-gray mb-6">
                Our male hair transplant procedure is tailored specifically to address male pattern baldness,
                focusing on creating a natural-looking hairline and optimal density. Using Direct Hair Transplantation (DHT),
                we achieve superior graft survival rates compared to traditional methods.
              </p>
              <ul className="space-y-3">
                {procedureSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-olive-gold mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-stone-gray">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-forest-green mb-4">
                  Ideal Candidates
                </h3>
                <ul className="space-y-3 text-stone-gray">
                  <li className="flex items-start">
                    <ChevronRight className="text-olive-gold mr-2 mt-1" size={16} />
                    Men with male pattern baldness (Norwood Scale II-VI)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-olive-gold mr-2 mt-1" size={16} />
                    Those with sufficient donor hair density
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-olive-gold mr-2 mt-1" size={16} />
                    Individuals with realistic expectations
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-olive-gold mr-2 mt-1" size={16} />
                    Non-smokers or willing to quit before procedure
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-olive-gold mr-2 mt-1" size={16} />
                    Generally healthy individuals
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-forest-green mb-6">
          Expected Results Timeline
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-stone-gray">
              <thead>
                <tr className="border-b border-soft-sage">
                  <th className="py-3 text-left">Timeframe</th>
                  <th className="py-3 text-left">Progress</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-soft-sage/30">
                  <td className="py-3 font-medium">1-2 Weeks</td>
                  <td>Scabs fall off, redness subsides</td>
                </tr>
                <tr className="border-b border-soft-sage/30">
                  <td className="py-3 font-medium">2-4 Weeks</td>
                  <td>Transplanted hair sheds (normal part of process)</td>
                </tr>
                <tr className="border-b border-soft-sage/30">
                  <td className="py-3 font-medium">3-4 Months</td>
                  <td>New hair begins to grow</td>
                </tr>
                <tr className="border-b border-soft-sage/30">
                  <td className="py-3 font-medium">6-9 Months</td>
                  <td>Visible thickening and coverage</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">12 Months</td>
                  <td>Final results visible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section>
        <ConsultationForm />
      </section>
    </div>
  );
};

export default MaleHairTransplant;