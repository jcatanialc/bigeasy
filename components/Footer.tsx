import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-cream pt-24 pb-12 rounded-t-[60px] relative z-10 overflow-hidden">
        {/* Giant Text Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
             <span className="text-[20vw] font-serif font-bold leading-none select-none whitespace-nowrap absolute -top-10 left-0">BIG EASY</span>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          <div className="md:col-span-5">
            <span className="font-serif text-3xl font-bold mb-6 block">Big Easy</span>
            <p className="text-lg text-brand-cream/60 leading-relaxed mb-6 max-w-xs">
              Modern weight loss tailored to your biology. Prescribed online, delivered to your door.
            </p>
            <div className="text-brand-cream/80 mb-8 space-y-1">
                <p>2800 Veterans Memorial Blvd, Suite 220A</p>
                <p>Metairie, LA 70002</p>
                <p className="pt-2 font-bold text-brand-primary">(504) 313-6301</p>
            </div>
            <div className="flex gap-4">
               {['Twitter', 'Instagram', 'TikTok'].map(social => (
                   <a key={social} href="#" className="text-brand-primary hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">{social}</a>
               ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-brand-cream/60">
              <li><a href="#how-it-works" className="hover:text-brand-primary transition-colors">Process</a></li>
              <li><a href="#team" className="hover:text-brand-primary transition-colors">Meet the Krewe</a></li>
              <li><a href="#pricing" className="hover:text-brand-primary transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-brand-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6">Legal & Partners</h4>
            <ul className="space-y-4 text-brand-cream/60">
              <li><a href="#" className="hover:text-brand-primary transition-colors">HIPAA & Privacy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Pharmacy Partners</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
             <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                 <p className="text-xs text-brand-cream/50 leading-relaxed">
                 *Compounded medications are not FDA-approved. The FDA does not verify the safety or effectiveness of compounded drugs. All medications require a prescription from a licensed provider.
                 </p>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-cream/40">
          <p>&copy; {new Date().getFullYear()} Big Easy Weight Loss. New Orleans, LA.</p>
          <a href="#" className="flex items-center gap-1 hover:text-white transition-colors mt-4 md:mt-0">
            Back to top <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};