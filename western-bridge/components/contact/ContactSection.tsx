"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

import Container from "../ui/Container";
import styles from "./ContactSection.module.css";

const requestTypes = [
  "Individual",
  "Medical & Healthcare",
  "Business",
  "Education & Institution",
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
          data.message || "Your message could not be sent."
        );
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Contact Western Bridge
            </div>

            <h1 className={styles.title}>
              Start With What You
              <span> Need to Achieve.</span>
            </h1>
          </div>

          <p className={styles.intro}>
            Tell us about your situation, objective, sector, and target
            market. This helps us understand whether Western Bridge is the
            right place to support your next step.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Left Side */}

          <aside className={styles.sidebar}>
            <div className={styles.visual}>
              <Image
                src="/images/contact-hero.jpg"
                alt="Professional international consultation meeting"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 38vw"
                className={styles.image}
              />

              <div className={styles.overlay}></div>

              <div className={styles.visualContent}>
                <span>
                  Western Bridge
                </span>

                <h2>
                  Give us the context.
                  We&apos;ll start from there.
                </h2>
              </div>
            </div>

            <div className={styles.beforeYouSend}>
              <span className={styles.smallLabel}>
                Useful Information
              </span>

              <h3>
                What should you include?
              </h3>

              <div className={styles.infoRows}>
                <div>
                  <span>01</span>
                  <p>Your current situation</p>
                </div>

                <div>
                  <span>02</span>
                  <p>What you want to achieve</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Your profession, business, or institution</p>
                </div>

                <div>
                  <span>04</span>
                  <p>Your target country or market</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Form */}

          <div className={styles.formPanel}>
            <div className={styles.formHeader}>
              <div>
                <span className={styles.formLabel}>
                  New Inquiry
                </span>

                <h2>
                  Tell us about your requirement
                </h2>
              </div>

              <span className={styles.formCode}>
                WB / CONTACT
              </span>
            </div>

            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >
              {/* Honeypot */}
              <div
                className={styles.honeypot}
                aria-hidden="true"
              >
                <label htmlFor="website">
                  Website
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
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    maxLength={100}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    maxLength={160}
                  />
                </div>
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="phone">
                    Phone / WhatsApp
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+962 ..."
                    maxLength={40}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="country">
                    Current Country
                  </label>

                  <input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="e.g. Jordan"
                    maxLength={80}
                  />
                </div>
              </div>

              <fieldset className={styles.requestField}>
                <legend>
                  What is this inquiry about? *
                </legend>

                <div className={styles.requestOptions}>
                  {requestTypes.map((type) => (
                    <label
                      key={type}
                      className={styles.requestOption}
                    >
                      <input
                        type="radio"
                        name="requestType"
                        value={type}
                        required
                      />

                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className={styles.field}>
                <label htmlFor="subject">
                  Subject *
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  required
                  maxLength={150}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message">
                  Tell Us More *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Describe your current situation, objective, and what you need support with."
                  required
                  maxLength={5000}
                ></textarea>
              </div>

              <div className={styles.formBottom}>
                <p>
                  By submitting this form, you confirm that the information
                  provided may be used by Western Bridge to review and respond
                  to your inquiry.
                </p>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={status === "sending"}
                >
                  {status === "sending"
                    ? "Sending..."
                    : "Send Inquiry"}

                  {status !== "sending" && (
                    <span aria-hidden="true">
                      →
                    </span>
                  )}
                </button>
              </div>

              {status === "success" && (
                <div
                  className={styles.success}
                  role="status"
                >
                  <strong>
                    Your inquiry has been sent.
                  </strong>

                  <span>
                    Western Bridge can now review your request.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div
                  className={styles.error}
                  role="alert"
                >
                  <strong>
                    Message not sent.
                  </strong>

                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}