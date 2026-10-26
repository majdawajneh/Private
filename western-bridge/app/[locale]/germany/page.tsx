import type { Metadata } from "next";

import GermanyHero from "@/components/germany/GermanyHero";
import GermanyRouteFinderSection from "@/components/germany/GermanyRouteFinderSection";
import GermanyInPracticeSection from "@/components/germany/GermanyInPracticeSection";
import GermanySystemSection from "@/components/germany/GermanySystemSection";
import GermanyBusinessInstitutionsSection from "@/components/germany/GermanyBusinessInstitutionsSection";
import GermanyFinalSection from "@/components/germany/GermanyFinalSection";

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
      "Wege nach Deutschland für Beruf, Bildung & Unternehmen | Western Bridge",

    description:
      "Western Bridge unterstützt Privatpersonen, medizinische Fachkräfte, Unternehmen, Studierende und Institutionen dabei, strukturierte Wege nach Deutschland zu verstehen und sich gezielt darauf vorzubereiten.",
  },

  en: {
    title:
      "Germany Pathways for Professionals, Business & Education | Western Bridge",

    description:
      "Western Bridge helps individuals, healthcare professionals, businesses, students and institutions understand and prepare for structured Germany-focused international pathways.",
  },

  ar: {
    title:
      "مسارات ألمانيا للأفراد والمهنيين والشركات والتعليم | Western Bridge",

    description:
      "تساعد Western Bridge الأفراد والمتخصصين في القطاع الصحي والشركات والطلاب والمؤسسات على فهم المسارات المنظمة نحو ألمانيا والاستعداد لها بشكل واضح ومهني.",
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
      "/germany",

    image:
      "/images/seo/western-bridge-og.jpg",

    imageAlt:
      "Western Bridge - Germany pathways",
  });
}

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