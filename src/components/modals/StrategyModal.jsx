import React, { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import { useGemini } from "../../services/gemini";
import ReactMarkdown from "react-markdown";

export default function StrategyModal({ isOpen, onClose, apiKey }) {
  const [prompt, setPrompt] = useState("");
  const [geminiResponse, setGeminiResponse] = useState("");
  const [quotaWarning, setQuotaWarning] = useState(false);

  // Call useGemini at the top level — it's a hook, not a function
  const { callGemini, loading } = useGemini(apiKey);

  const askArchitect = async () => {
    const sysPrompt =
      "I am Frank Thoeny's virtual Technical Consultant. You represent a Principal Systems Engineer with 15+ years of experience. Your goal is to provide high-level architectural strategies for legacy modernization, headless architectures, and enterprise scalability. Keep responses structured with bullet points.";
    setQuotaWarning(false);
    try {
      // Call callGemini as a method, not useGemini directly
      const response = await callGemini(
        `Visitor question about strategy: ${prompt}`,
        sysPrompt,
      );
      setGeminiResponse(response);
    } catch (e) {
      if (e.message === "QUOTA_EXCEEDED") {
        setQuotaWarning(true);
      } else if (e.message.startsWith("Rate limited")) {
        setGeminiResponse(
          "Too many requests. Please wait a moment and try again.",
        );
      } else {
        setGeminiResponse(
          "Architectural consultant offline. Please try again later.",
        );
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-2xl bg-black/60">
      <div
        className={`w-full max-w-2xl max-h-[90vh] rounded-[2.5rem] shadow-2xl flex flex-col border ${"bg-white border-slate-200 text-slate-800"}`}
      >
        <div className="px-10 py-8 border-b flex items-center justify-between bg-white shrink-0 rounded-t-[2.5rem]">
          <div className="flex items-center gap-4 text-blue-500">
            <Sparkles className="w-5 h-5" />
            <h3 className="font-black uppercase text-[11px] tracking-[0.3em]">
              Strategy Consultant AI
            </h3>
          </div>
          <button
            onClick={() => {
              onClose();
              setGeminiResponse("");
              setQuotaWarning(false);
            }}
            className="font-black text-[10px] uppercase text-slate-500 hover:text-slate-800 shrink-0"
          >
            Close
          </button>
        </div>
        <div className="p-10 overflow-y-auto flex-1">
          {quotaWarning && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
              <strong>Quota Exceeded:</strong> Your Gemini AI minutes have run
              out. Please check your Google AI Studio account for usage limits
              or try again later.
            </div>
          )}
          {geminiResponse ? (
            <div className="space-y-8">
              <div className="p-8 rounded-[1.5rem] text-sm leading-relaxed border bg-slate-50 border-slate-100 text-slate-700 prose prose-slate prose-sm max-w-none">
                <ReactMarkdown>{geminiResponse}</ReactMarkdown>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <p className="text-sm opacity-60 font-medium">
                Define your technical bottleneck or infrastructure goal for a
                high-level architectural roadmap from a Principal perspective.
              </p>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={
                  "Describe the challenge (e.g., 'Modernizing a monolithic e-commerce engine with zero-downtime requirements')..."
                }
                className="w-full h-48 border rounded-[1.5rem] p-8 outline-none text-base leading-relaxed transition-all resize-none bg-slate-50 border-slate-200 text-slate-800 focus:border-blue-500/50"
              />
              <button
                onClick={askArchitect}
                disabled={loading || !prompt}
                className="w-full py-6 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.3em] text-[11px] rounded-2xl flex items-center justify-center gap-4 transition-all shadow-2xl shadow-blue-900/30"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Generate Strategic Roadmap"
                )}
              </button>
            </div>
          )}
        </div>
        {geminiResponse && (
          <div className="px-10 py-6 border-t bg-white shrink-0 rounded-b-[2.5rem]">
            <button
              onClick={() => {
                setGeminiResponse("");
                setQuotaWarning(false);
              }}
              className="text-[11px] font-black uppercase text-blue-500 tracking-[0.3em] hover:text-blue-400 transition-colors"
            >
              ✨ Generate New Strategy
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
