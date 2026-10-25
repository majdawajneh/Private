"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./GermanySystemSection.module.css";

type Locale = "de" | "en" | "ar";

type SystemPoint = {
  number: string;
  title: string;
  text: string;
};

const content = {
  de: {
    eyebrow: "So funktioniert Deutschland",

    titleBefore:
      "Der richtige Weg hängt davon ab,",
    highlightedTitle:
      "wer zuständig ist.",

    imageAlt:
      "Person bei der Vorbereitung von Dokumenten in einem deutschen institutionellen Umfeld",

    imageLabel:
      "Das deutsche System",

    imageTitle:
      "Ein Land. Unterschiedliche Behörden, Institutionen und Wege.",

    imageText:
      "Gute Vorbereitung beginnt damit, das System zu identifizieren, das tatsächlich auf Ihren Fall zutrifft.",

    systemCode:
      "DE / SYSTEMÜBERSICHT",

    systemIntro:
      "Bevor Sie Anträge vorbereiten oder Organisationen kontaktieren, sollten diese sechs Punkte geklärt werden. Sie bestimmen, welche Dokumente, Institutionen und nächsten Schritte relevant sind.",

    systemPoints: [
      {
        number: "01",
        title: "Ihr Ziel",
        text:
          "Studium, Ausbildung, Gesundheitswesen, berufliche Tätigkeit, Wirtschaft und institutionelle Zusammenarbeit führen nicht über dasselbe System nach Deutschland.",
      },
      {
        number: "02",
        title: "Ihre Qualifikation",
        text:
          "Ihr Studienabschluss, Ihre berufliche Qualifikation, Ihre Berufszulassung und Ihre bisherige Erfahrung beeinflussen, was geprüft oder vorbereitet werden muss.",
      },
      {
        number: "03",
        title: "Die zuständige Stelle",
        text:
          "Anerkennung, Berufszulassung, Aufenthalt, Bildung und berufliche Fragen können unterschiedliche Behörden und Institutionen betreffen.",
      },
      {
        number: "04",
        title: "Ihr Bundesland",
        text:
          "Die zuständige Behörde und bestimmte Verfahren können vom Beruf, der Institution und dem jeweiligen deutschen Bundesland abhängen.",
      },
      {
        number: "05",
        title: "Die Sprache",
        text:
          "Das erforderliche Sprachniveau hängt vom jeweiligen Weg ab. Im Gesundheitswesen und in regulierten Berufen können zusätzlich berufsspezifische Sprachkenntnisse verlangt werden.",
      },
      {
        number: "06",
        title: "Die Unterlagen",
        text:
          "Zeugnisse, Leistungsnachweise, Übersetzungen, berufliche Nachweise, Identitätsdokumente und weitere Belege sollten passend zum tatsächlichen Weg vorbereitet werden.",
      },
    ],

    ruleLabel:
      "Western Bridge Prinzip",

    ruleText:
      "Wir beginnen nicht mit den Unterlagen. Wir beginnen mit dem Weg, der zuständigen Institution und den Anforderungen — und bauen darauf die Vorbereitung auf.",

    button:
      "Meinen Deutschland-Fall prüfen",

    logoAlt:
      "Western Bridge",
  },

  en: {
    eyebrow:
      "How Germany Works",

    titleBefore:
      "The Right Route Depends on",
    highlightedTitle:
      "Who Is Responsible.",

    imageAlt:
      "Professional preparing documents within a German institutional environment",

    imageLabel:
      "German System",

    imageTitle:
      "One country. Multiple authorities, institutions and routes.",

    imageText:
      "Good preparation starts by identifying the system that actually applies to your case.",

    systemCode:
      "DE / SYSTEM MAP",

    systemIntro:
      "Before preparing applications or contacting organizations, clarify these six points. They determine which documents, institutions, and next steps are relevant.",

    systemPoints: [
      {
        number: "01",
        title: "Your Objective",
        text:
          "Study, training, healthcare, professional work, business, and institutional cooperation do not enter Germany through the same system.",
      },
      {
        number: "02",
        title: "Your Qualification",
        text:
          "Your degree, vocational qualification, professional license, and previous experience influence what may need to be reviewed or prepared.",
      },
      {
        number: "03",
        title: "The Responsible Authority",
        text:
          "Recognition, licensing, residence, education, and professional matters can involve different authorities and institutions.",
      },
      {
        number: "04",
        title: "Your Federal State",
        text:
          "The competent authority and some procedures may depend on the profession, institution, and German federal state involved.",
      },
      {
        number: "05",
        title: "Language",
        text:
          "The required language level depends on the pathway. Healthcare and regulated professions can also involve profession-specific language requirements.",
      },
      {
        number: "06",
        title: "The File",
        text:
          "Certificates, transcripts, translations, professional records, identification documents, and supporting evidence need to be prepared around the actual route.",
      },
    ],

    ruleLabel:
      "Western Bridge Principle",

    ruleText:
      "We do not start with paperwork. We start by identifying the route, responsible institution, and requirements — then build the preparation around them.",

    button:
      "Review My Germany Case",

    logoAlt:
      "Western Bridge",
  },

  ar: {
    eyebrow:
      "كيف يعمل النظام في ألمانيا",

    titleBefore:
      "المسار الصحيح يعتمد على",
    highlightedTitle:
      "الجهة المسؤولة.",

    imageAlt:
      "شخص يجهز وثائق ضمن بيئة مؤسسية ألمانية",

    imageLabel:
      "النظام الألماني",

    imageTitle:
      "دولة واحدة. لكن جهات ومؤسسات ومسارات متعددة.",

    imageText:
      "الاستعداد الصحيح يبدأ بتحديد النظام الذي ينطبق فعليًا على حالتك.",

    systemCode:
      "DE / خريطة النظام",

    systemIntro:
      "قبل تجهيز الطلبات أو التواصل مع الجهات، من المهم توضيح هذه النقاط الست. فهي تحدد الوثائق والمؤسسات والخطوات التالية ذات الصلة.",

    systemPoints: [
      {
        number: "01",
        title: "هدفك",
        text:
          "الدراسة والتدريب والقطاع الصحي والعمل المهني والأعمال والتعاون المؤسسي لا تدخل جميعها إلى ألمانيا من خلال النظام نفسه.",
      },
      {
        number: "02",
        title: "مؤهلك",
        text:
          "شهادتك الأكاديمية أو المهنية وترخيصك وخبرتك السابقة تؤثر على ما يجب مراجعته أو تجهيزه.",
      },
      {
        number: "03",
        title: "الجهة المسؤولة",
        text:
          "الاعتراف والترخيص والإقامة والتعليم والشؤون المهنية قد تتبع جهات ومؤسسات مختلفة.",
      },
      {
        number: "04",
        title: "الولاية الألمانية",
        text:
          "قد تختلف الجهة المختصة وبعض الإجراءات بحسب المهنة والمؤسسة والولاية الألمانية المعنية.",
      },
      {
        number: "05",
        title: "اللغة",
        text:
          "يعتمد المستوى اللغوي المطلوب على المسار. وقد تتطلب المهن الصحية والمهن المنظمة أيضًا لغة مهنية خاصة بالمجال.",
      },
      {
        number: "06",
        title: "الملف",
        text:
          "يجب تجهيز الشهادات وكشوف العلامات والترجمات والسجلات المهنية ووثائق الهوية والأدلة الداعمة وفق المسار الفعلي.",
      },
    ],

    ruleLabel:
      "مبدأ Western Bridge",

    ruleText:
      "نحن لا نبدأ بالأوراق. نبدأ أولًا بتحديد المسار والجهة المسؤولة والمتطلبات، ثم نبني الاستعداد حولها.",

    button:
      "راجع حالتي لألمانيا",

    logoAlt:
      "Western Bridge",
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
    imageText: string;
    systemCode: string;
    systemIntro: string;
    systemPoints: SystemPoint[];
    ruleLabel: string;
    ruleText: string;
    button: string;
    logoAlt: string;
  }
>;

export default function GermanySystemSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section
      id="germany-system"
      className={styles.section}
    >
      <Container>
        <div className={styles.layout}>
          <div className={styles.visualColumn}>
            <div className={styles.heading}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                {t.eyebrow}
              </div>

              <h2 className={styles.title}>
                {t.titleBefore}{" "}
                <span>
                  {t.highlightedTitle}
                </span>
              </h2>
            </div>

            <div className={styles.visual}>
              <Image
                src="/images/germany-system.jpg"
                alt={t.imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                className={styles.image}
              />

              <div className={styles.overlay} />

              <div className={styles.imageContent}>
                <span className={styles.imageLabel}>
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

          <div className={styles.system}>
            <div className={styles.systemIntro}>
              <span className={styles.systemCode}>
                {t.systemCode}
              </span>

              <p>
                {t.systemIntro}
              </p>
            </div>

            <div className={styles.points}>
              {t.systemPoints.map((point) => (
                <article
                  key={point.number}
                  className={styles.point}
                >
                  <div className={styles.pointNumber}>
                    {point.number}
                  </div>

                  <div className={styles.pointContent}>
                    <h3>
                      {point.title}
                    </h3>

                    <p>
                      {point.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.rule}>
              <div className={styles.ruleLogo}>
                <Image
                  src="/logo/western-bridge-mark.jpeg"
                  alt={t.logoAlt}
                  width={58}
                  height={58}
                  className={styles.ruleLogoImage}
                />
              </div>

              <div>
                <span className={styles.ruleLabel}>
                  {t.ruleLabel}
                </span>

                <p>
                  {t.ruleText}
                </p>
              </div>
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
        </div>
      </Container>
    </section>
  );
}