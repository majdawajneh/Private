"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./OrganizationalSolutionsSection.module.css";

type Locale = "de" | "en" | "ar";

type Module = {
  number: string;
  title: string;
  text: string;
  position:
    | "digital"
    | "people"
    | "education"
    | "market";
  education?: boolean;
};

const content = {
  de: {
    eyebrow:
      "Organisatorische Lösungen",

    titleLineOne:
      "Mehr als Beratung.",

    titleLineTwoBefore:
      "Bauen Sie die",
    highlightedTitle:
      "Fähigkeiten hinter Wachstum auf.",

    headerText:
      "Western Bridge unterstützt Organisationen durch eine umfassendere Kombination aus Technologie, Training, institutionellen Verbindungen, Bildungspartnerschaften und internationaler Marktentwicklung. Das Ziel besteht nicht nur darin, zu beraten, sondern Organisationen dabei zu unterstützen, Systeme und Fähigkeiten für nachhaltiges Wachstum zu stärken.",

    coreLabel:
      "Integrierte Lösungen",

    modules: [
      {
        number: "01",
        title:
          "Digitale Plattformen & Systeme",
        text:
          "Konzeption und Entwicklung digitaler Plattformen, Trainingssysteme, beschäftigungsbezogener Plattformen, HR-Lösungen, Websites und technologiegestützter organisatorischer Werkzeuge.",
        position: "digital",
      },
      {
        number: "02",
        title:
          "Menschen, Training & Kompetenzen",
        text:
          "Unterstützung bei beruflicher Entwicklung, Kompetenzaufbau, beruflicher Vorbereitung, Sprachtraining, Qualifizierungsprogrammen und organisatorischen Lerninitiativen.",
        position: "people",
      },
      {
        number: "03",
        title:
          "Bildung & institutionelle Partnerschaften",
        text:
          "Erkunden Sie Kooperationen mit Hochschulen, Trainingszentren, akademischen Einrichtungen, Berufsorganisationen und internationalen Bildungsnetzwerken für relevante institutionelle Initiativen.",
        position: "education",
        education: true,
      },
      {
        number: "04",
        title:
          "Marktkommunikation & Wachstum",
        text:
          "Stärken Sie Ihre internationale Positionierung durch digitales Marketing, Content-Strategie, Kommunikationssysteme, marktorientierte Plattformen und strukturierte Wachstumsunterstützung.",
        position: "market",
      },
    ],

    educationBadge:
      "Hochschulen & Institutionen",

    capabilityLabel:
      "Branchenübergreifende Kompetenz",

    capabilityTitle:
      "Unternehmen, Hochschulen, Trainingsanbieter & Institutionen",

    capabilityText:
      "Western Bridge kann Kooperations- und Entwicklungsinitiativen in kommerziellen, akademischen, beruflichen, trainingsbezogenen und institutionellen Umfeldern unterstützen. Die genaue Struktur richtet sich nach den Zielen und den beteiligten Organisationen.",

    capabilityButton:
      "Initiative besprechen",

    modulePrefix:
      "MODUL",

    logoAlt:
      "Western Bridge",
  },

  en: {
    eyebrow:
      "Organizational Solutions",

    titleLineOne:
      "More Than Consulting.",

    titleLineTwoBefore:
      "Build the",
    highlightedTitle:
      "Capabilities Behind Growth.",

    headerText:
      "Western Bridge supports organizations through a broader combination of technology, training, institutional connections, education partnerships, and international market development. The objective is not only to advise, but to help organizations strengthen the systems and capabilities that support long-term growth.",

    coreLabel:
      "Integrated Solutions",

    modules: [
      {
        number: "01",
        title:
          "Digital Platforms & Systems",
        text:
          "Design and development of digital platforms, training systems, recruitment-related platforms, HR solutions, websites, and technology-enabled organizational tools.",
        position: "digital",
      },
      {
        number: "02",
        title:
          "People, Training & Capability",
        text:
          "Support for professional development, workforce capability, vocational preparation, language training, qualification programs, and organizational learning initiatives.",
        position: "people",
      },
      {
        number: "03",
        title:
          "Education & Institutional Partnerships",
        text:
          "Explore cooperation with universities, training centers, academic institutions, professional bodies, and international education ecosystems for relevant institutional initiatives.",
        position: "education",
        education: true,
      },
      {
        number: "04",
        title:
          "Market Communication & Growth",
        text:
          "Strengthen international positioning through digital marketing, content strategy, communication systems, market-facing platforms, and structured growth support.",
        position: "market",
      },
    ],

    educationBadge:
      "Universities & Institutions",

    capabilityLabel:
      "Cross-Sector Capability",

    capabilityTitle:
      "Businesses, Universities, Training Providers & Institutions",

    capabilityText:
      "Western Bridge can support cooperation and development initiatives across commercial, educational, training, professional, and institutional environments. The exact structure depends on the objectives and the organizations involved.",

    capabilityButton:
      "Discuss an Initiative",

    modulePrefix:
      "MODULE",

    logoAlt:
      "Western Bridge",
  },

  ar: {
    eyebrow:
      "الحلول المؤسسية",

    titleLineOne:
      "أكثر من مجرد استشارات.",

    titleLineTwoBefore:
      "ابنِ",
    highlightedTitle:
      "القدرات التي تدعم النمو.",

    headerText:
      "تدعم Western Bridge المؤسسات من خلال مزيج أوسع من التكنولوجيا والتدريب والعلاقات المؤسسية والشراكات التعليمية وتطوير الأسواق الدولية. والهدف ليس تقديم الاستشارة فقط، بل مساعدة المؤسسات على تعزيز الأنظمة والقدرات التي تدعم النمو على المدى الطويل.",

    coreLabel:
      "حلول متكاملة",

    modules: [
      {
        number: "01",
        title:
          "المنصات والأنظمة الرقمية",
        text:
          "تصميم وتطوير المنصات الرقمية وأنظمة التدريب والمنصات المرتبطة بالتوظيف وحلول الموارد البشرية والمواقع والأدوات المؤسسية المدعومة بالتكنولوجيا.",
        position: "digital",
      },
      {
        number: "02",
        title:
          "الأفراد والتدريب وتطوير القدرات",
        text:
          "دعم التطوير المهني وبناء قدرات القوى العاملة والاستعداد المهني والتدريب اللغوي وبرامج التأهيل ومبادرات التعلم المؤسسي.",
        position: "people",
      },
      {
        number: "03",
        title:
          "التعليم والشراكات المؤسسية",
        text:
          "استكشاف التعاون مع الجامعات ومراكز التدريب والمؤسسات الأكاديمية والهيئات المهنية والمنظومات التعليمية الدولية في المبادرات المؤسسية ذات الصلة.",
        position: "education",
        education: true,
      },
      {
        number: "04",
        title:
          "التواصل مع السوق والنمو",
        text:
          "تعزيز التموضع الدولي من خلال التسويق الرقمي واستراتيجية المحتوى وأنظمة التواصل والمنصات الموجهة للسوق ودعم النمو المنظم.",
        position: "market",
      },
    ],

    educationBadge:
      "الجامعات والمؤسسات",

    capabilityLabel:
      "قدرات متعددة القطاعات",

    capabilityTitle:
      "الشركات والجامعات ومقدمو التدريب والمؤسسات",

    capabilityText:
      "يمكن لـ Western Bridge دعم مبادرات التعاون والتطوير في البيئات التجارية والتعليمية والتدريبية والمهنية والمؤسسية. ويعتمد الهيكل الفعلي لكل مبادرة على أهداف الجهات والمؤسسات المشاركة.",

    capabilityButton:
      "ناقش مبادرة",

    modulePrefix:
      "وحدة",

    logoAlt:
      "Western Bridge",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleLineOne: string;
    titleLineTwoBefore: string;
    highlightedTitle: string;
    headerText: string;
    coreLabel: string;
    modules: Module[];
    educationBadge: string;
    capabilityLabel: string;
    capabilityTitle: string;
    capabilityText: string;
    capabilityButton: string;
    modulePrefix: string;
    logoAlt: string;
  }
>;

export default function OrganizationalSolutionsSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section className={styles.section}>
      <span
        className={styles.glow}
        aria-hidden="true"
      />

      <Container>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {t.eyebrow}
            </div>

            <h2 className={styles.title}>
              {t.titleLineOne}
              <br />

              {t.titleLineTwoBefore}{" "}
              <span className={styles.goldText}>
                {t.highlightedTitle}
              </span>
            </h2>
          </div>

          <p className={styles.headerText}>
            {t.headerText}
          </p>
        </div>

        <div className={styles.system}>
          <div
            className={styles.systemGrid}
            aria-hidden="true"
          />

          <span
            className={`${styles.connector} ${styles.connectorTop}`}
            aria-hidden="true"
          />

          <span
            className={`${styles.connector} ${styles.connectorBottom}`}
            aria-hidden="true"
          />

          <span
            className={`${styles.connector} ${styles.connectorLeft}`}
            aria-hidden="true"
          />

          <span
            className={`${styles.connector} ${styles.connectorRight}`}
            aria-hidden="true"
          />

          <span
            className={`${styles.connectionDot} ${styles.dotTop}`}
            aria-hidden="true"
          />

          <span
            className={`${styles.connectionDot} ${styles.dotBottom}`}
            aria-hidden="true"
          />

          <span
            className={`${styles.connectionDot} ${styles.dotLeft}`}
            aria-hidden="true"
          />

          <span
            className={`${styles.connectionDot} ${styles.dotRight}`}
            aria-hidden="true"
          />

          <div className={styles.core}>
            <div>
              <div className={styles.coreLogo}>
                <Image
                  src="/logo/western-bridge-mark.jpeg"
                  alt={t.logoAlt}
                  width={52}
                  height={52}
                  className={styles.coreLogoImage}
                />
              </div>

              <span className={styles.coreLabel}>
                {t.coreLabel}
              </span>
            </div>
          </div>

          {t.modules.map((module) => (
            <article
              key={module.number}
              className={`${styles.module} ${styles[module.position]}`}
            >
              <span className={styles.moduleNumber}>
                {t.modulePrefix} {module.number}
              </span>

              <h3 className={styles.moduleTitle}>
                {module.title}
              </h3>

              <p className={styles.moduleText}>
                {module.text}
              </p>

              {module.education && (
                <div className={styles.educationBadge}>
                  <span aria-hidden="true">
                    ✦
                  </span>

                  {t.educationBadge}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className={styles.capabilityStrip}>
          <div>
            <span className={styles.capabilityLabel}>
              {t.capabilityLabel}
            </span>

            <h3 className={styles.capabilityTitle}>
              {t.capabilityTitle}
            </h3>

            <p className={styles.capabilityText}>
              {t.capabilityText}
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.capabilityButton}
          >
            {t.capabilityButton}

            <span aria-hidden="true">
              {locale === "ar" ? "←" : "→"}
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}