import Link from "next/link";

import Container from "../ui/Container";
import styles from "./HowItWorksSection.module.css";

const steps = [
  {
    number: "01",
    id: "goal",
    title: "Understand Your Goal",
    text: "We start by understanding your objective, professional background, target market, and the type of international pathway you are looking for.",
  },
  {
    number: "02",
    id: "assessment",
    title: "Assess Your Path",
    text: "We help you identify suitable directions, preparation needs, qualification requirements, and the services that may support your next step.",
  },
  {
    number: "03",
    id: "prepare",
    title: "Prepare & Qualify",
    text: "Depending on your pathway, preparation may include language training, professional readiness, recognition guidance, exams, documentation, or business planning.",
  },
  {
    number: "04",
    id: "connect",
    title: "Connect & Move Forward",
    text: "We help you explore relevant opportunities, institutions, partners, markets, and professional ecosystems so you can move forward with clearer direction.",
  },
];

function StepIcon({ id }: { id: string }) {
  if (id === "assessment") {
    return (
      <svg
        width="23"
        height="23"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="11"
          cy="11"
          r="6"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M16 16L21 21"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === "prepare") {
    return (
      <svg
        width="23"
        height="23"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 5H20V19H4V5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />

        <path
          d="M8 9H16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M8 13H14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === "connect") {
    return (
      <svg
        width="23"
        height="23"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="6"
          cy="12"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <circle
          cx="18"
          cy="6"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <circle
          cx="18"
          cy="18"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M8.2 10.8L15.7 7.1"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M8.2 13.2L15.7 16.9"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  return (
    <svg
      width="23"
      height="23"
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

export default function HowItWorksSection() {
  return (
    <section className={styles.section}>
      <div className={styles.decorationOne}></div>
      <div className={styles.decorationTwo}></div>

      <Container>
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine}></span>
            How Western Bridge Works
            <span className={styles.eyebrowLine}></span>
          </div>

          <h2 className={styles.title}>
            From Ambition to a{" "}
            <span className={styles.goldText}>
              Clear Path
            </span>
          </h2>

          <p className={styles.description}>
            Western Bridge helps you move from uncertainty to a more
            structured international pathway through assessment,
            preparation, guidance, and strategic connections.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => (
            <article
              key={step.number}
              className={styles.step}
            >
              <div className={styles.stepNumber}>
                {step.number}
              </div>

              <div className={styles.stepCard}>
                <div className={styles.iconWrapper}>
                  <StepIcon id={step.id} />
                </div>

                <h3 className={styles.stepTitle}>
                  {step.title}
                </h3>

                <p className={styles.stepText}>
                  {step.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.bottomText}>
            Need help understanding where your path should begin?
          </p>

          <Link
            href="/contact"
            className={styles.bottomButton}
          >
            Talk to Western Bridge
          </Link>
        </div>
      </Container>
    </section>
  );
}