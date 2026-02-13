import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Button } from './Button';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string | null;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose, initialPlan }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(4);
      }, 1500);
    }
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-3xl font-serif text-brand-dark mb-3">Let's get started.</h3>
              <p className="text-brand-dark/60 text-lg">First, we need a few details to verify eligibility.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-dark/40 uppercase tracking-widest">First Name</label>
                <input type="text" className="w-full border-b-2 border-brand-dark/10 py-3 text-xl font-serif text-brand-dark focus:border-brand-primary focus:outline-none transition-colors bg-transparent placeholder:text-brand-dark/20" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-dark/40 uppercase tracking-widest">Last Name</label>
                <input type="text" className="w-full border-b-2 border-brand-dark/10 py-3 text-xl font-serif text-brand-dark focus:border-brand-primary focus:outline-none transition-colors bg-transparent placeholder:text-brand-dark/20" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-dark/40 uppercase tracking-widest">Email Address</label>
              <input type="email" className="w-full border-b-2 border-brand-dark/10 py-3 text-xl font-serif text-brand-dark focus:border-brand-primary focus:outline-none transition-colors bg-transparent placeholder:text-brand-dark/20" placeholder="jane@example.com" />
            </div>
             <div className="space-y-2">
              <label className="text-xs font-bold text-brand-dark/40 uppercase tracking-widest">State</label>
              <select className="w-full border-b-2 border-brand-dark/10 py-3 text-xl font-serif text-brand-dark focus:border-brand-primary focus:outline-none transition-colors bg-transparent">
                <option>Select state...</option>
                <option>California</option>
                <option>Texas</option>
                <option>New York</option>
                <option>Florida</option>
                <option>Louisiana</option>
              </select>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-3xl font-serif text-brand-dark mb-3">Your goals.</h3>
              <p className="text-brand-dark/60 text-lg">Help us understand your journey.</p>
            </div>
             <div className="space-y-6">
                <div className="space-y-3">
                    <label className="text-xs font-bold text-brand-dark/40 uppercase tracking-widest">Target Weight Loss</label>
                    <div className="grid grid-cols-3 gap-3">
                        {['10-20 lbs', '20-50 lbs', '50+ lbs'].map(opt => (
                            <button key={opt} className="border-2 border-brand-dark/10 rounded-xl py-4 text-sm font-bold text-brand-dark hover:border-brand-primary hover:bg-brand-primary/10 focus:ring-2 focus:ring-brand-primary focus:outline-none transition-all">
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-brand-dark/40 uppercase tracking-widest">Current Weight</label>
                        <div className="relative">
                            <input type="number" className="w-full border-b-2 border-brand-dark/10 py-3 text-xl font-serif text-brand-dark focus:border-brand-primary focus:outline-none bg-transparent" placeholder="0" />
                            <span className="absolute right-0 bottom-3 text-brand-dark/30">lbs</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-brand-dark/40 uppercase tracking-widest">Height</label>
                        <div className="flex gap-4">
                            <input type="number" className="w-1/2 border-b-2 border-brand-dark/10 py-3 text-xl font-serif text-brand-dark focus:border-brand-primary focus:outline-none bg-transparent" placeholder="Ft" />
                            <input type="number" className="w-1/2 border-b-2 border-brand-dark/10 py-3 text-xl font-serif text-brand-dark focus:border-brand-primary focus:outline-none bg-transparent" placeholder="In" />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
      case 3:
        return (
           <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-3xl font-serif text-brand-dark mb-3">Preference.</h3>
              <p className="text-brand-dark/60 text-lg">Which path feels right for you?</p>
            </div>
            <div className="space-y-4">
                <button 
                  className={`w-full flex items-center justify-between p-6 border-2 rounded-2xl hover:border-brand-primary transition-all text-left group ${initialPlan === 'Semaglutide' ? 'border-brand-primary bg-brand-primary/10' : 'border-brand-dark/10'}`}
                  onClick={() => {}}
                >
                    <div>
                        <span className="block font-serif text-xl font-bold text-brand-dark">Semaglutide Plan</span>
                        <span className="text-sm font-medium text-brand-dark/50">$299/mo • Great starting point</span>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 border-brand-dark/20 group-hover:border-brand-primary flex items-center justify-center ${initialPlan === 'Semaglutide' ? 'border-brand-primary bg-brand-primary' : ''}`}>
                         {initialPlan === 'Semaglutide' && <Check size={14} className="text-brand-dark" />}
                    </div>
                </button>
                <button 
                  className={`w-full flex items-center justify-between p-6 border-2 rounded-2xl hover:border-brand-primary transition-all text-left group ${initialPlan === 'Tirzepatide' ? 'border-brand-primary bg-brand-primary/10' : 'border-brand-dark/10'}`}
                   onClick={() => {}}
                >
                    <div>
                        <span className="block font-serif text-xl font-bold text-brand-dark">Tirzepatide Plan</span>
                        <span className="text-sm font-medium text-brand-dark/50">$449/mo • Most effective</span>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 border-brand-dark/20 group-hover:border-brand-primary flex items-center justify-center ${initialPlan === 'Tirzepatide' ? 'border-brand-primary bg-brand-primary' : ''}`}>
                         {initialPlan === 'Tirzepatide' && <Check size={14} className="text-brand-dark" />}
                    </div>
                </button>
            </div>
          </div>
        )
      case 4:
         return (
             <div className="text-center py-12 animate-fade-in-up flex flex-col items-center">
                 <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mb-8 shadow-lg shadow-brand-primary/30">
                     <Check className="w-10 h-10 text-brand-dark" />
                 </div>
                 <h3 className="text-4xl font-serif text-brand-dark mb-4">You're Pre-Qualified!</h3>
                 <p className="text-brand-dark/60 text-lg mb-10 max-w-sm">
                     Based on your preliminary info, you appear to be a good candidate. A care coordinator will contact you shortly.
                 </p>
                 <Button onClick={onClose} fullWidth variant="secondary">Back to Home</Button>
             </div>
         )
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-brand-cream rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        {step < 4 && (
            <div className="px-8 py-6 border-b border-brand-dark/5 flex justify-between items-center bg-brand-cream">
            <div className="flex gap-2">
                {[1, 2, 3].map(i => (
                <div key={i} className={`h-1.5 w-8 rounded-full transition-colors ${i <= step ? 'bg-brand-primary' : 'bg-brand-dark/10'}`}></div>
                ))}
            </div>
            <button onClick={onClose} className="text-brand-dark/40 hover:text-brand-dark transition-colors">
                <X size={24} />
            </button>
            </div>
        )}

        {/* Content */}
        <div className="p-8 overflow-y-auto">
          {renderContent()}
        </div>

        {/* Footer */}
        {step < 4 && (
            <div className="px-8 py-6 border-t border-brand-dark/5 bg-white/50 flex justify-between items-center">
            {step > 1 ? (
                <button onClick={() => setStep(step - 1)} className="text-sm font-bold uppercase tracking-wider text-brand-dark/50 hover:text-brand-dark transition-colors">
                Back
                </button>
            ) : (
                <div></div>
            )}
            
            <Button onClick={handleNext} disabled={loading} className="min-w-[140px]" variant="primary">
                {loading ? 'Processing...' : step === 3 ? 'Finish' : 'Next Step'}
            </Button>
            </div>
        )}
      </div>
    </div>
  );
};