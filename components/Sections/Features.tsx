import React from 'react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 border-b border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                <h2 className="text-3xl font-bold mb-4">Development Principle</h2>
                <p className="text-zinc-400 mb-6">
                    Adhering to strict modular architecture. Our agents isolate concerns between flashloans, swapping logic, and position health monitoring, ensuring robust security and upgradability.
                </p>
                <ul className="space-y-2 text-zinc-300">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span> Modular PTB Construction</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span> Isolated Risk Engines</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span> Real-time On-chain Indexing</li>
                </ul>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg font-mono text-xs text-zinc-400">
                    <div className="flex items-center space-x-2 border-b border-zinc-800 pb-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                        <span className="ml-2">agent_config.json</span>
                    </div>
                    <p><span className="text-purple-400">"agent_id"</span>: <span className="text-green-400">"flashloan_optimizer"</span>,</p>
                    <p><span className="text-purple-400">"target_protocol"</span>: <span className="text-green-400">"scallop"</span>,</p>
                    <p><span className="text-purple-400">"max_slippage"</span>: <span className="text-orange-400">0.05</span>,</p>
                    <p><span className="text-purple-400">"health_threshold"</span>: <span className="text-orange-400">1.15</span>,</p>
                    <p className="mt-2 text-zinc-600">// Optimizing execution path...</p>
                </div>
            </div>
        </div>
    </section>
  );
};