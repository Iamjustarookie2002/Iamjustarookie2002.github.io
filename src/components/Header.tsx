import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  onJourneyClick?: () => void;
  onGoBackToIntro?: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, onJourneyClick, onGoBackToIntro }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Ensure a theme class is always present on mount
    if (!document.body.classList.contains('theme-dark') && !document.body.classList.contains('theme-light')) {
      document.body.classList.add('theme-dark');
    }
  }, []);

  const [theme, setTheme] = useState<'dark' | 'light'>(
    document.body.classList.contains('theme-light') ? 'light' : 'dark'
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
      setTheme('light');
    } else {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
      setTheme('dark');
    }
  };

  const navItems = [
    currentSection === 'journey'
      ? { id: 'intro', label: 'Intro' }
      : { id: 'journey', label: 'Journey' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'journey' && onJourneyClick) {
      onJourneyClick();
      setIsMenuOpen(false);
      return;
    }
    if (sectionId === 'intro' && onGoBackToIntro) {
      onGoBackToIntro();
      setIsMenuOpen(false);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'header-bg-scrolled card-blur shadow-lg' : 'header-bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-300" />
            <span
              className="text-xl font-bold text-white cursor-pointer hover:text-purple-400 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Iamjustarookie
            </span>
          </div>

          <div className="flex items-center ml-auto">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-purple-400 ${
                    currentSection === item.id ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-6 p-2 rounded-full border border-gray-700 hover:bg-gray-700/20 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-6 w-6 text-white" /> : <Moon className="h-6 w-6 text-gray-800" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-purple-400 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm font-medium transition-colors duration-200 hover:text-purple-400 ${
                    currentSection === item.id ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;