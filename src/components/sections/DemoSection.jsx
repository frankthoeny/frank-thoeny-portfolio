import React from "react";

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
            <p className="text-sm text-slate-500">
              Low-level overview of SupaData, async grouping, and the
              cached-promise pattern.
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 mt-2 sm:mt-0">
            Arch Notes
          </span>
        </div>

        <div className="space-y-6">
          <article className="p-4 md:p-6 bg-white/5 rounded-xl border border-white/5">
            <h3 className="font-bold mb-2">SupaData (Supabase) wiring</h3>
            <p className="text-sm text-slate-400 mb-4">
              A single client is created in <code>src/supabaseClient.js</code>{" "}
              and reused across services. Env vars supply the URL and anon key.
            </p>
            <pre className="rounded-md bg-slate-900 text-slate-100 p-2 md:p-3 text-[10px] md:text-xs overflow-x-auto max-w-full">
              <code>{`// src/supabaseClient.js
  import { createClient } from '@supabase/supabase-js';

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

  export const supabase = createClient(supabaseUrl, supabaseAnonKey);
  `}</code>
            </pre>
          </article>

          <article className="p-4 md:p-6 bg-white/5 rounded-xl border border-white/5">
            <h3 className="font-bold mb-2">Cached-promise pattern</h3>
            <p className="text-sm text-slate-400 mb-4">
              Services memoize the in-flight promise at module scope so repeated
              callers reuse the same request. This is lightweight and works well
              with Suspense.
            </p>
            <pre className="rounded-md bg-slate-900 text-slate-100 p-2 md:p-3 text-[10px] md:text-xs overflow-x-auto max-w-full">
              <code>{`// src/services/getStats.js
  let statsPromise = null;

  export function getStats() {
    if (!statsPromise) {
      statsPromise = (async () => {
        const { data, error } = await supabase.from('stats').select('*');
        if (error) return [];
        return data || [];
      })();
    }
    return statsPromise;
  }
  `}</code>
            </pre>
          </article>

          <article className="p-4 md:p-6 bg-white/5 rounded-xl border border-white/5">
            <h3 className="font-bold mb-2">Async data grouping</h3>
            <p className="text-sm text-slate-400 mb-4">
              Group rows server-returned as lists into structures the UI prefers
              (done in service layer).
            </p>
            <pre className="rounded-md bg-slate-900 text-slate-100 p-2 md:p-3 text-[10px] md:text-xs overflow-x-auto max-w-full">
              <code>{`// src/services/getSkills.js
  let skillsPromise = null;

  export function getSkills() {
    if (!skillsPromise) {
      skillsPromise = (async () => {
        const { data, error } = await supabase.from('tech_stack').select('category, skills');
        if (error) return {};

        const grouped = {};
        data.forEach(row => { grouped[row.category] = row.skills; });
        return grouped;
      })();
    }
    return skillsPromise;
  }
  `}</code>
            </pre>
          </article>

          <article className="p-4 md:p-6 bg-white/5 rounded-xl border border-white/5">
            <h3 className="font-bold mb-2">Components + Suspense</h3>
            <p className="text-sm text-slate-400 mb-4">
              Sections call the service promise with <code>use()</code> and
              receive resolved data synchronously once Suspense settles.
            </p>
            <pre className="rounded-md bg-slate-900 text-slate-100 p-2 md:p-3 text-[10px] md:text-xs overflow-x-auto max-w-full">
              <code>{`// src/components/sections/StatsSection.jsx
  import { use } from 'react';
  import { getStats } from '../../services/getStats';
  import Stats from '../ui/Stats';

  export default function StatsSection({ isDark }) {
    const stats = use(getStats());
    return <Stats isDark={isDark} stats={stats} />;
  }
  `}</code>
            </pre>
          </article>

          <article className="p-4 md:p-6 bg-white/5 rounded-xl border border-white/5">
            <h3 className="font-bold mb-2">Gemini integration (callGemini)</h3>
            <p className="text-sm text-slate-400 mb-4">
              The app wraps Google's Generative Language API in
              <code>src/services/gemini.js</code>. It calls the REST endpoint
              with the provided API key and includes retries with exponential
              backoff to improve reliability.
            </p>
            <pre className="rounded-md bg-slate-900 text-slate-100 p-2 md:p-3 text-[10px] md:text-xs overflow-x-auto max-w-full">
              <code>{`// src/services/gemini.js
export async function callGemini(apiKey, userQuery, systemPrompt) {
  let retries = 0;
  const maxRetries = 5;

  const execute = async () => {
    try {
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=' + apiKey,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userQuery }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] },
          }),
        }
      );

      if (!response.ok) throw new Error('API Error');
      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || null;
    } catch (err) {
      if (retries < maxRetries) {
        const delay = Math.pow(2, retries) * 1000;
        retries++;
        await new Promise((r) => setTimeout(r, delay));
        return execute();
      }
      throw err;
    }
  };

  return execute();
}
`}</code>
            </pre>

            <p className="text-sm text-slate-400 mt-3">
              Example usage (from <code>StrategyModal</code>):
            </p>
            <pre className="rounded-md bg-slate-900 text-slate-100 p-2 md:p-3 text-[10px] md:text-xs overflow-x-auto max-w-full">
              <code>{`// simplified usage in StrategyModal
const response = await callGemini(apiKey, 'Visitor question about strategy: ' + prompt, sysPrompt);
setGeminiResponse(response);
`}</code>
            </pre>
            <p className="text-sm text-slate-400 mt-2">
              Recommendation: consider a server-side proxy for API key safety
              and finer control over rate-limits and usage auditing.
            </p>
          </article>

          <article className="p-4 md:p-6 bg-white/5 rounded-xl border border-white/5">
            <h3 className="font-bold mb-2">Notes & best practices</h3>
            <ul className="list-disc list-inside text-sm text-slate-400">
              <li>
                Provide a manual cache invalidation path if you need
                revalidation.
              </li>
              <li>
                Keep sensitive logic server-side; RLS controls what anon keys
                can access.
              </li>
              <li>
                Perform heavy reshaping in services so components remain
                presentational.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
