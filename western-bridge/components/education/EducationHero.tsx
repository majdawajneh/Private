"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./EducationHero.module.css";

type Locale = "de" | "en" | "ar";

const content = {
  de: {
    backgroundWord: "BILDUNG",

    eyebrow: "Internationaler Bildungsaustausch",

    titleBefore: "Verbinden Sie Lernen mit",
    highlightedTitle: "globalen Möglichkeiten",

    description:
      "Western Bridge unterstützt Studierende, Lernende, Hochschulen, Bildungsanbieter und Institutionen dabei, internationale akademische Wege, berufliche Vorbereitung, institutionelle Zusammenarbeit und grenzüberschreitende Bildungsangebote zu erkunden.",

    audiences: [
      "Studierende & Lernende",
      "Hochschulen",
      "Bildungs- & Trainingsanbieter",
      "Bildungseinrichtungen",
    ],

    primaryButton: "Bildungswege entdecken",
    secondaryButton: "Institutionelle Partnerschaften",

    mainImageAlt:
      "Internationaler Hochschulcampus und akademisches Umfeld",

    captionLabel: "Internationale Bildung",

    captionTitle:
      "Akademische Wege und Lernen über Grenzen hinweg.",

    secondaryImageAlt:
      "Internationale Studierende in einer modernen Lernumgebung",

    secondaryLabel: "Studierende",
    secondaryTitle: "Internationales Lernen",

    floatingLabels: {
      germany: "Deutschland",
      universities: "Hochschulen",
      training: "Training & Lernen",
    },
  },

  en: {
    backgroundWord: "EDUCATION",

    eyebrow: "Global Education Exchange",

    titleBefore: "Connect Learning With",
    highlightedTitle: "Global Opportunity",

    description:
      "Western Bridge supports students, learners, universities, training providers, and educational institutions in exploring international academic pathways, professional preparation, institutional cooperation, and cross-border education opportunities.",

    audiences: [
      "Students & Learners",
      "Universities",
      "Training Providers",
      "Educational Institutions",
    ],

    primaryButton: "Explore Education Pathways",
    secondaryButton: "Institutional Partnerships",

    mainImageAlt:
      "International university campus and academic environment",

    captionLabel: "International Education",

    captionTitle:
      "Academic pathways and learning across borders.",

    secondaryImageAlt:
      "International students in a modern learning environment",

    secondaryLabel: "Students",
    secondaryTitle: "International Learning",

    floatingLabels: {
      germany: "Germany",
      universities: "Universities",
      training: "Training & Learning",
    },
  },

  ar: {
    backgroundWord: "التعليم",

    eyebrow: "التبادل التعليمي الدولي",

    titleBefore: "اربط التعلم بـ",
    highlightedTitle: "الفرص العالمية",

    description:
      "تدعم Western Bridge الطلاب والمتعلمين والجامعات ومقدمي التدريب والمؤسسات التعليمية في استكشاف المسارات الأكاديمية الدولية والاستعداد المهني والتعاون المؤسسي وفرص التعليم عبر الحدود.",

    audiences: [
      "الطلاب والمتعلمون",
      "الجامعات",
      "مقدمو التدريب",
      "المؤسسات التعليمية",
    ],

    primaryButton: "استكشف المسارات التعليمية",
    secondaryButton: "الشراكات المؤسسية",

    mainImageAlt:
      "حرم جامعي دولي وبيئة أكاديمية حديثة",

    captionLabel: "التعليم الدولي",

    captionTitle:
      "مسارات أكاديمية وتعلم يتجاوز الحدود.",

    secondaryImageAlt:
      "طلاب دوليون في بيئة تعليمية حديثة",

    secondaryLabel: "الطلاب",
    secondaryTitle: "التعلم الدولي",

    floatingLabels: {
      germany: "ألمانيا",
      universities: "الجامعات",
      training: "التدريب والتعلم",
    },
  },
} satisfies Record<
  Locale,
  {
    backgroundWord: string;
    eyebrow: string;
    titleBefore: string;
    highlightedTitle: string;
    description: string;
    audiences: string[];
    primaryButton: string;
    secondaryButton: string;
    mainImageAlt: string;
    captionLabel: string;
    captionTitle: string;
    secondaryImageAlt: string;
    secondaryLabel: string;
    secondaryTitle: string;
    floatingLabels: {
      germany: string;
      universities: string;
      training: string;
    };
  }
>;

export default function EducationHero() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section className={styles.hero}>
      <span
        className={styles.backgroundWord}
        aria-hidden="true"
      >
        {t.backgroundWord}
      </span>

      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              {t.eyebrow}
            </div>

            <h1 className={styles.title}>
              {t.titleBefore}{" "}
              <span className={styles.goldText}>
                {t.highlightedTitle}
              </span>
            </h1>

            <p className={styles.description}>
              {t.description}
            </p>

            <div className={styles.audienceRow}>
              {t.audiences.map((audience) => (
                <div
                  key={audience}
                  className={styles.audienceItem}
                >
                  <span className={styles.audienceDot} />
                  {audience}
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <Link
                href="#education-pathways"
                className={styles.primaryButton}
              >
                {t.primaryButton}

                <span aria-hidden="true">
                  {locale === "ar" ? "←" : "→"}
                </span>
              </Link>

              <Link
                href="#institutional-partnerships"
                className={styles.secondaryButton}
              >
                {t.secondaryButton}
              </Link>
            </div>
          </div>

          <div className={styles.visual}>
            <span
              className={styles.goldCircle}
              aria-hidden="true"
            />

            <div className={styles.mainImage}>
              <Image
                src="/images/education-campus.jpg"
                alt={t.mainImageAlt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
                className={styles.image}
              />

              <div className={styles.imageOverlay} />

              <div className={styles.imageCaption}>
                <span className={styles.captionLabel}>
                  {t.captionLabel}
                </span>

                <h2 className={styles.captionTitle}>
                  {t.captionTitle}
                </h2>
              </div>
            </div>

            <div className={styles.secondaryImage}>
              <Image
                src="/images/education-students.jpg"
                alt={t.secondaryImageAlt}
                fill
                sizes="(max-width: 650px) 65vw, 22vw"
                className={styles.image}
              />

              <div className={styles.secondaryOverlay} />

              <div className={styles.secondaryCaption}>
                <span>
                  {t.secondaryLabel}
                </span>

                <strong>
                  {t.secondaryTitle}
                </strong>
              </div>
            </div>

            <span className={styles.labelGermany}>
              {t.floatingLabels.germany}
            </span>

            <span className={styles.labelUniversities}>
              {t.floatingLabels.universities}
            </span>

            <span className={styles.labelTraining}>
              {t.floatingLabels.training}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}