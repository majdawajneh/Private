import type { Metadata } from "next";

import BusinessHero from "@/components/businesses/BusinessHero";
import ExpansionIntelligenceSection from "@/components/businesses/ExpansionIntelligenceSection";
import MarketEntryNavigatorSection from "@/components/businesses/MarketEntryNavigatorSection";
import PartnershipBridgeSection from "@/components/businesses/PartnershipBridgeSection";
import OrganizationalSolutionsSection from "@/components/businesses/OrganizationalSolutionsSection";
import BusinessExpansionBlueprintSection from "@/components/businesses/BusinessExpansionBlueprintSection";

export const metadata: Metadata = {
  title: "Businesses",

  description:
    "Explore business development, market research, international expansion, strategic partnerships, digital solutions, and Germany-focused growth support with Western Bridge.",
};

export default function BusinessesPage() {
  return (
    <main id="businesses-page">
      <BusinessHero />
      <ExpansionIntelligenceSection />
      <MarketEntryNavigatorSection />
      <PartnershipBridgeSection />
      <OrganizationalSolutionsSection />
      <BusinessExpansionBlueprintSection />
    </main>
  );
}