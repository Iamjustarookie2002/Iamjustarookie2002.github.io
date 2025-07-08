import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 border-t border-[var(--border-main)] footer-section-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="h-6 w-6 text-[var(--primary)]" />
            <span className="text-[var(--text-main)] font-semibold">Rishikesh Kudikala</span>
          </div>
          
          <div className="flex items-center space-x-2 text-[var(--text-secondary)]">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>and lots of</span>
            <Code className="h-4 w-4 text-[var(--primary)]" />
            <span>© 2024 All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;