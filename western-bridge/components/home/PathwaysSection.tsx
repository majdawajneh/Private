"use client";

import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./PathwaysSection.module.css";

type Locale = "de" | "en" | "ar";

type Pathway = {
  id: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  href: string;
  featured?: boolean;
};

const content = {
  de: {
    eyebrow: "Wählen Sie Ihren Weg",

    titleLineOne: "Ihr Ziel. Ihr Weg.",
    titleLineTwo: "Unsere Orientierung.",

    description:
      "Ob Sie Ihre berufliche Zukunft gestalten, sich auf einen Weg im Gesundheitswesen vorbereiten oder Ihr Unternehmen international ausrichten möchten – Western Bridge unterstützt Sie dabei, die nächsten Schritte klar zu verstehen.",

    explorePathway: "Weg entdecken",

    pathways: [
      {
        id: "individuals",
        label: "Für Privatpersonen",
        title: "Gestalten Sie Ihren internationalen Weg",
        description:
          "Entdecken Sie Beratung, Qualifizierung, Weiterbildung und internationale Möglichkeiten, die sich an Ihren beruflichen Zielen orientieren.",
        features: [
          "Internationale Karriereorientierung",
          "Unterstützung bei Qualifikation und Vorbereitung",
          "Weiterbildungs- und Sprachwege",
        ],
        href: "/individuals",
      },

      {
        id: "medical",
        label: "Schwerpunkt Gesundheitswesen",
        title: "Medizinische Fachkräfte",
        description:
          "Spezialisierte Unterstützung für medizinische Fachkräfte, die sich auf Deutschland und internationale berufliche Wege vorbereiten.",
        features: [
          "Deutsch und medizinisches Deutsch",
          "Orientierung bei beruflicher Anerkennung",
          "Vorbereitung auf Qualifikation und Zulassung",
        ],
        href: "/medical",
        featured: true,
      },

      {
        id: "businesses",
        label: "Für Unternehmen",
        title: "Wachstum über Grenzen hinweg",
        description:
          "Unterstützen Sie Ihre internationale Expansion mit Marktkenntnissen, strategischer Beratung, Partnerschaften und internationaler Vernetzung.",
        features: [
          "Beratung zur Geschäftsentwicklung",
          "Markt- und Machbarkeitsstudien",
          "Internationale Partnerschaften",
        ],
        href: "/businesses",
      },
    ],
  },

  en: {
    eyebrow: "Choose Your Path",

    titleLineOne: "Your Goal. Your Path.",
    titleLineTwo: "Our Guidance.",

    description:
      "Whether you are building your professional future, preparing for a healthcare pathway, or expanding your business internationally, Western Bridge helps you understand the next step.",

    explorePathway: "Explore Pathway",

    pathways: [
      {
        id: "individuals",
        label: "For Individuals",
        title: "Build Your International Path",
        description:
          "Explore guidance, qualification, training, and international pathways designed around your professional goals.",
        features: [
          "International career guidance",
          "Qualification and readiness support",
          "Training and language pathways",
        ],
        href: "/individuals",
      },

      {
        id: "medical",
        label: "Healthcare Focus",
        title: "Medical Professionals",
        description:
          "Specialized support for healthcare professionals preparing for Germany and international professional pathways.",
        features: [
          "German & Medical German preparation",
          "Professional recognition guidance",
          "Licensing and qualification preparation",
        ],
        href: "/medical",
        featured: true,
      },

      {
        id: "businesses",
        label: "For Businesses",
        title: "Grow Beyond Borders",
        description:
          "Support your business expansion through market insight, strategic consulting, partnerships, and international networking.",
        features: [
          "Business development consulting",
          "Market and feasibility studies",
          "International partnerships",
        ],
        href: "/businesses",
      },
    ],
  },

  ar: {
    eyebrow: "اختر مسارك",

    titleLineOne: "هدفك. مسارك.",
    titleLineTwo: "وتوجيهنا إلى جانبك.",

    description:
      "سواء كنت تبني مستقبلك المهني، أو تستعد لمسار في القطاع الطبي، أو تعمل على توسيع نشاطك دوليًا، تساعدك Western Bridge على فهم الخطوة التالية بوضوح.",

    explorePathway: "استكشف المسار",

    pathways: [
      {
        id: "individuals",
        label: "للأفراد",
        title: "ابنِ مسارك الدولي",
        description:
          "استكشف الاستشارات والتأهيل والتدريب والمسارات الدولية المصممة بما يتناسب مع أهدافك المهنية.",
        features: [
          "توجيه مهني دولي",
          "دعم التأهيل والاستعداد",
          "مسارات التدريب واللغة",
        ],
        href: "/individuals",
      },

      {
        id: "medical",
        label: "التركيز على القطاع الطبي",
        title: "المتخصصون في القطاع الطبي",
        description:
          "دعم متخصص للعاملين في القطاع الطبي الراغبين في الاستعداد لألمانيا والمسارات المهنية الدولية.",
        features: [
          "اللغة الألمانية والألمانية الطبية",
          "التوجيه في إجراءات الاعتراف المهني",
          "الاستعداد لمتطلبات التأهيل والترخيص",
        ],
        href: "/medical",
        featured: true,
      },

      {
        id: "businesses",
        label: "للشركات",
        title: "نمِّ أعمالك عبر الحدود",
        description:
          "ادعم توسع أعمالك من خلال فهم الأسواق والاستشارات الاستراتيجية والشراكات وبناء العلاقات الدولية.",
        features: [
          "استشارات تطوير الأعمال",
          "دراسات السوق والجدوى",
          "الشراكات الدولية",
        ],
        href: "/businesses",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleLineOne: string;
    titleLineTwo: string;
    description: string;
    explorePathway: string;
    pathways: Pathway[];
  }
>;

function PathwayIcon({ id }: { id: string }) {
  if (id === "medical") {
    return (
      <svg
        width="30"
        height="30"
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

  if (id === "businesses") {
    return (
      <svg
        width="30"
        height="30"
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

        <path
          d="M10 12V14H14V12"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="30"
      height="30"
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

export default function PathwaysSection() {
  const locale = useLocale() as Locale;

  const t = content[locale] ?? content.de;

  return (
    <section
      id="pathways"
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
            {t.titleLineOne}
            <br />
            {t.titleLineTwo}
          </h2>

          <p className={styles.description}>
            {t.description}
          </p>
        </div>

        <div className={styles.grid}>
          {t.pathways.map((pathway) => (
            <article
              key={pathway.id}
              className={`${styles.card} ${
                pathway.featured
                  ? styles.featuredCard
                  : ""
              }`}
            >
              <div className={styles.cardAccent} />

              <div className={styles.iconWrapper}>
                <PathwayIcon id={pathway.id} />
              </div>

              <span className={styles.cardLabel}>
                {pathway.label}
              </span>

              <h3 className={styles.cardTitle}>
                {pathway.title}
              </h3>

              <p className={styles.cardDescription}>
                {pathway.description}
              </p>

              <ul className={styles.features}>
                {pathway.features.map((feature) => (
                  <li
                    key={feature}
                    className={styles.feature}
                  >
                    <span
                      className={styles.check}
                      aria-hidden="true"
                    >
                      ✓
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={pathway.href}
                className={styles.cardLink}
              >
                {t.explorePathway}

                <span
                  className={styles.arrow}
                  aria-hidden="true"
                >
                  {locale === "ar" ? "←" : "→"}
                </span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}