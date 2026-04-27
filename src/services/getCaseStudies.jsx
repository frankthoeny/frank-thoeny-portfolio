import { supabase } from "../supabaseClient.js";
import localCaseStudies from "../data/caseStudies.js";

// Cached promise for case studies - reuses the same request across renders
let caseStudiesPromise = null;

export function getCaseStudies() {
    if (!caseStudiesPromise) {
        caseStudiesPromise = (async () => {
            const { data, error } = await supabase.from("case_studies").select("*");

            if (error) {
                console.warn("Supabase error, defaulting to local case studies data:", error.message);
                return localCaseStudies;
            }

            return data && data.length > 0 ? data : localCaseStudies;
        })();
    }

    return caseStudiesPromise;
}
