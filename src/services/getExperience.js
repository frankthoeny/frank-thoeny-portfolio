import { supabase } from "../supabaseClient.js";

// Cached promise for experience - reuses the same request across renders
let experiencePromise = null;

export function getExperience() {
    if (!experiencePromise) {
        experiencePromise = (async () => {
            const { data, error } = await supabase.from("experience").select("*");

            if (error) {
                console.error("Error fetching experience:", error);
                return [];
            }

            return data || [];
        })();
    }

    return experiencePromise;
}
