import React from "react";
import { BrainCircuit, Briefcase, Bot, ShieldCheck, Zap } from "lucide-react";
import defaultStats from "../../data/stats.js";

const ICONS = {
  BrainCircuit,
  Briefcase,
  Bot,
  Zap,
};

export default function Stats({ isDark = false, stats }) {
  const displayStats = stats && stats.length > 0 ? stats : defaultStats;

  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl border mb-10 text-[10px] font-black tracking-[0.2em] uppercase transition-colors bg-blue-500/10 border-blue-500/20 text-blue-400">
        <ShieldCheck className="w-3.5 h-3.5" /> Principal Engineering Identity
      </div>
      {displayStats.map((stat, i) => (
        <div
          key={i}
          className={`border px-6 py-5 rounded-2xl flex items-center gap-5 transition-colors ${
            isDark
              ? "bg-slate-950 border-white/5 text-white"
              : "bg-white border-slate-200 text-slate-800"
          }`}
        >
          {/* <div
            className={`p-3 rounded-xl border transition-colors ${
              isDark
                ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                : "bg-slate-50 text-blue-600 border-slate-100"
            }`}
          ></div> */}
          <div>
            <div className="text-[12px] font-black uppercase tracking-widest">
              <span
                className={`p-3 rounded-xl border transition-colors ${
                  isDark
                    ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                    : "bg-slate-50 text-blue-600 border-slate-100"
                }`}
              >
                {(() => {
                  const Icon = ICONS[stat.icon] || Briefcase;
                  return <Icon className="w-6 h-6 inline" />;
                })()}
              </span>
              {stat.title}
            </div>
            <div className="text-[11px] opacity-50 font-medium pb-1 ml-12">
              {stat.subtitle}
            </div>
            <div className="text-[11px] font-black font-medium tracking-widest">
              {stat.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
