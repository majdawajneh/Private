import type { Metadata } from "next";

import { Link } from "@/i18n/navigation";

import {
  createPageMetadata,
  type SiteLocale,
} from "@/lib/seo";

import styles from "./PrivacyPolicy.module.css";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const content = {
  de: {
    metadataTitle:
      "Datenschutzerklärung | Western Bridge",

    metadataDescription:
      "Erfahren Sie, wie Western Bridge personenbezogene Daten verarbeitet und schützt, wenn Sie unsere Website nutzen oder uns kontaktieren.",

    eyebrow:
      "Rechtliche Informationen",

    title:
      "Datenschutzerklärung",

    intro:
      "Diese Datenschutzerklärung erläutert, welche personenbezogenen Daten Western Bridge beim Besuch dieser Website und bei der Kontaktaufnahme verarbeitet, zu welchen Zwecken dies geschieht und welche Rechte betroffene Personen haben.",

    updated:
      "Stand: Oktober 2026",

    sections: [
      {
        title:
          "1. Verantwortliche Stelle",
        paragraphs: [
          "Verantwortlich für die Verarbeitung personenbezogener Daten über diese Website ist Western Bridge.",
          "Die vollständigen rechtlichen Unternehmens- und Kontaktdaten müssen vor dem öffentlichen Start entsprechend der registrierten Unternehmensstruktur ergänzt und aktuell gehalten werden.",
        ],
      },
      {
        title:
          "2. Welche Daten wir verarbeiten",
        paragraphs: [
          "Wenn Sie unser Kontaktformular verwenden, können wir insbesondere Ihren Namen, Ihre E-Mail-Adresse, Telefonnummer oder WhatsApp-Nummer, Ihr aktuelles Land, die Art Ihrer Anfrage, den Betreff sowie die von Ihnen übermittelte Nachricht verarbeiten.",
          "Beim Zugriff auf die Website können technisch erforderliche Informationen verarbeitet werden, etwa IP-Adresse, Zeitpunkt des Zugriffs, angeforderte Ressource, Browser- und Geräteinformationen sowie technische Protokolldaten.",
        ],
      },
      {
        title:
          "3. Zwecke der Verarbeitung",
        paragraphs: [
          "Wir verarbeiten personenbezogene Daten, um Anfragen zu prüfen und zu beantworten, angefragte Leistungen einzuordnen, die Kommunikation mit Interessenten oder Kunden zu ermöglichen sowie die Sicherheit und technische Funktionsfähigkeit der Website zu gewährleisten.",
          "Die übermittelten Informationen werden nicht für einen mit Ihrer Anfrage unvereinbaren Zweck verwendet.",
        ],
      },
      {
        title:
          "4. Rechtsgrundlagen",
        paragraphs: [
          "Je nach Kontext kann die Verarbeitung zur Durchführung vorvertraglicher Maßnahmen oder zur Erfüllung eines Vertrags erforderlich sein. Darüber hinaus können berechtigte Interessen an sicherer Websitebereitstellung, Kommunikation und Bearbeitung legitimer geschäftlicher Anfragen eine Rechtsgrundlage darstellen.",
          "Soweit eine Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese für die Zukunft widerrufen.",
        ],
      },
      {
        title:
          "5. Dienstleister und Empfänger",
        paragraphs: [
          "Western Bridge kann technische Dienstleister einsetzen, die für Hosting, E-Mail-Versand, Websitebetrieb oder Sicherheitsfunktionen erforderlich sind. Diese Dienstleister erhalten personenbezogene Daten nur soweit dies für die jeweilige Aufgabe erforderlich ist.",
          "Personenbezogene Daten werden nicht verkauft.",
        ],
      },
      {
        title:
          "6. Internationale Datenübermittlungen",
        paragraphs: [
          "Bei der Nutzung internationaler Infrastruktur- oder Technologiedienstleister kann eine Verarbeitung außerhalb Ihres Aufenthaltslandes oder außerhalb des Europäischen Wirtschaftsraums stattfinden.",
          "Soweit erforderlich, werden geeignete rechtliche Schutzmechanismen für solche Übermittlungen berücksichtigt.",
        ],
      },
      {
        title:
          "7. Speicherdauer",
        paragraphs: [
          "Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.",
          "Anfragen können für einen angemessenen Zeitraum aufbewahrt werden, um die Kommunikation nachzuvollziehen und Anschlussfragen zu bearbeiten.",
        ],
      },
      {
        title:
          "8. Ihre Rechte",
        paragraphs: [
          "Abhängig vom anwendbaren Datenschutzrecht können Sie insbesondere Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen bestimmte Verarbeitungen verlangen.",
          "Wenn die Verarbeitung auf Einwilligung beruht, besteht grundsätzlich das Recht, diese Einwilligung für die Zukunft zu widerrufen. Betroffene Personen können außerdem Beschwerde bei einer zuständigen Datenschutzaufsichtsbehörde einreichen.",
        ],
      },
      {
        title:
          "9. Kontaktformular",
        paragraphs: [
          "Die Angaben im Kontaktformular werden ausschließlich verwendet, um Ihre Anfrage zu prüfen, zu bearbeiten und darauf zu antworten sowie gegebenenfalls weitere von Ihnen gewünschte Schritte zu besprechen.",
          "Bitte übermitteln Sie über das Kontaktformular keine sensiblen personenbezogenen Daten, medizinischen Unterlagen, Ausweisdokumente oder vertraulichen Zugangsdaten, sofern Western Bridge Sie nicht ausdrücklich über einen geeigneten Übermittlungsweg dazu auffordert.",
        ],
      },
      {
        title:
          "10. Cookies und vergleichbare Technologien",
        paragraphs: [
          "Technisch notwendige Speicher- oder Sicherheitsmechanismen können eingesetzt werden, soweit sie für den Betrieb der Website erforderlich sind.",
          "Sollten künftig Analyse-, Marketing- oder andere nicht notwendige Cookies eingesetzt werden, wird diese Datenschutzerklärung entsprechend aktualisiert und, soweit erforderlich, eine Einwilligung eingeholt.",
        ],
      },
      {
        title:
          "11. Sicherheit",
        paragraphs: [
          "Western Bridge trifft angemessene technische und organisatorische Maßnahmen, um personenbezogene Daten vor Verlust, unbefugtem Zugriff, Veränderung oder Offenlegung zu schützen.",
          "Keine Übertragung oder Speicherung im Internet kann jedoch absolute Sicherheit garantieren.",
        ],
      },
      {
        title:
          "12. Änderungen dieser Datenschutzerklärung",
        paragraphs: [
          "Diese Datenschutzerklärung kann angepasst werden, wenn sich unsere Website, Dienstleistungen, technische Infrastruktur oder rechtliche Anforderungen ändern.",
          "Die jeweils aktuelle Fassung wird auf dieser Seite veröffentlicht.",
        ],
      },
    ],

    contactTitle:
      "Fragen zum Datenschutz?",

    contactText:
      "Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten können Sie Western Bridge über unsere Kontaktseite erreichen.",

    contactButton:
      "Kontakt aufnehmen",
  },

  en: {
    metadataTitle:
      "Privacy Policy | Western Bridge",

    metadataDescription:
      "Learn how Western Bridge processes and protects personal data when you use our website or contact us.",

    eyebrow:
      "Legal Information",

    title:
      "Privacy Policy",

    intro:
      "This Privacy Policy explains what personal data Western Bridge may process when you visit this website or contact us, why the data is processed, and the rights available to individuals.",

    updated:
      "Last updated: October 2026",

    sections: [
      {
        title:
          "1. Data Controller",
        paragraphs: [
          "Western Bridge is responsible for the processing of personal data through this website.",
          "The complete legal entity and contact information must be completed and kept current before public launch in accordance with the registered business structure.",
        ],
      },
      {
        title:
          "2. Data We May Process",
        paragraphs: [
          "When you use our contact form, we may process information including your name, email address, telephone or WhatsApp number, current country, inquiry category, subject, and the message you submit.",
          "When the website is accessed, technically necessary information may also be processed, such as IP address, access time, requested resource, browser and device information, and technical server logs.",
        ],
      },
      {
        title:
          "3. Purposes of Processing",
        paragraphs: [
          "We process personal data to review and respond to inquiries, understand requested services, communicate with prospective or existing clients, and maintain the security and technical operation of the website.",
          "Information submitted to Western Bridge will not be used for purposes incompatible with the reason for which it was provided.",
        ],
      },
      {
        title:
          "4. Legal Bases",
        paragraphs: [
          "Depending on the circumstances, processing may be necessary to take steps at your request before entering into a contract or to perform a contract. Legitimate interests in secure website operation, communication, and handling genuine business inquiries may also provide a legal basis.",
          "Where processing relies on consent, that consent may be withdrawn for future processing.",
        ],
      },
      {
        title:
          "5. Service Providers and Recipients",
        paragraphs: [
          "Western Bridge may use technical service providers required for hosting, email delivery, website operation, or security. Such providers receive personal data only to the extent necessary to perform their respective services.",
          "Western Bridge does not sell personal data.",
        ],
      },
      {
        title:
          "6. International Data Transfers",
        paragraphs: [
          "The use of international infrastructure or technology providers may result in processing outside your country of residence or outside the European Economic Area.",
          "Where required, appropriate legal safeguards for such transfers will be considered.",
        ],
      },
      {
        title:
          "7. Data Retention",
        paragraphs: [
          "Personal data is retained only for as long as necessary for the relevant purpose or as required by applicable legal retention obligations.",
          "Inquiries may be retained for a reasonable period to maintain communication records and respond to follow-up questions.",
        ],
      },
      {
        title:
          "8. Your Rights",
        paragraphs: [
          "Depending on applicable data protection law, you may have rights including access, rectification, erasure, restriction of processing, data portability, and objection to certain processing.",
          "Where processing is based on consent, you generally have the right to withdraw that consent for future processing. You may also have the right to lodge a complaint with an applicable data protection supervisory authority.",
        ],
      },
      {
        title:
          "9. Contact Form",
        paragraphs: [
          "Information submitted through the contact form is used to assess, process, and respond to your inquiry and, where appropriate, discuss further steps requested by you.",
          "Please do not submit sensitive personal data, medical records, identity documents, passwords, or confidential credentials through the general contact form unless Western Bridge specifically instructs you to use an appropriate secure channel.",
        ],
      },
      {
        title:
          "10. Cookies and Similar Technologies",
        paragraphs: [
          "Technically necessary storage or security mechanisms may be used where required for the operation of the website.",
          "If analytics, advertising, or other non-essential cookies are introduced in the future, this Privacy Policy will be updated and consent will be requested where required.",
        ],
      },
      {
        title:
          "11. Security",
        paragraphs: [
          "Western Bridge uses reasonable technical and organizational measures intended to protect personal data against loss, unauthorized access, alteration, or disclosure.",
          "However, no internet transmission or storage method can guarantee absolute security.",
        ],
      },
      {
        title:
          "12. Changes to This Policy",
        paragraphs: [
          "This Privacy Policy may be updated when our website, services, technical infrastructure, or legal requirements change.",
          "The latest version will be published on this page.",
        ],
      },
    ],

    contactTitle:
      "Questions about privacy?",

    contactText:
      "If you have questions about how your personal data is processed, you can reach Western Bridge through our contact page.",

    contactButton:
      "Contact Western Bridge",
  },

  ar: {
    metadataTitle:
      "سياسة الخصوصية | Western Bridge",

    metadataDescription:
      "تعرّف على كيفية معالجة Western Bridge للبيانات الشخصية وحمايتها عند استخدام الموقع أو التواصل معنا.",

    eyebrow:
      "المعلومات القانونية",

    title:
      "سياسة الخصوصية",

    intro:
      "توضح سياسة الخصوصية هذه أنواع البيانات الشخصية التي قد تعالجها Western Bridge عند زيارة الموقع أو التواصل معنا، وأسباب المعالجة، والحقوق المتاحة للأفراد.",

    updated:
      "آخر تحديث: أكتوبر 2026",

    sections: [
      {
        title:
          "1. الجهة المسؤولة عن البيانات",
        paragraphs: [
          "تُعد Western Bridge الجهة المسؤولة عن معالجة البيانات الشخصية من خلال هذا الموقع.",
          "يجب استكمال بيانات الكيان القانوني ووسائل الاتصال الرسمية قبل الإطلاق العام وفقًا للهيكل القانوني المسجل للشركة، والمحافظة على تحديثها.",
        ],
      },
      {
        title:
          "2. البيانات التي قد نعالجها",
        paragraphs: [
          "عند استخدام نموذج التواصل، قد نعالج بيانات مثل الاسم والبريد الإلكتروني ورقم الهاتف أو واتساب والدولة الحالية ونوع الاستفسار والموضوع والرسالة التي ترسلها.",
          "قد تتم أيضًا معالجة بيانات تقنية ضرورية عند زيارة الموقع، مثل عنوان IP ووقت الوصول والصفحة أو المورد المطلوب ومعلومات المتصفح والجهاز وسجلات الخادم التقنية.",
        ],
      },
      {
        title:
          "3. أغراض المعالجة",
        paragraphs: [
          "نستخدم البيانات لمراجعة الاستفسارات والرد عليها، وفهم الخدمة المطلوبة، والتواصل مع العملاء أو المهتمين، والحفاظ على أمن الموقع وتشغيله التقني.",
          "لن تستخدم المعلومات المقدمة لغرض يتعارض مع السبب الذي تم تقديمها من أجله.",
        ],
      },
      {
        title:
          "4. الأساس القانوني للمعالجة",
        paragraphs: [
          "بحسب الحالة، قد تكون المعالجة ضرورية لاتخاذ خطوات بناءً على طلبك قبل إبرام عقد أو لتنفيذ عقد. وقد تستند بعض المعالجات أيضًا إلى مصالح مشروعة مثل تأمين الموقع والتواصل والتعامل مع الاستفسارات التجارية الحقيقية.",
          "عندما تستند المعالجة إلى موافقتك، يمكنك سحب هذه الموافقة بالنسبة للمعالجة المستقبلية.",
        ],
      },
      {
        title:
          "5. مزودو الخدمات والجهات المستلمة",
        paragraphs: [
          "قد تستخدم Western Bridge مزودي خدمات تقنية لأغراض الاستضافة أو إرسال البريد الإلكتروني أو تشغيل الموقع أو الحماية الأمنية. ولا يحصل هؤلاء المزودون على البيانات إلا بالقدر اللازم لتنفيذ الخدمة المطلوبة.",
          "لا تقوم Western Bridge ببيع البيانات الشخصية.",
        ],
      },
      {
        title:
          "6. نقل البيانات دوليًا",
        paragraphs: [
          "قد يؤدي استخدام مزودي بنية تحتية أو خدمات تقنية دولية إلى معالجة البيانات خارج دولة إقامة المستخدم أو خارج المنطقة الاقتصادية الأوروبية.",
          "عند الحاجة، تتم مراعاة وسائل الحماية القانونية المناسبة لعمليات النقل هذه.",
        ],
      },
      {
        title:
          "7. مدة الاحتفاظ",
        paragraphs: [
          "نحتفظ بالبيانات الشخصية فقط للفترة اللازمة لتحقيق الغرض الذي جُمعت من أجله أو للمدة التي تفرضها الالتزامات القانونية المعمول بها.",
          "قد يتم الاحتفاظ بالاستفسارات لفترة معقولة للحفاظ على سجل التواصل والتعامل مع أي أسئلة أو متابعة لاحقة.",
        ],
      },
      {
        title:
          "8. حقوقك",
        paragraphs: [
          "بحسب قانون حماية البيانات المطبق، قد تشمل حقوقك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها أو تقييد معالجتها أو نقلها أو الاعتراض على بعض أنواع المعالجة.",
          "إذا كانت المعالجة تعتمد على الموافقة، فيمكنك عادةً سحب موافقتك للمعالجة المستقبلية. وقد يكون لك أيضًا حق تقديم شكوى إلى جهة حماية البيانات المختصة.",
        ],
      },
      {
        title:
          "9. نموذج التواصل",
        paragraphs: [
          "تُستخدم المعلومات التي ترسلها عبر نموذج التواصل لتقييم استفسارك ومعالجته والرد عليه ومناقشة الخطوات التالية التي تطلبها عند الحاجة.",
          "يرجى عدم إرسال بيانات شخصية حساسة أو تقارير طبية أو وثائق هوية أو كلمات مرور أو معلومات دخول سرية من خلال نموذج التواصل العام، إلا إذا طلبت Western Bridge ذلك صراحة عبر وسيلة إرسال مناسبة وآمنة.",
        ],
      },
      {
        title:
          "10. ملفات الارتباط والتقنيات المشابهة",
        paragraphs: [
          "قد يتم استخدام وسائل تخزين أو حماية ضرورية تقنيًا عندما تكون مطلوبة لتشغيل الموقع.",
          "إذا تمت إضافة أدوات تحليل أو إعلانات أو ملفات ارتباط غير ضرورية مستقبلًا، فسيتم تحديث هذه السياسة وطلب الموافقة عندما يكون ذلك مطلوبًا.",
        ],
      },
      {
        title:
          "11. أمن البيانات",
        paragraphs: [
          "تستخدم Western Bridge إجراءات تقنية وتنظيمية معقولة تهدف إلى حماية البيانات من الفقد أو الوصول غير المصرح به أو التعديل أو الإفصاح.",
          "ومع ذلك، لا يمكن ضمان أمان كامل لأي وسيلة نقل أو تخزين عبر الإنترنت.",
        ],
      },
      {
        title:
          "12. تحديث سياسة الخصوصية",
        paragraphs: [
          "قد يتم تحديث هذه السياسة عند تغير الموقع أو الخدمات أو البنية التقنية أو المتطلبات القانونية.",
          "وسيتم نشر أحدث نسخة على هذه الصفحة.",
        ],
      },
    ],

    contactTitle:
      "لديك سؤال بخصوص الخصوصية؟",

    contactText:
      "إذا كان لديك سؤال حول كيفية معالجة بياناتك الشخصية، يمكنك التواصل مع Western Bridge من خلال صفحة التواصل.",

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
      "/privacy-policy",

    image:
      "/images/seo/western-bridge-og.jpg",

    imageAlt:
      "Western Bridge",
  });
}

export default async function PrivacyPolicyPage({
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