import Link from "next/link";

import Container from "../ui/Container";
import styles from "./MarketEntryNavigatorSection.module.css";

const markets = [
  {
    number: "01",
    label: "Primary Gateway",
    title: "Germany",
    description:
      "Germany can serve as a strategic gateway for businesses seeking stronger access to European markets, professional ecosystems, industrial networks, and long-term international partnerships.",
    signals: [
      "Market-entry planning",
      "Partnership and institutional networking",
      "Business development and expansion preparation",
    ],
    href: "/germany",
    featured: true,
  },
  {
    number: "02",
    label: "Broader Expansion",
    title: "Europe",
    description:
      "European markets can offer different commercial environments, regulatory expectations, customer profiles, and partnership structures depending on the target country and sector.",
    signals: [
      "Country and market comparison",
      "Commercial opportunity assessment",
      "Cross-border partnership exploration",
    ],
    href: "/contact",
  },
  {
    number: "03",
    label: "Regional Growth",
    title: "Gulf Markets",
    description:
      "Gulf markets may offer strong regional opportunities for businesses seeking commercial growth, strategic partnerships, service expansion, and access to rapidly developing sectors.",
    signals: [
      "Regional market understanding",
      "Business relationship development",
      "Growth and positioning strategy",
    ],
    href: "/contact",
  },
];

export default function MarketEntryNavigatorSection() {
  return (
    <section className={styles.section}>
      <span
        className={styles.backgroundWord}
        aria-hidden="true"
      >
        MARKETS
      </span>

      <Container>
        {/* Header */}

        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Market Entry Navigator
            </div>

            <h2 className={styles.title}>
              Choose the Market.
              <br />
              Understand the{" "}
              <span className={styles.goldText}>
                Strategy.
              </span>
            </h2>
          </div>

          <p className={styles.headerText}>
            International growth is not one-size-fits-all. Each market
            has different commercial conditions, regulatory realities,
            customer expectations, and partnership opportunities.
            Western Bridge helps businesses understand those differences
            before committing to a direction.
          </p>
        </div>

        {/* Markets */}

        <div className={styles.navigator}>
          {markets.map((market) => (
            <article
              key={market.number}
              className={`${styles.market} ${
                market.featured ? styles.germany : ""
              }`}
            >
              {market.featured && (
                <>
                  <span
                    className={styles.germanyAccent}
                    aria-hidden="true"
                  ></span>

                  <span
                    className={styles.germanyGlow}
                    aria-hidden="true"
                  ></span>
                </>
              )}

              <span className={styles.marketNumber}>
                {market.number}
              </span>

              <div className={styles.marketContent}>
                <span className={styles.marketLabel}>
                  {market.label}
                </span>

                <h3 className={styles.marketTitle}>
                  {market.title}
                </h3>

                <p className={styles.marketDescription}>
                  {market.description}
                </p>
              </div>

              <div className={styles.signals}>
                {market.signals.map((signal) => (
                  <div
                    key={signal}
                    className={styles.signal}
                  >
                    <span className={styles.signalMark}>
                      ✓
                    </span>

                    <span>{signal}</span>
                  </div>
                ))}
              </div>

              <Link
                href={market.href}
                className={styles.marketAction}
                aria-label={`Explore ${market.title}`}
              >
                →
              </Link>
            </article>
          ))}
        </div>

        {/* Strategy Strip */}

        <div className={styles.strategyStrip}>
          <div className={styles.strategyIcon}>
            WB
          </div>

          <div>
            <span className={styles.strategyLabel}>
              Not Sure Which Market Fits?
            </span>

            <h3 className={styles.strategyTitle}>
              Compare Before You Commit
            </h3>

            <p className={styles.strategyText}>
              Western Bridge can help you compare markets based on your
              industry, business model, priorities, resources, and
              international growth objectives.
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.strategyButton}
          >
            Discuss Market Options
          </Link>
        </div>
      </Container>
    </section>
  );
}