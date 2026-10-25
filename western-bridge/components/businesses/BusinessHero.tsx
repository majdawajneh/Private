"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./BusinessHero.module.css";

type Locale = "de" | "en" | "ar";

type Market = {
  name: string;
  type: string;
  className: string;
};

type Metric = {
  value: string;
  label: string;
};

const content = {
  de: {
    backgroundText: "WACHSTUM",

    eyebrow:
      "Internationales Unternehmenswachstum",

    titleBefore:
      "Verwandeln Sie lokale Ambitionen in",
    highlightedTitle:
      "internationales Wachstum",

    description:
      "Western Bridge unterstützt Unternehmen dabei, neue Märkte zu verstehen, ihre Strategie zu stärken, internationale Partnerschaften aufzubauen und die Expansion nach Deutschland, Europa, in die Golfregion und weitere relevante Märkte vorzubereiten.",

    primaryButton:
      "Unternehmenswachstum entdecken",

    secondaryButton:
      "Unternehmen besprechen",

    focusItems: [
      "Marktinformationen",
      "Geschäftsentwicklung",
      "Internationale Partnerschaften",
    ],

    dashboardTitle:
      "Expansion Intelligence",

    dashboardSub:
      "Western Bridge Business Desk",

    liveBadge:
      "Strategische Märkte",

    hubTitleTop:
      "Western",

    hubTitleBottom:
      "Bridge",

    hubSub:
      "Growth Hub",

    markets: [
      {
        name: "Deutschland",
        type: "Primäres europäisches Gateway",
        className: "marketGermany",
      },
      {
        name: "Europa",
        type: "Expansion & Partnerschaften",
        className: "marketEurope",
      },
      {
        name: "Golfregion",
        type: "Regionales Wachstum",
        className: "marketGulf",
      },
      {
        name: "Jordanien",
        type: "Lokale Geschäftsbasis",
        className: "marketJordan",
      },
    ],

    metrics: [
      {
        value: "01",
        label: "Strategie für den Markteintritt",
      },
      {
        value: "02",
        label: "Entwicklung von Partnerschaften",
      },
      {
        value: "03",
        label: "Unterstützung für internationales Wachstum",
      },
    ],

    logoAlt: "Western Bridge",
  },

  en: {
    backgroundText: "GROWTH",

    eyebrow:
      "International Business Growth",

    titleBefore:
      "Turn Local Ambition Into",
    highlightedTitle:
      "International Growth",

    description:
      "Western Bridge supports businesses that want to understand new markets, strengthen their strategy, build international partnerships, and prepare for expansion into Germany, Europe, the Gulf, and other relevant markets.",

    primaryButton:
      "Explore Business Growth",

    secondaryButton:
      "Discuss Your Business",

    focusItems: [
      "Market Intelligence",
      "Business Development",
      "International Partnerships",
    ],

    dashboardTitle:
      "Expansion Intelligence",

    dashboardSub:
      "Western Bridge Business Desk",

    liveBadge:
      "Strategic Markets",

    hubTitleTop:
      "Western",

    hubTitleBottom:
      "Bridge",

    hubSub:
      "Growth Hub",

    markets: [
      {
        name: "Germany",
        type: "Primary European Gateway",
        className: "marketGermany",
      },
      {
        name: "Europe",
        type: "Expansion & Partnerships",
        className: "marketEurope",
      },
      {
        name: "Gulf",
        type: "Regional Growth",
        className: "marketGulf",
      },
      {
        name: "Jordan",
        type: "Local Business Base",
        className: "marketJordan",
      },
    ],

    metrics: [
      {
        value: "01",
        label: "Market Entry Strategy",
      },
      {
        value: "02",
        label: "Partnership Development",
      },
      {
        value: "03",
        label: "International Growth Support",
      },
    ],

    logoAlt: "Western Bridge",
  },

  ar: {
    backgroundText: "نمو",

    eyebrow:
      "نمو الأعمال دوليًا",

    titleBefore:
      "حوّل طموحك المحلي إلى",
    highlightedTitle:
      "نمو دولي",

    description:
      "تدعم Western Bridge الشركات التي ترغب في فهم أسواق جديدة وتعزيز استراتيجيتها وبناء شراكات دولية والاستعداد للتوسع في ألمانيا وأوروبا ودول الخليج والأسواق الأخرى ذات الصلة.",

    primaryButton:
      "استكشف نمو الأعمال",

    secondaryButton:
      "ناقش أعمالك معنا",

    focusItems: [
      "دراسة الأسواق",
      "تطوير الأعمال",
      "الشراكات الدولية",
    ],

    dashboardTitle:
      "تحليل التوسع",

    dashboardSub:
      "مكتب Western Bridge للأعمال",

    liveBadge:
      "الأسواق الاستراتيجية",

    hubTitleTop:
      "Western",

    hubTitleBottom:
      "Bridge",

    hubSub:
      "مركز النمو",

    markets: [
      {
        name: "ألمانيا",
        type: "البوابة الأوروبية الرئيسية",
        className: "marketGermany",
      },
      {
        name: "أوروبا",
        type: "التوسع والشراكات",
        className: "marketEurope",
      },
      {
        name: "الخليج",
        type: "النمو الإقليمي",
        className: "marketGulf",
      },
      {
        name: "الأردن",
        type: "قاعدة الأعمال المحلية",
        className: "marketJordan",
      },
    ],

    metrics: [
      {
        value: "01",
        label: "استراتيجية دخول السوق",
      },
      {
        value: "02",
        label: "تطوير الشراكات",
      },
      {
        value: "03",
        label: "دعم النمو الدولي",
      },
    ],

    logoAlt: "Western Bridge",
  },
} satisfies Record<
  Locale,
  {
    backgroundText: string;
    eyebrow: string;
    titleBefore: string;
    highlightedTitle: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    focusItems: string[];
    dashboardTitle: string;
    dashboardSub: string;
    liveBadge: string;
    hubTitleTop: string;
    hubTitleBottom: string;
    hubSub: string;
    markets: {
      name: string;
      type: string;
      className:
        | "marketGermany"
        | "marketEurope"
        | "marketGulf"
        | "marketJordan";
    }[];
    metrics: Metric[];
    logoAlt: string;
  }
>;

export default function BusinessHero() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  const markets: Market[] = t.markets.map(
    (market) => ({
      ...market,
      className:
        styles[market.className],
    })
  );

  return (
    <section className={styles.hero}>
      <span
        className={styles.backgroundText}
        aria-hidden="true"
      >
        {t.backgroundText}
      </span>

      <span
        className={styles.orbit}
        aria-hidden="true"
      />

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

            <div className={styles.actions}>
              <Link
                href="#business-expansion"
                className={styles.primaryButton}
              >
                {t.primaryButton}

                <span aria-hidden="true">
                  {locale === "ar" ? "←" : "→"}
                </span>
              </Link>

              <Link
                href="/contact"
                className={styles.secondaryButton}
              >
                {t.secondaryButton}
              </Link>
            </div>

            <div className={styles.focusRow}>
              {t.focusItems.map((item) => (
                <div
                  key={item}
                  className={styles.focusItem}
                >
                  <span className={styles.focusIcon}>
                    ✓
                  </span>

                  <span>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.commandCenter}>
            <div
              className={styles.dashboardGrid}
              aria-hidden="true"
            />

            <div className={styles.dashboardHeader}>
              <div className={styles.dashboardIdentity}>
                <div className={styles.dashboardLogo}>
                  <Image
                    src="/logo/western-bridge-mark.jpeg"
                    alt={t.logoAlt}
                    width={44}
                    height={44}
                    className={styles.dashboardLogoImage}
                  />
                </div>

                <div>
                  <div className={styles.dashboardTitle}>
                    {t.dashboardTitle}
                  </div>

                  <span className={styles.dashboardSub}>
                    {t.dashboardSub}
                  </span>
                </div>
              </div>

              <div className={styles.liveBadge}>
                <span className={styles.liveDot} />
                {t.liveBadge}
              </div>
            </div>

            <div className={styles.marketMap}>
              <span
                className={`${styles.line} ${styles.lineOne}`}
                aria-hidden="true"
              />

              <span
                className={`${styles.line} ${styles.lineTwo}`}
                aria-hidden="true"
              />

              <span
                className={`${styles.line} ${styles.lineThree}`}
                aria-hidden="true"
              />

              <span
                className={`${styles.line} ${styles.lineFour}`}
                aria-hidden="true"
              />

              <div className={styles.hub}>
                <div>
                  <span className={styles.hubTitle}>
                    {t.hubTitleTop}
                    <br />
                    {t.hubTitleBottom}
                  </span>

                  <span className={styles.hubSub}>
                    {t.hubSub}
                  </span>
                </div>
              </div>

              {markets.map((market) => (
                <div
                  key={market.name}
                  className={`${styles.market} ${market.className}`}
                >
                  <span className={styles.marketName}>
                    {market.name}
                  </span>

                  <span className={styles.marketType}>
                    {market.type}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.metrics}>
              {t.metrics.map((metric) => (
                <div
                  key={metric.value}
                  className={styles.metric}
                >
                  <span className={styles.metricValue}>
                    {metric.value}
                  </span>

                  <span className={styles.metricLabel}>
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}