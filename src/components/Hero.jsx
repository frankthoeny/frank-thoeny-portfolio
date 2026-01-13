import React from "react";
import { ShieldCheck, Sparkles, Linkedin, Mail, Github } from "lucide-react";

export default function Hero({ isDark, onOpenConsultant }) {
  return (
    <header className="transition-all duration-1000 transform opacity-100 translate-y-0">
      <div>
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl border mb-10 text-[10px] font-black tracking-[0.2em] uppercase transition-colors bg-blue-500/10 border-blue-500/20 text-blue-400">
          <ShieldCheck className="w-3.5 h-3.5" /> Principal Engineering Identity
        </div>

        <h1
          className={`text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Frank <br />
          <span className="text-blue-600">Thoeny</span>
        </h1>

        <p
          className={`text-2xl md:text-3xl font-light max-w-xl leading-tight mb-12 ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Architecting high-availability systems and{" "}
          <span
            className={`font-medium border-b-4 ${
              isDark
                ? "text-white border-blue-600/30"
                : "text-slate-900 border-blue-600/30"
            }`}
          >
            modernizing enterprise
          </span>{" "}
          infrastructure for the next decade.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={onOpenConsultant}
            className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-widest text-[10px] rounded-2xl flex items-center gap-3 transition-all active:scale-95 shadow-2xl shadow-blue-900/40"
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
