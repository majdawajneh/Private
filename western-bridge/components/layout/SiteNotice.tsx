"use client";

import { useLocale } from "next-intl";

import styles from "./SiteNotice.module.css";

type Locale = "de" | "en" | "ar";

const content = {
  de: {
    label: "Hinweis",
    text:
      "Diese Website befindet sich derzeit im Aufbau. Inhalte, Funktionen und Darstellungen können sich noch ändern.",
  },

  en: {
    label: "Notice",
    text:
      "This website is currently under development. Content, features and presentation may still change.",
  },

  ar: {
    label: "تنبيه",
    text:
      "الموقع حاليًا قيد التطوير، والنسخة الحالية ليست النسخة النهائية. قد يتم تعديل بعض المحتوى والخصائص والتصميم.",
  },
} satisfies Record<
  Locale,
  {
    label: string;
    text: string;
  }
>;

export default function SiteNotice() {
  const locale =
    useLocale() as Locale;

  const t =
    content[locale] ?? content.de;

  return (
    <section
      className={styles.notice}
      role="status"
      aria-live="polite"
    >
      <div className={styles.inner}>
        <span className={styles.dot} />

        <strong>
          {t.label}
        </strong>

        <span className={styles.text}>
          {t.text}
        </span>
      </div>
    </section>
  );
}