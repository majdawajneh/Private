import Link from "next/link";

import Container from "../ui/Container";
import styles from "./ExpansionIntelligenceSection.module.css";

const intelligenceAreas = [
  {
    number: "01",
    label: "Market Intelligence",
    title: "Understand the Market Before You Enter It",
    text: "Assess the target market, customer landscape, sector conditions, business environment, competitors, and potential positioning before making expansion decisions.",
    meterLabel: "Strategic Focus",
    meterValue: "High",
    fillClass: styles.fillMarket,
  },
  {
    number: "02",
    label: "Feasibility & Planning",
    title: "Turn Expansion Ideas Into Structured Decisions",
    text: "Evaluate commercial assumptions, operational requirements, market-entry considerations, risks, and strategic priorities through feasibility and business planning.",
    meterLabel: "Planning Depth",
    meterValue: "Core",
    fillClass: styles.fillFeasibility,
  },
  {
    number: "03",
    label: "Partnership Strategy",
    title: "Build the Right International Connections",
    text: "Identify relevant institutions, commercial ecosystems, strategic partners, and cooperation channels that may support your international business objectives.",
    meterLabel: "Network Value",
    meterValue: "Strong",
    fillClass: styles.fillPartnership,
  },
  {
    number: "04",
    label: "Digital Market Entry",
    title: "Strengthen Your International Digital Presence",
    text: "Prepare your digital positioning, online platforms, communication, market-facing content, and digital systems to better support international growth.",
    meterLabel: "Digital Readiness",
    meterValue: "Essential",
    fillClass: styles.fillDigital,
  },
];

export default function ExpansionIntelligenceSection() {
  return (
    <section
      id="business-expansion"
      className={styles.section}
    >


      <Container>
        <div className={styles.wrapper}>
          {/* Intro */}

          <div className={styles.intro}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Expansion Intelligence
            </div>

            <h2 className={styles.title}>
              Expansion Should Start With{" "}
              <span className={styles.goldText}>
                Better Decisions
              </span>
            </h2>

            <p className={styles.description}>
              Entering a new market should not begin with assumptions.
              Western Bridge helps businesses examine the strategic,
              commercial, operational, and partnership factors that may
              influence international expansion.
            </p>

            <div className={styles.principle}>
              <span className={styles.principleLabel}>
                Strategic Principle
              </span>

              <p className={styles.principleText}>
                Understand the market. Validate the direction. Build the
                right relationships. Then move forward with a clearer
                strategy.
              </p>
            </div>
          </div>

          {/* Matrix */}

          <div className={styles.matrix}>

            {intelligenceAreas.map((area) => (
              <article
                key={area.number}
                className={styles.row}
              >
                <span className={styles.number}>
                  {area.number}
                </span>

                <div className={styles.rowContent}>
                  <span className={styles.rowLabel}>
                    {area.label}
                  </span>

                  <h3 className={styles.rowTitle}>
                    {area.title}
                  </h3>

                  <p className={styles.rowText}>
                    {area.text}
                  </p>
                </div>

                <div className={styles.meter}>
                  <div className={styles.meterTop}>
                    <span className={styles.meterLabel}>
                      {area.meterLabel}
                    </span>

                    <span className={styles.meterValue}>
                      {area.meterValue}
                    </span>
                  </div>

                  <div className={styles.track}>
                    <div
                      className={`${styles.fill} ${area.fillClass}`}
                    ></div>
                  </div>
                </div>
              </article>
            ))}

            <div className={styles.decisionStrip}>
              <div className={styles.decisionMark}>
                WB
              </div>

              <div>
                <span className={styles.decisionLabel}>
                  Strategic Consultation
                </span>

                <h3 className={styles.decisionTitle}>
                  Planning an International Expansion?
                </h3>

                <p className={styles.decisionText}>
                  Discuss your target market, business model, current
                  position, and expansion priorities with Western Bridge
                  to identify the areas that deserve deeper assessment.
                </p>
              </div>

              <Link
                href="/contact"
                className={styles.decisionButton}
              >
                Discuss Your Strategy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}