"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./AboutPurposeSection.module.css";

type Locale = "de" | "en" | "ar";

type BridgeLogicItem = {
  number: string;
  label: string;
  title: string;
  text: string;
};

const content = {
  de: {
    imageAlt:
      "Moderne europäische Brücke als Symbol für internationale Verbindung und Bewegung",

    imageTopLeft:
      "WESTERN",

    imageTopRight:
      "BRIDGE",

    imageLabel:
      "Warum der Name wichtig ist",

    imageTitle:
      "Eine Brücke ersetzt keine Seite. Sie macht die Verbindung möglich.",

    origin:
      "Jordanien",

    destination:
      "Internationale Märkte",

    eyebrow:
      "Warum Western Bridge existiert",

    titleBefore:
      "Das Problem ist oft",
    highlightedTitle:
      "nicht der Ehrgeiz.",

    lead:
      "Es ist die Distanz zwischen Ambition und einem realistischen Weg.",

    copyOne:
      "Eine Fachkraft möchte vielleicht eine Zukunft in Deutschland aufbauen. Ein Unternehmen möchte Zugang zu einem neuen Markt. Eine Hochschule sucht möglicherweise eine internationale institutionelle Kooperation. Eine Gesundheitsfachkraft muss vielleicht Anerkennungs- und Zulassungsanforderungen verstehen.",

    copyTwo:
      "Jedes Ziel ist anders, aber die Lücke ist oft dieselbe: fragmentierte Informationen, unklare Anforderungen, voneinander getrennte Dienstleister und keine gemeinsame Struktur, die Vorbereitung mit dem nächsten Schritt verbindet.",

    statement:
      "Western Bridge wurde genau für diese Lücke geschaffen.",

    copyThree:
      "Unsere Aufgabe ist es, relevante Elemente zusammenzuführen – Beratung, Vorbereitung, Qualifizierung, Training, Recherche, Technologie, Dokumentation und internationale Verbindungen – ohne so zu tun, als würde eine einzige Lösung zu jedem Kunden passen.",

    link:
      "Sehen Sie, wie unsere Leistungen zusammenwirken",

    logicLabel:
      "DAS BRÜCKENMODELL",

    logicTitle:
      "Was liegt zwischen einem Ziel und dem nächsten realistischen Schritt?",

    bridgeLogic: [
      {
        number: "01",
        label: "Die Lücke",
        title:
          "Die Möglichkeit ist vorhanden, aber der Weg ist oft unklar.",
        text:
          "Menschen und Organisationen wissen möglicherweise, wohin sie möchten, aber nicht, welche Anforderungen, Institutionen, Dokumente, Märkte oder Vorbereitungsschritte tatsächlich relevant sind.",
      },
      {
        number: "02",
        label: "Die Vorbereitung",
        title:
          "Auch gute Möglichkeiten erfordern Bereitschaft.",
        text:
          "Sprache, Qualifikationen, berufliche Dokumente, Marktkenntnisse, Training, Recherche und organisatorische Vorbereitung können darüber entscheiden, ob der nächste Schritt realistisch ist.",
      },
      {
        number: "03",
        label: "Die Verbindung",
        title:
          "Die richtige Verbindung ist wichtiger als ein zufälliger Kontakt.",
        text:
          "Western Bridge konzentriert sich auf relevante Institutionen, professionelle Ökosysteme, Bildungsanbieter, Geschäftsnetzwerke und internationale Beziehungen.",
      },
      {
        number: "04",
        label: "Die Richtung",
        title:
          "Der Kunde sollte wissen, was als Nächstes kommt.",
        text:
          "Unsere Arbeit soll dem Kunden einen klareren Weg, bessere Vorbereitung und ein stärkeres Verständnis für den nächsten verantwortungsvollen Schritt geben.",
      },
    ],
  },

  en: {
    imageAlt:
      "Modern European bridge representing international connection and movement",

    imageTopLeft:
      "WESTERN",

    imageTopRight:
      "BRIDGE",

    imageLabel:
      "Why the Name Matters",

    imageTitle:
      "A bridge does not replace either side. It makes the connection possible.",

    origin:
      "Jordan",

    destination:
      "International Markets",

    eyebrow:
      "Why Western Bridge Exists",

    titleBefore:
      "The Problem Is Often",
    highlightedTitle:
      "Not the Ambition.",

    lead:
      "It is the distance between ambition and a realistic route.",

    copyOne:
      "A professional may want to build a future in Germany. A company may want access to a new market. A university may want an international institutional relationship. A healthcare professional may need to understand recognition and licensing.",

    copyTwo:
      "Each objective is different, but the gap is often the same: fragmented information, unclear requirements, disconnected service providers, and no single structure connecting preparation with the next step.",

    statement:
      "Western Bridge was created around that gap.",

    copyThree:
      "Our role is to bring the relevant parts together — consulting, preparation, qualification, training, research, technology, documentation, and international connections — without pretending that one solution fits every client.",

    link:
      "See How Our Services Connect",

    logicLabel:
      "THE BRIDGE MODEL",

    logicTitle:
      "What sits between an objective and a real next step?",

    bridgeLogic: [
      {
        number: "01",
        label: "The Gap",
        title:
          "Opportunity exists, but the route is often unclear.",
        text:
          "People and organizations may know where they want to go, but not which requirements, institutions, documents, markets, or preparation steps actually matter.",
      },
      {
        number: "02",
        label: "The Preparation",
        title:
          "Good opportunities still require readiness.",
        text:
          "Language, qualifications, professional documents, market knowledge, training, research, and organizational preparation can determine whether the next step is realistic.",
      },
      {
        number: "03",
        label: "The Connection",
        title:
          "The right connection matters more than a random introduction.",
        text:
          "Western Bridge focuses on relevant institutions, professional ecosystems, education providers, business networks, and international relationships.",
      },
      {
        number: "04",
        label: "The Direction",
        title:
          "The client should know what comes next.",
        text:
          "Our work is designed to leave the client with a clearer route, stronger preparation, and a better understanding of the next responsible step.",
      },
    ],
  },

  ar: {
    imageAlt:
      "جسر أوروبي حديث يرمز إلى الترابط والحركة الدولية",

    imageTopLeft:
      "WESTERN",

    imageTopRight:
      "BRIDGE",

    imageLabel:
      "لماذا الاسم مهم",

    imageTitle:
      "الجسر لا يستبدل أي طرف، بل يجعل الاتصال بينهما ممكنًا.",

    origin:
      "الأردن",

    destination:
      "الأسواق الدولية",

    eyebrow:
      "لماذا وُجدت Western Bridge",

    titleBefore:
      "المشكلة غالبًا ليست",
    highlightedTitle:
      "في الطموح.",

    lead:
      "بل في المسافة بين الطموح والمسار الواقعي.",

    copyOne:
      "قد يرغب شخص مهني في بناء مستقبله في ألمانيا، وقد تسعى شركة إلى دخول سوق جديد، وقد تبحث جامعة عن علاقة مؤسسية دولية، وقد يحتاج متخصص في القطاع الصحي إلى فهم متطلبات الاعتراف والترخيص.",

    copyTwo:
      "تختلف الأهداف، لكن الفجوة غالبًا متشابهة: معلومات متفرقة، متطلبات غير واضحة، جهات خدمة منفصلة، وعدم وجود هيكل واحد يربط الاستعداد بالخطوة التالية.",

    statement:
      "أنشئت Western Bridge لمعالجة هذه الفجوة.",

    copyThree:
      "دورنا هو جمع العناصر ذات الصلة معًا — الاستشارات والاستعداد والتأهيل والتدريب والبحث والتكنولوجيا والتوثيق والروابط الدولية — من دون افتراض أن حلًا واحدًا يناسب كل عميل.",

    link:
      "اكتشف كيف تترابط خدماتنا",

    logicLabel:
      "نموذج الجسر",

    logicTitle:
      "ما الذي يفصل بين الهدف والخطوة الواقعية التالية؟",

    bridgeLogic: [
      {
        number: "01",
        label: "الفجوة",
        title:
          "الفرصة قد تكون موجودة، لكن المسار غير واضح.",
        text:
          "قد يعرف الأفراد والمؤسسات أين يريدون الوصول، لكنهم قد لا يعرفون أي متطلبات أو جهات أو وثائق أو أسواق أو خطوات استعداد هي المهمة فعليًا.",
      },
      {
        number: "02",
        label: "الاستعداد",
        title:
          "حتى الفرص الجيدة تحتاج إلى جاهزية.",
        text:
          "اللغة والمؤهلات والوثائق المهنية وفهم السوق والتدريب والبحث والاستعداد المؤسسي قد تحدد ما إذا كانت الخطوة التالية واقعية.",
      },
      {
        number: "03",
        label: "الربط",
        title:
          "الاتصال الصحيح أهم من مجرد تعريف عشوائي.",
        text:
          "تركز Western Bridge على المؤسسات ذات الصلة والمنظومات المهنية والجهات التعليمية وشبكات الأعمال والعلاقات الدولية المناسبة.",
      },
      {
        number: "04",
        label: "الاتجاه",
        title:
          "يجب أن يعرف العميل ما هي الخطوة التالية.",
        text:
          "هدف عملنا هو أن يخرج العميل بمسار أوضح واستعداد أقوى وفهم أفضل للخطوة المسؤولة التالية.",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    imageAlt: string;
    imageTopLeft: string;
    imageTopRight: string;
    imageLabel: string;
    imageTitle: string;
    origin: string;
    destination: string;
    eyebrow: string;
    titleBefore: string;
    highlightedTitle: string;
    lead: string;
    copyOne: string;
    copyTwo: string;
    statement: string;
    copyThree: string;
    link: string;
    logicLabel: string;
    logicTitle: string;
    bridgeLogic: BridgeLogicItem[];
  }
>;

export default function AboutPurposeSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section
      id="why-western-bridge"
      className={styles.section}
    >
      <Container>
        <div className={styles.layout}>
          <div className={styles.visualColumn}>
            <div className={styles.visual}>
              <Image
                src="/images/about-bridge.jpg"
                alt={t.imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
                className={styles.image}
              />

              <div className={styles.overlay} />

              <div className={styles.imageTop}>
                <span>
                  {t.imageTopLeft}
                </span>

                <span>
                  {t.imageTopRight}
                </span>
              </div>

              <div className={styles.imageContent}>
                <span className={styles.imageLabel}>
                  {t.imageLabel}
                </span>

                <h3>
                  {t.imageTitle}
                </h3>
              </div>
            </div>

            <div className={styles.visualFoot}>
              <span>
                {t.origin}
              </span>

              <div className={styles.routeLine}>
                <span />
              </div>

              <strong>
                {t.destination}
              </strong>
            </div>
          </div>

          <div className={styles.story}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {t.eyebrow}
            </div>

            <h2 className={styles.title}>
              {t.titleBefore}<br/>

              <span>
                {t.highlightedTitle}
              </span>
            </h2>

            <p className={styles.lead}>
              {t.lead}
            </p>

            <p className={styles.copy}>
              {t.copyOne}
            </p>

            <p className={styles.copy}>
              {t.copyTwo}
            </p>

            <blockquote className={styles.statement}>
              {t.statement}
            </blockquote>

            <p className={styles.copy}>
              {t.copyThree}
            </p>

            <Link
              href="/services"
              className={styles.link}
            >
              {t.link}

              <span aria-hidden="true">
                {locale === "ar" ? "←" : "→"}
              </span>
            </Link>
          </div>
        </div>

        <div className={styles.logic}>
          <div className={styles.logicIntro}>
            <span>
              {t.logicLabel}
            </span>

            <h3>
              {t.logicTitle}
            </h3>
          </div>

          <div className={styles.logicFlow}>
            {t.bridgeLogic.map((item) => (
              <article
                key={item.number}
                className={styles.logicItem}
              >
                <div className={styles.logicHead}>
                  <span className={styles.number}>
                    {item.number}
                  </span>

                  <span className={styles.logicLabel}>
                    {item.label}
                  </span>
                </div>

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}