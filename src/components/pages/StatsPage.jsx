import React, { Suspense } from "react";
import StatsSection from "../sections/StatsSection";

export default function StatsPage({ isDark }) {
  return (
    <Suspense fallback={<div>Loading stats...</div>}>
      <StatsSection isDark={isDark} />
    </Suspense>
  );
}
