import type { Metadata } from "next";

import MedicalHero from "@/components/medical/MedicalHero";
import MedicalPathwaySection from "@/components/medical/MedicalPathwaySection";
import ProfessionPathsSection from "@/components/individuals/ProfessionPathsSection";
import MedicalReadinessSection from "@/components/medical/MedicalReadinessSection";

export const metadata: Metadata = {
  title: "Medical & Healthcare",

  description:
    "Explore Germany-focused pathways for nurses, doctors, pharmacists, and healthcare professionals through language preparation, qualification recognition, licensing guidance, and professional readiness with Western Bridge.",
};

export default function MedicalPage() {
  return (
    <main id="medical-page">
      <MedicalHero />
      <MedicalPathwaySection />
      <ProfessionPathsSection />
      <MedicalReadinessSection />
    </main>
  );
}