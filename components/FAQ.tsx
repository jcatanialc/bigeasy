import React, { useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { FaqItem } from '../types';

export const FAQ: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "What is compounded Semaglutide?",
      answer: "Compounded Semaglutide is a patient-specific medication created in a state-licensed pharmacy. It contains the same active ingredient found in name-brand medications like Ozempic® and Wegovy®, but is often mixed with B12 or other vitamins to reduce side effects and improve tolerance."
    },
    {
      question: "Do I need insurance?",
      answer: "No, Big Easy Weight Loss is a cash-pay service. We do not accept insurance, which allows us to keep our prices low and transparent without the need for prior authorizations."
    },
    {
      question: "How much weight can I expect to lose?",
      answer: "While individual results vary, clinical trials for GLP-1 medications have shown average weight loss of 15% of body weight over a 68-week period when combined with diet and exercise."
    },
    {
      question: "Is it safe?",
      answer: "GLP-1 medications have been used for over a decade. However, all medications carry risks. Common side effects include nausea, fatigue, and minor digestive issues. A licensed provider will review your medical history to ensure this medication is safe for you."
    },
    {
      question: "How fast is shipping?",
      answer: "Once your prescription is approved by a provider, the pharmacy typically processes the order within 2-4 business days. Shipping is usually overnight or 2-day priority to ensure medication stability."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-brand-cream border-t border-brand-dark/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-brand-dark mb-16">Common questions.</h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="group border-b border-brand-dark/10 pb-6"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-start text-left focus:outline-none group"
              >
                <span className="text-xl font-medium text-brand-dark group-hover:text-brand-secondary transition-colors pr-8">
                  {faq.question}
                </span>
                <div className={`transition-transform duration-300 mt-1 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                    <ArrowDownRight className="text-brand-dark opacity-40 group-hover:opacity-100" />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                <div className="text-brand-dark/70 text-lg leading-relaxed max-w-2xl">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};