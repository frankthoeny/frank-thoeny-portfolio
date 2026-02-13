import React, { use } from "react";
import { getStats } from "../../services/getStats";
import Stats from "../ui/Stats";

export default function StatsSection({ isDark }) {
  const stats = use(getStats());

  return <Stats isDark={isDark} stats={stats} />;
}
