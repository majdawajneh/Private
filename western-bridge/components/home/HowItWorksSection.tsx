"use client";

import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./HowItWorksSection.module.css";

type Locale = "de" | "en" | "ar";

type Step = {
  number: string;
  id: string;
  title: string;
  text: string;
};

const content = {
  de: {
    eyebrow: "So arbeitet Western Bridge",

    titleBefore: "Von Ihrem Ziel zu einem",
    highlightedTitle: "klaren Weg",

    description:
      "Western Bridge hilft Ihnen, aus Unsicherheit einen strukturierten internationalen Weg zu entwickeln – durch Analyse, Vorbereitung, Orientierung und strategische Verbindungen.",

    bottomText:
      "Sie sind sich noch nicht sicher, wo Ihr Weg beginnen sollte?",

    bottomButton:
      "Mit Western Bridge sprechen",

    steps: [
      {
        number: "01",
        id: "goal",
        title: "Ihr Ziel verstehen",
        text:
          "Wir beginnen damit, Ihr Ziel, Ihren beruflichen Hintergrund, Ihren Zielmarkt und die Art des internationalen Weges zu verstehen, den Sie verfolgen möchten.",
      },
      {
        number: "02",
        id: "assessment",
        title: "Ihren Weg analysieren",
        text:
          "Wir helfen Ihnen dabei, passende Richtungen, Vorbereitungsbedarf, Qualifikationsanforderungen und relevante Unterstützungsleistungen zu identifizieren.",
      },
      {
        number: "03",
        id: "prepare",
        title: "Vorbereiten & qualifizieren",
        text:
          "Je nach Weg kann die Vorbereitung Sprachtraining, berufliche Vorbereitung, Anerkennungsberatung, Prüfungen, Dokumentation oder Geschäftsplanung umfassen.",
      },
      {
        number: "04",
        id: "connect",
        title: "Vernetzen & weitergehen",
        text:
          "Wir helfen Ihnen, relevante Chancen, Institutionen, Partner, Märkte und berufliche Netzwerke zu erkunden, damit Sie mit klarerer Orientierung vorankommen.",
      },
    ],
  },

  en: {
    eyebrow: "How Western Bridge Works",

    titleBefore: "From Ambition to a",
    highlightedTitle: "Clear Path",

    description:
      "Western Bridge helps you move from uncertainty to a more structured international pathway through assessment, preparation, guidance, and strategic connections.",

    bottomText:
      "Need help understanding where your path should begin?",

    bottomButton:
      "Talk to Western Bridge",

    steps: [
      {
        number: "01",
        id: "goal",
        title: "Understand Your Goal",
        text:
          "We start by understanding your objective, professional background, target market, and the type of international pathway you are looking for.",
      },
      {
        number: "02",
        id: "assessment",
        title: "Assess Your Path",
        text:
          "We help you identify suitable directions, preparation needs, qualification requirements, and the services that may support your next step.",
      },
      {
        number: "03",
        id: "prepare",
        title: "Prepare & Qualify",
        text:
          "Depending on your pathway, preparation may include language training, professional readiness, recognition guidance, exams, documentation, or business planning.",
      },
      {
        number: "04",
        id: "connect",
        title: "Connect & Move Forward",
        text:
          "We help you explore relevant opportunities, institutions, partners, markets, and professional ecosystems so you can move forward with clearer direction.",
      },
    ],
  },

  ar: {
    eyebrow: "كيف تعمل Western Bridge",

    titleBefore: "من الطموح إلى",
    highlightedTitle: "مسار واضح",

    description:
      "تساعدك Western Bridge على الانتقال من عدم وضوح الطريق إلى مسار دولي أكثر تنظيمًا من خلال التقييم والاستعداد والتوجيه وبناء الروابط الاستراتيجية.",

    bottomText:
      "هل تحتاج إلى مساعدة لفهم من أين يجب أن تبدأ؟",

    bottomButton:
      "تحدث مع Western Bridge",

    steps: [
      {
        number: "01",
        id: "goal",
        title: "نفهم هدفك",
        text:
          "نبدأ بفهم هدفك وخلفيتك المهنية والسوق الذي تستهدفه ونوع المسار الدولي الذي تبحث عنه.",
      },
      {
        number: "02",
        id: "assessment",
        title: "نقيّم مسارك",
        text:
          "نساعدك على تحديد الاتجاهات المناسبة ومتطلبات الاستعداد والتأهيل والخدمات التي قد تدعم خطوتك التالية.",
      },
      {
        number: "03",
        id: "prepare",
        title: "الاستعداد والتأهيل",
        text:
          "بحسب مسارك، قد يشمل الاستعداد التدريب اللغوي والجاهزية المهنية والتوجيه في الاعتراف المهني والامتحانات والوثائق أو التخطيط للأعمال.",
      },
      {
        number: "04",
        id: "connect",
        title: "الربط والتقدم",
        text:
          "نساعدك على استكشاف الفرص والمؤسسات والشركاء والأسواق والشبكات المهنية ذات الصلة لتتمكن من التقدم بصورة أوضح.",
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
    bottomText: string;
    bottomButton: string;
    steps: Step[];
  }
>;

function StepIcon({ id }: { id: string }) {
  if (id === "assessment") {
    return (
      <svg
        width="23"
        height="23"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="11"
          cy="11"
          r="6"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M16 16L21 21"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === "prepare") {
    return (
      <svg
        width="23"
        height="23"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 5H20V19H4V5Z"
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
          d="M8 13H14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === "connect") {
    return (
      <svg
        width="23"
        height="23"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="6"
          cy="12"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <circle
          cx="18"
          cy="6"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <circle
          cx="18"
          cy="18"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M8.2 10.8L15.7 7.1"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M8.2 13.2L15.7 16.9"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  return (
    <svg
      width="23"
      height="23"
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

export default function HowItWorksSection() {
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

        <div className={styles.steps}>
          {t.steps.map((step) => (
            <article
              key={step.number}
              className={styles.step}
            >
              <div className={styles.stepNumber}>
                {step.number}
              </div>

              <div className={styles.stepCard}>
                <div className={styles.iconWrapper}>
                  <StepIcon id={step.id} />
                </div>

                <h3 className={styles.stepTitle}>
                  {step.title}
                </h3>

                <p className={styles.stepText}>
                  {step.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.bottomText}>
            {t.bottomText}
          </p>

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