import React from 'react';
import { ClipboardList, Stethoscope, PackageCheck } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      title: "Tell us about you.",
      subtitle: "Step 01",
      description: "Complete a 3-minute health assessment. No waiting rooms, no awkward conversations.",
      icon: ClipboardList,
      color: "bg-[#e8f5e9]"
    },
    {
      title: "Provider review.",
      subtitle: "Step 02",
      description: "A licensed clinician reviews your history and prescribes the right GLP-1 medication for you.",
      icon: Stethoscope,
      color: "bg-[#fff3e0]"
    },
    {
      title: "Delivered to door.",
      subtitle: "Step 03",
      description: "Your medication arrives in discreet cold-pack shipping from a licensed US pharmacy.",
      icon: PackageCheck,
      color: "bg-[#e3f2fd]"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-brand-dark text-brand-cream rounded-t-[60px] -mt-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Process</span>
            <h2 className="text-4xl sm:text-6xl font-serif text-white">Simple steps to <br/> a lighter you.</h2>
          </div>
          <p className="text-brand-cream/60 max-w-sm text-lg">
            We've removed the barriers to weight loss care. It's safe, entirely online, and centered around you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110 origin-top-right">
                  <step.icon size={120} />
              </div>
              
              <div className="relative z-10">
                <span className="text-brand-primary font-mono text-sm mb-6 block">{step.subtitle}</span>
                <h3 className="text-3xl font-serif text-white mb-6 group-hover:translate-x-2 transition-transform duration-300">{step.title}</h3>
                <p className="text-brand-cream/70 leading-relaxed text-lg">
                    {step.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};