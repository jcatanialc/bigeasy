import React from 'react';
import { Button } from './Button';
import { Check, Sparkles } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const plans: PricingPlan[] = [
    {
      id: 'semaglutide',
      name: 'Semaglutide',
      price: '299',
      drug: 'Active ingredient in Ozempic®',
      features: [
        'Doctor Consultation',
        'Prescription Medication',
        'Supplies & Shipping',
        'Ongoing Support',
      ]
    },
    {
      id: 'tirzepatide',
      name: 'Tirzepatide',
      price: '449',
      drug: 'Active ingredient in Mounjaro®',
      popular: true,
      features: [
        'Dual-Action Hormone',
        'Doctor Consultation',
        'Prescription Medication',
        'Supplies & Shipping',
        'Ongoing Support',
      ]
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-serif text-brand-dark mb-6">Simple, honest pricing.</h2>
          <p className="text-xl text-brand-dark/60 max-w-2xl mx-auto">
            Everything included. No insurance haggling, no hidden fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative rounded-[1rem] transition-all duration-300 ${
                plan.popular 
                  ? 'bg-brand-dark text-brand-cream p-12 shadow-2xl scale-105 z-10 border-4 border-brand-secondary' 
                  : 'bg-white text-brand-dark p-10 border border-brand-dark/10 shadow-tile hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-primary text-brand-dark text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                  <Sparkles size={14} /> Most Effective
                </div>
              )}
              
              <div className="flex justify-between items-start mb-8">
                <div>
                    <h3 className={`text-3xl font-serif font-bold ${plan.popular ? 'text-white' : 'text-brand-dark'}`}>{plan.name}</h3>
                    <p className={`text-sm mt-2 font-medium ${plan.popular ? 'text-brand-primary' : 'text-brand-secondary'}`}>{plan.drug}</p>
                </div>
                <div className="text-right">
                    <div className="flex items-baseline">
                        <span className="text-lg opacity-60">$</span>
                        <span className={`text-5xl font-sans font-bold tracking-tighter ${plan.popular ? 'text-white' : 'text-brand-dark'}`}>{plan.price}</span>
                    </div>
                    <span className="text-xs uppercase tracking-wide opacity-50">Per Month</span>
                </div>
              </div>

              <div className={`h-px w-full mb-8 ${plan.popular ? 'bg-white/10' : 'bg-brand-dark/10'}`}></div>

              <ul className="space-y-5 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className={`rounded-full p-1 ${plan.popular ? 'bg-brand-primary text-brand-dark' : 'bg-brand-secondary/10 text-brand-secondary'}`}>
                        <Check size={14} strokeWidth={3} />
                    </div>
                    <span className={`text-lg ${plan.popular ? 'text-brand-cream' : 'text-brand-dark/80'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => onSelectPlan(plan.name)}
                fullWidth 
                variant={plan.popular ? 'primary' : 'outline'}
                size="lg"
                className={!plan.popular ? "border-brand-dark/20 hover:bg-brand-dark hover:text-white" : ""}
              >
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};