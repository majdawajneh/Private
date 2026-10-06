import type { Metadata } from "next";

import EducationHero from "@/components/education/EducationHero";
import EducationEntrySection from "@/components/education/EducationEntrySection";
import EducationPathwaysSection from "@/components/education/EducationPathwaysSection";
import InstitutionNetworkSection from "@/components/education/InstitutionNetworkSection";
import EducationPreparationSection from "@/components/education/EducationPreparationSection";

export const metadata: Metadata = {
  title: "Education & Institutions",

  description:
    "Explore academic pathways, university connections, training opportunities, educational partnerships, institutional cooperation, and international education support with Western Bridge.",
};

export default function EducationPage() {
  return (
    <main id="education-page">
      <EducationHero />
      <EducationEntrySection />
      <EducationPathwaysSection />
      <InstitutionNetworkSection />
      <EducationPreparationSection />
    </main>
  );
}