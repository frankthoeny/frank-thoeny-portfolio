import React from "react";
import SupaDataArticle from "../demo-articles/SupaDataArticle";
import CachedPromiseArticle from "../demo-articles/CachedPromiseArticle";
import AsyncGroupingArticle from "../demo-articles/AsyncGroupingArticle";
import ComponentsSuspenseArticle from "../demo-articles/ComponentsSuspenseArticle";
import GeminiIntegrationArticle from "../demo-articles/GeminiIntegrationArticle";
import ZeroBundleArticle from "../demo-articles/ZeroBundleArticle";
import BestPracticesArticle from "../demo-articles/BestPracticesArticle";

export default function DemoSection({ isDark }) {
  return (
    <section id="demo" className="mt-40">
      <div className="mb-20">
        <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-600 mb-4">
          Demo
        </h2>
        <h3
          className={`text-4xl md:text-5xl font-black tracking-tight ${
            !isDark && "text-[#020617]"
          }`}
        >
          Implementation Notes & Code
        </h3>
      </div>
      <div className="rounded-2xl border bg-gradient-to-b from-white/40 to-transparent p-4 md:p-8 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <p
              className={`text-sm ${
                isDark ? "text-slate-200" : "text-slate-700"
              } mb-2`}
            >
              Low-level overview of SupaData, async grouping, and the
              cached-promise pattern.
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 mt-2 sm:mt-0">
            Arch Notes
          </span>
        </div>

        <div className="space-y-6">
          <SupaDataArticle isDark={isDark} />
          <CachedPromiseArticle isDark={isDark} />
          <AsyncGroupingArticle isDark={isDark} />
          <ComponentsSuspenseArticle isDark={isDark} />
          <GeminiIntegrationArticle isDark={isDark} />
          <ZeroBundleArticle isDark={isDark} />
          <BestPracticesArticle isDark={isDark} />
        </div>
      </div>
    </section>
  );
}
