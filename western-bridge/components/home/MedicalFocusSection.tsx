"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./MedicalFocusSection.module.css";

type Locale = "de" | "en" | "ar";

const content = {
  de: {
    eyebrow: "Schwerpunkt Gesundheitswesen",

    titleBefore: "Spezialisierte Unterstützung für",
    highlightedTitle: "medizinische Fachkräfte",

    description:
      "Western Bridge legt einen besonderen Schwerpunkt auf Fachkräfte im Gesundheitswesen, die sich auf internationale Wege vorbereiten – insbesondere auf Möglichkeiten mit Bezug zu Deutschland. Wir unterstützen bei Vorbereitung, Qualifizierung, Anerkennung, Sprachentwicklung und beruflicher Orientierung.",

    services: [
      "Deutsch und medizinisches Deutsch",
      "Orientierung bei beruflicher Anerkennung",
      "Vorbereitung auf Zulassung und Qualifikation",
      "Unterstützung bei Übersetzung und Beglaubigung von Dokumenten",
      "Berufliche Vorbereitung und Wegorientierung",
      "Erkundung internationaler Möglichkeiten",
    ],

    primaryButton: "Medizinische Wege entdecken",

    imageAlt:
      "Medizinische Fachkräfte bei der Vorbereitung auf internationale berufliche Wege",

    pathwayLabel: "Deutschland-Weg",
    pathwayTitle: "Fachkräfte im Gesundheitswesen",

    pathwayText:
      "Die Vorbereitung kann Sprachentwicklung, Qualifikationsprüfung, berufliche Anerkennung, Vorbereitung auf Zulassungsverfahren und berufliche Orientierung umfassen.",
  },

  en: {
    eyebrow: "Healthcare Focus",

    titleBefore: "Specialized Support for",
    highlightedTitle: "Medical Professionals",

    description:
      "Western Bridge places strong focus on healthcare professionals preparing for international pathways, especially those connected to Germany. Our role is to support preparation, qualification, recognition, language development, and professional readiness.",

    services: [
      "German & Medical German preparation",
      "Professional recognition guidance",
      "Licensing and qualification preparation",
      "Document translation and authentication support",
      "Professional readiness and pathway guidance",
      "International opportunity exploration",
    ],

    primaryButton: "Explore Medical Pathways",

    imageAlt:
      "Healthcare professionals preparing for international pathways",

    pathwayLabel: "Germany Pathway",
    pathwayTitle: "Healthcare Professionals",

    pathwayText:
      "Preparation may include language development, qualification assessment, professional recognition, licensing preparation, and career pathway guidance.",
  },

  ar: {
    eyebrow: "التركيز على القطاع الطبي",

    titleBefore: "دعم متخصص لـ",
    highlightedTitle: "المتخصصين في القطاع الطبي",

    description:
      "تولي Western Bridge اهتمامًا خاصًا بالمتخصصين في القطاع الطبي الراغبين في الاستعداد لمسارات دولية، وخاصة المسارات المرتبطة بألمانيا. ونركز على دعم الاستعداد والتأهيل والاعتراف المهني وتطوير اللغة والجاهزية المهنية.",

    services: [
      "اللغة الألمانية والألمانية الطبية",
      "التوجيه في إجراءات الاعتراف المهني",
      "الاستعداد للترخيص والتأهيل",
      "دعم ترجمة الوثائق وتصديقها",
      "الجاهزية المهنية وتوجيه المسار",
      "استكشاف الفرص الدولية",
    ],

    primaryButton: "استكشف المسارات الطبية",

    imageAlt:
      "متخصصون في القطاع الطبي يستعدون لمسارات مهنية دولية",

    pathwayLabel: "مسار ألمانيا",
    pathwayTitle: "المتخصصون في القطاع الطبي",

    pathwayText:
      "قد يشمل الاستعداد تطوير اللغة، وتقييم المؤهلات، والاعتراف المهني، والاستعداد لمتطلبات الترخيص، والتوجيه في المسار المهني.",
  },
} as const;

export default function MedicalFocusSection() {
  const locale = useLocale() as Locale;

  const t = content[locale] ?? content.de;

  return (
    <section className={styles.section}>
      <div className={styles.circleOne} />
      <div className={styles.circleTwo} />

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

            <div className={styles.services}>
              {t.services.map((service) => (
                <div
                  key={service}
                  className={styles.service}
                >
                  <span
                    className={styles.serviceIcon}
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  <span className={styles.serviceText}>
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <Link
                href="/medical"
                className={styles.primaryButton}
              >
                {t.primaryButton}
              </Link>
            </div>
          </div>

          <div className={styles.visual}>
            <Image
              src="/images/medical-focus.jpg"
              alt={t.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.image}
            />

            <div className={styles.imageOverlay} />

            <div className={styles.pathwayCard}>
              <div className={styles.pathwayHeader}>
                <span className={styles.pathwayLabel}>
                  {t.pathwayLabel}
                </span>

                <span className={styles.pathwayTitle}>
                  {t.pathwayTitle}
                </span>
              </div>

              <p className={styles.pathwayText}>
                {t.pathwayText}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}