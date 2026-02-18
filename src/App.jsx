import React, { useState, useEffect } from "react";
import NavBar from "./components/layout/NavBar";
import Hero from "./components/layout/Hero";
import StatsPage from "./components/pages/StatsPage";
import ExperiencePage from "./components/pages/ExperiencePage";
import CaseStudiesPage from "./components/pages/CaseStudiesPage";
import SkillsPage from "./components/pages/SkillsPage";
import DemoPage from "./components/pages/DemoPage";
import TechInsightPanel from "./components/ui/TechInsightPanel";
import Footer from "./components/layout/Footer";
import StrategyModal from "./components/modals/StrategyModal";
import { callGemini } from "./services/gemini";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isConsultantOpen, setIsConsultantOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [techInsight, setTechInsight] = useState(null);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY ?? "";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const isDark = theme === "dark";

  const generateTechInsight = async (tech) => {
    const sysPrompt = `You are an expert technical architect. Explain the strategic importance of '${tech}' within a modern enterprise environment and how it integrates with other high-level systems. Keep it to 3 concise sentences.`;
    setTechInsight({ tech, loading: true });
    try {
      const response = await callGemini(
        apiKey,
        `Explain the engineering value of ${tech}`,
        sysPrompt,
      );
      setTechInsight({ tech, content: response, loading: false });
    } catch (e) {
      if (e.message === "QUOTA_EXCEEDED") {
        setTechInsight({
          tech,
          content:
            "Quota exceeded: Your Gemini AI minutes have run out. Please check your Google AI Studio account.",
          loading: false,
          error: true,
        });
      } else {
        setTechInsight(null);
      }
    }
  };

  return (
    <ThemeProvider value={{ isDark, toggleTheme }}>
      <div
        className={`min-h-screen transition-colors duration-500 font-sans selection:bg-blue-500/30 ${
          isDark ? "bg-[#020617] text-slate-100" : "bg-slate-50 text-slate-800"
        }`}
      >
        <div
          className={`fixed inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${
            isDark ? "opacity-[0.07]" : "opacity-[0.03]"
          }`}
          style={{
            backgroundImage: `radial-gradient(${
              isDark ? "#3b82f6" : "#3b82f6"
            } 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <NavBar isDark={isDark} toggleTheme={toggleTheme} />

        <main className="relative max-w-6xl mx-auto px-6 py-15">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid lg:grid-cols-[1fr_420px] gap-20 items-center">
              <div>
                <Hero
                  isDark={isDark}
                  onOpenConsultant={() => setIsConsultantOpen(true)}
                />
              </div>

              <div className="space-y-4">
                <StatsPage isDark={isDark} />
              </div>
            </div>
          </div>
          <CaseStudiesPage isDark={isDark} />
          <ExperiencePage isDark={isDark} />

          <SkillsPage isDark={isDark} onSelectTech={generateTechInsight} />
          <TechInsightPanel
            techInsight={techInsight}
            isDark={isDark}
            onClose={() => setTechInsight(null)}
          />

          <DemoPage isDark={isDark} />

          <Footer isDark={isDark} />

          <StrategyModal
            isOpen={isConsultantOpen}
            onClose={() => setIsConsultantOpen(false)}
            apiKey={apiKey}
          />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
