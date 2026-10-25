"use client";

import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./TrainingSection.module.css";

type Locale = "de" | "en" | "ar";

type TrainingItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
};

const content = {
  de: {
    eyebrow: "Training & Qualifizierung",

    titleBefore: "Bereiten Sie sich auf Ihren",
    highlightedTitle: "internationalen Weg vor",

    description:
      "Western Bridge unterstützt Ihre berufliche Vorbereitung durch Sprachtraining, Qualifizierung, Prüfungsvorbereitung, Orientierung bei Anerkennungsverfahren und Unterstützung bei relevanten Dokumenten.",

    learnMore: "Mehr erfahren",

    bottomTitle:
      "Sie sind sich noch nicht sicher, wo Ihre Vorbereitung beginnen sollte?",

    bottomText:
      "Western Bridge hilft Ihnen dabei zu verstehen, welche sprachlichen, fachlichen, anerkennungsbezogenen oder vorbereitenden Schritte zu Ihrem beruflichen Ziel passen können.",

    bottomButton: "Orientierung erhalten",

    trainingItems: [
      {
        id: "german",
        label: "Sprachvorbereitung",
        title: "Deutsch",
        description:
          "Sprachliche Vorbereitung für internationale Studien-, Ausbildungs-, Berufs- und Mobilitätswege mit Bezug zu Deutschland.",
        href: "/services",
      },
      {
        id: "medical-german",
        label: "Schwerpunkt Gesundheitswesen",
        title: "Medizinisches Deutsch",
        description:
          "Spezialisierte Sprachvorbereitung für Fachkräfte im Gesundheitswesen mit Fokus auf medizinische Terminologie, Kommunikation im Arbeitsalltag und berufliche Vorbereitung.",
        href: "/medical",
        featured: true,
      },
      {
        id: "licensing",
        label: "Berufliche Vorbereitung",
        title: "Prüfungen & Zulassung",
        description:
          "Unterstützung bei der Vorbereitung auf berufliche, qualifikationsbezogene, zulassungsrelevante und branchenspezifische Prüfungen, soweit diese erforderlich sind.",
        href: "/services",
      },
      {
        id: "recognition",
        label: "Dokumente & Qualifikationen",
        title: "Anerkennung & Dokumentation",
        description:
          "Orientierung bei der Anerkennung von Qualifikationen sowie bei Dokumentenvorbereitung, Übersetzung, Beglaubigung und internationalen Bewerbungsprozessen.",
        href: "/services",
      },
    ],
  },

  en: {
    eyebrow: "Training & Qualification",

    titleBefore: "Prepare for Your",
    highlightedTitle: "International Path",

    description:
      "Western Bridge supports professional readiness through language training, qualification preparation, exam preparation, recognition guidance, and document support.",

    learnMore: "Learn More",

    bottomTitle:
      "Not sure where your preparation should begin?",

    bottomText:
      "Western Bridge can help you understand which language, qualification, recognition, or preparation pathway may fit your professional goal.",

    bottomButton: "Get Guidance",

    trainingItems: [
      {
        id: "german",
        label: "Language Preparation",
        title: "German Language",
        description:
          "Language preparation designed to support international study, training, professional, and relocation pathways connected to Germany.",
        href: "/services",
      },
      {
        id: "medical-german",
        label: "Healthcare Focus",
        title: "Medical German",
        description:
          "Specialized language preparation for healthcare professionals who need medical terminology, workplace communication, and professional readiness.",
        href: "/medical",
        featured: true,
      },
      {
        id: "licensing",
        label: "Professional Preparation",
        title: "Exams & Licensing",
        description:
          "Preparation support for professional, licensing, qualification, and sector-specific examinations where applicable.",
        href: "/services",
      },
      {
        id: "recognition",
        label: "Documents & Qualifications",
        title: "Recognition & Documentation",
        description:
          "Guidance related to qualification recognition, document preparation, translation, authentication, and international application readiness.",
        href: "/services",
      },
    ],
  },

  ar: {
    eyebrow: "التدريب والتأهيل",

    titleBefore: "استعد لـ",
    highlightedTitle: "مسارك الدولي",

    description:
      "تدعم Western Bridge الجاهزية المهنية من خلال التدريب اللغوي، والاستعداد للتأهيل والامتحانات، والتوجيه في إجراءات الاعتراف المهني، ودعم الوثائق ذات الصلة.",

    learnMore: "اعرف المزيد",

    bottomTitle:
      "لست متأكدًا من أين يجب أن تبدأ مرحلة الاستعداد؟",

    bottomText:
      "تساعدك Western Bridge على فهم المسار اللغوي أو التأهيلي أو المهني أو المتعلق بالاعتراف الذي قد يتناسب مع هدفك المهني.",

    bottomButton: "احصل على توجيه",

    trainingItems: [
      {
        id: "german",
        label: "الاستعداد اللغوي",
        title: "اللغة الألمانية",
        description:
          "استعداد لغوي يدعم مسارات الدراسة والتدريب والعمل والانتقال الدولي المرتبطة بألمانيا.",
        href: "/services",
      },
      {
        id: "medical-german",
        label: "التركيز على القطاع الطبي",
        title: "الألمانية الطبية",
        description:
          "استعداد لغوي متخصص للمتخصصين في القطاع الطبي يشمل المصطلحات الطبية والتواصل في بيئة العمل والجاهزية المهنية.",
        href: "/medical",
        featured: true,
      },
      {
        id: "licensing",
        label: "الاستعداد المهني",
        title: "الامتحانات والترخيص",
        description:
          "دعم الاستعداد للامتحانات المهنية والتأهيلية ومتطلبات الترخيص والاختبارات الخاصة بالقطاعات المختلفة عند الحاجة.",
        href: "/services",
      },
      {
        id: "recognition",
        label: "الوثائق والمؤهلات",
        title: "الاعتراف والوثائق",
        description:
          "التوجيه المتعلق بالاعتراف بالمؤهلات وتجهيز الوثائق وترجمتها وتصديقها والاستعداد للتقديم الدولي.",
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
    learnMore: string;
    bottomTitle: string;
    bottomText: string;
    bottomButton: string;
    trainingItems: TrainingItem[];
  }
>;

function TrainingIcon({ id }: { id: string }) {
  if (id === "medical-german") {
    return (
      <svg
        width="28"
        height="28"
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

  if (id === "licensing") {
    return (
      <svg
        width="28"
        height="28"
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

  if (id === "recognition") {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 4H19V20H5V4Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />

        <path
          d="M8 9H16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M8 13H16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M8 17H13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="28"
      height="28"
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

export default function TrainingSection() {
  const locale = useLocale() as Locale;

  const t = content[locale] ?? content.de;

  return (
    <section className={styles.section}>
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
          {t.trainingItems.map((item) => (
            <article
              key={item.id}
              className={`${styles.card} ${
                item.featured
                  ? styles.featuredCard
                  : ""
              }`}
            >
              <div className={styles.iconWrapper}>
                <TrainingIcon id={item.id} />
              </div>

              <span className={styles.cardLabel}>
                {item.label}
              </span>

              <h3 className={styles.cardTitle}>
                {item.title}
              </h3>

              <p className={styles.cardDescription}>
                {item.description}
              </p>

              <Link
                href={item.href}
                className={styles.cardLink}
              >
                {t.learnMore}

                <span aria-hidden="true">
                  {locale === "ar" ? "←" : "→"}
                </span>
              </Link>
            </article>
          ))}
        </div>

        <div className={styles.bottomCta}>
          <div className={styles.bottomContent}>
            <h3 className={styles.bottomTitle}>
              {t.bottomTitle}
            </h3>

            <p className={styles.bottomText}>
              {t.bottomText}
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.bottomButton}
          >
            {t.bottomButton}
          </Link>
        </div>
      </Container>
    </section>
  );
}