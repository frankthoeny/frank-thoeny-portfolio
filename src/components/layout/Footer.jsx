import React from "react";

export default function Footer({ isDark }) {
  return (
    <footer
      className={`pt-24 border-t flex flex-col md:flex-row justify-between items-center gap-8 ${
        isDark ? "border-white/5" : "border-slate-200"
      }`}
    >
      <div className={!isDark ? "text-[#020617]" : undefined}>
        <div className="text-xl font-bold mb-1">teknofrank@gmail.com</div>
        <div className={`text-sm ${isDark ? "opacity-40" : "text-slate-500"}`}>
          310-751-8960 | Greater Los Angeles Area
        </div>
      </div>
      <p
        className={`text-[10px] font-black uppercase tracking-[0.4em] ${
          isDark ? "opacity-20" : "text-slate-300"
        }`}
      >
        © 2026 Frank Thoeny // Principal Architect
      </p>
    </footer>
  );
}
