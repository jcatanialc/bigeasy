import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  onOpenQuiz: () => void;
  onNavigate: (view: 'home' | 'new-patient') => void;
  currentView: 'home' | 'new-patient';
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuiz, onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: 'home' | 'new-patient', href?: string) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
    
    // If it's a hash link on the home page
    if (view === 'home' && href) {
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const navLinks = [
    { name: 'Process', href: '#how-it-works', view: 'home' },
    { name: 'Meet the Krewe', href: '#team', view: 'home' },
    { name: 'Pricing', href: '#pricing', view: 'home' },
    { name: 'New Patients', view: 'new-patient' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-brand-cream/90 backdrop-blur-xl border-b border-brand-secondary/20 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => handleNavClick('home')}>
            {/* Logo Text simulation based on the image provided */}
            <div className="flex flex-col items-start leading-none">
                <span className="font-serif font-black text-2xl tracking-tight text-brand-secondary drop-shadow-sm group-hover:text-brand-primary transition-colors">
                  BIG EASY
                </span>
                <span className="font-sans text-[0.65rem] font-bold tracking-[0.2em] uppercase text-brand-dark ml-0.5">
                  Weight Loss
                </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8">
                {navLinks.map((link) => (
                <button 
                    key={link.name} 
                    onClick={() => handleNavClick(link.view as 'home' | 'new-patient', link.href)}
                    className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-brand-primary after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left ${
                      currentView === link.view && link.view === 'new-patient' 
                        ? 'text-brand-dark font-bold' 
                        : 'text-brand-dark/70 hover:text-brand-secondary'
                    }`}
                >
                    {link.name}
                </button>
                ))}
            </div>
            <Button onClick={onOpenQuiz} size="sm" variant="secondary" className="!px-6 shadow-brand-secondary/20">
              Join Today
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-dark hover:text-brand-secondary transition-colors p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-cream/95 backdrop-blur-xl border-b border-brand-dark/10 p-6 flex flex-col space-y-6 animate-fade-in-up h-screen">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.view as 'home' | 'new-patient', link.href)}
              className="text-2xl font-serif text-brand-dark hover:text-brand-secondary block text-left w-full"
            >
              {link.name}
            </button>
          ))}
          <Button onClick={() => {
            setIsMobileMenuOpen(false);
            onOpenQuiz();
          }} fullWidth variant="primary">
            Join Today
          </Button>
        </div>
      )}
    </nav>
  );
};