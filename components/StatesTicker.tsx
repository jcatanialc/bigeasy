import React from 'react';

export const StatesTicker: React.FC = () => {
  const states = [
    "Alabama", "Alaska", "Arizona", "California", "Colorado", "Connecticut", "DC", "Delaware", 
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Iowa", "Indiana", "Kansas", "Kentucky", 
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", 
    "Montana", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", 
    "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", 
    "West Virginia", "Wisconsin", "Wyoming"
  ];

  return (
    <div className="w-full bg-brand-dark text-brand-cream border-y border-brand-primary/20 overflow-hidden py-4 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <span className="inline-block bg-brand-primary/10 text-brand-primary border border-brand-primary/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
            Service Area
        </span>
        <p className="text-sm font-medium text-brand-cream/80">
            We currently serve <span className="text-white font-bold underline decoration-brand-primary underline-offset-4">ALL states</span> EXCEPT Arkansas.
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {states.map((state, index) => (
            <span key={index} className="mx-4 text-sm font-serif font-medium opacity-60 flex items-center gap-4">
              {state}
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40"></span>
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {states.map((state, index) => (
            <span key={`duplicate-${index}`} className="mx-4 text-sm font-serif font-medium opacity-60 flex items-center gap-4">
              {state}
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40"></span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
};