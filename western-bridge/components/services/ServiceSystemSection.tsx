"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./ServiceSystemSection.module.css";

type Locale = "de" | "en" | "ar";

type Division = {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  services: string[];
  href: string;
};

const content = {
  de: {
    eyebrow:
      "So sind unsere Leistungen strukturiert",

    titleLineOne:
      "Ein Unternehmen.",

    titleLineTwo:
      "Vier Leistungsbereiche.",

    intro:
      "Western Bridge verbindet unterschiedliche Kompetenzen innerhalb einer gemeinsamen Struktur. Ausgangspunkt ist das Ziel des Kunden. Darauf aufbauend werden Beratung, Vorbereitung, Training, Recherche, Technologie oder Networking passend kombiniert.",

    visualAlt:
      "Internationales Beratungsteam bei der Analyse von Strategie und Kundenanforderungen",

    visualLabel:
      "Western Bridge Servicemodell",

    visualTitle:
      "Beginnen Sie mit dem Bedarf. Stellen Sie die passende Kombination von Leistungen darum zusammen.",

    scopeNumber:
      "360°",

    scopeTitle:
      "Integrierte Unterstützung",

    scopeText:
      "Beratung, Vorbereitung, Training, Recherche, Technologie und Verbindungen können gemeinsam eingesetzt werden, wenn das Projekt dies erfordert.",

    divisionLink:
      "Leistungsbereich ansehen",

    divisions: [
      {
        id: "individual-services",
        number: "01",
        label: "Privatpersonen",
        title:
          "Internationale Wege & berufliche Vorbereitung",
        description:
          "Für Personen, die einen strukturierten Weg in Richtung Bildung, Training, Qualifizierung, berufliche Entwicklung oder internationale Möglichkeiten benötigen.",
        services: [
          "Analyse möglicher Wege",
          "Bildungs- & Trainingsorientierung",
          "Planung der Sprachvorbereitung",
          "Qualifikations- & Dokumentenbereitschaft",
          "Vorbereitung des beruflichen Profils",
          "Deutschland-orientierte Beratung",
        ],
        href: "/individuals",
      },
      {
        id: "medical-services",
        number: "02",
        label: "Gesundheitswesen",
        title:
          "Medizinische Qualifizierung & berufliche Bereitschaft",
        description:
          "Für Pflegekräfte, Ärzte, Apotheker und weitere Gesundheitsfachkräfte, die Sprache, Anerkennung, Zulassungsanforderungen, Dokumente und berufliche Vorbereitung strukturieren möchten.",
        services: [
          "Vorbereitung auf medizinisches Deutsch",
          "Orientierung zur Anerkennungsakte",
          "Vorbereitung auf Zulassungsanforderungen",
          "Vorbereitung beruflicher Dokumente",
          "Analyse medizinischer Berufswege",
          "Vorbereitung beruflicher Kommunikation",
        ],
        href: "/medical",
      },
      {
        id: "business-services",
        number: "03",
        label: "Unternehmen",
        title:
          "Markteintritt & internationales Wachstum",
        description:
          "Für Unternehmen, die neue Märkte, Partnerschaften, internationale Expansion, kommerzielle Chancen und organisatorische Entwicklung bewerten möchten.",
        services: [
          "Marktforschung",
          "Machbarkeit & Geschäftsplanung",
          "Markteintrittsstrategie",
          "Partner-Mapping",
          "Unterstützung bei der Geschäftsentwicklung",
          "Digitale & operative Lösungen",
        ],
        href: "/businesses",
      },
      {
        id: "education-services",
        number: "04",
        label: "Bildung & Institutionen",
        title:
          "Akademische & institutionelle Zusammenarbeit",
        description:
          "Für Hochschulen, Trainingsanbieter, Bildungsorganisationen und Institutionen, die internationale Verbindungen und Kooperationen erkunden möchten.",
        services: [
          "Institutionelles Mapping",
          "Hochschulverbindungen",
          "Trainingskooperation",
          "Programmentwicklung",
          "Akademisches Networking",
          "Berufliche & sektorale Verbindungen",
        ],
        href: "/education",
      },
    ],

    supportLabel:
      "Unterstützende Kompetenzen",

    supportTitle:
      "Leistungen, die mehrere Bereiche unterstützen können.",

    supportingCapabilities: [
      "Training",
      "Übersetzung & Dokumentation",
      "Marktforschung",
      "Digitale Plattformen",
      "HR-Lösungen",
      "Digitales Marketing",
      "Events & Konferenzen",
      "Internationales Networking",
    ],
  },

  en: {
    eyebrow:
      "How Our Services Are Structured",

    titleLineOne:
      "One Company.",

    titleLineTwo:
      "Four Service Divisions.",

    intro:
      "Western Bridge combines different capabilities under one structure. The service starts with the client's objective, then the relevant advisory, preparation, training, research, technology, or networking support is built around it.",

    visualAlt:
      "International consulting team reviewing strategy and client requirements",

    visualLabel:
      "Western Bridge Service Model",

    visualTitle:
      "Start with the requirement. Build the right combination of services around it.",

    scopeNumber:
      "360°",

    scopeTitle:
      "Integrated Support",

    scopeText:
      "Advisory, preparation, training, research, technology and connections can work together when the project requires it.",

    divisionLink:
      "View this division",

    divisions: [
      {
        id: "individual-services",
        number: "01",
        label: "Individuals",
        title:
          "International Pathways & Professional Preparation",
        description:
          "For individuals who need a structured route toward education, training, qualification, professional development, or an international opportunity.",
        services: [
          "Pathway assessment",
          "Education & training guidance",
          "Language preparation planning",
          "Qualification & document readiness",
          "Professional profile preparation",
          "Germany-focused guidance",
        ],
        href: "/individuals",
      },
      {
        id: "medical-services",
        number: "02",
        label: "Healthcare",
        title:
          "Medical Qualification & Career Readiness",
        description:
          "For nurses, doctors, pharmacists, and healthcare professionals navigating language, recognition, licensing, documents, and professional preparation.",
        services: [
          "Medical German preparation",
          "Recognition file guidance",
          "Licensing readiness",
          "Professional document preparation",
          "Healthcare pathway assessment",
          "Professional communication preparation",
        ],
        href: "/medical",
      },
      {
        id: "business-services",
        number: "03",
        label: "Business",
        title:
          "Market Entry & International Growth",
        description:
          "For businesses evaluating new markets, partnerships, international expansion, commercial opportunities, and organizational development.",
        services: [
          "Market research",
          "Feasibility & business planning",
          "Market-entry strategy",
          "Partner mapping",
          "Business development support",
          "Digital & operational solutions",
        ],
        href: "/businesses",
      },
      {
        id: "education-services",
        number: "04",
        label: "Education & Institutions",
        title:
          "Academic & Institutional Cooperation",
        description:
          "For universities, training providers, educational organizations, and institutions seeking international connections and cooperation.",
        services: [
          "Institutional mapping",
          "University connections",
          "Training cooperation",
          "Program development",
          "Academic networking",
          "Professional & sector connections",
        ],
        href: "/education",
      },
    ],

    supportLabel:
      "Supporting Capabilities",

    supportTitle:
      "Services that can support more than one division.",

    supportingCapabilities: [
      "Training",
      "Translation & Documentation",
      "Market Research",
      "Digital Platforms",
      "HR Solutions",
      "Digital Marketing",
      "Events & Conferences",
      "International Networking",
    ],
  },

  ar: {
    eyebrow:
      "كيف ننظم خدماتنا",

    titleLineOne:
      "شركة واحدة.",

    titleLineTwo:
      "أربعة مجالات للخدمات.",

    intro:
      "تجمع Western Bridge قدرات متعددة ضمن هيكل واحد. تبدأ الخدمة من هدف العميل، ثم يتم بناء مزيج مناسب من الاستشارات والاستعداد والتدريب والبحث والتكنولوجيا وبناء العلاقات حول هذا الهدف.",

    visualAlt:
      "فريق استشاري دولي يراجع الاستراتيجية ومتطلبات العميل",

    visualLabel:
      "نموذج خدمات Western Bridge",

    visualTitle:
      "ابدأ بالاحتياج، ثم ابنِ حوله المزيج المناسب من الخدمات.",

    scopeNumber:
      "360°",

    scopeTitle:
      "دعم متكامل",

    scopeText:
      "يمكن دمج الاستشارات والاستعداد والتدريب والبحث والتكنولوجيا وبناء العلاقات معًا عندما يتطلب المشروع ذلك.",

    divisionLink:
      "استعرض هذا المجال",

    divisions: [
      {
        id: "individual-services",
        number: "01",
        label: "الأفراد",
        title:
          "المسارات الدولية والاستعداد المهني",
        description:
          "للأفراد الذين يحتاجون إلى مسار منظم نحو التعليم أو التدريب أو التأهيل أو التطوير المهني أو فرصة دولية.",
        services: [
          "تقييم المسار",
          "الإرشاد التعليمي والتدريبي",
          "تخطيط الاستعداد اللغوي",
          "الجاهزية للمؤهلات والوثائق",
          "إعداد الملف المهني",
          "إرشاد موجه نحو ألمانيا",
        ],
        href: "/individuals",
      },
      {
        id: "medical-services",
        number: "02",
        label: "الرعاية الصحية",
        title:
          "التأهيل الطبي والجاهزية المهنية",
        description:
          "للممرضين والأطباء والصيادلة والعاملين في القطاع الصحي ممن يحتاجون إلى تنظيم مسار اللغة والاعتراف ومتطلبات الترخيص والوثائق والاستعداد المهني.",
        services: [
          "الاستعداد للألمانية الطبية",
          "الإرشاد لملف الاعتراف",
          "الاستعداد لمتطلبات الترخيص",
          "إعداد الوثائق المهنية",
          "تقييم المسار الصحي",
          "الاستعداد للتواصل المهني",
        ],
        href: "/medical",
      },
      {
        id: "business-services",
        number: "03",
        label: "الشركات",
        title:
          "دخول الأسواق والنمو الدولي",
        description:
          "للشركات التي تقيّم أسواقًا جديدة أو شراكات أو توسعًا دوليًا أو فرصًا تجارية أو تطويرًا مؤسسيًا.",
        services: [
          "دراسة الأسواق",
          "الجدوى وتخطيط الأعمال",
          "استراتيجية دخول السوق",
          "تحديد الشركاء",
          "دعم تطوير الأعمال",
          "الحلول الرقمية والتشغيلية",
        ],
        href: "/businesses",
      },
      {
        id: "education-services",
        number: "04",
        label: "التعليم والمؤسسات",
        title:
          "التعاون الأكاديمي والمؤسسي",
        description:
          "للجامعات ومقدمي التدريب والمؤسسات التعليمية والجهات التي تسعى إلى بناء روابط وتعاون دولي.",
        services: [
          "رسم خريطة الجهات والمؤسسات",
          "روابط الجامعات",
          "التعاون التدريبي",
          "تطوير البرامج",
          "بناء الشبكات الأكاديمية",
          "الروابط المهنية والقطاعية",
        ],
        href: "/education",
      },
    ],

    supportLabel:
      "القدرات الداعمة",

    supportTitle:
      "خدمات يمكنها دعم أكثر من مجال.",

    supportingCapabilities: [
      "التدريب",
      "الترجمة والتوثيق",
      "دراسة الأسواق",
      "المنصات الرقمية",
      "حلول الموارد البشرية",
      "التسويق الرقمي",
      "الفعاليات والمؤتمرات",
      "بناء العلاقات الدولية",
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleLineOne: string;
    titleLineTwo: string;
    intro: string;
    visualAlt: string;
    visualLabel: string;
    visualTitle: string;
    scopeNumber: string;
    scopeTitle: string;
    scopeText: string;
    divisionLink: string;
    divisions: Division[];
    supportLabel: string;
    supportTitle: string;
    supportingCapabilities: string[];
  }
>;

export default function ServiceSystemSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section
      id="service-system"
      className={styles.section}
    >
      <Container>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {t.eyebrow}
            </div>

            <h2 className={styles.title}>
              {t.titleLineOne}
              <br />

              <span>
                {t.titleLineTwo}
              </span>
            </h2>
          </div>

          <p className={styles.intro}>
            {t.intro}
          </p>
        </div>

        <div className={styles.layout}>
          <aside className={styles.visualColumn}>
            <div className={styles.visual}>
              <Image
                src="/images/services-system.jpg"
                alt={t.visualAlt}
                fill
                sizes="(max-width: 950px) 100vw, 38vw"
                className={styles.image}
              />

              <div className={styles.overlay} />

              <div className={styles.visualContent}>
                <span className={styles.visualLabel}>
                  {t.visualLabel}
                </span>

                <h3>
                  {t.visualTitle}
                </h3>
              </div>
            </div>

            <div className={styles.scopeNote}>
              <span className={styles.scopeNumber}>
                {t.scopeNumber}
              </span>

              <div>
                <strong>
                  {t.scopeTitle}
                </strong>

                <p>
                  {t.scopeText}
                </p>
              </div>
            </div>
          </aside>

          <div className={styles.divisions}>
            {t.divisions.map((division) => (
              <article
                key={division.number}
                id={division.id}
                className={styles.division}
              >
                <div className={styles.divisionHeading}>
                  <span className={styles.number}>
                    {division.number}
                  </span>

                  <div>
                    <span className={styles.label}>
                      {division.label}
                    </span>

                    <h3 className={styles.divisionTitle}>
                      {division.title}
                    </h3>
                  </div>
                </div>

                <p className={styles.description}>
                  {division.description}
                </p>

                <div className={styles.serviceList}>
                  {division.services.map((service) => (
                    <div
                      key={service}
                      className={styles.serviceItem}
                    >
                      <span
                        className={styles.serviceMark}
                        aria-hidden="true"
                      />

                      {service}
                    </div>
                  ))}
                </div>

                <Link
                  href={division.href}
                  className={styles.link}
                >
                  {t.divisionLink}

                  <span aria-hidden="true">
                    {locale === "ar" ? "←" : "→"}
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.support}>
          <div className={styles.supportIntro}>
            <span className={styles.supportLabel}>
              {t.supportLabel}
            </span>

            <h3>
              {t.supportTitle}
            </h3>
          </div>

          <div className={styles.capabilities}>
            {t.supportingCapabilities.map(
              (capability) => (
                <span
                  key={capability}
                  className={styles.capability}
                >
                  {capability}
                </span>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}