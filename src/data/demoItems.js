import React from 'react';

const DEMO_ITEMS = [
    {
        id: 'supadata',
        title: 'SupaData (Supabase) wiring',
        description:
            'A single client is created in src/supabaseClient.js and reused across services. Env vars supply the URL and anon key.',
        code: `// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
`,
    },
    {
        id: 'cached-promise',
        title: 'Cached-promise pattern',
        description:
            'Services memoize the in-flight promise at module scope so repeated callers reuse the same request. This is lightweight and works well with Suspense.',
        code: `// src/services/getStats.js
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
`,
    },
    {
        id: 'async-grouping',
        title: 'Async data grouping',
        description:
            'Group rows server-returned as lists into structures the UI prefers (done in service layer).',
        code: `// src/services/getSkills.js
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
`,
    },
    {
        id: 'components-suspense',
        title: 'Components + Suspense',
        description:
            'Sections call the service promise with use() and receive resolved data synchronously once Suspense settles.',
        code: `// src/components/sections/StatsSection.jsx
import { use } from 'react';
import { getStats } from '../../services/getStats';
import Stats from '../ui/Stats';

export default function StatsSection({ isDark }) {
  const stats = use(getStats());
  return <Stats isDark={isDark} stats={stats} />;
}
`,
    },
    {
        id: 'gemini',
        title: 'Gemini integration (callGemini)',
        description:
            "The app wraps Google's Generative Language API in src/services/gemini.js. It calls the REST endpoint with the provided API key and includes retries with exponential backoff to improve reliability.",
        code: `// src/services/gemini.js
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
`,
        extra: (
            <p className="text-sm text-slate-400 mt-3">
                Recommendation: consider a server-side proxy for API key safety
                and finer control over rate-limits and usage auditing.
            </p>
        ),
    },
    {
        id: 'notes',
        title: 'Notes & best practices',
        notes: [
            'Provide a manual cache invalidation path if you need revalidation.',
            'Keep sensitive logic server-side; RLS controls what anon keys can access.',
            'Perform heavy reshaping in services so components remain presentational.',
        ],
    },
];

export default DEMO_ITEMS;
