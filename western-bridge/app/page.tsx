import Hero from "@/components/home/Hero";
import PathwaysSection from "@/components/home/PathwaysSection";
import GermanyGatewaySection from "@/components/home/GermanyGatewaySection";
import MedicalFocusSection from "@/components/home/MedicalFocusSection";
import BusinessExpansionSection from "@/components/home/BusinessExpansionSection";
import TrainingSection from "@/components/home/TrainingSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import AIAdvisorSection from "@/components/home/AIAdvisorSection";
import FinalCTASection from "@/components/home/FinalCTASection";

import {
  SITE_ALTERNATE_NAMES,
  SITE_NAME,
  SITE_URL,
  createPageMetadata,
} from "@/lib/seo";

export const metadata = createPageMetadata({
  title:
    "Western Bridge | الجسر الغربي | ويسترن بريدج",

  description:
    "Western Bridge (الجسر الغربي / ويسترن بريدج) provides international consulting, professional preparation, qualification, healthcare, education, business development and institutional cooperation with Germany as a central international gateway.",

  path: "/",

  image: "/images/brandenburg-gate.jpg",
});

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",

    "@type": "Organization",

    "@id": `${SITE_URL}/#organization`,

    name: SITE_NAME,

    alternateName: SITE_ALTERNATE_NAMES,

    url: SITE_URL,

    logo: {
      "@type": "ImageObject",

      url: `${SITE_URL}/logo/western-bridge-logo.png`,

      contentUrl:
        `${SITE_URL}/logo/western-bridge-logo.png`,
    },

    description:
      "Western Bridge, also known as الجسر الغربي and ويسترن بريدج, provides international consulting, professional preparation, qualification, healthcare, education, business development and institutional cooperation.",

    areaServed: [
      {
        "@type": "Country",
        name: "Germany",
      },

      {
        "@type": "Place",
        name: "Europe",
      },

      {
        "@type": "Place",
        name: "Middle East",
      },

      {
        "@type": "Place",
        name: "Gulf Cooperation Council",
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

  const websiteSchema = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    "@id": `${SITE_URL}/#website`,

    url: SITE_URL,

    name: SITE_NAME,

    alternateName: SITE_ALTERNATE_NAMES,

    description:
      "Western Bridge international consulting and development platform.",

    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },

    inLanguage: "en",
  };

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      organizationSchema,
      websiteSchema,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            structuredData
          ).replace(/</g, "\\u003c"),
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

        <AIAdvisorSection />

        <FinalCTASection />
      </main>
    </>
  );
}