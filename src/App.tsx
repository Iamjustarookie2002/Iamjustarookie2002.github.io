import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import Journey from './components/Journey';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import KnowMeMore from './components/KnowMeMore';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Games from './components/KMM Pages/Games';
import Series from './components/KMM Pages/Series';
import Hacks from './components/KMM Pages/Hacks';
import Vault from './components/KMM Pages/Vault';
import { ArrowUp } from 'lucide-react';

// Global state for scroll position
declare global {
  interface Window {
    portfolioScrollPosition: number;
  }
}

function App() {
  const [currentSection, setCurrentSection] = useState<'intro' | 'journey'>('intro');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cameFromJourney, setCameFromJourney] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 200;
      setShowScrollTop(shouldShow);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJourneyClick = () => {
    setFading(true);
    setTimeout(() => {
      setCurrentSection('journey');
      setCameFromJourney(false);
      setFading(false);
    }, 500);
  };

  const handleGoBackToIntro = () => {
    setFading(true);
    setTimeout(() => {
      setCurrentSection('intro');
      setCameFromJourney(true);
      setFading(false);
    }, 500);
  };

  const PortfolioPage = (
    <>
      <Header currentSection={currentSection === 'intro' ? 'anime' : 'journey'} />
      <div className="min-h-screen page-bg page-transition page-enter-active">
        <div className="section-switcher">
          <div className={`section-fade${currentSection === 'intro' && !fading ? '' : ' hide'}`}> 
            <Intro fromJourney={cameFromJourney} onJourneyClick={handleJourneyClick} />
          </div>
          <div className={`section-fade${currentSection === 'journey' && !fading ? '' : ' hide'}`}> 
            <Journey onGoBack={handleGoBackToIntro} />
          </div>
        </div>
        <About />
        <Projects />
        <Skills />
        <KnowMeMore />
        <Contact />
        <Footer />
      </div>
      {/* Scroll to top button - outside main content */}
      <button
        onClick={() => {
          setTimeout(() => {
            window.scrollTo({ 
              top: 0, 
              behavior: 'smooth' 
            });
          }, 300);
        }}
        className="p-3 rounded-full bg-[var(--primary)] text-white shadow-lg hover:opacity-90 transition-all duration-300"
        aria-label="Scroll to top"
        style={{ 
          position: 'fixed', 
          bottom: '1rem', 
          right: '1rem', 
          zIndex: 9999,
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? 'auto' : 'none',
          transform: showScrollTop ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScrollRestorerWrapper>{PortfolioPage}</ScrollRestorerWrapper>} />
        <Route path="/games" element={<PreserveScrollOnExit><Games /></PreserveScrollOnExit>} />
        <Route path="/series" element={<PreserveScrollOnExit><Series /></PreserveScrollOnExit>} />
        <Route path="/hacks" element={<PreserveScrollOnExit><Hacks /></PreserveScrollOnExit>} />
        <Route path="/vault" element={<PreserveScrollOnExit><Vault /></PreserveScrollOnExit>} />
      </Routes>
    </Router>
  );
}

export default App;

function ScrollRestorerWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('portfolioScrollY');
      if (saved) {
        const y = parseInt(saved, 10);
        if (!Number.isNaN(y)) {
          window.scrollTo({ top: y });
        }
        sessionStorage.removeItem('portfolioScrollY');
      }
    } catch (err) { void err; }
  }, []);
  return <>{children}</>;
}

function PreserveScrollOnExit({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    return () => {
      try {
        sessionStorage.setItem('portfolioScrollY', String(window.scrollY));
      } catch (err) { void err; }
    };
  }, []);
  return <>{children}</>;
}