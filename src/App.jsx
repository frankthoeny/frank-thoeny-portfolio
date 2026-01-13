import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import TerminalConsole from "./components/TerminalConsole";
import StatTally from "./components/StatTally";
import ExperienceList from "./components/ExperienceList";
import CaseStudiesGrid from "./components/CaseStudiesGrid";
import TechMatrix from "./components/TechMatrix";
import TechInsightPanel from "./components/TechInsightPanel";
import Footer from "./components/Footer";
import StrategyModal from "./components/StrategyModal";
import { callGemini } from "./services/gemini";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTechCategory, setActiveTechCategory] = useState(
    "Systems Engineering"
  );
  const [terminalText, setTerminalText] = useState("");
  const [isConsultantOpen, setIsConsultantOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [techInsight, setTechInsight] = useState(null);

  const fullTerminalText = [
    "> INITIALIZING_THOENY_CORE_v2.6...",
    "[RESUME_LOADED] 15+_YEARS_SYSTEMS_ENG...",
    "GEMINI_AI_ACTIVE: STRATEGIC_ADVISORY_LAYER_READY...",
    "SPECIALIZATION: HEADLESS_DECOUPLING... [OK]",
    "SECURITY_AUDIT: SECTION_508_COMPLIANT...",
    "READY_FOR_STRATEGIC_ENGAGEMENT...",
    "[EOF]",
  ].join(" ");

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY ?? "";

  useEffect(() => {
    setIsVisible(true);
    let i = 0;
    const interval = setInterval(() => {
      setTerminalText(fullTerminalText.slice(0, i));
      i++;
      if (i > fullTerminalText.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
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
        sysPrompt
      );
      setTechInsight({ tech, content: response, loading: false });
    } catch (e) {
      setTechInsight(null);
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

        <main className="relative max-w-6xl mx-auto px-6 py-24">
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
                <TerminalConsole terminalText={terminalText} isDark={isDark} />

                <StatTally isDark={isDark} />
              </div>
            </div>
          </div>

          <ExperienceList isDark={isDark} />
          <CaseStudiesGrid isDark={isDark} />
          <TechMatrix
            isDark={isDark}
            activeTechCategory={activeTechCategory}
            setActiveTechCategory={setActiveTechCategory}
            onSelectTech={generateTechInsight}
          />
          <TechInsightPanel
            techInsight={techInsight}
            isDark={isDark}
            onClose={() => setTechInsight(null)}
          />

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
