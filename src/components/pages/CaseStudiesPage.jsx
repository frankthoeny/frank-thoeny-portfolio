import React, { Suspense } from "react";
import CaseStudiesSection from "../sections/CaseStudiesSection";

export default function CaseStudiesPage({ isDark }) {
  return (
    <Suspense
      fallback={
        <div className="mt-10 text-center">Loading case studies...</div>
      }
    >
      <CaseStudiesSection isDark={isDark} />
    </Suspense>
  );
}
