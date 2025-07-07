import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Anime: React.FC = () => (
  <section id="anime" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden anime-section-bg">
    <div className="absolute inset-0 anime-section-bg"></div>
    <div className="relative z-10 text-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 lobster-font">
        Rishikesh Kudikala
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Full-Stack Developer & Creative Problem Solver
      </p>
      <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        Passionate about creating beautiful, functional web applications that make a difference.
        I specialize in modern JavaScript frameworks and love turning complex problems into simple, elegant solutions.
      </p>
      <div className="flex justify-center space-x-6 mb-12">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
          className="p-3 card-blur rounded-full global-hover-bg transition-all">
          <Github className="h-6 w-6 text-white" />
        </a>
        <a href="https://www.linkedin.com/in/rishikesh-kudikala" target="_blank" rel="noopener noreferrer"
          className="p-3 card-blur rounded-full global-hover-bg transition-all">
          <Linkedin className="h-6 w-6 text-white" />
        </a>
        <a href="mailto:rishikesh@example.com"
          className="p-3 card-blur rounded-full global-hover-bg transition-all">
          <Mail className="h-6 w-6 text-white" />
        </a>
      </div>
    </div>
    {/* Animated background elements */}
    <div className="absolute top-1/4 left-1/4 w-64 h-64 anime-bg-purple-pulse rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 anime-bg-pink-pulse rounded-full blur-3xl animate-pulse delay-1000"></div>
  </section>
);

export default Anime;