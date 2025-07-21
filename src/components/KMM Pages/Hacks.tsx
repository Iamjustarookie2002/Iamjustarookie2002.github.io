import React, { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HackLink {
  label: string;
  url: string;
}

interface Hack {
  name: string;
  links: HackLink[];
}

interface HacksData {
  title: string;
  description: string;
  hacks: Hack[];
}

const Hacks: React.FC = () => {
  const [hacksData, setHacksData] = useState<HacksData | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/hacks.json')
      .then((res) => res.json())
      .then((data) => setHacksData(data))
      .finally(() => setLoading(false));
  }, []);

  const handleBackToPortfolio = () => {
    navigate('/');
  };

  if (loading) return null;
  if (!hacksData) return null;

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
      <main className="flex-1 px-6 py-8">
        <div className="container mx-auto max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-main)] mb-4">
              {hacksData.title}
            </h1>
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-4"></div>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              {hacksData.description}
            </p>
          </div>

          {/* Hacks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hacksData.hacks.map((hack, index) => (
              <div
                key={index}
                className="group bg-[var(--bg-card)]/60 rounded-lg p-6 border border-[var(--primary)] hover:border-[var(--primary)]/80 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-[var(--text-main)] mb-3 transition-colors">
                  {hack.name}
                </h3>
                <ul className="space-y-2 pl-4">
                  {hack.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[var(--primary)] hover:underline hover:text-blue-400 transition-colors"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hacks; 