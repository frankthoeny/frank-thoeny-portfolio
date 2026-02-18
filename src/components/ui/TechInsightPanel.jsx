import React from "react";
import { Sparkles, Loader2 } from "lucide-react";

export default function TechInsightPanel({ techInsight, isDark, onClose }) {
  if (!techInsight) return null;
  const isError = techInsight.error;
  return (
    <div
      className={`mt-10 p-10 rounded-[2rem] border animate-in fade-in slide-in-from-top-6 duration-700 transition-colors ${
        isError
          ? isDark
            ? "bg-red-600/5 border-red-600/20"
            : "bg-red-50 border-red-100"
          : isDark
            ? "bg-blue-600/5 border-blue-600/20"
            : "bg-blue-50 border-blue-100"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <div
          className={`flex items-center gap-4 ${isError ? "text-red-500" : "text-blue-500"}`}
        >
          <Sparkles className="w-5 h-5" />
          <h4 className="text-[11px] font-black uppercase tracking-widest">
            {isError
              ? "Quota Warning"
              : `Architectural Insight: ${techInsight.tech}`}
          </h4>
        </div>
        <button
          onClick={onClose}
          className="text-[10px] font-black uppercase text-slate-500 hover:text-slate-800"
        >
          Dismiss
        </button>
      </div>
      {techInsight.loading ? (
        <div className="flex items-center gap-4 text-slate-500 text-sm font-medium">
          <Loader2 className="w-5 h-5 animate-spin" /> Analyzing systems
          architecture...
        </div>
      ) : (
        <p
          className={`text-lg leading-relaxed font-light ${
            isError
              ? isDark
                ? "text-red-300"
                : "text-red-700"
              : isDark
                ? "text-slate-300"
                : "text-slate-700"
          }`}
        >
          {techInsight.content}
        </p>
      )}
    </div>
  );
}
