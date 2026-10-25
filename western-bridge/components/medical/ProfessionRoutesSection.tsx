"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./ProfessionRoutesSection.module.css";

type Locale = "de" | "en" | "ar";

type ProfessionRoute = {
  code: string;
  profession: string;
  audience: string;
  summary: string;
  focus: string[];
  note: string;
};

const content = {
  de: {
    eyebrow: "Gesundheitsberufe",

    titleLineOne: "Ein Gesundheitssektor.",
    highlightedTitle: "Unterschiedliche berufliche Wege.",

    headerCopy:
      "Pflegefachkräfte, Ärzte, Apotheker und andere Gesundheitsberufe sollten nicht so behandelt werden, als würden sie denselben Prozess durchlaufen. Western Bridge beginnt deshalb mit der genauen Einordnung des Berufs und baut darauf die passende Vorbereitung auf.",

    columns: {
      profession: "Beruf",
      overview: "Überblick über den Weg",
      focus: "Schwerpunkte der Vorbereitung",
    },

    professions: [
      {
        code: "01",
        profession: "Pflege",
        audience: "Pflegefachkräfte",
        summary:
          "Der Weg für Pflegefachkräfte konzentriert sich häufig auf die Anerkennung der Qualifikation, deutsche Sprachkenntnisse, berufliche Unterlagen und die Anforderungen der zuständigen Behörde.",
        focus: [
          "Anerkennung der Qualifikation",
          "Vorbereitung auf Deutsch",
          "Berufliche Dokumente",
          "Mögliche Ausgleichsmaßnahmen",
        ],
        note:
          "Der genaue Anerkennungsweg kann je nach Qualifikation und zuständiger Behörde unterschiedlich ausfallen.",
      },
      {
        code: "02",
        profession: "Medizin",
        audience: "Ärzte",
        summary:
          "Für Ärzte steht häufig die berufliche Zulassung im Mittelpunkt. Der Weg kann die Bewertung der Qualifikation, Sprachanforderungen, medizinische Kommunikation und je nach Fall zusätzliche Prüfungen umfassen.",
        focus: [
          "Prüfung der medizinischen Qualifikation",
          "Berufliche Zulassung",
          "Medizinisches Deutsch",
          "Mögliche Fachprüfungen",
        ],
        note:
          "Zulassungsanforderungen und Prüfungsergebnisse hängen von der Qualifikation des Antragstellers und der zuständigen deutschen Behörde ab.",
      },
      {
        code: "03",
        profession: "Pharmazie",
        audience: "Apotheker",
        summary:
          "Bei Apothekern kann der Weg die Anerkennung der ausländischen Qualifikation, fachsprachliche Vorbereitung, Dokumentation und Anforderungen an die Berufszulassung verbinden.",
        focus: [
          "Bewertung der Qualifikation",
          "Fachsprache",
          "Zulassungsanforderungen",
          "Anerkennungsunterlagen",
        ],
        note:
          "Je nach Anerkennungsentscheidung und zuständiger Behörde können zusätzliche Anforderungen entstehen.",
      },
      {
        code: "04",
        profession: "Weitere Gesundheitsberufe",
        audience: "Gesundheitsfachkräfte",
        summary:
          "Nicht alle Gesundheitsberufe folgen demselben Verfahren. Zunächst muss geklärt werden, ob der konkrete Beruf reguliert ist und welche Behörde oder welcher Anerkennungsweg zuständig ist.",
        focus: [
          "Einordnung des Berufs",
          "Anerkennungsweg",
          "Sprachanforderungen",
          "Berufliche Vorbereitung",
        ],
        note:
          "Der richtige Weg hängt stark vom konkreten Beruf, der Qualifikation und dem vorgesehenen Tätigkeitsbereich ab.",
      },
    ],

    caseLabel: "Mit dem Beruf beginnen",

    caseTitle:
      "Bevor Sie einen Sprachkurs wählen oder Dokumente vorbereiten, sollte zuerst der richtige berufliche Weg bestimmt werden.",

    caseText:
      "Beruf, Ausbildungsland, Erfahrung, Sprachniveau und das geplante Ziel innerhalb Deutschlands können beeinflussen, welche Schritte als Nächstes sinnvoll sind.",

    caseButton: "Meinen Beruf prüfen",

    legal:
      "Entscheidungen über Anerkennung und Berufszulassung werden von den zuständigen Behörden getroffen. Western Bridge unterstützt bei Vorbereitung, Orientierung, Training, Dokumentenbereitschaft und der Planung des weiteren Weges.",

    logoAlt: "Western Bridge",
  },

  en: {
    eyebrow: "Healthcare Professions",

    titleLineOne: "One Healthcare Sector.",
    highlightedTitle: "Different Professional Routes.",

    headerCopy:
      "A nurse, doctor, pharmacist, and allied health professional should not be treated as if they have the same process. Western Bridge starts by identifying the profession first, then the preparation route around it.",

    columns: {
      profession: "Profession",
      overview: "Route Overview",
      focus: "Preparation Focus",
    },

    professions: [
      {
        code: "01",
        profession: "Nursing",
        audience: "Nurses",
        summary:
          "The nursing route usually centers on qualification recognition, German language readiness, professional documentation, and the requirements set by the responsible authority.",
        focus: [
          "Qualification recognition",
          "German language preparation",
          "Professional documents",
          "Possible compensatory measures",
        ],
        note:
          "The exact recognition route can differ depending on your qualification and the competent authority handling your case.",
      },
      {
        code: "02",
        profession: "Medicine",
        audience: "Doctors",
        summary:
          "Doctors normally face a licensing-focused route that can involve qualification assessment, German language requirements, professional communication, and additional examinations depending on the case.",
        focus: [
          "Medical qualification review",
          "Professional licensing",
          "Medical German",
          "Possible professional examinations",
        ],
        note:
          "Licensing requirements and assessment outcomes depend on the applicant’s qualification and the responsible German authority.",
      },
      {
        code: "03",
        profession: "Pharmacy",
        audience: "Pharmacists",
        summary:
          "For pharmacists, the pathway can combine recognition of the foreign qualification, professional language preparation, documentation, and licensing requirements.",
        focus: [
          "Qualification assessment",
          "Professional language",
          "Licensing requirements",
          "Recognition documentation",
        ],
        note:
          "Additional requirements may apply depending on the recognition decision and the authority responsible for the application.",
      },
      {
        code: "04",
        profession: "Allied Health",
        audience: "Healthcare Professionals",
        summary:
          "Allied health professions do not all follow the same process. The first step is identifying whether the specific occupation is regulated and which authority or recognition route applies.",
        focus: [
          "Occupation identification",
          "Recognition route",
          "Language requirements",
          "Professional preparation",
        ],
        note:
          "The correct pathway depends heavily on the exact profession, qualification, and intended scope of work.",
      },
    ],

    caseLabel: "Start With the Profession",

    caseTitle:
      "Before choosing a language course or preparing documents, identify the correct professional route.",

    caseText:
      "The profession, country of qualification, experience, language level, and intended destination in Germany can all affect what should happen next.",

    caseButton: "Review My Profession",

    legal:
      "Recognition and licensing decisions are made by the competent authorities. Western Bridge supports preparation, guidance, training, documentation readiness, and pathway planning.",

    logoAlt: "Western Bridge",
  },

  ar: {
    eyebrow: "المهن الصحية",

    titleLineOne: "قطاع صحي واحد.",
    highlightedTitle: "لكن مسارات مهنية مختلفة.",

    headerCopy:
      "لا ينبغي التعامل مع الممرض والطبيب والصيدلي والمتخصص في المهن الصحية المساندة وكأنهم يمرون بالإجراءات نفسها. تبدأ Western Bridge أولًا بتحديد المهنة بدقة، ثم تبني حولها مسار الاستعداد المناسب.",

    columns: {
      profession: "المهنة",
      overview: "نظرة عامة على المسار",
      focus: "محاور الاستعداد",
    },

    professions: [
      {
        code: "01",
        profession: "التمريض",
        audience: "الممرضون",
        summary:
          "يركز مسار التمريض عادةً على الاعتراف بالمؤهل، والاستعداد باللغة الألمانية، والوثائق المهنية، ومتطلبات الجهة الرسمية المختصة.",
        focus: [
          "الاعتراف بالمؤهلات",
          "الاستعداد باللغة الألمانية",
          "الوثائق المهنية",
          "إجراءات تعويضية محتملة",
        ],
        note:
          "قد يختلف مسار الاعتراف الدقيق بحسب مؤهلك والجهة المختصة التي تتولى دراسة حالتك.",
      },
      {
        code: "02",
        profession: "الطب",
        audience: "الأطباء",
        summary:
          "يميل مسار الأطباء إلى التركيز على الترخيص المهني، وقد يشمل تقييم المؤهل ومتطلبات اللغة والتواصل الطبي وامتحانات إضافية بحسب الحالة.",
        focus: [
          "مراجعة المؤهل الطبي",
          "الترخيص المهني",
          "الألمانية الطبية",
          "امتحانات مهنية محتملة",
        ],
        note:
          "تعتمد متطلبات الترخيص ونتائج التقييم على مؤهل المتقدم والجهة الألمانية المختصة.",
      },
      {
        code: "03",
        profession: "الصيدلة",
        audience: "الصيادلة",
        summary:
          "قد يجمع مسار الصيادلة بين الاعتراف بالمؤهل الأجنبي والاستعداد للغة المهنية والوثائق ومتطلبات الترخيص.",
        focus: [
          "تقييم المؤهلات",
          "اللغة المهنية",
          "متطلبات الترخيص",
          "وثائق الاعتراف",
        ],
        note:
          "قد تطبق متطلبات إضافية بحسب قرار الاعتراف والجهة المسؤولة عن الطلب.",
      },
      {
        code: "04",
        profession: "المهن الصحية المساندة",
        audience: "المتخصصون في القطاع الصحي",
        summary:
          "لا تتبع جميع المهن الصحية المساندة الإجراء نفسه. الخطوة الأولى هي تحديد ما إذا كانت المهنة المحددة منظمة وأي جهة أو مسار اعتراف ينطبق عليها.",
        focus: [
          "تحديد المهنة",
          "مسار الاعتراف",
          "متطلبات اللغة",
          "الاستعداد المهني",
        ],
        note:
          "يعتمد المسار الصحيح بشكل كبير على المهنة الدقيقة والمؤهل ونطاق العمل المقصود.",
      },
    ],

    caseLabel: "ابدأ من تحديد المهنة",

    caseTitle:
      "قبل اختيار دورة لغة أو تجهيز الوثائق، حدد أولًا المسار المهني الصحيح.",

    caseText:
      "المهنة وبلد الحصول على المؤهل والخبرة والمستوى اللغوي والوجهة المقصودة داخل ألمانيا كلها عوامل قد تؤثر على الخطوة التالية.",

    caseButton: "راجع مساري المهني",

    legal:
      "تتخذ الجهات المختصة قرارات الاعتراف والترخيص. وتقدم Western Bridge الدعم في الاستعداد والتوجيه والتدريب وتجهيز الوثائق وتخطيط المسار.",

    logoAlt: "Western Bridge",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleLineOne: string;
    highlightedTitle: string;
    headerCopy: string;
    columns: {
      profession: string;
      overview: string;
      focus: string;
    };
    professions: ProfessionRoute[];
    caseLabel: string;
    caseTitle: string;
    caseText: string;
    caseButton: string;
    legal: string;
    logoAlt: string;
  }
>;

export default function ProfessionRoutesSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section
      id="medical-professions"
      className={styles.section}
    >
      <Container>
        <div className={styles.header}>
          <div className={styles.headerMain}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {t.eyebrow}
            </div>

            <h2 className={styles.title}>
              {t.titleLineOne}
              <br />

              <span className={styles.goldText}>
                {t.highlightedTitle}
              </span>
            </h2>
          </div>

          <div className={styles.headerCopy}>
            <p>{t.headerCopy}</p>
          </div>
        </div>

        <div className={styles.directory}>
          <div className={styles.directoryHeader}>
            <span>{t.columns.profession}</span>
            <span>{t.columns.overview}</span>
            <span>{t.columns.focus}</span>
          </div>

          {t.professions.map((item) => (
            <article
              key={item.code}
              className={styles.route}
            >
              <div className={styles.profession}>
                <span className={styles.code}>
                  {item.code}
                </span>

                <span className={styles.audience}>
                  {item.audience}
                </span>

                <h3 className={styles.professionName}>
                  {item.profession}
                </h3>
              </div>

              <div className={styles.overview}>
                <p className={styles.summary}>
                  {item.summary}
                </p>

                <p className={styles.note}>
                  {item.note}
                </p>
              </div>

              <div className={styles.focus}>
                {item.focus.map((point) => (
                  <div
                    key={point}
                    className={styles.focusItem}
                  >
                    <span
                      className={styles.focusMark}
                      aria-hidden="true"
                    />

                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.caseBlock}>
          <div className={styles.caseLogo}>
            <Image
              src="/logo/western-bridge-mark.jpeg"
              alt={t.logoAlt}
              width={70}
              height={70}
              className={styles.caseLogoImage}
            />
          </div>

          <div className={styles.caseContent}>
            <span className={styles.caseLabel}>
              {t.caseLabel}
            </span>

            <h3 className={styles.caseTitle}>
              {t.caseTitle}
            </h3>

            <p className={styles.caseText}>
              {t.caseText}
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.caseButton}
          >
            {t.caseButton}

            <span aria-hidden="true">
              {locale === "ar" ? "←" : "→"}
            </span>
          </Link>
        </div>

        <p className={styles.legal}>
          {t.legal}
        </p>
      </Container>
    </section>
  );
}