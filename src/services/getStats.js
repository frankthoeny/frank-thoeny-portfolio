import { supabase } from "../supabaseClient.js";

// Cached promise for stats - reuses the same request across renders
let statsPromise = null;

export function getStats() {
    if (!statsPromise) {
        statsPromise = (async () => {
            const { data, error } = await supabase.from("stats").select("*");

            if (error) {
                console.error("Error fetching stats:", error);
                return [];
            }

            return data || [];
        })();
    }

    return statsPromise;
}
