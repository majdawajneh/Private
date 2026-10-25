"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./EducationEntrySection.module.css";

type Locale = "de" | "en" | "ar";

const content = {
  de: {
    backgroundWord: "VERBINDEN",

    eyebrow: "Zwei Seiten der Bildung",

    titleBefore: "Wählen Sie, wo Ihre",
    highlightedTitle: "Reise beginnt",

    headerText:
      "Western Bridge arbeitet auf beiden Seiten internationaler Bildung: Wir unterstützen Personen, die Lern- und Qualifizierungswege erkunden möchten, ebenso wie Institutionen, die internationale Zusammenarbeit, Verbindungen und Bildungsentwicklung aufbauen wollen.",

    student: {
      number: "01 / INDIVIDUELL",
      type: "Studierende & Lernende",

      label: "Individuelle Bildungswege",

      title:
        "Bauen Sie Ihren internationalen Lernweg auf",

      text:
        "Entdecken Sie Studien-, Ausbildungs-, Sprach-, Qualifizierungs- und internationale Lernwege entsprechend Ihren Zielen, Ihrem Hintergrund und Ihrer bevorzugten Destination.",

      features: [
        "Studien- & Ausbildungswege",
        "Sprachvorbereitung",
        "Orientierung zu Qualifikationen",
        "Internationale Bildungsoptionen",
      ],

      action:
        "Bildungswege für Studierende entdecken",

      imageAlt:
        "Studierender bei der Erkundung internationaler Bildungsmöglichkeiten",
    },

    institution: {
      number: "02 / INSTITUTION",
      type: "Hochschulen & Institutionen",

      label:
        "Institutionelle Zusammenarbeit",

      title:
        "Akademische Verbindungen über Grenzen hinweg aufbauen",

      text:
        "Entdecken Sie Kooperationen zwischen Hochschulen, Trainingsanbietern, Berufsverbänden, Bildungseinrichtungen und relevanten internationalen akademischen Netzwerken.",

      features: [
        "Hochschulkontakte",
        "Trainingskooperation",
        "Akademische Netzwerke",
        "Internationale institutionelle Partnerschaften",
      ],

      action:
        "Institutionelle Zusammenarbeit entdecken",

      imageAlt:
        "Vertreter von Hochschulen und Bildungseinrichtungen bei einem Gespräch über internationale Zusammenarbeit",
    },

    bottomText:
      "Western Bridge bietet Orientierung, Vorbereitung, Networking und Unterstützung bei institutioneller Zusammenarbeit. Entscheidungen über Hochschulzulassung, Stipendien, akademische Anerkennung, Visa und formale Partnerschaften liegen bei den zuständigen Hochschulen, Institutionen, Behörden und beteiligten Organisationen.",

    logoAlt: "Western Bridge",
  },

  en: {
    backgroundWord: "CONNECT",

    eyebrow: "Two Sides of Education",

    titleBefore: "Choose Where Your",
    highlightedTitle: "Journey Begins",

    headerText:
      "Western Bridge works across both sides of international education: supporting individuals who want to explore learning and qualification pathways, and supporting institutions seeking international cooperation, connections, and educational development.",

    student: {
      number: "01 / INDIVIDUAL",
      type: "Students & Learners",

      label: "Individual Education Pathways",

      title:
        "Build Your International Learning Path",

      text:
        "Explore study, professional training, language, qualification, and international learning pathways based on your goals, background, and preferred destination.",

      features: [
        "Study & training pathways",
        "Language preparation",
        "Qualification guidance",
        "International education exploration",
      ],

      action:
        "Explore Student Pathways",

      imageAlt:
        "Student exploring international education opportunities",
    },

    institution: {
      number: "02 / INSTITUTION",
      type: "Universities & Institutions",

      label:
        "Institutional Cooperation",

      title:
        "Build Academic Connections Across Borders",

      text:
        "Explore cooperation between universities, training providers, professional organizations, educational institutions, and relevant international academic ecosystems.",

      features: [
        "University connections",
        "Training cooperation",
        "Academic networking",
        "International institutional partnerships",
      ],

      action:
        "Explore Institutional Cooperation",

      imageAlt:
        "University and educational institution representatives discussing international cooperation",
    },

    bottomText:
      "Western Bridge provides guidance, preparation, networking, and institutional cooperation support. University admission, scholarships, academic recognition, visas, and formal partnership decisions remain with the relevant universities, institutions, authorities, and participating organizations.",

    logoAlt: "Western Bridge",
  },

  ar: {
    backgroundWord: "تواصل",

    eyebrow: "جانبان للتعليم",

    titleBefore: "اختر من أين تبدأ",
    highlightedTitle: "رحلتك التعليمية",

    headerText:
      "تعمل Western Bridge على جانبي التعليم الدولي: دعم الأفراد الذين يرغبون في استكشاف مسارات التعلم والتأهيل، ودعم المؤسسات التي تسعى إلى التعاون الدولي وبناء العلاقات وتطوير المبادرات التعليمية.",

    student: {
      number: "01 / أفراد",
      type: "الطلاب والمتعلمون",

      label: "المسارات التعليمية للأفراد",

      title:
        "ابنِ مسارك نحو التعلم الدولي",

      text:
        "استكشف مسارات الدراسة والتدريب المهني واللغة والتأهيل وفرص التعلم الدولي بناءً على أهدافك وخلفيتك والوجهة التي تفضلها.",

      features: [
        "مسارات الدراسة والتدريب",
        "الاستعداد اللغوي",
        "التوجيه في المؤهلات",
        "استكشاف التعليم الدولي",
      ],

      action:
        "استكشف مسارات الطلاب",

      imageAlt:
        "طالب يستكشف فرص التعليم الدولي",
    },

    institution: {
      number: "02 / مؤسسة",
      type: "الجامعات والمؤسسات",

      label:
        "التعاون المؤسسي",

      title:
        "ابنِ روابط أكاديمية تتجاوز الحدود",

      text:
        "استكشف فرص التعاون بين الجامعات ومقدمي التدريب والمنظمات المهنية والمؤسسات التعليمية والأنظمة الأكاديمية الدولية ذات الصلة.",

      features: [
        "التواصل مع الجامعات",
        "التعاون التدريبي",
        "الشبكات الأكاديمية",
        "الشراكات المؤسسية الدولية",
      ],

      action:
        "استكشف التعاون المؤسسي",

      imageAlt:
        "ممثلون عن جامعات ومؤسسات تعليمية يناقشون التعاون الدولي",
    },

    bottomText:
      "تقدم Western Bridge التوجيه والاستعداد وبناء العلاقات ودعم التعاون المؤسسي. وتبقى قرارات القبول الجامعي والمنح والاعتراف الأكاديمي والتأشيرات والشراكات الرسمية من اختصاص الجامعات والمؤسسات والجهات الرسمية والمنظمات المشاركة.",

    logoAlt: "Western Bridge",
  },
} satisfies Record<
  Locale,
  {
    backgroundWord: string;
    eyebrow: string;
    titleBefore: string;
    highlightedTitle: string;
    headerText: string;

    student: {
      number: string;
      type: string;
      label: string;
      title: string;
      text: string;
      features: string[];
      action: string;
      imageAlt: string;
    };

    institution: {
      number: string;
      type: string;
      label: string;
      title: string;
      text: string;
      features: string[];
      action: string;
      imageAlt: string;
    };

    bottomText: string;
    logoAlt: string;
  }
>;

export default function EducationEntrySection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section
      id="education-pathways"
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

        <div className={styles.entries}>
          <article
            className={`${styles.portal} ${styles.student}`}
          >
            <div className={styles.portalImage}>
              <Image
                src="/images/education-student-pathway.jpg"
                alt={t.student.imageAlt}
                fill
                sizes="(max-width: 850px) 100vw, 50vw"
                className={styles.image}
              />
            </div>

            <div className={styles.overlay} />

            <div className={styles.portalTop}>
              <span className={styles.portalNumber}>
                {t.student.number}
              </span>

              <span className={styles.portalType}>
                {t.student.type}
              </span>
            </div>

            <div className={styles.portalContent}>
              <span className={styles.portalLabel}>
                {t.student.label}
              </span>

              <h3 className={styles.portalTitle}>
                {t.student.title}
              </h3>

              <p className={styles.portalText}>
                {t.student.text}
              </p>

              <div className={styles.features}>
                {t.student.features.map((feature) => (
                  <span
                    key={feature}
                    className={styles.feature}
                  >
                    <span
                      className={styles.featureDot}
                      aria-hidden="true"
                    />

                    {feature}
                  </span>
                ))}
              </div>

              <Link
                href="#student-pathways"
                className={styles.action}
              >
                {t.student.action}

                <span aria-hidden="true">
                  {locale === "ar" ? "←" : "→"}
                </span>
              </Link>
            </div>
          </article>

          <article
            id="institutional-partnerships"
            className={`${styles.portal} ${styles.institution}`}
          >
            <div className={styles.portalImage}>
              <Image
                src="/images/education-institution-meeting.jpg"
                alt={t.institution.imageAlt}
                fill
                sizes="(max-width: 850px) 100vw, 50vw"
                className={styles.image}
              />
            </div>

            <div className={styles.overlay} />

            <div className={styles.portalTop}>
              <span className={styles.portalNumber}>
                {t.institution.number}
              </span>

              <span className={styles.portalType}>
                {t.institution.type}
              </span>
            </div>

            <div className={styles.portalContent}>
              <span className={styles.portalLabel}>
                {t.institution.label}
              </span>

              <h3 className={styles.portalTitle}>
                {t.institution.title}
              </h3>

              <p className={styles.portalText}>
                {t.institution.text}
              </p>

              <div className={styles.features}>
                {t.institution.features.map((feature) => (
                  <span
                    key={feature}
                    className={styles.feature}
                  >
                    <span
                      className={styles.featureDot}
                      aria-hidden="true"
                    />

                    {feature}
                  </span>
                ))}
              </div>

              <Link
                href="#institution-network"
                className={styles.action}
              >
                {t.institution.action}

                <span aria-hidden="true">
                  {locale === "ar" ? "←" : "→"}
                </span>
              </Link>
            </div>
          </article>

          <div
            className={styles.bridgeMarker}
            aria-hidden="true"
          >
            <Image
              src="/logo/western-bridge-mark.jpeg"
              alt={t.logoAlt}
              width={72}
              height={72}
              className={styles.bridgeLogo}
            />
          </div>
        </div>

        <div className={styles.bottom}>
          <span
            className={styles.bottomMark}
            aria-hidden="true"
          >
            ✦
          </span>

          <p className={styles.bottomText}>
            {t.bottomText}
          </p>
        </div>
      </Container>
    </section>
  );
}