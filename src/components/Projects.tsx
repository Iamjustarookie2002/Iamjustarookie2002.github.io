import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "SereneScreen - Mental Health AI",
      description: "Gen AI-based app using RAG (Retrieval-Augmented Generation) for mental health pre-assessments. Integrated FAISS and deployed Mistral LLM locally. Because sometimes you need AI to understand human emotions!",
      technologies: ["Python", "Streamlit", "FAISS", "Mistral LLM", "Salesforce Blip", "Tesseract OCR"],
      github: "https://github.com",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "SportTalk - Live Sports Chat",
      description: "Web chat application for live sports matches with dynamic chat rooms. Fans can join, access live scores, and support their teams. Also includes private chat rooms for those who can't handle the public drama!",
      technologies: ["HTML", "CSS", "JavaScript", "MongoDB", "Node.js", "Socket.IO", "Express.js"],
      github: "https://github.com",
      image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Portfolio Website",
      description: "This very portfolio you're looking at! Built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark theme, and a journey timeline that tells my story with humor.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Backend CLI Tools",
      description: "Developed CLI tools using Cobra framework during my internship at NimbleEdge. Reduced latency by 12% by decoupling Azure and AWS services. Learned that production code is like cooking - everyone has an opinion!",
      technologies: ["Golang", "Gin Framework", "Cobra", "Docker", "Kubernetes", "GRPC"],
      github: "https://github.com",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Optimization Techniques Teaching",
      description: "Served as Undergraduate Teaching Assistant for Optimization Techniques at IIT Roorkee. Mentored 20 students and survived their endless questions. Because teaching is the best way to learn!",
      technologies: ["Python", "Mathematical Optimization", "Teaching", "Mentoring"],
      github: "https://github.com",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Student Mentorship Program",
      description: "Led a mentorship program for 20 students, helping them navigate their academic journey. Became the go-to person for debugging life problems (and code problems).",
      technologies: ["Leadership", "Communication", "Problem Solving", "Coffee"],
      github: "https://github.com",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-4"></div>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group card-blur rounded-2xl overflow-hidden border global-hover-card-border transition-all"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 projects-gradient-overlay"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-[var(--primary)] text-xs rounded-full border border-[var(--primary)] bg-[var(--bg-card)]/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg global-hover-btn text-[var(--text-main)] text-sm transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg global-hover-btn text-[var(--text-main)] text-sm transition-colors border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--bg-main)]"
                    >
                      <Github className="h-4 w-4 text-[var(--primary)]" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;