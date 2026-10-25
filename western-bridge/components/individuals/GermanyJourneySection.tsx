"use client";

import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./GermanyJourneySection.module.css";

type Locale = "de" | "en" | "ar";

type JourneyStep = {
  number: string;
  title: string;
  text: string;
  tags: string[];
  highlight?: boolean;
};

const content = {
  de: {
    backgroundWord: "DEUTSCHLAND",

    eyebrow: "Ihr Weg nach Deutschland",

    titleLineOne: "Von Ihrem heutigen Stand",
    titleLineTwoBefore: "zu",
    highlightedTitle: "Ihrem nächsten Ziel",

    description:
      "Für Deutschland gibt es keinen einzigen Weg, der für alle Menschen gleichermaßen gilt. Beruf, Qualifikationen, Sprachkenntnisse und persönliche Ziele beeinflussen, welche Vorbereitung für Sie relevant sein kann. Western Bridge hilft Ihnen, diesen Weg Schritt für Schritt besser zu verstehen.",

    germanyLabel: "Primäres Zielland",
    germanyWord: "Deutschland",

    germanySub:
      "Beruf • Ausbildung • Qualifizierung • Wirtschaft",

    stepLabel: "SCHRITT",

    steps: [
      {
        number: "01",
        title: "Ihre Richtung definieren",
        text:
          "Wir beginnen damit, Ihren Beruf, Ihre Erfahrung, Ihre aktuellen Qualifikationen, Ihr Sprachniveau und die Art des Weges zu verstehen, den Sie in Deutschland erkunden möchten.",
        tags: [
          "Berufliches Ziel",
          "Beruflicher Hintergrund",
          "Deutschland-Fokus",
        ],
      },
      {
        number: "02",
        title: "Sprache & Qualifikation",
        text:
          "Je nach Beruf kann Ihre Vorbereitung die Entwicklung der deutschen Sprache, branchenspezifische Sprache, berufliche Weiterbildung oder Qualifikationsvorbereitung umfassen.",
        tags: [
          "Deutsche Sprache",
          "Medizinisches Deutsch",
          "Berufliche Weiterbildung",
        ],
      },
      {
        number: "03",
        title: "Dokumente & Anerkennung",
        text:
          "Bei regulierten Berufen und bestimmten Wegen kann der Prozess die Vorbereitung von Dokumenten, Übersetzungen, Beglaubigungen sowie das Verständnis beruflicher Anerkennungsanforderungen umfassen.",
        tags: [
          "Anerkennungsorientierung",
          "Übersetzung",
          "Dokumentenvorbereitung",
        ],
        highlight: true,
      },
      {
        number: "04",
        title: "Berufliche Vorbereitung",
        text:
          "Wir helfen Ihnen zu verstehen, welche Fähigkeiten, Prüfungen, Zulassungsvorbereitungen, Kommunikationsstandards und beruflichen Erwartungen für Ihren Zielweg relevant sein können.",
        tags: [
          "Prüfungsvorbereitung",
          "Berufliche Vorbereitung",
          "Zulassungsorientierung",
        ],
      },
      {
        number: "05",
        title: "Relevante Möglichkeiten erkunden",
        text:
          "Sobald Ihre Vorbereitung klarer ist, kann Western Bridge Ihnen helfen, relevante Kanäle, Institutionen, berufliche Netzwerke und Möglichkeiten zu identifizieren, die Sie eigenständig weiter prüfen können.",
        tags: [
          "Orientierung zu Möglichkeiten",
          "Berufliche Netzwerke",
          "Internationale Wege",
        ],
      },
    ],

    destinationLabel: "Ihr nächster Schritt",

    destinationTitle:
      "Gestalten Sie einen klareren Weg nach Deutschland",

    destinationText:
      "Jeder Fall ist unterschiedlich. Western Bridge kann Ihnen helfen zu verstehen, welche Vorbereitungsbereiche relevant sein können, bevor Sie die nächsten Schritte einleiten.",

    destinationButton: "Deutschland entdecken",
  },

  en: {
    backgroundWord: "GERMANY",

    eyebrow: "Your Germany Path",

    titleLineOne: "From Where You Are",
    titleLineTwoBefore: "to",
    highlightedTitle: "Where You Want to Be",

    description:
      "Germany does not have one universal pathway for every person. Your profession, qualifications, language level, and personal goals can all affect the preparation you may need. Western Bridge helps you understand that journey step by step.",

    germanyLabel: "Primary Destination",
    germanyWord: "Germany",

    germanySub:
      "Professional • Training • Qualification • Business",

    stepLabel: "STEP",

    steps: [
      {
        number: "01",
        title: "Define Your Direction",
        text:
          "We begin by understanding your profession, experience, current qualifications, language level, and the type of pathway you want to explore in Germany.",
        tags: [
          "Career Goal",
          "Professional Background",
          "Germany Focus",
        ],
      },
      {
        number: "02",
        title: "Language & Qualification",
        text:
          "Depending on your field, your preparation may include German language development, sector-specific language, professional training, or qualification readiness.",
        tags: [
          "German Language",
          "Medical German",
          "Professional Training",
        ],
      },
      {
        number: "03",
        title: "Documents & Recognition",
        text:
          "For regulated professions and specific pathways, the process may involve preparing documents, translations, authentication, and understanding professional recognition requirements.",
        tags: [
          "Recognition Guidance",
          "Translation",
          "Document Preparation",
        ],
        highlight: true,
      },
      {
        number: "04",
        title: "Professional Readiness",
        text:
          "We help you understand the skills, examinations, licensing preparation, communication standards, and professional expectations that may apply to your target pathway.",
        tags: [
          "Exam Preparation",
          "Professional Readiness",
          "Licensing Guidance",
        ],
      },
      {
        number: "05",
        title: "Explore Relevant Opportunities",
        text:
          "Once your preparation is clearer, Western Bridge can help you identify relevant channels, institutions, professional ecosystems, and opportunities to explore independently.",
        tags: [
          "Opportunity Guidance",
          "Professional Networks",
          "International Pathways",
        ],
      },
    ],

    destinationLabel: "Your Next Step",

    destinationTitle:
      "Build a Clearer Germany Pathway",

    destinationText:
      "Every case is different. Western Bridge can help you understand which preparation areas may be relevant before you move forward.",

    destinationButton: "Explore Germany",
  },

  ar: {
    backgroundWord: "ألمانيا",

    eyebrow: "مسارك نحو ألمانيا",

    titleLineOne: "من وضعك الحالي",
    titleLineTwoBefore: "إلى",
    highlightedTitle: "المكان الذي تريد الوصول إليه",

    description:
      "لا يوجد مسار واحد في ألمانيا يناسب الجميع. فمهنتك ومؤهلاتك ومستواك اللغوي وأهدافك الشخصية جميعها تؤثر في نوع الاستعداد الذي قد تحتاجه. تساعدك Western Bridge على فهم هذا الطريق خطوة بخطوة.",

    germanyLabel: "الوجهة الرئيسية",
    germanyWord: "ألمانيا",

    germanySub:
      "العمل • التدريب • التأهيل • الأعمال",

    stepLabel: "الخطوة",

    steps: [
      {
        number: "01",
        title: "حدد اتجاهك",
        text:
          "نبدأ بفهم مهنتك وخبرتك ومؤهلاتك الحالية ومستواك اللغوي ونوع المسار الذي ترغب في استكشافه في ألمانيا.",
        tags: [
          "الهدف المهني",
          "الخلفية المهنية",
          "التركيز على ألمانيا",
        ],
      },
      {
        number: "02",
        title: "اللغة والتأهيل",
        text:
          "بحسب مجال عملك، قد يشمل الاستعداد تطوير اللغة الألمانية، واللغة الخاصة بالمجال، والتدريب المهني، أو رفع الجاهزية التأهيلية.",
        tags: [
          "اللغة الألمانية",
          "الألمانية الطبية",
          "التدريب المهني",
        ],
      },
      {
        number: "03",
        title: "الوثائق والاعتراف",
        text:
          "في المهن المنظمة وبعض المسارات، قد تشمل العملية تجهيز الوثائق وترجمتها وتصديقها وفهم متطلبات الاعتراف المهني.",
        tags: [
          "التوجيه في الاعتراف",
          "الترجمة",
          "تجهيز الوثائق",
        ],
        highlight: true,
      },
      {
        number: "04",
        title: "الجاهزية المهنية",
        text:
          "نساعدك على فهم المهارات والامتحانات ومتطلبات الاستعداد للترخيص ومعايير التواصل والتوقعات المهنية التي قد تنطبق على مسارك المستهدف.",
        tags: [
          "الاستعداد للامتحانات",
          "الجاهزية المهنية",
          "التوجيه في الترخيص",
        ],
      },
      {
        number: "05",
        title: "استكشاف الفرص ذات الصلة",
        text:
          "بعد أن تصبح مرحلة الاستعداد أوضح، تساعدك Western Bridge على تحديد القنوات والمؤسسات والشبكات المهنية والفرص التي يمكنك متابعتها بشكل مستقل.",
        tags: [
          "التوجيه نحو الفرص",
          "الشبكات المهنية",
          "المسارات الدولية",
        ],
      },
    ],

    destinationLabel: "خطوتك التالية",

    destinationTitle:
      "ابنِ مسارًا أوضح نحو ألمانيا",

    destinationText:
      "كل حالة مختلفة. تساعدك Western Bridge على فهم مجالات الاستعداد التي قد تكون مهمة لك قبل الانتقال إلى الخطوات التالية.",

    destinationButton: "استكشف ألمانيا",
  },
} satisfies Record<
  Locale,
  {
    backgroundWord: string;
    eyebrow: string;
    titleLineOne: string;
    titleLineTwoBefore: string;
    highlightedTitle: string;
    description: string;
    germanyLabel: string;
    germanyWord: string;
    germanySub: string;
    stepLabel: string;
    steps: JourneyStep[];
    destinationLabel: string;
    destinationTitle: string;
    destinationText: string;
    destinationButton: string;
  }
>;

export default function GermanyJourneySection() {
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
        <div className={styles.wrapper}>
          <div className={styles.intro}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowNumber}>
                02
              </span>

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

            <p className={styles.description}>
              {t.description}
            </p>

            <div className={styles.germanyBlock}>
              <span className={styles.germanyLabel}>
                {t.germanyLabel}
              </span>

              <span className={styles.germanyWord}>
                {t.germanyWord}
              </span>

              <span className={styles.germanySub}>
                {t.germanySub}
              </span>

              <span
                className={styles.germanyAccent}
                aria-hidden="true"
              />
            </div>
          </div>

          <div className={styles.journey}>
            {t.steps.map((step) => (
              <article
                key={step.number}
                className={`${styles.step} ${
                  step.highlight
                    ? styles.highlightStep
                    : ""
                }`}
              >
                <span className={styles.node}>
                  <span className={styles.nodeInner} />
                </span>

                <div className={styles.stepTop}>
                  <span className={styles.stepNumber}>
                    {t.stepLabel} {step.number}
                  </span>

                  <h3 className={styles.stepTitle}>
                    {step.title}
                  </h3>
                </div>

                <p className={styles.stepText}>
                  {step.text}
                </p>

                <div className={styles.tags}>
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className={styles.tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}

            <div className={styles.destination}>
              <div className={styles.destinationContent}>
                <span className={styles.destinationLabel}>
                  {t.destinationLabel}
                </span>

                <h3 className={styles.destinationTitle}>
                  {t.destinationTitle}
                </h3>

                <p className={styles.destinationText}>
                  {t.destinationText}
                </p>
              </div>

              <Link
                href="/germany"
                className={styles.destinationButton}
              >
                {t.destinationButton}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}