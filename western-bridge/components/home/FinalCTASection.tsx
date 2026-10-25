"use client";

import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./FinalCTASection.module.css";

type Locale = "de" | "en" | "ar";

const content = {
  de: {
    eyebrow: "Bereit für den nächsten Schritt?",

    titleBefore: "Gestalten Sie Ihren nächsten Schritt mit",
    highlightedTitle: "Western Bridge",

    description:
      "Ob Privatperson, medizinische Fachkraft oder Unternehmen – Western Bridge hilft Ihnen dabei, Ihre Möglichkeiten besser zu verstehen, sich gezielt auf den passenden Weg vorzubereiten und mit klarerer Orientierung voranzugehen.",

    primaryButton: "Mit Western Bridge sprechen",
  },

  en: {
    eyebrow: "Ready to Move Forward?",

    titleBefore: "Build Your Next Step With",
    highlightedTitle: "Western Bridge",

    description:
      "Whether you are an individual, a medical professional, or a business, Western Bridge helps you understand your options, prepare for the right pathway, and move forward with clearer direction.",

    primaryButton: "Talk to Western Bridge",
  },

  ar: {
    eyebrow: "جاهز للخطوة التالية؟",

    titleBefore: "ابنِ خطوتك القادمة مع",
    highlightedTitle: "Western Bridge",

    description:
      "سواء كنت فردًا، أو متخصصًا في القطاع الطبي، أو تمثل شركة، تساعدك Western Bridge على فهم خياراتك بشكل أوضح، والاستعداد للمسار المناسب، والتقدم بخطوات أكثر تنظيمًا.",

    primaryButton: "تحدث مع Western Bridge",
  },
} as const;

export default function FinalCTASection() {
  const locale = useLocale() as Locale;

  const t = content[locale] ?? content.de;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.box}>
          <div className={styles.circleOne} />
          <div className={styles.circleTwo} />

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
          </div>

          <div className={styles.actions}>
            <Link
              href="/contact"
              className={styles.primaryButton}
            >
              {t.primaryButton}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}