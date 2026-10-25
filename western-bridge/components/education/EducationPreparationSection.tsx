"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./EducationPreparationSection.module.css";

type Locale = "de" | "en" | "ar";

type PreparationArea = {
  number: string;
  label: string;
  title: string;
  text: string;
  status: string;
};

const content = {
  de: {
    eyebrow: "Education Preparation Hub",

    titleBefore: "Bereiten Sie mehr vor als nur",
    highlightedTitle: "eine Bewerbung",

    description:
      "Internationale Bildung umfasst häufig mehrere Vorbereitungsbereiche gleichzeitig. Western Bridge unterstützt Sie dabei, Sprache, Dokumente, Qualifikationen und berufliche Anforderungen zu verstehen, die vor dem nächsten Schritt relevant sein können.",

    imageAlt:
      "Studierender bei der Vorbereitung von Dokumenten und akademischen Unterlagen für einen internationalen Bildungsweg",

    captionLabel: "Vorbereitung zählt",

    captionTitle:
      "Ein stärkerer Bildungsweg beginnt mit einem klareren Unterlagenpaket.",

    workspaceLabel:
      "Persönliche Vorbereitung",

    workspaceTitle:
      "Bildungsbereitschaft",

    workspaceCode:
      "WB / EDU / READY",

    progressLeft:
      "Vorbereitungsbereiche",

    progressRight:
      "5 Kernbereiche",

    preparationAreas: [
      {
        number: "01",
        label: "Sprache",
        title: "Sprachvorbereitung",
        text:
          "Verstehen Sie, welches Sprachniveau für Ihr Studium, Ihre Ausbildung, Ihren Beruf oder Ihre Zielregion relevant sein kann.",
        status: "Bereitschaft aufbauen",
      },
      {
        number: "02",
        label: "Dokumente",
        title: "Dokumentenvorbereitung",
        text:
          "Organisieren Sie akademische Zeugnisse, Leistungsnachweise, berufliche Unterlagen, Übersetzungen, Beglaubigungen und weitere unterstützende Dokumente.",
        status: "Unterlagen vorbereiten",
      },
      {
        number: "03",
        label: "Anerkennung",
        title: "Anerkennung von Qualifikationen",
        text:
          "Verstehen Sie, ob frühere akademische oder berufliche Qualifikationen für Ihren vorgesehenen Weg anerkannt oder bewertet werden müssen.",
        status: "Prozess verstehen",
      },
      {
        number: "04",
        label: "Bewerbungen",
        title: "Bewerbungsbereitschaft",
        text:
          "Bereiten Sie Informationen, Dokumente, Kommunikation und Nachweise vor, die bei der Kontaktaufnahme mit Institutionen häufig benötigt werden.",
        status: "Bewerbung vorbereiten",
      },
      {
        number: "05",
        label: "Beruflich",
        title: "Berufliche Vorbereitung",
        text:
          "Bei bildungsbezogenen Karrierewegen können zusätzliche Trainings, Prüfungen, sektorale Anforderungen oder weitere Vorbereitung relevant sein.",
        status: "Profil stärken",
      },
    ],

    bottomLabel:
      "Ihre Anforderungen können unterschiedlich sein",

    bottomText:
      "Die genaue Vorbereitung hängt von Ihrem Zielland, der Institution, dem Fachbereich, dem Qualifikationsniveau und Ihren persönlichen Umständen ab.",

    button:
      "Vorbereitung prüfen",
  },

  en: {
    eyebrow: "Education Preparation Hub",

    titleBefore: "Prepare More Than Just",
    highlightedTitle: "an Application",

    description:
      "International education often involves several preparation areas at the same time. Western Bridge helps you understand the language, documents, qualifications, and professional requirements that may need attention before you move forward.",

    imageAlt:
      "Student preparing documents and academic materials for an international education pathway",

    captionLabel: "Preparation Matters",

    captionTitle:
      "A stronger pathway starts with a clearer file.",

    workspaceLabel:
      "Personal Preparation File",

    workspaceTitle:
      "Education Readiness",

    workspaceCode:
      "WB / EDU / READY",

    progressLeft:
      "Preparation Areas",

    progressRight:
      "5 Core Areas",

    preparationAreas: [
      {
        number: "01",
        label: "Language",
        title: "Language Preparation",
        text:
          "Understand the language level that may be relevant to your study, training, professional, or destination requirements.",
        status: "Build Readiness",
      },
      {
        number: "02",
        label: "Documents",
        title: "Document Preparation",
        text:
          "Organize academic certificates, transcripts, professional records, translations, authentication, and supporting documents.",
        status: "Prepare File",
      },
      {
        number: "03",
        label: "Recognition",
        title: "Qualification Recognition",
        text:
          "Understand whether previous academic or professional qualifications may require recognition or evaluation for your intended pathway.",
        status: "Understand Process",
      },
      {
        number: "04",
        label: "Applications",
        title: "Application Readiness",
        text:
          "Prepare the information, documentation, communication, and supporting materials commonly needed when approaching institutions.",
        status: "Get Ready",
      },
      {
        number: "05",
        label: "Professional",
        title: "Professional Preparation",
        text:
          "For career-linked education pathways, identify additional training, exams, sector requirements, or professional readiness needs.",
        status: "Strengthen Profile",
      },
    ],

    bottomLabel:
      "Your Requirements May Differ",

    bottomText:
      "The exact preparation depends on your destination, institution, field, qualification level, and personal circumstances.",

    button:
      "Review Your Preparation",
  },

  ar: {
    eyebrow: "مركز الاستعداد التعليمي",

    titleBefore: "استعد لأكثر من مجرد",
    highlightedTitle: "تقديم طلب",

    description:
      "غالبًا ما يتطلب التعليم الدولي الاستعداد في عدة جوانب في الوقت نفسه. تساعدك Western Bridge على فهم اللغة والوثائق والمؤهلات والمتطلبات المهنية التي قد تحتاج إلى الاهتمام بها قبل الانتقال إلى الخطوة التالية.",

    imageAlt:
      "طالب يجهز وثائق ومواد أكاديمية لمسار تعليم دولي",

    captionLabel: "الاستعداد مهم",

    captionTitle:
      "المسار الأقوى يبدأ بملف أوضح وأكثر تنظيمًا.",

    workspaceLabel:
      "ملف الاستعداد الشخصي",

    workspaceTitle:
      "الجاهزية التعليمية",

    workspaceCode:
      "WB / EDU / READY",

    progressLeft:
      "مجالات الاستعداد",

    progressRight:
      "5 مجالات أساسية",

    preparationAreas: [
      {
        number: "01",
        label: "اللغة",
        title: "الاستعداد اللغوي",
        text:
          "افهم مستوى اللغة الذي قد يكون مناسبًا لمتطلبات دراستك أو تدريبك أو مجال عملك أو وجهتك.",
        status: "ابنِ جاهزيتك",
      },
      {
        number: "02",
        label: "الوثائق",
        title: "تجهيز الوثائق",
        text:
          "نظّم الشهادات الأكاديمية وكشوف العلامات والسجلات المهنية والترجمات والتصديقات والوثائق الداعمة.",
        status: "جهّز ملفك",
      },
      {
        number: "03",
        label: "الاعتراف",
        title: "الاعتراف بالمؤهلات",
        text:
          "افهم ما إذا كانت مؤهلاتك الأكاديمية أو المهنية السابقة قد تحتاج إلى اعتراف أو تقييم لمسارك المستهدف.",
        status: "افهم العملية",
      },
      {
        number: "04",
        label: "الطلبات",
        title: "الجاهزية للتقديم",
        text:
          "جهّز المعلومات والوثائق والتواصل والمواد الداعمة التي تحتاجها عادةً عند التقديم أو التواصل مع المؤسسات.",
        status: "استعد للتقديم",
      },
      {
        number: "05",
        label: "مهني",
        title: "الاستعداد المهني",
        text:
          "في المسارات التعليمية المرتبطة بالمهنة، قد تحتاج إلى تدريب إضافي أو امتحانات أو متطلبات قطاعية أو استعداد مهني إضافي.",
        status: "قوِّ ملفك",
      },
    ],

    bottomLabel:
      "قد تختلف متطلباتك",

    bottomText:
      "يعتمد الاستعداد الفعلي على وجهتك والمؤسسة والمجال ومستوى المؤهل وظروفك الشخصية.",

    button:
      "راجع استعدادك",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleBefore: string;
    highlightedTitle: string;
    description: string;
    imageAlt: string;
    captionLabel: string;
    captionTitle: string;
    workspaceLabel: string;
    workspaceTitle: string;
    workspaceCode: string;
    progressLeft: string;
    progressRight: string;
    preparationAreas: PreparationArea[];
    bottomLabel: string;
    bottomText: string;
    button: string;
  }
>;

export default function EducationPreparationSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section
      id="education-preparation"
      className={styles.section}
    >
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
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

            <p className={styles.description}>
              {t.description}
            </p>

            <div className={styles.visual}>
              <Image
                src="/images/education-preparation.jpg"
                alt={t.imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 38vw"
                className={styles.image}
              />

              <div className={styles.imageOverlay} />

              <div className={styles.imageCaption}>
                <span className={styles.captionLabel}>
                  {t.captionLabel}
                </span>

                <h3 className={styles.captionTitle}>
                  {t.captionTitle}
                </h3>
              </div>
            </div>
          </div>

          <div className={styles.workspace}>
            <div className={styles.workspaceTop}>
              <div>
                <span className={styles.workspaceLabel}>
                  {t.workspaceLabel}
                </span>

                <h3 className={styles.workspaceTitle}>
                  {t.workspaceTitle}
                </h3>
              </div>

              <span className={styles.workspaceCode}>
                {t.workspaceCode}
              </span>
            </div>

            <div className={styles.progressHeader}>
              <span>
                {t.progressLeft}
              </span>

              <span>
                {t.progressRight}
              </span>
            </div>

            <div className={styles.progressTrack}>
              <div className={styles.progressFill} />
            </div>

            <div className={styles.areas}>
              {t.preparationAreas.map((area) => (
                <article
                  key={area.number}
                  className={styles.area}
                >
                  <div className={styles.areaNumber}>
                    {area.number}
                  </div>

                  <div className={styles.areaContent}>
                    <span className={styles.areaLabel}>
                      {area.label}
                    </span>

                    <h3 className={styles.areaTitle}>
                      {area.title}
                    </h3>

                    <p className={styles.areaText}>
                      {area.text}
                    </p>
                  </div>

                  <span className={styles.areaStatus}>
                    {area.status}
                  </span>
                </article>
              ))}
            </div>

            <div className={styles.workspaceBottom}>
              <div>
                <span className={styles.bottomLabel}>
                  {t.bottomLabel}
                </span>

                <p className={styles.bottomText}>
                  {t.bottomText}
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
          </div>
        </div>
      </Container>
    </section>
  );
}