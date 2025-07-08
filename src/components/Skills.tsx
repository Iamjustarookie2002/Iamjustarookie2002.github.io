import React from 'react';
import { Code, Database, Globe, Smartphone, Cloud, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8 text-[var(--primary)]" />,
      title: "Programming Languages",
      skills: ["C", "C++", "Golang", "Java", "JavaScript", "Python", "SQL", "HTML"]
    },
    {
      icon: <Database className="h-8 w-8 text-[var(--primary)]" />,
      title: "Databases & Software",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Docker", "Kubernetes", "AWS", "Azure"]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-[var(--primary)]" />,
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "React Native", "Django", "TensorFlow", "Pandas", "NumPy"]
    },
    {
      icon: <Cloud className="h-8 w-8 text-[var(--primary)]" />,
      title: "Development Tools",
      skills: ["Visual Studio Code", "Git", "Postman", "Jupyter Notebook", "Google Colab", "Wireshark"]
    },
    {
      icon: <Palette className="h-8 w-8 text-[var(--primary)]" />,
      title: "Specialized Skills",
      skills: ["Data Structures", "Algorithms", "Machine Learning", "Information Security", "Parallel Computing"]
    },
    {
      icon: <Globe className="h-8 w-8 text-[var(--primary)]" />,
      title: "Advanced Topics",
      skills: ["Operating Systems", "Computer Networks", "Compilers", "Full Stack Development", "Data Science"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-4"></div>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-blur rounded-2xl p-6 border global-hover-card-border transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg text-[var(--primary)] border border-[var(--primary)] mr-4 global-hover-bg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)]">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 rounded-full border border-[var(--primary)] text-[var(--primary)] text-sm global-hover-bg global-hover-text global-hover-border transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;