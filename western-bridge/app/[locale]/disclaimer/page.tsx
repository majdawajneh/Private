
import type { Metadata } from "next";

import { Link } from "@/i18n/navigation";

import {
  createPageMetadata,
  type SiteLocale,
} from "@/lib/seo";

import styles from "./Disclaimer.module.css";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const content = {
  de: {
    metadataTitle:
      "Haftungsausschluss | Western Bridge",

    metadataDescription:
      "Wichtige Hinweise zu Beratung, beruflichen Wegen, Anerkennung, Visa, Bildung, Beschäftigung und externen Entscheidungen bei Western Bridge.",

    eyebrow:
      "Rechtliche Informationen",

    title:
      "Haftungsausschluss",

    intro:
      "Dieser Haftungsausschluss erläutert die Grenzen der von Western Bridge bereitgestellten Informationen und Unterstützungsleistungen sowie die Verantwortung unabhängiger Behörden, Arbeitgeber, Bildungseinrichtungen und anderer externer Stellen.",

    updated:
      "Stand: Oktober 2026",

    sections: [
      {
        title:
          "1. Allgemeiner Informationscharakter",
        paragraphs: [
          "Die auf dieser Website bereitgestellten Informationen dienen der allgemeinen Orientierung, Vorbereitung und Information.",
          "Sie stellen keine verbindliche rechtliche, behördliche, steuerliche, medizinische oder sonstige regulierte Fachberatung dar, sofern dies nicht ausdrücklich schriftlich vereinbart wurde.",
        ],
      },
      {
        title:
          "2. Keine Garantie für Visa oder Aufenthalt",
        paragraphs: [
          "Western Bridge kann Informationen und Orientierung zu internationalen Wegen, Vorbereitung und Verfahrensstrukturen bereitstellen.",
          "Western Bridge garantiert jedoch weder die Erteilung eines Visums noch einer Aufenthaltserlaubnis oder einer sonstigen Einreise- oder Aufenthaltsgenehmigung.",
          "Entsprechende Entscheidungen werden ausschließlich von den zuständigen Botschaften, Konsulaten, Ausländerbehörden oder sonstigen staatlichen Stellen getroffen.",
        ],
      },
      {
        title:
          "3. Keine Beschäftigungsgarantie",
        paragraphs: [
          "Western Bridge kann Nutzer bei beruflicher Orientierung, Vorbereitung und internationalen Karrierewegen unterstützen.",
          "Eine Beschäftigung, ein Arbeitsvertrag, eine Einladung zu einem Vorstellungsgespräch oder eine Einstellung werden nicht garantiert.",
          "Entscheidungen über Bewerbungen und Beschäftigung liegen ausschließlich bei den jeweiligen Arbeitgebern.",
        ],
      },
      {
        title:
          "4. Keine Garantie für Anerkennung oder Berufszulassung",
        paragraphs: [
          "Bei reglementierten Berufen, insbesondere im Gesundheitswesen, können formelle Anerkennungs-, Registrierungs-, Prüfungs- oder Zulassungsverfahren erforderlich sein.",
          "Western Bridge kann bei der Vorbereitung und Orientierung unterstützen, erteilt jedoch selbst keine berufliche Anerkennung, Approbation, Lizenz oder Registrierung.",
          "Alle verbindlichen Entscheidungen werden von den jeweils zuständigen Behörden, Kammern oder Berufsstellen getroffen.",
        ],
      },
      {
        title:
          "5. Keine Garantie für Studium oder Zulassung",
        paragraphs: [
          "Western Bridge kann Informationen zu Bildungswegen, Hochschulen, Programmen, Vorbereitung und institutionellen Möglichkeiten bereitstellen.",
          "Eine Zulassung zu einer Universität, Hochschule, Ausbildung, einem Kurs, einem Stipendium oder einer sonstigen Bildungseinrichtung wird nicht garantiert.",
          "Die endgültige Entscheidung liegt immer bei der jeweiligen Bildungseinrichtung oder Förderstelle.",
        ],
      },
      {
        title:
          "6. Keine Garantie für Partnerschaften oder Geschäftsergebnisse",
        paragraphs: [
          "Western Bridge kann Unternehmen und Institutionen bei Orientierung, Marktvorbereitung, Kooperationen und internationalen Verbindungen unterstützen.",
          "Es besteht keine Garantie für einen Geschäftsabschluss, eine Partnerschaft, einen Markteintritt, eine Genehmigung, Investition oder ein bestimmtes wirtschaftliches Ergebnis.",
          "Geschäftliche Entscheidungen und Ergebnisse hängen von unabhängigen Marktteilnehmern, Institutionen und regulatorischen Rahmenbedingungen ab.",
        ],
      },
      {
        title:
          "7. Änderungen von Gesetzen und Verfahren",
        paragraphs: [
          "Gesetze, Visabestimmungen, Anerkennungsverfahren, berufliche Voraussetzungen, Gebühren, Fristen und institutionelle Anforderungen können sich jederzeit ändern.",
          "Western Bridge bemüht sich um aktuelle Informationen, kann jedoch nicht gewährleisten, dass sämtliche Inhalte jederzeit vollständig oder aktuell sind.",
          "Verbindliche Informationen sollten stets bei der zuständigen offiziellen Stelle geprüft werden.",
        ],
      },
      {
        title:
          "8. Externe Websites und Drittanbieter",
        paragraphs: [
          "Diese Website kann auf externe Websites, Behörden, Organisationen, Unternehmen oder andere Drittanbieter verweisen.",
          "Western Bridge hat keine Kontrolle über deren Inhalte, Entscheidungen, Verfügbarkeit, Datenschutzpraktiken, Preise oder Leistungen und übernimmt hierfür keine Verantwortung.",
        ],
      },
      {
        title:
          "9. Verantwortung des Nutzers",
        paragraphs: [
          "Nutzer sind dafür verantwortlich, ihre persönlichen Voraussetzungen, Dokumente, Fristen und Angaben sorgfältig zu prüfen.",
          "Vor wichtigen rechtlichen, beruflichen, finanziellen oder behördlichen Entscheidungen sollten bei Bedarf qualifizierte Fachpersonen oder zuständige Behörden konsultiert werden.",
        ],
      },
      {
        title:
          "10. Keine Behördenvertretung",
        paragraphs: [
          "Western Bridge ist keine deutsche oder andere staatliche Behörde und handelt nicht im Namen einer Botschaft, eines Konsulats, einer Ausländerbehörde, Anerkennungsstelle, Universität, Kammer oder sonstigen öffentlichen Institution.",
          "Sofern nicht ausdrücklich schriftlich vereinbart, besitzt Western Bridge keine Entscheidungsbefugnis über behördliche oder institutionelle Verfahren.",
        ],
      },
      {
        title:
          "11. Individuelle Situationen",
        paragraphs: [
          "Internationale berufliche, akademische und geschäftliche Wege hängen von zahlreichen individuellen Faktoren ab.",
          "Allgemeine Informationen auf der Website können daher nicht jede persönliche Situation vollständig abbilden und ersetzen keine individuelle Prüfung.",
        ],
      },
      {
        title:
          "12. Haftungsbegrenzung",
        paragraphs: [
          "Soweit gesetzlich zulässig, übernimmt Western Bridge keine Haftung für Verluste oder Nachteile, die allein aus der Nutzung allgemeiner Website-Informationen oder aus Entscheidungen unabhängiger Dritter entstehen.",
          "Gesetzlich zwingende Haftungsregelungen bleiben unberührt.",
        ],
      },
    ],

    termsText:
      "Weitere Regeln zur Nutzung dieser Website und unserer allgemeinen Leistungen finden Sie in unseren Nutzungsbedingungen.",

    termsButton:
      "Nutzungsbedingungen",

    contactTitle:
      "Benötigen Sie weitere Informationen?",

    contactText:
      "Wenn Sie Fragen zum Umfang unserer Leistungen oder zu einem bestimmten internationalen Weg haben, können Sie Western Bridge direkt kontaktieren.",

    contactButton:
      "Kontakt aufnehmen",
  },

  en: {
    metadataTitle:
      "Disclaimer | Western Bridge",

    metadataDescription:
      "Important information about consulting, employment, visas, professional recognition, education and third-party decisions relating to Western Bridge services.",

    eyebrow:
      "Legal Information",

    title:
      "Disclaimer",

    intro:
      "This Disclaimer explains the limits of information and support provided by Western Bridge and clarifies the independent role of authorities, employers, educational institutions, professional bodies, and other external organizations.",

    updated:
      "Last updated: October 2026",

    sections: [
      {
        title:
          "1. General Information Only",
        paragraphs: [
          "Information available through this website is provided for general information, orientation, and preparation purposes.",
          "It does not constitute binding legal, governmental, tax, medical, or other regulated professional advice unless expressly agreed in writing.",
        ],
      },
      {
        title:
          "2. No Visa or Residence Guarantee",
        paragraphs: [
          "Western Bridge may provide information and orientation relating to international pathways, preparation, and procedural structures.",
          "Western Bridge does not guarantee the approval of a visa, residence permit, entry authorization, or any other immigration or residence decision.",
          "Such decisions are made exclusively by the relevant embassies, consulates, immigration authorities, or other competent government bodies.",
        ],
      },
      {
        title:
          "3. No Employment Guarantee",
        paragraphs: [
          "Western Bridge may support users with professional orientation, preparation, and international career pathways.",
          "Employment, job offers, interviews, contracts, or hiring outcomes are not guaranteed.",
          "All recruitment and employment decisions remain solely with the relevant employer.",
        ],
      },
      {
        title:
          "4. No Guarantee of Professional Recognition or Licensing",
        paragraphs: [
          "Regulated professions, particularly healthcare professions, may require formal recognition, registration, examinations, licensing, or other official procedures.",
          "Western Bridge may support orientation and preparation but does not itself issue professional recognition, licenses, registrations, or official approvals.",
          "All binding decisions are made by the relevant competent authorities, professional chambers, or regulatory bodies.",
        ],
      },
      {
        title:
          "5. No Guarantee of Admission or Education Outcomes",
        paragraphs: [
          "Western Bridge may provide information about educational pathways, institutions, programs, preparation, and academic opportunities.",
          "Admission to a university, educational institution, vocational program, course, scholarship, or other study opportunity is not guaranteed.",
          "Final decisions are made exclusively by the relevant institution or funding body.",
        ],
      },
      {
        title:
          "6. No Guarantee of Business or Partnership Outcomes",
        paragraphs: [
          "Western Bridge may support companies and institutions with international orientation, market preparation, partnerships, and cross-border connections.",
          "No business transaction, partnership, market entry, regulatory approval, investment, or financial outcome is guaranteed.",
          "Business outcomes depend on independent market participants, institutions, regulatory conditions, and other external factors.",
        ],
      },
      {
        title:
          "7. Laws and Procedures May Change",
        paragraphs: [
          "Laws, visa requirements, recognition procedures, professional requirements, fees, timelines, and institutional rules may change at any time.",
          "Western Bridge seeks to provide reliable and current information but cannot guarantee that all website content will remain complete or current at all times.",
          "Binding information should always be verified with the relevant official authority.",
        ],
      },
      {
        title:
          "8. External Websites and Third Parties",
        paragraphs: [
          "This website may refer or link to external websites, government bodies, organizations, companies, or other third parties.",
          "Western Bridge does not control their content, decisions, availability, privacy practices, pricing, or services and accepts no responsibility for them.",
        ],
      },
      {
        title:
          "9. User Responsibility",
        paragraphs: [
          "Users remain responsible for carefully reviewing their personal eligibility, documentation, deadlines, and submitted information.",
          "Where appropriate, qualified professionals or competent authorities should be consulted before important legal, financial, professional, or governmental decisions are made.",
        ],
      },
      {
        title:
          "10. No Government Representation",
        paragraphs: [
          "Western Bridge is not a German or other governmental authority and does not act on behalf of an embassy, consulate, immigration authority, recognition body, university, professional chamber, or other public institution.",
          "Unless expressly agreed in writing, Western Bridge has no decision-making authority over governmental or institutional procedures.",
        ],
      },
      {
        title:
          "11. Individual Circumstances",
        paragraphs: [
          "International professional, educational, and business pathways depend on numerous individual circumstances.",
          "General website information therefore cannot fully represent every individual case and does not replace an assessment of a specific situation.",
        ],
      },
      {
        title:
          "12. Limitation of Liability",
        paragraphs: [
          "To the extent permitted by applicable law, Western Bridge accepts no liability for losses or disadvantages resulting solely from reliance on general website information or from decisions made by independent third parties.",
          "Any mandatory statutory liability remains unaffected.",
        ],
      },
    ],

    termsText:
      "For additional rules governing use of this website and our general services, please review our Terms & Conditions.",

    termsButton:
      "Terms & Conditions",

    contactTitle:
      "Need more information?",

    contactText:
      "If you have questions about the scope of our services or a particular international pathway, you can contact Western Bridge directly.",

    contactButton:
      "Contact Western Bridge",
  },

  ar: {
    metadataTitle:
      "إخلاء المسؤولية | Western Bridge",

    metadataDescription:
      "معلومات مهمة حول حدود خدمات Western Bridge والاستشارات والتوظيف والتأشيرات والاعتراف المهني والتعليم وقرارات الجهات الخارجية.",

    eyebrow:
      "المعلومات القانونية",

    title:
      "إخلاء المسؤولية",

    intro:
      "يوضح هذا الإخلاء حدود المعلومات والدعم الذي تقدمه Western Bridge، كما يوضح أن القرارات الرسمية والمهنية والتعليمية والتوظيفية تخضع للجهات المختصة والمستقلة.",

    updated:
      "آخر تحديث: أكتوبر 2026",

    sections: [
      {
        title:
          "1. المعلومات العامة",
        paragraphs: [
          "تُقدَّم المعلومات الموجودة على هذا الموقع لأغراض التوجيه العام والاستعداد وتوضيح المسارات.",
          "ولا تشكل هذه المعلومات استشارة قانونية أو حكومية أو ضريبية أو طبية أو أي استشارة مهنية منظمة وملزمة، إلا إذا تم الاتفاق على ذلك بشكل صريح وكتابي.",
        ],
      },
      {
        title:
          "2. عدم ضمان التأشيرة أو الإقامة",
        paragraphs: [
          "يمكن لـ Western Bridge تقديم المعلومات والتوجيه المتعلق بالمسارات الدولية والاستعداد والإجراءات العامة.",
          "لكن Western Bridge لا تضمن الحصول على تأشيرة أو تصريح إقامة أو إذن دخول أو أي قرار متعلق بالهجرة أو الإقامة.",
          "تتخذ هذه القرارات حصريًا السفارات والقنصليات وسلطات الهجرة والجهات الحكومية المختصة.",
        ],
      },
      {
        title:
          "3. عدم ضمان التوظيف",
        paragraphs: [
          "قد تدعم Western Bridge المستخدمين في التوجيه المهني والاستعداد وفهم المسارات المهنية الدولية.",
          "لكنها لا تضمن وظيفة أو عرض عمل أو مقابلة أو عقدًا أو قرار توظيف.",
          "وتبقى قرارات التوظيف بالكامل لدى صاحب العمل المعني.",
        ],
      },
      {
        title:
          "4. عدم ضمان الاعتراف المهني أو الترخيص",
        paragraphs: [
          "قد تتطلب المهن المنظمة قانونيًا، وخصوصًا المهن الصحية، إجراءات رسمية للاعتراف أو التسجيل أو الامتحانات أو الترخيص.",
          "يمكن لـ Western Bridge المساعدة في التوجيه والاستعداد، لكنها لا تمنح بنفسها الاعتراف المهني أو الترخيص أو التسجيل أو الموافقة الرسمية.",
          "وتصدر جميع القرارات الملزمة عن السلطات والهيئات المهنية والتنظيمية المختصة.",
        ],
      },
      {
        title:
          "5. عدم ضمان القبول الدراسي",
        paragraphs: [
          "يمكن لـ Western Bridge تقديم معلومات حول المسارات التعليمية والمؤسسات والبرامج والاستعداد والفرص الأكاديمية.",
          "لكن القبول في جامعة أو مؤسسة تعليمية أو تدريب مهني أو دورة أو منحة أو أي فرصة تعليمية أخرى غير مضمون.",
          "ويعود القرار النهائي إلى المؤسسة التعليمية أو الجهة المانحة المختصة.",
        ],
      },
      {
        title:
          "6. عدم ضمان نتائج الأعمال أو الشراكات",
        paragraphs: [
          "قد تدعم Western Bridge الشركات والمؤسسات في التوجيه الدولي والاستعداد للأسواق وبناء الروابط والشراكات.",
          "لكنها لا تضمن إتمام صفقة أو شراكة أو دخول سوق أو موافقة تنظيمية أو استثمار أو نتيجة مالية محددة.",
          "وتعتمد نتائج الأعمال على أطراف السوق المستقلة والمؤسسات والأنظمة القانونية والعوامل الخارجية الأخرى.",
        ],
      },
      {
        title:
          "7. تغير القوانين والإجراءات",
        paragraphs: [
          "قد تتغير القوانين ومتطلبات التأشيرات وإجراءات الاعتراف المهني والمتطلبات الوظيفية والرسوم والمواعيد والقواعد المؤسسية في أي وقت.",
          "تسعى Western Bridge إلى توفير معلومات موثوقة ومحدثة، لكنها لا تضمن أن يبقى جميع محتوى الموقع كاملًا ومحدثًا في كل وقت.",
          "ويجب دائمًا التأكد من المعلومات الملزمة من الجهة الرسمية المختصة.",
        ],
      },
      {
        title:
          "8. المواقع والجهات الخارجية",
        paragraphs: [
          "قد يحتوي الموقع على إشارات أو روابط إلى مواقع حكومية أو مؤسسات أو شركات أو جهات خارجية أخرى.",
          "لا تتحكم Western Bridge بمحتوى هذه الجهات أو قراراتها أو توفر خدماتها أو سياسات الخصوصية أو الرسوم أو الخدمات التي تقدمها، ولا تتحمل المسؤولية عنها.",
        ],
      },
      {
        title:
          "9. مسؤولية المستخدم",
        paragraphs: [
          "يبقى المستخدم مسؤولًا عن مراجعة أهليته الشخصية ووثائقه ومواعيده النهائية والمعلومات التي يقدمها.",
          "وعند الحاجة، يجب الرجوع إلى متخصص مؤهل أو جهة رسمية مختصة قبل اتخاذ قرارات قانونية أو مالية أو مهنية أو حكومية مهمة.",
        ],
      },
      {
        title:
          "10. عدم تمثيل الجهات الحكومية",
        paragraphs: [
          "Western Bridge ليست جهة حكومية ألمانية أو تابعة لأي دولة أخرى، ولا تعمل باسم سفارة أو قنصلية أو دائرة هجرة أو جهة اعتراف مهني أو جامعة أو نقابة أو مؤسسة حكومية.",
          "وما لم يتم الاتفاق على خلاف ذلك بشكل صريح وكتابي، فلا تملك Western Bridge أي صلاحية لاتخاذ قرارات رسمية أو مؤسسية.",
        ],
      },
      {
        title:
          "11. اختلاف الحالات الفردية",
        paragraphs: [
          "تعتمد المسارات المهنية والتعليمية والتجارية الدولية على عوامل كثيرة تختلف من شخص أو جهة إلى أخرى.",
          "لذلك لا يمكن للمعلومات العامة المنشورة على الموقع أن تغطي كل حالة بشكل كامل، ولا تغني عن دراسة الحالة المحددة.",
        ],
      },
      {
        title:
          "12. حدود المسؤولية",
        paragraphs: [
          "بالقدر الذي يسمح به القانون، لا تتحمل Western Bridge المسؤولية عن خسائر أو أضرار تنشأ فقط بسبب الاعتماد على معلومات عامة منشورة على الموقع أو نتيجة قرارات تتخذها جهات مستقلة.",
          "ولا يؤثر ذلك على أي مسؤولية إلزامية يفرضها القانون.",
        ],
      },
    ],

    termsText:
      "للمزيد من القواعد المتعلقة باستخدام الموقع والإطار العام لخدماتنا، يمكنك مراجعة الشروط والأحكام.",

    termsButton:
      "الشروط والأحكام",

    contactTitle:
      "تحتاج إلى توضيح إضافي؟",

    contactText:
      "إذا كان لديك سؤال حول نطاق خدمات Western Bridge أو حول مسار دولي معين، يمكنك التواصل معنا مباشرة.",

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
    termsText: string;
    termsButton: string;
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
      "/disclaimer",

    image:
      "/images/seo/western-bridge-og.jpg",

    imageAlt:
      "Western Bridge",
  });
}

export default async function DisclaimerPage({
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

        <section className={styles.terms}>
          <p>
            {t.termsText}
          </p>

          <Link
            href="/terms"
            className={styles.secondaryButton}
          >
            {t.termsButton}

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
