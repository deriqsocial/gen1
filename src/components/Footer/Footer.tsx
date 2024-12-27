import React from 'react';
import { Brain, Linkedin, Twitter, Github } from 'lucide-react';
import FooterLinks from './FooterLinks';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold">GenAI4Africa</span>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering Africa through innovative AI solutions, training, and research.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <FooterLinks />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} GenAI4Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}