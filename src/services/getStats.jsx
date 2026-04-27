import { supabase } from "../supabaseClient.js";
import localStats from "../data/stats.js";

// Cached promise for stats - reuses the same request across renders
let statsPromise = null;

export function getStats() {
    if (!statsPromise) {
        statsPromise = (async () => {
            const { data, error } = await supabase.from("stats").select("*");

            if (error) {
                console.warn("Supabase error, defaulting to local stats data:", error.message);
                return localStats;
            }

            return data && data.length > 0 ? data : localStats;
        })();
    }

    return statsPromise;
}
