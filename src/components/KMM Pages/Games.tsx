import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Games: React.FC = () => {
  const handleBackToPortfolio = () => {
    window.history.pushState({}, '', '/');
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col">
      {/* Header with Back Button */}
      <header className="p-6">
        <button
          onClick={handleBackToPortfolio}
          className="flex items-center gap-2 text-[var(--text-main)] hover:text-[var(--primary)] transition-colors duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-lg font-medium">Back to Portfolio</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-[var(--text-main)] mb-8">
            Work in Progress
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            The Games section is currently under development. 
            Check back soon for my favorite video games and gaming recommendations!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Games; 