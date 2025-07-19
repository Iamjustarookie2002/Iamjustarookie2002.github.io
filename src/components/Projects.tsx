import React, { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  image: string;
  link?: string;
}

interface ProjectsData {
  description: string;
  projects: Project[];
}

const Projects: React.FC = () => {
  const [projectsData, setProjectsData] = useState<ProjectsData | null>(null);

  useEffect(() => {
    fetch('/data/projects.json')
      .then((res) => res.json())
      .then((data) => setProjectsData(data));
  }, []);

  if (!projectsData) return null;

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-4"></div>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            {projectsData.description}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.projects.map((project, index) => (
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