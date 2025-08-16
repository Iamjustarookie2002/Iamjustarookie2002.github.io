import React, { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Series: React.FC = () => {
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

  const navigate = useNavigate();
  const handleBackToPortfolio = () => {
    navigate('/');
  };
  const [seriesData, setSeriesData] = useState<{ title: string; description?: string; items: Array<{ id: string; title: string; link?: string; tag?: string }> } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/series.json')
      .then((res) => res.json())
      .then((data) => setSeriesData(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;
  if (!seriesData) return null;

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
            <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-main)] mb-4">{seriesData.title}</h1>
            {seriesData.description && (
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">{seriesData.description}</p>
            )}
          </div>

          {/* Grid mirroring Games layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {seriesData.items.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-[var(--primary)]/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-3">
                  {item.tag && (
                    <span className="text-xs text-[var(--text-secondary)] bg-gray-700/50 px-2 py-1 rounded-full">{item.tag}</span>
                  )}
                </div>

                <button
                  onClick={() => item.link && window.open(item.link, '_blank', 'noopener,noreferrer')}
                  className={`group w-full text-left ${!item.link ? 'cursor-default' : 'cursor-pointer'}`}
                  disabled={!item.link}
                >
                  <h3 className={`text-lg font-bold flex items-center gap-1 ${
                    item.link
                      ? 'text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors duration-300'
                      : 'text-[var(--text-secondary)]'
                  }`}>
                    {item.title}
                    {item.link && (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </h3>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Series; 