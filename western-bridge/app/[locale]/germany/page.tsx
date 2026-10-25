import GermanyHero from "@/components/germany/GermanyHero";
import GermanyRouteFinderSection from "@/components/germany/GermanyRouteFinderSection";
import GermanyInPracticeSection from "@/components/germany/GermanyInPracticeSection";
import GermanySystemSection from "@/components/germany/GermanySystemSection";
import GermanyBusinessInstitutionsSection from "@/components/germany/GermanyBusinessInstitutionsSection";
import GermanyFinalSection from "@/components/germany/GermanyFinalSection";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title:
    "Germany Pathways for Professionals, Business & Education | Western Bridge",

  description:
    "Western Bridge helps individuals, healthcare professionals, businesses, students and institutions understand and prepare for structured Germany-focused international pathways.",

  path: "/germany",

  image: "/images/germany-hero.jpg",
});

export default function GermanyPage() {
  return (
    <main>
      <GermanyHero />

      <GermanyRouteFinderSection />

      <GermanyInPracticeSection />

      <GermanySystemSection />

      <GermanyBusinessInstitutionsSection />

      <GermanyFinalSection />
    </main>
  );
}