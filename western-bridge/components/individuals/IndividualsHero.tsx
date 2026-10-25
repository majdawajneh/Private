"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./IndividualsHero.module.css";

type Locale = "de" | "en" | "ar";

const content = {
  de: {
    eyebrow: "Für Privatpersonen",

    titleBefore: "Gestalten Sie Ihren",
    highlightedTitle: "internationalen Weg",

    description:
      "Western Bridge unterstützt Privatpersonen dabei, internationale Berufs- und Qualifizierungswege besser zu verstehen – mit besonderem Fokus auf Deutschland, sprachliche Vorbereitung, berufliche Entwicklung und Qualifikationsbereitschaft.",

    primaryButton: "Ihre Möglichkeiten entdecken",

    focusItems: [
      "Deutschland-orientierte Wege",
      "Berufliche Vorbereitung",
      "Medizinische & nicht-medizinische Orientierung",
      "Training & Qualifizierung",
    ],

    imageAlt:
      "Berufstätige Person bei der Orientierung zu internationalen Möglichkeiten",

    pathLabel: "Ihr Weg beginnt hier",

    pathTitle:
      "Verstehen. Vorbereiten. Weitergehen.",

    pathText:
      "Entdecken Sie Vorbereitung, Qualifizierung, Training und internationale Orientierung, die Sie bei Ihren beruflichen Zielen unterstützen können.",
  },

  en: {
    eyebrow: "For Individuals",

    titleBefore: "Build Your",
    highlightedTitle: "International Path",

    description:
      "Western Bridge helps individuals understand international professional and training pathways, with a strong focus on Germany, qualification readiness, language preparation, and professional development.",

    primaryButton: "Explore Your Options",

    focusItems: [
      "Germany-focused pathways",
      "Professional preparation",
      "Medical & non-medical guidance",
      "Training & qualification",
    ],

    imageAlt:
      "Professional exploring international pathways",

    pathLabel: "Your Path Starts Here",

    pathTitle:
      "Understand. Prepare. Move Forward.",

    pathText:
      "Explore the preparation, qualification, training, and international guidance that may support your professional goals.",
  },

  ar: {
    eyebrow: "للأفراد",

    titleBefore: "ابنِ",
    highlightedTitle: "مسارك الدولي",

    description:
      "تساعد Western Bridge الأفراد على فهم المسارات المهنية والتأهيلية الدولية بشكل أوضح، مع تركيز خاص على ألمانيا، والاستعداد اللغوي، والجاهزية المهنية، وتطوير المؤهلات.",

    primaryButton: "استكشف خياراتك",

    focusItems: [
      "مسارات تركز على ألمانيا",
      "الاستعداد المهني",
      "توجيه للمجالات الطبية وغير الطبية",
      "التدريب والتأهيل",
    ],

    imageAlt:
      "شخص يستكشف مسارات مهنية دولية",

    pathLabel: "مسارك يبدأ من هنا",

    pathTitle:
      "افهم. استعد. وتقدّم.",

    pathText:
      "استكشف خيارات الاستعداد والتأهيل والتدريب والتوجيه الدولي التي قد تدعم أهدافك المهنية.",
  },
} as const;

export default function IndividualsHero() {
  const locale = useLocale() as Locale;

  const t = content[locale] ?? content.de;

  return (
    <section className={styles.hero}>
      <div className={styles.circleOne} />
      <div className={styles.circleTwo} />

      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {t.eyebrow}
            </div>

            <h1 className={styles.title}>
              {t.titleBefore}{" "}
              <span className={styles.goldText}>
                {t.highlightedTitle}
              </span>
            </h1>

            <p className={styles.description}>
              {t.description}
            </p>

            <div className={styles.actions}>
              <Link
                href="#individual-pathways"
                className={styles.primaryButton}
              >
                {t.primaryButton}
              </Link>
            </div>

            <div className={styles.focusList}>
              {t.focusItems.map((item) => (
                <div
                  key={item}
                  className={styles.focusItem}
                >
                  <span className={styles.focusDot} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.visual}>
            <Image
              src="/images/individuals-hero.jpg"
              alt={t.imageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.image}
            />

            <div className={styles.overlay} />

            <div className={styles.pathCard}>
              <span className={styles.pathLabel}>
                {t.pathLabel}
              </span>

              <h2 className={styles.pathTitle}>
                {t.pathTitle}
              </h2>

              <p className={styles.pathText}>
                {t.pathText}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}