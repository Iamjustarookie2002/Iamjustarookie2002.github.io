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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-4">Projects</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-2"></div>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            {projectsData.description}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsData.projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-lg border border-[var(--primary)] bg-[var(--bg-card)]/60 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 p-4 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 text-[var(--primary)] text-xs rounded border border-[var(--primary)] bg-[var(--bg-card)]/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-2 mt-2">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 px-3 py-1 rounded global-hover-btn text-[var(--text-main)] text-xs transition-colors border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--bg-main)]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 px-3 py-1 rounded global-hover-btn text-[var(--text-main)] text-xs transition-colors border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--bg-main)]"
                  >
                    <Github className="h-4 w-4 text-[var(--primary)]" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;