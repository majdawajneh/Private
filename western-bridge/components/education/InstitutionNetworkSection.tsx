"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./InstitutionNetworkSection.module.css";

type Locale = "de" | "en" | "ar";

type CooperationArea = {
  number: string;
  label: string;
  title: string;
  text: string;
  type: string;
};

const content = {
  de: {
    backgroundWord: "PARTNER",

    eyebrow: "Hochschulen & Institutionen",

    titleBefore:
      "Bauen Sie Verbindungen im gesamten",
    highlightedTitle:
      "Bildungsökosystem auf",

    headerText:
      "Western Bridge unterstützt Bildungseinrichtungen dabei, internationale Zusammenarbeit, akademische Netzwerke, Trainingspartnerschaften, berufliche Verbindungen und neue Möglichkeiten zur institutionellen Entwicklung zu erkunden.",

    imageAlt:
      "Vertreter von Hochschulen und Bildungseinrichtungen im Gespräch über internationale akademische Zusammenarbeit",

    visualLabel:
      "Internationale akademische Zusammenarbeit",

    visualTitle:
      "Bildung wächst durch Verbindung",

    visualText:
      "Hochschulen und Bildungsorganisationen benötigen häufig Zugang zu neuen Netzwerken, Fachwissen, Institutionen, Märkten und Kooperationsmodellen. Western Bridge unterstützt dabei, diese Verbindungen strukturiert zu erkunden.",

    academicLabel:
      "Education Desk",

    academicTitle:
      "Institutionelle Zusammenarbeit",

    frameworkLabel:
      "Kooperationsrahmen",

    frameworkTitle:
      "Wo institutionelle Verbindungen beginnen können",

    frameworkText:
      "Die Struktur jedes Kooperationsprojekts ist unterschiedlich. Diese Bereiche stellen mögliche Ausgangspunkte dar, abhängig von den Zielen der beteiligten Institutionen.",

    cooperationAreas: [
      {
        number: "01",
        label: "Akademische Zusammenarbeit",
        title: "Hochschulverbindungen",
        text:
          "Erkunden Sie potenzielle Verbindungen zwischen Hochschulen, Colleges, Bildungsorganisationen und relevanten internationalen akademischen Netzwerken.",
        type: "Hochschulen",
      },
      {
        number: "02",
        label: "Trainingskooperation",
        title: "Trainings- & Bildungsanbieter",
        text:
          "Unterstützen Sie die Erkundung von Kooperationen zwischen Trainingszentren, Berufsbildungsanbietern, Fachakademien und Bildungseinrichtungen.",
        type: "Training",
      },
      {
        number: "03",
        label: "Programmentwicklung",
        title: "Akademische & berufliche Programme",
        text:
          "Erkunden Sie Möglichkeiten für gemeinsame Lerninitiativen, berufliche Programme, Trainingsprojekte und institutionelle Entwicklung.",
        type: "Programme",
      },
      {
        number: "04",
        label: "Internationales Networking",
        title: "Institutionelle Verbindungen",
        text:
          "Identifizieren Sie relevante Verbände, Bildungsnetzwerke, Berufsorganisationen und Institutionen, die internationale Zusammenarbeit unterstützen können.",
        type: "Netzwerke",
      },
      {
        number: "05",
        label: "Sektorale Zusammenarbeit",
        title: "Berufs- & Branchenorganisationen",
        text:
          "Erkunden Sie Beziehungen zwischen Bildungsanbietern und Berufs- oder Branchenorganisationen, wo Bildung und Fachkräfteentwicklung zusammenkommen.",
        type: "Beruflich",
      },
    ],

    ctaLabel:
      "Institutionelle Zusammenarbeit",

    ctaTitle:
      "Suchen Sie eine internationale Bildungsverbindung?",

    ctaText:
      "Beschreiben Sie Western Bridge Ihre Institution, die Art der angestrebten Zusammenarbeit, den Zielmarkt und die Organisationen, mit denen Sie in Kontakt treten möchten.",

    ctaButton:
      "Partnerschaft besprechen",

    logoAlt:
      "Western Bridge",
  },

  en: {
    backgroundWord: "PARTNERS",

    eyebrow: "Universities & Institutions",

    titleBefore:
      "Build Connections Across the",
    highlightedTitle:
      "Education Ecosystem",

    headerText:
      "Western Bridge supports educational institutions that want to explore international cooperation, academic networking, training partnerships, professional connections, and new institutional development opportunities.",

    imageAlt:
      "Representatives of universities and educational institutions discussing international academic cooperation",

    visualLabel:
      "International Academic Cooperation",

    visualTitle:
      "Education Grows Through Connection",

    visualText:
      "Universities and educational organizations often need access to new networks, expertise, institutions, markets, and cooperation models. Western Bridge helps explore those connections in a structured way.",

    academicLabel:
      "Education Desk",

    academicTitle:
      "Institutional Cooperation",

    frameworkLabel:
      "Cooperation Framework",

    frameworkTitle:
      "Where Institutional Connections Can Begin",

    frameworkText:
      "The structure of every cooperation project is different. These areas represent potential starting points based on the objectives of the institutions involved.",

    cooperationAreas: [
      {
        number: "01",
        label: "Academic Cooperation",
        title: "University Connections",
        text:
          "Explore potential connections between universities, colleges, educational organizations, and relevant international academic ecosystems.",
        type: "Universities",
      },
      {
        number: "02",
        label: "Training Cooperation",
        title: "Training & Education Providers",
        text:
          "Support the exploration of cooperation between training centers, vocational providers, professional academies, and educational institutions.",
        type: "Training",
      },
      {
        number: "03",
        label: "Program Development",
        title: "Academic & Professional Programs",
        text:
          "Explore opportunities for collaborative learning initiatives, professional programs, training projects, and institutional development.",
        type: "Programs",
      },
      {
        number: "04",
        label: "International Networking",
        title: "Institutional Connections",
        text:
          "Identify relevant associations, educational networks, professional bodies, and institutions that may support international cooperation.",
        type: "Networking",
      },
      {
        number: "05",
        label: "Sector Cooperation",
        title: "Professional & Industry Bodies",
        text:
          "Explore relationships between education providers and professional or industry organizations where academic and workforce development intersect.",
        type: "Professional",
      },
    ],

    ctaLabel:
      "Institutional Cooperation",

    ctaTitle:
      "Looking for an International Education Connection?",

    ctaText:
      "Tell Western Bridge about your institution, the type of cooperation you are exploring, the target market, and the organizations you would like to connect with.",

    ctaButton:
      "Discuss a Partnership",

    logoAlt:
      "Western Bridge",
  },

  ar: {
    backgroundWord: "شراكات",

    eyebrow: "الجامعات والمؤسسات",

    titleBefore:
      "ابنِ روابط عبر",
    highlightedTitle:
      "المنظومة التعليمية",

    headerText:
      "تدعم Western Bridge المؤسسات التعليمية التي ترغب في استكشاف التعاون الدولي والشبكات الأكاديمية والشراكات التدريبية والعلاقات المهنية وفرص التطوير المؤسسي.",

    imageAlt:
      "ممثلون عن جامعات ومؤسسات تعليمية يناقشون التعاون الأكاديمي الدولي",

    visualLabel:
      "التعاون الأكاديمي الدولي",

    visualTitle:
      "التعليم ينمو من خلال التواصل",

    visualText:
      "غالبًا ما تحتاج الجامعات والمؤسسات التعليمية إلى الوصول إلى شبكات وخبرات ومؤسسات وأسواق ونماذج تعاون جديدة. تساعد Western Bridge في استكشاف هذه الروابط بطريقة منظمة.",

    academicLabel:
      "مكتب التعليم",

    academicTitle:
      "التعاون المؤسسي",

    frameworkLabel:
      "إطار التعاون",

    frameworkTitle:
      "من أين يمكن أن تبدأ الروابط المؤسسية؟",

    frameworkText:
      "تختلف بنية كل مشروع تعاون عن الآخر. وتمثل هذه المجالات نقاط بداية محتملة وفق أهداف المؤسسات المشاركة.",

    cooperationAreas: [
      {
        number: "01",
        label: "التعاون الأكاديمي",
        title: "التواصل مع الجامعات",
        text:
          "استكشف روابط محتملة بين الجامعات والكليات والمؤسسات التعليمية والشبكات الأكاديمية الدولية ذات الصلة.",
        type: "جامعات",
      },
      {
        number: "02",
        label: "التعاون التدريبي",
        title: "مقدمو التدريب والتعليم",
        text:
          "استكشف التعاون بين مراكز التدريب ومقدمي التدريب المهني والأكاديميات المتخصصة والمؤسسات التعليمية.",
        type: "تدريب",
      },
      {
        number: "03",
        label: "تطوير البرامج",
        title: "البرامج الأكاديمية والمهنية",
        text:
          "استكشف فرص المبادرات التعليمية المشتركة والبرامج المهنية ومشاريع التدريب والتطوير المؤسسي.",
        type: "برامج",
      },
      {
        number: "04",
        label: "بناء الشبكات الدولية",
        title: "الروابط المؤسسية",
        text:
          "حدد الجمعيات والشبكات التعليمية والهيئات المهنية والمؤسسات ذات الصلة التي قد تدعم التعاون الدولي.",
        type: "شبكات",
      },
      {
        number: "05",
        label: "التعاون القطاعي",
        title: "الهيئات المهنية والقطاعية",
        text:
          "استكشف العلاقات بين مقدمي التعليم والمنظمات المهنية أو القطاعية في المجالات التي يلتقي فيها التعليم مع تطوير القوى العاملة.",
        type: "مهني",
      },
    ],

    ctaLabel:
      "التعاون المؤسسي",

    ctaTitle:
      "هل تبحث عن شراكة تعليمية دولية؟",

    ctaText:
      "أخبر Western Bridge عن مؤسستك، ونوع التعاون الذي تستكشفه، والسوق المستهدف، والجهات التي ترغب في بناء علاقات معها.",

    ctaButton:
      "ناقش شراكة",

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
    headerText: string;
    imageAlt: string;
    visualLabel: string;
    visualTitle: string;
    visualText: string;
    academicLabel: string;
    academicTitle: string;
    frameworkLabel: string;
    frameworkTitle: string;
    frameworkText: string;
    cooperationAreas: CooperationArea[];
    ctaLabel: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    logoAlt: string;
  }
>;

export default function InstitutionNetworkSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section
      id="institution-network"
      className={styles.section}
    >
      <span
        className={styles.backgroundWord}
        aria-hidden="true"
      >
        {t.backgroundWord}
      </span>

      <Container>
        <div className={styles.header}>
          <div>
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
          </div>

          <p className={styles.headerText}>
            {t.headerText}
          </p>
        </div>

        <div className={styles.visual}>
          <Image
            src="/images/education-institution-network.jpg"
            alt={t.imageAlt}
            fill
            sizes="100vw"
            className={styles.image}
          />

          <div className={styles.overlay} />

          <div className={styles.visualContent}>
            <span className={styles.visualLabel}>
              {t.visualLabel}
            </span>

            <h3 className={styles.visualTitle}>
              {t.visualTitle}
            </h3>

            <p className={styles.visualText}>
              {t.visualText}
            </p>
          </div>

          <div className={styles.academicTag}>
            <div className={styles.academicLogo}>
              <Image
                src="/logo/western-bridge-mark.jpeg"
                alt={t.logoAlt}
                width={44}
                height={44}
                className={styles.academicLogoImage}
              />
            </div>

            <div>
              <span className={styles.academicLabel}>
                {t.academicLabel}
              </span>

              <div className={styles.academicTitle}>
                {t.academicTitle}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.framework}>
          <div className={styles.index}>
            <span className={styles.indexLabel}>
              {t.frameworkLabel}
            </span>

            <h3 className={styles.indexTitle}>
              {t.frameworkTitle}
            </h3>

            <p className={styles.indexText}>
              {t.frameworkText}
            </p>
          </div>

          <div className={styles.rows}>
            {t.cooperationAreas.map((area) => (
              <article
                key={area.number}
                className={styles.row}
              >
                <span className={styles.rowNumber}>
                  {area.number}
                </span>

                <div>
                  <span className={styles.rowLabel}>
                    {area.label}
                  </span>

                  <h3 className={styles.rowTitle}>
                    {area.title}
                  </h3>

                  <p className={styles.rowText}>
                    {area.text}
                  </p>
                </div>

                <span className={styles.type}>
                  {area.type}
                </span>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.cta}>
          <div>
            <span className={styles.ctaLabel}>
              {t.ctaLabel}
            </span>

            <h3 className={styles.ctaTitle}>
              {t.ctaTitle}
            </h3>

            <p className={styles.ctaText}>
              {t.ctaText}
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.ctaButton}
          >
            {t.ctaButton}

            <span aria-hidden="true">
              {locale === "ar" ? "←" : "→"}
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}