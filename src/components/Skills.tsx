import React from 'react';
import { Code, Database, Globe, Smartphone, Cpu, Zap, Layers, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8 text-[var(--primary)]" />,
      title: "Programming Languages",
      skills: ["C", "C++", "Golang", "Python", "Java", "JavaScript", "HTML", "SQL", "Bash", "TypeScript", "CUDA"]
    },
    {
      icon: <Layers className="h-8 w-8 text-[var(--primary)]" />,
      title: "Frameworks & Libraries",
      skills: ["React.js", "React Native", "Node.js", "Express.js", "Gin", "Cobra", "Django", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Matplotlib", "Socket.IO", "Streamlit", "Lex", "Yacc"]
    },
    {
      icon: <Terminal className="h-8 w-8 text-[var(--primary)]" />,
      title: "Tools & Platforms",
      skills: ["Git", "Postman", "Docker", "Kubernetes", "AWS", "Azure", "Visual Studio Code", "Jupyter Notebook", "Google Colab", "Wireshark", "Logisim", "FAISS", "Tesseract OCR", "Salesforce BLIP", "Mistral LLM"]
    },
    {
      icon: <Database className="h-8 w-8 text-[var(--primary)]" />,
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      icon: <Cpu className="h-8 w-8 text-[var(--primary)]" />,
      title: "AI & ML Technologies",
      skills: ["Retrieval-Augmented Generation (RAG)", "OCR", "LLM Deployment", "Image Captioning", "BLEU Score Evaluation", "Machine Learning", "Data Science"]
    },
    {
      icon: <Zap className="h-8 w-8 text-[var(--primary)]" />,
      title: "Development & APIs",
      skills: ["REST APIs", "GRPC", "CLI Tools", "Full Stack Development", "Cache Management"]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-[var(--primary)]" />,
      title: "Core Concepts",
      skills: ["Object-Oriented Programming", "Data Structures", "Algorithms", "Operating Systems", "Compilers", "Computer Networks", "Parallel Computing", "Information Security"]
    },
    {
      icon: <Globe className="h-8 w-8 text-[var(--primary)]" />,
      title: "Specialized Skills",
      skills: ["Custom Programming Languages", "Cache Management", "Full Stack Development"]
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