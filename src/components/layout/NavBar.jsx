import React from "react";
import { Sun, Moon, Activity, ShieldCheck } from "lucide-react";

export default function NavBar({ isDark, toggleTheme }) {
  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-500 ${
        isDark
          ? "border-white/5 bg-[#020617]/80"
          : "border-slate-200 bg-white/80"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-[11px] font-mono tracking-widest uppercase font-bold">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <span
              className={`w-2 h-2 rounded-full animate-pulse ${
                isDark ? "bg-emerald-400" : "bg-emerald-600"
              }`}
            />
            <span className={isDark ? "text-emerald-400" : "text-emerald-700"}>
              SYSTEM_STATUS: OPERATIONAL
            </span>
          </div>
          <div className={`hidden md:flex items-center gap-3 opacity-50`}>
            <Activity className="w-3 h-3" />
            <span>SLA_UPTIME: 99.9%</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          MODE_EXPERTISE: PRINCIPAL_ARCHITECT
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all border ${
              isDark
                ? "bg-slate-800 border-white/10 text-yellow-400 hover:border-yellow-400/50"
                : "bg-white border-slate-200 text-slate-600 hover:border-blue-500/50"
            }`}
          >
            {isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
