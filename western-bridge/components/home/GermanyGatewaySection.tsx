"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./GermanyGatewaySection.module.css";

type Locale = "de" | "en" | "ar";

type Reason = {
  id: string;
  title: string;
  text: string;
};

const content = {
  de: {
    locationTitle: "Deutschland im Fokus",

    locationText:
      "Western Bridge stellt Deutschland in den Mittelpunkt vieler internationaler beruflicher, akademischer und geschäftlicher Wege.",

    eyebrow: "Deutschland als Ihr Zugang",

    titleBefore: "Wir verbinden Sie mit",
    highlightedTitle: "Deutschland",
    titleAfter: "und darüber hinaus",

    description:
      "Deutschland gehört zu den wichtigsten internationalen Märkten von Western Bridge. Wir unterstützen Privatpersonen, medizinische Fachkräfte und Unternehmen dabei, die Vorbereitung, Qualifizierung und strategischen Schritte zu verstehen, die für geeignete Wege nach Deutschland und Europa relevant sein können.",

    primaryButton: "Deutschland entdecken",

    imageAlt: "Berlin, Deutschland",

    reasons: [
      {
        id: "economy",
        title: "Starkes Geschäftsumfeld",
        text:
          "Einer der bedeutendsten europäischen Märkte für Fachkräfte, Unternehmen, Investitionen und internationale Partnerschaften.",
      },
      {
        id: "healthcare",
        title: "Wege im Gesundheitswesen",
        text:
          "Ein wichtiges Ziel für medizinische Fachkräfte, die sich auf Qualifizierung, Anerkennung und berufliche Entwicklung vorbereiten.",
      },
      {
        id: "training",
        title: "Bildung & Weiterbildung",
        text:
          "Berufliche, akademische, sprachliche und qualifikationsbezogene Wege für unterschiedliche Karrierestufen.",
      },
      {
        id: "europe",
        title: "Zugang zu Europa",
        text:
          "Deutschland kann als strategischer Ausgangspunkt für weitere europäische Möglichkeiten und Partnerschaften dienen.",
      },
    ],
  },

  en: {
    locationTitle: "Germany Focus",

    locationText:
      "Western Bridge places Germany at the center of many international professional, training, and business pathways.",

    eyebrow: "Germany as Your Gateway",

    titleBefore: "Connecting You With",
    highlightedTitle: "Germany",
    titleAfter: "and Beyond",

    description:
      "Germany is one of Western Bridge's primary international markets. We support individuals, medical professionals, and businesses in understanding the preparation, qualification, and strategic steps that may help them pursue suitable pathways connected to Germany and Europe.",

    primaryButton: "Explore Germany",

    imageAlt: "Berlin, Germany",

    reasons: [
      {
        id: "economy",
        title: "Strong Business Environment",
        text:
          "A major European market for professionals, businesses, investment, and international partnerships.",
      },
      {
        id: "healthcare",
        title: "Healthcare Pathways",
        text:
          "A key destination for medical professionals seeking qualification, recognition, and professional development.",
      },
      {
        id: "training",
        title: "Education & Training",
        text:
          "Professional, vocational, language, and qualification pathways for different career stages.",
      },
      {
        id: "europe",
        title: "Gateway to Europe",
        text:
          "Germany can serve as a strategic starting point for broader European opportunities and partnerships.",
      },
    ],
  },

  ar: {
    locationTitle: "التركيز على ألمانيا",

    locationText:
      "تضع Western Bridge ألمانيا في صميم العديد من المسارات المهنية والتعليمية والتجارية الدولية.",

    eyebrow: "ألمانيا بوابتك إلى فرص أوسع",

    titleBefore: "نربطك بـ",
    highlightedTitle: "ألمانيا",
    titleAfter: "وما بعدها",

    description:
      "تُعد ألمانيا من أهم الأسواق الدولية التي تركز عليها Western Bridge. نساعد الأفراد والمتخصصين في القطاع الطبي والشركات على فهم متطلبات الاستعداد والتأهيل والخطوات الاستراتيجية التي قد تدعم الوصول إلى مسارات مناسبة مرتبطة بألمانيا وأوروبا.",

    primaryButton: "استكشف ألمانيا",

    imageAlt: "برلين، ألمانيا",

    reasons: [
      {
        id: "economy",
        title: "بيئة أعمال قوية",
        text:
          "واحدة من أهم الأسواق الأوروبية للمهنيين والشركات والاستثمار وبناء الشراكات الدولية.",
      },
      {
        id: "healthcare",
        title: "مسارات القطاع الطبي",
        text:
          "وجهة مهمة للمتخصصين في القطاع الطبي الراغبين في التأهيل والاعتراف المهني والتطور المهني.",
      },
      {
        id: "training",
        title: "التعليم والتدريب",
        text:
          "مسارات مهنية وتعليمية ولغوية وتأهيلية مناسبة لمراحل مهنية مختلفة.",
      },
      {
        id: "europe",
        title: "بوابة إلى أوروبا",
        text:
          "يمكن أن تكون ألمانيا نقطة انطلاق استراتيجية نحو فرص وشراكات أوسع داخل أوروبا.",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    locationTitle: string;
    locationText: string;
    eyebrow: string;
    titleBefore: string;
    highlightedTitle: string;
    titleAfter: string;
    description: string;
    primaryButton: string;
    imageAlt: string;
    reasons: Reason[];
  }
>;

function ReasonIcon({ id }: { id: string }) {
  if (id === "healthcare") {
    return (
      <svg
        width="22"
        height="22"
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
        width="22"
        height="22"
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

  if (id === "europe") {
    return (
      <svg
        width="22"
        height="22"
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

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 18V10H9V18"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M10 18V6H15V18"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M16 18V12H20V18"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M3 18H21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function GermanyGatewaySection() {
  const locale = useLocale() as Locale;

  const t = content[locale] ?? content.de;

  return (
    <section className={styles.section}>
      <div className={styles.decoration} />

      <Container>
        <div className={styles.wrapper}>
          <div className={styles.visual}>
            <Image
              src="/images/germany-gateway.jpg"
              alt={t.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.image}
            />

            <div className={styles.imageOverlay} />

            <div className={styles.locationCard}>
              <div className={styles.locationTop}>
                <div className={styles.locationIcon}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 21C12 21 19 15 19 9.5C19 5.9 16.1 3 12 3C7.9 3 5 5.9 5 9.5C5 15 12 21 12 21Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />

                    <circle
                      cx="12"
                      cy="9.5"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                  </svg>
                </div>

                <span className={styles.locationTitle}>
                  {t.locationTitle}
                </span>
              </div>

              <p className={styles.locationText}>
                {t.locationText}
              </p>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {t.eyebrow}
            </div>

            <h2 className={styles.title}>
              {t.titleBefore}{" "}
              <span className={styles.goldText}>
                {t.highlightedTitle}
              </span>

              <br />

              {t.titleAfter}
            </h2>

            <p className={styles.description}>
              {t.description}
            </p>

            <div className={styles.reasonsGrid}>
              {t.reasons.map((reason) => (
                <article
                  key={reason.id}
                  className={styles.reasonCard}
                >
                  <div className={styles.reasonIcon}>
                    <ReasonIcon id={reason.id} />
                  </div>

                  <h3 className={styles.reasonTitle}>
                    {reason.title}
                  </h3>

                  <p className={styles.reasonText}>
                    {reason.text}
                  </p>
                </article>
              ))}
            </div>

            <div className={styles.actions}>
              <Link
                href="/germany"
                className={styles.primaryButton}
              >
                {t.primaryButton}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}