import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Star, Gamepad2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Game {
  id: string;
  title: string;
  link: string;
  genre: string;
  favorite: boolean;
}

const Games: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Ensure correct theme when opened directly/new tab
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
    } else {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
    }
  }, []);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('/data/games.json');
        const data = await response.json();
        setGames(data.games);
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const handleBackToPortfolio = () => {
    navigate('/');
  };

  const handleGameClick = (link: string) => {
    if (link && link.trim() !== '') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-[var(--text-main)] text-xl">Loading games...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen page-bg flex flex-col">
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
      <main className="flex-1 px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-main)] mb-4">
              Games I've Grinded
            </h1>
          </div>

                     {/* Games Grid */}
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {games.map((game) => (
                             <div
                 key={game.id}
                 className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-[var(--primary)]/50 transition-all duration-300 hover:transform hover:scale-105 ${
                   game.favorite ? 'ring-2 ring-[var(--primary)]/30' : ''
                 }`}
               >
                                 {/* Game Header */}
                 <div className="flex items-start justify-between mb-3">
                   <div className="flex items-center gap-1">
                     <Gamepad2 className="w-4 h-4 text-[var(--primary)]" />
                     <span className="text-xs text-[var(--text-secondary)] bg-gray-700/50 px-2 py-1 rounded-full">
                       {game.genre}
                     </span>
                   </div>
                   {game.favorite && (
                     <Star className="w-4 h-4 text-yellow-400 fill-current" />
                   )}
                 </div>

                                 {/* Game Title - Clickable */}
                 <button
                   onClick={() => handleGameClick(game.link)}
                   className={`group w-full text-left ${!game.link || game.link.trim() === '' ? 'cursor-default' : 'cursor-pointer'}`}
                   disabled={!game.link || game.link.trim() === ''}
                 >
                   <h3 className={`text-lg font-bold flex items-center gap-1 ${
                     game.link && game.link.trim() !== '' 
                       ? 'text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors duration-300' 
                       : 'text-[var(--text-secondary)]'
                   }`}>
                     {game.title}
                     {game.link && game.link.trim() !== '' && (
                       <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                     )}
                   </h3>
                 </button>




              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="text-center mt-12">
            <p className="text-[var(--text-secondary)] text-lg">
              💡 <span className="text-[var(--primary)]">Pro tip:</span> “One more game” is the biggest lie you'll ever tell yourself!</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Games; 