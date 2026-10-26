import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import PathwaysSection from "@/components/home/PathwaysSection";
import GermanyGatewaySection from "@/components/home/GermanyGatewaySection";
import MedicalFocusSection from "@/components/home/MedicalFocusSection";
import BusinessExpansionSection from "@/components/home/BusinessExpansionSection";
import TrainingSection from "@/components/home/TrainingSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FinalCTASection from "@/components/home/FinalCTASection";

import {
  SITE_ALTERNATE_NAMES,
  SITE_NAME,
  SITE_URL,
  SEO_IMAGE,
  absoluteUrl,
  createPageMetadata,
  localizedUrl,
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
      "Western Bridge | Beratung, Qualifizierung & internationale Wege nach Deutschland",

    description:
      "Internationale Beratung für Privatpersonen, medizinische Fachkräfte, Unternehmen und Bildungseinrichtungen. Vorbereitung, Qualifizierung, Training und internationale Verbindungen mit Fokus auf Deutschland.",

    organizationDescription:
      "Western Bridge ist eine internationale Beratungs- und Entwicklungsplattform für Privatpersonen, medizinische Fachkräfte, Unternehmen und Institutionen mit Schwerpunkt auf Deutschland und internationalen Märkten.",

    websiteDescription:
      "Western Bridge bietet internationale Beratung, Vorbereitung, Qualifizierung, Training und grenzüberschreitende Unterstützung mit Deutschland als zentralem Gateway.",
  },

  en: {
    title:
      "Western Bridge | International Consulting & Germany Pathways",

    description:
      "International consulting, qualification, training and cross-border support for individuals, healthcare professionals, businesses and institutions, with Germany as a central gateway.",

    organizationDescription:
      "Western Bridge is an international consulting and development platform supporting individuals, healthcare professionals, businesses and institutions with Germany as a central gateway to international markets.",

    websiteDescription:
      "Western Bridge provides international consulting, preparation, qualification, training and cross-border support with a strong focus on Germany.",
  },

  ar: {
    title:
      "Western Bridge | استشارات وتأهيل ومسارات دولية نحو ألمانيا",

    description:
      "استشارات دولية للأفراد والمتخصصين في القطاع الصحي والشركات والمؤسسات، تشمل التأهيل والتدريب والاستعداد وبناء الروابط الدولية مع تركيز رئيسي على ألمانيا.",

    organizationDescription:
      "Western Bridge هي منصة دولية للاستشارات والتطوير تدعم الأفراد والمتخصصين في القطاع الصحي والشركات والمؤسسات في الاستعداد والتأهيل وبناء المسارات الدولية مع تركيز رئيسي على ألمانيا.",

    websiteDescription:
      "تقدم Western Bridge الاستشارات الدولية والاستعداد والتأهيل والتدريب وبناء الروابط الدولية مع ألمانيا كبوابة رئيسية.",
  },
} satisfies Record<
  SiteLocale,
  {
    title: string;
    description: string;
    organizationDescription: string;
    websiteDescription: string;
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


/* ========================================
   Metadata
======================================== */

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
      "/",

    image:
      SEO_IMAGE,

    imageAlt:
      "Western Bridge",
  });
}


/* ========================================
   Page
======================================== */

export default async function HomePage({
  params,
}: PageProps) {
  const { locale: requestedLocale } =
    await params;

  const locale =
    getLocale(requestedLocale);

  const seo =
    seoContent[locale];

  const currentUrl =
    localizedUrl(
      locale,
      "/"
    );

  const schemaLanguage =
    locale;

  const seoImage =
    absoluteUrl(
      SEO_IMAGE
    );


  /* ========================================
     Organization Schema
  ======================================== */

  const organizationSchema = {
    "@type":
      "Organization",

    "@id":
      `${SITE_URL}/#organization`,

    name:
      SITE_NAME,

    alternateName:
      SITE_ALTERNATE_NAMES,

    url:
      SITE_URL,

    logo: {
      "@type":
        "ImageObject",

      url:
        `${SITE_URL}/logo/western-bridge-logo.png`,

      contentUrl:
        `${SITE_URL}/logo/western-bridge-logo.png`,
    },

    image:
      seoImage,

    description:
      seo.organizationDescription,

    areaServed: [
      {
        "@type":
          "Country",

        name:
          "Germany",
      },

      {
        "@type":
          "Place",

        name:
          "Europe",
      },

      {
        "@type":
          "Place",

        name:
          "Middle East",
      },

      {
        "@type":
          "Place",

        name:
          "Gulf Cooperation Council",
      },
    ],

    knowsAbout: [
      "International Consulting",
      "Germany Pathways",
      "Professional Preparation",
      "Qualification Support",
      "Healthcare",
      "Education",
      "Institutional Cooperation",
      "Business Development",
      "International Partnerships",
      "Training",
      "Technology",
    ],
  };


  /* ========================================
     Website Schema
  ======================================== */

  const websiteSchema = {
    "@type":
      "WebSite",

    "@id":
      `${SITE_URL}/#website`,

    url:
      SITE_URL,

    name:
      SITE_NAME,

    alternateName:
      SITE_ALTERNATE_NAMES,

    description:
      seo.websiteDescription,

    publisher: {
      "@id":
        `${SITE_URL}/#organization`,
    },

    inLanguage:
      schemaLanguage,
  };


  /* ========================================
     WebPage Schema
  ======================================== */

  const webPageSchema = {
    "@type":
      "WebPage",

    "@id":
      `${currentUrl}#webpage`,

    url:
      currentUrl,

    name:
      seo.title,

    description:
      seo.description,

    inLanguage:
      schemaLanguage,

    isPartOf: {
      "@id":
        `${SITE_URL}/#website`,
    },

    about: {
      "@id":
        `${SITE_URL}/#organization`,
    },

    primaryImageOfPage: {
      "@type":
        "ImageObject",

      url:
        seoImage,

      width:
        1200,

      height:
        630,
    },
  };


  /* ========================================
     Structured Data Graph
  ======================================== */

  const structuredData = {
    "@context":
      "https://schema.org",

    "@graph": [
      organizationSchema,
      websiteSchema,
      webPageSchema,
    ],
  };


  /* ========================================
     Render
  ======================================== */

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              structuredData
            ).replace(
              /</g,
              "\\u003c"
            ),
        }}
      />

      <main>
        <Hero />

        <PathwaysSection />

        <GermanyGatewaySection />

        <MedicalFocusSection />

        <BusinessExpansionSection />

        <TrainingSection />

        <HowItWorksSection />

        <FinalCTASection />
      </main>
    </>
  );
}