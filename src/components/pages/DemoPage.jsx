import React, { Suspense } from "react";
import DemoSection from "../sections/DemoSection";

export default function DemoPage({ isDark }) {
  return (
    <Suspense
      fallback={<div className="mt-40 text-center">Loading demo...</div>}
    >
      <DemoSection isDark={isDark} />
    </Suspense>
  );
}
