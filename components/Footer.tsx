import React from 'react';
import { Github } from 'lucide-react';

export const Footer: React.FC = () => (
  <footer className="py-12 border-t border-zinc-900 bg-background text-zinc-500 text-sm">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center gap-3 mb-4 md:mb-0">
        <img src="/defidash-favicon.png" alt="DefiDash" className="w-6 h-6 rounded-sm" />
        <span className="font-bold text-zinc-200">DefiDash Team</span> © {new Date().getFullYear()}. All rights reserved.
      </div>
      <div className="flex items-center space-x-6">
        <a href="https://github.com/curg-13" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors flex items-center gap-1.5">
          <Github className="w-4 h-4" />
          Github
        </a>
        <a href="https://x.com/defidashteam" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors flex items-center gap-1.5">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          X
        </a>
        <a href="https://defidash-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors">Dashboard</a>
      </div>
    </div>
  </footer>
);
