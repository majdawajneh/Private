"use client";

import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./MedicalPathwaySection.module.css";

type Locale = "de" | "en" | "ar";

type Stage = {
  number: string;
  phase: string;
  title: string;
  text: string;
  items: string[];
  featured?: boolean;
};

const content = {
  de: {
    eyebrow: "Medizinischer Weg nach Deutschland",

    titleBefore: "Wie sieht der Weg",
    highlightedTitle: "konkret aus?",

    description:
      "Für medizinische Fachkräfte gibt es keinen identischen Ablauf. Der genaue Weg hängt unter anderem vom Beruf, der Qualifikation, dem Bundesland, dem Ergebnis des Anerkennungsverfahrens und den Anforderungen der zuständigen Behörden ab.",

    notice:
      "Pflegefachkräfte, Ärzte, Apotheker und andere Gesundheitsberufe können unterschiedliche Anerkennungs- und Zulassungsverfahren durchlaufen.",

    stages: [
      {
        number: "01",
        phase: "Profilanalyse",
        title: "Verstehen Sie Ihren Ausgangspunkt",
        text:
          "Ihr Beruf, Abschluss, Ihre Berufszulassung, Erfahrung, Deutschkenntnisse und Ihre Zielposition beeinflussen, welcher Weg für Sie relevant sein kann.",
        items: [
          "Beruf & Spezialisierung",
          "Akademische Qualifikation",
          "Berufserfahrung",
          "Aktuelles Deutschniveau",
        ],
      },
      {
        number: "02",
        phase: "Sprache",
        title: "Sprachliche Voraussetzungen aufbauen",
        text:
          "Medizinische Wege in Deutschland erfordern häufig Deutschkenntnisse. Je nach Beruf können zusätzlich fachspezifische Kommunikationsanforderungen gelten.",
        items: [
          "Allgemeines Deutsch",
          "Berufliche Kommunikation",
          "Medizinische Terminologie",
          "Prüfungsvorbereitung, falls erforderlich",
        ],
      },
      {
        number: "03",
        phase: "Anerkennung",
        title: "Auf die Anerkennung der Qualifikation vorbereiten",
        text:
          "Bei regulierten Gesundheitsberufen muss eine im Ausland erworbene Qualifikation häufig von der zuständigen deutschen Behörde geprüft werden, bevor eine Berufsausübung möglich ist.",
        items: [
          "Zeugnisse & Leistungsnachweise",
          "Berufliche Nachweise",
          "Übersetzungen",
          "Anerkennungsunterlagen",
        ],
        featured: true,
      },
      {
        number: "04",
        phase: "Zulassung",
        title: "Zulassungsanforderungen verstehen",
        text:
          "Je nach Beruf und Ergebnis der Anerkennung können zusätzliche Prüfungen, Sprachbewertungen, Anpassungsmaßnahmen oder weitere Zulassungsschritte erforderlich sein.",
        items: [
          "Berufliche Anforderungen",
          "Mögliche Prüfungen",
          "Fachspezifische Sprache",
          "Behördliche Anforderungen",
        ],
      },
      {
        number: "05",
        phase: "Berufliche Vorbereitung",
        title: "Auf den deutschen Arbeitsalltag vorbereiten",
        text:
          "Berufliche Vorbereitung geht über Dokumente hinaus. Kommunikation, Arbeitskultur, Vorstellungsgespräche, Fachsprache und Abläufe im deutschen Gesundheitswesen können ebenfalls eine Rolle spielen.",
        items: [
          "Vorbereitung auf Vorstellungsgespräche",
          "Kommunikation am Arbeitsplatz",
          "Deutsches Gesundheitssystem",
          "Berufliches Profil",
        ],
      },
      {
        number: "06",
        phase: "Nächste Richtung",
        title: "Relevante Möglichkeiten erkunden",
        text:
          "Sobald der Vorbereitungsweg klarer ist, können passende Arbeitgeber, Institutionen, berufliche Kanäle und weitere Möglichkeiten entsprechend Ihrem Profil erkundet werden.",
        items: [
          "Möglichkeiten & Kanäle",
          "Institutionelle Kontakte",
          "Berufliche Netzwerke",
          "Planung der nächsten Schritte",
        ],
      },
    ],

    bottomLabel: "Wichtig",

    bottomTitle:
      "Ihr Beruf bestimmt den detaillierten Weg",

    bottomText:
      "Im nächsten Abschnitt werden die Wege für Pflegefachkräfte, Ärzte, Apotheker und weitere Gesundheitsberufe getrennt dargestellt, damit die wichtigsten Unterschiede klarer werden.",

    bottomButton: "Berufe vergleichen",
  },

  en: {
    eyebrow: "Germany Medical Pathway",

    titleBefore: "What Does the Path Actually",
    highlightedTitle: "Look Like?",

    description:
      "There is no single identical process for every healthcare professional. The exact route depends on the profession, qualification, federal state, recognition decision, and requirements of the responsible authorities.",

    notice:
      "Nurses, doctors, pharmacists, and other healthcare professionals can follow different recognition and licensing procedures.",

    stages: [
      {
        number: "01",
        phase: "Profile Assessment",
        title: "Understand Your Starting Point",
        text:
          "Your profession, degree, professional license, experience, German level, and target role all affect the pathway you may need.",
        items: [
          "Profession & specialization",
          "Academic qualification",
          "Professional experience",
          "Current German level",
        ],
      },
      {
        number: "02",
        phase: "Language",
        title: "Build German Language Readiness",
        text:
          "Healthcare pathways in Germany commonly require German language preparation, with additional profession-specific communication requirements depending on the role.",
        items: [
          "General German",
          "Professional communication",
          "Medical terminology",
          "Exam preparation where applicable",
        ],
      },
      {
        number: "03",
        phase: "Recognition",
        title: "Prepare for Qualification Recognition",
        text:
          "Regulated healthcare professions may require your foreign qualification to be reviewed by the relevant German authority before professional practice is permitted.",
        items: [
          "Certificates & transcripts",
          "Professional records",
          "Translations",
          "Recognition documentation",
        ],
        featured: true,
      },
      {
        number: "04",
        phase: "Licensing",
        title: "Understand Licensing Requirements",
        text:
          "Depending on the profession and recognition result, additional examinations, language assessments, adaptation measures, or licensing steps may apply.",
        items: [
          "Professional requirements",
          "Possible examinations",
          "Sector-specific language",
          "Authority requirements",
        ],
      },
      {
        number: "05",
        phase: "Professional Readiness",
        title: "Prepare for the German Workplace",
        text:
          "Professional readiness goes beyond documents. Communication, workplace expectations, interviews, terminology, and healthcare culture can all matter.",
        items: [
          "Interview readiness",
          "Workplace communication",
          "German healthcare context",
          "Professional profile",
        ],
      },
      {
        number: "06",
        phase: "Next Direction",
        title: "Explore Relevant Opportunities",
        text:
          "Once the preparation path is clearer, you can explore relevant employers, institutions, professional channels, and other opportunities appropriate to your profile.",
        items: [
          "Opportunity channels",
          "Institutional connections",
          "Professional networks",
          "Next-step planning",
        ],
      },
    ],

    bottomLabel: "Important",

    bottomTitle:
      "Your Profession Determines the Detailed Route",

    bottomText:
      "The next section separates the pathways for nurses, doctors, pharmacists, and other healthcare professionals so you can understand the major differences.",

    bottomButton: "Compare Professions",
  },

  ar: {
    eyebrow: "المسار الطبي نحو ألمانيا",

    titleBefore: "كيف يبدو المسار",
    highlightedTitle: "فعليًا؟",

    description:
      "لا يوجد مسار واحد متطابق لجميع العاملين في القطاع الطبي. فالطريق الدقيق يعتمد على المهنة والمؤهل والولاية الألمانية وقرار الاعتراف ومتطلبات الجهات الرسمية المسؤولة.",

    notice:
      "قد تختلف إجراءات الاعتراف والترخيص بين الممرضين والأطباء والصيادلة وغيرهم من المتخصصين في القطاع الطبي.",

    stages: [
      {
        number: "01",
        phase: "تقييم الملف",
        title: "افهم نقطة البداية",
        text:
          "مهنتك وشهادتك وترخيصك المهني وخبرتك ومستواك في اللغة الألمانية والوظيفة التي تستهدفها جميعها تؤثر على المسار الذي قد تحتاجه.",
        items: [
          "المهنة والتخصص",
          "المؤهل الأكاديمي",
          "الخبرة المهنية",
          "المستوى الحالي في الألمانية",
        ],
      },
      {
        number: "02",
        phase: "اللغة",
        title: "ابنِ جاهزيتك اللغوية",
        text:
          "تتطلب المسارات الطبية في ألمانيا غالبًا الاستعداد باللغة الألمانية، وقد توجد متطلبات إضافية للتواصل المهني بحسب المهنة.",
        items: [
          "الألمانية العامة",
          "التواصل المهني",
          "المصطلحات الطبية",
          "الاستعداد للامتحانات عند الحاجة",
        ],
      },
      {
        number: "03",
        phase: "الاعتراف",
        title: "استعد للاعتراف بالمؤهلات",
        text:
          "قد تتطلب المهن الطبية المنظمة مراجعة المؤهل الأجنبي من قبل الجهة الألمانية المختصة قبل السماح بمزاولة المهنة.",
        items: [
          "الشهادات وكشوف العلامات",
          "السجلات المهنية",
          "الترجمات",
          "وثائق الاعتراف",
        ],
        featured: true,
      },
      {
        number: "04",
        phase: "الترخيص",
        title: "افهم متطلبات الترخيص",
        text:
          "بحسب المهنة ونتيجة الاعتراف، قد تكون هناك امتحانات إضافية أو تقييمات لغوية أو إجراءات تأهيلية أو خطوات ترخيص أخرى.",
        items: [
          "المتطلبات المهنية",
          "الامتحانات المحتملة",
          "اللغة الخاصة بالمجال",
          "متطلبات الجهات الرسمية",
        ],
      },
      {
        number: "05",
        phase: "الجاهزية المهنية",
        title: "استعد لبيئة العمل الألمانية",
        text:
          "الجاهزية المهنية لا تقتصر على الوثائق. فالتواصل ومتطلبات بيئة العمل والمقابلات والمصطلحات وثقافة القطاع الصحي كلها عوامل مهمة.",
        items: [
          "الاستعداد للمقابلات",
          "التواصل في بيئة العمل",
          "سياق القطاع الصحي الألماني",
          "الملف المهني",
        ],
      },
      {
        number: "06",
        phase: "الاتجاه التالي",
        title: "استكشف الفرص ذات الصلة",
        text:
          "بعد أن يصبح مسار الاستعداد أوضح، يمكنك استكشاف أصحاب العمل والمؤسسات والقنوات المهنية والفرص المناسبة لملفك.",
        items: [
          "قنوات الفرص",
          "العلاقات المؤسسية",
          "الشبكات المهنية",
          "تخطيط الخطوة التالية",
        ],
      },
    ],

    bottomLabel: "مهم",

    bottomTitle:
      "مهنتك هي التي تحدد تفاصيل المسار",

    bottomText:
      "يفصل القسم التالي بين مسارات الممرضين والأطباء والصيادلة وغيرهم من المتخصصين في القطاع الطبي حتى تصبح الاختلافات الأساسية أكثر وضوحًا.",

    bottomButton: "قارن بين المهن",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleBefore: string;
    highlightedTitle: string;
    description: string;
    notice: string;
    stages: Stage[];
    bottomLabel: string;
    bottomTitle: string;
    bottomText: string;
    bottomButton: string;
  }
>;

export default function MedicalPathwaySection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section
      id="medical-pathway"
      className={styles.section}
    >
      <Container>
        <div className={styles.header}>
          <div>
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

          <div className={styles.headerRight}>
            <p className={styles.description}>
              {t.description}
            </p>

            <div className={styles.notice}>
              <span className={styles.noticeMark}>
                !
              </span>

              <p>{t.notice}</p>
            </div>
          </div>
        </div>

        <div className={styles.pathway}>
          {t.stages.map((stage) => (
            <article
              key={stage.number}
              className={`${styles.stage} ${
                stage.featured
                  ? styles.featured
                  : ""
              }`}
            >
              <div className={styles.stageRail}>
                <span className={styles.stageNode}>
                  {stage.number}
                </span>

                <span className={styles.railLine} />
              </div>

              <div className={styles.stageMain}>
                <span className={styles.phase}>
                  {stage.phase}
                </span>

                <h3 className={styles.stageTitle}>
                  {stage.title}
                </h3>

                <p className={styles.stageText}>
                  {stage.text}
                </p>
              </div>

              <div className={styles.stageItems}>
                {stage.items.map((item) => (
                  <div
                    key={item}
                    className={styles.item}
                  >
                    <span className={styles.itemMark}>
                      ✓
                    </span>

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomContent}>
            <span className={styles.bottomLabel}>
              {t.bottomLabel}
            </span>

            <h3 className={styles.bottomTitle}>
              {t.bottomTitle}
            </h3>

            <p className={styles.bottomText}>
              {t.bottomText}
            </p>
          </div>

          <Link
            href="#medical-professions"
            className={styles.button}
          >
            {t.bottomButton}

            <span aria-hidden="true">↓</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}