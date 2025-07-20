import { useState, useEffect } from 'react';
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
import Anime from './components/KMM Pages/Anime';
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
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'games' | 'anime'>('portfolio');

  useEffect(() => {
    // Check if we're on the games or anime page
    if (window.location.pathname === '/games') {
      setCurrentPage('games');
    } else if (window.location.pathname === '/anime') {
      setCurrentPage('anime');
    } else {
      setCurrentPage('portfolio');
      // Scroll to KnowMeMore section when coming from games or anime
      const cameFromGames = localStorage.getItem('cameFromGames');
      const cameFromAnime = localStorage.getItem('cameFromAnime');
      if (cameFromGames === 'true') {
        setTimeout(() => {
          const knowMeMoreSection = document.getElementById('know-me-more');
          if (knowMeMoreSection) {
            knowMeMoreSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
          // Clear the flag after scrolling
          localStorage.removeItem('cameFromGames');
        }, 1200);
      } else if (cameFromAnime === 'true') {
        setTimeout(() => {
          const knowMeMoreSection = document.getElementById('know-me-more');
          if (knowMeMoreSection) {
            knowMeMoreSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
          // Clear the flag after scrolling
          localStorage.removeItem('cameFromAnime');
        }, 1200);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 200;
      setShowScrollTop(shouldShow);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleJourneyClick = () => {
    setFading(true);
    setTimeout(() => {
      setCurrentSection('journey');
      setCameFromJourney(false);
      setFading(false);
    }, 500); // match CSS transition duration
  };

  const handleGoBackToIntro = () => {
    setFading(true);
    setTimeout(() => {
      setCurrentSection('intro');
      setCameFromJourney(true);
      setFading(false);
    }, 500);
  };

  // Render Games page
  if (currentPage === 'games') {
    return (
      <div className="page-transition page-enter-active">
        <Games />
      </div>
    );
  }

  // Render Anime page
  if (currentPage === 'anime') {
    return (
      <div className="page-transition page-enter-active">
        <Anime />
      </div>
    );
  }

  // Render Portfolio page
  return (
    <>
      <Header currentSection={currentSection === 'intro' ? 'anime' : 'journey'} />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 page-transition page-enter-active">
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
        className="p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all duration-300"
        aria-label="Scroll to top"
        style={{ 
          position: 'fixed', 
          bottom: '1rem', 
          right: '1rem', 
          zIndex: 9999,
          opacity: showScrollTop && currentPage === 'portfolio' ? 1 : 0,
          pointerEvents: showScrollTop && currentPage === 'portfolio' ? 'auto' : 'none',
          transform: showScrollTop && currentPage === 'portfolio' ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </>
  );
}

export default App;