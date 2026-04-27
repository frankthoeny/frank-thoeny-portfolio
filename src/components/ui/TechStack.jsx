import React from "react";
import { CheckCircle2, Wand2 } from "lucide-react";

export default function TechStack({
  isDark,
  activeTechCategory,
  setActiveTechCategory,
  techStack,
  onSelectTech,
}) {
  const categories = Object.keys(techStack);
  const activeCategory = activeTechCategory || categories[0];

  return (
    <section className="mt-20 md:mt-40">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 lg:mb-16">
        <div>
          <h2
            className={`text-[10px] font-black uppercase tracking-[0.4em] mb-4 transition-colors ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Technical Domain
          </h2>
          <h3
            className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-colors ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Architectural Stack
          </h3>
        </div>
        <div
          className={`flex gap-1 p-1 border rounded-2xl transition-colors overflow-x-auto ${
            isDark
              ? "bg-slate-950 border-white/10"
              : "bg-slate-100 border-slate-200"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTechCategory(cat)}
              className={`px-3 sm:px-6 py-2.5 text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? isDark
                    ? "bg-blue-600 text-white shadow-xl"
                    : "bg-white text-blue-600 shadow-sm"
                  : isDark
                    ? "text-slate-500 hover:text-slate-300"
                    : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        {techStack[activeCategory]?.map((tech, i) => (
          <button
            key={i}
            onClick={() => onSelectTech(tech)}
            className={`group w-full text-left border p-4 sm:p-8 rounded-xl sm:rounded-[1.5rem] flex items-center justify-between transition-all ${
              isDark
                ? "bg-slate-950 border-white/5 hover:border-blue-500/50"
                : "bg-white border-slate-200 hover:border-blue-300"
            }`}
          >
            <div className="flex items-center gap-2 sm:gap-5">
              <CheckCircle2
                className={`w-4 h-5 sm:w-5 sm:h-5 transition-colors ${
                  isDark ? "text-blue-500/40" : "text-blue-200"
                }`}
              />
              <span
                className={`text-xs sm:text-[15px] font-bold transition-colors ${
                  isDark
                    ? "text-slate-300 group-hover:text-white"
                    : "text-slate-700"
                }`}
              >
                {tech}
              </span>
            </div>
            <Wand2
              className={`w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-all ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
