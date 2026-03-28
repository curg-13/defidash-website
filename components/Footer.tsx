import React from 'react';

export const Footer: React.FC = () => (
  <footer className="py-12 border-t border-zinc-900 bg-background text-zinc-500 text-sm">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <span className="font-bold text-zinc-200">CURG'13</span> © {new Date().getFullYear()}. All rights reserved.
      </div>
      <div className="flex space-x-6">
        <a href="https://github.com/curg-13" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors">Github</a>
        <a href="https://x.com/defidashteam" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors">Twitter</a>
        <a href="https://defi-dash-curg.vercel.app/strategy" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors">Dashboard</a>
      </div>
    </div>
  </footer>
);