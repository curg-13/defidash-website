import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Menu, X, Rocket } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-background/80 backdrop-blur-md border-border' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold rounded-sm">
            C
          </div>
          <span className="font-bold text-lg tracking-tight">CURG'13</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
          <button onClick={() => scrollToSection('protocol')} className="hover:text-foreground transition-colors">Protocol</button>
          <button onClick={() => scrollToSection('features')} className="hover:text-foreground transition-colors">Architecture</button>
          <button onClick={() => scrollToSection('team')} className="hover:text-foreground transition-colors">Team</button>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://defi-dash-curg.vercel.app/strategy" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="font-semibold">
                <Rocket className="w-4 h-4 mr-2" />
                Launch App
              </Button>
            </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-6 flex flex-col space-y-4">
           <button onClick={() => scrollToSection('protocol')} className="text-left py-2 font-medium">Protocol</button>
           <button onClick={() => scrollToSection('features')} className="text-left py-2 font-medium">Architecture</button>
           <button onClick={() => scrollToSection('team')} className="text-left py-2 font-medium">Team</button>
           <a href="https://defi-dash-curg.vercel.app/strategy" target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="w-full">Launch App</Button>
           </a>
        </div>
      )}
    </nav>
  );
};