"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./ServicesCapabilitiesSection.module.css";

type Locale = "de" | "en" | "ar";

type Capability = {
  number: string;
  title: string;
  text: string;
};

const content = {
  de: {
    eyebrow: "Kernkompetenzen",

    titleLineOne: "Was Western Bridge",
    titleLineTwo: "tatsächlich leisten kann.",

    intro:
      "Diese Kompetenzen können als eigenständige Leistungen oder als Teil eines größeren Kundenprojekts eingesetzt werden. Die konkrete Kombination hängt vom Ziel, der Branche, dem Markt und dem erforderlichen Vorbereitungsniveau ab.",

    visualAlt:
      "Professionelles Team bei Strategiearbeit, Geschäftsentwicklung und internationalen Projekten",

    visualLabel:
      "Western Bridge Kompetenzrahmen",

    visualTitle:
      "Strategie, Vorbereitung, Technologie und Verbindungen innerhalb einer gemeinsamen Struktur.",

    ledgerCapability:
      "Kompetenz",

    ledgerScope:
      "Leistungsumfang",

    capabilities: [
      {
        number: "01",
        title: "Beratung & Geschäftsentwicklung",
        text:
          "Administrative, fachliche, operative und wachstumsorientierte Beratung für Privatpersonen, Unternehmen und Institutionen.",
      },
      {
        number: "02",
        title: "Machbarkeits- & Marktstudien",
        text:
          "Marktforschung, Machbarkeitsanalysen, Geschäftsplanung, Chancenbewertung und strukturierte Vorbereitung auf den Markteintritt.",
      },
      {
        number: "03",
        title: "Training & Qualifizierung",
        text:
          "Sprachliche, berufliche, praktische, beschäftigungsbezogene, institutionelle und sektorspezifische Vorbereitungsprogramme.",
      },
      {
        number: "04",
        title: "Dokumentation & Qualifikationsunterstützung",
        text:
          "Dokumentenvorbereitung, Koordination von Übersetzungen, Orientierung zu Beglaubigungen sowie Vorbereitung auf akademische oder berufliche Anerkennung.",
      },
      {
        number: "05",
        title: "Digitale Plattformen & Technologie",
        text:
          "Konzeption und Entwicklung digitaler Plattformen und Systeme für Beschäftigung, Training, Bildung, HR und betriebliche Unterstützung.",
      },
      {
        number: "06",
        title: "HR- & Organisationslösungen",
        text:
          "Digitale HR-Werkzeuge, personalbezogene Systeme, organisatorische Abläufe, Kompetenzentwicklung und operative Unterstützung.",
      },
      {
        number: "07",
        title: "Marketing, Content & Events",
        text:
          "Digitale Kommunikation, Content-Entwicklung, Kampagnen, Seminare, Konferenzen, Ausstellungen und professionelle Veranstaltungen.",
      },
      {
        number: "08",
        title: "Internationales Networking",
        text:
          "Recherche, Kontaktanbahnung, institutionelle Verbindungen, kommerzielle Vermittlung und Kooperationsentwicklung über verschiedene Märkte hinweg.",
      },
    ],

    bottomLabel:
      "Benötigen Sie mehr als eine Kompetenz?",

    bottomTitle:
      "Bauen Sie einen kombinierten Leistungsumfang rund um Ihr Projekt auf.",

    bottomText:
      "Ein Projekt kann Beratung, Recherche, Training, Technologie, Networking und institutionelle Unterstützung miteinander verbinden, anstatt jede Anforderung getrennt zu behandeln.",

    button:
      "Leistungsumfang besprechen",
  },

  en: {
    eyebrow: "Core Capabilities",

    titleLineOne: "What Western Bridge",
    titleLineTwo: "Can Actually Deliver.",

    intro:
      "These capabilities can work as standalone services or as part of a larger client project. The combination depends on the objective, sector, market, and level of preparation required.",

    visualAlt:
      "Professional team working on strategy, business development and international projects",

    visualLabel:
      "Western Bridge Capability Framework",

    visualTitle:
      "Strategy, preparation, technology and connections under one structure.",

    ledgerCapability:
      "Capability",

    ledgerScope:
      "Scope",

    capabilities: [
      {
        number: "01",
        title: "Consulting & Business Development",
        text:
          "Administrative, professional, operational, and growth-focused consulting for individuals, businesses, and institutions.",
      },
      {
        number: "02",
        title: "Feasibility & Market Studies",
        text:
          "Market research, feasibility analysis, business planning, opportunity assessment, and structured market-entry preparation.",
      },
      {
        number: "03",
        title: "Training & Qualification",
        text:
          "Language, professional, vocational, employability, institutional, and sector-specific preparation programs.",
      },
      {
        number: "04",
        title: "Documentation & Qualification Support",
        text:
          "Document preparation, translation coordination, authentication guidance, and academic or professional recognition readiness.",
      },
      {
        number: "05",
        title: "Digital Platforms & Technology",
        text:
          "Design and development of recruitment, training, education, HR, and business-support digital platforms and systems.",
      },
      {
        number: "06",
        title: "HR & Organizational Solutions",
        text:
          "Digital HR tools, workforce-related systems, organizational workflows, capability development, and operational support.",
      },
      {
        number: "07",
        title: "Marketing, Content & Events",
        text:
          "Digital communication, content development, campaigns, seminars, conferences, exhibitions, and professional events.",
      },
      {
        number: "08",
        title: "International Networking",
        text:
          "Research, introductions, institutional connections, commercial mediation, and cooperation development across markets.",
      },
    ],

    bottomLabel:
      "Need More Than One Capability?",

    bottomTitle:
      "Build a combined service scope around your project.",

    bottomText:
      "A project can combine consulting, research, training, technology, networking, and institutional support instead of treating each requirement separately.",

    button:
      "Discuss a Service Scope",
  },

  ar: {
    eyebrow: "القدرات الأساسية",

    titleLineOne: "ما الذي تستطيع Western Bridge",
    titleLineTwo: "تقديمه فعليًا.",

    intro:
      "يمكن تقديم هذه القدرات كخدمات مستقلة أو كجزء من مشروع أكبر للعميل. ويعتمد المزيج المناسب على الهدف والقطاع والسوق ومستوى الاستعداد المطلوب.",

    visualAlt:
      "فريق مهني يعمل على الاستراتيجية وتطوير الأعمال والمشاريع الدولية",

    visualLabel:
      "إطار قدرات Western Bridge",

    visualTitle:
      "الاستراتيجية والاستعداد والتكنولوجيا وبناء العلاقات ضمن هيكل واحد.",

    ledgerCapability:
      "القدرة",

    ledgerScope:
      "النطاق",

    capabilities: [
      {
        number: "01",
        title: "الاستشارات وتطوير الأعمال",
        text:
          "استشارات إدارية ومهنية وتشغيلية واستشارات موجهة للنمو للأفراد والشركات والمؤسسات.",
      },
      {
        number: "02",
        title: "دراسات الجدوى والأسواق",
        text:
          "دراسة الأسواق وتحليل الجدوى وتخطيط الأعمال وتقييم الفرص والاستعداد المنظم لدخول السوق.",
      },
      {
        number: "03",
        title: "التدريب والتأهيل",
        text:
          "برامج الاستعداد اللغوي والمهني والعملي والتوظيفي والمؤسسي والمتخصص حسب القطاع.",
      },
      {
        number: "04",
        title: "دعم الوثائق والتأهيل",
        text:
          "تجهيز الوثائق وتنسيق الترجمة والإرشاد للتصديقات والاستعداد للاعتراف الأكاديمي أو المهني.",
      },
      {
        number: "05",
        title: "المنصات الرقمية والتكنولوجيا",
        text:
          "تصميم وتطوير المنصات والأنظمة الرقمية المرتبطة بالتوظيف والتدريب والتعليم والموارد البشرية ودعم الأعمال.",
      },
      {
        number: "06",
        title: "حلول الموارد البشرية والمؤسسات",
        text:
          "أدوات موارد بشرية رقمية وأنظمة مرتبطة بالقوى العاملة ومسارات عمل مؤسسية وتطوير القدرات والدعم التشغيلي.",
      },
      {
        number: "07",
        title: "التسويق والمحتوى والفعاليات",
        text:
          "التواصل الرقمي وتطوير المحتوى والحملات والندوات والمؤتمرات والمعارض والفعاليات المهنية.",
      },
      {
        number: "08",
        title: "بناء العلاقات الدولية",
        text:
          "البحث والتعريف بين الجهات والروابط المؤسسية والوساطة التجارية وتطوير التعاون بين الأسواق.",
      },
    ],

    bottomLabel:
      "هل تحتاج إلى أكثر من قدرة واحدة؟",

    bottomTitle:
      "ابنِ نطاق خدمات متكاملًا حول مشروعك.",

    bottomText:
      "يمكن للمشروع الواحد أن يجمع الاستشارات والبحث والتدريب والتكنولوجيا وبناء العلاقات والدعم المؤسسي بدل التعامل مع كل متطلب بشكل منفصل.",

    button:
      "ناقش نطاق الخدمات",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleLineOne: string;
    titleLineTwo: string;
    intro: string;
    visualAlt: string;
    visualLabel: string;
    visualTitle: string;
    ledgerCapability: string;
    ledgerScope: string;
    capabilities: Capability[];
    bottomLabel: string;
    bottomTitle: string;
    bottomText: string;
    button: string;
  }
>;

export default function ServicesCapabilitiesSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div className={styles.heading}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {t.eyebrow}
            </div>

            <h2 className={styles.title}>
              {t.titleLineOne}
              <br />

              <span>
                {t.titleLineTwo}
              </span>
            </h2>
          </div>

          <p className={styles.intro}>
            {t.intro}
          </p>
        </div>

        <div className={styles.visual}>
          <Image
            src="/images/services-capabilities.jpg"
            alt={t.visualAlt}
            fill
            sizes="100vw"
            className={styles.image}
          />

          <div className={styles.overlay} />

          <div className={styles.visualContent}>
            <span>
              {t.visualLabel}
            </span>

            <h3>
              {t.visualTitle}
            </h3>
          </div>
        </div>

        <div className={styles.ledger}>
          <div className={styles.ledgerHeader}>
            <span>
              {t.ledgerCapability}
            </span>

            <span>
              {t.ledgerScope}
            </span>
          </div>

          {t.capabilities.map((capability) => (
            <article
              key={capability.number}
              className={styles.row}
            >
              <div className={styles.identity}>
                <span className={styles.number}>
                  {capability.number}
                </span>

                <h3>
                  {capability.title}
                </h3>
              </div>

              <p>
                {capability.text}
              </p>
            </article>
          ))}
        </div>

        <div className={styles.bottom}>
          <div>
            <span className={styles.bottomLabel}>
              {t.bottomLabel}
            </span>

            <h3>
              {t.bottomTitle}
            </h3>

            <p>
              {t.bottomText}
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.button}
          >
            {t.button}

            <span aria-hidden="true">
              {locale === "ar" ? "←" : "→"}
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}