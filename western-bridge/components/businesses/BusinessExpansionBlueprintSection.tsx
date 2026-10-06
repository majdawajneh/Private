import Link from "next/link";

import Container from "../ui/Container";
import styles from "./BusinessExpansionBlueprintSection.module.css";

const blueprintSteps = [
  {
    number: "01",
    title: "Business Position",
    text: "Clarify your current capabilities, business model, sector, priorities, and international objectives.",
    icon: "◎",
  },
  {
    number: "02",
    title: "Market Analysis",
    text: "Study market conditions, competition, customer expectations, risks, and commercial opportunities.",
    icon: "⌁",
  },
  {
    number: "03",
    title: "Entry Strategy",
    text: "Define the most suitable direction, priorities, preparation requirements, and market-entry approach.",
    icon: "→",
    featured: true,
  },
  {
    number: "04",
    title: "Partnership Development",
    text: "Explore relevant institutions, networks, strategic relationships, and cooperation opportunities.",
    icon: "◇",
  },
  {
    number: "05",
    title: "Launch Preparation",
    text: "Strengthen operational, digital, communication, and organizational readiness before moving forward.",
    icon: "✓",
  },
];

const blueprintDetails = [
  {
    label: "Strategic Lens",
    title: "Commercial Viability",
    text: "Assess whether the direction is commercially and operationally realistic before committing resources.",
  },
  {
    label: "International Lens",
    title: "Market & Partnership Fit",
    text: "Understand how your sector, offer, and capabilities may align with the target ecosystem.",
  },
  {
    label: "Execution Lens",
    title: "Readiness & Next Actions",
    text: "Translate strategic findings into clearer preparation priorities and practical next steps.",
  },
];

export default function BusinessExpansionBlueprintSection() {
  return (
    <section className={styles.section}>
      <Container>
        {/* Header */}

        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Expansion Blueprint
            </div>

            <h2 className={styles.title}>
              Turn Expansion Into a{" "}
              <span className={styles.goldText}>
                Structured Plan
              </span>
            </h2>
          </div>

          <p className={styles.headerText}>
            International growth becomes more manageable when the
            commercial, strategic, partnership, and operational pieces
            are considered together. Western Bridge helps businesses
            organize those elements into a clearer expansion framework.
          </p>
        </div>

        {/* Blueprint */}

        <div className={styles.blueprint}>
          <div
            className={styles.grid}
            aria-hidden="true"
          ></div>

          <span
            className={styles.blueprintStamp}
            aria-hidden="true"
          >
            WB
          </span>

          {/* Blueprint Header */}

          <div className={styles.blueprintTop}>
            <div className={styles.blueprintIdentity}>
              <div className={styles.blueprintMark}>
                WB
              </div>

              <div>
                <span className={styles.blueprintLabel}>
                  Strategic Framework
                </span>

                <div className={styles.blueprintName}>
                  International Expansion Blueprint
                </div>
              </div>
            </div>

            <span className={styles.blueprintCode}>
              WB / EXPANSION / 01
            </span>
          </div>

          {/* Flow */}

          <div className={styles.flow}>
            {blueprintSteps.map((step) => (
              <article
                key={step.number}
                className={`${styles.step} ${
                  step.featured ? styles.featured : ""
                }`}
              >
                <div className={styles.stepNode}>
                  <span aria-hidden="true">
                    {step.icon}
                  </span>
                </div>

                <span className={styles.stepNumber}>
                  STEP {step.number}
                </span>

                <h3 className={styles.stepTitle}>
                  {step.title}
                </h3>

                <p className={styles.stepText}>
                  {step.text}
                </p>
              </article>
            ))}
          </div>

          {/* Detail Strip */}

          <div className={styles.detailStrip}>
            {blueprintDetails.map((detail) => (
              <div
                key={detail.title}
                className={styles.detail}
              >
                <span className={styles.detailLabel}>
                  {detail.label}
                </span>

                <h3 className={styles.detailTitle}>
                  {detail.title}
                </h3>

                <p className={styles.detailText}>
                  {detail.text}
                </p>
              </div>
            ))}
          </div>

          {/* Final CTA */}

          <div className={styles.finalAction}>
            <div className={styles.actionContent}>
              <span className={styles.actionLabel}>
                Ready to Explore the Next Move?
              </span>

              <h3 className={styles.actionTitle}>
                Build an Expansion Direction Around Your Business
              </h3>

              <p className={styles.actionText}>
                Discuss your target market, business model, expansion
                priorities, partnership needs, and current readiness with
                Western Bridge.
              </p>
            </div>

            <Link
              href="/contact"
              className={styles.actionButton}
            >
              Start the Conversation
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}