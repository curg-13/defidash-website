import React from 'react';
import { CheckCircle2, Clock, Circle } from 'lucide-react';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Core SDK & MVP',
    status: 'done' as const,
    items: [
      'Suilend, Navi, Scallop adapter integration',
      'Flash Loan leverage / deleverage',
      'Best route finder (Max Leverage & Net APY)',
      'Multi-protocol position dashboard',
      '7k Aggregator swap integration',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Smart Position Management',
    status: 'in-progress' as const,
    items: [
      'Auto-rebalancing between protocols',
      'Health Factor alerts & notifications',
      'One-click deleverage (emergency exit)',
      'Historical position tracking',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Yield Optimization',
    status: 'upcoming' as const,
    items: [
      'Yield farming aggregation',
      'Auto-compounding strategies',
      'Cross-protocol yield comparison',
      'Advanced strategy builder',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'BTCfi Expansion',
    status: 'upcoming' as const,
    items: [
      'BTC-backed strategy diversification',
      'wBTC, LBTC, XBTC advanced strategies',
      'Cross-chain BTC leverage',
      'Institutional-grade risk management',
    ],
  },
];

const statusConfig = {
  'done': { icon: CheckCircle2, color: 'text-green-400', border: 'border-green-500/30', bg: 'bg-green-500/5', label: 'Completed' },
  'in-progress': { icon: Clock, color: 'text-yellow-400', border: 'border-yellow-500/30', bg: 'bg-yellow-500/5', label: 'In Progress' },
  'upcoming': { icon: Circle, color: 'text-zinc-500', border: 'border-zinc-700', bg: 'bg-zinc-900/30', label: 'Upcoming' },
};

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 border-b border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Roadmap</h2>
          <p className="text-zinc-400 text-lg max-w-3xl">
            From core SDK to a full-featured DeFi management platform on Sui.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase) => {
            const config = statusConfig[phase.status];
            const Icon = config.icon;
            return (
              <div
                key={phase.phase}
                className={`rounded-xl border ${config.border} ${config.bg} p-6 flex flex-col`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono uppercase tracking-wider ${config.color}`}>
                    {phase.phase}
                  </span>
                  <div className={`flex items-center gap-1.5 ${config.color}`}>
                    <Icon className="w-4 h-4" />
                    <span className="text-xs">{config.label}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{phase.title}</h3>
                <ul className="space-y-2 flex-1">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className={`w-1 h-1 rounded-full mt-2 flex-shrink-0 ${
                        phase.status === 'done' ? 'bg-green-500' :
                        phase.status === 'in-progress' ? 'bg-yellow-500' : 'bg-zinc-600'
                      }`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
