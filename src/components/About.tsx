import React, { useEffect, useState } from 'react';
import { GraduationCap, Briefcase, Code } from 'lucide-react';

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
  summary: string;
  education: Education[];
  experience: Experience[];
}

const About: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch('/data/about.json')
      .then((res) => res.json())
      .then((data) => setAboutData(data));
  }, []);

  if (!aboutData) return null;

  return (
    <section id="about" className="py-20 px-6 about-section-bg mt-5">
      <div className="container mx-auto max-w-6xl flex flex-col gap-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">About Me</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto"></div>
        </div>

        {/* In short card */}
        <div className="rounded-2xl p-8 border border-[var(--primary)] bg-[var(--bg-card)]/60 shadow-lg mb-6 text-center">
          <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">In short...</h3>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">{aboutData.summary}</p>
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
                  <GraduationCap className="h-5 w-5 text-[var(--primary)] mr-2" />
                  <h4 className="text-lg font-semibold text-[var(--text-main)]">{edu.degree}</h4>
                </div>
                <div className="text-[var(--text-secondary)] text-sm mb-2">{edu.school}</div>
                <div className="text-xs text-[var(--text-secondary)]/60 mb-2">{edu.location} • {edu.duration}</div>
                <ul className="list-disc pl-5 text-[var(--text-secondary)] text-xs space-y-1">
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
                  <Code className="h-5 w-5 text-[var(--primary)] mr-2" />
                  <h4 className="text-lg font-semibold text-[var(--text-main)]">{exp.title}</h4>
                </div>
                <div className="text-[var(--text-secondary)] text-sm mb-2">{exp.company}</div>
                <div className="text-xs text-[var(--text-secondary)]/60 mb-2">{exp.location} • {exp.duration}</div>
                <p className="text-[var(--text-secondary)] text-xs mb-3">{exp.description}</p>
                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-[var(--bg-card)]/40 text-[var(--primary)] text-xs border border-[var(--primary)]">{tech}</span>
                    ))}
                  </div>
                )}
                {exp.details.length > 0 && (
                  <ul className="list-disc pl-5 text-[var(--text-secondary)] text-xs space-y-1">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;