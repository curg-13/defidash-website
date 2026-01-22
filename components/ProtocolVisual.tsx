import React from 'react';
import { Repeat, Zap, Layers, Landmark } from 'lucide-react';
import { Card } from './ui/Card';

export const ProtocolVisual: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent -translate-y-1/2 hidden md:block"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
          {/* Step 1: Flashloan */}
          <Card className="bg-zinc-900/50 backdrop-blur border-zinc-800 p-6 flex flex-col items-center text-center group hover:border-zinc-600 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-lg mb-2">1. Flash Loan</h4>
            <p className="text-xs text-muted-foreground">Borrow USDC from <strong>Scallop</strong> instantly with zero upfront collateral.</p>
          </Card>

          {/* Step 2: Swap */}
          <Card className="bg-zinc-900/50 backdrop-blur border-zinc-800 p-6 flex flex-col items-center text-center group hover:border-zinc-600 transition-all duration-300">
             <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform">
              <Repeat className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-lg mb-2">2. Swap</h4>
            <p className="text-xs text-muted-foreground">Convert USDC to collateral (SUI/LBTC) via <strong>7k Aggregator</strong>.</p>
          </Card>

          {/* Step 3: Lending */}
          <Card className="bg-zinc-900/50 backdrop-blur border-zinc-800 p-6 flex flex-col items-center text-center group hover:border-zinc-600 transition-all duration-300">
             <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4 text-green-400 group-hover:scale-110 transition-transform">
              <Landmark className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-lg mb-2">3. Lending</h4>
            <p className="text-xs text-muted-foreground">Deposit to <strong>Suilend / Navi</strong>. Borrow against it to repay the flash loan.</p>
          </Card>

          {/* Step 4: Position */}
          <Card className="bg-zinc-900/50 backdrop-blur border-zinc-800 p-6 flex flex-col items-center text-center group hover:border-zinc-600 transition-all duration-300">
             <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4 text-orange-400 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-lg mb-2">4. Single PTB</h4>
            <p className="text-xs text-muted-foreground">All executed atomically in one Programmable Transaction Block.</p>
          </Card>
        </div>
      </div>
    </div>
  );
};