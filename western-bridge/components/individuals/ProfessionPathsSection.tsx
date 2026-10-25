"use client";

import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import Image from "next/image";
import styles from "./ProfessionPathsSection.module.css";

type Locale = "de" | "en" | "ar";

const content = {
  de: {
    eyebrow: "Unterschiedliche Berufe. Unterschiedliche Wege.",

    titleBefore: "Finden Sie den Weg, der zu",
    highlightedTitle: "Ihrem Beruf passt",

    description:
      "Die internationale Vorbereitung hängt stark vom jeweiligen Beruf ab. Gesundheitsberufe unterliegen häufig geregelten Anerkennungs- und Zulassungsverfahren, während andere Branchen unterschiedliche Wege bei Qualifikation, Sprache und beruflicher Vorbereitung verfolgen können.",

    medical: {
      label: "Weg im Gesundheitswesen",
      title: "Medizinische Fachkräfte",
      text:
        "Wege im Gesundheitswesen können eine besonders strukturierte Vorbereitung erfordern, insbesondere wenn Anerkennung, Zulassung, Sprachstandards oder regulierte berufliche Anforderungen gelten.",

      professions: [
        "Pflegefachkräfte",
        "Ärzte",
        "Apotheker",
        "Weitere Gesundheitsberufe",
      ],

      details: [
        "Deutsch und medizinisches Deutsch",
        "Orientierung bei der beruflichen Anerkennung",
        "Vorbereitung auf Zulassung und Qualifikation",
        "Unterstützung bei Dokumenten und beruflicher Vorbereitung",
      ],

      action: "Medizinische Wege entdecken",
    },

    nonMedical: {
      label: "Weitere berufliche Wege",
      title: "Nicht-medizinische Fachkräfte",
      text:
        "Andere Berufsgruppen können je nach Qualifikation, Berufserfahrung, Sprachanforderungen, Arbeitsmarktnachfrage sowie Zielstaat oder Branche unterschiedliche internationale Wege verfolgen.",

      professions: [
        "IT-Fachkräfte",
        "Ingenieure",
        "Business-Fachkräfte",
        "Qualifizierte Fachkräfte",
        "Weitere Berufsfelder",
      ],

      details: [
        "Analyse beruflicher Wege",
        "Orientierung zu Qualifizierung und Weiterbildung",
        "Vorbereitung auf die deutsche Sprache",
        "Erkundung internationaler Möglichkeiten",
      ],

      action: "Berufliche Unterstützung entdecken",
    },

    note:
      "Western Bridge bietet Orientierung, Vorbereitung, Qualifizierungsunterstützung und die Erkundung internationaler Wege. Entscheidungen über Beschäftigung, Anerkennung, Zulassung und regulatorische Verfahren liegen bei den jeweils zuständigen Arbeitgebern, Institutionen und Behörden.",
  },

  en: {
    eyebrow: "Different Professions. Different Paths.",

    titleBefore: "Find the Path That Matches",
    highlightedTitle: "Your Profession",

    description:
      "International preparation depends heavily on your profession. Healthcare fields often require regulated recognition and licensing, while other sectors may follow different qualification, language, and professional-readiness routes.",

    medical: {
      label: "Healthcare Pathway",
      title: "Medical & Healthcare Professionals",
      text:
        "Healthcare pathways can require more structured preparation, especially when recognition, licensing, language standards, or regulated professional requirements apply.",

      professions: [
        "Nurses",
        "Doctors",
        "Pharmacists",
        "Allied Health",
      ],

      details: [
        "German and Medical German preparation",
        "Professional recognition guidance",
        "Licensing and qualification preparation",
        "Document and professional readiness support",
      ],

      action: "Explore Medical Pathways",
    },

    nonMedical: {
      label: "Broader Professional Pathways",
      title: "Non-Medical Professionals",
      text:
        "Other professions may follow different international pathways, depending on qualifications, experience, language requirements, market demand, and the target country or sector.",

      professions: [
        "IT Professionals",
        "Engineers",
        "Business Professionals",
        "Skilled Professionals",
        "Other Fields",
      ],

      details: [
        "Career pathway assessment",
        "Qualification and training guidance",
        "German language preparation",
        "International opportunity exploration",
      ],

      action: "Explore Professional Support",
    },

    note:
      "Western Bridge provides guidance, preparation, qualification support, and international pathway exploration. Employment and regulatory decisions remain with the relevant employers, institutions, and authorities.",
  },

  ar: {
    eyebrow: "مهن مختلفة. ومسارات مختلفة.",

    titleBefore: "اعثر على المسار الذي يناسب",
    highlightedTitle: "مهنتك",

    description:
      "يعتمد الاستعداد الدولي بشكل كبير على طبيعة المهنة. فالمجالات الطبية غالبًا ما تتطلب إجراءات منظمة للاعتراف والترخيص، بينما قد تتبع القطاعات الأخرى مسارات مختلفة من حيث المؤهلات واللغة والجاهزية المهنية.",

    medical: {
      label: "مسار القطاع الطبي",
      title: "المتخصصون في القطاع الطبي",
      text:
        "قد تتطلب المسارات الطبية استعدادًا أكثر تنظيمًا، خصوصًا عندما تكون هناك متطلبات للاعتراف المهني أو الترخيص أو مستوى اللغة أو مزاولة مهنة منظمة.",

      professions: [
        "الممرضون",
        "الأطباء",
        "الصيادلة",
        "المهن الصحية المساندة",
      ],

      details: [
        "اللغة الألمانية والألمانية الطبية",
        "التوجيه في الاعتراف المهني",
        "الاستعداد للترخيص والتأهيل",
        "دعم الوثائق والجاهزية المهنية",
      ],

      action: "استكشف المسارات الطبية",
    },

    nonMedical: {
      label: "مسارات مهنية أوسع",
      title: "المتخصصون في المجالات غير الطبية",
      text:
        "قد تختلف المسارات الدولية للمهن الأخرى بحسب المؤهلات والخبرة ومتطلبات اللغة وحاجة السوق والدولة أو القطاع المستهدف.",

      professions: [
        "متخصصو تكنولوجيا المعلومات",
        "المهندسون",
        "متخصصو الأعمال",
        "أصحاب المهن الماهرة",
        "مجالات أخرى",
      ],

      details: [
        "تقييم المسار المهني",
        "التوجيه في التأهيل والتدريب",
        "الاستعداد للغة الألمانية",
        "استكشاف الفرص الدولية",
      ],

      action: "استكشف الدعم المهني",
    },

    note:
      "تقدم Western Bridge التوجيه والاستعداد ودعم التأهيل واستكشاف المسارات الدولية. وتبقى قرارات التوظيف والاعتراف والترخيص والإجراءات التنظيمية من اختصاص أصحاب العمل والمؤسسات والجهات الرسمية المعنية.",
  },
} as const;

export default function ProfessionPathsSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />

            {t.eyebrow}

            <span className={styles.eyebrowLine} />
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

        <div className={styles.split}>
          <article
            className={`${styles.panel} ${styles.medical}`}
          >
            <div className={styles.panelContent}>
              <div className={styles.panelLabel}>
                <span className={styles.panelLabelLine} />
                {t.medical.label}
              </div>

              <h3 className={styles.panelTitle}>
                {t.medical.title}
              </h3>

              <p className={styles.panelText}>
                {t.medical.text}
              </p>

              <div className={styles.professions}>
                {t.medical.professions.map(
                  (profession) => (
                    <span
                      key={profession}
                      className={styles.profession}
                    >
                      <span
                        className={styles.professionDot}
                      />

                      {profession}
                    </span>
                  )
                )}
              </div>

              <div className={styles.details}>
                {t.medical.details.map((detail) => (
                  <div
                    key={detail}
                    className={styles.detail}
                  >
                    <span className={styles.detailIcon}>
                      ✓
                    </span>

                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/medical"
                className={styles.action}
              >
                {t.medical.action}

                <span aria-hidden="true">
                  {locale === "ar" ? "←" : "→"}
                </span>
              </Link>
            </div>

            <span
              className={styles.bigNumber}
              aria-hidden="true"
            >
              01
            </span>
          </article>

          <article
            className={`${styles.panel} ${styles.nonMedical}`}
          >
            <div className={styles.panelContent}>
              <div className={styles.panelLabel}>
                <span className={styles.panelLabelLine} />
                {t.nonMedical.label}
              </div>

              <h3 className={styles.panelTitle}>
                {t.nonMedical.title}
              </h3>

              <p className={styles.panelText}>
                {t.nonMedical.text}
              </p>

              <div className={styles.professions}>
                {t.nonMedical.professions.map(
                  (profession) => (
                    <span
                      key={profession}
                      className={styles.profession}
                    >
                      <span
                        className={styles.professionDot}
                      />

                      {profession}
                    </span>
                  )
                )}
              </div>

              <div className={styles.details}>
                {t.nonMedical.details.map((detail) => (
                  <div
                    key={detail}
                    className={styles.detail}
                  >
                    <span className={styles.detailIcon}>
                      ✓
                    </span>

                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className={styles.action}
              >
                {t.nonMedical.action}

                <span aria-hidden="true">
                  {locale === "ar" ? "←" : "→"}
                </span>
              </Link>
            </div>

            <span
              className={styles.bigNumber}
              aria-hidden="true"
            >
              02
            </span>
          </article>

          <div
            className={styles.centerBadge}
            aria-hidden="true"
          >
            <Image
              src="/logo/western-bridge-mark.jpeg"
              alt=""
              width={64}
              height={64}
              className={styles.centerLogo}
            />
          </div>
        </div>

        <div className={styles.note}>
          <span className={styles.noteIcon}>✦</span>

          <span>{t.note}</span>
        </div>
      </Container>
    </section>
  );
}