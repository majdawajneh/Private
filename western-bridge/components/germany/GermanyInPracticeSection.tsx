"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./GermanyInPracticeSection.module.css";

type Locale = "de" | "en" | "ar";

type Area = {
  number: string;
  label: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  className: "city" | "university" | "healthcare" | "business";
};

const content = {
  de: {
    eyebrow: "Deutschland in der Praxis",

    titleLineOne: "Verstehen Sie das Land",
    highlightedTitle: "hinter den Möglichkeiten.",

    intro:
      "Ein Weg nach Deutschland bedeutet, in ein reales System aus Institutionen, Berufen, Bildungsträgern, Arbeitgebern, Behörden und regionalen Strukturen einzutreten. Dieses Umfeld zu verstehen, ist ein wichtiger Teil einer guten Vorbereitung.",

    introLink: "Mit dem Deutschland Desk sprechen",

    areas: [
      {
        number: "01",
        label: "Leben & Umfeld",
        title: "Städte, Regionen & der Alltag in Deutschland",
        text:
          "Deutschland ist kein einheitliches Umfeld. Ihr Standort kann Institutionen, berufliche Netzwerke, Lebenshaltungskosten, Mobilität und die zuständigen Behörden beeinflussen.",
        image: "/images/germany-city.jpg",
        alt: "Moderne deutsche Stadt und urbanes Umfeld",
        className: "city",
      },
      {
        number: "02",
        label: "Bildung",
        title: "Hochschulen, Ausbildung & Qualifizierung",
        text:
          "Akademische und berufliche Bildung kann Hochschulen, Ausbildungsanbieter, Sprachvorbereitung und qualifikationsbezogene Anforderungen umfassen.",
        image: "/images/germany-university.jpg",
        alt: "Hochschulcampus und Studierende in Deutschland",
        className: "university",
      },
      {
        number: "03",
        label: "Gesundheitswesen",
        title: "Ein reguliertes berufliches Umfeld",
        text:
          "Medizinische Fachkräfte müssen sich möglicherweise mit deutscher Sprache, Anerkennung, Zulassung, Dokumentation und berufsspezifischen Anforderungen befassen, bevor sie ihren Beruf ausüben können.",
        image: "/images/germany-healthcare.jpg",
        alt: "Medizinische Fachkräfte in einer modernen deutschen Gesundheitseinrichtung",
        className: "healthcare",
      },
      {
        number: "04",
        label: "Wirtschaft",
        title: "Marktzugang & institutionelle Beziehungen",
        text:
          "Unternehmen, die nach Deutschland expandieren, brauchen mehr als nur eine übersetzte Website. Marktpositionierung, lokale Beziehungen, Regulierung, Partner und geschäftliche Vorbereitung spielen eine wichtige Rolle.",
        image: "/images/germany-business.jpg",
        alt: "Professionelles Geschäftsumfeld in Deutschland",
        className: "business",
      },
    ],

    contextLabel: "Deutschland ist föderal.",

    contextTitle:
      "Der Standort kann den Prozess verändern.",

    contextText:
      "Bestimmte Verfahren, zuständige Behörden, Anerkennungswege, Institutionen und berufliche Anforderungen können je nach Beruf und dem beteiligten deutschen Bundesland unterschiedlich sein.",

    contextTags: [
      "16 Bundesländer",
      "Unterschiedliche Behörden",
      "Regionale Institutionen",
    ],
  },

  en: {
    eyebrow: "Germany in Practice",

    titleLineOne: "Understand the Country",
    highlightedTitle: "Behind the Opportunity.",

    intro:
      "Moving toward Germany means entering a real system of institutions, professions, education providers, employers, authorities, and regional structures. Understanding that environment is part of being properly prepared.",

    introLink: "Talk to Germany Desk",

    areas: [
      {
        number: "01",
        label: "Living & Environment",
        title: "Cities, Regions & Everyday Germany",
        text:
          "Germany is not one uniform environment. Your destination can affect institutions, professional networks, cost of living, mobility, and the authorities you interact with.",
        image: "/images/germany-city.jpg",
        alt: "Modern German city and urban environment",
        className: "city",
      },
      {
        number: "02",
        label: "Education",
        title: "Universities, Training & Qualification",
        text:
          "Academic and professional education can involve universities, vocational training providers, language preparation, and qualification-specific requirements.",
        image: "/images/germany-university.jpg",
        alt: "University campus and students in Germany",
        className: "university",
      },
      {
        number: "03",
        label: "Healthcare",
        title: "A Regulated Professional Environment",
        text:
          "Healthcare professionals may need to address German language, recognition, licensing, documentation, and profession-specific requirements before practicing.",
        image: "/images/germany-healthcare.jpg",
        alt: "Healthcare professionals in a modern German medical environment",
        className: "healthcare",
      },
      {
        number: "04",
        label: "Business",
        title: "Market Access & Institutional Relationships",
        text:
          "Companies entering Germany need more than a translated website. Market position, local relationships, regulations, partners, and commercial readiness all matter.",
        image: "/images/germany-business.jpg",
        alt: "Professional business environment in Germany",
        className: "business",
      },
    ],

    contextLabel: "Germany is federal.",

    contextTitle:
      "Location can change the process.",

    contextText:
      "Some procedures, responsible authorities, recognition routes, institutions, and professional requirements can differ according to the profession and the German federal state involved.",

    contextTags: [
      "16 Federal States",
      "Different Authorities",
      "Regional Institutions",
    ],
  },

  ar: {
    eyebrow: "ألمانيا في الواقع العملي",

    titleLineOne: "افهم البلد",
    highlightedTitle: "خلف الفرصة.",

    intro:
      "التوجه نحو ألمانيا يعني الدخول في منظومة حقيقية من المؤسسات والمهن ومقدمي التعليم وأصحاب العمل والجهات الرسمية والهياكل الإقليمية. وفهم هذه البيئة جزء أساسي من الاستعداد الصحيح.",

    introLink: "تحدث مع مكتب ألمانيا",

    areas: [
      {
        number: "01",
        label: "الحياة والبيئة",
        title: "المدن والمناطق والحياة اليومية في ألمانيا",
        text:
          "ألمانيا ليست بيئة موحدة. فالمدينة أو المنطقة التي تتجه إليها قد تؤثر على المؤسسات والشبكات المهنية وتكاليف المعيشة والتنقل والجهات الرسمية التي تتعامل معها.",
        image: "/images/germany-city.jpg",
        alt: "مدينة ألمانية حديثة وبيئة حضرية",
        className: "city",
      },
      {
        number: "02",
        label: "التعليم",
        title: "الجامعات والتدريب والتأهيل",
        text:
          "قد يشمل التعليم الأكاديمي والمهني الجامعات ومقدمي التدريب المهني والاستعداد اللغوي ومتطلبات مرتبطة بالمؤهل أو البرنامج.",
        image: "/images/germany-university.jpg",
        alt: "حرم جامعي وطلاب في ألمانيا",
        className: "university",
      },
      {
        number: "03",
        label: "القطاع الصحي",
        title: "بيئة مهنية منظمة",
        text:
          "قد يحتاج العاملون في القطاع الصحي إلى التعامل مع اللغة الألمانية والاعتراف والترخيص والوثائق ومتطلبات خاصة بالمهنة قبل مزاولة العمل.",
        image: "/images/germany-healthcare.jpg",
        alt: "متخصصون في القطاع الصحي داخل بيئة طبية ألمانية حديثة",
        className: "healthcare",
      },
      {
        number: "04",
        label: "الأعمال",
        title: "الوصول إلى السوق والعلاقات المؤسسية",
        text:
          "الشركات التي تدخل السوق الألماني تحتاج إلى أكثر من مجرد موقع مترجم. فالمكانة في السوق والعلاقات المحلية والأنظمة والشركاء والجاهزية التجارية كلها عناصر مهمة.",
        image: "/images/germany-business.jpg",
        alt: "بيئة أعمال احترافية في ألمانيا",
        className: "business",
      },
    ],

    contextLabel: "ألمانيا دولة اتحادية.",

    contextTitle:
      "الموقع قد يغيّر تفاصيل المسار.",

    contextText:
      "بعض الإجراءات والجهات المختصة ومسارات الاعتراف والمؤسسات والمتطلبات المهنية قد تختلف بحسب المهنة والولاية الألمانية المعنية.",

    contextTags: [
      "16 ولاية اتحادية",
      "جهات مختلفة",
      "مؤسسات إقليمية",
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleLineOne: string;
    highlightedTitle: string;
    intro: string;
    introLink: string;
    areas: Area[];
    contextLabel: string;
    contextTitle: string;
    contextText: string;
    contextTags: string[];
  }
>;

export default function GermanyInPracticeSection() {
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
              {t.titleLineOne}
              <br />

              <span>
                {t.highlightedTitle}
              </span>
            </h2>
          </div>

          <div className={styles.intro}>
            <p>
              {t.intro}
            </p>

            <Link
              href="/contact"
              className={styles.introLink}
            >
              {t.introLink}

              <span aria-hidden="true">
                {locale === "ar" ? "←" : "→"}
              </span>
            </Link>
          </div>
        </div>

        <div className={styles.gallery}>
          {t.areas.map((area) => (
            <article
              key={area.number}
              className={`${styles.photoBlock} ${
                styles[area.className]
              }`}
            >
              <Image
                src={area.image}
                alt={area.alt}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
                className={styles.image}
              />

              <div className={styles.overlay} />

              <span className={styles.number}>
                {area.number}
              </span>

              <div className={styles.photoContent}>
                <span className={styles.label}>
                  {area.label}
                </span>

                <h3>
                  {area.title}
                </h3>

                <p>
                  {area.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.context}>
          <div className={styles.contextTitle}>
            <span>
              {t.contextLabel}
            </span>

            <h3>
              {t.contextTitle}
            </h3>
          </div>

          <div className={styles.contextText}>
            <p>
              {t.contextText}
            </p>
          </div>

          <div className={styles.contextTags}>
            {t.contextTags.map((tag) => (
              <span key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}