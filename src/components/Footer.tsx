import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 border-t border-gray-800 footer-section-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="h-6 w-6 text-purple-400" />
            <span className="text-white font-semibold">Rishikesh Kudikala</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-300">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>and lots of</span>
            <Code className="h-4 w-4 text-purple-400" />
            <span>© 2024 All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;