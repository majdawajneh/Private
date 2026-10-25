"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./BusinessExpansionBlueprintSection.module.css";

type Locale = "de" | "en" | "ar";

type BlueprintStep = {
  number: string;
  title: string;
  text: string;
  icon: string;
  featured?: boolean;
};

type BlueprintDetail = {
  label: string;
  title: string;
  text: string;
};

const content = {
  de: {
    eyebrow: "Expansionsplan",

    titleBefore:
      "Machen Sie aus Expansion einen",
    highlightedTitle:
      "strukturierten Plan",

    headerText:
      "Internationales Wachstum wird übersichtlicher, wenn kommerzielle, strategische, partnerschaftliche und operative Aspekte gemeinsam betrachtet werden. Western Bridge unterstützt Unternehmen dabei, diese Elemente in einen klareren Expansionsrahmen zu überführen.",

    blueprintLabel:
      "Strategischer Rahmen",

    blueprintName:
      "International Expansion Blueprint",

    blueprintCode:
      "WB / EXPANSION / 01",

    stepPrefix:
      "SCHRITT",

    blueprintSteps: [
      {
        number: "01",
        title: "Unternehmensposition",
        text:
          "Klären Sie Ihre aktuellen Fähigkeiten, Ihr Geschäftsmodell, Ihre Branche, Prioritäten und internationalen Ziele.",
        icon: "◎",
      },
      {
        number: "02",
        title: "Marktanalyse",
        text:
          "Analysieren Sie Marktbedingungen, Wettbewerb, Kundenerwartungen, Risiken und kommerzielle Möglichkeiten.",
        icon: "⌁",
      },
      {
        number: "03",
        title: "Markteintrittsstrategie",
        text:
          "Definieren Sie die passende Richtung, Prioritäten, Vorbereitungsanforderungen und Vorgehensweise für den Markteintritt.",
        icon: "→",
        featured: true,
      },
      {
        number: "04",
        title: "Partnerschaftsentwicklung",
        text:
          "Erkunden Sie relevante Institutionen, Netzwerke, strategische Beziehungen und Kooperationsmöglichkeiten.",
        icon: "◇",
      },
      {
        number: "05",
        title: "Launch-Vorbereitung",
        text:
          "Stärken Sie operative, digitale, kommunikative und organisatorische Bereitschaft, bevor Sie den nächsten Schritt gehen.",
        icon: "✓",
      },
    ],

    blueprintDetails: [
      {
        label: "Strategische Perspektive",
        title: "Kommerzielle Tragfähigkeit",
        text:
          "Prüfen Sie, ob die Richtung kommerziell und operativ realistisch ist, bevor Ressourcen gebunden werden.",
      },
      {
        label: "Internationale Perspektive",
        title: "Markt- & Partnerschaftsfit",
        text:
          "Verstehen Sie, wie Ihre Branche, Ihr Angebot und Ihre Fähigkeiten zum Zielökosystem passen können.",
      },
      {
        label: "Umsetzungsperspektive",
        title: "Bereitschaft & nächste Schritte",
        text:
          "Übersetzen Sie strategische Erkenntnisse in klarere Vorbereitungsprioritäten und praktische nächste Schritte.",
      },
    ],

    actionLabel:
      "Bereit für den nächsten Schritt?",

    actionTitle:
      "Entwickeln Sie eine Expansionsrichtung rund um Ihr Unternehmen",

    actionText:
      "Besprechen Sie Ihren Zielmarkt, Ihr Geschäftsmodell, Ihre Expansionsprioritäten, Ihren Partnerschaftsbedarf und Ihre aktuelle Bereitschaft mit Western Bridge.",

    actionButton:
      "Gespräch starten",

    logoAlt:
      "Western Bridge",
  },

  en: {
    eyebrow: "Expansion Blueprint",

    titleBefore:
      "Turn Expansion Into a",
    highlightedTitle:
      "Structured Plan",

    headerText:
      "International growth becomes more manageable when the commercial, strategic, partnership, and operational pieces are considered together. Western Bridge helps businesses organize those elements into a clearer expansion framework.",

    blueprintLabel:
      "Strategic Framework",

    blueprintName:
      "International Expansion Blueprint",

    blueprintCode:
      "WB / EXPANSION / 01",

    stepPrefix:
      "STEP",

    blueprintSteps: [
      {
        number: "01",
        title: "Business Position",
        text:
          "Clarify your current capabilities, business model, sector, priorities, and international objectives.",
        icon: "◎",
      },
      {
        number: "02",
        title: "Market Analysis",
        text:
          "Study market conditions, competition, customer expectations, risks, and commercial opportunities.",
        icon: "⌁",
      },
      {
        number: "03",
        title: "Entry Strategy",
        text:
          "Define the most suitable direction, priorities, preparation requirements, and market-entry approach.",
        icon: "→",
        featured: true,
      },
      {
        number: "04",
        title: "Partnership Development",
        text:
          "Explore relevant institutions, networks, strategic relationships, and cooperation opportunities.",
        icon: "◇",
      },
      {
        number: "05",
        title: "Launch Preparation",
        text:
          "Strengthen operational, digital, communication, and organizational readiness before moving forward.",
        icon: "✓",
      },
    ],

    blueprintDetails: [
      {
        label: "Strategic Lens",
        title: "Commercial Viability",
        text:
          "Assess whether the direction is commercially and operationally realistic before committing resources.",
      },
      {
        label: "International Lens",
        title: "Market & Partnership Fit",
        text:
          "Understand how your sector, offer, and capabilities may align with the target ecosystem.",
      },
      {
        label: "Execution Lens",
        title: "Readiness & Next Actions",
        text:
          "Translate strategic findings into clearer preparation priorities and practical next steps.",
      },
    ],

    actionLabel:
      "Ready to Explore the Next Move?",

    actionTitle:
      "Build an Expansion Direction Around Your Business",

    actionText:
      "Discuss your target market, business model, expansion priorities, partnership needs, and current readiness with Western Bridge.",

    actionButton:
      "Start the Conversation",

    logoAlt:
      "Western Bridge",
  },

  ar: {
    eyebrow: "مخطط التوسع",

    titleBefore:
      "حوّل التوسع إلى",
    highlightedTitle:
      "خطة منظمة",

    headerText:
      "يصبح النمو الدولي أكثر وضوحًا عندما تتم دراسة الجوانب التجارية والاستراتيجية والشراكات والعمليات معًا. تساعد Western Bridge الشركات على تنظيم هذه العناصر ضمن إطار أوضح للتوسع.",

    blueprintLabel:
      "الإطار الاستراتيجي",

    blueprintName:
      "مخطط التوسع الدولي",

    blueprintCode:
      "WB / EXPANSION / 01",

    stepPrefix:
      "الخطوة",

    blueprintSteps: [
      {
        number: "01",
        title: "وضع الشركة",
        text:
          "حدد قدراتك الحالية ونموذج عملك وقطاعك وأولوياتك وأهدافك الدولية.",
        icon: "◎",
      },
      {
        number: "02",
        title: "تحليل السوق",
        text:
          "ادرس ظروف السوق والمنافسة وتوقعات العملاء والمخاطر والفرص التجارية.",
        icon: "⌁",
      },
      {
        number: "03",
        title: "استراتيجية الدخول",
        text:
          "حدد الاتجاه الأنسب والأولويات ومتطلبات الاستعداد ومنهجية دخول السوق.",
        icon: "←",
        featured: true,
      },
      {
        number: "04",
        title: "تطوير الشراكات",
        text:
          "استكشف المؤسسات والشبكات والعلاقات الاستراتيجية وفرص التعاون ذات الصلة.",
        icon: "◇",
      },
      {
        number: "05",
        title: "الاستعداد للإطلاق",
        text:
          "عزز الجاهزية التشغيلية والرقمية والتواصلية والمؤسسية قبل الانتقال إلى التنفيذ.",
        icon: "✓",
      },
    ],

    blueprintDetails: [
      {
        label: "المنظور الاستراتيجي",
        title: "الجدوى التجارية",
        text:
          "قيّم ما إذا كان الاتجاه واقعيًا تجاريًا وتشغيليًا قبل تخصيص الموارد.",
      },
      {
        label: "المنظور الدولي",
        title: "ملاءمة السوق والشراكات",
        text:
          "افهم مدى توافق قطاعك وعرضك وقدراتك مع المنظومة المستهدفة.",
      },
      {
        label: "منظور التنفيذ",
        title: "الجاهزية والخطوات التالية",
        text:
          "حوّل النتائج الاستراتيجية إلى أولويات استعداد أكثر وضوحًا وخطوات عملية تالية.",
      },
    ],

    actionLabel:
      "مستعد لاستكشاف الخطوة التالية؟",

    actionTitle:
      "ابنِ اتجاه التوسع حول واقع شركتك",

    actionText:
      "ناقش السوق المستهدف ونموذج عملك وأولويات التوسع واحتياجات الشراكات ومستوى جاهزيتك الحالي مع Western Bridge.",

    actionButton:
      "ابدأ النقاش",

    logoAlt:
      "Western Bridge",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleBefore: string;
    highlightedTitle: string;
    headerText: string;
    blueprintLabel: string;
    blueprintName: string;
    blueprintCode: string;
    stepPrefix: string;
    blueprintSteps: BlueprintStep[];
    blueprintDetails: BlueprintDetail[];
    actionLabel: string;
    actionTitle: string;
    actionText: string;
    actionButton: string;
    logoAlt: string;
  }
>;

export default function BusinessExpansionBlueprintSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
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

        <div className={styles.blueprint}>
          <div
            className={styles.grid}
            aria-hidden="true"
          />

          <span
            className={styles.blueprintStamp}
            aria-hidden="true"
          >
            WESTERN
          </span>

          <div className={styles.blueprintTop}>
            <div className={styles.blueprintIdentity}>
              <div className={styles.blueprintLogo}>
                <Image
                  src="/logo/western-bridge-mark.jpeg"
                  alt={t.logoAlt}
                  width={46}
                  height={46}
                  className={styles.blueprintLogoImage}
                />
              </div>

              <div>
                <span className={styles.blueprintLabel}>
                  {t.blueprintLabel}
                </span>

                <div className={styles.blueprintName}>
                  {t.blueprintName}
                </div>
              </div>
            </div>

            <span className={styles.blueprintCode}>
              {t.blueprintCode}
            </span>
          </div>

          <div className={styles.flow}>
            {t.blueprintSteps.map((step) => (
              <article
                key={step.number}
                className={`${styles.step} ${
                  step.featured ? styles.featured : ""
                }`}
              >
                <div className={styles.stepNode}>
                  <span aria-hidden="true">
                    {step.icon}
                  </span>
                </div>

                <span className={styles.stepNumber}>
                  {t.stepPrefix} {step.number}
                </span>

                <h3 className={styles.stepTitle}>
                  {step.title}
                </h3>

                <p className={styles.stepText}>
                  {step.text}
                </p>
              </article>
            ))}
          </div>

          <div className={styles.detailStrip}>
            {t.blueprintDetails.map((detail) => (
              <div
                key={detail.title}
                className={styles.detail}
              >
                <span className={styles.detailLabel}>
                  {detail.label}
                </span>

                <h3 className={styles.detailTitle}>
                  {detail.title}
                </h3>

                <p className={styles.detailText}>
                  {detail.text}
                </p>
              </div>
            ))}
          </div>

          <div className={styles.finalAction}>
            <div className={styles.actionContent}>
              <span className={styles.actionLabel}>
                {t.actionLabel}
              </span>

              <h3 className={styles.actionTitle}>
                {t.actionTitle}
              </h3>

              <p className={styles.actionText}>
                {t.actionText}
              </p>
            </div>

            <Link
              href="/contact"
              className={styles.actionButton}
            >
              {t.actionButton}

              <span aria-hidden="true">
                {locale === "ar" ? "←" : "→"}
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}