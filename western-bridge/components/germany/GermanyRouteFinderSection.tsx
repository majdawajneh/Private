"use client";

import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import Image from "next/image";
import styles from "./GermanyRouteFinderSection.module.css";

type Locale = "de" | "en" | "ar";

type RouteItem = {
  number: string;
  category: string;
  title: string;
  audience: string;
  description: string;
  preparation: string[];
  dependency: string;
  href: string;
  anchor?: string;
  featured?: boolean;
};

const content = {
  de: {
    eyebrow: "Deutschland Route Finder",

    titleLineOne: "Beginnen Sie mit dem Weg.",
    highlightedTitle: "Dann bauen Sie die Vorbereitung auf.",

    headerCopy:
      "Deutschland hat unterschiedliche Systeme für Bildung, regulierte Berufe, qualifizierte Fachkräfte, Unternehmen und Institutionen. Der erste sinnvolle Schritt ist zu klären, welches System tatsächlich zu Ihrem Ziel passt.",

    columns: {
      route: "Weg",
      audience: "Für wen",
      preparation: "Vorbereitung",
      dependency: "Wovon es abhängt",
    },

    dependencyLabel: "Abhängig von",
    routeLink: "Weg ansehen",

    routes: [
      {
        number: "01",
        category: "Bildung",
        title: "Hochschulstudium",
        audience: "Studierende & Absolventen",
        description:
          "Für Personen, die ein Studium in Deutschland in Betracht ziehen und Vorbereitung, Sprache, Dokumente und institutionelle Anforderungen besser verstehen möchten.",
        preparation: [
          "Studienrichtung",
          "Sprachliche Vorbereitung",
          "Akademische Unterlagen",
          "Bewerbungsvorbereitung",
        ],
        dependency:
          "Anforderungen der Hochschule und des Studiengangs",
        href: "/education",
      },
      {
        number: "02",
        category: "Ausbildung",
        title: "Berufliche & praktische Ausbildung",
        audience: "Schulabsolventen & Berufseinsteiger",
        description:
          "Für Personen, die strukturierte berufliche oder praktische Ausbildungswege erkunden und verstehen möchten, welche Vorbereitung vor einer Bewerbung sinnvoll ist.",
        preparation: [
          "Ausbildungsbereich",
          "Deutsche Sprache",
          "Prüfung der Qualifikation",
          "Bewerbungsbereitschaft",
        ],
        dependency:
          "Ausbildungsanbieter und Programmanforderungen",
        href: "/contact",
      },
      {
        number: "03",
        category: "Beruf",
        title: "Weg für qualifizierte Fachkräfte",
        audience: "Qualifizierte Fachkräfte",
        description:
          "Für Fachkräfte mit bereits vorhandenen Qualifikationen und Berufserfahrung, die verstehen möchten, wie ihr Profil zum deutschen Arbeitsmarkt passen kann.",
        preparation: [
          "Qualifikationsprofil",
          "Berufserfahrung",
          "Anerkennung, falls relevant",
          "Berufliche Vorbereitung",
        ],
        dependency:
          "Berufsrolle, Qualifikation und anwendbare Vorgaben",
        href: "/individuals",
      },
      {
        number: "04",
        category: "Gesundheitswesen",
        title: "Medizin & Gesundheitswesen",
        audience: "Pflegefachkräfte, Ärzte & Gesundheitsberufe",
        description:
          "Ein regulierter Weg, bei dem Sprache, berufliche Anerkennung, Zulassungsanforderungen und Dokumentation eine zentrale Rolle spielen können.",
        preparation: [
          "Deutsche Sprache",
          "Anerkennungsunterlagen",
          "Zulassungsbereitschaft",
          "Berufliche Kommunikation",
        ],
        dependency:
          "Beruf und zuständige Behörde",
        href: "/medical",
        featured: true,
      },
      {
        number: "05",
        category: "Wirtschaft",
        title: "Markteintritt in Deutschland",
        audience: "Unternehmen & Unternehmer",
        description:
          "Für Unternehmen, die Deutschland als Markt für Expansion, Partnerschaften, institutionellen Zugang oder Geschäftsentwicklung prüfen.",
        preparation: [
          "Marktanalyse",
          "Eintrittsstrategie",
          "Geschäftliche Bereitschaft",
          "Partner-Mapping",
        ],
        dependency:
          "Geschäftsmodell und Zielmarkt",
        href: "/businesses",
        anchor: "germany-business",
      },
      {
        number: "06",
        category: "Institutionen",
        title: "Bildung & institutionelle Zusammenarbeit",
        audience: "Hochschulen & Bildungsanbieter",
        description:
          "Für Bildungsorganisationen, die akademische Kontakte, Ausbildungskooperationen, institutionelle Netzwerke oder Deutschland-orientierte Initiativen aufbauen möchten.",
        preparation: [
          "Kooperationsziel",
          "Institutionsprofil",
          "Zielorganisationen",
          "Partnerschaftskonzept",
        ],
        dependency:
          "Institutionelle Passung und gegenseitiges Interesse",
        href: "/education",
        anchor: "germany-education",
      },
    ],

    noteLabel: "Für Privatpersonen",

    noteTitle:
      'Beginnen Sie nicht mit „Wie komme ich nach Deutschland?“',

    noteText:
      "Beginnen Sie mit Ihrem konkreten Ziel: Studium, Ausbildung, berufliche Tätigkeit, Gesundheitswesen, Anerkennung von Qualifikationen oder ein anderer klar definierter Weg. Davon hängt ab, welche Vorbereitung tatsächlich sinnvoll ist.",

    noteButton: "Meinen Weg bestimmen",

    legal:
      "Anforderungen können je nach Beruf, Qualifikation, Institution, Bundesland, zuständiger Behörde und individueller Situation unterschiedlich sein. Western Bridge unterstützt bei Vorbereitung und Beratung; formale Entscheidungen liegen bei den zuständigen deutschen Behörden, Institutionen, Arbeitgebern und Organisationen.",
  },

  en: {
    eyebrow: "Germany Route Finder",

    titleLineOne: "Start With the Route.",
    highlightedTitle: "Then Build the Preparation.",

    headerCopy:
      "Germany has different systems for education, regulated professions, skilled professionals, businesses, and institutions. The first useful decision is identifying which system actually applies to your objective.",

    columns: {
      route: "Route",
      audience: "Who It Is For",
      preparation: "Preparation",
      dependency: "Main Dependency",
    },

    dependencyLabel: "Depends on",
    routeLink: "View Route",

    routes: [
      {
        number: "01",
        category: "Education",
        title: "University Study",
        audience: "Students & Graduates",
        description:
          "For people considering academic study in Germany and needing to understand preparation, language, documents, and institutional requirements.",
        preparation: [
          "Study direction",
          "Language readiness",
          "Academic documents",
          "Application preparation",
        ],
        dependency:
          "University & program requirements",
        href: "/education",
      },
      {
        number: "02",
        category: "Training",
        title: "Vocational & Professional Training",
        audience: "School Graduates & Career Starters",
        description:
          "For people exploring structured vocational or professional training routes and the preparation needed before approaching suitable programs.",
        preparation: [
          "Training field",
          "German language",
          "Qualification review",
          "Application readiness",
        ],
        dependency:
          "Training provider & program requirements",
        href: "/contact",
      },
      {
        number: "03",
        category: "Professional",
        title: "Skilled Professional Pathway",
        audience: "Qualified Professionals",
        description:
          "For professionals who already hold qualifications and experience and want to understand how those credentials may fit the German market.",
        preparation: [
          "Qualification profile",
          "Experience",
          "Recognition where applicable",
          "Professional readiness",
        ],
        dependency:
          "Role, qualification & applicable rules",
        href: "/individuals",
      },
      {
        number: "04",
        category: "Healthcare",
        title: "Medical & Healthcare",
        audience: "Nurses, Doctors & Healthcare Professionals",
        description:
          "A regulated pathway where language, professional recognition, licensing requirements, and documentation can play a central role.",
        preparation: [
          "German language",
          "Recognition file",
          "Licensing readiness",
          "Professional communication",
        ],
        dependency:
          "Profession & competent authority",
        href: "/medical",
        featured: true,
      },
      {
        number: "05",
        category: "Business",
        title: "Germany Market Entry",
        audience: "Companies & Entrepreneurs",
        description:
          "For businesses evaluating Germany as a market for expansion, partnerships, institutional access, or commercial development.",
        preparation: [
          "Market analysis",
          "Entry strategy",
          "Business readiness",
          "Partner mapping",
        ],
        dependency:
          "Business model & target market",
        href: "/businesses",
        anchor: "germany-business",
      },
      {
        number: "06",
        category: "Institutional",
        title: "Education & Institutional Cooperation",
        audience: "Universities & Training Providers",
        description:
          "For educational organizations exploring academic connections, training cooperation, institutional networks, and Germany-facing initiatives.",
        preparation: [
          "Cooperation objective",
          "Institution profile",
          "Target organizations",
          "Partnership concept",
        ],
        dependency:
          "Institutional fit & mutual interest",
        href: "/education",
        anchor: "germany-education",
      },
    ],

    noteLabel: "For Individuals",

    noteTitle:
      'Don’t begin with “How do I move to Germany?”',

    noteText:
      "Begin with your actual objective: study, vocational training, professional work, healthcare, qualification recognition, or another defined route. That determines what preparation makes sense.",

    noteButton: "Identify My Route",

    legal:
      "Requirements can vary by profession, qualification, institution, federal state, responsible authority, and individual circumstances. Western Bridge provides preparation and advisory support; formal decisions remain with the relevant German authorities, institutions, employers, and organizations.",
  },

  ar: {
    eyebrow: "محدد المسار نحو ألمانيا",

    titleLineOne: "ابدأ بتحديد المسار.",
    highlightedTitle: "ثم ابنِ الاستعداد حوله.",

    headerCopy:
      "توجد في ألمانيا أنظمة مختلفة للتعليم والمهن المنظمة والمهنيين المؤهلين والشركات والمؤسسات. لذلك فإن أول خطوة مفيدة هي تحديد النظام الذي ينطبق فعليًا على هدفك.",

    columns: {
      route: "المسار",
      audience: "لمن يناسب",
      preparation: "الاستعداد",
      dependency: "العامل الرئيسي",
    },

    dependencyLabel: "يعتمد على",
    routeLink: "عرض المسار",

    routes: [
      {
        number: "01",
        category: "التعليم",
        title: "الدراسة الجامعية",
        audience: "الطلاب والخريجون",
        description:
          "للأشخاص الذين يفكرون في الدراسة الأكاديمية في ألمانيا ويريدون فهم الاستعداد واللغة والوثائق والمتطلبات المؤسسية.",
        preparation: [
          "تحديد اتجاه الدراسة",
          "الجاهزية اللغوية",
          "الوثائق الأكاديمية",
          "الاستعداد للتقديم",
        ],
        dependency:
          "متطلبات الجامعة والبرنامج",
        href: "/education",
      },
      {
        number: "02",
        category: "التدريب",
        title: "التدريب المهني والعملي",
        audience: "خريجو المدارس وبدايات المسار المهني",
        description:
          "للأشخاص الذين يستكشفون مسارات تدريب مهني منظمة ويريدون فهم الاستعداد المطلوب قبل التقدم للبرامج المناسبة.",
        preparation: [
          "مجال التدريب",
          "اللغة الألمانية",
          "مراجعة المؤهل",
          "الجاهزية للتقديم",
        ],
        dependency:
          "الجهة التدريبية ومتطلبات البرنامج",
        href: "/contact",
      },
      {
        number: "03",
        category: "مهني",
        title: "مسار المهنيين المؤهلين",
        audience: "المهنيون المؤهلون",
        description:
          "للمهنيين الذين لديهم مؤهلات وخبرة بالفعل ويريدون فهم مدى ملاءمة ملفهم لسوق العمل الألماني.",
        preparation: [
          "ملف المؤهلات",
          "الخبرة",
          "الاعتراف عند الحاجة",
          "الجاهزية المهنية",
        ],
        dependency:
          "الدور المهني والمؤهل والقواعد المطبقة",
        href: "/individuals",
      },
      {
        number: "04",
        category: "القطاع الصحي",
        title: "الطب والرعاية الصحية",
        audience: "الممرضون والأطباء والمتخصصون الصحيون",
        description:
          "مسار منظم قد تلعب فيه اللغة والاعتراف المهني ومتطلبات الترخيص والوثائق دورًا أساسيًا.",
        preparation: [
          "اللغة الألمانية",
          "ملف الاعتراف",
          "الاستعداد للترخيص",
          "التواصل المهني",
        ],
        dependency:
          "المهنة والجهة المختصة",
        href: "/medical",
        featured: true,
      },
      {
        number: "05",
        category: "الأعمال",
        title: "دخول السوق الألماني",
        audience: "الشركات ورواد الأعمال",
        description:
          "للشركات التي تدرس ألمانيا كسوق للتوسع أو الشراكات أو الوصول المؤسسي أو تطوير الأعمال.",
        preparation: [
          "تحليل السوق",
          "استراتيجية الدخول",
          "الجاهزية التجارية",
          "تحديد الشركاء",
        ],
        dependency:
          "نموذج العمل والسوق المستهدف",
        href: "/businesses",
        anchor: "germany-business",
      },
      {
        number: "06",
        category: "مؤسسي",
        title: "التعليم والتعاون المؤسسي",
        audience: "الجامعات ومقدمو التدريب",
        description:
          "للمؤسسات التعليمية التي تستكشف العلاقات الأكاديمية والتعاون التدريبي والشبكات المؤسسية والمبادرات المرتبطة بألمانيا.",
        preparation: [
          "هدف التعاون",
          "ملف المؤسسة",
          "الجهات المستهدفة",
          "تصور الشراكة",
        ],
        dependency:
          "مدى التوافق المؤسسي والاهتمام المتبادل",
        href: "/education",
        anchor: "germany-education",
      },
    ],

    noteLabel: "للأفراد",

    noteTitle:
      'لا تبدأ بالسؤال: "كيف أذهب إلى ألمانيا؟"',

    noteText:
      "ابدأ بهدفك الحقيقي: الدراسة، التدريب المهني، العمل المهني، القطاع الصحي، الاعتراف بالمؤهلات، أو أي مسار آخر محدد بوضوح. هذا هو ما يحدد نوع الاستعداد المناسب.",

    noteButton: "حدد مساري",

    legal:
      "قد تختلف المتطلبات بحسب المهنة والمؤهل والمؤسسة والولاية الألمانية والجهة الرسمية المسؤولة والظروف الفردية. تقدم Western Bridge الدعم في الاستعداد والتوجيه، بينما تبقى القرارات الرسمية من اختصاص الجهات الألمانية والمؤسسات وأصحاب العمل والجهات المعنية.",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleLineOne: string;
    highlightedTitle: string;
    headerCopy: string;
    columns: {
      route: string;
      audience: string;
      preparation: string;
      dependency: string;
    };
    dependencyLabel: string;
    routeLink: string;
    routes: RouteItem[];
    noteLabel: string;
    noteTitle: string;
    noteText: string;
    noteButton: string;
    legal: string;
  }
>;

export default function GermanyRouteFinderSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  return (
    <section className={styles.section}>
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

              <span className={styles.goldText}>
                {t.highlightedTitle}
              </span>
            </h2>
          </div>

          <div className={styles.headerCopy}>
            <p>{t.headerCopy}</p>
          </div>
        </div>

        <div className={styles.directory}>
          <div className={styles.directoryHeader}>
            <span>{t.columns.route}</span>
            <span>{t.columns.audience}</span>
            <span>{t.columns.preparation}</span>
            <span>{t.columns.dependency}</span>
          </div>

          {t.routes.map((route) => (
            <article
              key={route.number}
              id={route.anchor}
              className={`${styles.route} ${
                route.featured
                  ? styles.featured
                  : ""
              }`}
            >
              <div className={styles.routeIdentity}>
                <span className={styles.number}>
                  {route.number}
                </span>

                <span className={styles.category}>
                  {route.category}
                </span>

                <h3 className={styles.routeTitle}>
                  {route.title}
                </h3>
              </div>

              <div className={styles.audience}>
                <strong>
                  {route.audience}
                </strong>

                <p>
                  {route.description}
                </p>
              </div>

              <div className={styles.preparation}>
                {route.preparation.map((item) => (
                  <div
                    key={item}
                    className={styles.preparationItem}
                  >
                    <span
                      className={styles.dot}
                      aria-hidden="true"
                    />

                    {item}
                  </div>
                ))}
              </div>

              <div className={styles.dependency}>
                <span className={styles.dependencyLabel}>
                  {t.dependencyLabel}
                </span>

                <p>{route.dependency}</p>

                <Link
                  href={route.href}
                  className={styles.routeLink}
                >
                  {t.routeLink}

                  <span aria-hidden="true">
                    {locale === "ar" ? "←" : "→"}
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div
          id="germany-individuals"
          className={styles.individualNote}
        >
          <div className={styles.noteLogo}>
            <Image
              src="/logo/western-bridge-mark.jpeg"
              alt="Western Bridge"
              width={70}
              height={70}
              className={styles.noteLogoImage}
            />
          </div>

          <div>
            <span className={styles.noteLabel}>
              {t.noteLabel}
            </span>

            <h3 className={styles.noteTitle}>
              {t.noteTitle}
            </h3>

            <p className={styles.noteText}>
              {t.noteText}
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.noteButton}
          >
            {t.noteButton}

            <span aria-hidden="true">
              {locale === "ar" ? "←" : "→"}
            </span>
          </Link>
        </div>

        <p className={styles.legal}>
          {t.legal}
        </p>
      </Container>
    </section>
  );
}