import type { Metadata } from "next";

import EducationHero from "@/components/education/EducationHero";
import EducationEntrySection from "@/components/education/EducationEntrySection";
import EducationPathwaysSection from "@/components/education/EducationPathwaysSection";
import InstitutionNetworkSection from "@/components/education/InstitutionNetworkSection";
import EducationPreparationSection from "@/components/education/EducationPreparationSection";

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
      "Bildung & institutionelle Zusammenarbeit | Western Bridge",

    description:
      "Western Bridge unterstützt Studierende, Hochschulen, Bildungsanbieter und Institutionen bei internationalen Bildungswegen, Vorbereitung, Qualifizierung und institutioneller Zusammenarbeit mit besonderem Fokus auf Deutschland.",
  },

  en: {
    title:
      "Education & Institutional Cooperation | Western Bridge",

    description:
      "Western Bridge supports students, universities, training providers and educational institutions through international education pathways, preparation, qualification and institutional cooperation, with Germany as a central gateway.",
  },

  ar: {
    title:
      "التعليم والتعاون المؤسسي الدولي | Western Bridge",

    description:
      "تدعم Western Bridge الطلاب والجامعات ومقدمي التدريب والمؤسسات التعليمية من خلال المسارات التعليمية الدولية والاستعداد والتأهيل والتعاون المؤسسي، مع تركيز رئيسي على ألمانيا.",
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
      "/education",

    image:
      "/images/seo/western-bridge-og.jpg",

    imageAlt:
      "Western Bridge - Education and institutional cooperation",
  });
}

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