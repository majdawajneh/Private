"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./AboutHero.module.css";

type Locale = "de" | "en" | "ar";

type Principle = {
  number: string;
  title: string;
  text: string;
};

const content = {
  de: {
    eyebrow: "Über Western Bridge",

    titleBefore: "Entwickelt, um internationale",
    highlightedTitle: "Schritte klarer zu strukturieren.",

    lead:
      "Western Bridge ist eine internationale Beratungs- und Entwicklungsplattform, die Menschen, Unternehmen, Gesundheitsfachkräfte, Bildungseinrichtungen und Organisationen dabei unterstützt, klarere Wege nach Deutschland und in weitere internationale Märkte zu verstehen und vorzubereiten.",

    secondary:
      "Unsere Aufgabe besteht nicht darin, Abkürzungen zu verkaufen. Wir verstehen zunächst das Ziel, identifizieren relevante Anforderungen, bereiten den Kunden strukturiert vor und unterstützen sinnvolle Verbindungen und nächste Schritte.",

    primaryButton: "So arbeiten wir",
    secondaryButton: "Western Bridge kontaktieren",

    imageAlt:
      "Internationale Fachkräfte im Gespräch über grenzüberschreitende Zusammenarbeit",

    imageLabel: "Western Bridge",

    imageTitle:
      "Zwischen Vorbereitung und Gelegenheit braucht es einen klaren Weg.",

    positionLabel: "Unsere Position",

    positionLineOne: "Keine Personalvermittlung.",
    positionLineTwo: "Kein Reisebüro.",
    positionStrong: "Eine internationale Brücke.",

    principles: [
      {
        number: "01",
        title: "Zuerst verstehen",
        text:
          "Wir beginnen mit dem tatsächlichen Ziel, dem Kontext, den Anforderungen und den bestehenden Rahmenbedingungen.",
      },
      {
        number: "02",
        title: "Richtig vorbereiten",
        text:
          "Sprache, Dokumente, Qualifikationen, Marktkenntnis und Bereitschaft kommen vor dem nächsten Schritt.",
      },
      {
        number: "03",
        title: "Gezielt verbinden",
        text:
          "Institutionen, Märkte, Fachkräfte und Organisationen werden dann einbezogen, wenn eine Verbindung sinnvoll und relevant ist.",
      },
    ],
  },

  en: {
    eyebrow: "About Western Bridge",

    titleBefore: "Built to Make International",
    highlightedTitle: "Moves More Structured.",

    lead:
      "Western Bridge is an international consulting and development platform connecting people, businesses, healthcare professionals, educational institutions, and organizations with clearer pathways toward Germany and wider international markets.",

    secondary:
      "Our role is not to sell shortcuts. It is to understand the objective, identify what is required, prepare the client properly, and support the connections and next steps that make sense.",

    primaryButton: "How We Work",
    secondaryButton: "Contact Western Bridge",

    imageAlt:
      "International professionals discussing cross-border cooperation",

    imageLabel: "Western Bridge",

    imageTitle:
      "Between preparation and opportunity, there has to be a clear route.",

    positionLabel: "Our Position",

    positionLineOne: "Not a recruitment agency.",
    positionLineTwo: "Not a travel office.",
    positionStrong: "An international bridge.",

    principles: [
      {
        number: "01",
        title: "Understand First",
        text:
          "We begin with the real objective, context, requirements, and constraints.",
      },
      {
        number: "02",
        title: "Prepare Properly",
        text:
          "Language, documents, qualifications, market knowledge, and readiness come before action.",
      },
      {
        number: "03",
        title: "Connect With Purpose",
        text:
          "Institutions, markets, professionals, and organizations are approached when the connection makes sense.",
      },
    ],
  },

  ar: {
    eyebrow: "عن Western Bridge",

    titleBefore: "أُنشئت لجعل الخطوات الدولية",
    highlightedTitle: "أكثر وضوحًا وتنظيمًا.",

    lead:
      "Western Bridge هي منصة دولية للاستشارات والتطوير تساعد الأفراد والشركات والمتخصصين في القطاع الصحي والمؤسسات التعليمية والجهات المختلفة على فهم مسارات أوضح نحو ألمانيا والأسواق الدولية الأخرى والاستعداد لها.",

    secondary:
      "دورنا ليس بيع الطرق المختصرة، بل فهم الهدف أولًا، وتحديد المتطلبات ذات الصلة، وإعداد العميل بشكل منظم، ودعم الروابط والخطوات التالية عندما تكون مناسبة.",

    primaryButton: "كيف نعمل",
    secondaryButton: "تواصل مع Western Bridge",

    imageAlt:
      "مهنيون دوليون يناقشون التعاون عبر الحدود",

    imageLabel: "Western Bridge",

    imageTitle:
      "بين الاستعداد والفرصة يجب أن يكون هناك مسار واضح.",

    positionLabel: "موقعنا ودورنا",

    positionLineOne: "لسنا وكالة توظيف.",
    positionLineTwo: "ولسنا مكتب سفر.",
    positionStrong: "نحن جسر دولي.",

    principles: [
      {
        number: "01",
        title: "نفهم أولًا",
        text:
          "نبدأ بالهدف الحقيقي والسياق والمتطلبات والقيود الموجودة.",
      },
      {
        number: "02",
        title: "نُعدّ بشكل صحيح",
        text:
          "اللغة والوثائق والمؤهلات وفهم السوق والجاهزية تأتي قبل اتخاذ الخطوة التالية.",
      },
      {
        number: "03",
        title: "نربط بهدف واضح",
        text:
          "يتم التواصل مع المؤسسات والأسواق والمتخصصين والجهات عندما تكون العلاقة منطقية وذات صلة بالهدف.",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleBefore: string;
    highlightedTitle: string;
    lead: string;
    secondary: string;
    primaryButton: string;
    secondaryButton: string;
    imageAlt: string;
    imageLabel: string;
    imageTitle: string;
    positionLabel: string;
    positionLineOne: string;
    positionLineTwo: string;
    positionStrong: string;
    principles: Principle[];
  }
>;

export default function AboutHero() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {t.eyebrow}
            </div>

            <h1 className={styles.title}>
              {t.titleBefore}
              <span>
                {t.highlightedTitle}
              </span>
            </h1>

            <p className={styles.lead}>
              {t.lead}
            </p>

            <p className={styles.secondary}>
              {t.secondary}
            </p>

            <div className={styles.actions}>
              <Link
                href="#our-position"
                className={styles.primaryButton}
              >
                {t.primaryButton}

                <span aria-hidden="true">
                  ↓
                </span>
              </Link>

              <Link
                href="/contact"
                className={styles.secondaryButton}
              >
                {t.secondaryButton}
              </Link>
            </div>
          </div>

          <div className={styles.visual}>
            <Image
              src="/images/about-hero.jpg"
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

              <h2>
                {t.imageTitle}
              </h2>
            </div>
          </div>
        </div>

        <div
          id="our-position"
          className={styles.position}
        >
          <div className={styles.positionIntro}>
            <span className={styles.positionLabel}>
              {t.positionLabel}
            </span>

            <h2>
              {t.positionLineOne}
              <br />

              {t.positionLineTwo}
              <br />

              <strong>
                {t.positionStrong}
              </strong>
            </h2>
          </div>

          <div className={styles.principles}>
            {t.principles.map((principle) => (
              <article
                key={principle.number}
                className={styles.principle}
              >
                <span className={styles.number}>
                  {principle.number}
                </span>

                <h3>
                  {principle.title}
                </h3>

                <p>
                  {principle.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}