import BusinessHero from "@/components/businesses/BusinessHero";
import ExpansionIntelligenceSection from "@/components/businesses/ExpansionIntelligenceSection";
import MarketEntryNavigatorSection from "@/components/businesses/MarketEntryNavigatorSection";
import PartnershipBridgeSection from "@/components/businesses/PartnershipBridgeSection";
import OrganizationalSolutionsSection from "@/components/businesses/OrganizationalSolutionsSection";
import BusinessExpansionBlueprintSection from "@/components/businesses/BusinessExpansionBlueprintSection";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title:
    "International Business Expansion & Partnerships | Western Bridge",

  description:
    "Western Bridge supports companies and organizations with international market preparation, business development, institutional connections, partnerships and structured expansion pathways.",

  path: "/businesses",

  image: "/images/business-expansion.jpg",
});

export default function BusinessesPage() {
  return (
    <main>
      <BusinessHero />

      <ExpansionIntelligenceSection />

      <MarketEntryNavigatorSection />

      <PartnershipBridgeSection />

      <OrganizationalSolutionsSection />

      <BusinessExpansionBlueprintSection />
    </main>
  );
}