import type { Metadata } from "next";

import ContactSection from "@/components/contact/ContactSection";

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
      "Western Bridge kontaktieren | Internationale Beratung & Unterstützung",

    description:
      "Kontaktieren Sie Western Bridge für internationale Beratung, Gesundheitswesen, Unternehmen, Bildung, institutionelle Zusammenarbeit und professionelle Vorbereitung mit Fokus auf Deutschland und internationale Märkte.",
  },

  en: {
    title:
      "Contact Western Bridge | International Consulting & Support",

    description:
      "Contact Western Bridge for international consulting, healthcare, business, education, institutional cooperation and professional preparation, with Germany as a central gateway.",
  },

  ar: {
    title:
      "تواصل مع Western Bridge | استشارات ودعم دولي",

    description:
      "تواصل مع Western Bridge للاستفسار عن الاستشارات الدولية والرعاية الصحية والأعمال والتعليم والتعاون المؤسسي والاستعداد المهني، مع تركيز رئيسي على ألمانيا والأسواق الدولية.",
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
      "/contact",

    image:
      "/images/seo/western-bridge-og.jpg",

    imageAlt:
      "Western Bridge - Contact and international consulting",
  });
}

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}