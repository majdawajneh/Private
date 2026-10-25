"use client";

import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./IndividualOptionsSection.module.css";

type Locale = "de" | "en" | "ar";

type OptionItem = {
  number: string;
  id: string;
  label: string;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
};

const content = {
  de: {
    eyebrow: "Was suchen Sie?",

    titleBefore: "Entdecken Sie den Weg, der zu",
    highlightedTitle: "Ihrem Ziel passt",

    description:
      "Unterschiedliche Ziele erfordern unterschiedliche Vorbereitung. Entdecken Sie die Bereiche, in denen Western Bridge Ihnen helfen kann, Ihre Möglichkeiten besser zu verstehen und sich gezielt auf Ihren nächsten Schritt vorzubereiten.",

    explore: "Entdecken",

    helpTitle:
      "Sie sind sich nicht sicher, welcher Weg zu Ihnen passt?",

    helpText:
      "Western Bridge unterstützt Sie dabei, relevante Möglichkeiten auf Grundlage Ihres beruflichen Hintergrunds, Ihres Ziels und Ihrer geplanten internationalen Ausrichtung besser einzuordnen.",

    helpButton:
      "Persönliche Orientierung erhalten",

    options: [
      {
        number: "01",
        id: "career",
        label: "Berufliche Wege",
        title: "Arbeit & berufliche Perspektiven",
        description:
          "Entdecken Sie berufliche Richtungen, Vorbereitungsbedarf und internationale Wege, die zu Ihrem Hintergrund und Ihren langfristigen Zielen passen können.",
        href: "/services",
      },
      {
        number: "02",
        id: "germany",
        label: "Hauptmarkt",
        title: "Wege nach Deutschland",
        description:
          "Verstehen Sie berufliche, ausbildungsbezogene, qualifikationsbezogene und vorbereitende Wege mit Fokus auf Deutschland und abgestimmt auf Ihre Situation.",
        href: "/germany",
        featured: true,
      },
      {
        number: "03",
        id: "medical",
        label: "Schwerpunkt Gesundheitswesen",
        title: "Medizinische Fachkräfte",
        description:
          "Spezialisierte Orientierung für Pflegefachkräfte, Ärzte, Apotheker und weitere Gesundheitsberufe bei der Vorbereitung auf internationale Wege.",
        href: "/medical",
      },
      {
        number: "04",
        id: "training",
        label: "Berufliche Vorbereitung",
        title: "Training & Qualifizierung",
        description:
          "Bauen Sie sprachliche, berufliche und fachliche Voraussetzungen auf, die Ihre internationale Entwicklung unterstützen können.",
        href: "/services",
      },
      {
        number: "05",
        id: "language",
        label: "Sprachvorbereitung",
        title: "Deutsch & Berufssprache",
        description:
          "Bereiten Sie sich durch allgemeines Deutsch, branchenspezifische Sprache und professionelle Kommunikation gezielt vor.",
        href: "/services",
      },
      {
        number: "06",
        id: "documents",
        label: "Unterstützung bei Qualifikationen",
        title: "Anerkennung & Dokumente",
        description:
          "Erhalten Sie Orientierung bei Anerkennung, Übersetzung, Beglaubigung, Dokumentenvorbereitung und internationaler Bewerbungsbereitschaft.",
        href: "/services",
      },
    ],
  },

  en: {
    eyebrow: "What Are You Looking For?",

    titleBefore: "Explore the Path That Fits",
    highlightedTitle: "Your Goal",

    description:
      "Different goals require different preparation. Explore the areas where Western Bridge can help you understand your options and prepare for your next step.",

    explore: "Explore",

    helpTitle:
      "Not sure which pathway applies to you?",

    helpText:
      "Western Bridge can help you identify relevant directions based on your professional background, destination, and international goal.",

    helpButton:
      "Get Personal Guidance",

    options: [
      {
        number: "01",
        id: "career",
        label: "Career Pathways",
        title: "Work & Professional Pathways",
        description:
          "Explore professional directions, preparation needs, and international pathways that may fit your background and long-term goals.",
        href: "/services",
      },
      {
        number: "02",
        id: "germany",
        label: "Primary Market",
        title: "Germany Pathways",
        description:
          "Understand Germany-focused professional, training, qualification, and preparation pathways with guidance tailored to your situation.",
        href: "/germany",
        featured: true,
      },
      {
        number: "03",
        id: "medical",
        label: "Healthcare Focus",
        title: "Medical Professionals",
        description:
          "Specialized guidance for nurses, doctors, pharmacists, and other healthcare professionals preparing for international pathways.",
        href: "/medical",
      },
      {
        number: "04",
        id: "training",
        label: "Professional Readiness",
        title: "Training & Qualification",
        description:
          "Build the language, professional, and qualification readiness that may support your international development.",
        href: "/services",
      },
      {
        number: "05",
        id: "language",
        label: "Language Preparation",
        title: "German & Professional Language",
        description:
          "Prepare through general German, sector-specific language, and professional communication programs where applicable.",
        href: "/services",
      },
      {
        number: "06",
        id: "documents",
        label: "Qualification Support",
        title: "Recognition & Documents",
        description:
          "Get guidance on qualification recognition, translation, authentication, document preparation, and application readiness.",
        href: "/services",
      },
    ],
  },

  ar: {
    eyebrow: "ما الذي تبحث عنه؟",

    titleBefore: "استكشف المسار الذي يناسب",
    highlightedTitle: "هدفك",

    description:
      "كل هدف يحتاج إلى نوع مختلف من الاستعداد. استكشف المجالات التي يمكن لـ Western Bridge أن تساعدك من خلالها على فهم خياراتك والاستعداد لخطوتك التالية.",

    explore: "استكشف",

    helpTitle:
      "لست متأكدًا من المسار المناسب لك؟",

    helpText:
      "تساعدك Western Bridge على تحديد الاتجاهات المناسبة بناءً على خلفيتك المهنية، والوجهة التي تستهدفها، وهدفك الدولي.",

    helpButton:
      "احصل على توجيه شخصي",

    options: [
      {
        number: "01",
        id: "career",
        label: "المسارات المهنية",
        title: "العمل والمسارات المهنية",
        description:
          "استكشف الاتجاهات المهنية ومتطلبات الاستعداد والمسارات الدولية التي قد تتناسب مع خلفيتك وأهدافك طويلة المدى.",
        href: "/services",
      },
      {
        number: "02",
        id: "germany",
        label: "السوق الرئيسي",
        title: "مسارات ألمانيا",
        description:
          "تعرّف على المسارات المهنية والتدريبية والتأهيلية والاستعدادية المرتبطة بألمانيا بما يتناسب مع وضعك وأهدافك.",
        href: "/germany",
        featured: true,
      },
      {
        number: "03",
        id: "medical",
        label: "القطاع الطبي",
        title: "المتخصصون في القطاع الطبي",
        description:
          "توجيه متخصص للممرضين والأطباء والصيادلة وغيرهم من العاملين في القطاع الطبي الراغبين في الاستعداد لمسارات دولية.",
        href: "/medical",
      },
      {
        number: "04",
        id: "training",
        label: "الجاهزية المهنية",
        title: "التدريب والتأهيل",
        description:
          "طوّر جاهزيتك اللغوية والمهنية والتأهيلية بما يمكن أن يدعم تطورك الدولي.",
        href: "/services",
      },
      {
        number: "05",
        id: "language",
        label: "الاستعداد اللغوي",
        title: "الألمانية واللغة المهنية",
        description:
          "استعد من خلال اللغة الألمانية العامة، واللغة الخاصة بالمجال، والتواصل المهني وفقًا لاحتياجات مسارك.",
        href: "/services",
      },
      {
        number: "06",
        id: "documents",
        label: "دعم المؤهلات",
        title: "الاعتراف والوثائق",
        description:
          "احصل على توجيه بخصوص الاعتراف بالمؤهلات والترجمة والتصديق وتجهيز الوثائق والاستعداد للتقديم الدولي.",
        href: "/services",
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
    explore: string;
    helpTitle: string;
    helpText: string;
    helpButton: string;
    options: OptionItem[];
  }
>;

function OptionIcon({ id }: { id: string }) {
  if (id === "germany") {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="8"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M4 12H20"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M12 4C14.5 6.2 16 8.8 16 12C16 15.2 14.5 17.8 12 20"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M12 4C9.5 6.2 8 8.8 8 12C8 15.2 9.5 17.8 12 20"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === "medical") {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M9 3H15V9H21V15H15V21H9V15H3V9H9V3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (id === "training") {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 8L12 4L21 8L12 12L3 8Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M6 10V15C6 17 8.7 19 12 19C15.3 19 18 17 18 15V10"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === "language") {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 5H20"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M7 5C7.8 10.5 10.4 14.5 15 17"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M16 5C15 11 11.5 15.5 6 18"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M14 15L18 21"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === "documents") {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 3H15L19 7V21H6V3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M15 3V7H19"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M9 12H16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M9 16H14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="7"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5 20C5.6 15.8 8 13 12 13C16 13 18.4 15.8 19 20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function IndividualOptionsSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section
      id="individual-pathways"
      className={styles.section}
    >
      <div className={styles.decorationOne} />
      <div className={styles.decorationTwo} />

      <Container>
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />

            {t.eyebrow}

            <span className={styles.eyebrowLine} />
          </div>

          <h2 className={styles.title}>
            {t.titleBefore}{" "}
            <span className={styles.goldText}>
              {t.highlightedTitle}
            </span>
          </h2>

          <p className={styles.description}>
            {t.description}
          </p>
        </div>

        <div className={styles.grid}>
          {t.options.map((option) => (
            <article
              key={option.id}
              className={`${styles.card} ${
                option.featured
                  ? styles.featuredCard
                  : ""
              }`}
            >
              <span className={styles.number}>
                {option.number}
              </span>

              <div className={styles.iconWrapper}>
                <OptionIcon id={option.id} />
              </div>

              <span className={styles.cardLabel}>
                {option.label}
              </span>

              <h3 className={styles.cardTitle}>
                {option.title}
              </h3>

              <p className={styles.cardDescription}>
                {option.description}
              </p>

              <Link
                href={option.href}
                className={styles.cardLink}
              >
                {t.explore}

                <span aria-hidden="true">
                  {locale === "ar" ? "←" : "→"}
                </span>
              </Link>
            </article>
          ))}
        </div>

        <div className={styles.bottomHelp}>
          <div className={styles.helpContent}>
            <h3 className={styles.helpTitle}>
              {t.helpTitle}
            </h3>

            <p className={styles.helpText}>
              {t.helpText}
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.helpButton}
          >
            {t.helpButton}
          </Link>
        </div>
      </Container>
    </section>
  );
}