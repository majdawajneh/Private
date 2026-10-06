import Link from "next/link";

import Container from "../ui/Container";
import styles from "./BusinessHero.module.css";

const focusItems = [
  "Market Intelligence",
  "Business Development",
  "International Partnerships",
];

const markets = [
  {
    name: "Germany",
    type: "Primary European Gateway",
    className: styles.marketGermany,
  },
  {
    name: "Europe",
    type: "Expansion & Partnerships",
    className: styles.marketEurope,
  },
  {
    name: "Gulf",
    type: "Regional Growth",
    className: styles.marketGulf,
  },
  {
    name: "Jordan",
    type: "Local Business Base",
    className: styles.marketJordan,
  },
];

const metrics = [
  {
    value: "01",
    label: "Market Entry Strategy",
  },
  {
    value: "02",
    label: "Partnership Development",
  },
  {
    value: "03",
    label: "International Growth Support",
  },
];

export default function BusinessHero() {
  return (
    <section className={styles.hero}>
      <span
        className={styles.backgroundText}
        aria-hidden="true"
      >
        GROWTH
      </span>

      <span
        className={styles.orbit}
        aria-hidden="true"
      ></span>

      <Container>
        <div className={styles.wrapper}>
          {/* Left Content */}

          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot}></span>
              International Business Growth
            </div>

            <h1 className={styles.title}>
              Turn Local Ambition Into{" "}
              <span className={styles.goldText}>
                International Growth
              </span>
            </h1>

            <p className={styles.description}>
              Western Bridge supports businesses that want to understand
              new markets, strengthen their strategy, build international
              partnerships, and prepare for expansion into Germany,
              Europe, the Gulf, and other relevant markets.
            </p>

            <div className={styles.actions}>
              <Link
                href="#business-expansion"
                className={styles.primaryButton}
              >
                Explore Business Growth
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/contact"
                className={styles.secondaryButton}
              >
                Discuss Your Business
              </Link>
            </div>

            <div className={styles.focusRow}>
              {focusItems.map((item) => (
                <div
                  key={item}
                  className={styles.focusItem}
                >
                  <span className={styles.focusIcon}>
                    ✓
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Command Center */}

          <div className={styles.commandCenter}>
            <div
              className={styles.dashboardGrid}
              aria-hidden="true"
            ></div>

            <div className={styles.dashboardHeader}>
              <div className={styles.dashboardIdentity}>
                <div className={styles.dashboardMark}>
                  WB
                </div>

                <div>
                  <div className={styles.dashboardTitle}>
                    Expansion Intelligence
                  </div>

                  <span className={styles.dashboardSub}>
                    Western Bridge Business Desk
                  </span>
                </div>
              </div>

              <div className={styles.liveBadge}>
                <span className={styles.liveDot}></span>
                Strategic Markets
              </div>
            </div>

            {/* Market Network */}

            <div className={styles.marketMap}>
              <span
                className={`${styles.line} ${styles.lineOne}`}
                aria-hidden="true"
              ></span>

              <span
                className={`${styles.line} ${styles.lineTwo}`}
                aria-hidden="true"
              ></span>

              <span
                className={`${styles.line} ${styles.lineThree}`}
                aria-hidden="true"
              ></span>

              <span
                className={`${styles.line} ${styles.lineFour}`}
                aria-hidden="true"
              ></span>

              <div className={styles.hub}>
                <div>
                  <span className={styles.hubTitle}>
                    Western
                    <br />
                    Bridge
                  </span>

                  <span className={styles.hubSub}>
                    Growth Hub
                  </span>
                </div>
              </div>

              {markets.map((market) => (
                <div
                  key={market.name}
                  className={`${styles.market} ${market.className}`}
                >
                  <span className={styles.marketName}>
                    {market.name}
                  </span>

                  <span className={styles.marketType}>
                    {market.type}
                  </span>
                </div>
              ))}
            </div>

            {/* Metrics */}

            <div className={styles.metrics}>
              {metrics.map((metric) => (
                <div
                  key={metric.value}
                  className={styles.metric}
                >
                  <span className={styles.metricValue}>
                    {metric.value}
                  </span>

                  <span className={styles.metricLabel}>
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </Container>
    </section>
  );
}