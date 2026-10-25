"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./ServicesHero.module.css";

type Locale = "de" | "en" | "ar";

type ServiceArea = {
  number: string;
  title: string;
  text: string;
  href: string;
};

const content = {
  de: {
    eyebrow: "Western Bridge Services",

    titleBefore: "Von der Vorbereitung bis zum",
    highlightedTitle: "internationalen Wachstum.",

    description:
      "Beratung, Training, Qualifizierungsunterstützung, Marktentwicklung, Technologie und institutionelle Verbindungen – organisiert rund um den tatsächlichen Bedarf jedes Kunden.",

    primaryButton: "Unsere Leistungen entdecken",
    secondaryButton: "Mit Western Bridge sprechen",

    scope: [
      {
        number: "01",
        label: "Beratung",
      },
      {
        number: "02",
        label: "Vorbereitung",
      },
      {
        number: "03",
        label: "Training",
      },
      {
        number: "04",
        label: "Verbindungen",
      },
    ],

    backgroundAlt:
      "Internationales Geschäfts- und Berufsumfeld",

    consultingAlt:
      "Professionelles Beratungsgespräch mit Fokus auf internationale Strategie",

    imageLabel: "Western Bridge",

    imageTitle:
      "Internationale Beratung mit einem praktischen Weg nach vorn.",

    directoryLabel: "Leistungsbereiche",

    directoryTitle:
      "Wie können wir Sie unterstützen?",

    directoryCode:
      "WB / 04",

    serviceAreas: [
      {
        number: "01",
        title: "Privatpersonen",
        text:
          "Internationale Bildung, Training, Qualifizierung und berufliche Vorbereitung.",
        href: "#individual-services",
      },
      {
        number: "02",
        title: "Gesundheitswesen",
        text:
          "Sprache, Anerkennung, Vorbereitung auf Zulassungsanforderungen und berufliche Vorbereitung im Gesundheitsbereich.",
        href: "#medical-services",
      },
      {
        number: "03",
        title: "Unternehmen",
        text:
          "Marktforschung, internationales Wachstum, Partnerschaften und Geschäftsentwicklung.",
        href: "#business-services",
      },
      {
        number: "04",
        title: "Bildung & Institutionen",
        text:
          "Akademische Zusammenarbeit, Trainingspartnerschaften und institutionelle Verbindungen.",
        href: "#education-services",
      },
    ],
  },

  en: {
    eyebrow: "Western Bridge Services",

    titleBefore: "From Preparation to",
    highlightedTitle: "International Growth.",

    description:
      "Consulting, training, qualification support, market development, technology and institutional connections — organized around what the client actually needs.",

    primaryButton: "View Our Services",
    secondaryButton: "Talk to Western Bridge",

    scope: [
      {
        number: "01",
        label: "Advisory",
      },
      {
        number: "02",
        label: "Preparation",
      },
      {
        number: "03",
        label: "Training",
      },
      {
        number: "04",
        label: "Connections",
      },
    ],

    backgroundAlt:
      "International business and professional environment",

    consultingAlt:
      "Professional consulting meeting focused on international strategy",

    imageLabel: "Western Bridge",

    imageTitle:
      "International consulting with a practical route forward.",

    directoryLabel: "Service Areas",

    directoryTitle:
      "How can we support you?",

    directoryCode:
      "WB / 04",

    serviceAreas: [
      {
        number: "01",
        title: "Individuals",
        text:
          "International education, training, qualification and professional preparation.",
        href: "#individual-services",
      },
      {
        number: "02",
        title: "Healthcare",
        text:
          "Language, recognition, licensing readiness and medical professional preparation.",
        href: "#medical-services",
      },
      {
        number: "03",
        title: "Businesses",
        text:
          "Market research, international growth, partnerships and business development.",
        href: "#business-services",
      },
      {
        number: "04",
        title: "Education & Institutions",
        text:
          "Academic cooperation, training partnerships and institutional connections.",
        href: "#education-services",
      },
    ],
  },

  ar: {
    eyebrow: "خدمات Western Bridge",

    titleBefore: "من الاستعداد إلى",
    highlightedTitle: "النمو الدولي.",

    description:
      "الاستشارات والتدريب ودعم التأهيل وتطوير الأسواق والتكنولوجيا والروابط المؤسسية — ضمن خدمات منظمة بحسب الاحتياج الفعلي لكل عميل.",

    primaryButton: "استكشف خدماتنا",
    secondaryButton: "تحدث مع Western Bridge",

    scope: [
      {
        number: "01",
        label: "استشارات",
      },
      {
        number: "02",
        label: "استعداد",
      },
      {
        number: "03",
        label: "تدريب",
      },
      {
        number: "04",
        label: "روابط",
      },
    ],

    backgroundAlt:
      "بيئة أعمال ومهنية دولية",

    consultingAlt:
      "اجتماع استشاري مهني يركز على الاستراتيجية الدولية",

    imageLabel: "Western Bridge",

    imageTitle:
      "استشارات دولية مرتبطة بخطوات عملية واضحة.",

    directoryLabel: "مجالات الخدمات",

    directoryTitle:
      "كيف يمكننا دعمك؟",

    directoryCode:
      "WB / 04",

    serviceAreas: [
      {
        number: "01",
        title: "الأفراد",
        text:
          "التعليم الدولي والتدريب والتأهيل والاستعداد المهني.",
        href: "#individual-services",
      },
      {
        number: "02",
        title: "الرعاية الصحية",
        text:
          "اللغة والاعتراف والاستعداد لمتطلبات الترخيص والتحضير المهني للقطاع الطبي.",
        href: "#medical-services",
      },
      {
        number: "03",
        title: "الشركات",
        text:
          "دراسة الأسواق والنمو الدولي والشراكات وتطوير الأعمال.",
        href: "#business-services",
      },
      {
        number: "04",
        title: "التعليم والمؤسسات",
        text:
          "التعاون الأكاديمي والشراكات التدريبية والروابط المؤسسية.",
        href: "#education-services",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleBefore: string;
    highlightedTitle: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    scope: {
      number: string;
      label: string;
    }[];
    backgroundAlt: string;
    consultingAlt: string;
    imageLabel: string;
    imageTitle: string;
    directoryLabel: string;
    directoryTitle: string;
    directoryCode: string;
    serviceAreas: ServiceArea[];
  }
>;

export default function ServicesHero() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image
          src="/images/services-hero-international.jpg"
          alt={t.backgroundAlt}
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
        />

        <div className={styles.backgroundOverlay} />
      </div>

      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {t.eyebrow}
            </div>

            <h1 className={styles.title}>
              {t.titleBefore}

              <span>
                {t.highlightedTitle}
              </span>
            </h1>

            <p className={styles.description}>
              {t.description}
            </p>

            <div className={styles.actions}>
              <Link
                href="#service-system"
                className={styles.primaryButton}
              >
                {t.primaryButton}

                <span aria-hidden="true">
                  ↓
                </span>
              </Link>

              <Link
                href="/contact"
                className={styles.secondaryButton}
              >
                {t.secondaryButton}
              </Link>
            </div>

            <div className={styles.scope}>
              {t.scope.map((item) => (
                <div key={item.number}>
                  <span>
                    {item.number}
                  </span>

                  <strong>
                    {item.label}
                  </strong>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.consultingImage}>
              <Image
                src="/images/services-hero-consulting.jpg"
                alt={t.consultingAlt}
                fill
                sizes="(max-width: 900px) 100vw, 43vw"
                className={styles.image}
              />

              <div className={styles.imageOverlay} />

              <div className={styles.imageCaption}>
                <span>
                  {t.imageLabel}
                </span>

                <h2>
                  {t.imageTitle}
                </h2>
              </div>
            </div>

            <div className={styles.directory}>
              <div className={styles.directoryHeader}>
                <div>
                  <span className={styles.directoryLabel}>
                    {t.directoryLabel}
                  </span>

                  <h2>
                    {t.directoryTitle}
                  </h2>
                </div>

                <span className={styles.code}>
                  {t.directoryCode}
                </span>
              </div>

              <div className={styles.services}>
                {t.serviceAreas.map((service) => (
                  <Link
                    key={service.number}
                    href={service.href}
                    className={styles.service}
                  >
                    <span className={styles.serviceNumber}>
                      {service.number}
                    </span>

                    <div>
                      <h3>
                        {service.title}
                      </h3>

                      <p>
                        {service.text}
                      </p>
                    </div>

                    <span
                      className={styles.arrow}
                      aria-hidden="true"
                    >
                      {locale === "ar" ? "←" : "→"}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}