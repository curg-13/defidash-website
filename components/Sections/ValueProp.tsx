import React from "react";
import { Card } from "../ui/Card";
import {
  TrendingUp,
  Zap,
  ShieldCheck,
  Scale,
  MousePointer2,
  AlertTriangle,
  Search,
} from "lucide-react";

export const ValueProp: React.FC = () => {
  return (
    <section className="py-24 border-b border-zinc-900 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why DefiDash?
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl">
            Users face fragmented protocols, manual looping, and no unified
            position management. DefiDash solves all three.
          </p>
        </div>

        {/* Problem → Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
            <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Flash Loan Leverage
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Build <strong>2x-4x leveraged positions</strong> in a single
              atomic PTB transaction. No manual deposit-borrow-swap loops
              required.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
            <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 mb-6">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Best Route Finder
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Automatically compares LTV & APY across Suilend, Navi, and Scallop
              to recommend <strong>Best Max Leverage</strong> or{" "}
              <strong>Best Net APY</strong>.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
            <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Unified Dashboard
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Monitor Health Factor, LTV, and APY across{" "}
              <strong>all 3 protocols</strong> in one view. Real-time position
              tracking keeps you safe.
            </p>
          </div>
        </div>

        {/* Aggregator Benefits & Atomic Execution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <Card className="bg-zinc-900/50 border-zinc-800 p-8 h-full">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Scale className="w-6 h-6 mr-3 text-yellow-500" />
              Why an Aggregator?
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-2">
                  Protocol Fragmentation Solved
                </h4>
                <p className="text-zinc-400 text-sm">
                  Sui has great DeFi protocols (Suilend, Navi, Scallop) but they
                  are <strong>fragmented</strong>. Same asset, different LTV,
                  APY, and features. DefiDash unifies them into one optimized
                  engine.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  Atomic Execution via Sui PTB
                </h4>
                <p className="text-zinc-400 text-sm">
                  Flash Loan → Swap → Deposit → Borrow → Repay — all in a{" "}
                  <strong>single Programmable Transaction Block</strong>.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-500">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>{" "}
                    Zero Execution Risk (All or Nothing)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>{" "}
                    Minimal Gas & Slippage
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>{" "}
                    No other L1 offers this native composability
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Visual Comparison: Manual vs DefiDash */}
          <div className="flex flex-col gap-4">
            <div className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl p-6 opacity-60">
              <div className="flex items-center gap-2 mb-4 text-zinc-500">
                <MousePointer2 className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-wider">
                  Manual Looping (5-6 Txs)
                </span>
              </div>
              <div className="flex justify-between items-center text-zinc-600 text-sm font-mono">
                <span>Deposit</span>
                <span>Borrow</span>
                <span>Swap</span>
                <span>Deposit</span>
                <span>Borrow...</span>
              </div>
              <div className="mt-4 h-1 w-full bg-zinc-800 rounded overflow-hidden">
                <div className="h-full w-1/4 bg-red-900/50"></div>
              </div>
              <p className="mt-2 text-xs text-red-900/50 font-mono">
                High slippage, gas costs, execution risk
              </p>
            </div>

            <div className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3">
                <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
              </div>
              <div className="flex items-center gap-2 mb-4 text-white">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="font-mono text-xs uppercase tracking-wider">
                  DefiDash — Single PTB
                </span>
              </div>
              <div className="p-3 bg-zinc-800 rounded font-mono text-green-400 text-sm text-center border border-green-900/30 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                [FlashLoan &rarr; Swap &rarr; Deposit &rarr; Borrow &rarr;
                Repay]
              </div>
              <p className="mt-4 text-xs text-zinc-400 text-center">
                One click. One transaction. Leveraged position complete.
              </p>
            </div>
          </div>
        </div>

        {/* Supported Assets Table */}
        <div className="border-t border-zinc-900 pt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Supported Protocols & Assets
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
                <div className="p-6 border-b border-zinc-800 bg-zinc-950/50">
                  <h4 className="font-bold text-white">Protocol Coverage</h4>
                  <p className="text-sm text-zinc-500">
                    Collateral & borrow assets across integrated protocols
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-zinc-500 uppercase bg-zinc-950/30">
                      <tr>
                        <th className="px-6 py-3">Protocol</th>
                        <th className="px-6 py-3">Collateral</th>
                        <th className="px-6 py-3">Borrow</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                      <tr className="bg-zinc-900/50">
                        <td className="px-6 py-4 font-medium text-white">
                          Navi
                        </td>
                        <td className="px-6 py-4 text-zinc-300">
                          SUI, XBTC, LBTC
                        </td>
                        <td className="px-6 py-4 text-zinc-400">USDC</td>
                      </tr>
                      <tr className="bg-zinc-900/30">
                        <td className="px-6 py-4 font-medium text-white">
                          Suilend
                        </td>
                        <td className="px-6 py-4 text-zinc-300">
                          SUI, XBTC, LBTC
                        </td>
                        <td className="px-6 py-4 text-zinc-400">USDC</td>
                      </tr>
                      <tr className="bg-zinc-900/50">
                        <td className="px-6 py-4 font-medium text-white">
                          Scallop
                        </td>
                        <td className="px-6 py-4 text-zinc-300">SUI, XBTC</td>
                        <td className="px-6 py-4 text-zinc-400">USDC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            <div>
              <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800 mb-6">
                <p className="text-zinc-400 text-sm mb-2 font-mono">
                  Leverage Formula
                </p>
                <p className="text-2xl text-white font-mono">
                  Max Leverage = 1 / (1 - LTV)
                </p>
                <p className="text-sm text-zinc-500 mt-2">
                  Scallop 75% LTV → <strong>4.0x</strong> | Navi 67% →{" "}
                  <strong>3.0x</strong> | Suilend 60% →{" "}
                  <strong>2.5x</strong>
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  Route Optimization
                </h4>
                <div className="p-4 bg-blue-900/10 border border-blue-900/30 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-blue-400 font-semibold text-sm">
                      Best Max Leverage
                    </span>
                    <span className="text-blue-400 font-mono">
                      Scallop (4.0x)
                    </span>
                  </div>
                  <p className="text-xs text-blue-300/70">
                    Highest LTV = maximum leverage multiplier.
                  </p>
                </div>
                <div className="p-4 bg-green-900/10 border border-green-900/30 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-green-400 font-semibold text-sm">
                      Best Net APY
                    </span>
                    <span className="text-green-400 font-mono">
                      Suilend (+3.5%)
                    </span>
                  </div>
                  <p className="text-xs text-green-300/70">
                    Supply APY - Borrow APR + incentives = lowest cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
