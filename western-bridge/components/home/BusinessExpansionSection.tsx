"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./BusinessExpansionSection.module.css";

type Locale = "de" | "en" | "ar";

type Service = {
  title: string;
  text: string;
};

const content = {
  de: {
    eyebrow: "Geschäftswachstum & Partnerschaften",

    titleBefore: "Erweitern Sie Ihr Unternehmen",
    highlightedTitle: "über Grenzen hinweg",

    description:
      "Western Bridge unterstützt Unternehmen bei internationalem Wachstum durch strategische Beratung, Marktkenntnisse, den Aufbau von Partnerschaften, digitale Lösungen sowie den Zugang zu relevanten institutionellen und kommerziellen Netzwerken.",

    primaryButton: "Business-Services entdecken",
    secondaryButton: "Western Bridge kontaktieren",

    imageAlt:
      "Internationales Geschäftswachstum und internationale Partnerschaften",

    expansionLabel: "Internationales Wachstum",
    expansionTitle: "Strategie. Netzwerke. Expansion.",

    expansionText:
      "Von der Marktforschung bis zur Entwicklung von Partnerschaften unterstützt Western Bridge Unternehmen dabei, sich besser auf internationales Wachstum und grenzüberschreitende Zusammenarbeit vorzubereiten.",

    services: [
      {
        title: "Marktforschung",
        text:
          "Verstehen Sie Zielmärkte, Kundensegmente und Expansionsbedingungen, bevor Sie strategische Entscheidungen treffen.",
      },
      {
        title: "Geschäftsentwicklung",
        text:
          "Unterstützung bei Wachstumsplanung, Markteintrittsvorbereitung und internationaler Geschäftsentwicklung.",
      },
      {
        title: "Internationale Partnerschaften",
        text:
          "Aufbau von Verbindungen zu Institutionen, Unternehmen und professionellen Netzwerken in internationalen Märkten.",
      },
      {
        title: "Digitale Lösungen",
        text:
          "Unterstützung durch digitale Plattformen, HR-Lösungen, Online-Präsenz, Marketing und Content-Management.",
      },
    ],
  },

  en: {
    eyebrow: "Business Growth & Partnerships",

    titleBefore: "Expand Your Business",
    highlightedTitle: "Beyond Borders",

    description:
      "Western Bridge supports businesses seeking international growth through strategic consulting, market insight, partnership development, digital solutions, and access to relevant institutional and commercial networks.",

    primaryButton: "Explore Business Services",
    secondaryButton: "Contact Western Bridge",

    imageAlt:
      "International business growth and partnerships",

    expansionLabel: "International Growth",
    expansionTitle: "Strategy. Networks. Expansion.",

    expansionText:
      "From market research to partnership development, Western Bridge helps businesses better prepare for international growth and cross-border collaboration.",

    services: [
      {
        title: "Market Research",
        text:
          "Understand target markets, customer segments, and expansion conditions before making strategic decisions.",
      },
      {
        title: "Business Development",
        text:
          "Support for growth planning, market entry preparation, and international business development.",
      },
      {
        title: "International Partnerships",
        text:
          "Build connections with institutions, businesses, and professional networks across international markets.",
      },
      {
        title: "Digital Solutions",
        text:
          "Support through digital platforms, HR solutions, online presence, marketing, and content management.",
      },
    ],
  },

  ar: {
    eyebrow: "نمو الأعمال والشراكات",

    titleBefore: "وسّع أعمالك",
    highlightedTitle: "عبر الحدود",

    description:
      "تدعم Western Bridge الشركات الراغبة في التوسع الدولي من خلال الاستشارات الاستراتيجية، وفهم الأسواق، وتطوير الشراكات، والحلول الرقمية، والوصول إلى الشبكات المؤسسية والتجارية ذات الصلة.",

    primaryButton: "استكشف خدمات الأعمال",
    secondaryButton: "تواصل مع Western Bridge",

    imageAlt:
      "نمو الأعمال والشراكات الدولية",

    expansionLabel: "النمو الدولي",
    expansionTitle: "استراتيجية. شبكات. توسع.",

    expansionText:
      "من دراسات السوق إلى تطوير الشراكات، تساعد Western Bridge الشركات على الاستعداد بشكل أفضل للنمو الدولي والتعاون عبر الحدود.",

    services: [
      {
        title: "أبحاث السوق",
        text:
          "افهم الأسواق المستهدفة وشرائح العملاء وظروف التوسع قبل اتخاذ القرارات الاستراتيجية.",
      },
      {
        title: "تطوير الأعمال",
        text:
          "دعم تخطيط النمو والاستعداد لدخول الأسواق وتطوير الأعمال على المستوى الدولي.",
      },
      {
        title: "الشراكات الدولية",
        text:
          "بناء علاقات مع المؤسسات والشركات والشبكات المهنية في الأسواق الدولية.",
      },
      {
        title: "الحلول الرقمية",
        text:
          "دعم من خلال المنصات الرقمية وحلول الموارد البشرية والحضور الإلكتروني والتسويق وإدارة المحتوى.",
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
    imageAlt: string;
    expansionLabel: string;
    expansionTitle: string;
    expansionText: string;
    services: Service[];
  }
>;

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    (
      <svg
        key="market"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 19V10"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M10 19V5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M16 19V13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M22 19V8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),

    (
      <svg
        key="business"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 8H20V19H4V8Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />

        <path
          d="M9 8V5H15V8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M4 12H20"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),

    (
      <svg
        key="partnership"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="8"
          cy="8"
          r="3"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <circle
          cx="17"
          cy="8"
          r="3"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M3 19C3.5 15.8 5.2 14 8 14C10.8 14 12.5 15.8 13 19"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M12 19C12.4 15.8 14.2 14 17 14C19.8 14 21.5 15.8 22 19"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),

    (
      <svg
        key="digital"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="13"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M8 21H16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M12 17V21"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
  ];

  return icons[index] ?? icons[0];
}

export default function BusinessExpansionSection() {
  const locale = useLocale() as Locale;

  const t = content[locale] ?? content.de;

  return (
    <section className={styles.section}>
      <div className={styles.decorationOne} />
      <div className={styles.decorationTwo} />

      <Container>
        <div className={styles.wrapper}>
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
            </h2>

            <p className={styles.description}>
              {t.description}
            </p>

            <div className={styles.services}>
              {t.services.map((service, index) => (
                <article
                  key={service.title}
                  className={styles.serviceCard}
                >
                  <div className={styles.serviceIcon}>
                    <ServiceIcon index={index} />
                  </div>

                  <h3 className={styles.serviceTitle}>
                    {service.title}
                  </h3>

                  <p className={styles.serviceText}>
                    {service.text}
                  </p>
                </article>
              ))}
            </div>

            <div className={styles.actions}>
              <Link
                href="/businesses"
                className={styles.primaryButton}
              >
                {t.primaryButton}
              </Link>

              <Link
                href="/contact"
                className={styles.secondaryButton}
              >
                {t.secondaryButton}
              </Link>
            </div>
          </div>

          <div className={styles.visual}>
            <Image
              src="/images/business-expansion.jpg"
              alt={t.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.image}
            />

            <div className={styles.imageOverlay} />

            <div className={styles.expansionCard}>
              <span className={styles.expansionLabel}>
                {t.expansionLabel}
              </span>

              <h3 className={styles.expansionTitle}>
                {t.expansionTitle}
              </h3>

              <p className={styles.expansionText}>
                {t.expansionText}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}