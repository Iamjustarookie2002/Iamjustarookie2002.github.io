import React, { useEffect, useState } from 'react';

interface KnowMeMoreData {
  title: string;
  description: string;
  cards: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
    link: string;
    color: string;
  }>;
}

const KnowMeMore: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [knowMeMoreData, setKnowMeMoreData] = useState<KnowMeMoreData | null>(null);

  useEffect(() => {
    fetch('/data/knowmemore.json')
      .then((res) => res.json())
      .then((data) => setKnowMeMoreData(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;
  if (!knowMeMoreData) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'spotify':
        return (
          <span className="w-4 h-4 text-[var(--primary)] text-lg">🎵</span>
        );
      case 'sword':
        return (
          <span className="w-4 h-4 text-[var(--primary)] text-lg font-bold">⚔️</span>
        );
      case 'flask':
        return (
          <span className="w-4 h-4 text-[var(--primary)] text-lg">🧪</span>
        );
      case 'gamepad':
        return (
          <span className="w-4 h-4 text-[var(--primary)] text-lg">🎮</span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="know-me-more" className="py-20 px-6 know-me-more-section-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">{knowMeMoreData.title}</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto"></div>
        </div>
        
        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {knowMeMoreData.cards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target={card.link.startsWith('http') ? '_blank' : '_self'}
              rel={card.link.startsWith('http') ? 'noopener noreferrer' : ''}
              onClick={(e) => {
                if (card.link === '/games') {
                  e.preventDefault();
                  // Save current scroll position
                  window.portfolioScrollPosition = window.scrollY;
                  // Smooth transition to games page
                  window.history.pushState({}, '', '/games');
                  window.location.reload();
                } else if (card.link === '/anime') {
                  e.preventDefault();
                  // Save current scroll position
                  window.portfolioScrollPosition = window.scrollY;
                  // Smooth transition to anime page
                  window.history.pushState({}, '', '/anime');
                  window.location.reload();
                }
              }}
              className="w-fit rounded-lg p-4 pr-6 border border-[var(--primary)] bg-[var(--bg-card)]/60 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 pt-1">
                  {renderIcon(card.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-main)] mb-1">{card.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{card.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowMeMore; 