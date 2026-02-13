import React from 'react';

export const Team: React.FC = () => {
  const providers = [
    "Dr. Eduardo R. Randrup",
    "Dr. Sion Kim",
    "Dr. Thomas Pentzer",
    "Dr. Bukie Adefabi",
    "Dr. Jo Ann Beltre",
    "Dr. Elizabeth M. Goodly",
    "Dr. Anne Lee",
    "Dr. Govind Seth"
  ];

  const leadership = [
    { name: "Dr. Gabriel Lasala", role: "Chief Medical Officer" },
    { name: "P. David Soliman", role: "Leadership" },
    { name: "Marcia Katheryn Webb", role: "Leadership" },
    { name: "Michelle Keyes Soliman", role: "Leadership" }
  ];

  return (
    <section id="team" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">Meet the Krewe</h2>
          <p className="text-lg text-brand-dark/60 max-w-2xl mx-auto">
            A dedicated team of providers committed to your health journey. Real people, real care.
          </p>
        </div>

        {/* Leadership */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
            {leadership.map((person, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-brand-dark/5 shadow-tile text-center group hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-16 h-16 bg-brand-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center text-brand-secondary font-serif font-bold text-xl">
                        {person.name.charAt(0)}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-brand-dark mb-1">{person.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-secondary">{person.role}</p>
                </div>
            ))}
        </div>

        <div className="text-center mb-10">
            <span className="bg-brand-dark/5 px-4 py-2 rounded-full text-sm font-bold text-brand-dark/60">Our Providers</span>
        </div>

        {/* Providers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {providers.map((name, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-brand-dark/5 hover:border-brand-primary/50 hover:bg-white transition-colors text-center">
                    <p className="font-serif font-medium text-brand-dark">{name}</p>
                </div>
            ))}
        </div>

        <div className="mt-20 bg-brand-dark rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif text-brand-cream mb-4">Not ready to sign up but want to chat?</h3>
                <p className="text-brand-cream/70 mb-8 max-w-2xl mx-auto">
                    Let's have a friendly conversation about your goals. We promise to keep it light and fun! 
                    Prefer speaking to an actual human? Give us a ring.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="mailto:krewe@joinbigeasy.com" className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-brand-dark font-bold rounded-full hover:bg-white transition-colors">
                        Email Us
                    </a>
                    <a href="tel:5043136301" className="text-brand-cream font-bold hover:text-brand-primary transition-colors">
                        (504) 313-6301
                    </a>
                </div>
             </div>
             {/* Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/20 rounded-full blur-[80px] pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};