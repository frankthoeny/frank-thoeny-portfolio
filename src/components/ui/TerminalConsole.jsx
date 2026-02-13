import React from "react";
import { Terminal } from "lucide-react";

export default function TerminalConsole({ terminalText, isDark }) {
  return (
    <div
      className={`p-6 rounded-3xl font-mono text-[11px] transition-colors shadow-2xl relative overflow-hidden ${
        isDark
          ? "bg-slate-950 text-blue-400 border border-white/10"
          : "bg-slate-900 text-blue-300"
      }`}
    >
      <div className="flex items-center gap-2 mb-4 opacity-50 border-b border-white/5 pb-3">
        <Terminal className="w-3 h-3" />
        <span>PRINCIPAL_ARCHITECT_CONSOLE</span>
      </div>
      <pre className="whitespace-pre-wrap leading-relaxed">
        {terminalText}
        <span className="animate-pulse">_</span>
      </pre>
    </div>
  );
}
