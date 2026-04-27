import { supabase } from "../supabaseClient.js";
import localTechStack from "../data/techStack.js";

// Cached promise for skills - reuses the same request across renders
let skillsPromise = null;

export function getSkills() {
  if (!skillsPromise) {
    skillsPromise = (async () => {
      const { data, error } = await supabase
        .from("tech_stack")
        .select("category, skills");

      if (error) {
        console.warn("Supabase error, defaulting to local skills data:", error.message);
        return localTechStack;
      }

      if (!data || data.length === 0) {
        return localTechStack;
      }

      // Group skills by category
      const groupedSkills = {};
      data.forEach((row) => {
        groupedSkills[row.category] = row.skills;
      });

      return groupedSkills;
    })();
  }

  return skillsPromise;
}

