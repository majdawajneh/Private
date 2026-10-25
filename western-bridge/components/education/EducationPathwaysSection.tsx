"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./EducationPathwaysSection.module.css";

type Locale = "de" | "en" | "ar";

type Pathway = {
  number: string;
  label: string;
  title: string;
  text: string;
  href: string;
};

const content = {
  de: {
    backgroundWord: "LERNEN",

    eyebrow: "Internationale Bildungswege",

    titleBefore: "Mehr als ein Weg,",
    highlightedTitle: "international zu lernen",

    headerText:
      "Internationale Bildung kann viele Formen annehmen. Abhängig von Ihren Zielen, Ihrem Hintergrund, Ihrem Sprachniveau und Ihrem Beruf kann Ihr Weg ein Hochschulstudium, praktische Ausbildung, Sprachvorbereitung, berufliche Qualifizierung oder die Anerkennung früherer Bildungsabschlüsse umfassen.",

    imageAlt:
      "Studierender bei der Erkundung internationaler Bildungswege auf einem europäischen Hochschulcampus",

    captionLabel: "Ihre Bildungsrichtung",

    captionTitle:
      "Bauen Sie die Vorbereitung für Ihren nächsten Lernschritt auf.",

    captionText:
      "Studium, Ausbildung, Sprache, Qualifikationen und Dokumentation können alle Teil eines internationalen Bildungsweges sein.",

    badgeLabel: "Schwerpunkt",
    badgeTitle: "Deutschland",

    pathways: [
      {
        number: "01",
        label: "Akademischer Weg",
        title: "Hochschulstudium",
        text:
          "Entdecken Sie Bachelor-, Master- und weitere akademische Studienrichtungen und verstehen Sie dabei Vorbereitung, Dokumentation, Sprache und institutionelle Anforderungen.",
        href: "/contact",
      },
      {
        number: "02",
        label: "Praxisorientiertes Lernen",
        title: "Berufliche & praktische Ausbildung",
        text:
          "Entdecken Sie praxisorientierte Ausbildungs- und kompetenzbasierte Bildungswege, die Ihre berufliche Entwicklung und internationale Karrierevorbereitung unterstützen können.",
        href: "/services",
      },
      {
        number: "03",
        label: "Sprachliche Vorbereitung",
        title: "Sprachvorbereitung",
        text:
          "Bauen Sie die sprachliche Grundlage auf, die für Studium, Ausbildung, berufliche Qualifizierung oder die alltägliche Integration erforderlich sein kann.",
        href: "/services",
      },
      {
        number: "04",
        label: "Berufliche Entwicklung",
        title: "Berufliche Qualifizierung",
        text:
          "Verstehen Sie zusätzliche Trainings, Prüfungen, branchenspezifische Vorbereitung und Qualifizierungsmaßnahmen, die Ihren beruflichen Weg stärken können.",
        href: "/services",
      },
      {
        number: "05",
        label: "Akademische Dokumente",
        title: "Anerkennung & Dokumentation",
        text:
          "Bereiten Sie sich auf Übersetzung, Beglaubigung, Anerkennung von Qualifikationen und weitere administrative Anforderungen vor, die für Ihren vorgesehenen Weg relevant sein können.",
        href: "/services",
      },
    ],

    bottomLabel: "Unsicher bei der Auswahl?",

    bottomTitle:
      "Ihr Bildungsweg hängt von Ihrem Ziel ab",

    bottomText:
      "Western Bridge kann Ihnen helfen zu verstehen, welche Studien-, Ausbildungs-, Sprach-, Qualifizierungs- und Vorbereitungsschritte für Ihre Situation relevant sein können.",

    button: "Meinen Bildungsweg besprechen",

    ariaPrefix: "Mehr erfahren über",
  },

  en: {
    backgroundWord: "LEARN",

    eyebrow: "International Education Pathways",

    titleBefore: "More Than One Way to",
    highlightedTitle: "Learn Internationally",

    headerText:
      "International education can take many forms. Depending on your goals, background, language level, and profession, your pathway may involve university study, practical training, language preparation, professional qualification, or recognition of previous education.",

    imageAlt:
      "Student exploring international education pathways at a European university campus",

    captionLabel: "Your Education Direction",

    captionTitle:
      "Build the preparation behind your next learning step.",

    captionText:
      "Study, training, language, qualifications, and documentation can all form part of an international education pathway.",

    badgeLabel: "Key Focus",
    badgeTitle: "Germany",

    pathways: [
      {
        number: "01",
        label: "Academic Pathway",
        title: "University Study",
        text:
          "Explore undergraduate, postgraduate, and other academic study directions while understanding preparation, documentation, language, and institutional requirements.",
        href: "/contact",
      },
      {
        number: "02",
        label: "Practical Learning",
        title: "Vocational & Professional Training",
        text:
          "Explore practical training and skills-based education pathways that may support professional development and international career preparation.",
        href: "/services",
      },
      {
        number: "03",
        label: "Language Readiness",
        title: "Language Preparation",
        text:
          "Build the language foundation that may be required for academic study, vocational training, professional qualification, or everyday integration.",
        href: "/services",
      },
      {
        number: "04",
        label: "Career Development",
        title: "Professional Qualification",
        text:
          "Understand additional training, examinations, sector-specific preparation, and qualification development that may strengthen your professional pathway.",
        href: "/services",
      },
      {
        number: "05",
        label: "Academic Documents",
        title: "Recognition & Documentation",
        text:
          "Prepare for document translation, authentication, qualification recognition, and other administrative requirements that may apply to your intended pathway.",
        href: "/services",
      },
    ],

    bottomLabel: "Need Help Choosing?",

    bottomTitle:
      "Your Education Path Depends on Your Goal",

    bottomText:
      "Western Bridge can help you understand which study, training, language, qualification, and preparation areas may be relevant to your situation.",

    button: "Discuss Your Path",

    ariaPrefix: "Explore",
  },

  ar: {
    backgroundWord: "تعلّم",

    eyebrow: "مسارات التعليم الدولي",

    titleBefore: "هناك أكثر من طريق",
    highlightedTitle: "للتعلم دوليًا",

    headerText:
      "يمكن أن يأخذ التعليم الدولي أشكالًا متعددة. وبحسب أهدافك وخلفيتك ومستواك اللغوي ومجالك المهني، قد يشمل مسارك الدراسة الجامعية أو التدريب العملي أو الاستعداد اللغوي أو التأهيل المهني أو الاعتراف بالتعليم السابق.",

    imageAlt:
      "طالب يستكشف مسارات التعليم الدولي في حرم جامعي أوروبي",

    captionLabel: "اتجاهك التعليمي",

    captionTitle:
      "ابنِ الاستعداد الذي يدعم خطوتك التعليمية القادمة.",

    captionText:
      "يمكن أن تكون الدراسة والتدريب واللغة والمؤهلات والوثائق جميعها أجزاء من مسار تعليمي دولي.",

    badgeLabel: "تركيز رئيسي",
    badgeTitle: "ألمانيا",

    pathways: [
      {
        number: "01",
        label: "المسار الأكاديمي",
        title: "الدراسة الجامعية",
        text:
          "استكشف البكالوريوس والدراسات العليا والمسارات الأكاديمية الأخرى مع فهم متطلبات الاستعداد والوثائق واللغة والمؤسسات.",
        href: "/contact",
      },
      {
        number: "02",
        label: "التعلم العملي",
        title: "التدريب المهني والتطبيقي",
        text:
          "استكشف مسارات التدريب العملي والتعليم القائم على المهارات التي قد تدعم التطور المهني والاستعداد لمسار دولي.",
        href: "/services",
      },
      {
        number: "03",
        label: "الاستعداد اللغوي",
        title: "التحضير للغة",
        text:
          "ابنِ الأساس اللغوي الذي قد تحتاجه للدراسة الأكاديمية أو التدريب المهني أو التأهيل المهني أو الاندماج في الحياة اليومية.",
        href: "/services",
      },
      {
        number: "04",
        label: "التطوير المهني",
        title: "التأهيل المهني",
        text:
          "تعرّف على التدريب الإضافي والامتحانات والاستعدادات الخاصة بالقطاع وتطوير المؤهلات التي قد تعزز مسارك المهني.",
        href: "/services",
      },
      {
        number: "05",
        label: "الوثائق الأكاديمية",
        title: "الاعتراف والوثائق",
        text:
          "استعد لترجمة الوثائق وتصديقها والاعتراف بالمؤهلات والمتطلبات الإدارية الأخرى التي قد تنطبق على المسار الذي تستهدفه.",
        href: "/services",
      },
    ],

    bottomLabel: "تحتاج مساعدة في الاختيار؟",

    bottomTitle:
      "مسارك التعليمي يعتمد على هدفك",

    bottomText:
      "يمكن لـ Western Bridge مساعدتك في فهم مجالات الدراسة والتدريب واللغة والتأهيل والاستعداد التي قد تكون مرتبطة بحالتك.",

    button: "ناقش مسارك التعليمي",

    ariaPrefix: "استكشف",
  },
} satisfies Record<
  Locale,
  {
    backgroundWord: string;
    eyebrow: string;
    titleBefore: string;
    highlightedTitle: string;
    headerText: string;
    imageAlt: string;
    captionLabel: string;
    captionTitle: string;
    captionText: string;
    badgeLabel: string;
    badgeTitle: string;
    pathways: Pathway[];
    bottomLabel: string;
    bottomTitle: string;
    bottomText: string;
    button: string;
    ariaPrefix: string;
  }
>;

export default function EducationPathwaysSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section
      id="student-pathways"
      className={styles.section}
    >
      <span
        className={styles.backgroundWord}
        aria-hidden="true"
      >
        {t.backgroundWord}
      </span>

      <Container>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {t.eyebrow}
            </div>

            <h2 className={styles.title}>
              {t.titleBefore}{" "}
              <span className={styles.goldText}>
                {t.highlightedTitle}
              </span>
            </h2>
          </div>

          <p className={styles.headerText}>
            {t.headerText}
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.visual}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/education-pathways.jpg"
                alt={t.imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                className={styles.image}
              />

              <div className={styles.imageOverlay} />

              <div className={styles.imageCaption}>
                <span className={styles.captionLabel}>
                  {t.captionLabel}
                </span>

                <h3 className={styles.captionTitle}>
                  {t.captionTitle}
                </h3>

                <p className={styles.captionText}>
                  {t.captionText}
                </p>
              </div>
            </div>

            <div className={styles.germanyBadge}>
              <span className={styles.badgeLabel}>
                {t.badgeLabel}
              </span>

              <div className={styles.badgeTitle}>
                {t.badgeTitle}
              </div>

              <div
                className={styles.badgeLine}
                aria-hidden="true"
              />
            </div>
          </div>

          <div className={styles.pathways}>
            {t.pathways.map((pathway) => (
              <article
                key={pathway.number}
                className={styles.pathway}
              >
                <span className={styles.number}>
                  {pathway.number}
                </span>

                <div>
                  <span className={styles.pathwayLabel}>
                    {pathway.label}
                  </span>

                  <h3 className={styles.pathwayTitle}>
                    {pathway.title}
                  </h3>

                  <p className={styles.pathwayText}>
                    {pathway.text}
                  </p>
                </div>

                <Link
                  href={pathway.href}
                  className={styles.arrow}
                  aria-label={`${t.ariaPrefix} ${pathway.title}`}
                >
                  {locale === "ar" ? "←" : "→"}
                </Link>
              </article>
            ))}

            <div className={styles.bottom}>
              <div className={styles.bottomContent}>
                <span className={styles.bottomLabel}>
                  {t.bottomLabel}
                </span>

                <h3 className={styles.bottomTitle}>
                  {t.bottomTitle}
                </h3>

                <p className={styles.bottomText}>
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
          </div>
        </div>
      </Container>
    </section>
  );
}