import React, { useRef, useState } from 'react';
import { GraduationCap, Award, Code } from 'lucide-react';

interface JourneyProps {
  onJourneyNodeClick?: (id: string) => void;
  onGoBack?: () => void;
}

const Journey: React.FC<JourneyProps> = ({ onJourneyNodeClick, onGoBack }) => {
  const timelineData = [
    {
      year: "2024",
      type: "education",
      title: "🎓 MS in Computer Science",
      subtitle: "Purdue University - Boiler Up!",
      location: "West Lafayette, Indiana, USA",
      duration: "Aug 2024 - May 2026 (est)",
      icon: <GraduationCap className="h-6 w-6" />,
      highlights: [
        "CGPA: 4.0/4.0 (Perfect score, no pressure!)",
        "Graduate student in Computer Science",
        "Living the American dream (and surviving Midwest winters)",
        "Still figuring out how to pronounce 'Lafayette'"
      ],
      id: "ms-computer-science"
    },
    {
      year: "2024",
      type: "education",
      title: "🎓 B.Tech in Computer Science",
      subtitle: "IIT Roorkee - Where legends are made",
      location: "Roorkee, Uttarakhand, India",
      duration: "Nov 2020 - Jul 2024",
      icon: <Award className="h-6 w-6" />,
      highlights: [
        "GPA: 9.377/10 (Almost perfect, but who's counting?)",
        "Undergraduate Teaching Assistant for Optimization Techniques",
        "Mentored 20 students (and survived their questions)",
        "Part of Geek Gazette and NSO clubs"
      ],
      id: "btech-computer-science"
    },
    {
      year: "2023",
      type: "internship",
      title: "💼 Software Developer Intern",
      subtitle: "NimbleEdge - Backend Wizard",
      location: "Bangalore, India",
      duration: "May 2023 - July 2023",
      icon: <Code className="h-6 w-6" />,
      description: "Worked on backend development using Gin framework (Golang) and crafted CLI tools. Reduced latency by 12% by decoupling Azure and AWS services. Also learned that production code is like cooking - everyone has an opinion!",
      technologies: ["Golang", "Gin Framework", "Cobra", "Docker", "Kubernetes", "GRPC"],
      id: "software-developer-intern"
    },
    {
      year: "2020",
      type: "education",
      title: "🏫 High School Graduate",
      subtitle: "Where the caffeine addiction began",
      location: "India",
      duration: "2018 - 2020",
      icon: <Award className="h-6 w-6" />,
      highlights: [
        "Science stream with Computer Science",
        "Learned that sleep is optional",
        "Started the journey of 'it works on my machine'",
        "Became a professional procrastinator"
      ],
      id: "high-school-graduate"
    },
    {
      year: "2018",
      type: "education",
      title: "📚 School Days",
      subtitle: "The foundation of my nerdiness",
      location: "India",
      duration: "2006 - 2018",
      icon: <GraduationCap className="h-6 w-6" />,
      highlights: [
        "Learned to read, write, and debug life",
        "Discovered that math is actually useful",
        "Started collecting certificates like Pokemon",
        "Became the family's tech support (still am)"
      ],
      id: "school-days"
    },
    {
      year: "2002",
      type: "birth",
      title: "👶 Born into this world",
      subtitle: "The beginning of everything",
      location: "India",
      duration: "2002",
      icon: <Award className="h-6 w-6" />,
      highlights: [
        "Came into this world with a loud cry",
        "Parents probably regretted it immediately",
        "Started the journey of becoming a programmer",
        "Began the lifelong quest for the perfect cup of coffee"
      ],
      id: "born"
    }
  ];

  // State for pill
  const [hovered, setHovered] = useState<null | { item: typeof timelineData[0]; x: number; y: number }>(null);
  const timelineRowRef = useRef<HTMLDivElement>(null);

  return (
    <section id="journey" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 mt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"> My <span className='blue-text-white-strike font-normal'>Exhausting</span> <span className="text-4xl md:text-5xl font-normal mb-4">Exciting Journey</span></h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
        {/* Horizontal Timeline */}
        <div className="relative mt-52">
          {/* Timeline line */}
          <div className="absolute left-8 right-8 top-1/2 transform -translate-y-1/2 h-1 bg-white"></div>
          {/* Start and end years */}
          <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-xs text-white font-bold select-none">2000</span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-xs text-white font-bold select-none">2070</span>
          {/* Timeline items */}
          <div className="relative flex justify-start items-center gap-x-[42px] py-8 pl-16" ref={timelineRowRef}>
            {(() => {
              return timelineData.slice().reverse().map((item, index) => (
                <div key={index} className={`relative flex flex-col items-center${index > 0 ? ' ml-[45px]' : ''}`}>
                  {/* Timeline marker (just a dot on the line) */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-white border-2 border-white"></div>
                    <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 text-xs text-white font-bold select-none whitespace-nowrap">{item.year}</span>
                  </div>
                  {/* Icon card and vertical connector line, stepped above the line */}
                  <div className="absolute left-1/2 flex flex-col items-center" style={{ bottom: `calc(100% + ${0}px)`, transform: 'translateX(-50%)' }}>
                    <button
                      className="bg-white rounded-full shadow-lg p-[0.1rem] border border-white text-black flex items-center gap-3 group focus:outline-none relative"
                      onClick={() => {
                        const el = document.getElementById(item.id || item.title);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                        if (onJourneyNodeClick) onJourneyNodeClick(item.id || item.title);
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
                        {React.cloneElement(item.icon, { className: 'h-6 w-6 text-white' })}
                      </div>
                    </button>
                    {/* Vertical connector line: from icon to dot */}
                    <div className="w-0.5 bg-white" style={{ height: `${25 + index * 20}px` }}></div>
                  </div>
                </div>
              ));
            })()}
          </div>
          {/* Pill rendered globally at the end of the timeline row */}
          {hovered && (
            <div
              className="absolute z-[9999] bg-white rounded-full shadow-lg border border-gray-200 px-4 py-2 min-w-[180px] flex items-center transition-all duration-200"
              style={{ left: hovered.x, top: hovered.y, transform: 'translateY(-50%)' }}
              onMouseLeave={() => setHovered(null)}
              onMouseEnter={() => setHovered(hovered)}
            >
              <div className="flex flex-col mr-4">
                <span className="font-semibold text-black text-sm whitespace-nowrap">{hovered.item.title.replace(/^[^a-zA-Z0-9]+/, '')}</span>
                <span className="text-xs text-gray-500">{hovered.item.duration || hovered.item.year}</span>
              </div>
            </div>
          )}
          {/* Timeline end marker */}
          <div className="absolute right-3 bottom-1/2 flex flex-col items-center" style={{ transform: 'translateY(+7%)' }}>
            {/* Round icon above */}
            <div className="bg-white rounded-full shadow-lg p-[0.1rem] border border-white text-black flex items-center justify-center relative mb-0 group" style={{ zIndex: 11 }}>
              <div className="w-[42px] h-[42px] rounded-full bg-black flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              {/* Pill on hover for end icon */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-3/4 ml-2 hidden group-hover:flex items-center bg-white rounded-full shadow-lg border border-gray-200 px-4 py-2 min-w-[180px] transition-all duration-200 z-[9999]">
                <span className="font-semibold text-black text-sm whitespace-nowrap">Lets c If I live till then</span>
              </div>
            </div>
            {/* Vertical connector line (now extends up) */}
            <div className="w-0.5 bg-white -mb-2" style={{ height: '50px' }}></div>
            {/* Dot on the line */}
            <div className="w-4 h-4 rounded-full bg-white border-2 border-white z-10"></div>
          </div>
        </div>
        
        {/* Back to Intro Button */}
        {onGoBack && (
          <div className="flex justify-center mt-16">
            <button
              onClick={onGoBack}
              className="text-[#7cb6fe] hover:text-white font-semibold text-lg transition-colors duration-300 hover:scale-105 transform flex items-center gap-2"
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