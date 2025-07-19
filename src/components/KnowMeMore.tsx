import React, { useEffect, useState } from 'react';

const KnowMeMore: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    fetch('/data/about.json')
      .then((res) => res.json())
      .then((data) => setHasData(!!data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;
  if (!hasData) return null;

  return (
    <section id="know-me-more" className="py-20 px-6 know-me-more-section-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">Know Me More</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto"></div>
        </div>
        <div className="rounded-2xl p-8 border border-[var(--primary)] bg-[var(--bg-card)]/60 shadow-lg mb-6 text-center">
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="#education-card" className="text-lg text-[var(--primary)] hover:underline font-semibold">Education</a>
            <a href="#experience-card" className="text-lg text-[var(--primary)] hover:underline font-semibold">Experience</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowMeMore; 