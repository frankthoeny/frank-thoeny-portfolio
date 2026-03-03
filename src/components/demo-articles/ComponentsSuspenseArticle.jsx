export default function ComponentsSuspenseArticle({ isDark }) {
  return (
    <article
      className={`p-4 md:p-6 rounded-xl border ${
        isDark ? "bg-white/5 border-white/5" : "bg-slate-50 border-slate-200"
      }`}
    >
      <h3 className="font-bold mb-2">Components + Suspense</h3>
      <p className="text-sm text-slate-400 mb-4">
        Sections call the service promise with <code>use()</code> and receive
        resolved data synchronously once Suspense settles.
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
  );
}
