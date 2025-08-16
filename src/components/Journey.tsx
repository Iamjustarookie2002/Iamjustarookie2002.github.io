import React, { useRef, useState, useEffect } from 'react';
import { GraduationCap, Award, Code } from 'lucide-react';

interface JourneyProps {
  onJourneyNodeClick?: (id: string) => void;
  onGoBack?: () => void;
}

interface TimelineItem {
  year: string;
  type: string;
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  iconType: string;
  highlights?: string[];
  description?: string;
  technologies?: string[];
  id: string;
}

interface JourneyData {
  timeline: TimelineItem[];
}

const Journey: React.FC<JourneyProps> = ({ onJourneyNodeClick, onGoBack }) => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);

  useEffect(() => {
    fetch('/data/journey.json')
      .then((res) => res.json())
      .then((data: JourneyData) => setTimelineData(data.timeline));
  }, []);

  // Icon mapping function
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'GraduationCap':
        return <GraduationCap className="h-6 w-6" />;
      case 'Award':
        return <Award className="h-6 w-6" />;
      case 'Code':
        return <Code className="h-6 w-6" />;
      default:
        return <Award className="h-6 w-6" />;
    }
  };

  // State for pill
  const [hovered, setHovered] = useState<null | { item: TimelineItem; x: number; y: number }>(null);
  const timelineRowRef = useRef<HTMLDivElement>(null);

  if (timelineData.length === 0) return null;

  return (
    <section id="journey" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 mt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"> My <span className='blue-text-white-strike font-normal'>Exhausting</span> <span className="text-4xl md:text-5xl font-normal mb-4">Exciting Journey</span></h1>
          <div className="w-24 h-1 bg-[var(--text-main)] mx-auto"></div>
        </div>
        {/* Horizontal Timeline */}
        <div className="relative mt-52">
          {/* Timeline line */}
          <div className="absolute left-8 right-8 top-1/2 transform -translate-y-1/2 h-1 bg-[var(--text-main)]"></div>
          {/* Start and end years */}
          <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-xs text-[var(--text-main)] font-bold select-none">2000</span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-xs text-[var(--text-main)] font-bold select-none">2070</span>
          {/* Timeline items */}
          <div className="relative flex justify-start items-center gap-x-[42px] py-8 pl-16" ref={timelineRowRef}>
            {(() => {
              return timelineData.slice().reverse().map((item, index) => (
                <div key={index} className={`relative flex flex-col items-center${index > 0 ? ' ml-[45px]' : ''}`}>
                  {/* Timeline marker (just a dot on the line) */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-[var(--text-main)] border-2 border-[var(--border-main)]"></div>
                    <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 text-xs text-[var(--text-main)] font-bold select-none whitespace-nowrap">{item.year}</span>
                  </div>
                  {/* Icon card and vertical connector line, stepped above the line */}
                  <div className="absolute left-1/2 flex flex-col items-center" style={{ bottom: `calc(100% + ${0}px)`, transform: 'translateX(-50%)' }}>
                    <button
                      className="bg-white rounded-full shadow-lg p-[0.1rem] border border-[var(--border-main)] text-black flex items-center gap-3 group focus:outline-none relative"
                      onClick={() => {
                        if (item.year === '2002' || item.id === 'school-days' || item.id === 'high-school-graduate') return;
                        const targetId = item.type === 'education' ? 'education-card' : 'experience-card';
                        const el = document.getElementById(targetId);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                        if (onJourneyNodeClick) onJourneyNodeClick(targetId);
                      }}
                      onMouseEnter={e => {
                        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                        const parentRect = timelineRowRef.current?.getBoundingClientRect();
                        setHovered({
                          item,
                          x: rect.right - (parentRect?.left || 0) + 12, // 12px gap
                          y: rect.top - (parentRect?.top || 0) + rect.height / 2,
                        });
                      }}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div className="w-[42px] h-[42px] rounded-full bg-black flex items-center justify-center">
                        {React.cloneElement(getIcon(item.iconType), { className: 'h-6 w-6 text-white' })}
                      </div>
                    </button>
                    {/* Vertical connector line: from icon to dot */}
                    <div className="w-0.5 bg-[var(--text-main)]" style={{ height: `${25 + index * 20}px` }}></div>
                  </div>
                </div>
              ));
            })()}
          </div>
          {/* Pill rendered globally at the end of the timeline row */}
          {hovered && (
            <div
              className="absolute z-[9999] bg-white rounded-lg shadow-lg border border-[var(--border-main)] px-4 py-3 min-w-[250px] max-w-[300px] transition-all duration-200"
              style={{ left: hovered.x, top: hovered.y, transform: 'translateY(-50%)' }}
              onMouseLeave={() => setHovered(null)}
              onMouseEnter={() => setHovered(hovered)}
            >
              <div className="flex flex-col">
                <span className="font-semibold text-black text-sm mb-1">{hovered.item.title.replace(/^[^a-zA-Z0-9]+/, '')}</span>
                <span className="text-xs text-gray-600 mb-2">{hovered.item.subtitle}</span>
                <span className="text-xs text-gray-500 mb-2">{hovered.item.duration || hovered.item.year}</span>
                {hovered.item.highlights && hovered.item.highlights.length > 0 && (
                  <div className="text-xs text-gray-700">
                    <div className="font-medium mb-1">Highlights:</div>
                    <ul className="list-disc pl-3 space-y-0.5">
                      {hovered.item.highlights.slice(0, 2).map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                    {hovered.item.highlights.length > 2 && (
                      <div className="text-gray-500 mt-1">+{hovered.item.highlights.length - 2} more...</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
          {/* Timeline end marker */}
          <div className="absolute right-3 bottom-1/2 flex flex-col items-center" style={{ transform: 'translateY(+7%)' }}>
            {/* Round icon above */}
            <div className="bg-white rounded-full shadow-lg p-[0.1rem] border border-[var(--border-main)] text-black flex items-center justify-center relative mb-0 group" style={{ zIndex: 11 }}>
              <div className="w-[42px] h-[42px] rounded-full bg-black flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              {/* Pill on hover for end icon */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-3/4 ml-2 hidden group-hover:flex items-center bg-white rounded-full shadow-lg border border-[var(--border-main)] px-4 py-2 min-w-[180px] transition-all duration-200 z-[9999]">
                <span className="font-semibold text-black text-sm whitespace-nowrap">Lets c If I live till then</span>
              </div>
            </div>
            {/* Vertical connector line (now extends up) */}
            <div className="w-0.5 bg-[var(--text-main)] -mb-2" style={{ height: '50px' }}></div>
            {/* Dot on the line */}
            <div className="w-4 h-4 rounded-full bg-[var(--text-main)] border-2 border-[var(--border-main)] z-10"></div>
          </div>
        </div>
        
        {/* Back to Intro Button */}
        {onGoBack && (
          <div className="flex justify-center mt-16">
            <button
              onClick={onGoBack}
              className="text-[var(--primary)] hover:text-white font-semibold text-lg transition-colors duration-300 hover:scale-105 transform flex items-center gap-2"
            >
              ← Back to Intro
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Journey; 