import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);


  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is hair transplant surgery painful?",
      answer: "Most patients report minimal discomfort during the procedure. We use local anesthesia to numb the scalp, so you'll only feel slight pressure during the process. Post-operative pain is typically mild and managed with prescribed medications."
    },
    {
      question: "How long does it take to see final results?",
      answer: "You'll see initial growth at 3-4 months, with noticeable results by 6-9 months. The full outcome becomes apparent after 12-18 months as transplanted hair matures and thickens."
    },
    {
      question: "Are the results of a hair transplant permanent?",
      answer: "Yes, transplanted hair is permanent because it's taken from DHT-resistant areas at the back of your scalp. However, existing non-transplanted hair may continue to thin, so maintenance treatments might be recommended."
    },
    {
      question: "What's the difference between FUE and FUT methods?",
      answer: "FUE (Follicular Unit Extraction) involves extracting individual follicles, leaving tiny dot scars. FUT (Follicular Unit Transplantation) removes a strip of tissue, leaving a linear scar. FUE has faster recovery while FUT can harvest more grafts in one session."
    },
    {
      question: "How long is the recovery period?",
      answer: "Most patients return to work within 3-5 days. Strenuous exercise should be avoided for 2-3 weeks. The scalp may remain pink for several weeks, and transplanted hair sheds at 2-4 weeks before regrowing."
    },
    {
      question: "Will people know I've had a transplant?",
      answer: "Modern techniques create completely natural results when performed by skilled surgeons. For the first 2 weeks post-op, the procedure may be noticeable, but after healing and hair growth, it's undetectable."
    },
    {
      question: "What's the success rate of hair transplants?",
      answer: "With our DHT method, we achieve 90-95% graft survival rate. Success depends on surgeon skill, patient's donor quality, and proper aftercare. We guarantee natural-looking results when following our post-op instructions."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 py-12 bg-muted-teal'">
      <h2 className="heading-h2 text-forest-green mb-8 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className={`w-full flex justify-between items-center p-5 text-left ${activeIndex === index ? 'bg-soft-sage/20' : 'bg-white'}`}
              onClick={() => toggleFAQ(index)}
            >
              <h4 className="heading-4 text-forest-green">
                {faq.question}
              </h4>
              {activeIndex === index ? (
                <Minus className="text-olive-gold" size={20} />
              ) : (
                <Plus className="text-olive-gold" size={20} />
              )}
            </button>

            {activeIndex === index && (
              <div className="p-5 bg-white border-t border-gray-200">
                <p className="text-stone-600 text-body">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;