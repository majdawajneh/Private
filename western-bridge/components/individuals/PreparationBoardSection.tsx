"use client";

import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./PreparationBoardSection.module.css";

type Locale = "de" | "en" | "ar";

type Group = {
  number: string;
  id: string;
  title: string;
  items: string[];
};

const content = {
  de: {
    watermark: "BEREIT",

    eyebrow: "Vorbereitungsanalyse",

    titleBefore: "Setzen Sie die Bausteine für",
    highlightedTitle: "Ihren internationalen Weg zusammen",

    introText:
      "Ein erfolgreicher internationaler Weg hängt in der Regel von mehreren Voraussetzungen ab. Western Bridge hilft Ihnen zu verstehen, was vorbereitet werden muss, was bereits vorhanden ist und in welchen Bereichen zusätzliche Unterstützung sinnvoll sein kann.",

    groups: [
      {
        number: "01",
        id: "profile",
        title: "Ihr berufliches Profil",
        items: [
          "Beruflicher Hintergrund",
          "Akademische Qualifikationen",
          "Berufserfahrung",
          "Aktuelle berufliche Situation",
        ],
      },
      {
        number: "02",
        id: "readiness",
        title: "Ihre aktuelle Vorbereitung",
        items: [
          "Aktuelles Sprachniveau",
          "Branchenspezifische Anforderungen",
          "Berufliche Prüfungsanforderungen",
          "Vorbereitung auf Zulassung oder Qualifizierung",
        ],
      },
      {
        number: "03",
        id: "documents",
        title: "Ihre Dokumente",
        items: [
          "Qualifikationsnachweise",
          "Anforderungen an beglaubigte Übersetzungen",
          "Beglaubigung und Überprüfung",
          "Unterlagen für Anerkennungsverfahren",
        ],
      },
      {
        number: "04",
        id: "direction",
        title: "Ihre nächste Richtung",
        items: [
          "Geeignete Wegorientierung",
          "Relevante Institutionen und Kanäle",
          "Erkundung beruflicher Möglichkeiten",
          "Empfohlene Vorbereitungsschritte",
        ],
      },
    ],

    progressLabel: "Persönliche Orientierung",

    progressTitle:
      "Nicht jeder Weg erfordert dieselbe Vorbereitung",

    progressText:
      "Ihr Beruf, Ihre Qualifikationen, Ihr Zielland, Ihr Sprachniveau und Ihre persönlichen Ziele beeinflussen, welche Vorbereitung für Sie relevant sein kann. Western Bridge hilft Ihnen dabei, diese Bereiche strukturiert einzuordnen.",

    button: "Persönliche Beratung anfragen",
  },

  en: {
    watermark: "READY",

    eyebrow: "Preparation Assessment",

    titleBefore: "Build the Pieces of",
    highlightedTitle: "Your International Path",

    introText:
      "A successful international pathway usually depends on more than one requirement. Western Bridge helps you understand what needs to be prepared, what may already be ready, and where additional support could be useful.",

    groups: [
      {
        number: "01",
        id: "profile",
        title: "Your Professional Profile",
        items: [
          "Professional background",
          "Academic qualifications",
          "Work experience",
          "Current career position",
        ],
      },
      {
        number: "02",
        id: "readiness",
        title: "Your Readiness",
        items: [
          "Current language level",
          "Sector-specific requirements",
          "Professional examination needs",
          "Licensing or qualification preparation",
        ],
      },
      {
        number: "03",
        id: "documents",
        title: "Your Documents",
        items: [
          "Qualification documents",
          "Certified translation requirements",
          "Authentication and verification",
          "Recognition-related documentation",
        ],
      },
      {
        number: "04",
        id: "direction",
        title: "Your Next Direction",
        items: [
          "Suitable pathway direction",
          "Relevant institutions and channels",
          "Professional opportunity exploration",
          "Recommended preparation steps",
        ],
      },
    ],

    progressLabel: "Personalized Guidance",

    progressTitle:
      "Not Every Path Requires the Same Preparation",

    progressText:
      "Your profession, qualifications, destination, language level, and goals can change the preparation you may need. Western Bridge can help you identify and organize the areas that may be most relevant to your next step.",

    button: "Request Personal Guidance",
  },

  ar: {
    watermark: "جاهز",

    eyebrow: "تقييم الاستعداد",

    titleBefore: "رتّب عناصر",
    highlightedTitle: "مسارك الدولي",

    introText:
      "المسار الدولي الناجح يعتمد عادةً على أكثر من متطلب واحد. تساعدك Western Bridge على فهم ما الذي يحتاج إلى تجهيز، وما الذي أصبح جاهزًا بالفعل، وأين قد تحتاج إلى دعم إضافي.",

    groups: [
      {
        number: "01",
        id: "profile",
        title: "ملفك المهني",
        items: [
          "الخلفية المهنية",
          "المؤهلات الأكاديمية",
          "الخبرة العملية",
          "وضعك المهني الحالي",
        ],
      },
      {
        number: "02",
        id: "readiness",
        title: "مدى جاهزيتك",
        items: [
          "مستواك الحالي في اللغة",
          "متطلبات المجال",
          "احتياجات الامتحانات المهنية",
          "الاستعداد للترخيص أو التأهيل",
        ],
      },
      {
        number: "03",
        id: "documents",
        title: "وثائقك",
        items: [
          "وثائق المؤهلات",
          "متطلبات الترجمة المعتمدة",
          "التصديق والتحقق",
          "الوثائق المرتبطة بالاعتراف",
        ],
      },
      {
        number: "04",
        id: "direction",
        title: "اتجاهك التالي",
        items: [
          "المسار الأنسب لك",
          "المؤسسات والقنوات ذات الصلة",
          "استكشاف الفرص المهنية",
          "خطوات الاستعداد المقترحة",
        ],
      },
    ],

    progressLabel: "توجيه شخصي",

    progressTitle:
      "ليس كل مسار يحتاج إلى نفس نوع الاستعداد",

    progressText:
      "مهنتك ومؤهلاتك ووجهتك ومستواك اللغوي وأهدافك يمكن أن تغيّر نوع الاستعداد الذي تحتاجه. تساعدك Western Bridge على تحديد وترتيب الجوانب الأكثر ارتباطًا بخطوتك التالية.",

    button: "اطلب توجيهًا شخصيًا",
  },
} satisfies Record<
  Locale,
  {
    watermark: string;
    eyebrow: string;
    titleBefore: string;
    highlightedTitle: string;
    introText: string;
    groups: Group[];
    progressLabel: string;
    progressTitle: string;
    progressText: string;
    button: string;
  }
>;

function GroupIcon({ id }: { id: string }) {
  if (id === "readiness") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 3V21"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M7 8L12 3L17 8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 16L12 21L17 16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (id === "documents") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 3H15L19 7V21H6V3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M15 3V7H19"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M9 12H16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M9 16H14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === "direction") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="8"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M15.5 8.5L13 13L8.5 15.5L11 11L15.5 8.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="7"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5 20C5.6 15.8 8 13 12 13C16 13 18.4 15.8 19 20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PreparationBoardSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.board}>
          <span
            className={styles.cornerAccent}
            aria-hidden="true"
          />

          <span
            className={styles.watermark}
            aria-hidden="true"
          >
            {t.watermark}
          </span>

          <div className={styles.top}>
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

            <p className={styles.introText}>
              {t.introText}
            </p>
          </div>

          <div className={styles.assessmentGrid}>
            {t.groups.map((group) => (
              <article
                key={group.id}
                className={styles.group}
              >
                <span className={styles.groupNumber}>
                  {group.number}
                </span>

                <div className={styles.groupHeader}>
                  <div className={styles.iconBox}>
                    <GroupIcon id={group.id} />
                  </div>

                  <h3 className={styles.groupTitle}>
                    {group.title}
                  </h3>
                </div>

                <div className={styles.list}>
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className={styles.item}
                    >
                      <span className={styles.check}>
                        ✓
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className={styles.progressStrip}>
            <div className={styles.progressContent}>
              <span className={styles.progressLabel}>
                {t.progressLabel}
              </span>

              <h3 className={styles.progressTitle}>
                {t.progressTitle}
              </h3>

              <p className={styles.progressText}>
                {t.progressText}
              </p>
            </div>

            <Link
              href="/contact"
              className={styles.button}
            >
              {t.button}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}