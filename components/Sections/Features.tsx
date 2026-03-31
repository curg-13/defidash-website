import React from 'react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 border-b border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                <h2 className="text-3xl font-bold mb-4">SDK Architecture</h2>
                <p className="text-zinc-400 mb-6">
                    BaseAdapter pattern provides a unified interface across all lending protocols.
                    Each protocol adapter (Suilend, Navi, Scallop) implements the same interface,
                    making the system fully modular and extensible.
                </p>
                <ul className="space-y-2 text-zinc-300">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span> BaseAdapter → Protocol-specific moveCall</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span> Unified deposit / borrow / withdraw / repay</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span> Flash Loan + 7k Swap composable in PTB</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span> getPosition() across all protocols</li>
                </ul>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg font-mono text-xs text-zinc-400">
                    <div className="flex items-center space-x-2 border-b border-zinc-800 pb-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                        <span className="ml-2">sdk/adapters</span>
                    </div>
                    <p><span className="text-purple-400">interface</span> <span className="text-blue-400">BaseAdapter</span> {'{'}</p>
                    <p className="ml-4"><span className="text-green-400">deposit</span>(tx, coin, amount)</p>
                    <p className="ml-4"><span className="text-green-400">borrow</span>(tx, coin, amount)</p>
                    <p className="ml-4"><span className="text-green-400">withdraw</span>(tx, coin, amount)</p>
                    <p className="ml-4"><span className="text-green-400">repay</span>(tx, coin, amount)</p>
                    <p className="ml-4"><span className="text-green-400">getPosition</span>(address)</p>
                    <p className="ml-4"><span className="text-green-400">flashLoan</span>(tx, amount)</p>
                    <p>{'}'}</p>
                    <p className="mt-3 text-zinc-600">// Suilend, Navi, Scallop each implement this</p>
                    <p className="text-zinc-600">// → unified SDK, swap protocols in one line</p>
                </div>
            </div>
        </div>
    </section>
  );
};
