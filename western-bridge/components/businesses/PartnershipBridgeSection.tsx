import Link from "next/link";

import Container from "../ui/Container";
import styles from "./PartnershipBridgeSection.module.css";

const ecosystemNodes = [
  {
    title: "Institutions",
    text: "Relevant organizations, associations, and market institutions.",
  },
  {
    title: "Industry Networks",
    text: "Sector communities and professional business ecosystems.",
  },
  {
    title: "Training & Expertise",
    text: "Specialized knowledge, capability development, and preparation.",
  },
  {
    title: "Strategic Partners",
    text: "Potential collaboration and business-development relationships.",
  },
  {
    title: "Market Channels",
    text: "Relevant commercial and international expansion channels.",
  },
];

export default function PartnershipBridgeSection() {
  return (
    <section className={styles.section}>
      <Container>
        {/* Header */}

        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine}></span>
            Partnership & Networking
          </div>

          <h2 className={styles.title}>
            Growth Often Depends on{" "}
            <span className={styles.goldText}>
              Who You Can Reach
            </span>
          </h2>

          <p className={styles.description}>
            International expansion is not only about entering a market.
            It is also about understanding the ecosystem around that
            market and identifying the institutions, networks, partners,
            and channels that may support your business objectives.
          </p>
        </div>

        {/* Bridge */}

        <div className={styles.bridgeStage}>
          <div
            className={styles.grid}
            aria-hidden="true"
          ></div>

          <span
            className={styles.backgroundWord}
            aria-hidden="true"
          >
            CONNECT
          </span>

          {/* Endpoints */}

          <div className={styles.endpoints}>
            <div className={styles.endpoint}>
              <span className={styles.endpointLabel}>
                Starting Point
              </span>

              <h3 className={styles.endpointTitle}>
                Your Business
              </h3>

              <p className={styles.endpointText}>
                Your goals, capabilities, sector, and target market.
              </p>
            </div>

            <div className={styles.endpoint}>
              <span className={styles.endpointLabel}>
                International Side
              </span>

              <h3 className={styles.endpointTitle}>
                Market Ecosystem
              </h3>

              <p className={styles.endpointText}>
                Institutions, networks, expertise, and relevant business
                channels.
              </p>
            </div>
          </div>

          {/* Visual Bridge */}

          <div className={styles.bridge}>
            <span
              className={styles.deck}
              aria-hidden="true"
            ></span>

            <span
              className={styles.pylonLeft}
              aria-hidden="true"
            ></span>

            <span
              className={styles.pylonRight}
              aria-hidden="true"
            ></span>

            <span
              className={`${styles.cable} ${styles.cableOne}`}
              aria-hidden="true"
            ></span>

            <span
              className={`${styles.cable} ${styles.cableTwo}`}
              aria-hidden="true"
            ></span>

            <span
              className={`${styles.cable} ${styles.cableThree}`}
              aria-hidden="true"
            ></span>

            <span
              className={`${styles.cable} ${styles.cableFour}`}
              aria-hidden="true"
            ></span>

            <div className={styles.nodes}>
              {ecosystemNodes.map((node) => (
                <div
                  key={node.title}
                  className={styles.node}
                >
                  <span className={styles.nodeDot}></span>

                  <h4 className={styles.nodeTitle}>
                    {node.title}
                  </h4>

                  <p className={styles.nodeText}>
                    {node.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Western Bridge Layer */}

            <div className={styles.connectionLayer}>
              <div className={styles.connectionIdentity}>
                <div className={styles.connectionMark}>
                  WB
                </div>

                <div>
                  <span className={styles.connectionLabel}>
                    Connection Layer
                  </span>

                  <div className={styles.connectionTitle}>
                    Western Bridge
                  </div>
                </div>
              </div>

              <p className={styles.connectionText}>
                Helping businesses understand relevant ecosystems and
                explore strategic connections where appropriate.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className={styles.bottom}>
          <p className={styles.bottomText}>
            Western Bridge supports partnership exploration and
            international networking based on the needs of each business.
            The availability, suitability, and outcome of any partnership
            depend on the independent decisions of the organizations
            involved.
          </p>

          <Link
            href="/contact"
            className={styles.button}
          >
            Explore Partnerships
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}