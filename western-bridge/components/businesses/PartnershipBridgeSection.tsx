"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./PartnershipBridgeSection.module.css";

type Locale = "de" | "en" | "ar";

type EcosystemNode = {
  title: string;
  text: string;
};

const content = {
  de: {
    backgroundWord: "VERBINDEN",

    eyebrow:
      "Partnerschaften & Networking",

    titleBefore:
      "Wachstum hängt oft davon ab,",
    highlightedTitle:
      "wen Sie erreichen können",

    description:
      "Internationale Expansion bedeutet nicht nur, einen Markt zu betreten. Es geht auch darum, das Ökosystem rund um diesen Markt zu verstehen und relevante Institutionen, Netzwerke, Partner und Kanäle zu identifizieren, die Ihre Geschäftsziele unterstützen können.",

    startingPointLabel:
      "Ausgangspunkt",

    startingPointTitle:
      "Ihr Unternehmen",

    startingPointText:
      "Ihre Ziele, Fähigkeiten, Branche und Ihr Zielmarkt.",

    internationalSideLabel:
      "Internationale Seite",

    internationalSideTitle:
      "Marktökosystem",

    internationalSideText:
      "Institutionen, Netzwerke, Expertise und relevante Geschäftskanäle.",

    ecosystemNodes: [
      {
        title: "Institutionen",
        text:
          "Relevante Organisationen, Verbände und Marktinstitutionen.",
      },
      {
        title: "Branchennetzwerke",
        text:
          "Sektorale Communities und professionelle Geschäftsökosysteme.",
      },
      {
        title: "Training & Expertise",
        text:
          "Spezialisiertes Wissen, Kompetenzentwicklung und Vorbereitung.",
      },
      {
        title: "Strategische Partner",
        text:
          "Potenzielle Kooperationen und Beziehungen zur Geschäftsentwicklung.",
      },
      {
        title: "Marktkanäle",
        text:
          "Relevante kommerzielle und internationale Expansionskanäle.",
      },
    ],

    connectionLabel:
      "Verbindungsebene",

    connectionTitle:
      "Western Bridge",

    connectionText:
      "Wir unterstützen Unternehmen dabei, relevante Ökosysteme zu verstehen und passende strategische Verbindungen zu erkunden.",

    bottomText:
      "Western Bridge unterstützt die Erkundung von Partnerschaften und internationales Networking entsprechend den Anforderungen jedes Unternehmens. Verfügbarkeit, Eignung und Ergebnis einer Partnerschaft hängen von den unabhängigen Entscheidungen der beteiligten Organisationen ab.",

    button:
      "Partnerschaften erkunden",

    logoAlt:
      "Western Bridge",
  },

  en: {
    backgroundWord: "CONNECT",

    eyebrow:
      "Partnership & Networking",

    titleBefore:
      "Growth Often Depends on",
    highlightedTitle:
      "Who You Can Reach",

    description:
      "International expansion is not only about entering a market. It is also about understanding the ecosystem around that market and identifying the institutions, networks, partners, and channels that may support your business objectives.",

    startingPointLabel:
      "Starting Point",

    startingPointTitle:
      "Your Business",

    startingPointText:
      "Your goals, capabilities, sector, and target market.",

    internationalSideLabel:
      "International Side",

    internationalSideTitle:
      "Market Ecosystem",

    internationalSideText:
      "Institutions, networks, expertise, and relevant business channels.",

    ecosystemNodes: [
      {
        title: "Institutions",
        text:
          "Relevant organizations, associations, and market institutions.",
      },
      {
        title: "Industry Networks",
        text:
          "Sector communities and professional business ecosystems.",
      },
      {
        title: "Training & Expertise",
        text:
          "Specialized knowledge, capability development, and preparation.",
      },
      {
        title: "Strategic Partners",
        text:
          "Potential collaboration and business-development relationships.",
      },
      {
        title: "Market Channels",
        text:
          "Relevant commercial and international expansion channels.",
      },
    ],

    connectionLabel:
      "Connection Layer",

    connectionTitle:
      "Western Bridge",

    connectionText:
      "Helping businesses understand relevant ecosystems and explore strategic connections where appropriate.",

    bottomText:
      "Western Bridge supports partnership exploration and international networking based on the needs of each business. The availability, suitability, and outcome of any partnership depend on the independent decisions of the organizations involved.",

    button:
      "Explore Partnerships",

    logoAlt:
      "Western Bridge",
  },

  ar: {
    backgroundWord: "تواصل",

    eyebrow:
      "الشراكات وبناء العلاقات",

    titleBefore:
      "النمو يعتمد كثيرًا على",
    highlightedTitle:
      "من تستطيع الوصول إليه",

    description:
      "التوسع الدولي لا يتعلق فقط بدخول سوق جديد، بل بفهم المنظومة المحيطة بذلك السوق وتحديد المؤسسات والشبكات والشركاء والقنوات التي قد تدعم أهداف عملك.",

    startingPointLabel:
      "نقطة البداية",

    startingPointTitle:
      "شركتك",

    startingPointText:
      "أهدافك وقدراتك وقطاعك والسوق الذي تستهدفه.",

    internationalSideLabel:
      "الجانب الدولي",

    internationalSideTitle:
      "منظومة السوق",

    internationalSideText:
      "المؤسسات والشبكات والخبرات وقنوات الأعمال ذات الصلة.",

    ecosystemNodes: [
      {
        title: "المؤسسات",
        text:
          "المؤسسات والجمعيات والجهات ذات الصلة بالسوق.",
      },
      {
        title: "شبكات القطاعات",
        text:
          "المجتمعات القطاعية ومنظومات الأعمال المهنية.",
      },
      {
        title: "التدريب والخبرة",
        text:
          "المعرفة المتخصصة وتطوير القدرات والاستعداد.",
      },
      {
        title: "الشركاء الاستراتيجيون",
        text:
          "علاقات محتملة للتعاون وتطوير الأعمال.",
      },
      {
        title: "قنوات السوق",
        text:
          "القنوات التجارية وقنوات التوسع الدولي ذات الصلة.",
      },
    ],

    connectionLabel:
      "طبقة الربط",

    connectionTitle:
      "Western Bridge",

    connectionText:
      "مساعدة الشركات على فهم المنظومات ذات الصلة واستكشاف الروابط الاستراتيجية المناسبة.",

    bottomText:
      "تدعم Western Bridge استكشاف الشراكات وبناء العلاقات الدولية بحسب احتياجات كل شركة. وتبقى إمكانية الشراكة ومدى ملاءمتها ونتائجها مرتبطة بالقرارات المستقلة للجهات والمؤسسات المشاركة.",

    button:
      "استكشف الشراكات",

    logoAlt:
      "Western Bridge",
  },
} satisfies Record<
  Locale,
  {
    backgroundWord: string;
    eyebrow: string;
    titleBefore: string;
    highlightedTitle: string;
    description: string;
    startingPointLabel: string;
    startingPointTitle: string;
    startingPointText: string;
    internationalSideLabel: string;
    internationalSideTitle: string;
    internationalSideText: string;
    ecosystemNodes: EcosystemNode[];
    connectionLabel: string;
    connectionTitle: string;
    connectionText: string;
    bottomText: string;
    button: string;
    logoAlt: string;
  }
>;

export default function PartnershipBridgeSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
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

        <div className={styles.bridgeStage}>
          <div
            className={styles.grid}
            aria-hidden="true"
          />

          <span
            className={styles.backgroundWord}
            aria-hidden="true"
          >
            {t.backgroundWord}
          </span>

          <div className={styles.endpoints}>
            <div className={styles.endpoint}>
              <span className={styles.endpointLabel}>
                {t.startingPointLabel}
              </span>

              <h3 className={styles.endpointTitle}>
                {t.startingPointTitle}
              </h3>

              <p className={styles.endpointText}>
                {t.startingPointText}
              </p>
            </div>

            <div className={styles.endpoint}>
              <span className={styles.endpointLabel}>
                {t.internationalSideLabel}
              </span>

              <h3 className={styles.endpointTitle}>
                {t.internationalSideTitle}
              </h3>

              <p className={styles.endpointText}>
                {t.internationalSideText}
              </p>
            </div>
          </div>

          <div className={styles.bridge}>
            <span
              className={styles.deck}
              aria-hidden="true"
            />

            <span
              className={styles.pylonLeft}
              aria-hidden="true"
            />

            <span
              className={styles.pylonRight}
              aria-hidden="true"
            />

            <span
              className={`${styles.cable} ${styles.cableOne}`}
              aria-hidden="true"
            />

            <span
              className={`${styles.cable} ${styles.cableTwo}`}
              aria-hidden="true"
            />

            <span
              className={`${styles.cable} ${styles.cableThree}`}
              aria-hidden="true"
            />

            <span
              className={`${styles.cable} ${styles.cableFour}`}
              aria-hidden="true"
            />

            <div className={styles.nodes}>
              {t.ecosystemNodes.map((node) => (
                <div
                  key={node.title}
                  className={styles.node}
                >
                  <span className={styles.nodeDot} />

                  <h4 className={styles.nodeTitle}>
                    {node.title}
                  </h4>

                  <p className={styles.nodeText}>
                    {node.text}
                  </p>
                </div>
              ))}
            </div>

            <div className={styles.connectionLayer}>
              <div className={styles.connectionIdentity}>
                <div className={styles.connectionLogo}>
                  <Image
                    src="/logo/western-bridge-mark.jpeg"
                    alt={t.logoAlt}
                    width={44}
                    height={44}
                    className={styles.connectionLogoImage}
                  />
                </div>

                <div>
                  <span className={styles.connectionLabel}>
                    {t.connectionLabel}
                  </span>

                  <div className={styles.connectionTitle}>
                    {t.connectionTitle}
                  </div>
                </div>
              </div>

              <p className={styles.connectionText}>
                {t.connectionText}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.bottomText}>
            {t.bottomText}
          </p>

          <Link
            href="/contact"
            className={styles.button}
          >
            {t.button}

            <span aria-hidden="true">
              {locale === "ar" ? "←" : "→"}
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}