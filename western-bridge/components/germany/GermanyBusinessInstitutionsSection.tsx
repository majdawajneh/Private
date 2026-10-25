"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./GermanyBusinessInstitutionsSection.module.css";

type Locale = "de" | "en" | "ar";

const content = {
  de: {
    eyebrow: "Deutschland über individuelle Wege hinaus",

    titleLineOne: "Deutschland für Wirtschaft,",
    highlightedTitle: "Bildung & Institutionen.",

    intro:
      "Western Bridge arbeitet auch mit Organisationen zusammen, die Deutschland als Markt, institutionelles Umfeld, Bildungsökosystem und potenzielles Ziel für Kooperation verstehen möchten.",

    business: {
      locationTop: "Deutschland",
      locationBottom: "Wirtschaft & Markt",
      label: "Geschäftliche Expansion",

      title:
        "Gehen Sie mit einer Marktstrategie nach Deutschland — nicht nur mit einer Adresse.",

      text:
        "Deutschland kann Zugang zu bedeutenden Branchen, Institutionen, kommerziellen Netzwerken und europäischen Märkten bieten. Erfolgreiche Expansion beginnt jedoch damit zu verstehen, wo das Unternehmen in den Markt passt, wer die relevanten Akteure sind und was vor dem Markteintritt vorbereitet werden muss.",

      points: [
        "Positionierung im deutschen Markt",
        "Markt- und Machbarkeitsanalyse",
        "Partner- und Netzwerk-Mapping",
        "Institutionelle Kontakte",
        "Geschäftliche Vorbereitung",
      ],

      link: "Deutschland Business Services",

      imageAlt:
        "Frankfurter Geschäftsviertel als Symbol für Markteintritt und Geschäftsentwicklung in Deutschland",
    },

    education: {
      label: "Bildung & institutionelle Zusammenarbeit",

      title:
        "Bauen Sie Verbindungen zwischen Institutionen auf — nicht nur zwischen Menschen.",

      text:
        "Hochschulen, Ausbildungsanbieter, Akademien, Berufsverbände und andere Institutionen können Möglichkeiten haben, Beziehungen zu deutschen Partnern in den Bereichen Bildung, Training, Wissensaustausch und berufliche Entwicklung aufzubauen.",

      points: [
        "Mapping von Hochschulen und Institutionen",
        "Konzepte für akademische Zusammenarbeit",
        "Ausbildungs- und Trainingspartnerschaften",
        "Entwicklung internationaler Programme",
        "Berufliche und sektorale Netzwerke",
      ],

      link: "Services für Bildung & Institutionen",

      locationTop: "Deutschland",
      locationBottom: "Akademisch & institutionell",

      imageAlt:
        "Deutsches Hochschul- und Institutionsumfeld als Symbol für internationale akademische Zusammenarbeit",
    },

    bottom: {
      label: "Western Bridge Deutschland Desk",

      title:
        "Die Verbindung muss für beide Seiten sinnvoll sein.",

      text:
        "Western Bridge kann bei Recherche, Vorbereitung, Networking, Kontaktherstellung und Kooperationsentwicklung unterstützen. Kommerzielle Vereinbarungen, akademische Partnerschaften, institutionelle Genehmigungen und endgültige Entscheidungen bleiben bei den beteiligten Organisationen.",

      button: "Deutschland-Projekt besprechen",
    },
  },

  en: {
    eyebrow: "Germany Beyond Individual Pathways",

    titleLineOne: "Germany for Business,",
    highlightedTitle: "Education & Institutions.",

    intro:
      "Western Bridge also works with organizations that want to understand Germany as a market, institutional environment, education ecosystem, and potential cooperation destination.",

    business: {
      locationTop: "Germany",
      locationBottom: "Business & Market",
      label: "Business Expansion",

      title:
        "Enter Germany With a Market Strategy, Not Just an Address.",

      text:
        "Germany can offer access to major industries, institutions, commercial networks, and European markets. But successful expansion starts with understanding where the business fits, who the relevant stakeholders are, and what needs to be prepared before market entry.",

      points: [
        "German market positioning",
        "Market and feasibility analysis",
        "Partner and network mapping",
        "Institutional introductions",
        "Business readiness",
      ],

      link: "Germany Business Services",

      imageAlt:
        "Frankfurt business district representing market entry and business development in Germany",
    },

    education: {
      label: "Education & Institutional Cooperation",

      title:
        "Build Connections Between Institutions, Not Just Between People.",

      text:
        "Universities, training providers, academies, professional organizations, and other institutions may have opportunities to develop relationships with German counterparts around education, training, knowledge exchange, and professional development.",

      points: [
        "University and institutional mapping",
        "Academic cooperation concepts",
        "Training partnerships",
        "International program development",
        "Professional and sector networks",
      ],

      link: "Education & Institution Services",

      locationTop: "Germany",
      locationBottom: "Academic & Institutional",

      imageAlt:
        "German university and institutional environment representing international academic cooperation",
    },

    bottom: {
      label: "Western Bridge Germany Desk",

      title:
        "The connection has to make sense on both sides.",

      text:
        "Western Bridge can support research, preparation, networking, introductions, and cooperation development. Commercial agreements, academic partnerships, institutional approvals, and final decisions remain with the organizations involved.",

      button: "Discuss a Germany Project",
    },
  },

  ar: {
    eyebrow: "ألمانيا أبعد من مسارات الأفراد",

    titleLineOne: "ألمانيا للأعمال،",
    highlightedTitle: "التعليم والمؤسسات.",

    intro:
      "تعمل Western Bridge أيضًا مع الجهات التي ترغب في فهم ألمانيا كسوق وبيئة مؤسسية ومنظومة تعليمية ووجهة محتملة للتعاون.",

    business: {
      locationTop: "ألمانيا",
      locationBottom: "الأعمال والسوق",
      label: "التوسع التجاري",

      title:
        "ادخل السوق الألماني باستراتيجية، وليس بمجرد عنوان.",

      text:
        "يمكن لألمانيا أن توفر الوصول إلى قطاعات كبرى ومؤسسات وشبكات تجارية وأسواق أوروبية. لكن التوسع الناجح يبدأ بفهم موقع الشركة داخل السوق، والجهات ذات الصلة، وما يجب تجهيزه قبل دخول السوق.",

      points: [
        "التموضع في السوق الألماني",
        "تحليل السوق والجدوى",
        "تحديد الشركاء والشبكات",
        "التعريف بالجهات المؤسسية",
        "الجاهزية التجارية",
      ],

      link: "خدمات الأعمال في ألمانيا",

      imageAlt:
        "منطقة الأعمال في فرانكفورت ترمز إلى دخول السوق وتطوير الأعمال في ألمانيا",
    },

    education: {
      label: "التعليم والتعاون المؤسسي",

      title:
        "ابنِ روابط بين المؤسسات، وليس فقط بين الأفراد.",

      text:
        "قد تمتلك الجامعات ومقدمو التدريب والأكاديميات والمنظمات المهنية والمؤسسات الأخرى فرصًا لبناء علاقات مع جهات ألمانية في مجالات التعليم والتدريب وتبادل المعرفة والتطوير المهني.",

      points: [
        "تحديد الجامعات والمؤسسات",
        "مفاهيم التعاون الأكاديمي",
        "شراكات التدريب",
        "تطوير البرامج الدولية",
        "الشبكات المهنية والقطاعية",
      ],

      link: "خدمات التعليم والمؤسسات",

      locationTop: "ألمانيا",
      locationBottom: "أكاديمي ومؤسسي",

      imageAlt:
        "بيئة جامعية ومؤسسية ألمانية ترمز إلى التعاون الأكاديمي الدولي",
    },

    bottom: {
      label: "مكتب Western Bridge لألمانيا",

      title:
        "يجب أن تكون العلاقة منطقية ومفيدة للطرفين.",

      text:
        "يمكن لـ Western Bridge دعم البحث والاستعداد وبناء العلاقات والتعريف بالجهات وتطوير التعاون. أما الاتفاقيات التجارية والشراكات الأكاديمية والموافقات المؤسسية والقرارات النهائية فتبقى بيد الجهات المشاركة.",

      button: "ناقش مشروعًا مرتبطًا بألمانيا",
    },
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleLineOne: string;
    highlightedTitle: string;
    intro: string;
    business: {
      locationTop: string;
      locationBottom: string;
      label: string;
      title: string;
      text: string;
      points: string[];
      link: string;
      imageAlt: string;
    };
    education: {
      label: string;
      title: string;
      text: string;
      points: string[];
      link: string;
      locationTop: string;
      locationBottom: string;
      imageAlt: string;
    };
    bottom: {
      label: string;
      title: string;
      text: string;
      button: string;
    };
  }
>;

export default function GermanyBusinessInstitutionsSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section
      id="germany-business-institutions"
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
                {t.highlightedTitle}
              </span>
            </h2>
          </div>

          <p className={styles.intro}>
            {t.intro}
          </p>
        </div>

        <article
          id="germany-business-entry"
          className={`${styles.story} ${styles.businessStory}`}
        >
          <div className={styles.storyImage}>
            <Image
              src="/images/germany-frankfurt-business.jpg"
              alt={t.business.imageAlt}
              fill
              sizes="(max-width: 850px) 100vw, 52vw"
              className={styles.image}
            />

            <div className={styles.imageOverlay} />

            <div className={styles.imageLocation}>
              <span>
                {t.business.locationTop}
              </span>

              <strong>
                {t.business.locationBottom}
              </strong>
            </div>
          </div>

          <div className={styles.storyContent}>
            <span className={styles.storyNumber}>
              01
            </span>

            <span className={styles.storyLabel}>
              {t.business.label}
            </span>

            <h3 className={styles.storyTitle}>
              {t.business.title}
            </h3>

            <p className={styles.storyText}>
              {t.business.text}
            </p>

            <div className={styles.points}>
              {t.business.points.map((point) => (
                <div
                  key={point}
                  className={styles.point}
                >
                  <span
                    className={styles.pointLine}
                    aria-hidden="true"
                  />

                  {point}
                </div>
              ))}
            </div>

            <Link
              href="/businesses"
              className={styles.textLink}
            >
              {t.business.link}

              <span aria-hidden="true">
                {locale === "ar" ? "←" : "→"}
              </span>
            </Link>
          </div>
        </article>

        <article
          id="germany-education-entry"
          className={`${styles.story} ${styles.educationStory}`}
        >
          <div className={styles.storyContent}>
            <span className={styles.storyNumber}>
              02
            </span>

            <span className={styles.storyLabel}>
              {t.education.label}
            </span>

            <h3 className={styles.storyTitle}>
              {t.education.title}
            </h3>

            <p className={styles.storyText}>
              {t.education.text}
            </p>

            <div className={styles.points}>
              {t.education.points.map((point) => (
                <div
                  key={point}
                  className={styles.point}
                >
                  <span
                    className={styles.pointLine}
                    aria-hidden="true"
                  />

                  {point}
                </div>
              ))}
            </div>

            <Link
              href="/education"
              className={styles.textLink}
            >
              {t.education.link}

              <span aria-hidden="true">
                {locale === "ar" ? "←" : "→"}
              </span>
            </Link>
          </div>

          <div className={styles.storyImage}>
            <Image
              src="/images/germany-university-institution.jpg"
              alt={t.education.imageAlt}
              fill
              sizes="(max-width: 850px) 100vw, 52vw"
              className={styles.image}
            />

            <div className={styles.imageOverlay} />

            <div className={styles.imageLocation}>
              <span>
                {t.education.locationTop}
              </span>

              <strong>
                {t.education.locationBottom}
              </strong>
            </div>
          </div>
        </article>

        <div className={styles.bottom}>
          <div className={styles.bottomLead}>
            <span className={styles.bottomLabel}>
              {t.bottom.label}
            </span>

            <h3>
              {t.bottom.title}
            </h3>
          </div>

          <p>
            {t.bottom.text}
          </p>

          <Link
            href="/contact"
            className={styles.button}
          >
            {t.bottom.button}

            <span aria-hidden="true">
              {locale === "ar" ? "←" : "→"}
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}