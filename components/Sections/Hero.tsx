import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 px-6 max-w-7xl mx-auto border-x border-dashed border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            DefiDash SDK Live on Devnet
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
            Smart Portfolio <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
              Dashboard & Tooling.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed">
            A <strong>DeFi Saver-like toolkit</strong> for Sui. Abstract complex multi-protocol interactions into simple atomic function calls. Manage your positions with ease.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://defi-dash-curg.vercel.app/strategy" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-base px-8 h-12">
                Launch Dashboard <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Button variant="outline" size="lg" className="text-base px-8 h-12 bg-transparent">
              View SDK Docs
            </Button>
          </div>
        </div>

        {/* Decorative Grid / Visual */}
        <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl border border-zinc-800 bg-zinc-950/50 overflow-hidden flex items-center justify-center">
            {/* Abstract UI Representation */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="relative z-10 p-8 w-3/4 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl">
                <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                      <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                      <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="h-3 w-20 bg-zinc-800 rounded-full"></div>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs text-zinc-500 uppercase font-mono mb-2">
                      <span>Transaction Preview</span>
                      <span className="text-green-500">Atomic PTB</span>
                    </div>
                    <div className="h-10 w-full bg-zinc-800/30 border border-zinc-800 rounded flex items-center px-4 justify-between">
                        <span className="text-xs text-zinc-400">1. Flash Loan</span>
                        <span className="text-xs text-zinc-300 font-mono">Scallop</span>
                    </div>
                    <div className="h-10 w-full bg-zinc-800/30 border border-zinc-800 rounded flex items-center px-4 justify-between">
                        <span className="text-xs text-zinc-400">2. Swap Aggregator</span>
                        <span className="text-xs text-zinc-300 font-mono">7k Protocol</span>
                    </div>
                    <div className="h-10 w-full bg-zinc-800/30 border border-zinc-800 rounded flex items-center px-4 justify-between">
                        <span className="text-xs text-zinc-400">3. Deposit & Borrow</span>
                        <span className="text-xs text-zinc-300 font-mono">Navi / Suilend</span>
                    </div>
                    <div className="h-12 w-full bg-white text-black rounded font-bold flex items-center justify-center text-sm mt-4 hover:bg-zinc-200 cursor-pointer transition-colors">
                        Execute Strategy
                    </div>
                </div>
            </div>
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};