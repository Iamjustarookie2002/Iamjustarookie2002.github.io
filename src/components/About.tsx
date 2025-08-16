import React, { useEffect, useState } from 'react';
import { School, Briefcase, Code, GraduationCap } from 'lucide-react';

interface Education {
  degree: string;
  school: string;
  location: string;
  duration: string;
  details: string[];
}

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
  details: string[];
}

interface AboutData {
  guide: string;
  guide2: string;
  entertainment: string;
  art: string;
  music: string;
  travel: string;
  other: string;
  education: Education[];
  experience: Experience[];
  quotes: string[];
}

const About: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  useEffect(() => {
    fetch('/data/about.json')
      .then((res) => res.json())
      .then((data) => setAboutData(data));
  }, []);
  useEffect(() => {
    if (!aboutData?.quotes || aboutData.quotes.length === 0) return;
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % aboutData.quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [aboutData]);

  if (!aboutData) return null;

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl flex flex-col gap-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">About Me</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto"></div>
        </div>

        {/* In short card */}
        <div className="rounded-2xl p-8 border border-[var(--primary)] bg-[var(--bg-card)]/60 shadow-lg mb-6">
          <h3 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">In short...</h3>
          
          {/* Personal attributes as text lines */}
          <div className="mb-6 text-center">
            <p className="text-[var(--text-secondary)] text-lg max-w-5xl mx-auto">
              {aboutData.entertainment} {aboutData.art} {aboutData.music} {aboutData.travel} {aboutData.other}
            </p>
          </div>

          {/* Guide */}
          <div className="mb-4 text-center">
            <p className="text-[var(--text-secondary)] text-lg max-w-5xl mx-auto">{aboutData.guide}</p>
          </div>

          {/* Guide 2 */}
          {aboutData.guide2 && (
            <div className="mb-16 text-center">
              <p className="text-[var(--text-secondary)] text-lg max-w-5xl mx-auto">{aboutData.guide2}</p>
            </div>
          )}

          {/* Quotes */}
          {aboutData.quotes && aboutData.quotes.length > 0 && (
            <div className="text-center">
              <div className="text-[var(--primary)] italic text-base min-h-[32px] transition-opacity duration-500">
                {aboutData.quotes[quoteIndex]}
              </div>
            </div>
          )}
        </div>

        {/* Education Section */}
        <div id="education-card" className="rounded-2xl p-8 border border-black bg-[var(--bg-card)]/30">
          <div className="flex items-center mb-6">
            <GraduationCap className="h-8 w-8 text-[var(--primary)] mr-3" />
            <h3 className="text-2xl font-bold text-[var(--text-main)]">Education</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutData.education.map((edu, idx) => (
              <div key={idx} className="bg-[var(--bg-card)]/40 rounded-xl p-6 border border-[var(--border-main)]/50">
                <div className="flex items-center mb-3">
                  <School className="h-6 w-6 text-[var(--primary)] mr-3" />
                  <h4 className="text-xl font-semibold text-[var(--text-main)]">{edu.degree}</h4>
                </div>
                <div className="text-[var(--text-secondary)] text-base mb-2">{edu.school}</div>
                <div className="flex justify-between items-center text-sm text-[var(--text-secondary)]/60 mb-3">
                  <div>{edu.location}</div>
                  <div>{edu.duration}</div>
                </div>
                <ul className="list-disc pl-5 text-[var(--text-secondary)] text-sm space-y-1">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div id="experience-card" className="rounded-2xl p-8 border border-black bg-[var(--bg-card)]/30">
          <div className="flex items-center mb-6">
            <Briefcase className="h-8 w-8 text-[var(--primary)] mr-3" />
            <h3 className="text-2xl font-bold text-[var(--text-main)]">Experience</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutData.experience.map((exp, idx) => (
              <div key={idx} className="bg-[var(--bg-card)]/40 rounded-xl p-6 border border-[var(--border-main)]/50">
                <div className="flex items-center mb-3">
                  <Code className="h-6 w-6 text-[var(--primary)] mr-3" />
                  <h4 className="text-xl font-semibold text-[var(--text-main)]">{exp.title}</h4>
                </div>
                <div className="text-[var(--text-secondary)] text-base mb-2">{exp.company}</div>
                <div className="flex justify-between items-center text-sm text-[var(--text-secondary)]/60 mb-3">
                  <div>{exp.location}</div>
                  <div>{exp.duration}</div>
                </div>
                <ul className="list-disc pl-5 text-[var(--text-secondary)] text-sm space-y-1 mb-4">
                  {exp.description.split('. ').filter(sentence => sentence.trim()).map((sentence, i) => (
                    <li key={i}>{sentence.trim()}</li>
                  ))}
                </ul>
                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded bg-[var(--bg-card)]/40 text-[var(--primary)] text-sm border border-[var(--primary)]">{tech}</span>
                    ))}
                  </div>
                )}
                <ul className="list-disc pl-5 text-[var(--text-secondary)] text-sm space-y-1">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;