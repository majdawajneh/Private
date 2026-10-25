"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./MarketEntryNavigatorSection.module.css";

type Locale = "de" | "en" | "ar";

type Market = {
  number: string;
  label: string;
  title: string;
  description: string;
  signals: string[];
  href: string;
  featured?: boolean;
};

const content = {
  de: {
    backgroundWord: "MÄRKTE",

    eyebrow: "Market Entry Navigator",

    titleLineOne: "Wählen Sie den Markt.",
    titleLineTwoBefore: "Verstehen Sie die",
    highlightedTitle: "Strategie.",

    headerText:
      "Internationales Wachstum ist nicht überall gleich. Jeder Markt hat unterschiedliche wirtschaftliche Bedingungen, regulatorische Anforderungen, Kundenerwartungen und Partnerschaftsmöglichkeiten. Western Bridge unterstützt Unternehmen dabei, diese Unterschiede zu verstehen, bevor sie sich auf eine Richtung festlegen.",

    markets: [
      {
        number: "01",
        label: "Primäres Gateway",
        title: "Deutschland",
        description:
          "Deutschland kann als strategisches Gateway für Unternehmen dienen, die einen stärkeren Zugang zu europäischen Märkten, professionellen Ökosystemen, industriellen Netzwerken und langfristigen internationalen Partnerschaften anstreben.",
        signals: [
          "Planung des Markteintritts",
          "Partnerschafts- und institutionelles Networking",
          "Geschäftsentwicklung und Expansionsvorbereitung",
        ],
        href: "/germany",
        featured: true,
      },
      {
        number: "02",
        label: "Breitere Expansion",
        title: "Europa",
        description:
          "Europäische Märkte können je nach Zielland und Branche unterschiedliche wirtschaftliche Rahmenbedingungen, regulatorische Erwartungen, Kundenprofile und Partnerschaftsmodelle bieten.",
        signals: [
          "Länder- und Marktvergleich",
          "Bewertung kommerzieller Möglichkeiten",
          "Erkundung grenzüberschreitender Partnerschaften",
        ],
        href: "/contact",
      },
      {
        number: "03",
        label: "Regionales Wachstum",
        title: "Golfmärkte",
        description:
          "Die Golfmärkte können starke regionale Chancen für Unternehmen bieten, die kommerzielles Wachstum, strategische Partnerschaften, Serviceerweiterung und Zugang zu dynamisch wachsenden Branchen suchen.",
        signals: [
          "Verständnis regionaler Märkte",
          "Entwicklung geschäftlicher Beziehungen",
          "Wachstums- und Positionierungsstrategie",
        ],
        href: "/contact",
      },
    ],

    strategyLabel:
      "Unsicher, welcher Markt passt?",

    strategyTitle:
      "Vergleichen Sie, bevor Sie sich festlegen",

    strategyText:
      "Western Bridge kann Ihnen helfen, Märkte auf Grundlage Ihrer Branche, Ihres Geschäftsmodells, Ihrer Prioritäten, Ressourcen und internationalen Wachstumsziele zu vergleichen.",

    strategyButton:
      "Marktoptionen besprechen",

    ariaPrefix:
      "Mehr erfahren über",

    logoAlt: "Western Bridge",
  },

  en: {
    backgroundWord: "MARKETS",

    eyebrow: "Market Entry Navigator",

    titleLineOne: "Choose the Market.",
    titleLineTwoBefore: "Understand the",
    highlightedTitle: "Strategy.",

    headerText:
      "International growth is not one-size-fits-all. Each market has different commercial conditions, regulatory realities, customer expectations, and partnership opportunities. Western Bridge helps businesses understand those differences before committing to a direction.",

    markets: [
      {
        number: "01",
        label: "Primary Gateway",
        title: "Germany",
        description:
          "Germany can serve as a strategic gateway for businesses seeking stronger access to European markets, professional ecosystems, industrial networks, and long-term international partnerships.",
        signals: [
          "Market-entry planning",
          "Partnership and institutional networking",
          "Business development and expansion preparation",
        ],
        href: "/germany",
        featured: true,
      },
      {
        number: "02",
        label: "Broader Expansion",
        title: "Europe",
        description:
          "European markets can offer different commercial environments, regulatory expectations, customer profiles, and partnership structures depending on the target country and sector.",
        signals: [
          "Country and market comparison",
          "Commercial opportunity assessment",
          "Cross-border partnership exploration",
        ],
        href: "/contact",
      },
      {
        number: "03",
        label: "Regional Growth",
        title: "Gulf Markets",
        description:
          "Gulf markets may offer strong regional opportunities for businesses seeking commercial growth, strategic partnerships, service expansion, and access to rapidly developing sectors.",
        signals: [
          "Regional market understanding",
          "Business relationship development",
          "Growth and positioning strategy",
        ],
        href: "/contact",
      },
    ],

    strategyLabel:
      "Not Sure Which Market Fits?",

    strategyTitle:
      "Compare Before You Commit",

    strategyText:
      "Western Bridge can help you compare markets based on your industry, business model, priorities, resources, and international growth objectives.",

    strategyButton:
      "Discuss Market Options",

    ariaPrefix:
      "Explore",

    logoAlt: "Western Bridge",
  },

  ar: {
    backgroundWord: "أسواق",

    eyebrow: "دليل دخول الأسواق",

    titleLineOne: "اختر السوق.",
    titleLineTwoBefore: "وافهم",
    highlightedTitle: "الاستراتيجية.",

    headerText:
      "النمو الدولي لا يعتمد على نموذج واحد يناسب الجميع. فلكل سوق ظروفه التجارية ومتطلباته التنظيمية وتوقعات عملائه وفرص الشراكة الخاصة به. تساعد Western Bridge الشركات على فهم هذه الاختلافات قبل اتخاذ قرار الاتجاه نحو سوق معين.",

    markets: [
      {
        number: "01",
        label: "البوابة الرئيسية",
        title: "ألمانيا",
        description:
          "يمكن لألمانيا أن تكون بوابة استراتيجية للشركات التي تسعى إلى وصول أقوى للأسواق الأوروبية والمنظومات المهنية والشبكات الصناعية والشراكات الدولية طويلة الأمد.",
        signals: [
          "تخطيط دخول السوق",
          "بناء الشراكات والعلاقات المؤسسية",
          "تطوير الأعمال والاستعداد للتوسع",
        ],
        href: "/germany",
        featured: true,
      },
      {
        number: "02",
        label: "توسع أوسع",
        title: "أوروبا",
        description:
          "تختلف الأسواق الأوروبية في البيئات التجارية والمتطلبات التنظيمية وخصائص العملاء وهياكل الشراكات حسب الدولة المستهدفة والقطاع.",
        signals: [
          "مقارنة الدول والأسواق",
          "تقييم الفرص التجارية",
          "استكشاف الشراكات عبر الحدود",
        ],
        href: "/contact",
      },
      {
        number: "03",
        label: "النمو الإقليمي",
        title: "أسواق الخليج",
        description:
          "قد توفر أسواق الخليج فرصًا إقليمية قوية للشركات التي تسعى إلى النمو التجاري والشراكات الاستراتيجية وتوسيع الخدمات والدخول إلى القطاعات سريعة التطور.",
        signals: [
          "فهم السوق الإقليمي",
          "تطوير العلاقات التجارية",
          "استراتيجية النمو والتموضع",
        ],
        href: "/contact",
      },
    ],

    strategyLabel:
      "غير متأكد أي سوق يناسبك؟",

    strategyTitle:
      "قارن قبل أن تلتزم",

    strategyText:
      "يمكن لـ Western Bridge مساعدتك في مقارنة الأسواق بناءً على قطاعك ونموذج عملك وأولوياتك ومواردك وأهدافك في النمو الدولي.",

    strategyButton:
      "ناقش خيارات الأسواق",

    ariaPrefix:
      "استكشف",

    logoAlt: "Western Bridge",
  },
} satisfies Record<
  Locale,
  {
    backgroundWord: string;
    eyebrow: string;
    titleLineOne: string;
    titleLineTwoBefore: string;
    highlightedTitle: string;
    headerText: string;
    markets: Market[];
    strategyLabel: string;
    strategyTitle: string;
    strategyText: string;
    strategyButton: string;
    ariaPrefix: string;
    logoAlt: string;
  }
>;

export default function MarketEntryNavigatorSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section className={styles.section}>
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
              {t.titleLineOne}
              <br />

              {t.titleLineTwoBefore}{" "}
              <span className={styles.goldText}>
                {t.highlightedTitle}
              </span>
            </h2>
          </div>

          <p className={styles.headerText}>
            {t.headerText}
          </p>
        </div>

        <div className={styles.navigator}>
          {t.markets.map((market) => (
            <article
              key={market.number}
              className={`${styles.market} ${
                market.featured ? styles.germany : ""
              }`}
            >
              {market.featured && (
                <>
                  <span
                    className={styles.germanyAccent}
                    aria-hidden="true"
                  />

                  <span
                    className={styles.germanyGlow}
                    aria-hidden="true"
                  />
                </>
              )}

              <span className={styles.marketNumber}>
                {market.number}
              </span>

              <div className={styles.marketContent}>
                <span className={styles.marketLabel}>
                  {market.label}
                </span>

                <h3 className={styles.marketTitle}>
                  {market.title}
                </h3>

                <p className={styles.marketDescription}>
                  {market.description}
                </p>
              </div>

              <div className={styles.signals}>
                {market.signals.map((signal) => (
                  <div
                    key={signal}
                    className={styles.signal}
                  >
                    <span className={styles.signalMark}>
                      ✓
                    </span>

                    <span>
                      {signal}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href={market.href}
                className={styles.marketAction}
                aria-label={`${t.ariaPrefix} ${market.title}`}
              >
                {locale === "ar" ? "←" : "→"}
              </Link>
            </article>
          ))}
        </div>

        <div className={styles.strategyStrip}>
          <div className={styles.strategyLogo}>
            <Image
              src="/logo/western-bridge-mark.jpeg"
              alt={t.logoAlt}
              width={46}
              height={46}
              className={styles.strategyLogoImage}
            />
          </div>

          <div>
            <span className={styles.strategyLabel}>
              {t.strategyLabel}
            </span>

            <h3 className={styles.strategyTitle}>
              {t.strategyTitle}
            </h3>

            <p className={styles.strategyText}>
              {t.strategyText}
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.strategyButton}
          >
            {t.strategyButton}

            <span aria-hidden="true">
              {locale === "ar" ? "←" : "→"}
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}