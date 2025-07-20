import React from 'react';
import { Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 border-t border-[var(--border-main)] footer-section-bg">
      <div className="container mx-auto max-w-6xl pr-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="h-6 w-6 text-[var(--primary)]" />
            <span className="text-[var(--text-main)] font-semibold">Rishikesh Kudikala</span>
          </div>
          
          <div className="flex items-center space-x-2 text-[var(--text-secondary)] md:ml-auto md:mr-0 md:pr-0" style={{ marginLeft: 'auto', marginRight: '0' }}>
            <span>No coffee was harmed in the making of this. New things brewing soon!</span>
            {/* <Code className="h-4 w-4 text-[var(--primary)]" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;