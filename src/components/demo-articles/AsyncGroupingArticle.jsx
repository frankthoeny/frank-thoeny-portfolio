export default function AsyncGroupingArticle({ isDark }) {
  return (
    <article
      className={`p-4 md:p-6 rounded-xl border ${
        isDark ? "bg-white/5 border-white/5" : "bg-slate-50 border-slate-200"
      }`}
    >
      <h3 className="font-bold mb-2">Async data grouping</h3>
      <p className="text-sm text-slate-400 mb-4">
        Group rows server-returned as lists into structures the UI prefers (done
        in service layer).
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
  );
}
