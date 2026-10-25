"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./ExpansionIntelligenceSection.module.css";

type Locale = "de" | "en" | "ar";

type IntelligenceArea = {
  number: string;
  label: string;
  title: string;
  text: string;
  meterLabel: string;
  meterValue: string;
  fillClass:
    | "fillMarket"
    | "fillFeasibility"
    | "fillPartnership"
    | "fillDigital";
};

const content = {
  de: {
    eyebrow: "Expansion Intelligence",

    titleBefore:
      "Expansion sollte mit",
    highlightedTitle:
      "besseren Entscheidungen beginnen",

    description:
      "Der Eintritt in einen neuen Markt sollte nicht auf Annahmen beruhen. Western Bridge unterstützt Unternehmen dabei, strategische, kommerzielle, operative und partnerschaftliche Faktoren zu prüfen, die internationale Expansion beeinflussen können.",

    principleLabel:
      "Strategisches Prinzip",

    principleText:
      "Verstehen Sie den Markt. Validieren Sie die Richtung. Bauen Sie die richtigen Beziehungen auf. Gehen Sie anschließend mit einer klareren Strategie weiter.",

    intelligenceAreas: [
      {
        number: "01",
        label: "Marktanalyse",
        title:
          "Verstehen Sie den Markt, bevor Sie ihn betreten",
        text:
          "Analysieren Sie Zielmarkt, Kundenlandschaft, Branchenbedingungen, Geschäftsumfeld, Wettbewerber und mögliche Positionierung, bevor Expansionsentscheidungen getroffen werden.",
        meterLabel: "Strategischer Fokus",
        meterValue: "Hoch",
        fillClass: "fillMarket",
      },
      {
        number: "02",
        label: "Machbarkeit & Planung",
        title:
          "Machen Sie aus Expansionsideen strukturierte Entscheidungen",
        text:
          "Bewerten Sie kommerzielle Annahmen, operative Anforderungen, Markteintrittsaspekte, Risiken und strategische Prioritäten durch Machbarkeitsanalyse und Geschäftsplanung.",
        meterLabel: "Planungstiefe",
        meterValue: "Kernbereich",
        fillClass: "fillFeasibility",
      },
      {
        number: "03",
        label: "Partnerschaftsstrategie",
        title:
          "Bauen Sie die richtigen internationalen Verbindungen auf",
        text:
          "Identifizieren Sie relevante Institutionen, kommerzielle Ökosysteme, strategische Partner und Kooperationskanäle, die Ihre internationalen Geschäftsziele unterstützen können.",
        meterLabel: "Netzwerkwert",
        meterValue: "Stark",
        fillClass: "fillPartnership",
      },
      {
        number: "04",
        label: "Digitaler Markteintritt",
        title:
          "Stärken Sie Ihre internationale digitale Präsenz",
        text:
          "Bereiten Sie digitale Positionierung, Online-Plattformen, Kommunikation, marktorientierte Inhalte und digitale Systeme auf internationales Wachstum vor.",
        meterLabel: "Digitale Bereitschaft",
        meterValue: "Wesentlich",
        fillClass: "fillDigital",
      },
    ],

    decisionLabel:
      "Strategische Beratung",

    decisionTitle:
      "Planen Sie eine internationale Expansion?",

    decisionText:
      "Besprechen Sie Ihren Zielmarkt, Ihr Geschäftsmodell, Ihre aktuelle Position und Ihre Expansionsprioritäten mit Western Bridge, um die Bereiche zu identifizieren, die eine tiefere Analyse benötigen.",

    decisionButton:
      "Strategie besprechen",

    logoAlt: "Western Bridge",
  },

  en: {
    eyebrow: "Expansion Intelligence",

    titleBefore:
      "Expansion Should Start With",
    highlightedTitle:
      "Better Decisions",

    description:
      "Entering a new market should not begin with assumptions. Western Bridge helps businesses examine the strategic, commercial, operational, and partnership factors that may influence international expansion.",

    principleLabel:
      "Strategic Principle",

    principleText:
      "Understand the market. Validate the direction. Build the right relationships. Then move forward with a clearer strategy.",

    intelligenceAreas: [
      {
        number: "01",
        label: "Market Intelligence",
        title:
          "Understand the Market Before You Enter It",
        text:
          "Assess the target market, customer landscape, sector conditions, business environment, competitors, and potential positioning before making expansion decisions.",
        meterLabel: "Strategic Focus",
        meterValue: "High",
        fillClass: "fillMarket",
      },
      {
        number: "02",
        label: "Feasibility & Planning",
        title:
          "Turn Expansion Ideas Into Structured Decisions",
        text:
          "Evaluate commercial assumptions, operational requirements, market-entry considerations, risks, and strategic priorities through feasibility and business planning.",
        meterLabel: "Planning Depth",
        meterValue: "Core",
        fillClass: "fillFeasibility",
      },
      {
        number: "03",
        label: "Partnership Strategy",
        title:
          "Build the Right International Connections",
        text:
          "Identify relevant institutions, commercial ecosystems, strategic partners, and cooperation channels that may support your international business objectives.",
        meterLabel: "Network Value",
        meterValue: "Strong",
        fillClass: "fillPartnership",
      },
      {
        number: "04",
        label: "Digital Market Entry",
        title:
          "Strengthen Your International Digital Presence",
        text:
          "Prepare your digital positioning, online platforms, communication, market-facing content, and digital systems to better support international growth.",
        meterLabel: "Digital Readiness",
        meterValue: "Essential",
        fillClass: "fillDigital",
      },
    ],

    decisionLabel:
      "Strategic Consultation",

    decisionTitle:
      "Planning an International Expansion?",

    decisionText:
      "Discuss your target market, business model, current position, and expansion priorities with Western Bridge to identify the areas that deserve deeper assessment.",

    decisionButton:
      "Discuss Your Strategy",

    logoAlt: "Western Bridge",
  },

  ar: {
    eyebrow: "تحليل التوسع",

    titleBefore:
      "يجب أن يبدأ التوسع بـ",
    highlightedTitle:
      "قرارات أفضل",

    description:
      "دخول سوق جديد لا يجب أن يبدأ بالافتراضات. تساعد Western Bridge الشركات على دراسة العوامل الاستراتيجية والتجارية والتشغيلية وعوامل الشراكات التي قد تؤثر في التوسع الدولي.",

    principleLabel:
      "المبدأ الاستراتيجي",

    principleText:
      "افهم السوق. اختبر الاتجاه. ابنِ العلاقات المناسبة. ثم تحرك باستراتيجية أكثر وضوحًا.",

    intelligenceAreas: [
      {
        number: "01",
        label: "دراسة السوق",
        title:
          "افهم السوق قبل أن تدخله",
        text:
          "حلل السوق المستهدف والعملاء وظروف القطاع وبيئة الأعمال والمنافسين وفرص التموضع قبل اتخاذ قرارات التوسع.",
        meterLabel: "التركيز الاستراتيجي",
        meterValue: "مرتفع",
        fillClass: "fillMarket",
      },
      {
        number: "02",
        label: "الجدوى والتخطيط",
        title:
          "حوّل فكرة التوسع إلى قرار منظم",
        text:
          "قيّم الافتراضات التجارية والمتطلبات التشغيلية واعتبارات دخول السوق والمخاطر والأولويات الاستراتيجية من خلال دراسات الجدوى والتخطيط.",
        meterLabel: "عمق التخطيط",
        meterValue: "أساسي",
        fillClass: "fillFeasibility",
      },
      {
        number: "03",
        label: "استراتيجية الشراكات",
        title:
          "ابنِ العلاقات الدولية المناسبة",
        text:
          "حدد المؤسسات والمنظومات التجارية والشركاء الاستراتيجيين وقنوات التعاون التي قد تدعم أهدافك التجارية الدولية.",
        meterLabel: "قيمة الشبكة",
        meterValue: "قوية",
        fillClass: "fillPartnership",
      },
      {
        number: "04",
        label: "الدخول الرقمي للسوق",
        title:
          "عزز حضورك الرقمي الدولي",
        text:
          "جهز تموضعك الرقمي ومنصاتك الإلكترونية واتصالك ومحتواك الموجه للسوق وأنظمتك الرقمية لدعم النمو الدولي بشكل أفضل.",
        meterLabel: "الجاهزية الرقمية",
        meterValue: "ضرورية",
        fillClass: "fillDigital",
      },
    ],

    decisionLabel:
      "استشارة استراتيجية",

    decisionTitle:
      "هل تخطط للتوسع دوليًا؟",

    decisionText:
      "ناقش السوق المستهدف ونموذج عملك ووضعك الحالي وأولويات التوسع مع Western Bridge لتحديد الجوانب التي تستحق دراسة أعمق.",

    decisionButton:
      "ناقش استراتيجيتك",

    logoAlt: "Western Bridge",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleBefore: string;
    highlightedTitle: string;
    description: string;
    principleLabel: string;
    principleText: string;
    intelligenceAreas: IntelligenceArea[];
    decisionLabel: string;
    decisionTitle: string;
    decisionText: string;
    decisionButton: string;
    logoAlt: string;
  }
>;

export default function ExpansionIntelligenceSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section
      id="business-expansion"
      className={styles.section}
    >
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.intro}>
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

            <div className={styles.principle}>
              <span className={styles.principleLabel}>
                {t.principleLabel}
              </span>

              <p className={styles.principleText}>
                {t.principleText}
              </p>
            </div>
          </div>

          <div className={styles.matrix}>
            {t.intelligenceAreas.map((area) => (
              <article
                key={area.number}
                className={styles.row}
              >
                <span className={styles.number}>
                  {area.number}
                </span>

                <div className={styles.rowContent}>
                  <span className={styles.rowLabel}>
                    {area.label}
                  </span>

                  <h3 className={styles.rowTitle}>
                    {area.title}
                  </h3>

                  <p className={styles.rowText}>
                    {area.text}
                  </p>
                </div>

                <div className={styles.meter}>
                  <div className={styles.meterTop}>
                    <span className={styles.meterLabel}>
                      {area.meterLabel}
                    </span>

                    <span className={styles.meterValue}>
                      {area.meterValue}
                    </span>
                  </div>

                  <div className={styles.track}>
                    <div
                      className={`${styles.fill} ${styles[area.fillClass]}`}
                    />
                  </div>
                </div>
              </article>
            ))}

            <div className={styles.decisionStrip}>
              <div className={styles.decisionLogo}>
                <Image
                  src="/logo/western-bridge-mark.jpeg"
                  alt={t.logoAlt}
                  width={48}
                  height={48}
                  className={styles.decisionLogoImage}
                />
              </div>

              <div>
                <span className={styles.decisionLabel}>
                  {t.decisionLabel}
                </span>

                <h3 className={styles.decisionTitle}>
                  {t.decisionTitle}
                </h3>

                <p className={styles.decisionText}>
                  {t.decisionText}
                </p>
              </div>

              <Link
                href="/contact"
                className={styles.decisionButton}
              >
                {t.decisionButton}

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