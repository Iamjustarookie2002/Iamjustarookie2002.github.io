import React, { useState, useEffect } from 'react';

interface IntroData {
  name: string;
  summary: string;
  welcome: string;
  github: string;
  linkedin: string;
  cv: string;
  journeyButton: string;
  backToIntroButton: string;
}

interface IntroProps {
  fromJourney?: boolean;
  onJourneyClick?: () => void;
}

const Intro: React.FC<IntroProps> = ({ fromJourney, onJourneyClick }) => {
  const [showName, setShowName] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showUnderline, setShowUnderline] = useState(false);
  const [showStaticHero, setShowStaticHero] = useState(false);
  const [introData, setIntroData] = useState<IntroData | null>(null);

  useEffect(() => {
    fetch('/data/intro.json')
      .then((res) => res.json())
      .then((data) => setIntroData(data));
  }, []);

  useEffect(() => {
    if (fromJourney) {
      setShowName(false);
      setShowWelcome(false);
      setShowUnderline(false);
      setShowStaticHero(true);
      return;
    }
    // Animate name, then underline, then welcome
    const sequence = async () => {
      setShowName(true);
      setShowWelcome(false);
      setShowUnderline(false);
      setShowStaticHero(false);

      await new Promise(resolve => setTimeout(resolve, 1000)); // name fade-in
      setShowUnderline(true);
      await new Promise(resolve => setTimeout(resolve, 3000)); // underline animates in

      setShowName(false);
      setShowWelcome(true);
      await new Promise(resolve => setTimeout(resolve, 2000)); // show welcome for a bit
      setShowWelcome(false);

      // Show static hero after animation
      setShowStaticHero(true);
    };
    sequence();
  }, [fromJourney]);

  if (!introData) return null;

  return (
    <section id="anime" className="relative z-10 text-center w-full px-[5%] min-h-screen flex flex-col justify-center items-center intro-section-bg overflow-x-auto">
      {(showName || showWelcome) && (
        <div className="inline-block relative fit-content-width">
          {/* Name is always rendered for width calculation */}
          <h1
            className={`silver-black-gradient-text mb-4 animate-fade-in-up transition-opacity duration-500 agbalumo-font animated-name ${showName ? 'opacity-100' : 'opacity-0'}`}
            style={{ pointerEvents: showName ? 'auto' : 'none' }}
          >
            {introData.name}
          </h1>
          {/* Welcome text absolutely overlays the name */}
          <h1
            className="silver-black-gradient-text mb-4 transition-opacity duration-500 animated-welcome"
            style={{ opacity: showWelcome ? 1 : 0, pointerEvents: showWelcome ? 'auto' : 'none' }}
          >
            {introData.welcome}
          </h1>
          <div
            className="intro-underline"
            style={{ width: showUnderline ? '70%' : '0%' }}
          ></div>
        </div>
      )}
      {showStaticHero && (
        <div className="w-full py-16 intro-section-transparent-bg">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Left side - Text content */}
            <div className="flex-10 text-center lg:text-right max-w-2xl lg:ml-auto lg:mr-8">
              <h1 className="font-bold text-[#7cb6fe] mb-4 relative pb-2 whitespace-nowrap static-hero-name">
                {introData.name}
              </h1>
              <div className="mt-4">
                <p className="text-lg md:text-xl text-gray-300 mb-6">
                  {introData.summary}
                </p>
                <div className="flex justify-center space-x-6 mb-4">
                  <a href={introData.github} target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.479C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"></path></svg>
                  </a>
                  <a href={introData.linkedin} target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6z" /><rect width="4" height="12" x="2" y="9" rx="2" /><circle cx="4" cy="4" r="2" /></svg>
                  </a>
                  <a href={introData.cv}
                    target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <span className="text-white font-semibold text-sm">CV</span>
                  </a>
                </div>
                {/* Journey Link */}
                {onJourneyClick && (
                  <div className="flex justify-center mt-6">
                    <button
                      onClick={onJourneyClick}
                      className="text-[#7cb6fe] hover:text-[white] font-semibold text-lg transition-colors duration-300 hover:scale-105 transform"
                    >
                      {introData.journeyButton}
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/* Right side - Oval profile picture */}
            <div className="flex-2 flex justify-center lg:justify-end lg:mr-8">
              <div className="relative profile-img-container">
                <div className="rounded-full flex items-center justify-center overflow-hidden shadow-2xl backdrop-blur-sm w-full h-full">
                  <img 
                    src="/pics/Informal_Profile_Pic.jpg" 
                    alt="Rishikesh Kudikala" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Decorative glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7cb6fe]/30 to-transparent rounded-full blur-xl -z-10 w-full h-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Intro; 