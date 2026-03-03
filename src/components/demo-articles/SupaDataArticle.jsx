export default function SupaDataArticle({ isDark }) {
  return (
    <article
      className={`p-4 md:p-6 rounded-xl border ${
        isDark ? "bg-white/5 border-white/5" : "bg-slate-50 border-slate-200"
      }`}
    >
      <h3 className="font-bold mb-2">SupaData (Supabase) wiring</h3>
      <p
        className={"text-sm isDark ? 'text-slate-200' : 'text-slate-700' mb-4"}
      >
        A single client is created in <code>src/supabaseClient.js</code> and
        reused across services. Env vars supply the URL and anon key.
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
  );
}
