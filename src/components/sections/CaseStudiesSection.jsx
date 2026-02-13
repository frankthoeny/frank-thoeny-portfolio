import React, { use } from "react";
import { getCaseStudies } from "../../services/getCaseStudies";
import CaseStudiesGrid from "../lists/CaseStudiesGrid";

export default function CaseStudiesSection({ isDark }) {
  const caseStudies = use(getCaseStudies());

  return <CaseStudiesGrid isDark={isDark} caseStudies={caseStudies} />;
}
