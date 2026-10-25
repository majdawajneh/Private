"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./AboutValuesSection.module.css";

type Locale = "de" | "en" | "ar";

type Standard = {
  number: string;
  title: string;
  text: string;
};

const content = {
  de: {
    eyebrow:
      "Wofür wir stehen",

    titleBefore:
      "Entwickelt für Arbeit mit",
    highlightedTitle:
      "echten Konsequenzen.",

    imageAlt:
      "Internationale Fachkräfte bei gemeinsamer Arbeit an Geschäfts- und Institutionsentwicklung",

    imageLabel:
      "Western Bridge",

    imageTitle:
      "Internationale Arbeit braucht Struktur, Kontext und verantwortungsvolle Vorbereitung.",

    missionNumber:
      "01",

    missionLabel:
      "Unsere Mission",

    missionTitle:
      "Komplexe internationale Wege verständlicher und besser vorbereitbar machen.",

    missionText:
      "Indem wir Beratung, Training, Recherche, Qualifizierungsunterstützung, Technologie und internationale Verbindungen in einer strukturierten Serviceumgebung zusammenführen.",

    visionNumber:
      "02",

    visionLabel:
      "Unsere Vision",

    visionTitle:
      "Eine vertrauenswürdige Brücke zwischen regionalem Potenzial und internationalen Möglichkeiten werden.",

    visionText:
      "Mit Deutschland als zentralem Gateway und weiterführenden Verbindungen nach Europa und in internationale Märkte.",

    positionLabel:
      "Unsere Position",

    positionText:
      "Western Bridge arbeitet dort, wo Vorbereitung, Fähigkeiten, Institutionen, Märkte und internationale Verbindungen zusammenkommen.",

    standardsLabel:
      "Arbeitsstandards",

    standardsTitle:
      "So soll unsere Arbeit ausgeführt werden.",

    standards: [
      {
        number: "01",
        title:
          "Klarheit vor dem nächsten Schritt",
        text:
          "Kunden sollten den Weg, die Anforderungen, Verantwortlichkeiten und Grenzen verstehen, bevor sie weitergehen.",
      },
      {
        number: "02",
        title:
          "Vorbereitung statt Versprechen",
        text:
          "Wir konzentrieren uns darauf, die Bereitschaft zu verbessern, anstatt Ergebnisse als Garantien darzustellen, die von unabhängigen Dritten abhängen.",
      },
      {
        number: "03",
        title:
          "Relevante Verbindungen",
        text:
          "Networking schafft nur dann Wert, wenn Institution, Markt, Organisation oder professionelle Verbindung zum jeweiligen Ziel passt.",
      },
      {
        number: "04",
        title:
          "Langfristige Fähigkeiten",
        text:
          "Training, Wissen, Systeme und institutionelle Entwicklung sollten den Kunden über eine einzelne Transaktion hinaus stärken.",
      },
    ],

    finalLabel:
      "Western Bridge",

    finalTitle:
      "Haben Sie ein Ziel, das Grenzen überschreitet?",

    finalText:
      "Sagen Sie uns, was Sie erreichen möchten. Wir prüfen gemeinsam, ob Western Bridge den erforderlichen Weg, die Vorbereitung oder die passende Verbindung unterstützen kann.",

    servicesButton:
      "Leistungen ansehen",

    contactButton:
      "Western Bridge kontaktieren",
  },

  en: {
    eyebrow:
      "What We Stand For",

    titleBefore:
      "Built for Work That Has",
    highlightedTitle:
      "Real Consequences.",

    imageAlt:
      "International professionals working together on business and institutional development",

    imageLabel:
      "Western Bridge",

    imageTitle:
      "International work needs structure, context and responsible preparation.",

    missionNumber:
      "01",

    missionLabel:
      "Our Mission",

    missionTitle:
      "Make complex international pathways easier to understand and prepare for.",

    missionText:
      "By combining consulting, training, research, qualification support, technology, and international connections in one structured service environment.",

    visionNumber:
      "02",

    visionLabel:
      "Our Vision",

    visionTitle:
      "Become a trusted bridge between regional ambition and international opportunity.",

    visionText:
      "With Germany as a central gateway and broader connections across Europe and international markets.",

    positionLabel:
      "Our Position",

    positionText:
      "Western Bridge operates where preparation, capability, institutions, markets, and international connections meet.",

    standardsLabel:
      "Operating Standards",

    standardsTitle:
      "How we expect the work to be done.",

    standards: [
      {
        number: "01",
        title:
          "Clarity Before Action",
        text:
          "Clients should understand the route, requirements, responsibilities, and limitations before moving forward.",
      },
      {
        number: "02",
        title:
          "Preparation Over Promises",
        text:
          "We focus on improving readiness instead of presenting outcomes that depend on third parties as guarantees.",
      },
      {
        number: "03",
        title:
          "Relevant Connections",
        text:
          "Networking only creates value when the institution, market, organization, or professional connection is relevant to the objective.",
      },
      {
        number: "04",
        title:
          "Long-Term Capability",
        text:
          "Training, knowledge, systems, and institutional development should leave the client stronger beyond a single transaction.",
      },
    ],

    finalLabel:
      "Western Bridge",

    finalTitle:
      "Have an objective that crosses borders?",

    finalText:
      "Tell us what you are trying to achieve. We will help determine whether Western Bridge can support the route, preparation, or connection required.",

    servicesButton:
      "View Services",

    contactButton:
      "Contact Western Bridge",
  },

  ar: {
    eyebrow:
      "ما الذي نمثله",

    titleBefore:
      "نعمل على أمور لها",
    highlightedTitle:
      "نتائج حقيقية.",

    imageAlt:
      "مهنيون دوليون يعملون معًا على تطوير الأعمال والمؤسسات",

    imageLabel:
      "Western Bridge",

    imageTitle:
      "العمل الدولي يحتاج إلى تنظيم وسياق واستعداد مسؤول.",

    missionNumber:
      "01",

    missionLabel:
      "مهمتنا",

    missionTitle:
      "جعل المسارات الدولية المعقدة أسهل في الفهم والاستعداد.",

    missionText:
      "من خلال جمع الاستشارات والتدريب والبحث ودعم التأهيل والتكنولوجيا والروابط الدولية ضمن بيئة خدمات منظمة واحدة.",

    visionNumber:
      "02",

    visionLabel:
      "رؤيتنا",

    visionTitle:
      "أن نصبح جسرًا موثوقًا بين الطموح الإقليمي والفرص الدولية.",

    visionText:
      "مع ألمانيا كبوابة مركزية وروابط أوسع مع أوروبا والأسواق الدولية.",

    positionLabel:
      "موقعنا",

    positionText:
      "تعمل Western Bridge في النقطة التي يلتقي فيها الاستعداد والقدرات والمؤسسات والأسواق والروابط الدولية.",

    standardsLabel:
      "معايير العمل",

    standardsTitle:
      "كيف نتوقع أن يتم تنفيذ العمل.",

    standards: [
      {
        number: "01",
        title:
          "الوضوح قبل التحرك",
        text:
          "يجب أن يفهم العميل المسار والمتطلبات والمسؤوليات والحدود قبل الانتقال إلى الخطوة التالية.",
      },
      {
        number: "02",
        title:
          "الاستعداد قبل الوعود",
        text:
          "نركز على تحسين الجاهزية بدل تقديم نتائج تعتمد على أطراف مستقلة وكأنها مضمونة.",
      },
      {
        number: "03",
        title:
          "روابط ذات صلة",
        text:
          "بناء العلاقات يحقق قيمة فقط عندما تكون المؤسسة أو السوق أو الجهة أو العلاقة المهنية مرتبطة فعليًا بالهدف.",
      },
      {
        number: "04",
        title:
          "قدرات طويلة المدى",
        text:
          "يجب أن يترك التدريب والمعرفة والأنظمة والتطوير المؤسسي العميل أقوى حتى بعد انتهاء المشروع أو الخدمة الحالية.",
      },
    ],

    finalLabel:
      "Western Bridge",

    finalTitle:
      "هل لديك هدف يتجاوز الحدود؟",

    finalText:
      "أخبرنا بما تحاول الوصول إليه. وسنساعد في تحديد ما إذا كانت Western Bridge تستطيع دعم المسار أو الاستعداد أو الربط المطلوب.",

    servicesButton:
      "استعرض الخدمات",

    contactButton:
      "تواصل مع Western Bridge",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleBefore: string;
    highlightedTitle: string;
    imageAlt: string;
    imageLabel: string;
    imageTitle: string;
    missionNumber: string;
    missionLabel: string;
    missionTitle: string;
    missionText: string;
    visionNumber: string;
    visionLabel: string;
    visionTitle: string;
    visionText: string;
    positionLabel: string;
    positionText: string;
    standardsLabel: string;
    standardsTitle: string;
    standards: Standard[];
    finalLabel: string;
    finalTitle: string;
    finalText: string;
    servicesButton: string;
    contactButton: string;
  }
>;

export default function AboutValuesSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {t.eyebrow}
            </div>

            <h2 className={styles.title}>
              {t.titleBefore}

              <span>
                {t.highlightedTitle}
              </span>
            </h2>
          </div>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.visual}>
            <Image
              src="/images/about-values.jpg"
              alt={t.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.image}
            />

            <div className={styles.overlay} />

            <div className={styles.imageContent}>
              <span>
                {t.imageLabel}
              </span>

              <h3>
                {t.imageTitle}
              </h3>
            </div>
          </div>

          <div className={styles.direction}>
            <div className={styles.directionBlock}>
              <span className={styles.directionNumber}>
                {t.missionNumber}
              </span>

              <div>
                <span className={styles.directionLabel}>
                  {t.missionLabel}
                </span>

                <h3>
                  {t.missionTitle}
                </h3>

                <p>
                  {t.missionText}
                </p>
              </div>
            </div>

            <div className={styles.directionBlock}>
              <span className={styles.directionNumber}>
                {t.visionNumber}
              </span>

              <div>
                <span className={styles.directionLabel}>
                  {t.visionLabel}
                </span>

                <h3>
                  {t.visionTitle}
                </h3>

                <p>
                  {t.visionText}
                </p>
              </div>
            </div>

            <div className={styles.positioning}>
              <span className={styles.positioningLabel}>
                {t.positionLabel}
              </span>

              <p>
                {t.positionText}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.standards}>
          <div className={styles.standardsIntro}>
            <span>
              {t.standardsLabel}
            </span>

            <h3>
              {t.standardsTitle}
            </h3>
          </div>

          <div className={styles.standardList}>
            {t.standards.map((standard) => (
              <article
                key={standard.number}
                className={styles.standard}
              >
                <span className={styles.standardNumber}>
                  {standard.number}
                </span>

                <h4>
                  {standard.title}
                </h4>

                <p>
                  {standard.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.final}>
          <div>
            <span className={styles.finalLabel}>
              {t.finalLabel}
            </span>

            <h3>
              {t.finalTitle}
            </h3>

            <p>
              {t.finalText}
            </p>
          </div>

          <div className={styles.finalActions}>
            <Link
              href="/services"
              className={styles.secondaryButton}
            >
              {t.servicesButton}
            </Link>

            <Link
              href="/contact"
              className={styles.primaryButton}
            >
              {t.contactButton}

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