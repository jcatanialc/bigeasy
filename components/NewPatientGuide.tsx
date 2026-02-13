import React from 'react';
import { Button } from './Button';
import { Check, MapPin, Truck, Phone, AlertCircle, ArrowRight } from 'lucide-react';

interface NewPatientGuideProps {
  onBack: () => void;
  onOpenQuiz: () => void;
}

export const NewPatientGuide: React.FC<NewPatientGuideProps> = ({ onBack, onOpenQuiz }) => {
  return (
    <div className="pt-32 pb-20 animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <button onClick={onBack} className="text-sm font-bold uppercase tracking-widest text-brand-secondary hover:text-brand-dark transition-colors mb-6">
            ← Back to Home
          </button>
          <h1 className="text-5xl md:text-7xl font-serif text-brand-dark mb-6">New Patients<br/><span className="text-brand-secondary italic">Start Here.</span></h1>
          <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
            Everything you need to know about joining the Krewe. Read this, and you'll be a pro.
          </p>
        </div>

        {/* The "Don't Mess This Up" Checklist */}
        <div className="bg-white border-2 border-brand-primary rounded-xl p-8 mb-20 relative overflow-hidden shadow-tile">
          <div className="absolute -right-10 -top-10 text-brand-primary/10">
            <AlertCircle size={200} />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6 flex items-center gap-3">
              <AlertCircle className="text-brand-primary fill-brand-primary text-white" />
              The "Don't Mess This Up" Checklist
            </h3>
            <ul className="space-y-4">
              {[
                "Double-check your email + phone number when booking.",
                "Answer unknown calls if you chose a phone visit.",
                "Don't toss the ice pack pouch until you've found the meds.",
                "Book refill visits one week before your last dose."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-brand-primary/20 text-brand-dark rounded-full p-1 mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-brand-dark font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Value Prop & Availability */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div>
            <h3 className="text-3xl font-serif text-brand-dark mb-6">Where we serve.</h3>
            <div className="bg-white p-6 rounded-xl border border-brand-secondary/20 shadow-tile">
                <p className="text-brand-dark/80 mb-4 flex gap-3 items-start">
                    <MapPin className="text-brand-secondary shrink-0" />
                    <span>We serve <strong>all states</strong> except Arkansas (in process).</span>
                </p>
                <p className="text-brand-dark/80 text-sm mb-2 pl-9">
                    Working on Puerto Rico.
                </p>
                <p className="text-brand-dark/80 text-sm pl-9">
                    Guam: Physician licensed, but currently seeking a shipping pharmacy partner.
                </p>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-serif text-brand-dark mb-6">Why Big Easy?</h3>
            <ul className="space-y-3">
                {[
                    "Independent clinic (no pharmacy ownership)",
                    "Direct relationship with your provider",
                    "Choose your own pharmacy (if appropriate)",
                    "Real customer service (Shoutout to Cassie!)",
                    "We actually have a phone number",
                    "Quarterly plans available in monthly installments"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-dark/80">
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                        {item}
                    </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Pricing Breakdown */}
        <section className="mb-24">
            <h2 className="text-4xl font-serif text-brand-dark mb-10 text-center">Detailed Pricing</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                {/* GLP/GIP */}
                <div className="bg-brand-dark text-brand-cream rounded-[1.5rem] p-8 relative overflow-hidden border-4 border-brand-secondary">
                    <div className="relative z-10">
                        <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2 block">Tirzepatide</span>
                        <h3 className="text-2xl font-serif mb-4">GLP-1 + GIP Agonists</h3>
                        <div className="space-y-4 mb-8">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                <span className="block text-2xl font-bold text-white">$499 <span className="text-sm font-normal opacity-70">/ 10 weeks</span></span>
                                <span className="text-sm opacity-60">via OptioRx (All States)</span>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                <span className="block text-2xl font-bold text-white">$599 <span className="text-sm font-normal opacity-70">/ 12 weeks</span></span>
                                <span className="text-sm opacity-60">Various Pharmacies</span>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm opacity-80">
                            <p>• $80-$100 discount on starter dosing</p>
                            <p>• Prorated for non-standard periods</p>
                        </div>
                    </div>
                </div>

                {/* GLP Only */}
                <div className="bg-white text-brand-dark rounded-[1.5rem] p-8 border border-brand-dark/10 shadow-tile">
                    <span className="text-brand-secondary font-bold uppercase tracking-widest text-xs mb-2 block">Semaglutide</span>
                    <h3 className="text-2xl font-serif mb-4">GLP-1 Agonists</h3>
                     <div className="space-y-4 mb-8">
                            <div className="p-4 bg-brand-cream rounded-xl border border-brand-dark/5">
                                <span className="block text-2xl font-bold text-brand-dark">$499 <span className="text-sm font-normal opacity-70">/ 12 weeks</span></span>
                                <span className="text-sm opacity-60">Regardless of dosing</span>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm opacity-80 text-brand-dark/70">
                            <p>• $100 discount on starter dosing</p>
                            <p>• Pharmacies: Hallandale, Seven Cells, OptioRx</p>
                        </div>
                </div>
            </div>
            
            <div className="mt-8 bg-brand-secondary/10 p-6 rounded-xl border border-brand-secondary/20 text-center">
                <h4 className="font-bold text-brand-dark mb-2">How Installments Work</h4>
                <p className="text-brand-dark/70 text-sm">
                    Payments are split into equal monthly payments over the prescription period. 
                    <br/>Example: 10 weeks of medication = 3 monthly installments.
                </p>
            </div>
        </section>

        {/* The 7 Steps Timeline */}
        <section className="relative border-l-2 border-brand-secondary/20 ml-4 md:ml-0 space-y-16">
            
            {/* Step 1 */}
            <div className="relative pl-12 md:pl-0">
                <div className="absolute -left-[9px] top-0 w-5 h-5 bg-brand-primary rounded-full border-4 border-brand-cream z-10 md:left-1/2 md:-translate-x-1/2"></div>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-start">
                    <div className="md:text-right md:pr-4 mb-4 md:mb-0">
                        <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm">Step 01</span>
                        <h3 className="text-3xl font-serif text-brand-dark">Book & Join the Krewe</h3>
                    </div>
                    <div>
                        <p className="text-brand-dark/70 mb-4">
                            Start by booking on Healthie. You'll choose your state, visit format (Phone/Video), and appointment time.
                        </p>
                        <div className="bg-white p-5 rounded-xl border border-brand-dark/5 shadow-sm text-sm space-y-3">
                            <p><strong>Cost:</strong> $75 "No-risk" deposit.</p>
                            <p>• Credited to prescription if approved.</p>
                            <p>• Refunded if not a fit.</p>
                            <p>• Reduces no-shows (thanks, science).</p>
                        </div>
                        <div className="mt-4 p-3 bg-red-50 text-red-800 rounded-lg text-xs font-bold">
                            ⚠️ Watch out for typos in email/phone!
                        </div>
                    </div>
                </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-12 md:pl-0">
                <div className="absolute -left-[9px] top-0 w-5 h-5 bg-brand-dark rounded-full border-4 border-brand-cream z-10 md:left-1/2 md:-translate-x-1/2"></div>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-start">
                    <div className="md:text-right md:pr-4 mb-4 md:mb-0">
                         <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm">Step 02</span>
                        <h3 className="text-3xl font-serif text-brand-dark">The Intake Forms</h3>
                    </div>
                    <div>
                        <p className="text-brand-dark/70 mb-4">
                            Complete these at least 12 hours before your appointment. We cannot prescribe without them.
                        </p>
                        <ul className="space-y-2 text-sm text-brand-dark/60 list-disc pl-4 mb-4">
                            <li>Photo ID (Identity & Fraud prevention)</li>
                            <li>HIPAA Agreement</li>
                            <li>Telehealth Consent</li>
                            <li>Billing Consent</li>
                        </ul>
                         <p className="text-brand-dark/80 font-medium text-sm">
                            Key Question: Upfront or Installments? <br/>
                            <span className="font-normal opacity-70">Upfront = charged full amount. Installments = monthly split.</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Step 3 */}
            <div className="relative pl-12 md:pl-0">
                <div className="absolute -left-[9px] top-0 w-5 h-5 bg-brand-dark rounded-full border-4 border-brand-cream z-10 md:left-1/2 md:-translate-x-1/2"></div>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-start">
                    <div className="md:text-right md:pr-4 mb-4 md:mb-0">
                         <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm">Step 03</span>
                        <h3 className="text-3xl font-serif text-brand-dark">The Appointment</h3>
                    </div>
                    <div>
                        <p className="text-brand-dark/70 mb-4">
                           This is your time. Ask questions. We never want you rushed.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Phone size={18} className="mt-1 text-brand-secondary" />
                                <div>
                                    <p className="font-bold text-brand-dark text-sm">Phone Visits</p>
                                    <p className="text-xs text-brand-dark/60">We call you. Answer unknown numbers!</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-4 h-4 mt-1 rounded bg-brand-secondary flex items-center justify-center text-[10px] text-white font-bold">V</div>
                                <div>
                                    <p className="font-bold text-brand-dark text-sm">Video Visits</p>
                                    <p className="text-xs text-brand-dark/60">Join inside the Healthie app/portal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Step 4 */}
            <div className="relative pl-12 md:pl-0">
                <div className="absolute -left-[9px] top-0 w-5 h-5 bg-brand-dark rounded-full border-4 border-brand-cream z-10 md:left-1/2 md:-translate-x-1/2"></div>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-start">
                    <div className="md:text-right md:pr-4 mb-4 md:mb-0">
                         <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm">Step 04</span>
                        <h3 className="text-3xl font-serif text-brand-dark">How the Roux is Made</h3>
                    </div>
                    <div>
                         <p className="text-brand-dark/70 mb-4">
                           We charge your card (usually evening of appointment). After payment, we transmit to the pharmacy.
                        </p>
                         <div className="bg-white p-5 rounded-xl border border-brand-dark/5 shadow-sm text-sm space-y-3">
                            <div className="flex items-center gap-2 font-bold text-brand-dark">
                                <Truck size={16} /> Shipping
                            </div>
                            <p>• We ship the full prescription at once.</p>
                            <p>• Most pharmacies text when labels are created.</p>
                            <p>• Download UPS/FedEx apps for best visibility.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Step 5 */}
            <div className="relative pl-12 md:pl-0">
                <div className="absolute -left-[9px] top-0 w-5 h-5 bg-brand-primary rounded-full border-4 border-brand-cream z-10 md:left-1/2 md:-translate-x-1/2"></div>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-start">
                    <div className="md:text-right md:pr-4 mb-4 md:mb-0">
                         <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm">Step 05</span>
                        <h3 className="text-3xl font-serif text-brand-dark">Delivery!</h3>
                    </div>
                    <div>
                         <p className="text-brand-dark/70 italic font-serif text-xl mb-4">
                           Laissez les bons temps rouler!!
                        </p>
                        <div className="bg-red-50 border border-red-100 p-4 rounded-xl text-sm">
                             <p className="font-bold text-red-900 mb-1">The #1 Avoidable Tragedy</p>
                             <p className="text-red-800/80">Do NOT throw out the silver ice pack pouch before checking inside for your medication.</p>
                        </div>
                    </div>
                </div>
            </div>

             {/* Step 6 & 7 Combined */}
            <div className="relative pl-12 md:pl-0">
                <div className="absolute -left-[9px] top-0 w-5 h-5 bg-brand-dark rounded-full border-4 border-brand-cream z-10 md:left-1/2 md:-translate-x-1/2"></div>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-start">
                    <div className="md:text-right md:pr-4 mb-4 md:mb-0">
                         <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm">Steps 06 & 07</span>
                        <h3 className="text-3xl font-serif text-brand-dark">Refills & Reviews</h3>
                    </div>
                    <div>
                        <div className="mb-6">
                            <h4 className="font-bold text-brand-dark mb-1">Need a Refill?</h4>
                            <p className="text-brand-dark/70 text-sm">Book a follow-up about <strong>one week</strong> before your last dose via the Healthie app.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-brand-dark mb-1">Tell your Mom 'n Dem</h4>
                            <p className="text-brand-dark/70 text-sm">If you loved it, leave us a review on Google or Reddit. If not, email us so we can fix it.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        {/* Bottom CTA */}
        <div className="mt-24 text-center bg-brand-dark rounded-[2rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif text-brand-cream mb-8">Ready to start?</h2>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Button onClick={onOpenQuiz} size="lg" variant="primary">
                        Schedule Consultation ($75)
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <a href="mailto:krewe@joinbigeasy.com" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-brand-cream border-2 border-brand-cream/20 rounded-full hover:bg-brand-cream hover:text-brand-dark transition-all">
                        Email the Krewe
                    </a>
                </div>
                <p className="text-brand-cream/40 mt-8 text-sm">
                    Questions? Call 504-313-6301
                </p>
            </div>
            {/* Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-[80px] pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
        </div>

      </div>
    </div>
  );
};