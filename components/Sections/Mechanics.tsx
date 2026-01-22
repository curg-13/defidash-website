import React from 'react';
import { ProtocolVisual } from '../ProtocolVisual';
import { Card, CardTitle, CardContent } from '../ui/Card';
import { Cpu, Network, Activity, Settings } from 'lucide-react';

export const Mechanics: React.FC = () => {
  return (
    <section id="protocol" className="py-24 border-b border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 backdrop-blur-sm mb-4">
            <Settings className="w-4 h-4 mr-2" />
            DefiDash SDK Architecture
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Modular Composition</h2>
          <p className="text-zinc-400 text-lg max-w-3xl">
            DefiDash SDK is a <strong>DeFi Saver-like toolkit</strong> for the Sui blockchain. 
            It isolates concerns between flashloans, swapping logic, and lending protocols, allowing for a fully modular and composable system.
          </p>
        </div>

        <div className="mb-24">
            <ProtocolVisual />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
            <CardContent className="p-8">
              <Cpu className="w-10 h-10 text-zinc-100 mb-6" />
              <CardTitle className="mb-3">Flash Loan Module</CardTitle>
              <p className="text-zinc-400 leading-relaxed">
                Plug-and-play integration with <strong>Scallop</strong>. Borrow liquidity instantly to kickstart the leverage loop without requiring initial capital for the swap.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
            <CardContent className="p-8">
              <Network className="w-10 h-10 text-zinc-100 mb-6" />
              <CardTitle className="mb-3">Swap Aggregator</CardTitle>
              <p className="text-zinc-400 leading-relaxed">
                Connects to <strong>7k Aggregator</strong> to find the optimal route. This component can be swapped out for Cetus or Aftermath depending on liquidity conditions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
             <CardContent className="p-8">
              <Activity className="w-10 h-10 text-zinc-100 mb-6" />
              <CardTitle className="mb-3">Lending & Monitor</CardTitle>
              <p className="text-zinc-400 leading-relaxed">
                Deposits into <strong>Suilend or Navi</strong> based on user preference or APY optimization. Includes a real-time Health Factor monitor to prevent liquidation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};