import { useState, useEffect } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Journey from './components/Journey';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

function App() {
  const [currentSection, setCurrentSection] = useState<'intro' | 'journey'>('intro');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cameFromJourney, setCameFromJourney] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJourneyClick = () => {
    setCurrentSection('journey');
    setCameFromJourney(false);
  };

  const handleGoBackToIntro = () => {
    setCurrentSection('intro');
    setCameFromJourney(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header currentSection={currentSection === 'intro' ? 'anime' : 'journey'} onJourneyClick={handleJourneyClick} onGoBackToIntro={handleGoBackToIntro} />
      {currentSection === 'intro' ? (
        <Intro fromJourney={cameFromJourney} />
      ) : (
        <Journey onGoBack={handleGoBackToIntro} />
      )}
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition-colors duration-200"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

export default App;