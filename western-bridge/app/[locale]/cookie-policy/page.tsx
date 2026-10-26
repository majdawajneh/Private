
import type { Metadata } from "next";

import { Link } from "@/i18n/navigation";

import {
  createPageMetadata,
  type SiteLocale,
} from "@/lib/seo";

import styles from "./CookiePolicy.module.css";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const content = {
  de: {
    metadataTitle:
      "Cookie-Richtlinie | Western Bridge",

    metadataDescription:
      "Erfahren Sie, wie Western Bridge Cookies und vergleichbare Technologien auf dieser Website verwendet.",

    eyebrow:
      "Rechtliche Informationen",

    title:
      "Cookie-Richtlinie",

    intro:
      "Diese Cookie-Richtlinie erklärt, wie Western Bridge Cookies und vergleichbare Technologien auf dieser Website verwendet oder künftig eingesetzt werden können und welche Kontrollmöglichkeiten Nutzer haben.",

    updated:
      "Stand: Oktober 2026",

    sections: [
      {
        title:
          "1. Was sind Cookies?",
        paragraphs: [
          "Cookies sind kleine Textdateien oder vergleichbare Speicherinformationen, die auf einem Gerät gespeichert oder ausgelesen werden können, wenn eine Website besucht wird.",
          "Sie können beispielsweise dazu dienen, technische Funktionen bereitzustellen, Einstellungen zu speichern oder – sofern eingesetzt und rechtlich zulässig – die Nutzung einer Website zu analysieren.",
        ],
      },
      {
        title:
          "2. Aktuelle Verwendung auf dieser Website",
        paragraphs: [
          "Western Bridge verwendet derzeit nur solche technischen Mechanismen, die für den sicheren und ordnungsgemäßen Betrieb der Website erforderlich sein können.",
          "Soweit keine Analyse-, Marketing- oder vergleichbaren optionalen Dienste aktiviert sind, werden keine entsprechenden nicht notwendigen Cookies für Werbe- oder Trackingzwecke gesetzt.",
        ],
      },
      {
        title:
          "3. Technisch notwendige Cookies und Speichermechanismen",
        paragraphs: [
          "Technisch notwendige Cookies oder vergleichbare Mechanismen können eingesetzt werden, wenn sie erforderlich sind, um grundlegende Websitefunktionen, Sicherheit, Sitzungsverwaltung oder technische Einstellungen bereitzustellen.",
          "Solche Mechanismen sind nicht primär für Marketing- oder Profilbildungszwecke bestimmt.",
        ],
      },
      {
        title:
          "4. Funktionale Technologien",
        paragraphs: [
          "Funktionale Speichermechanismen können künftig eingesetzt werden, um freiwillige Einstellungen wie Sprache oder andere nutzerbezogene Präferenzen komfortabler zu speichern.",
          "Sollten solche Funktionen eingeführt werden, wird ihre Verwendung transparent dokumentiert.",
        ],
      },
      {
        title:
          "5. Analyse und Statistik",
        paragraphs: [
          "Falls Western Bridge künftig Analyse- oder Statistikdienste einsetzt, können diese Informationen über die Nutzung der Website verarbeiten.",
          "Soweit hierfür eine Einwilligung gesetzlich erforderlich ist, werden solche Dienste erst nach entsprechender Zustimmung aktiviert.",
        ],
      },
      {
        title:
          "6. Marketing und Werbung",
        paragraphs: [
          "Western Bridge setzt derzeit keine auf dieser Richtlinie basierenden Marketing- oder Werbe-Cookies voraus.",
          "Sollten künftig Werbe-, Remarketing- oder vergleichbare Technologien eingesetzt werden, wird diese Richtlinie aktualisiert und erforderliche Einwilligungen werden vor der Aktivierung eingeholt.",
        ],
      },
      {
        title:
          "7. Dienste von Drittanbietern",
        paragraphs: [
          "Bestimmte Websitefunktionen können technische Dienste externer Anbieter verwenden, beispielsweise Hosting-, Sicherheits- oder Infrastrukturleistungen.",
          "Falls ein externer Dienst eigene Cookies oder vergleichbare Technologien verwendet, richtet sich die konkrete Verarbeitung zusätzlich nach dessen technischen und datenschutzrechtlichen Rahmenbedingungen.",
        ],
      },
      {
        title:
          "8. Einwilligung und Cookie-Banner",
        paragraphs: [
          "Wenn künftig nicht notwendige Cookies oder vergleichbare Technologien eingesetzt werden, die eine Einwilligung erfordern, wird Western Bridge vor deren Aktivierung eine geeignete Auswahl- und Einwilligungsmöglichkeit bereitstellen.",
          "Eine erteilte Einwilligung kann grundsätzlich für die Zukunft geändert oder widerrufen werden.",
        ],
      },
      {
        title:
          "9. Browser-Einstellungen",
        paragraphs: [
          "Die meisten Browser ermöglichen es Nutzern, Cookies zu löschen, zu blockieren oder deren Verwendung einzuschränken.",
          "Wenn technisch notwendige Speichermechanismen vollständig blockiert werden, können einzelne Funktionen einer Website möglicherweise eingeschränkt sein.",
        ],
      },
      {
        title:
          "10. Änderungen dieser Cookie-Richtlinie",
        paragraphs: [
          "Diese Cookie-Richtlinie kann aktualisiert werden, wenn neue technische Funktionen, externe Dienste oder Analyse- und Marketingwerkzeuge eingeführt oder rechtliche Anforderungen geändert werden.",
          "Die jeweils aktuelle Fassung wird auf dieser Seite veröffentlicht.",
        ],
      },
    ],

    privacyText:
      "Weitere Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer Datenschutzerklärung.",

    privacyButton:
      "Datenschutzerklärung",

    contactTitle:
      "Fragen zu Cookies oder Datenschutz?",

    contactText:
      "Wenn Sie Fragen zur Nutzung von Cookies oder vergleichbaren Technologien auf dieser Website haben, können Sie Western Bridge über die Kontaktseite erreichen.",

    contactButton:
      "Kontakt aufnehmen",
  },

  en: {
    metadataTitle:
      "Cookie Policy | Western Bridge",

    metadataDescription:
      "Learn how Western Bridge uses cookies and similar technologies on this website.",

    eyebrow:
      "Legal Information",

    title:
      "Cookie Policy",

    intro:
      "This Cookie Policy explains how Western Bridge uses, or may in the future use, cookies and similar technologies on this website and the choices available to users.",

    updated:
      "Last updated: October 2026",

    sections: [
      {
        title:
          "1. What Are Cookies?",
        paragraphs: [
          "Cookies are small text files or similar storage information that may be stored on or accessed from a device when a website is visited.",
          "They may be used to provide technical functionality, remember preferences, or, where implemented and legally permitted, understand how a website is used.",
        ],
      },
      {
        title:
          "2. Current Use on This Website",
        paragraphs: [
          "Western Bridge currently uses only technical mechanisms that may be necessary for the secure and proper operation of the website.",
          "Where analytics, advertising, or similar optional services are not enabled, corresponding non-essential cookies are not used for advertising or tracking purposes.",
        ],
      },
      {
        title:
          "3. Strictly Necessary Cookies and Storage",
        paragraphs: [
          "Strictly necessary cookies or similar mechanisms may be used where required to provide core website functionality, security, session handling, or technical settings.",
          "These mechanisms are not primarily intended for marketing or user profiling.",
        ],
      },
      {
        title:
          "4. Functional Technologies",
        paragraphs: [
          "Functional storage mechanisms may in the future be used to remember voluntary settings such as language selection or other user preferences.",
          "If such functionality is introduced, its use will be documented transparently.",
        ],
      },
      {
        title:
          "5. Analytics and Statistics",
        paragraphs: [
          "If Western Bridge introduces analytics or statistical services in the future, those services may process information about website usage.",
          "Where consent is legally required, such services will only be activated after the user has provided the required consent.",
        ],
      },
      {
        title:
          "6. Marketing and Advertising",
        paragraphs: [
          "Western Bridge does not currently rely on marketing or advertising cookies covered by this policy.",
          "If advertising, remarketing, or similar technologies are introduced in the future, this policy will be updated and any required consent will be obtained before activation.",
        ],
      },
      {
        title:
          "7. Third-Party Services",
        paragraphs: [
          "Certain website functions may rely on external technical providers, including hosting, infrastructure, or security services.",
          "If an external service uses its own cookies or similar technologies, the relevant processing may also be subject to that provider's technical and privacy terms.",
        ],
      },
      {
        title:
          "8. Consent and Cookie Banner",
        paragraphs: [
          "If Western Bridge introduces non-essential cookies or similar technologies that legally require consent, an appropriate consent and preference mechanism will be provided before those technologies are activated.",
          "Where consent has been given, it can generally be changed or withdrawn for future use.",
        ],
      },
      {
        title:
          "9. Browser Controls",
        paragraphs: [
          "Most browsers allow users to delete cookies, block them, or restrict their use.",
          "Blocking all technically necessary storage mechanisms may affect the availability or operation of certain website functions.",
        ],
      },
      {
        title:
          "10. Changes to This Cookie Policy",
        paragraphs: [
          "This Cookie Policy may be updated if new technical functionality, external services, analytics tools, advertising tools, or legal requirements are introduced.",
          "The latest version will be published on this page.",
        ],
      },
    ],

    privacyText:
      "For more information about how personal data is processed, please review our Privacy Policy.",

    privacyButton:
      "Privacy Policy",

    contactTitle:
      "Questions about cookies or privacy?",

    contactText:
      "If you have questions about the use of cookies or similar technologies on this website, you can contact Western Bridge through our contact page.",

    contactButton:
      "Contact Western Bridge",
  },

  ar: {
    metadataTitle:
      "سياسة ملفات الارتباط | Western Bridge",

    metadataDescription:
      "تعرّف على كيفية استخدام Western Bridge لملفات الارتباط والتقنيات المشابهة على الموقع.",

    eyebrow:
      "المعلومات القانونية",

    title:
      "سياسة ملفات الارتباط",

    intro:
      "توضح هذه السياسة كيفية استخدام Western Bridge لملفات الارتباط والتقنيات المشابهة حاليًا أو مستقبلًا على هذا الموقع، والخيارات المتاحة للمستخدمين للتحكم بها.",

    updated:
      "آخر تحديث: أكتوبر 2026",

    sections: [
      {
        title:
          "1. ما هي ملفات الارتباط؟",
        paragraphs: [
          "ملفات الارتباط هي ملفات نصية صغيرة أو وسائل تخزين مشابهة يمكن حفظها على الجهاز أو الوصول إليها عند زيارة موقع إلكتروني.",
          "يمكن استخدامها لتوفير وظائف تقنية أو حفظ بعض التفضيلات أو، عند استخدامها وبما يسمح به القانون، لفهم كيفية استخدام الموقع.",
        ],
      },
      {
        title:
          "2. الاستخدام الحالي على الموقع",
        paragraphs: [
          "تستخدم Western Bridge حاليًا فقط الآليات التقنية التي قد تكون ضرورية لتشغيل الموقع بشكل آمن وسليم.",
          "وفي حال عدم تفعيل خدمات التحليل أو الإعلانات أو الخدمات الاختيارية المشابهة، فلا يتم استخدام ملفات ارتباط غير ضرورية لأغراض الإعلانات أو التتبع.",
        ],
      },
      {
        title:
          "3. ملفات الارتباط الضرورية تقنيًا",
        paragraphs: [
          "قد يتم استخدام ملفات ارتباط أو وسائل تخزين ضرورية تقنيًا عندما تكون مطلوبة لتوفير الوظائف الأساسية للموقع أو الحماية أو إدارة الجلسات أو الإعدادات التقنية.",
          "ولا يكون الهدف الأساسي من هذه الآليات التسويق أو إنشاء ملفات تعريف للمستخدمين.",
        ],
      },
      {
        title:
          "4. التقنيات الوظيفية",
        paragraphs: [
          "قد يتم مستقبلًا استخدام وسائل تخزين وظيفية لحفظ اختيارات اختيارية مثل اللغة أو بعض تفضيلات المستخدم.",
          "وفي حال إضافة هذه الوظائف، سيتم توضيح استخدامها بشكل شفاف.",
        ],
      },
      {
        title:
          "5. التحليلات والإحصائيات",
        paragraphs: [
          "إذا تمت إضافة خدمات تحليل أو إحصائيات مستقبلًا، فقد تقوم هذه الخدمات بمعالجة معلومات حول استخدام الموقع.",
          "وعندما يتطلب القانون الحصول على موافقة، فلن يتم تفعيل هذه الخدمات إلا بعد الحصول على الموافقة المطلوبة.",
        ],
      },
      {
        title:
          "6. التسويق والإعلانات",
        paragraphs: [
          "لا تعتمد Western Bridge حاليًا على ملفات ارتباط تسويقية أو إعلانية ضمن نطاق هذه السياسة.",
          "إذا تم مستقبلًا استخدام تقنيات للإعلانات أو إعادة الاستهداف أو ما يشابهها، فسيتم تحديث هذه السياسة والحصول على الموافقات اللازمة قبل تفعيلها.",
        ],
      },
      {
        title:
          "7. خدمات الجهات الخارجية",
        paragraphs: [
          "قد تعتمد بعض الوظائف التقنية للموقع على مزودي خدمات خارجيين، مثل خدمات الاستضافة أو البنية التحتية أو الحماية.",
          "إذا استخدمت خدمة خارجية ملفات ارتباط أو تقنيات مشابهة خاصة بها، فقد تخضع المعالجة أيضًا للشروط التقنية وسياسات الخصوصية الخاصة بتلك الجهة.",
        ],
      },
      {
        title:
          "8. الموافقة وإشعار ملفات الارتباط",
        paragraphs: [
          "إذا أضافت Western Bridge مستقبلًا ملفات ارتباط غير ضرورية أو تقنيات مشابهة تتطلب موافقة قانونية، فسيتم توفير وسيلة مناسبة للموافقة وإدارة التفضيلات قبل تفعيل هذه التقنيات.",
          "وعند منح الموافقة، يمكن عادةً تعديلها أو سحبها بالنسبة للاستخدام المستقبلي.",
        ],
      },
      {
        title:
          "9. إعدادات المتصفح",
        paragraphs: [
          "تتيح معظم المتصفحات للمستخدم حذف ملفات الارتباط أو حظرها أو تقييد استخدامها.",
          "وقد يؤدي حظر جميع وسائل التخزين الضرورية تقنيًا إلى التأثير في عمل بعض وظائف الموقع.",
        ],
      },
      {
        title:
          "10. تحديث سياسة ملفات الارتباط",
        paragraphs: [
          "قد يتم تحديث هذه السياسة عند إضافة وظائف تقنية جديدة أو خدمات خارجية أو أدوات تحليل أو إعلانات أو عند تغير المتطلبات القانونية.",
          "وسيتم نشر أحدث نسخة على هذه الصفحة.",
        ],
      },
    ],

    privacyText:
      "للمزيد من المعلومات حول كيفية معالجة البيانات الشخصية، يمكنك مراجعة سياسة الخصوصية.",

    privacyButton:
      "سياسة الخصوصية",

    contactTitle:
      "لديك سؤال حول ملفات الارتباط أو الخصوصية؟",

    contactText:
      "إذا كان لديك أي استفسار حول استخدام ملفات الارتباط أو التقنيات المشابهة على الموقع، يمكنك التواصل مع Western Bridge من خلال صفحة التواصل.",

    contactButton:
      "تواصل معنا",
  },
} satisfies Record<
  SiteLocale,
  {
    metadataTitle: string;
    metadataDescription: string;
    eyebrow: string;
    title: string;
    intro: string;
    updated: string;
    sections: {
      title: string;
      paragraphs: string[];
    }[];
    privacyText: string;
    privacyButton: string;
    contactTitle: string;
    contactText: string;
    contactButton: string;
  }
>;

function getLocale(
  locale: string
): SiteLocale {
  if (
    locale === "de" ||
    locale === "en" ||
    locale === "ar"
  ) {
    return locale;
  }

  return "de";
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: requestedLocale } =
    await params;

  const locale =
    getLocale(requestedLocale);

  const t =
    content[locale];

  return createPageMetadata({
    locale,

    title:
      t.metadataTitle,

    description:
      t.metadataDescription,

    path:
      "/cookie-policy",

    image:
      "/images/seo/western-bridge-og.jpg",

    imageAlt:
      "Western Bridge",
  });
}

export default async function CookiePolicyPage({
  params,
}: PageProps) {
  const { locale: requestedLocale } =
    await params;

  const locale =
    getLocale(requestedLocale);

  const t =
    content[locale];

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>
            {t.eyebrow}
          </span>

          <h1>
            {t.title}
          </h1>

          <p className={styles.intro}>
            {t.intro}
          </p>

          <span className={styles.updated}>
            {t.updated}
          </span>
        </header>

        <div className={styles.content}>
          {t.sections.map((section) => (
            <section
              key={section.title}
              className={styles.section}
            >
              <h2>
                {section.title}
              </h2>

              {section.paragraphs.map(
                (paragraph) => (
                  <p key={paragraph}>
                    {paragraph}
                  </p>
                )
              )}
            </section>
          ))}
        </div>

        <section className={styles.privacy}>
          <p>
            {t.privacyText}
          </p>

          <Link
            href="/privacy-policy"
            className={styles.secondaryButton}
          >
            {t.privacyButton}

            <span aria-hidden="true">
              {locale === "ar"
                ? "←"
                : "→"}
            </span>
          </Link>
        </section>

        <section className={styles.contact}>
          <div>
            <h2>
              {t.contactTitle}
            </h2>

            <p>
              {t.contactText}
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.button}
          >
            {t.contactButton}

            <span aria-hidden="true">
              {locale === "ar"
                ? "←"
                : "→"}
            </span>
          </Link>
        </section>
      </div>
    </main>
  );
}