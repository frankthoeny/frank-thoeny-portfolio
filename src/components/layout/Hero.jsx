import React from "react";
import { ShieldCheck, Sparkles, Linkedin, Mail, Github } from "lucide-react";

export default function Hero({ isDark, onOpenConsultant }) {
  return (
    <header className="transition-all duration-1000 transform opacity-100 translate-y-0 -mx-4 px-4 md:mx-0 md:px-0">
      <div>
        <h1
          className={`text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Frank <br />
          <span className="text-blue-600">Thoeny</span>
        </h1>

        <p
          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-light max-w-xl leading-tight mb-12 ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Architecting high-availability systems where{" "}
          <span
            className={`font-medium border-b-4 ${
              isDark
                ? "text-white border-blue-600/30"
                : "text-slate-900 border-blue-600/30"
            }`}
          >
            human intent drives the AI.
          </span>{" "}
          I specialize in modernizing enterprise infrastructure for the next
          decade—ensuring that as we automate the mundane, we don't lose sight
          of the mission-critical.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
          <button
            onClick={onOpenConsultant}
            className="px-8 sm:px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-widest text-[10px] rounded-2xl flex items-center gap-3 transition-all active:scale-95 shadow-2xl shadow-blue-900/40 w-full sm:w-auto justify-center"
          >
            <Sparkles className="w-4 h-4" /> Strategy Consultant
          </button>
          <div className="flex gap-2">
            <a
              href="https://linkedin.com/in/frankthoeny"
              className={`p-5 border rounded-2xl transition-all ${
                isDark
                  ? "border-white/10 hover:bg-white/5"
                  : "border-slate-200 hover:bg-slate-50"
              }`}
            >
              <Linkedin className="w-5 h-5 text-blue-400" />
            </a>
            <a
              href="https://github.com/frankthoeny"
              className={`p-5 border rounded-2xl transition-all ${
                isDark
                  ? "border-white/10 hover:bg-white/5"
                  : "border-slate-200 hover:bg-slate-50"
              }`}
            >
              <Github className="w-5 h-5 text-blue-400" />
            </a>
            <a
              href="mailto:teknofrank@gmail.com"
              className={`p-5 border rounded-2xl transition-all ${
                isDark
                  ? "border-white/10 hover:bg-white/5"
                  : "border-slate-200 hover:bg-slate-50"
              }`}
            >
              <Mail className="w-5 h-5 text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
