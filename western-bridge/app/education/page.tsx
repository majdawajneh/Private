import EducationHero from "@/components/education/EducationHero";
import EducationEntrySection from "@/components/education/EducationEntrySection";
import EducationPathwaysSection from "@/components/education/EducationPathwaysSection";
import InstitutionNetworkSection from "@/components/education/InstitutionNetworkSection";
import EducationPreparationSection from "@/components/education/EducationPreparationSection";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title:
    "Education & Institutional Cooperation | Western Bridge",

  description:
    "Western Bridge supports students, universities, training providers and educational institutions through international education pathways, preparation and institutional cooperation.",

  path: "/education",

  image: "/images/education-campus.jpg",
});

export default function EducationPage() {
  return (
    <main>
      <EducationHero />

      <EducationEntrySection />

      <EducationPathwaysSection />

      <InstitutionNetworkSection />

      <EducationPreparationSection />
    </main>
  );
}