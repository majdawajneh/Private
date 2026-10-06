import type { Metadata } from "next";

import GermanyHero from "@/components/germany/GermanyHero";
import GermanyRouteFinderSection from "@/components/germany/GermanyRouteFinderSection";
import GermanyInPracticeSection from "@/components/germany/GermanyInPracticeSection";
import GermanySystemSection from "@/components/germany/GermanySystemSection";
import GermanyBusinessInstitutionsSection from "@/components/germany/GermanyBusinessInstitutionsSection";
import GermanyFinalSection from "@/components/germany/GermanyFinalSection";

export const metadata: Metadata = {
  title: "Germany",
  description:
    "Western Bridge Germany Desk supports individuals, healthcare professionals, businesses, universities, and institutions with Germany-focused preparation, qualification, market entry, training, and institutional pathways.",
};

export default function GermanyPage() {
  return (
    <main id="germany-page">
      <GermanyHero />
      <GermanyRouteFinderSection />
      <GermanyInPracticeSection />
      <GermanySystemSection />
      <GermanyBusinessInstitutionsSection />
      <GermanyFinalSection />
    </main>
  );
}