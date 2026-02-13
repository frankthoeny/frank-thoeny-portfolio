import { supabase } from "../supabaseClient.js";

// Cached promise for case studies - reuses the same request across renders
let caseStudiesPromise = null;

export function getCaseStudies() {
    if (!caseStudiesPromise) {
        caseStudiesPromise = (async () => {
            const { data, error } = await supabase.from("case_studies").select("*");

            if (error) {
                console.error("Error fetching case studies:", error);
                return [];
            }

            return data || [];
        })();
    }

    return caseStudiesPromise;
}
