import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatesTicker } from './components/StatesTicker';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { QuizModal } from './components/QuizModal';
import { NewPatientGuide } from './components/NewPatientGuide';

const App: React.FC = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'new-patient'>('home');

  const openQuiz = (plan?: string) => {
    if (plan) setSelectedPlan(plan);
    else setSelectedPlan(null);
    setIsQuizOpen(true);
  };

  const closeQuiz = () => {
    setIsQuizOpen(false);
  };

  const handleNavigate = (view: 'home' | 'new-patient') => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar 
        onOpenQuiz={() => openQuiz()} 
        onNavigate={handleNavigate}
        currentView={currentView}
      />
      
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <Hero onOpenQuiz={() => openQuiz()} />
            <StatesTicker />
            <Process />
            <Pricing onSelectPlan={(plan) => openQuiz(plan)} />
            <Team />
            <FAQ />
          </>
        ) : (
          <NewPatientGuide 
            onBack={() => handleNavigate('home')} 
            onOpenQuiz={() => openQuiz()}
          />
        )}
      </main>

      <Footer />
      
      <QuizModal 
        isOpen={isQuizOpen} 
        onClose={closeQuiz} 
        initialPlan={selectedPlan}
      />
    </div>
  );
};

export default App;