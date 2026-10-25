"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./Hero.module.css";

const content = {
  de: {
    badge: "Deutschland im Fokus. International vernetzt.",

    titleBefore: "Ihre Brücke nach",
    highlightedTitle: "Deutschland",
    titleAfter: "& zu internationalem Wachstum",

    description:
      "Western Bridge begleitet Privatpersonen, medizinische Fachkräfte und Unternehmen auf internationalen Wegen – mit Beratung, Qualifizierung, Weiterbildung, strategischer Orientierung und internationalen Partnerschaften.",

    primaryButton: "Ihre Möglichkeiten entdecken",

    focusAreas: [
      "Privatpersonen",
      "Medizinische Fachkräfte",
      "Unternehmen",
    ],

    imageAlt:
      "Brandenburger Tor in Berlin, Deutschland",
  },

  en: {
    badge: "Germany-Focused. Internationally Connected.",

    titleBefore: "Your Bridge to",
    highlightedTitle: "Germany",
    titleAfter: "& Global Growth",

    description:
      "Western Bridge supports individuals, medical professionals, and businesses in navigating international pathways through consulting, qualification, training, strategic guidance, and international partnerships.",

    primaryButton: "Explore Your Path",

    focusAreas: [
      "Individuals",
      "Medical Professionals",
      "Businesses",
    ],

    imageAlt:
      "Brandenburg Gate in Berlin, Germany",
  },

  ar: {
    badge: "ألمانيا محورنا. وشبكتنا دولية.",

    titleBefore: "جسرك نحو",
    highlightedTitle: "ألمانيا",
    titleAfter: "والنمو الدولي",

    description:
      "تدعم Western Bridge الأفراد والمتخصصين في القطاع الطبي والشركات في استكشاف المسارات الدولية من خلال الاستشارات والتأهيل والتدريب والتوجيه الاستراتيجي وبناء الشراكات الدولية.",

    primaryButton: "استكشف مسارك",

    focusAreas: [
      "الأفراد",
      "المتخصصون في القطاع الطبي",
      "الشركات",
    ],

    imageAlt:
      "بوابة براندنبورغ في برلين، ألمانيا",
  },
} as const;

type Locale = keyof typeof content;

export default function Hero() {
  const locale = useLocale() as Locale;

  const t = content[locale] ?? content.de;

  return (
    <section className={styles.hero}>
      <Container className={styles.heroContainer}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            {t.badge}
          </div>

          <h1 className={styles.title}>
            {t.titleBefore}{" "}
            <span className={styles.goldText}>
              {t.highlightedTitle}
            </span>

            <br />

            {t.titleAfter}
          </h1>

          <p className={styles.description}>
            {t.description}
          </p>

          <div className={styles.actions}>
            <Link
              href="#pathways"
              className={styles.primaryButton}
            >
              {t.primaryButton}
            </Link>
          </div>

          <div className={styles.trustRow}>
            {t.focusAreas.map((item) => (
              <div
                key={item}
                className={styles.trustItem}
              >
                <span
                  className={styles.trustIcon}
                  aria-hidden="true"
                >
                  ✓
                </span>

                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className={styles.background}>
        <Image
          src="/images/brandenburg-gate.jpg"
          alt={t.imageAlt}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 58vw"
          className={styles.backgroundImage}
        />

        <div
          className={styles.backgroundOverlay}
        />
      </div>

      <div
        className={styles.decorativeLine}
      />
    </section>
  );
}