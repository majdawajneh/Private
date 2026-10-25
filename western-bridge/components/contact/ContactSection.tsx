"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useLocale } from "next-intl";

import Container from "@/components/ui/Container";

import styles from "./ContactSection.module.css";

type Locale = "de" | "en" | "ar";
type FormStatus = "idle" | "sending" | "success" | "error";

type RequestType = {
  value:
    | "Individual"
    | "Medical & Healthcare"
    | "Business"
    | "Education & Institution";
  label: string;
};

const content = {
  de: {
    eyebrow: "Western Bridge kontaktieren",

    titleBefore: "Beginnen Sie mit dem,",
    highlightedTitle: "was Sie erreichen möchten.",

    intro:
      "Erzählen Sie uns von Ihrer aktuellen Situation, Ihrem Ziel, Ihrer Branche und Ihrem Zielmarkt. So können wir besser einschätzen, ob Western Bridge Ihren nächsten Schritt sinnvoll unterstützen kann.",

    imageAlt:
      "Professionelles internationales Beratungsgespräch",

    imageLabel:
      "Western Bridge",

    imageTitle:
      "Geben Sie uns den Kontext. Dort beginnen wir.",

    usefulLabel:
      "Hilfreiche Informationen",

    usefulTitle:
      "Was sollten Sie angeben?",

    usefulItems: [
      "Ihre aktuelle Situation",
      "Was Sie erreichen möchten",
      "Ihr Beruf, Unternehmen oder Ihre Institution",
      "Ihr Zielland oder Zielmarkt",
    ],

    formLabel:
      "Neue Anfrage",

    formTitle:
      "Beschreiben Sie uns Ihr Anliegen",

    formCode:
      "WB / CONTACT",

    honeypotLabel:
      "Website",

    nameLabel:
      "Vollständiger Name *",

    namePlaceholder:
      "Ihr Name",

    emailLabel:
      "E-Mail-Adresse *",

    emailPlaceholder:
      "name@beispiel.de",

    phoneLabel:
      "Telefon / WhatsApp",

    phonePlaceholder:
      "+49 ...",

    countryLabel:
      "Aktuelles Land",

    countryPlaceholder:
      "z. B. Jordanien",

    requestLegend:
      "Worum geht es bei Ihrer Anfrage? *",

    requestTypes: [
      {
        value: "Individual",
        label: "Privatperson",
      },
      {
        value: "Medical & Healthcare",
        label: "Medizin & Gesundheitswesen",
      },
      {
        value: "Business",
        label: "Unternehmen",
      },
      {
        value: "Education & Institution",
        label: "Bildung & Institution",
      },
    ] satisfies RequestType[],

    subjectLabel:
      "Betreff *",

    subjectPlaceholder:
      "Was möchten Sie besprechen?",

    messageLabel:
      "Weitere Informationen *",

    messagePlaceholder:
      "Beschreiben Sie Ihre aktuelle Situation, Ihr Ziel und wobei Sie Unterstützung benötigen.",

    privacy:
      "Mit dem Absenden dieses Formulars bestätigen Sie, dass Western Bridge die bereitgestellten Informationen zur Prüfung und Beantwortung Ihrer Anfrage verwenden darf.",

    send:
      "Anfrage senden",

    sending:
      "Wird gesendet...",

    successTitle:
      "Ihre Anfrage wurde gesendet.",

    successText:
      "Western Bridge kann Ihre Anfrage nun prüfen.",

    errorTitle:
      "Nachricht nicht gesendet.",

    defaultError:
      "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",

    sendError:
      "Ihre Nachricht konnte nicht gesendet werden.",
  },

  en: {
    eyebrow: "Contact Western Bridge",

    titleBefore: "Start With What You",
    highlightedTitle: "Need to Achieve.",

    intro:
      "Tell us about your situation, objective, sector, and target market. This helps us understand whether Western Bridge is the right place to support your next step.",

    imageAlt:
      "Professional international consultation meeting",

    imageLabel:
      "Western Bridge",

    imageTitle:
      "Give us the context. We'll start from there.",

    usefulLabel:
      "Useful Information",

    usefulTitle:
      "What should you include?",

    usefulItems: [
      "Your current situation",
      "What you want to achieve",
      "Your profession, business, or institution",
      "Your target country or market",
    ],

    formLabel:
      "New Inquiry",

    formTitle:
      "Tell us about your requirement",

    formCode:
      "WB / CONTACT",

    honeypotLabel:
      "Website",

    nameLabel:
      "Full Name *",

    namePlaceholder:
      "Your name",

    emailLabel:
      "Email Address *",

    emailPlaceholder:
      "you@example.com",

    phoneLabel:
      "Phone / WhatsApp",

    phonePlaceholder:
      "+962 ...",

    countryLabel:
      "Current Country",

    countryPlaceholder:
      "e.g. Jordan",

    requestLegend:
      "What is this inquiry about? *",

    requestTypes: [
      {
        value: "Individual",
        label: "Individual",
      },
      {
        value: "Medical & Healthcare",
        label: "Medical & Healthcare",
      },
      {
        value: "Business",
        label: "Business",
      },
      {
        value: "Education & Institution",
        label: "Education & Institution",
      },
    ] satisfies RequestType[],

    subjectLabel:
      "Subject *",

    subjectPlaceholder:
      "What would you like to discuss?",

    messageLabel:
      "Tell Us More *",

    messagePlaceholder:
      "Describe your current situation, objective, and what you need support with.",

    privacy:
      "By submitting this form, you confirm that the information provided may be used by Western Bridge to review and respond to your inquiry.",

    send:
      "Send Inquiry",

    sending:
      "Sending...",

    successTitle:
      "Your inquiry has been sent.",

    successText:
      "Western Bridge can now review your request.",

    errorTitle:
      "Message not sent.",

    defaultError:
      "Something went wrong. Please try again.",

    sendError:
      "Your message could not be sent.",
  },

  ar: {
    eyebrow: "تواصل مع Western Bridge",

    titleBefore: "ابدأ بما",
    highlightedTitle: "تريد الوصول إليه.",

    intro:
      "أخبرنا عن وضعك الحالي وهدفك وقطاعك والسوق أو الدولة المستهدفة. يساعدنا ذلك على فهم ما إذا كانت Western Bridge الجهة المناسبة لدعم خطوتك التالية.",

    imageAlt:
      "اجتماع استشاري دولي مهني",

    imageLabel:
      "Western Bridge",

    imageTitle:
      "أعطنا السياق، ومن هناك نبدأ.",

    usefulLabel:
      "معلومات مفيدة",

    usefulTitle:
      "ما الذي يُفضل أن تذكره؟",

    usefulItems: [
      "وضعك الحالي",
      "ما الذي تريد الوصول إليه",
      "مهنتك أو شركتك أو مؤسستك",
      "الدولة أو السوق المستهدف",
    ],

    formLabel:
      "طلب جديد",

    formTitle:
      "أخبرنا عن احتياجك",

    formCode:
      "WB / CONTACT",

    honeypotLabel:
      "Website",

    nameLabel:
      "الاسم الكامل *",

    namePlaceholder:
      "اكتب اسمك",

    emailLabel:
      "البريد الإلكتروني *",

    emailPlaceholder:
      "you@example.com",

    phoneLabel:
      "الهاتف / واتساب",

    phonePlaceholder:
      "+962 ...",

    countryLabel:
      "الدولة الحالية",

    countryPlaceholder:
      "مثال: الأردن",

    requestLegend:
      "ما موضوع هذه الاستفسار؟ *",

    requestTypes: [
      {
        value: "Individual",
        label: "الأفراد",
      },
      {
        value: "Medical & Healthcare",
        label: "الطب والرعاية الصحية",
      },
      {
        value: "Business",
        label: "الشركات",
      },
      {
        value: "Education & Institution",
        label: "التعليم والمؤسسات",
      },
    ] satisfies RequestType[],

    subjectLabel:
      "الموضوع *",

    subjectPlaceholder:
      "ما الذي ترغب في مناقشته؟",

    messageLabel:
      "أخبرنا بالمزيد *",

    messagePlaceholder:
      "اشرح وضعك الحالي وهدفك وما نوع الدعم الذي تحتاج إليه.",

    privacy:
      "بإرسال هذا النموذج، فإنك تؤكد إمكانية استخدام Western Bridge للمعلومات المقدمة من أجل مراجعة استفسارك والرد عليه.",

    send:
      "إرسال الاستفسار",

    sending:
      "جارٍ الإرسال...",

    successTitle:
      "تم إرسال استفسارك.",

    successText:
      "يمكن لـ Western Bridge الآن مراجعة طلبك.",

    errorTitle:
      "لم يتم إرسال الرسالة.",

    defaultError:
      "حدث خطأ ما. يرجى المحاولة مرة أخرى.",

    sendError:
      "تعذر إرسال رسالتك.",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    titleBefore: string;
    highlightedTitle: string;
    intro: string;
    imageAlt: string;
    imageLabel: string;
    imageTitle: string;
    usefulLabel: string;
    usefulTitle: string;
    usefulItems: string[];
    formLabel: string;
    formTitle: string;
    formCode: string;
    honeypotLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    countryLabel: string;
    countryPlaceholder: string;
    requestLegend: string;
    requestTypes: RequestType[];
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    privacy: string;
    send: string;
    sending: string;
    successTitle: string;
    successText: string;
    errorTitle: string;
    defaultError: string;
    sendError: string;
  }
>;

export default function ContactSection() {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.de;

  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [errorMessage, setErrorMessage] =
    useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      requestType: formData.get("requestType"),
      country: formData.get("country"),
      subject: formData.get("subject"),
      message: formData.get("message"),

      // Honeypot anti-spam field
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || t.sendError
        );
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : t.defaultError
      );
    }
  }

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {t.eyebrow}
            </div>

            <h1 className={styles.title}>
              {t.titleBefore}

              <span>
                {t.highlightedTitle}
              </span>
            </h1>
          </div>
        </div>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.visual}>
              <Image
                src="/images/contact-hero.jpg"
                alt={t.imageAlt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 38vw"
                className={styles.image}
              />

              <div className={styles.overlay} />

              <div className={styles.visualContent}>
                <span>
                  {t.imageLabel}
                </span>

                <h2>
                  {t.imageTitle}
                </h2>
              </div>
            </div>

            <div className={styles.beforeYouSend}>
              <span className={styles.smallLabel}>
                {t.usefulLabel}
              </span>

              <h3>
                {t.usefulTitle}
              </h3>

              <div className={styles.infoRows}>
                {t.usefulItems.map((item, index) => (
                  <div key={item}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className={styles.formPanel}>
            <div className={styles.formHeader}>
              <div>
                <span className={styles.formLabel}>
                  {t.formLabel}
                </span>

                <h2>
                  {t.formTitle}
                </h2>
              </div>

              <span className={styles.formCode}>
                {t.formCode}
              </span>
            </div>

            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >
              <div
                className={styles.honeypot}
                aria-hidden="true"
              >
                <label htmlFor="website">
                  {t.honeypotLabel}
                </label>

                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="name">
                    {t.nameLabel}
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t.namePlaceholder}
                    required
                    maxLength={100}
                    autoComplete="name"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">
                    {t.emailLabel}
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t.emailPlaceholder}
                    required
                    maxLength={160}
                    autoComplete="email"
                    inputMode="email"
                  />
                </div>
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="phone">
                    {t.phoneLabel}
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t.phonePlaceholder}
                    maxLength={40}
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="country">
                    {t.countryLabel}
                  </label>

                  <input
                    id="country"
                    name="country"
                    type="text"
                    placeholder={t.countryPlaceholder}
                    maxLength={80}
                    autoComplete="country-name"
                  />
                </div>
              </div>

              <fieldset className={styles.requestField}>
                <legend>
                  {t.requestLegend}
                </legend>

                <div className={styles.requestOptions}>
                  {t.requestTypes.map((type) => (
                    <label
                      key={type.value}
                      className={styles.requestOption}
                    >
                      <input
                        type="radio"
                        name="requestType"
                        value={type.value}
                        required
                      />

                      <span>
                        {type.label}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className={styles.field}>
                <label htmlFor="subject">
                  {t.subjectLabel}
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder={t.subjectPlaceholder}
                  required
                  maxLength={150}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message">
                  {t.messageLabel}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder={t.messagePlaceholder}
                  required
                  maxLength={5000}
                />
              </div>

              <div className={styles.formBottom}>
                <p>
                  {t.privacy}
                </p>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={status === "sending"}
                >
                  {status === "sending"
                    ? t.sending
                    : t.send}

                  {status !== "sending" && (
                    <span aria-hidden="true">
                      {locale === "ar" ? "←" : "→"}
                    </span>
                  )}
                </button>
              </div>

              {status === "success" && (
                <div
                  className={styles.success}
                  role="status"
                  aria-live="polite"
                >
                  <strong>
                    {t.successTitle}
                  </strong>

                  <span>
                    {t.successText}
                  </span>
                </div>
              )}

              {status === "error" && (
                <div
                  className={styles.error}
                  role="alert"
                >
                  <strong>
                    {t.errorTitle}
                  </strong>

                  <span>
                    {errorMessage}
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}