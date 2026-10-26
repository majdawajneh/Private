import type { Metadata } from "next";

import MedicalHero from "@/components/medical/MedicalHero";
import MedicalPathwaySection from "@/components/medical/MedicalPathwaySection";
import ProfessionRoutesSection from "@/components/medical/ProfessionRoutesSection";
import MedicalReadinessSection from "@/components/medical/MedicalReadinessSection";

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
      "Medizinische Fachkräfte & internationale Wege | Western Bridge",

    description:
      "Western Bridge unterstützt medizinische Fachkräfte wie Pflegekräfte, Ärzte, Apotheker und weitere Gesundheitsberufe bei Vorbereitung, Qualifizierung und internationalen beruflichen Wegen mit besonderem Fokus auf Deutschland.",
  },

  en: {
    title:
      "Healthcare & Medical International Pathways | Western Bridge",

    description:
      "Western Bridge supports healthcare professionals including nurses, doctors, pharmacists and allied health professionals with preparation, qualification and structured international pathways, with a strong focus on Germany.",
  },

  ar: {
    title:
      "المسارات الدولية للكوادر الطبية والصحية | Western Bridge",

    description:
      "تدعم Western Bridge الممرضين والأطباء والصيادلة وغيرهم من المتخصصين في القطاع الصحي من خلال الاستعداد والتأهيل وفهم المسارات المهنية الدولية، مع تركيز خاص على ألمانيا.",
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
      "/medical",

    image:
      "/images/seo/western-bridge-og.jpg",

    imageAlt:
      "Western Bridge - Healthcare and medical international pathways",
  });
}

export default function MedicalPage() {
  return (
    <main>
      <MedicalHero />

      <MedicalPathwaySection />

      <ProfessionRoutesSection />

      <MedicalReadinessSection />
    </main>
  );
}