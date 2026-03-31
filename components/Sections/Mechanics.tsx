import React from 'react';
import { ProtocolVisual } from '../ProtocolVisual';
import { Card, CardTitle, CardContent } from '../ui/Card';
import { Cpu, Network, Activity, Settings, BarChart3 } from 'lucide-react';

export const Mechanics: React.FC = () => {
  return (
    <section id="protocol" className="py-24 border-b border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 backdrop-blur-sm mb-4">
            <Settings className="w-4 h-4 mr-2" />
            How It Works
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Flash Loan Leverage Flow</h2>
          <p className="text-zinc-400 text-lg max-w-3xl">
            6 steps executed as a <strong>single atomic PTB transaction</strong>. Flash Loan provides zero-collateral initial capital,
            7k Aggregator handles optimal swap routing, and your chosen lending protocol manages the leveraged position.
          </p>
        </div>

        <div className="mb-24">
            <ProtocolVisual />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
            <CardContent className="p-8">
              <Cpu className="w-10 h-10 text-zinc-100 mb-6" />
              <CardTitle className="mb-3">Flash Loan</CardTitle>
              <p className="text-zinc-400 leading-relaxed">
                Borrow USDC instantly from <strong>Scallop or Navi</strong> with zero upfront collateral to kickstart the leverage loop.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
            <CardContent className="p-8">
              <Network className="w-10 h-10 text-zinc-100 mb-6" />
              <CardTitle className="mb-3">Swap Aggregator</CardTitle>
              <p className="text-zinc-400 leading-relaxed">
                <strong>7k Aggregator</strong> finds the optimal swap route. Convert USDC to collateral assets (SUI, XBTC, LBTC) with minimal slippage.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
             <CardContent className="p-8">
              <Activity className="w-10 h-10 text-zinc-100 mb-6" />
              <CardTitle className="mb-3">Lending Protocols</CardTitle>
              <p className="text-zinc-400 leading-relaxed">
                Deposit collateral & borrow across <strong>Suilend, Navi, Scallop</strong>. Auto-selected by best LTV or APY optimization.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
             <CardContent className="p-8">
              <BarChart3 className="w-10 h-10 text-zinc-100 mb-6" />
              <CardTitle className="mb-3">Position Monitor</CardTitle>
              <p className="text-zinc-400 leading-relaxed">
                Unified dashboard tracks Health Factor, LTV, and APY across all protocols. <strong>Leverage & deleverage</strong> in one click.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
