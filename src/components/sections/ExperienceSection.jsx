import React, { use } from "react";
import { getExperience } from "../../services/getExperience";
import ExperienceList from "../lists/ExperienceList";

export default function ExperienceSection({ isDark }) {
  const experience = use(getExperience());

  return <ExperienceList isDark={isDark} experience={experience} />;
}
