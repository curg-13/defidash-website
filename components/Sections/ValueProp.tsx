import React from "react";
import { Card } from "../ui/Card";
import {
  TrendingUp,
  Zap,
  ShieldCheck,
  Scale,
  MousePointer2,
  AlertTriangle,
} from "lucide-react";

export const ValueProp: React.FC = () => {
  return (
    <section className="py-24 border-b border-zinc-900 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why Leverage Lending?
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl">
            Amplify your exposure and earn dual yields. Our aggregator optimizes
            rates and executes complex strategies atomically.
          </p>
        </div>

        {/* 1. Core Value Proposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
            <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Amplify Exposure
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Gain <strong>2x to 3x exposure</strong> to asset price action
              using your initial principal. Instead of simply holding, multiply
              your position.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
            <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 mb-6">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Earn Dual Yields
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Benefit from the underlying Supply APY <strong>plus</strong>{" "}
              additional ecosystem incentives (like SUI rewards) on a much
              larger principal base.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
            <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Unified Management
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Monitor Health Factor and LTV across Scallop, Navi, and Suilend
              from a single dashboard. Real-time alerts keep your positions
              safe.
            </p>
          </div>
        </div>

        {/* 2. Aggregator Benefits & Atomic Execution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <Card className="bg-zinc-900/50 border-zinc-800 p-8 h-full">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-3 text-yellow-500" />
              Why use an Aggregator?
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-2">
                  Real-Time Rate Optimization
                </h4>
                <p className="text-zinc-400 text-sm">
                  We scan all major lending pools to find the lowest borrow
                  rates and highest supply rewards. Ensure your strategy runs on
                  the most profitable protocol without checking multiple
                  dashboards.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  Atomic Execution (Sui PTB)
                </h4>
                <p className="text-zinc-400 text-sm">
                  Execute the entire leverage loop (Deposit → Borrow → Swap →
                  Re-deposit) in a <strong>single transaction</strong>.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-500">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>{" "}
                    Zero Execution Risk (All or Nothing)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>{" "}
                    Significant Gas Savings
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Visual Comparison: Manual vs Aggregator */}
          <div className="flex flex-col gap-4">
            <div className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl p-6 opacity-60">
              <div className="flex items-center gap-2 mb-4 text-zinc-500">
                <MousePointer2 className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-wider">
                  Manual Looping
                </span>
              </div>
              <div className="flex justify-between items-center text-zinc-600 text-sm font-mono">
                <span>Tx 1: Deposit</span>
                <span>Tx 2: Borrow</span>
                <span>Tx 3: Swap</span>
                <span>Tx 4: Deposit...</span>
              </div>
              <div className="mt-4 h-1 w-full bg-zinc-800 rounded overflow-hidden">
                <div className="h-full w-1/4 bg-red-900/50"></div>
              </div>
              <p className="mt-2 text-xs text-red-900/50 font-mono">
                High Risk of Slippage & Gas Costs
              </p>
            </div>

            <div className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3">
                <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
              </div>
              <div className="flex items-center gap-2 mb-4 text-white">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="font-mono text-xs uppercase tracking-wider">
                  DefiDash PTB
                </span>
              </div>
              <div className="p-3 bg-zinc-800 rounded font-mono text-green-400 text-sm text-center border border-green-900/30 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                [FlashLoan &rarr; Swap &rarr; Lending]
              </div>
              <p className="mt-4 text-xs text-zinc-400 text-center">
                Executed in ~800ms. 100% Success Rate.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Mathematics of Leverage */}
        <div className="border-t border-zinc-900 pt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Understanding the Math
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800 mb-6">
                <p className="text-zinc-400 text-sm mb-2 font-mono">
                  Leverage Formula
                </p>
                <p className="text-2xl text-white font-mono">
                  Leverage = 1 / (1 - LTV)
                </p>
                <p className="text-sm text-zinc-500 mt-2">
                  With 60% LTV (0.6), Leverage = 1 / (0.4) ={" "}
                  <strong>2.5x</strong>
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  Risk Management
                </h4>
                <div className="p-4 bg-red-900/10 border border-red-900/30 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-red-400 font-semibold text-sm">
                      Max Leverage (60% LTV)
                    </span>
                    <span className="text-red-400 font-mono">2.5x</span>
                  </div>
                  <p className="text-xs text-red-300/70">
                    High Risk. Small price drops can trigger liquidation.
                  </p>
                </div>
                <div className="p-4 bg-green-900/10 border border-green-900/30 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-green-400 font-semibold text-sm">
                      Safe Leverage (40% LTV)
                    </span>
                    <span className="text-green-400 font-mono">~1.6x</span>
                  </div>
                  <p className="text-xs text-green-300/70">
                    Recommended. Buffer against market volatility.
                  </p>
                </div>
              </div>
            </div>

            {/* Example Table */}
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="p-6 border-b border-zinc-800 bg-zinc-950/50">
                <h4 className="font-bold text-white">
                  Example: 2.5x Leverage Flow
                </h4>
                <p className="text-sm text-zinc-500">
                  Initial Principal: $1,000 LBTC | LTV: 60%
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-zinc-500 uppercase bg-zinc-950/30">
                    <tr>
                      <th className="px-6 py-3">Step</th>
                      <th className="px-6 py-3">Asset (Deposit)</th>
                      <th className="px-6 py-3">Debt (Borrow)</th>
                      <th className="px-6 py-3 text-right">Net Equity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    <tr className="bg-zinc-900/50">
                      <td className="px-6 py-4 font-medium text-white">
                        Initial
                      </td>
                      <td className="px-6 py-4 text-zinc-300">$1,000</td>
                      <td className="px-6 py-4 text-zinc-500">$0</td>
                      <td className="px-6 py-4 text-right text-white">
                        $1,000
                      </td>
                    </tr>
                    <tr className="bg-zinc-900/30">
                      <td className="px-6 py-4 font-medium text-white">
                        Loop 1
                      </td>
                      <td className="px-6 py-4 text-zinc-300">+$600</td>
                      <td className="px-6 py-4 text-zinc-400">$600</td>
                      <td className="px-6 py-4 text-right text-white">
                        $1,000
                      </td>
                    </tr>
                    <tr className="bg-zinc-900/50">
                      <td className="px-6 py-4 font-medium text-white">
                        Loop 2
                      </td>
                      <td className="px-6 py-4 text-zinc-300">+$360</td>
                      <td className="px-6 py-4 text-zinc-400">$960</td>
                      <td className="px-6 py-4 text-right text-white">
                        $1,000
                      </td>
                    </tr>
                    <tr className="bg-zinc-900/30">
                      <td className="px-6 py-4 font-medium text-white">
                        Loop 3
                      </td>
                      <td className="px-6 py-4 text-zinc-300">+$216</td>
                      <td className="px-6 py-4 text-zinc-400">$1,176</td>
                      <td className="px-6 py-4 text-right text-white">
                        $1,000
                      </td>
                    </tr>
                    <tr className="bg-green-900/10 border-t-2 border-green-900/50">
                      <td className="px-6 py-4 font-bold text-green-400">
                        Final (2.5x)
                      </td>
                      <td className="px-6 py-4 font-bold text-white">$2,500</td>
                      <td className="px-6 py-4 font-bold text-zinc-400">
                        $1,500
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-green-400">
                        $1,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
