import type { Metadata } from "next";

import { Link } from "@/i18n/navigation";

import {
  createPageMetadata,
  type SiteLocale,
} from "@/lib/seo";

import styles from "./Terms.module.css";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const content = {
  de: {
    metadataTitle:
      "Allgemeine Nutzungsbedingungen | Western Bridge",

    metadataDescription:
      "Lesen Sie die Bedingungen für die Nutzung der Website und Dienstleistungen von Western Bridge.",

    eyebrow:
      "Rechtliche Informationen",

    title:
      "Allgemeine Nutzungsbedingungen",

    intro:
      "Diese Bedingungen regeln die Nutzung der Website von Western Bridge sowie die allgemeinen Rahmenbedingungen für Informationen, Anfragen und mögliche Leistungen, die über oder im Zusammenhang mit dieser Website angeboten werden.",

    updated:
      "Stand: Oktober 2026",

    sections: [
      {
        title:
          "1. Geltungsbereich",
        paragraphs: [
          "Diese Nutzungsbedingungen gelten für Besucher und Nutzer der Website von Western Bridge sowie für Personen, die über die Website Kontakt aufnehmen oder Informationen zu unseren Leistungen anfordern.",
          "Zusätzliche oder individuelle Vereinbarungen können gelten, wenn später eine konkrete Leistung vereinbart wird.",
        ],
      },
      {
        title:
          "2. Rolle von Western Bridge",
        paragraphs: [
          "Western Bridge bietet internationale Beratung, Vorbereitung, Qualifizierung, Orientierung und Unterstützung im Zusammenhang mit beruflichen, bildungsbezogenen, institutionellen und unternehmerischen Wegen.",
          "Western Bridge ist keine staatliche Behörde, Botschaft, Ausländerbehörde, Anerkennungsstelle, Universität, Berufskammer oder sonstige öffentliche Entscheidungsstelle.",
          "Sofern nicht ausdrücklich anders angegeben, handelt Western Bridge nicht als Arbeitgeber und garantiert keine Arbeitsstelle, Zulassung, Anerkennung, Lizenz, Visum, Aufenthaltserlaubnis, Geschäftspartnerschaft oder sonstige behördliche oder institutionelle Entscheidung.",
        ],
      },
      {
        title:
          "3. Keine Erfolgsgarantie",
        paragraphs: [
          "Informationen, Beratung und Vorbereitung können die Entscheidungsfindung und Vorbereitung unterstützen, stellen jedoch keine Garantie für ein bestimmtes Ergebnis dar.",
          "Entscheidungen über Beschäftigung, Visa, Aufenthalt, Anerkennung, Zulassung, Lizenzierung, Studienaufnahme, Partnerschaften oder sonstige Verfahren werden ausschließlich von den jeweils zuständigen Arbeitgebern, Behörden, Hochschulen, Kammern, Institutionen oder sonstigen Entscheidungsträgern getroffen.",
        ],
      },
      {
        title:
          "4. Informationen auf der Website",
        paragraphs: [
          "Western Bridge bemüht sich, die auf der Website bereitgestellten Informationen sorgfältig und aktuell zu halten.",
          "Gesetze, Verwaltungsverfahren, Zulassungsvoraussetzungen, Anerkennungsverfahren, Marktbedingungen und institutionelle Anforderungen können sich jedoch jederzeit ändern.",
          "Daher sollten wichtige Entscheidungen nicht ausschließlich auf allgemeinen Website-Inhalten beruhen. Maßgeblich sind stets die aktuellen Informationen der zuständigen offiziellen Stellen.",
        ],
      },
      {
        title:
          "5. Pflichten der Nutzer",
        paragraphs: [
          "Nutzer verpflichten sich, bei Anfragen und im Rahmen einer möglichen Zusammenarbeit richtige, vollständige und aktuelle Angaben zu machen.",
          "Es dürfen keine falschen, manipulierten oder rechtswidrig erlangten Dokumente, Informationen oder Nachweise übermittelt werden.",
          "Nutzer sind selbst dafür verantwortlich, die Richtigkeit ihrer persönlichen Angaben und Unterlagen zu prüfen.",
        ],
      },
      {
        title:
          "6. Professionelle und behördliche Anforderungen",
        paragraphs: [
          "Bestimmte Berufe, insbesondere im Gesundheitswesen und in anderen regulierten Bereichen, können behördliche Anerkennungen, Sprachkenntnisse, Prüfungen, Registrierungen, Berufserlaubnisse oder sonstige Voraussetzungen erfordern.",
          "Western Bridge kann bei der Orientierung und Vorbereitung unterstützen, trifft jedoch keine Anerkennungs- oder Zulassungsentscheidung und ersetzt keine zuständige Behörde oder Berufsorganisation.",
        ],
      },
      {
        title:
          "7. Drittanbieter und externe Stellen",
        paragraphs: [
          "Im Rahmen von Informationen oder Leistungen können Verweise auf Behörden, Hochschulen, Unternehmen, Prüfstellen, Dienstleister oder andere externe Organisationen erfolgen.",
          "Western Bridge kontrolliert diese externen Stellen nicht und ist nicht verantwortlich für deren Entscheidungen, Inhalte, Gebühren, Bearbeitungszeiten, technische Systeme oder Geschäftsbedingungen.",
        ],
      },
      {
        title:
          "8. Geistiges Eigentum",
        paragraphs: [
          "Die Inhalte dieser Website, einschließlich Texte, Gestaltung, Markenbestandteile, Grafiken, Struktur und sonstige Materialien, können urheberrechtlich oder durch andere Rechte geschützt sein.",
          "Eine Vervielfältigung, Veröffentlichung, kommerzielle Nutzung oder Bearbeitung wesentlicher Inhalte ist ohne vorherige Zustimmung von Western Bridge nicht gestattet, soweit keine gesetzliche Ausnahme besteht.",
        ],
      },
      {
        title:
          "9. Zulässige Nutzung der Website",
        paragraphs: [
          "Die Website darf nur für rechtmäßige Zwecke genutzt werden.",
          "Es ist untersagt, die Website zu missbrauchen, Sicherheitsmechanismen zu umgehen, automatisierte Angriffe durchzuführen, Schadsoftware einzusetzen oder die Funktionsfähigkeit der Website oder ihrer Infrastruktur zu beeinträchtigen.",
        ],
      },
      {
        title:
          "10. Verfügbarkeit der Website",
        paragraphs: [
          "Western Bridge bemüht sich um einen zuverlässigen Betrieb der Website, garantiert jedoch keine ununterbrochene oder fehlerfreie Verfügbarkeit.",
          "Die Website kann insbesondere wegen Wartung, technischer Störungen, Sicherheitsmaßnahmen oder Änderungen vorübergehend eingeschränkt oder nicht verfügbar sein.",
        ],
      },
      {
        title:
          "11. Haftungsbeschränkung",
        paragraphs: [
          "Western Bridge haftet nur im Rahmen des jeweils anwendbaren Rechts.",
          "Soweit gesetzlich zulässig, besteht keine Haftung für Entscheidungen, die ausschließlich auf allgemeinen Website-Informationen beruhen, oder für Ergebnisse, die von unabhängigen Behörden, Arbeitgebern, Hochschulen, Berufsstellen oder anderen Dritten abhängen.",
          "Zwingende gesetzliche Haftungsrechte bleiben unberührt.",
        ],
      },
      {
        title:
          "12. Datenschutz",
        paragraphs: [
          "Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer Datenschutzerklärung.",
        ],
      },
      {
        title:
          "13. Änderungen dieser Bedingungen",
        paragraphs: [
          "Western Bridge kann diese Bedingungen anpassen, wenn sich Leistungen, Website-Funktionen, rechtliche Anforderungen oder betriebliche Rahmenbedingungen ändern.",
          "Die jeweils aktuelle Fassung wird auf dieser Seite veröffentlicht.",
        ],
      },
      {
        title:
          "14. Anwendbare individuelle Vereinbarungen",
        paragraphs: [
          "Wenn für eine konkrete Leistung ein gesonderter Vertrag, ein Angebot oder individuelle Bedingungen vereinbart werden, gelten diese für die betreffende Leistung vorrangig, soweit sie von diesen allgemeinen Nutzungsbedingungen abweichen.",
        ],
      },
    ],

    privacyText:
      "Weitere Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer Datenschutzerklärung.",

    privacyButton:
      "Datenschutzerklärung",

    contactTitle:
      "Fragen zu diesen Bedingungen?",

    contactText:
      "Wenn Sie Fragen zu diesen Bedingungen oder zu unseren Leistungen haben, können Sie Western Bridge über die Kontaktseite erreichen.",

    contactButton:
      "Kontakt aufnehmen",
  },

  en: {
    metadataTitle:
      "Terms & Conditions | Western Bridge",

    metadataDescription:
      "Read the terms governing the use of the Western Bridge website and its general service framework.",

    eyebrow:
      "Legal Information",

    title:
      "Terms & Conditions",

    intro:
      "These Terms & Conditions govern the use of the Western Bridge website and provide the general framework applicable to information, inquiries, and potential services offered through or in connection with this website.",

    updated:
      "Last updated: October 2026",

    sections: [
      {
        title:
          "1. Scope",
        paragraphs: [
          "These Terms apply to visitors and users of the Western Bridge website and to individuals or organizations that contact us or request information about our services.",
          "Additional or individual terms may apply where a specific service is subsequently agreed.",
        ],
      },
      {
        title:
          "2. Role of Western Bridge",
        paragraphs: [
          "Western Bridge provides international consulting, preparation, qualification, orientation, and support relating to professional, educational, institutional, and business pathways.",
          "Western Bridge is not a government authority, embassy, immigration authority, professional recognition body, university, professional chamber, or other public decision-making authority.",
          "Unless expressly stated otherwise, Western Bridge does not act as an employer and does not guarantee employment, admission, professional recognition, licensing, visas, residence permits, business partnerships, or any other governmental or institutional decision.",
        ],
      },
      {
        title:
          "3. No Guarantee of Outcome",
        paragraphs: [
          "Information, consulting, and preparation may support decision-making and readiness but do not guarantee any particular result.",
          "Decisions relating to employment, visas, residence, professional recognition, licensing, university admission, partnerships, or other procedures are made solely by the relevant employers, authorities, universities, professional bodies, institutions, or other independent decision-makers.",
        ],
      },
      {
        title:
          "4. Website Information",
        paragraphs: [
          "Western Bridge seeks to provide website information carefully and to keep it reasonably current.",
          "However, laws, administrative procedures, admission requirements, recognition procedures, market conditions, and institutional requirements may change at any time.",
          "Important decisions should therefore not rely solely on general website content. Current information from the relevant official authority should always be consulted where applicable.",
        ],
      },
      {
        title:
          "5. User Responsibilities",
        paragraphs: [
          "Users are expected to provide accurate, complete, and current information when making inquiries or engaging with Western Bridge.",
          "False, altered, fraudulent, or unlawfully obtained documents, information, or evidence must not be submitted.",
          "Users remain responsible for verifying the accuracy of their personal information and supporting documents.",
        ],
      },
      {
        title:
          "6. Professional and Regulatory Requirements",
        paragraphs: [
          "Certain professions, particularly healthcare and other regulated professions, may require official recognition, language proficiency, examinations, registration, professional licensing, or other formal requirements.",
          "Western Bridge may assist with orientation and preparation but does not issue recognition or licensing decisions and does not replace the competent authority or professional body.",
        ],
      },
      {
        title:
          "7. Third Parties and External Organizations",
        paragraphs: [
          "Information or services may refer to government authorities, universities, companies, examination bodies, service providers, or other external organizations.",
          "Western Bridge does not control such external organizations and is not responsible for their decisions, content, fees, processing times, technical systems, or terms.",
        ],
      },
      {
        title:
          "8. Intellectual Property",
        paragraphs: [
          "Content on this website, including text, design, branding elements, graphics, structure, and other materials, may be protected by copyright, trademark, or other intellectual property rights.",
          "Substantial reproduction, publication, commercial use, or modification of the website content is not permitted without prior authorization from Western Bridge unless permitted by applicable law.",
        ],
      },
      {
        title:
          "9. Acceptable Use",
        paragraphs: [
          "The website may only be used for lawful purposes.",
          "Users must not misuse the website, attempt to bypass security measures, conduct automated attacks, distribute malicious software, or interfere with the website or its supporting infrastructure.",
        ],
      },
      {
        title:
          "10. Website Availability",
        paragraphs: [
          "Western Bridge aims to maintain reliable website availability but does not guarantee uninterrupted or error-free access.",
          "Access may be temporarily limited because of maintenance, technical problems, security measures, or updates.",
        ],
      },
      {
        title:
          "11. Limitation of Liability",
        paragraphs: [
          "Western Bridge is liable only to the extent required under applicable law.",
          "To the extent legally permitted, Western Bridge is not responsible for decisions made solely on the basis of general website information or for outcomes controlled by independent authorities, employers, universities, professional bodies, or other third parties.",
          "Any mandatory statutory rights or liabilities remain unaffected.",
        ],
      },
      {
        title:
          "12. Privacy",
        paragraphs: [
          "Information about how personal data is processed is available in our Privacy Policy.",
        ],
      },
      {
        title:
          "13. Changes to These Terms",
        paragraphs: [
          "Western Bridge may update these Terms if services, website functionality, legal requirements, or operational circumstances change.",
          "The latest version will be published on this page.",
        ],
      },
      {
        title:
          "14. Individual Agreements",
        paragraphs: [
          "Where a specific service is governed by a separate contract, proposal, or individually agreed terms, those terms will take priority for that service to the extent they differ from these general Terms.",
        ],
      },
    ],

    privacyText:
      "For more information about personal data processing, please review our Privacy Policy.",

    privacyButton:
      "Privacy Policy",

    contactTitle:
      "Questions about these terms?",

    contactText:
      "If you have questions about these Terms or our services, you can contact Western Bridge through our contact page.",

    contactButton:
      "Contact Western Bridge",
  },

  ar: {
    metadataTitle:
      "الشروط والأحكام | Western Bridge",

    metadataDescription:
      "اطلع على الشروط المنظمة لاستخدام موقع Western Bridge والإطار العام للخدمات والمعلومات المقدمة من خلاله.",

    eyebrow:
      "المعلومات القانونية",

    title:
      "الشروط والأحكام",

    intro:
      "تنظم هذه الشروط والأحكام استخدام موقع Western Bridge، كما توضح الإطار العام للمعلومات والاستفسارات والخدمات المحتملة التي يتم تقديمها من خلال الموقع أو بالارتباط به.",

    updated:
      "آخر تحديث: أكتوبر 2026",

    sections: [
      {
        title:
          "1. نطاق التطبيق",
        paragraphs: [
          "تنطبق هذه الشروط على زوار ومستخدمي موقع Western Bridge وعلى الأفراد أو الجهات التي تتواصل معنا أو تطلب معلومات حول خدماتنا.",
          "قد تطبق شروط أو اتفاقيات إضافية عند الاتفاق لاحقًا على خدمة محددة.",
        ],
      },
      {
        title:
          "2. دور Western Bridge",
        paragraphs: [
          "تقدم Western Bridge الاستشارات الدولية والاستعداد والتأهيل والتوجيه والدعم المتعلق بالمسارات المهنية والتعليمية والمؤسسية ومسارات الأعمال.",
          "Western Bridge ليست جهة حكومية أو سفارة أو دائرة هجرة أو جهة اعتراف مهني أو جامعة أو نقابة مهنية أو أي جهة رسمية مخولة باتخاذ قرارات حكومية أو مؤسسية.",
          "ما لم يتم النص صراحة على خلاف ذلك، لا تعمل Western Bridge كجهة توظيف ولا تضمن الحصول على وظيفة أو قبول جامعي أو اعتراف مهني أو ترخيص أو تأشيرة أو إقامة أو شراكة تجارية أو أي قرار رسمي أو مؤسسي آخر.",
        ],
      },
      {
        title:
          "3. عدم ضمان النتائج",
        paragraphs: [
          "قد تساعد المعلومات والاستشارات وخدمات الاستعداد في تحسين الجاهزية وفهم الخيارات، لكنها لا تمثل ضمانًا للوصول إلى نتيجة محددة.",
          "تتخذ الجهات المختصة وحدها القرارات المتعلقة بالتوظيف والتأشيرات والإقامة والاعتراف المهني والترخيص والقبول الدراسي والشراكات وغيرها من الإجراءات.",
        ],
      },
      {
        title:
          "4. المعلومات المنشورة على الموقع",
        paragraphs: [
          "تسعى Western Bridge إلى توفير معلومات دقيقة والمحافظة على تحديث المحتوى قدر الإمكان.",
          "ومع ذلك، يمكن أن تتغير القوانين والإجراءات الإدارية ومتطلبات القبول والاعتراف المهني وظروف الأسواق ومتطلبات المؤسسات في أي وقت.",
          "لذلك لا ينبغي اتخاذ قرارات مهمة بالاعتماد فقط على المعلومات العامة المنشورة على الموقع، ويجب الرجوع إلى أحدث المعلومات الصادرة عن الجهة الرسمية المختصة.",
        ],
      },
      {
        title:
          "5. مسؤوليات المستخدم",
        paragraphs: [
          "يلتزم المستخدم بتقديم معلومات صحيحة وكاملة ومحدثة عند إرسال الاستفسارات أو التعامل مع Western Bridge.",
          "يُمنع تقديم وثائق أو معلومات مزورة أو معدلة بشكل غير مشروع أو تم الحصول عليها بطريقة غير قانونية.",
          "يبقى المستخدم مسؤولًا عن التأكد من صحة بياناته الشخصية ووثائقه.",
        ],
      },
      {
        title:
          "6. المتطلبات المهنية والتنظيمية",
        paragraphs: [
          "قد تتطلب بعض المهن، وخصوصًا المهن الصحية والمهن المنظمة قانونيًا، اعترافًا رسميًا أو مستوى لغويًا محددًا أو امتحانات أو تسجيلًا أو ترخيصًا مهنيًا أو متطلبات أخرى.",
          "يمكن لـ Western Bridge المساعدة في الفهم والاستعداد، لكنها لا تصدر قرارات الاعتراف أو الترخيص ولا تحل محل الجهة الرسمية أو المهنية المختصة.",
        ],
      },
      {
        title:
          "7. الجهات الخارجية",
        paragraphs: [
          "قد تتضمن المعلومات أو الخدمات إشارات إلى جهات حكومية أو جامعات أو شركات أو جهات امتحان أو مزودي خدمات أو مؤسسات خارجية أخرى.",
          "لا تتحكم Western Bridge بهذه الجهات ولا تتحمل مسؤولية قراراتها أو محتواها أو رسومها أو أوقات المعالجة أو أنظمتها التقنية أو شروطها.",
        ],
      },
      {
        title:
          "8. الملكية الفكرية",
        paragraphs: [
          "قد تكون محتويات الموقع، بما في ذلك النصوص والتصميم وعناصر العلامة التجارية والرسومات والبنية وغيرها من المواد، محمية بحقوق النشر أو العلامات التجارية أو حقوق ملكية فكرية أخرى.",
          "لا يجوز نسخ أو نشر أو استخدام أو تعديل أجزاء جوهرية من المحتوى لأغراض تجارية دون موافقة مسبقة من Western Bridge، إلا إذا كان القانون يسمح بذلك.",
        ],
      },
      {
        title:
          "9. الاستخدام المقبول للموقع",
        paragraphs: [
          "يجب استخدام الموقع فقط لأغراض قانونية.",
          "يُمنع إساءة استخدام الموقع أو محاولة تجاوز وسائل الحماية أو تنفيذ هجمات آلية أو نشر برمجيات ضارة أو التأثير في عمل الموقع أو بنيته التقنية.",
        ],
      },
      {
        title:
          "10. توفر الموقع",
        paragraphs: [
          "تسعى Western Bridge إلى المحافظة على توفر الموقع واستقراره، لكنها لا تضمن توفره بشكل مستمر ودون أخطاء.",
          "قد يتم تقييد الوصول مؤقتًا بسبب الصيانة أو الأعطال التقنية أو الإجراءات الأمنية أو التحديثات.",
        ],
      },
      {
        title:
          "11. حدود المسؤولية",
        paragraphs: [
          "تتحمل Western Bridge المسؤولية فقط ضمن الحدود التي يفرضها القانون المعمول به.",
          "وبالقدر الذي يسمح به القانون، لا تتحمل Western Bridge مسؤولية القرارات التي يتم اتخاذها بالاعتماد فقط على المعلومات العامة للموقع أو عن نتائج تتحكم بها جهات مستقلة مثل السلطات أو أصحاب العمل أو الجامعات أو الجهات المهنية أو غيرها من الأطراف الثالثة.",
          "ولا يؤثر ذلك على أي حقوق أو مسؤوليات إلزامية لا يجوز استبعادها قانونيًا.",
        ],
      },
      {
        title:
          "12. الخصوصية",
        paragraphs: [
          "يمكن الاطلاع على المعلومات المتعلقة بمعالجة البيانات الشخصية في سياسة الخصوصية الخاصة بنا.",
        ],
      },
      {
        title:
          "13. تعديل الشروط",
        paragraphs: [
          "قد تقوم Western Bridge بتحديث هذه الشروط عند تغير الخدمات أو وظائف الموقع أو المتطلبات القانونية أو الظروف التشغيلية.",
          "وسيتم نشر أحدث نسخة على هذه الصفحة.",
        ],
      },
      {
        title:
          "14. الاتفاقيات الفردية",
        paragraphs: [
          "إذا خضعت خدمة محددة لعقد منفصل أو عرض أو شروط تم الاتفاق عليها بشكل فردي، فتكون تلك الشروط هي المعتمدة للخدمة المحددة بالقدر الذي تختلف فيه عن هذه الشروط العامة.",
        ],
      },
    ],

    privacyText:
      "لمزيد من المعلومات حول معالجة البيانات الشخصية، يمكنك مراجعة سياسة الخصوصية.",

    privacyButton:
      "سياسة الخصوصية",

    contactTitle:
      "لديك سؤال حول الشروط؟",

    contactText:
      "إذا كان لديك أي استفسار حول هذه الشروط أو خدمات Western Bridge، يمكنك التواصل معنا من خلال صفحة التواصل.",

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
      "/terms",

    image:
      "/images/seo/western-bridge-og.jpg",

    imageAlt:
      "Western Bridge",
  });
}

export default async function TermsPage({
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