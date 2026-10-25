"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./GermanyFinalSection.module.css";

type Locale = "de" | "en" | "ar";

type Direction = {
  number: string;
  title: string;
  text: string;
  href: string;
};

const content = {
  de: {
    eyebrow: "Western Bridge Deutschland Desk",

    titleBefore:
      "Ihr Deutschland-Plan sollte mit",
    highlightedTitle:
      "der richtigen Frage beginnen.",

    description:
      "Sagen Sie uns, wer Sie sind, was Sie erreichen möchten und wo Sie aktuell stehen. Darauf aufbauend können wir die Vorbereitung, Institutionen, Anforderungen und nächsten Schritte identifizieren, die für Ihren Fall tatsächlich relevant sind.",

    primaryButton:
      "Deutschland-Fall besprechen",

    selectorLabel:
      "Was führt Sie nach Deutschland?",

    selectorTitle:
      "Wählen Sie eine Richtung",

    directions: [
      {
        number: "01",
        title: "Privatperson",
        text:
          "Studium, Ausbildung, Qualifizierung oder beruflicher Weg.",
        href: "/individuals",
      },
      {
        number: "02",
        title: "Gesundheitswesen",
        text:
          "Medizinisches Deutsch, Anerkennung, Zulassung und berufliche Vorbereitung.",
        href: "/medical",
      },
      {
        number: "03",
        title: "Unternehmen",
        text:
          "Markteintritt, Partnerschaften und Expansion nach Deutschland.",
        href: "/businesses",
      },
      {
        number: "04",
        title: "Institution",
        text:
          "Akademische, berufliche und institutionelle Zusammenarbeit.",
        href: "/education",
      },
    ],

    footer: [
      "Deutschland",
      "Europa",
      "Western Bridge",
    ],

    disclaimer:
      "Western Bridge bietet Beratung, Vorbereitung, Training, Networking und Unterstützung bei der Planung des weiteren Weges. Entscheidungen über Visa, Beschäftigung, Zulassung, Anerkennung, Berufslizenzen und formale Partnerschaften liegen bei den zuständigen Behörden, Arbeitgebern, Institutionen und Organisationen.",

    imageAlt:
      "Deutsche Skyline als Symbol für internationale Wege über Western Bridge",
  },

  en: {
    eyebrow: "Western Bridge Germany Desk",

    titleBefore:
      "Your Germany Plan Should Start With",
    highlightedTitle:
      "the Right Question.",

    description:
      "Tell us who you are, what you want to achieve, and where you currently stand. From there, we can identify the preparation, institutions, requirements, and next steps that are actually relevant to your case.",

    primaryButton:
      "Discuss Your Germany Case",

    selectorLabel:
      "What brings you to Germany?",

    selectorTitle:
      "Choose a direction",

    directions: [
      {
        number: "01",
        title: "Individual",
        text:
          "Study, training, qualification or professional pathway.",
        href: "/individuals",
      },
      {
        number: "02",
        title: "Healthcare",
        text:
          "Medical German, recognition, licensing and readiness.",
        href: "/medical",
      },
      {
        number: "03",
        title: "Business",
        text:
          "Market entry, partnerships and Germany expansion.",
        href: "/businesses",
      },
      {
        number: "04",
        title: "Institution",
        text:
          "Academic, training and institutional cooperation.",
        href: "/education",
      },
    ],

    footer: [
      "Germany",
      "Europe",
      "Western Bridge",
    ],

    disclaimer:
      "Western Bridge provides consulting, preparation, training, networking and pathway support. Visa, employment, admission, recognition, licensing and formal partnership decisions remain with the relevant authorities, employers, institutions and organizations.",

    imageAlt:
      "German city skyline representing international pathways through Western Bridge",
  },

  ar: {
    eyebrow: "مكتب Western Bridge لألمانيا",

    titleBefore:
      "خطتك نحو ألمانيا يجب أن تبدأ بـ",
    highlightedTitle:
      "السؤال الصحيح.",

    description:
      "أخبرنا من أنت، وما الذي تريد تحقيقه، وأين تقف حاليًا. ومن هناك يمكننا تحديد الاستعداد والمؤسسات والمتطلبات والخطوات التالية التي ترتبط فعليًا بحالتك.",

    primaryButton:
      "ناقش حالتك لألمانيا",

    selectorLabel:
      "ما الذي يقودك إلى ألمانيا؟",

    selectorTitle:
      "اختر الاتجاه المناسب",

    directions: [
      {
        number: "01",
        title: "الأفراد",
        text:
          "الدراسة أو التدريب أو التأهيل أو المسار المهني.",
        href: "/individuals",
      },
      {
        number: "02",
        title: "القطاع الصحي",
        text:
          "الألمانية الطبية والاعتراف والترخيص والجاهزية المهنية.",
        href: "/medical",
      },
      {
        number: "03",
        title: "الأعمال",
        text:
          "دخول السوق والشراكات والتوسع نحو ألمانيا.",
        href: "/businesses",
      },
      {
        number: "04",
        title: "المؤسسات",
        text:
          "التعاون الأكاديمي والتدريبي والمؤسسي.",
        href: "/education",
      },
    ],

    footer: [
      "ألمانيا",
      "أوروبا",
      "Western Bridge",
    ],

    disclaimer:
      "تقدم Western Bridge الاستشارات والاستعداد والتدريب وبناء العلاقات ودعم تخطيط المسارات. وتبقى قرارات التأشيرات والتوظيف والقبول والاعتراف والترخيص والشراكات الرسمية من اختصاص الجهات الرسمية وأصحاب العمل والمؤسسات والمنظمات المعنية.",

    imageAlt:
      "أفق مدينة ألمانية يرمز إلى المسارات الدولية عبر Western Bridge",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleBefore: string;
    highlightedTitle: string;
    description: string;
    primaryButton: string;
    selectorLabel: string;
    selectorTitle: string;
    directions: Direction[];
    footer: string[];
    disclaimer: string;
    imageAlt: string;
  }
>;

export default function GermanyFinalSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.frame}>
          <Image
            src="/images/germany-final.jpg"
            alt={t.imageAlt}
            fill
            sizes="100vw"
            className={styles.image}
          />

          <div className={styles.overlay} />

          <div className={styles.content}>
            <div className={styles.main}>
              <span className={styles.eyebrow}>
                {t.eyebrow}
              </span>

              <h2 className={styles.title}>
                {t.titleBefore}
                <span>
                  {" "}
                  {t.highlightedTitle}
                </span>
              </h2>

              <p className={styles.description}>
                {t.description}
              </p>

              <Link
                href="/contact"
                className={styles.primaryButton}
              >
                {t.primaryButton}

                <span aria-hidden="true">
                  {locale === "ar" ? "←" : "→"}
                </span>
              </Link>
            </div>

            <div className={styles.selector}>
              <div className={styles.selectorTop}>
                <span>
                  {t.selectorLabel}
                </span>

                <strong>
                  {t.selectorTitle}
                </strong>
              </div>

              <div className={styles.routes}>
                {t.directions.map((direction) => (
                  <Link
                    key={direction.number}
                    href={direction.href}
                    className={styles.route}
                  >
                    <span className={styles.number}>
                      {direction.number}
                    </span>

                    <div>
                      <h3>
                        {direction.title}
                      </h3>

                      <p>
                        {direction.text}
                      </p>
                    </div>

                    <span
                      className={styles.arrow}
                      aria-hidden="true"
                    >
                      {locale === "ar" ? "←" : "→"}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.footerLine}>
            {t.footer.map((item, index) => (
              <span
                key={item}
                className={styles.footerItem}
              >
                {item}

                {index < t.footer.length - 1 && (
                  <span
                    className={styles.dot}
                    aria-hidden="true"
                  />
                )}
              </span>
            ))}
          </div>
        </div>

        <p className={styles.disclaimer}>
          {t.disclaimer}
        </p>
      </Container>
    </section>
  );
}