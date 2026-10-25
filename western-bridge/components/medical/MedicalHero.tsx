"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./MedicalHero.module.css";

type Locale = "de" | "en" | "ar";

type PathwayStep = {
  number: string;
  title: string;
};

const content = {
  de: {
    eyebrow: "Medizinische Wege & Gesundheitswesen",

    titleLineOne: "Ihre medizinische Karriere.",
    titleLineTwoBefore: "Ein klarerer Weg nach",
    highlightedTitle: "Deutschland.",

    description:
      "Western Bridge unterstützt Fachkräfte im Gesundheitswesen dabei, sprachliche Anforderungen, Anerkennung, Zulassung, Dokumente und berufliche Vorbereitung auf dem Weg nach Deutschland besser zu verstehen.",

    professions: [
      "Pflegefachkräfte",
      "Ärzte",
      "Apotheker",
      "Weitere Gesundheitsberufe",
    ],

    primaryButton: "Medizinischen Weg entdecken",
    secondaryButton: "Ihre Situation besprechen",

    disclaimer:
      "Western Bridge bietet Orientierung, Vorbereitung, Training und Unterstützung bei der Strukturierung Ihres Weges. Entscheidungen über Anerkennung, Zulassung, Visa und Beschäftigung liegen bei den jeweils zuständigen Behörden und Organisationen.",

    imageAlt:
      "Fachkraft im Gesundheitswesen in einer modernen medizinischen Umgebung",

    imageLabel: "Gesundheitsweg nach Deutschland",

    imageTitle:
      "Bereiten Sie sich mit einem klareren Plan auf einen regulierten Beruf vor.",

    pathwayLabel: "Medizinischer Weg",

    pathwayTitle:
      "Von der Vorbereitung zur beruflichen Bereitschaft",

    pathway: [
      {
        number: "01",
        title: "Deutsche Sprache",
      },
      {
        number: "02",
        title: "Anerkennung der Qualifikation",
      },
      {
        number: "03",
        title: "Zulassung & Prüfungen",
      },
      {
        number: "04",
        title: "Berufliche Vorbereitung",
      },
      {
        number: "05",
        title: "Möglichkeiten erkunden",
      },
    ],
  },

  en: {
    eyebrow: "Medical & Healthcare Pathways",

    titleLineOne: "Your Medical Career.",
    titleLineTwoBefore: "A Clearer Route to",
    highlightedTitle: "Germany.",

    description:
      "Western Bridge supports healthcare professionals in understanding the language, recognition, licensing, documentation, and professional preparation involved in building a medical pathway toward Germany.",

    professions: [
      "Nurses",
      "Doctors",
      "Pharmacists",
      "Allied Health",
    ],

    primaryButton: "Explore the Medical Pathway",
    secondaryButton: "Discuss Your Case",

    disclaimer:
      "Western Bridge provides guidance, preparation, training, and pathway support. Recognition, licensing, visas, and employment decisions remain with the relevant authorities and organizations.",

    imageAlt:
      "Healthcare professional working in a modern hospital environment",

    imageLabel: "Germany Healthcare Pathway",

    imageTitle:
      "Prepare for a regulated profession with a clearer plan.",

    pathwayLabel: "Medical Path",

    pathwayTitle:
      "From Preparation to Professional Readiness",

    pathway: [
      {
        number: "01",
        title: "German Language",
      },
      {
        number: "02",
        title: "Qualification Recognition",
      },
      {
        number: "03",
        title: "Licensing & Exams",
      },
      {
        number: "04",
        title: "Professional Readiness",
      },
      {
        number: "05",
        title: "Opportunity Exploration",
      },
    ],
  },

  ar: {
    eyebrow: "المسارات الطبية والصحية",

    titleLineOne: "مسيرتك الطبية.",
    titleLineTwoBefore: "طريق أوضح نحو",
    highlightedTitle: "ألمانيا.",

    description:
      "تساعد Western Bridge المتخصصين في القطاع الطبي على فهم متطلبات اللغة والاعتراف والترخيص والوثائق والاستعداد المهني المرتبط ببناء مسار طبي نحو ألمانيا.",

    professions: [
      "الممرضون",
      "الأطباء",
      "الصيادلة",
      "المهن الصحية المساندة",
    ],

    primaryButton: "استكشف المسار الطبي",
    secondaryButton: "ناقش حالتك معنا",

    disclaimer:
      "تقدم Western Bridge التوجيه والاستعداد والتدريب ودعم تنظيم المسار. وتبقى قرارات الاعتراف والترخيص والتأشيرات والتوظيف من اختصاص الجهات الرسمية والمؤسسات المعنية.",

    imageAlt:
      "متخصص في القطاع الطبي يعمل في بيئة صحية حديثة",

    imageLabel: "المسار الطبي نحو ألمانيا",

    imageTitle:
      "استعد لمهنة منظمة ضمن خطة أكثر وضوحًا.",

    pathwayLabel: "المسار الطبي",

    pathwayTitle:
      "من الاستعداد إلى الجاهزية المهنية",

    pathway: [
      {
        number: "01",
        title: "اللغة الألمانية",
      },
      {
        number: "02",
        title: "الاعتراف بالمؤهلات",
      },
      {
        number: "03",
        title: "الترخيص والامتحانات",
      },
      {
        number: "04",
        title: "الجاهزية المهنية",
      },
      {
        number: "05",
        title: "استكشاف الفرص",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleLineOne: string;
    titleLineTwoBefore: string;
    highlightedTitle: string;
    description: string;
    professions: readonly string[];
    primaryButton: string;
    secondaryButton: string;
    disclaimer: string;
    imageAlt: string;
    imageLabel: string;
    imageTitle: string;
    pathwayLabel: string;
    pathwayTitle: string;
    pathway: PathwayStep[];
  }
>;

export default function MedicalHero() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {t.eyebrow}
            </div>

            <h1 className={styles.title}>
              {t.titleLineOne}
              <br />
              {t.titleLineTwoBefore}{" "}
              <span className={styles.goldText}>
                {t.highlightedTitle}
              </span>
            </h1>

            <p className={styles.description}>
              {t.description}
            </p>

            <div className={styles.professions}>
              {t.professions.map((profession) => (
                <span
                  key={profession}
                  className={styles.profession}
                >
                  <span className={styles.professionDot} />
                  {profession}
                </span>
              ))}
            </div>

            <div className={styles.actions}>
              <Link
                href="#medical-pathway"
                className={styles.primaryButton}
              >
                {t.primaryButton}

                <span aria-hidden="true">
                  {locale === "ar" ? "←" : "→"}
                </span>
              </Link>

              <Link
                href="/contact"
                className={styles.secondaryButton}
              >
                {t.secondaryButton}
              </Link>
            </div>

            <p className={styles.disclaimer}>
              {t.disclaimer}
            </p>
          </div>

          <div className={styles.visual}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/medical-hero.jpg"
                alt={t.imageAlt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
                className={styles.image}
              />

              <div className={styles.overlay} />

              <div className={styles.imageContent}>
                <span className={styles.imageLabel}>
                  {t.imageLabel}
                </span>

                <h2 className={styles.imageTitle}>
                  {t.imageTitle}
                </h2>
              </div>
            </div>

            <div
              id="medical-pathway"
              className={styles.pathway}
            >
              <div className={styles.pathwayHeader}>
                <div>
                  <span className={styles.pathwayLabel}>
                    {t.pathwayLabel}
                  </span>

                  <h3 className={styles.pathwayTitle}>
                    {t.pathwayTitle}
                  </h3>
                </div>
              </div>

              <div className={styles.steps}>
                {t.pathway.map((step) => (
                  <div
                    key={step.number}
                    className={styles.step}
                  >
                    <span className={styles.stepNumber}>
                      {step.number}
                    </span>

                    <span className={styles.stepTitle}>
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}