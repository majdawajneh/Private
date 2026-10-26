import type { Metadata } from "next";

import BusinessHero from "@/components/businesses/BusinessHero";
import ExpansionIntelligenceSection from "@/components/businesses/ExpansionIntelligenceSection";
import MarketEntryNavigatorSection from "@/components/businesses/MarketEntryNavigatorSection";
import PartnershipBridgeSection from "@/components/businesses/PartnershipBridgeSection";
import OrganizationalSolutionsSection from "@/components/businesses/OrganizationalSolutionsSection";
import BusinessExpansionBlueprintSection from "@/components/businesses/BusinessExpansionBlueprintSection";

import {
  createPageMetadata,
  type SiteLocale,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const seoContent = {
  de: {
    title:
      "Internationale Geschäftsentwicklung & Markteintritt | Western Bridge",

    description:
      "Western Bridge unterstützt Unternehmen und Organisationen bei internationaler Marktvbereitung, Geschäftsentwicklung, institutionellen Verbindungen, Partnerschaften und strukturierten Expansionswegen mit besonderem Fokus auf Deutschland.",
  },

  en: {
    title:
      "International Business Expansion & Partnerships | Western Bridge",

    description:
      "Western Bridge supports companies and organizations with international market preparation, business development, institutional connections, partnerships and structured expansion pathways, with Germany as a key gateway.",
  },

  ar: {
    title:
      "توسع الأعمال والشراكات الدولية | Western Bridge",

    description:
      "تدعم Western Bridge الشركات والمؤسسات في الاستعداد لدخول الأسواق الدولية وتطوير الأعمال وبناء العلاقات المؤسسية والشراكات والمسارات المنظمة للتوسع، مع تركيز رئيسي على ألمانيا.",
  },
} satisfies Record<
  SiteLocale,
  {
    title: string;
    description: string;
  }
>;

function getLocale(
  locale: string
): SiteLocale {
  if (
    locale === "de" ||
    locale === "en" ||
    locale === "ar"
  ) {
    return locale;
  }

  return "de";
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: requestedLocale } =
    await params;

  const locale =
    getLocale(requestedLocale);

  const seo =
    seoContent[locale];

  return createPageMetadata({
    locale,

    title:
      seo.title,

    description:
      seo.description,

    path:
      "/businesses",

    image:
      "/images/seo/western-bridge-og.jpg",

    imageAlt:
      "Western Bridge - International business expansion and partnerships",
  });
}

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