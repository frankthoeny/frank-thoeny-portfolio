import { supabase } from "../supabaseClient.js";

// Cached promise for skills - reuses the same request across renders
let skillsPromise = null;

export function getSkills() {
  if (!skillsPromise) {
    skillsPromise = (async () => {
      const { data, error } = await supabase
        .from("tech_stack")
        .select("category, skills");

      if (error) {
        console.error("Error fetching skills:", error);
        return {};
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

