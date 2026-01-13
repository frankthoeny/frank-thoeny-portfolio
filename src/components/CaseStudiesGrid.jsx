import React from "react";
import caseStudies from "../data/caseStudies";
import { CheckCircle2 } from "lucide-react";

export default function CaseStudiesGrid({ isDark }) {
  return (
    <section id="studies" className="mt-40">
      <div className="mb-20">
        <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-600 mb-4">
          Technical Deliverables
        </h2>
        <h3
          className={`text-4xl md:text-5xl font-black tracking-tight ${
            !isDark && "text-[#020617]"
          }`}
        >
          Systems Case Studies
        </h3>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className={`flex flex-col p-10 rounded-[40px] border transition-all group ${
              isDark
                ? "border-white/5 bg-white/[0.01] hover:border-blue-500/30"
                : "border-slate-200 bg-white hover:border-blue-600 shadow-sm hover:shadow-xl"
            }`}
          >
            <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6">
              {study.org}
            </div>
            <h4
              className={`text-2xl font-bold mb-6 group-hover:text-blue-600 transition-colors ${
                !isDark && "text-[#020617]"
              }`}
            >
              {study.title}
            </h4>
            <div className="space-y-6 mb-10 text-sm">
              <p
                className={`italic ${
                  isDark ? "opacity-50" : "text-slate-500 font-medium"
                }`}
              >
                "{study.challenge}"
              </p>
              <p
                className={`leading-relaxed ${
                  isDark ? "opacity-70" : "text-slate-700"
                }`}
              >
                {study.solution}
              </p>
            </div>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-8">
                {study.tech.map((t) => (
                  <span
                    key={t}
                    className={`px-3 py-1 rounded-lg text-[10px] font-bold border ${
                      isDark
                        ? "bg-white/5 border-white/5 text-slate-300"
                        : "bg-slate-50 border-slate-200 text-slate-800"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div
                className={`p-4 rounded-xl border ${
                  isDark
                    ? "bg-emerald-500/5 border-emerald-500/10"
                    : "bg-emerald-50 border-emerald-200"
                }`}
              >
                <div className="text-[9px] font-black uppercase text-emerald-700 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3" /> Impact
                </div>
                <div className="text-xs font-bold text-emerald-800">
                  {study.result}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
