export default function GeminiIntegrationArticle({ isDark }) {
  return (
    <article
      className={`p-4 md:p-6 rounded-xl border ${
        isDark ? "bg-white/5 border-white/5" : "bg-slate-50 border-slate-200"
      }`}
    >
      <h3 className="font-bold mb-2">Gemini integration (callGemini)</h3>
      <p className="text-sm text-slate-400 mb-4">
        The app wraps Google's Generative Language API in
        <code>src/services/gemini.js</code>. It calls the REST endpoint with the
        provided API key and includes retries with exponential backoff to
        improve reliability.
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
        Recommendation: consider a server-side proxy for API key safety and
        finer control over rate-limits and usage auditing.
      </p>
    </article>
  );
}
