import type { Metadata } from "next";

import ServicesHero from "@/components/services/ServicesHero";
import ServiceSystemSection from "@/components/services/ServiceSystemSection";
import ServicesCapabilitiesSection from "@/components/services/ServicesCapabilitiesSection";
import ServicesDeliverySection from "@/components/services/ServicesDeliverySection";

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
      "Internationale Beratung & Qualifizierungsleistungen | Western Bridge",

    description:
      "Entdecken Sie die Leistungen von Western Bridge in internationaler Beratung, beruflicher Vorbereitung, Qualifizierung, Gesundheitswesen, Bildung, Geschäftsentwicklung, Technologie und institutionellem Networking.",
  },

  en: {
    title:
      "International Consulting & Qualification Services | Western Bridge",

    description:
      "Explore Western Bridge services in international consulting, professional preparation, qualification, healthcare, education, business development, technology and institutional networking.",
  },

  ar: {
    title:
      "خدمات الاستشارات والتأهيل الدولية | Western Bridge",

    description:
      "استكشف خدمات Western Bridge في الاستشارات الدولية والاستعداد المهني والتأهيل والرعاية الصحية والتعليم وتطوير الأعمال والتكنولوجيا وبناء العلاقات المؤسسية.",
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
      "/services",

    image:
      "/images/seo/western-bridge-og.jpg",

    imageAlt:
      "Western Bridge - International consulting and qualification services",
  });
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />

      <ServiceSystemSection />

      <ServicesCapabilitiesSection />

      <ServicesDeliverySection />
    </main>
  );
}