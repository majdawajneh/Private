import MedicalHero from "@/components/medical/MedicalHero";
import MedicalPathwaySection from "@/components/medical/MedicalPathwaySection";
import ProfessionRoutesSection from "@/components/medical/ProfessionRoutesSection";
import MedicalReadinessSection from "@/components/medical/MedicalReadinessSection";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title:
    "Healthcare & Medical International Pathways | Western Bridge",

  description:
    "Western Bridge provides preparation and qualification pathway support for healthcare professionals including nurses, doctors, pharmacists and allied health professionals.",

  path: "/medical",

  image: "/images/medical-hero.jpg",
});

export default function MedicalPage() {
  return (
    <main>
      <MedicalHero />

      <MedicalPathwaySection />

      <ProfessionRoutesSection />

      <MedicalReadinessSection />
    </main>
  );
}