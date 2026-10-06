import Link from "next/link";

import Container from "../ui/Container";
import styles from "./OrganizationalSolutionsSection.module.css";

const modules = [
  {
    number: "01",
    title: "Digital Platforms & Systems",
    text: "Design and development of digital platforms, training systems, recruitment-related platforms, HR solutions, websites, and technology-enabled organizational tools.",
    className: styles.digital,
  },
  {
    number: "02",
    title: "People, Training & Capability",
    text: "Support for professional development, workforce capability, vocational preparation, language training, qualification programs, and organizational learning initiatives.",
    className: styles.people,
  },
  {
    number: "03",
    title: "Education & Institutional Partnerships",
    text: "Explore cooperation with universities, training centers, academic institutions, professional bodies, and international education ecosystems for relevant institutional initiatives.",
    className: styles.education,
    education: true,
  },
  {
    number: "04",
    title: "Market Communication & Growth",
    text: "Strengthen international positioning through digital marketing, content strategy, communication systems, market-facing platforms, and structured growth support.",
    className: styles.market,
  },
];

export default function OrganizationalSolutionsSection() {
  return (
    <section className={styles.section}>
      <span
        className={styles.glow}
        aria-hidden="true"
      ></span>

      <Container>
        {/* Header */}

        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Organizational Solutions
            </div>

            <h2 className={styles.title}>
              More Than Consulting.
              <br />
              Build the{" "}
              <span className={styles.goldText}>
                Capabilities Behind Growth.
              </span>
            </h2>
          </div>

          <p className={styles.headerText}>
            Western Bridge supports organizations through a broader
            combination of technology, training, institutional
            connections, education partnerships, and international
            market development. The objective is not only to advise,
            but to help organizations strengthen the systems and
            capabilities that support long-term growth.
          </p>
        </div>

        {/* System */}

        <div className={styles.system}>
          <div
            className={styles.systemGrid}
            aria-hidden="true"
          ></div>

          {/* Connection Lines */}

          <span
            className={`${styles.connector} ${styles.connectorTop}`}
            aria-hidden="true"
          ></span>

          <span
            className={`${styles.connector} ${styles.connectorBottom}`}
            aria-hidden="true"
          ></span>

          <span
            className={`${styles.connector} ${styles.connectorLeft}`}
            aria-hidden="true"
          ></span>

          <span
            className={`${styles.connector} ${styles.connectorRight}`}
            aria-hidden="true"
          ></span>

          <span
            className={`${styles.connectionDot} ${styles.dotTop}`}
            aria-hidden="true"
          ></span>

          <span
            className={`${styles.connectionDot} ${styles.dotBottom}`}
            aria-hidden="true"
          ></span>

          <span
            className={`${styles.connectionDot} ${styles.dotLeft}`}
            aria-hidden="true"
          ></span>

          <span
            className={`${styles.connectionDot} ${styles.dotRight}`}
            aria-hidden="true"
          ></span>

          {/* Core */}

          <div className={styles.core}>
            <div>
              <div className={styles.coreMark}>
                WB
              </div>

              <span className={styles.coreLabel}>
                Integrated Solutions
              </span>
            </div>
          </div>

          {/* Modules */}

          {modules.map((module) => (
            <article
              key={module.number}
              className={`${styles.module} ${module.className}`}
            >
              <span className={styles.moduleNumber}>
                MODULE {module.number}
              </span>

              <h3 className={styles.moduleTitle}>
                {module.title}
              </h3>

              <p className={styles.moduleText}>
                {module.text}
              </p>

              {module.education && (
                <div className={styles.educationBadge}>
                  <span aria-hidden="true">✦</span>
                  Universities & Institutions
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Bottom Capability */}

        <div className={styles.capabilityStrip}>
          <div>
            <span className={styles.capabilityLabel}>
              Cross-Sector Capability
            </span>

            <h3 className={styles.capabilityTitle}>
              Businesses, Universities, Training Providers & Institutions
            </h3>

            <p className={styles.capabilityText}>
              Western Bridge can support cooperation and development
              initiatives across commercial, educational, training,
              professional, and institutional environments. The exact
              structure depends on the objectives and the organizations
              involved.
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.capabilityButton}
          >
            Discuss an Initiative
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}