export default function BestPracticesArticle({ isDark }) {
  return (
    <article
      className={`p-4 md:p-6 rounded-xl border ${
        isDark ? "bg-white/5 border-white/5" : "bg-slate-50 border-slate-200"
      }`}
    >
      <h3 className="font-bold mb-2">Notes & best practices</h3>
      <ul className="list-disc list-inside text-sm text-slate-400">
        <li>
          Provide a manual cache invalidation path if you need revalidation.
        </li>
        <li>
          Keep sensitive logic server-side; RLS controls what anon keys can
          access.
        </li>
        <li>
          Perform heavy reshaping in services so components remain
          presentational.
        </li>
      </ul>
    </article>
  );
}
