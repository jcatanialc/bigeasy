import React from 'react';
import { Button } from './Button';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
        
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <div className="opacity-0 animate-fade-in-up [animation-delay:200ms]">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-dark/10 bg-white/50 backdrop-blur-sm mb-8">
                <span className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-brand-dark text-brand-dark" />)}
                </span>
                <span className="text-xs font-bold tracking-wide uppercase text-brand-dark">Top Rated GLP-1 Provider</span>
                </div>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] text-brand-dark mb-8 tracking-tight opacity-0 animate-fade-in-up [animation-delay:400ms]">
              Scale down <br />
              <span className="italic font-light text-brand-secondary">to level up</span> <span className="relative inline-block">
                your health.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-primary z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-brand-dark/70 mb-10 leading-relaxed max-w-lg font-medium opacity-0 animate-fade-in-up [animation-delay:600ms]">
              Welcome to Big Easy Weight Loss! Let us support your goals. Prescribed online, delivered to your door.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-in-up [animation-delay:800ms] w-full sm:w-auto">
              <Button onClick={onOpenQuiz} className="group min-w-[200px]" size="lg">
                Join Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                Treatment Pricing
              </Button>
            </div>

            <div className="flex items-center gap-8 opacity-0 animate-fade-in-up [animation-delay:1000ms] border-t border-brand-dark/10 pt-8 w-full">
                <div className="flex flex-col">
                    <span className="text-3xl font-serif font-bold text-brand-dark">15%</span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-brand-muted">Avg Weight Loss</span>
                </div>
                <div className="w-px h-10 bg-brand-dark/10"></div>
                <div className="flex flex-col">
                    <span className="text-3xl font-serif font-bold text-brand-dark">10k+</span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-brand-muted">Patients Served</span>
                </div>
                <div className="w-px h-10 bg-brand-dark/10"></div>
                <div className="flex flex-col">
                    <span className="text-3xl font-serif font-bold text-brand-dark">100%</span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-brand-muted">Online</span>
                </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="lg:col-span-5 relative lg:h-[800px] flex items-center justify-center opacity-0 animate-fade-in-up [animation-delay:600ms]">
             
            {/* Arch Mask Image */}
            <div className="relative w-full max-w-md aspect-[3/4] rounded-[100px_100px_0_0] overflow-hidden shadow-2xl z-10">
                <img 
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
                    alt="Happy woman outdoor" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-8 right-8 bg-brand-primary text-brand-dark w-24 h-24 rounded-full flex items-center justify-center p-2 animate-[spin_10s_linear_infinite]">
                     <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                        <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent"/>
                        <text className="text-[14px] font-bold uppercase tracking-widest">
                            <textPath xlinkHref="#curve">
                                FDA Approved • Ingredients •
                            </textPath>
                        </text>
                     </svg>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <Star className="fill-brand-dark" size={24} />
                     </div>
                </div>
            </div>

            {/* Background Shape */}
            <div className="absolute -bottom-10 -right-10 w-full h-2/3 bg-brand-dark rounded-[100px_100px_0_0] -z-10 transform translate-x-4 translate-y-4"></div>
            
            {/* Pill Overlay */}
            <div className="absolute bottom-20 -left-12 bg-brand-cream border border-brand-dark/10 p-6 rounded-3xl shadow-xl max-w-[240px] z-20 animate-float">
                <p className="font-serif text-xl italic text-brand-dark mb-2">"I feel like myself again."</p>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-dark rounded-full"></div>
                    <span className="text-sm font-bold text-brand-dark/60">Sarah, TX</span>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};