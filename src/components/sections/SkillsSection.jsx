import React, { use, useState } from "react";
import { getSkills } from "../../services/getSkills";
import TechStack from "../ui/TechStack";

export default function SkillsSection({ isDark, onSelectTech }) {
  const techStack = use(getSkills());
  const [activeTechCategory, setActiveTechCategory] = useState(
    Object.keys(techStack)[0],
  );

  return (
    <TechStack
      isDark={isDark}
      activeTechCategory={activeTechCategory}
      setActiveTechCategory={setActiveTechCategory}
      techStack={techStack}
      onSelectTech={onSelectTech}
    />
  );
}
