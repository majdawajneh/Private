"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./MedicalReadinessSection.module.css";

type Locale = "de" | "en" | "ar";

type Workstream = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  support: string[];
  authority: string;
};

const content = {
  de: {
    eyebrow: "Medizinische Vorbereitung",

    titleLineOne: "Sprache. Anerkennung.",
    highlightedTitle: "Zulassung.",

    intro:
      "Diese drei Bereiche entscheiden häufig darüber, ob eine medizinische Fachkraft tatsächlich für die nächsten Schritte vorbereitet ist. Western Bridge hilft dabei, die Vorbereitung strukturiert zu organisieren, ohne Beratungsleistungen mit den Entscheidungen deutscher Behörden zu vermischen.",

    imageAlt:
      "Medizinische Fachkraft bei der Vorbereitung von Sprach- und Qualifikationsunterlagen",

    visualLabel: "Vor dem Antrag",

    visualTitle:
      "Bereiten Sie zuerst Ihre Unterlagen und Voraussetzungen vor.",

    visualText:
      "Fehlende Sprachkenntnisse, unvollständige Dokumente oder ein falsch verstandener Anerkennungsweg können den gesamten Prozess verzögern.",

    supportLabel: "Western Bridge unterstützt bei",

    authorityLabel: "Formaler Prozess / endgültige Entscheidung",

    workstreams: [
      {
        number: "01",
        title: "Medizinisches Deutsch",
        subtitle: "Sprache & Kommunikation",
        description:
          "Bereiten Sie die deutsche Sprache und die berufliche Kommunikation vor, die im Gesundheitswesen, bei Vorstellungsgesprächen, Prüfungen und im klinischen Alltag benötigt werden können.",
        support: [
          "Planung des allgemeinen Deutschlernens",
          "Medizinische Terminologie",
          "Patientenkommunikation",
          "Vorbereitung auf Fachsprache",
        ],
        authority:
          "Sprach- und Prüfungsanbieter",
      },
      {
        number: "02",
        title: "Anerkennungsunterlagen",
        subtitle: "Dokumente & Qualifikation",
        description:
          "Bauen Sie eine strukturierte Anerkennungsakte rund um Ihre akademische Qualifikation, berufliche Laufbahn, erforderliche Übersetzungen und unterstützende Unterlagen auf.",
        support: [
          "Dokumenten-Checkliste",
          "Vorbereitung von Übersetzungen",
          "Prüfung der Qualifikationsunterlagen",
          "Orientierung im Anerkennungsverfahren",
        ],
        authority:
          "Zuständige Anerkennungsbehörde",
      },
      {
        number: "03",
        title: "Zulassungsbereitschaft",
        subtitle: "Berufliche Zulassung",
        description:
          "Verstehen Sie, welche Schritte nach der Anerkennung noch erforderlich sein können, darunter berufsspezifische Sprachanforderungen, Prüfungen, Anpassungsmaßnahmen oder Zulassungsverfahren.",
        support: [
          "Einordnung der Anforderungen",
          "Planung der Prüfungsvorbereitung",
          "Berufliche Vorbereitung",
          "Koordination der nächsten Schritte",
        ],
        authority:
          "Zuständige Zulassungsbehörde",
      },
    ],

    finalLabel: "Prüfung Ihres medizinischen Falls",

    finalTitle:
      "Beginnen Sie mit Ihrem Beruf und Ihrer aktuellen Situation.",

    finalText:
      "Teilen Sie uns Ihren Gesundheitsberuf, das Land Ihrer Qualifikation, Ihre Berufserfahrung, Ihr Deutschniveau und den aktuellen Stand Ihrer Dokumente mit. Daraus lässt sich der Vorbereitungspfad deutlich klarer ableiten.",

    caseFields: [
      "Beruf",
      "Qualifikation",
      "Erfahrung",
      "Deutschniveau",
      "Dokumente",
      "Zielweg",
    ],

    cta: "Medizinischen Weg besprechen",

    legal:
      "Western Bridge bietet Beratung, Vorbereitung, Training, Dokumentenunterstützung und Orientierung bei der Planung des weiteren Weges. Entscheidungen über Anerkennung, Berufszulassung, Prüfungen, Visa und Beschäftigung liegen bei den zuständigen Behörden, Arbeitgebern und Organisationen.",
  },

  en: {
    eyebrow: "Medical Readiness Desk",

    titleLineOne: "Language. Recognition.",
    highlightedTitle: "Licensing.",

    intro:
      "These three areas often determine whether a healthcare professional is genuinely ready to move forward. Western Bridge helps organize the preparation around them without confusing advisory support with decisions made by German authorities.",

    imageAlt:
      "Healthcare professional preparing language and qualification documents",

    visualLabel: "Before the Application",

    visualTitle:
      "Build the file before chasing the outcome.",

    visualText:
      "Missing language preparation, incomplete documentation, or misunderstanding the recognition route can delay the entire process.",

    supportLabel: "Western Bridge can support",

    authorityLabel: "Final decision / formal process",

    workstreams: [
      {
        number: "01",
        title: "Medical German",
        subtitle: "Language & Communication",
        description:
          "Prepare the German language and professional communication needed for healthcare settings, interviews, examinations, and everyday clinical interaction.",
        support: [
          "General German planning",
          "Medical terminology",
          "Patient communication",
          "Professional language preparation",
        ],
        authority:
          "Language and examination providers",
      },
      {
        number: "02",
        title: "Recognition File",
        subtitle: "Documents & Qualification",
        description:
          "Build an organized recognition file around your academic qualification, professional history, required translations, and supporting documents.",
        support: [
          "Document checklist",
          "Translation preparation",
          "Qualification file review",
          "Recognition process guidance",
        ],
        authority:
          "Competent recognition authority",
      },
      {
        number: "03",
        title: "Licensing Readiness",
        subtitle: "Professional Authorization",
        description:
          "Understand what may remain after recognition, including profession-specific language requirements, examinations, adaptation measures, or licensing procedures.",
        support: [
          "Requirement mapping",
          "Exam preparation planning",
          "Professional readiness",
          "Next-step coordination",
        ],
        authority:
          "Relevant licensing authority",
      },
    ],

    finalLabel: "Medical Case Review",

    finalTitle:
      "Start with your profession and current situation.",

    finalText:
      "Tell us your healthcare profession, country of qualification, experience, German level, and current documentation. From there, the preparation route becomes much clearer.",

    caseFields: [
      "Profession",
      "Qualification",
      "Experience",
      "German Level",
      "Documents",
      "Target Route",
    ],

    cta: "Discuss Your Medical Path",

    legal:
      "Western Bridge provides consulting, preparation, training, documentation support, and pathway guidance. Qualification recognition, professional licensing, examinations, visas, and employment decisions remain with the responsible authorities, employers, and organizations.",
  },

  ar: {
    eyebrow: "جاهزية المسار الطبي",

    titleLineOne: "اللغة. الاعتراف.",
    highlightedTitle: "الترخيص.",

    intro:
      "غالبًا ما تحدد هذه المحاور الثلاثة مدى جاهزية المتخصص في القطاع الطبي للانتقال إلى الخطوات التالية. تساعد Western Bridge على تنظيم الاستعداد حولها دون الخلط بين الدعم الاستشاري والقرارات الرسمية التي تتخذها الجهات الألمانية المختصة.",

    imageAlt:
      "متخصص في القطاع الطبي يجهز وثائق اللغة والمؤهلات",

    visualLabel: "قبل تقديم الطلب",

    visualTitle:
      "جهّز ملفك أولًا قبل التركيز على النتيجة.",

    visualText:
      "نقص الاستعداد اللغوي أو عدم اكتمال الوثائق أو سوء فهم مسار الاعتراف يمكن أن يؤخر العملية بالكامل.",

    supportLabel: "يمكن لـ Western Bridge المساعدة في",

    authorityLabel: "الإجراء الرسمي / القرار النهائي",

    workstreams: [
      {
        number: "01",
        title: "الألمانية الطبية",
        subtitle: "اللغة والتواصل",
        description:
          "استعد باللغة الألمانية والتواصل المهني المطلوب في بيئات الرعاية الصحية والمقابلات والامتحانات والتعامل السريري اليومي.",
        support: [
          "تخطيط دراسة الألمانية العامة",
          "المصطلحات الطبية",
          "التواصل مع المرضى",
          "الاستعداد للغة المهنية",
        ],
        authority:
          "جهات اللغة والامتحانات",
      },
      {
        number: "02",
        title: "ملف الاعتراف",
        subtitle: "الوثائق والمؤهلات",
        description:
          "أنشئ ملف اعتراف منظمًا يشمل مؤهلك الأكاديمي وتاريخك المهني والترجمات المطلوبة والوثائق الداعمة.",
        support: [
          "قائمة الوثائق المطلوبة",
          "الاستعداد للترجمة",
          "مراجعة ملف المؤهلات",
          "التوجيه في إجراءات الاعتراف",
        ],
        authority:
          "جهة الاعتراف المختصة",
      },
      {
        number: "03",
        title: "الاستعداد للترخيص",
        subtitle: "التصريح المهني",
        description:
          "افهم ما قد يتبقى بعد الاعتراف، بما في ذلك متطلبات اللغة الخاصة بالمهنة والامتحانات وإجراءات التكيف أو خطوات الترخيص.",
        support: [
          "تحديد المتطلبات",
          "تخطيط الاستعداد للامتحانات",
          "الجاهزية المهنية",
          "تنسيق الخطوات التالية",
        ],
        authority:
          "جهة الترخيص المختصة",
      },
    ],

    finalLabel: "مراجعة الحالة الطبية",

    finalTitle:
      "ابدأ بمهنتك ووضعك الحالي.",

    finalText:
      "أخبرنا عن مهنتك الصحية وبلد حصولك على المؤهل وخبرتك ومستواك في اللغة الألمانية والوثائق المتوفرة لديك حاليًا. من هذه النقطة يصبح مسار الاستعداد أكثر وضوحًا.",

    caseFields: [
      "المهنة",
      "المؤهل",
      "الخبرة",
      "مستوى الألمانية",
      "الوثائق",
      "المسار المستهدف",
    ],

    cta: "ناقش مسارك الطبي",

    legal:
      "تقدم Western Bridge الاستشارات والاستعداد والتدريب ودعم الوثائق والتوجيه في تخطيط المسار. وتبقى قرارات الاعتراف بالمؤهلات والترخيص المهني والامتحانات والتأشيرات والتوظيف من اختصاص الجهات الرسمية وأصحاب العمل والمؤسسات المعنية.",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleLineOne: string;
    highlightedTitle: string;
    intro: string;
    imageAlt: string;
    visualLabel: string;
    visualTitle: string;
    visualText: string;
    supportLabel: string;
    authorityLabel: string;
    workstreams: Workstream[];
    finalLabel: string;
    finalTitle: string;
    finalText: string;
    caseFields: string[];
    cta: string;
    legal: string;
  }
>;

export default function MedicalReadinessSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section
      id="medical-readiness"
      className={styles.section}
    >
      <Container>
        <div className={styles.top}>
          <div className={styles.heading}>
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

          <p className={styles.intro}>
            {t.intro}
          </p>
        </div>

        <div className={styles.workspace}>
          <div className={styles.visual}>
            <Image
              src="/images/medical-preparation.jpg"
              alt={t.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 36vw"
              className={styles.image}
            />

            <div className={styles.imageOverlay} />

            <div className={styles.visualContent}>
              <span className={styles.visualLabel}>
                {t.visualLabel}
              </span>

              <h3 className={styles.visualTitle}>
                {t.visualTitle}
              </h3>

              <p className={styles.visualText}>
                {t.visualText}
              </p>
            </div>
          </div>

          <div className={styles.workstreams}>
            {t.workstreams.map((item) => (
              <article
                key={item.number}
                className={styles.workstream}
              >
                <div className={styles.workstreamHead}>
                  <span className={styles.number}>
                    {item.number}
                  </span>

                  <div>
                    <span className={styles.subtitle}>
                      {item.subtitle}
                    </span>

                    <h3 className={styles.workstreamTitle}>
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className={styles.description}>
                  {item.description}
                </p>

                <div className={styles.supportBlock}>
                  <span className={styles.supportLabel}>
                    {t.supportLabel}
                  </span>

                  <div className={styles.supportList}>
                    {item.support.map((point) => (
                      <span
                        key={point}
                        className={styles.supportItem}
                      >
                        <span
                          className={styles.supportMark}
                          aria-hidden="true"
                        />

                        {point}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.authority}>
                  <span className={styles.authorityLabel}>
                    {t.authorityLabel}
                  </span>

                  <strong>
                    {item.authority}
                  </strong>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.finalBlock}>
          <div className={styles.finalIntro}>
            <span className={styles.finalLabel}>
              {t.finalLabel}
            </span>

            <h3 className={styles.finalTitle}>
              {t.finalTitle}
            </h3>

            <p className={styles.finalText}>
              {t.finalText}
            </p>
          </div>

          <div className={styles.caseFields}>
            {t.caseFields.map((field) => (
              <span key={field}>
                {field}
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            className={styles.cta}
          >
            {t.cta}

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