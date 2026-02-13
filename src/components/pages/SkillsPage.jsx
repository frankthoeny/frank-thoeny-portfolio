import React, { Suspense } from "react";
import SkillsSection from "../sections/SkillsSection";

export default function SkillsPage({ isDark, onSelectTech }) {
  return (
    <Suspense
      fallback={<div className="mt-40 text-center">Loading skills...</div>}
    >
      <SkillsSection isDark={isDark} onSelectTech={onSelectTech} />
    </Suspense>
  );
}
