import type { Metadata } from "next";

import IndividualsHero from "@/components/individuals/IndividualsHero";
import IndividualOptionsSection from "@/components/individuals/IndividualOptionsSection";
import GermanyJourneySection from "@/components/individuals/GermanyJourneySection";
import ProfessionPathsSection from "@/components/individuals/ProfessionPathsSection";
import PreparationBoardSection from "@/components/individuals/PreparationBoardSection";
import IndividualAISection from "@/components/individuals/IndividualAISection";

export const metadata: Metadata = {
  title: "Individuals",

  description:
    "Explore international pathways, professional preparation, qualification guidance, training, and Germany-focused opportunities with Western Bridge.",
};

export default function IndividualsPage() {
  return (
    <main id="individuals-page">
      <IndividualsHero />
      <IndividualOptionsSection />
      <GermanyJourneySection />
      <ProfessionPathsSection />
      <PreparationBoardSection />
      <IndividualAISection />
    </main>
  );
}