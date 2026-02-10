import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Briefcase, Building2, Trophy, Landmark } from "lucide-react";

const ICONS = { Briefcase, Building2, Trophy, Landmark };

export default function ExperienceList({ isDark }) {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      const { data, error } = await supabase.from("experience").select("*");
      if (error) {
        console.error("Error fetching experience:", error);
      } else {
        setExperience(data);
      }
      setLoading(false);
    };

    fetchExperience();
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <section className="mt-40">
      <div className="flex items-center justify-between mb-16">
        <div>
          <h2
            className={`text-[10px] font-black uppercase tracking-[0.4em] mb-4 ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Tenure & Governance
          </h2>
          <h3
            className={`text-4xl md:text-5xl font-bold tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Engineering Journey
          </h3>
        </div>
      </div>

      <div className="space-y-6">
        {experience.map((job, i) => (
          <div
            key={i}
            className={`group relative border p-10 rounded-[2.5rem] transition-all ${
              isDark
                ? "bg-white/5 border-white/5 hover:border-blue-500/40"
                : "bg-white border-slate-200 hover:border-blue-300"
            } ${
              job.featured
                ? isDark
                  ? "border-blue-500/40 bg-blue-500/5"
                  : "border-blue-200 bg-blue-50"
                : ""
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
              <div className="flex gap-8">
                <div
                  className={`mt-1 p-5 rounded-[1.5rem] border ${
                    isDark
                      ? "bg-slate-950 border-white/10 text-blue-400"
                      : "bg-slate-50 border-slate-100 text-blue-600"
                  }`}
                >
                  {(() => {
                    const Icon = ICONS[job.icon] || Briefcase;
                    return <Icon className="w-6 h-6" />;
                  })()}
                </div>
                <div>
                  <h4
                    className={`text-2xl font-bold mb-1 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {job.title}
                  </h4>
                  <div
                    className={`text-[11px] font-black tracking-widest uppercase mb-6 ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    {job.company} • {job.location}
                  </div>
                  <p
                    className={`text-lg leading-relaxed max-w-3xl mb-8 ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {job.bullets.map((bullet, idx) => (
                      <span
                        key={idx}
                        className={`text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-xl border ${
                          isDark
                            ? "bg-white/5 border-white/10 text-slate-300"
                            : "bg-slate-100 border-slate-200 text-slate-600"
                        }`}
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="shrink-0">
                <div
                  className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl text-[10px] font-black tracking-widest uppercase ${
                    isDark ? "bg-blue-600 text-white" : "bg-blue-600 text-white"
                  }`}
                >
                  {job.period}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
