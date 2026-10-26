"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

import styles from "./Footer.module.css";

type Locale = "de" | "en" | "ar";

type FooterLink = {
  label: string;
  href: string;
};

const content = {
  de: {
    homeLabel: "Western Bridge Startseite",

    focus:
      "Deutschland im Fokus. International verbunden.",

    individualTitle:
      "Privatpersonen",

    individualLinks: [
      {
        label: "Privatpersonen",
        href: "/individuals",
      },
      {
        label: "Wege nach Deutschland",
        href: "/germany",
      },
      {
        label: "Medizinische Fachkräfte",
        href: "/medical",
      },
      {
        label: "Training & Qualifizierung",
        href: "/services",
      },
    ],

    businessTitle:
      "Unternehmen",

    businessLinks: [
      {
        label: "Unternehmensberatung",
        href: "/businesses",
      },
      {
        label: "Marktstudien",
        href: "/businesses",
      },
      {
        label: "Internationale Partnerschaften",
        href: "/businesses",
      },
      {
        label: "Digitale Lösungen",
        href: "/services",
      },
    ],

    companyTitle:
      "Unternehmen",

    companyLinks: [
      {
        label: "Über Western Bridge",
        href: "/about",
      },
      {
        label: "Leistungen",
        href: "/services",
      },
      
      {
        label: "Kontakt",
        href: "/contact",
      },
    ],

    legalTitle:
      "Rechtliches",

    legalLinks: [
      {
        label: "Datenschutzerklärung",
        href: "/privacy-policy",
      },
      {
        label: "Nutzungsbedingungen",
        href: "/terms",
      },
      {
        label: "Haftungshinweis",
        href: "/disclaimer",
      },
      {
        label: "Cookie-Richtlinie",
        href: "/cookie-policy",
      },
    ],

    copyright:
      "Western Bridge. Alle Rechte vorbehalten.",

    bottomPrivacy:
      "Datenschutz",

    bottomTerms:
      "Bedingungen",

    bottomDisclaimer:
      "Haftungshinweis",

    bottomCookies:
      "Cookies",

    disclaimer:
      "Western Bridge bietet Beratung, Vorbereitung, Training, Qualifizierungsunterstützung, Recherche, Technologie, Networking und Koordinationsleistungen. Western Bridge ist keine direkte Personalvermittlung und garantiert keine Beschäftigung, Visa, Hochschulzulassungen, berufliche Anerkennung, Zulassungen oder aufenthaltsrechtlichen Ergebnisse. Endgültige Entscheidungen liegen bei den jeweils zuständigen Arbeitgebern, Institutionen, Behörden und Regulierungsstellen.",
  },

  en: {
    homeLabel: "Western Bridge Home",

    focus:
      "Germany-Focused. Internationally Connected.",

    individualTitle:
      "Individuals",

    individualLinks: [
      {
        label: "Individuals",
        href: "/individuals",
      },
      {
        label: "Germany Pathways",
        href: "/germany",
      },
      {
        label: "Medical Professionals",
        href: "/medical",
      },
      {
        label: "Training & Qualification",
        href: "/services",
      },
    ],

    businessTitle:
      "Businesses",

    businessLinks: [
      {
        label: "Business Consulting",
        href: "/businesses",
      },
      {
        label: "Market Studies",
        href: "/businesses",
      },
      {
        label: "International Partnerships",
        href: "/businesses",
      },
      {
        label: "Digital Solutions",
        href: "/services",
      },
    ],

    companyTitle:
      "Company",

    companyLinks: [
      {
        label: "About Western Bridge",
        href: "/about",
      },
      {
        label: "Services",
        href: "/services",
      },
      
      {
        label: "Contact",
        href: "/contact",
      },
    ],

    legalTitle:
      "Legal",

    legalLinks: [
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        label: "Terms & Conditions",
        href: "/terms",
      },
      {
        label: "Disclaimer",
        href: "/disclaimer",
      },
      {
        label: "Cookie Policy",
        href: "/cookie-policy",
      },
    ],

    copyright:
      "Western Bridge. All rights reserved.",

    bottomPrivacy:
      "Privacy",

    bottomTerms:
      "Terms",

    bottomDisclaimer:
      "Disclaimer",

    bottomCookies:
      "Cookies",

    disclaimer:
      "Western Bridge provides consulting, preparation, training, qualification support, research, technology, networking, and coordination services. Western Bridge is not a direct recruitment agency and does not guarantee employment, visas, university admission, professional recognition, licensing, or immigration outcomes. Final decisions remain with the relevant employers, institutions, authorities, and regulatory bodies.",
  },

  ar: {
    homeLabel: "الصفحة الرئيسية لـ Western Bridge",

    focus:
      "ألمانيا محور رئيسي. وروابطنا دولية.",

    individualTitle:
      "الأفراد",

    individualLinks: [
      {
        label: "الأفراد",
        href: "/individuals",
      },
      {
        label: "المسارات إلى ألمانيا",
        href: "/germany",
      },
      {
        label: "المتخصصون في القطاع الصحي",
        href: "/medical",
      },
      {
        label: "التدريب والتأهيل",
        href: "/services",
      },
    ],

    businessTitle:
      "الشركات",

    businessLinks: [
      {
        label: "استشارات الأعمال",
        href: "/businesses",
      },
      {
        label: "دراسات الأسواق",
        href: "/businesses",
      },
      {
        label: "الشراكات الدولية",
        href: "/businesses",
      },
      {
        label: "الحلول الرقمية",
        href: "/services",
      },
    ],

    companyTitle:
      "Western Bridge",

    companyLinks: [
      {
        label: "عن Western Bridge",
        href: "/about",
      },
      {
        label: "الخدمات",
        href: "/services",
      },
      
      {
        label: "تواصل معنا",
        href: "/contact",
      },
    ],

    legalTitle:
      "قانوني",

    legalLinks: [
      {
        label: "سياسة الخصوصية",
        href: "/privacy-policy",
      },
      {
        label: "الشروط والأحكام",
        href: "/terms",
      },
      {
        label: "إخلاء المسؤولية",
        href: "/disclaimer",
      },
      {
        label: "سياسة ملفات الارتباط",
        href: "/cookie-policy",
      },
    ],

    copyright:
      "Western Bridge. جميع الحقوق محفوظة.",

    bottomPrivacy:
      "الخصوصية",

    bottomTerms:
      "الشروط",

    bottomDisclaimer:
      "إخلاء المسؤولية",

    bottomCookies:
      "ملفات الارتباط",

    disclaimer:
      "تقدم Western Bridge خدمات الاستشارة والاستعداد والتدريب ودعم التأهيل والبحث والتكنولوجيا وبناء العلاقات والتنسيق. Western Bridge ليست وكالة توظيف مباشرة ولا تضمن الحصول على وظيفة أو تأشيرة أو قبول جامعي أو اعتراف مهني أو ترخيص أو نتيجة متعلقة بالإقامة أو الهجرة. وتبقى القرارات النهائية بيد أصحاب العمل والمؤسسات والجهات الرسمية والهيئات التنظيمية المختصة.",
  },
} satisfies Record<
  Locale,
  {
    homeLabel: string;
    focus: string;
    individualTitle: string;
    individualLinks: FooterLink[];
    businessTitle: string;
    businessLinks: FooterLink[];
    companyTitle: string;
    companyLinks: FooterLink[];
    legalTitle: string;
    legalLinks: FooterLink[];
    copyright: string;
    bottomPrivacy: string;
    bottomTerms: string;
    bottomDisclaimer: string;
    bottomCookies: string;
    disclaimer: string;
  }
>;

export default function Footer() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div
        className={styles.circleOne}
        aria-hidden="true"
      />

      <div
        className={styles.circleTwo}
        aria-hidden="true"
      />

      <div className={styles.main}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.brandColumn}>
              <Link
                href="/"
                aria-label={t.homeLabel}
                className={styles.logoLink}
              >
                <Image
                  src="/logo/logo.png"
                  alt="Western Bridge"
                  width={210}
                  height={100}
                  className={styles.logo}
                />
              </Link>

              <div className={styles.focusBadge}>
                <span
                  className={styles.focusDot}
                  aria-hidden="true"
                />

                {t.focus}
              </div>
            </div>

            <FooterColumn
              title={t.individualTitle}
              links={t.individualLinks}
            />

            <FooterColumn
              title={t.businessTitle}
              links={t.businessLinks}
            />

            <FooterColumn
              title={t.companyTitle}
              links={t.companyLinks}
            />

            <FooterColumn
              title={t.legalTitle}
              links={t.legalLinks}
            />
          </div>
        </Container>
      </div>

      <div className={styles.divider} />

      <Container>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} {t.copyright}
          </p>

          <div className={styles.bottomLinks}>
            <Link
              href="/privacy-policy"
              className={styles.bottomLink}
            >
              {t.bottomPrivacy}
            </Link>

            <Link
              href="/terms"
              className={styles.bottomLink}
            >
              {t.bottomTerms}
            </Link>

            <Link
              href="/disclaimer"
              className={styles.bottomLink}
            >
              {t.bottomDisclaimer}
            </Link>

            <Link
              href="/cookie-policy"
              className={styles.bottomLink}
            >
              {t.bottomCookies}
            </Link>
          </div>
        </div>
      </Container>

      <div className={styles.disclaimer}>
        <Container>
          <p className={styles.disclaimerText}>
            {t.disclaimer}
          </p>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div className={styles.column}>
      <h3 className={styles.columnTitle}>
        {title}
      </h3>

      <div className={styles.links}>
        {links.map((link) => (
          <Link
            key={`${link.href}-${link.label}`}
            href={link.href}
            className={styles.link}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}