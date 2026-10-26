import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import AboutPurposeSection from "@/components/about/AboutPurposeSection";
import AboutValuesSection from "@/components/about/AboutValuesSection";

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
      "Über Western Bridge | Internationale Beratung & Entwicklung",

    description:
      "Erfahren Sie mehr über Western Bridge, unseren Ansatz für internationale Beratung, Vorbereitung, Qualifizierung, institutionelle Zusammenarbeit und verantwortungsvolle Entwicklung internationaler Wege.",
  },

  en: {
    title:
      "About Western Bridge | International Consulting & Development",

    description:
      "Learn about Western Bridge, our international consulting approach, preparation, qualification, institutional cooperation and responsible pathway development.",
  },

  ar: {
    title:
      "عن Western Bridge | الاستشارات والتطوير الدولي",

    description:
      "تعرّف على Western Bridge ونهجنا في الاستشارات الدولية والاستعداد والتأهيل والتعاون المؤسسي وتطوير المسارات الدولية بشكل منظم ومسؤول.",
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
      "/about",

    image:
      "/images/seo/western-bridge-og.jpg",

    imageAlt:
      "Western Bridge - International consulting and development",
  });
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <AboutPurposeSection />

      <AboutValuesSection />
    </main>
  );
}