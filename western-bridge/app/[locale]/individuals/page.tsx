import type { Metadata } from "next";

import IndividualsHero from "@/components/individuals/IndividualsHero";
import IndividualOptionsSection from "@/components/individuals/IndividualOptionsSection";
import GermanyJourneySection from "@/components/individuals/GermanyJourneySection";
import ProfessionPathsSection from "@/components/individuals/ProfessionPathsSection";
import PreparationBoardSection from "@/components/individuals/PreparationBoardSection";

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
      "Internationale Wege für Privatpersonen | Western Bridge",

    description:
      "Western Bridge unterstützt Privatpersonen bei internationalen Wegen mit Beratung, Vorbereitung, Qualifizierung und beruflicher Orientierung – mit besonderem Fokus auf Deutschland.",
  },

  en: {
    title:
      "International Pathways for Individuals | Western Bridge",

    description:
      "Western Bridge supports individuals with structured international consulting, preparation, qualification and professional pathway planning, including Germany-focused opportunities.",
  },

  ar: {
    title:
      "مسارات دولية للأفراد نحو ألمانيا | Western Bridge",

    description:
      "تدعم Western Bridge الأفراد من خلال الاستشارات الدولية والاستعداد والتأهيل والتخطيط للمسارات المهنية، مع تركيز خاص على الفرص والمسارات المرتبطة بألمانيا.",
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
      "/individuals",

    image:
      "/images/seo/western-bridge-og.jpg",

    imageAlt:
      "Western Bridge - International pathways for individuals",
  });
}

export default function IndividualsPage() {
  return (
    <main>
      <IndividualsHero />

      <IndividualOptionsSection />

      <GermanyJourneySection />

      <ProfessionPathsSection />

      <PreparationBoardSection />
    </main>
  );
}