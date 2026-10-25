"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./ServicesDeliverySection.module.css";

type Locale = "de" | "en" | "ar";

type DeliveryStep = {
  number: string;
  title: string;
  text: string;
};

const content = {
  de: {
    eyebrow: "So arbeiten wir",

    titleLineOne: "Von der Anforderung",
    titleLineTwo: "bis zur Umsetzung.",

    intro:
      "Western Bridge beginnt nicht damit, jeden Kunden in dasselbe Leistungspaket einzuordnen. Ausgangspunkt ist der tatsächliche Bedarf. Darauf aufbauend wird der passende Leistungsumfang zusammengestellt.",

    steps: [
      {
        number: "01",
        title: "Anforderung definieren",
        text:
          "Wir beginnen damit, das tatsächliche Ziel, die aktuelle Situation, den Zielmarkt, relevante Beteiligte und bestehende Rahmenbedingungen zu verstehen.",
      },
      {
        number: "02",
        title: "Route strukturieren",
        text:
          "Wir identifizieren, welche Leistungsbereiche, Institutionen, Märkte, Dokumente, Kompetenzen oder Vorbereitungsschritte relevant sind.",
      },
      {
        number: "03",
        title: "Leistungsumfang aufbauen",
        text:
          "Der Projektumfang kann Beratung, Recherche, Training, Technologie, Dokumentation, Networking oder institutionelle Unterstützung kombinieren.",
      },
      {
        number: "04",
        title: "Umsetzen & koordinieren",
        text:
          "Wir koordinieren die vereinbarten Arbeiten, Vorbereitungen, Kommunikation, Recherche und Ergebnisse entsprechend den Anforderungen des Projekts.",
      },
      {
        number: "05",
        title: "Nächsten Schritt prüfen",
        text:
          "In jeder Phase prüfen wir, was abgeschlossen wurde und welche nächsten Schritte der Kunde mit der relevanten Institution oder im jeweiligen Markt unternehmen sollte.",
      },
    ],

    visualAlt:
      "Professionelles Team bei der Planung und Koordination eines internationalen Beratungsprojekts",

    imageLabel:
      "Projektumsetzung",

    imageTitle:
      "Eine einzige Anforderung kann mehrere Fachbereiche miteinander verbinden.",

    imageText:
      "Der Mehrwert entsteht, wenn die richtigen Leistungen sinnvoll zusammengeführt werden, anstatt jedes Problem als separate Dienstleistung zu behandeln.",

    finalLabel:
      "Beginnen Sie mit dem Bedarf",

    finalTitle:
      "Sagen Sie uns, was Sie erreichen möchten.",

    finalText:
      "Individueller Weg, Vorbereitung im Gesundheitsbereich, Markteintritt in Deutschland, institutionelle Kooperation, Training, Recherche, Technologie oder eine komplexere Kombination – der erste Schritt besteht darin, den tatsächlichen Bedarf richtig zu verstehen.",

    button:
      "Gespräch starten",

    disclaimer:
      "Western Bridge bietet Beratung, Vorbereitung, Training, Recherche, Technologie, Networking und Koordinationsunterstützung. Entscheidungen von Behörden, Arbeitgebern, Hochschulen, Zulassungsstellen, Institutionen und anderen unabhängigen Dritten liegen außerhalb des Einflussbereichs von Western Bridge.",
  },

  en: {
    eyebrow: "How We Deliver",

    titleLineOne: "From Requirement",
    titleLineTwo: "to Execution.",

    intro:
      "Western Bridge does not begin by forcing every client into the same package. The work starts with the requirement, then the service scope is built around it.",

    steps: [
      {
        number: "01",
        title: "Define the Requirement",
        text:
          "We start by understanding the real objective, current situation, target market, stakeholders, and constraints.",
      },
      {
        number: "02",
        title: "Map the Route",
        text:
          "We identify which service areas, institutions, markets, documents, capabilities, or preparation steps are relevant.",
      },
      {
        number: "03",
        title: "Build the Scope",
        text:
          "The project scope can combine consulting, research, training, technology, documentation, networking, or institutional support.",
      },
      {
        number: "04",
        title: "Execute & Coordinate",
        text:
          "We coordinate the agreed work, preparation, communication, research, and deliverables according to the project requirements.",
      },
      {
        number: "05",
        title: "Review the Next Step",
        text:
          "At each stage, we review what has been completed and what the client should do next with the relevant institution or market.",
      },
    ],

    visualAlt:
      "Professional team planning and coordinating an international consulting project",

    imageLabel:
      "Project Delivery",

    imageTitle:
      "One requirement can involve several disciplines.",

    imageText:
      "The value is in connecting the right work together instead of treating every problem as a separate service.",

    finalLabel:
      "Start With the Requirement",

    finalTitle:
      "Tell us what you are trying to achieve.",

    finalText:
      "Individual pathway, healthcare preparation, Germany market entry, institutional cooperation, training, research, technology, or a more complex combination — the first step is understanding the need properly.",

    button:
      "Start a Conversation",

    disclaimer:
      "Western Bridge provides consulting, preparation, training, research, technology, networking, and coordination support. Decisions made by authorities, employers, universities, licensing bodies, institutions, and other third parties remain outside Western Bridge's control.",
  },

  ar: {
    eyebrow: "كيف ننفذ",

    titleLineOne: "من تحديد الاحتياج",
    titleLineTwo: "إلى التنفيذ.",

    intro:
      "لا تبدأ Western Bridge بفرض نفس حزمة الخدمات على كل عميل. يبدأ العمل من فهم الاحتياج الفعلي، ثم يتم بناء نطاق الخدمة المناسب حوله.",

    steps: [
      {
        number: "01",
        title: "تحديد الاحتياج",
        text:
          "نبدأ بفهم الهدف الحقيقي والوضع الحالي والسوق المستهدف والجهات المعنية والقيود الموجودة.",
      },
      {
        number: "02",
        title: "رسم المسار",
        text:
          "نحدد مجالات الخدمة والمؤسسات والأسواق والوثائق والقدرات وخطوات الاستعداد ذات الصلة.",
      },
      {
        number: "03",
        title: "بناء نطاق العمل",
        text:
          "يمكن أن يجمع نطاق المشروع بين الاستشارات والبحث والتدريب والتكنولوجيا والتوثيق وبناء العلاقات والدعم المؤسسي.",
      },
      {
        number: "04",
        title: "التنفيذ والتنسيق",
        text:
          "ننسق الأعمال والاستعداد والتواصل والبحث والمخرجات المتفق عليها وفق متطلبات المشروع.",
      },
      {
        number: "05",
        title: "مراجعة الخطوة التالية",
        text:
          "في كل مرحلة نراجع ما تم إنجازه وما الذي ينبغي على العميل القيام به لاحقًا مع المؤسسة أو السوق ذي الصلة.",
      },
    ],

    visualAlt:
      "فريق مهني يخطط وينسق مشروعًا استشاريًا دوليًا",

    imageLabel:
      "تنفيذ المشروع",

    imageTitle:
      "قد يجمع احتياج واحد عدة تخصصات في الوقت نفسه.",

    imageText:
      "القيمة الحقيقية تكمن في ربط الأعمال المناسبة معًا بدل التعامل مع كل مشكلة كخدمة منفصلة.",

    finalLabel:
      "ابدأ من الاحتياج",

    finalTitle:
      "أخبرنا بما تحاول الوصول إليه.",

    finalText:
      "مسار فردي، استعداد للقطاع الصحي، دخول السوق الألماني، تعاون مؤسسي، تدريب، بحث، تكنولوجيا أو مزيج أكثر تعقيدًا — الخطوة الأولى هي فهم الاحتياج بشكل صحيح.",

    button:
      "ابدأ النقاش",

    disclaimer:
      "تقدم Western Bridge خدمات الاستشارة والاستعداد والتدريب والبحث والتكنولوجيا وبناء العلاقات والتنسيق. أما القرارات التي تصدر عن الجهات الرسمية وأصحاب العمل والجامعات وهيئات الترخيص والمؤسسات والأطراف المستقلة الأخرى فتبقى خارج نطاق سيطرة Western Bridge.",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleLineOne: string;
    titleLineTwo: string;
    intro: string;
    steps: DeliveryStep[];
    visualAlt: string;
    imageLabel: string;
    imageTitle: string;
    imageText: string;
    finalLabel: string;
    finalTitle: string;
    finalText: string;
    button: string;
    disclaimer: string;
  }
>;

export default function ServicesDeliverySection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {t.eyebrow}
            </div>

            <h2 className={styles.title}>
              {t.titleLineOne}
              <br />

              <span>
                {t.titleLineTwo}
              </span>
            </h2>

            <p className={styles.intro}>
              {t.intro}
            </p>

            <div className={styles.steps}>
              {t.steps.map((step) => (
                <article
                  key={step.number}
                  className={styles.step}
                >
                  <span className={styles.number}>
                    {step.number}
                  </span>

                  <div>
                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.visual}>
            <Image
              src="/images/services-delivery.jpg"
              alt={t.visualAlt}
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
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

              <p>
                {t.imageText}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.finalCta}>
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

          <Link
            href="/contact"
            className={styles.button}
          >
            {t.button}

            <span aria-hidden="true">
              {locale === "ar" ? "←" : "→"}
            </span>
          </Link>
        </div>

        <p className={styles.disclaimer}>
          {t.disclaimer}
        </p>
      </Container>
    </section>
  );
}