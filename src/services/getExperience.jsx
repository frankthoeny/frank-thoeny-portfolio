import { supabase } from "../supabaseClient.js";
import localExperience from "../data/experience.js";

// Cached promise for experience - reuses the same request across renders
let experiencePromise = null;

export function getExperience() {
    if (!experiencePromise) {
        experiencePromise = (async () => {
            const { data, error } = await supabase.from("experience").select("*");

            if (error) {
                console.warn("Supabase error, defaulting to local experience data:", error.message);
                return localExperience;
            }

            return data && data.length > 0 ? data : localExperience;
        })();
    }

    return experiencePromise;
}
