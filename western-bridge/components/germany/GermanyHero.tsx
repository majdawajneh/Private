"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./GermanyHero.module.css";

type Locale = "de" | "en" | "ar";

type RouteItem = {
  number: string;
  title: string;
  text: string;
  href: string;
};

const content = {
  de: {
    eyebrow: "Western Bridge — Deutschland Desk",

    titleLineOne: "Deutschland ist nicht",
    titleLineTwo: "nur ein Weg.",
    highlightedTitle: "Es ist ein System.",

    description:
      "Western Bridge unterstützt Privatpersonen, medizinische Fachkräfte, Unternehmen, Hochschulen und Bildungseinrichtungen dabei, Deutschland mit besserer Vorbereitung, klareren Anforderungen und der richtigen institutionellen Orientierung anzugehen.",

    primaryButton: "Ihren Deutschland-Weg finden",
    secondaryButton: "Mit dem Deutschland Desk sprechen",

    principle:
      "Wir konzentrieren uns auf Vorbereitung und Verbindung — nicht auf Versprechen bezüglich Beschäftigung, Visa, Zulassung, Anerkennung oder beruflicher Lizenzierung.",

    panelLabel: "Hier starten",
    panelTitle: "Was führt Sie nach Deutschland?",

    routes: [
      {
        number: "01",
        title: "Privatpersonen",
        text:
          "Studium, Ausbildung, Qualifizierung und berufliche Wege.",
        href: "#germany-individuals",
      },
      {
        number: "02",
        title: "Gesundheitswesen",
        text:
          "Sprache, Anerkennung und berufliche Vorbereitung.",
        href: "/medical",
      },
      {
        number: "03",
        title: "Unternehmen",
        text:
          "Markteintritt, Partnerschaften und Expansion nach Deutschland.",
        href: "#germany-business-entry",
      },
      {
        number: "04",
        title: "Bildung",
        text:
          "Akademische, berufliche und institutionelle Zusammenarbeit.",
        href: "#germany-education-entry",
      },
    ],

    panelBottomLabel: "Deutschland-Fokus",

    panelBottomText:
      "Qualifizierung • Gesundheitswesen • Bildung • Wirtschaft • Training • Institutionelle Verbindungen",

    imageAlt:
      "Berliner Stadtbild als Symbol für die Deutschland-Wege von Western Bridge",
  },

  en: {
    eyebrow: "Western Bridge — Germany Desk",

    titleLineOne: "Germany Is Not",
    titleLineTwo: "One Path.",
    highlightedTitle: "It's a System.",

    description:
      "Western Bridge helps individuals, healthcare professionals, businesses, universities, and training institutions understand how to approach Germany with better preparation, clearer requirements, and the right institutional direction.",

    primaryButton: "Find Your Germany Route",
    secondaryButton: "Talk to Germany Desk",

    principle:
      "We focus on preparation and connection — not promises of employment, visas, admission, recognition, or licensing.",

    panelLabel: "Start Here",
    panelTitle: "What Brings You to Germany?",

    routes: [
      {
        number: "01",
        title: "Individuals",
        text:
          "Study, training, qualification and professional pathways.",
        href: "#germany-individuals",
      },
      {
        number: "02",
        title: "Healthcare",
        text:
          "Language, recognition and professional readiness.",
        href: "/medical",
      },
      {
        number: "03",
        title: "Business",
        text:
          "Market entry, partnerships and expansion into Germany.",
        href: "#germany-business-entry",
      },
      {
        number: "04",
        title: "Education",
        text:
          "Academic, training and institutional cooperation.",
        href: "#germany-education-entry",
      },
    ],

    panelBottomLabel: "Germany Focus",

    panelBottomText:
      "Qualification • Healthcare • Education • Business • Training • Institutional Connections",

    imageAlt:
      "Berlin cityscape representing Western Bridge Germany pathways",
  },

  ar: {
    eyebrow: "Western Bridge — مكتب ألمانيا",

    titleLineOne: "ألمانيا ليست",
    titleLineTwo: "مسارًا واحدًا.",
    highlightedTitle: "بل منظومة كاملة.",

    description:
      "تساعد Western Bridge الأفراد والمتخصصين في القطاع الطبي والشركات والجامعات والمؤسسات التدريبية على فهم كيفية التعامل مع ألمانيا باستعداد أفضل ومتطلبات أوضح وتوجيه مؤسسي مناسب.",

    primaryButton: "اعثر على مسارك نحو ألمانيا",
    secondaryButton: "تحدث مع مكتب ألمانيا",

    principle:
      "نركز على الاستعداد والربط والتوجيه — وليس على تقديم وعود بالتوظيف أو التأشيرات أو القبول أو الاعتراف أو الترخيص المهني.",

    panelLabel: "ابدأ من هنا",
    panelTitle: "ما الذي يقودك إلى ألمانيا؟",

    routes: [
      {
        number: "01",
        title: "الأفراد",
        text:
          "الدراسة والتدريب والتأهيل والمسارات المهنية.",
        href: "#germany-individuals",
      },
      {
        number: "02",
        title: "القطاع الصحي",
        text:
          "اللغة والاعتراف والجاهزية المهنية.",
        href: "/medical",
      },
      {
        number: "03",
        title: "الأعمال",
        text:
          "دخول السوق والشراكات والتوسع نحو ألمانيا.",
        href: "#germany-business-entry",
      },
      {
        number: "04",
        title: "التعليم",
        text:
          "التعاون الأكاديمي والتدريبي والمؤسسي.",
        href: "#germany-education-entry",
      },
    ],

    panelBottomLabel: "التركيز على ألمانيا",

    panelBottomText:
      "التأهيل • القطاع الصحي • التعليم • الأعمال • التدريب • العلاقات المؤسسية",

    imageAlt:
      "مشهد لمدينة برلين يرمز إلى مسارات Western Bridge نحو ألمانيا",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleLineOne: string;
    titleLineTwo: string;
    highlightedTitle: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    principle: string;
    panelLabel: string;
    panelTitle: string;
    routes: RouteItem[];
    panelBottomLabel: string;
    panelBottomText: string;
    imageAlt: string;
  }
>;

export default function GermanyHero() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section className={styles.hero}>
      <div className={styles.photo}>
        <Image
          src="/images/germany-hero.jpg"
          alt={t.imageAlt}
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />

        <div className={styles.overlay} />
      </div>

      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span
                className={styles.flag}
                aria-hidden="true"
              >
                <i />
                <i />
                <i />
              </span>

              {t.eyebrow}
            </div>

            <h1 className={styles.title}>
              {t.titleLineOne}
              <br />
              {t.titleLineTwo}
              <span> {t.highlightedTitle}</span>
            </h1>

            <p className={styles.description}>
              {t.description}
            </p>

            <div className={styles.actions}>
              <Link
                href="#germany-routes"
                className={styles.primaryButton}
              >
                {t.primaryButton}

                <span aria-hidden="true">↓</span>
              </Link>

              <Link
                href="/contact"
                className={styles.secondaryButton}
              >
                {t.secondaryButton}
              </Link>
            </div>

            <div className={styles.principle}>
              <span className={styles.principleLine} />

              <p>
                {t.principle}
              </p>
            </div>
          </div>

          <div
            id="germany-routes"
            className={styles.routePanel}
          >
            <div className={styles.panelHeader}>
              <div>
                <span className={styles.panelLabel}>
                  {t.panelLabel}
                </span>

                <h2 className={styles.panelTitle}>
                  {t.panelTitle}
                </h2>
              </div>

              <span className={styles.panelCode}>
                DE / WB
              </span>
            </div>

            <div className={styles.routes}>
              {t.routes.map((route) => (
                <Link
                  key={route.number}
                  href={route.href}
                  className={styles.route}
                >
                  <span className={styles.routeNumber}>
                    {route.number}
                  </span>

                  <div className={styles.routeContent}>
                    <h3>{route.title}</h3>
                    <p>{route.text}</p>
                  </div>

                  <span
                    className={styles.arrow}
                    aria-hidden="true"
                  >
                    {locale === "ar" ? "←" : "→"}
                  </span>
                </Link>
              ))}
            </div>

            <div className={styles.panelBottom}>
              <span className={styles.panelBottomLabel}>
                {t.panelBottomLabel}
              </span>

              <p>
                {t.panelBottomText}
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div
        className={styles.countryMark}
        aria-hidden="true"
      >
        DE
      </div>
    </section>
  );
}