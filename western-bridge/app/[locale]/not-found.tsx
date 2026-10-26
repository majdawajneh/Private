"use client";

import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";

type Locale = "de" | "en" | "ar";

const content = {
  de: {
    code: "404",
    title: "Seite nicht gefunden",
    text:
      "Die gesuchte Seite ist nicht verfügbar oder wurde verschoben.",
    button:
      "Zur Startseite",
  },

  en: {
    code: "404",
    title: "Page not found",
    text:
      "The page you are looking for is unavailable or may have been moved.",
    button:
      "Back to Home",
  },

  ar: {
    code: "404",
    title: "الصفحة غير موجودة",
    text:
      "الصفحة التي تبحث عنها غير متاحة أو ربما تم نقلها.",
    button:
      "العودة للرئيسية",
  },
} satisfies Record<
  Locale,
  {
    code: string;
    title: string;
    text: string;
    button: string;
  }
>;

export default function NotFound() {
  const locale =
    useLocale() as Locale;

  const t =
    content[locale] ?? content.de;

  return (
    <main
      style={{
        minHeight: "70vh",
        display: "grid",
        placeItems: "center",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "620px",
        }}
      >
        <span
          style={{
            display: "block",
            marginBottom: "12px",
            color: "var(--color-gold-dark)",
            fontSize: "0.78rem",
            fontWeight: 800,
            letterSpacing:
              locale === "ar"
                ? "0"
                : "0.12em",
          }}
        >
          {t.code}
        </span>

        <h1
          style={{
            marginBottom: "16px",
            color: "var(--color-navy)",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 1.05,
          }}
        >
          {t.title}
        </h1>

        <p
          style={{
            marginBottom: "28px",
            color: "var(--color-text-secondary)",
            fontSize: "1rem",
            lineHeight: 1.8,
          }}
        >
          {t.text}
        </p>

        <Link
          href="/"
          style={{
            minHeight: "52px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 22px",
            color: "var(--color-white)",
            background: "var(--color-navy)",
            borderRadius: "var(--radius-sm)",
            fontWeight: 800,
          }}
        >
          {t.button}
        </Link>
      </div>
    </main>
  );
}