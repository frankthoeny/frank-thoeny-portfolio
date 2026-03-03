export default function CachedPromiseArticle({ isDark }) {
  return (
    <article
      className={`p-4 md:p-6 rounded-xl border ${
        isDark ? "bg-white/5 border-white/5" : "bg-slate-50 border-slate-200"
      }`}
    >
      <h3 className="font-bold mb-2">Cached-promise pattern</h3>
      <p className="text-sm text-slate-400 mb-4">
        Services memoize the in-flight promise at module scope so repeated
        callers reuse the same request. This is lightweight and works well with
        Suspense.
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
  );
}
