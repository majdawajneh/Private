import IndividualsHero from "@/components/individuals/IndividualsHero";
import IndividualOptionsSection from "@/components/individuals/IndividualOptionsSection";
import GermanyJourneySection from "@/components/individuals/GermanyJourneySection";
import ProfessionPathsSection from "@/components/individuals/ProfessionPathsSection";
import PreparationBoardSection from "@/components/individuals/PreparationBoardSection";
import IndividualAISection from "@/components/individuals/IndividualAISection";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title:
    "International Pathways for Individuals | Western Bridge",

  description:
    "Western Bridge supports individuals with structured international consulting, preparation, qualification and professional pathway planning, including Germany-focused opportunities.",

  path: "/individuals",

  image: "/images/individuals-hero.jpg",
});

export default function IndividualsPage() {
  return (
    <main>
      <IndividualsHero />

      <IndividualOptionsSection />

      <GermanyJourneySection />

      <ProfessionPathsSection />

      <PreparationBoardSection />

      <IndividualAISection />
    </main>
  );
}