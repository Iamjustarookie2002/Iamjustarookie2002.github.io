import React, { useEffect, useState } from 'react';
import { Code, Database, Globe, Smartphone, Cpu, Zap, Layers, Terminal } from 'lucide-react';

interface SkillCategory {
  icon: keyof typeof iconMap;
  title: string;
  skills: string[];
}

interface SkillsData {
  description: string;
  categories: SkillCategory[];
}

const iconMap = {
  Code,
  Database,
  Globe,
  Smartphone,
  Cpu,
  Zap,
  Layers,
  Terminal,
};

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<SkillsData | null>(null);

  useEffect(() => {
    fetch('/data/skills.json')
      .then((res) => res.json())
      .then((data) => setSkillsData(data));
  }, []);

  if (!skillsData) return null;

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-4"></div>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            {skillsData.description}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.categories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <div
                key={index}
                className="card-blur rounded-2xl p-6 border transition-all"
              >
                <div className="flex items-center mb-4">
                  {Icon && (
                    <div className="p-3 rounded-lg text-[var(--primary)] border border-[var(--primary)] mr-4">
                      <Icon className="h-8 w-8" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-[var(--text-main)]">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 rounded-full border border-[var(--primary)] text-[var(--primary)] text-sm transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;