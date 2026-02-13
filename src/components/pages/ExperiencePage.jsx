import React, { Suspense } from "react";
import ExperienceSection from "../sections/ExperienceSection";

export default function ExperiencePage({ isDark }) {
  return (
    <Suspense
      fallback={<div className="mt-40 text-center">Loading experience...</div>}
    >
      <ExperienceSection isDark={isDark} />
    </Suspense>
  );
}
