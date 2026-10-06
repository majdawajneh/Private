import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./AboutValuesSection.module.css";

const standards = [
  {
    number: "01",
    title: "Clarity Before Action",
    text: "Clients should understand the route, requirements, responsibilities, and limitations before moving forward.",
  },
  {
    number: "02",
    title: "Preparation Over Promises",
    text: "We focus on improving readiness instead of presenting outcomes that depend on third parties as guarantees.",
  },
  {
    number: "03",
    title: "Relevant Connections",
    text: "Networking only creates value when the institution, market, organization, or professional connection is relevant to the objective.",
  },
  {
    number: "04",
    title: "Long-Term Capability",
    text: "Training, knowledge, systems, and institutional development should leave the client stronger beyond a single transaction.",
  },
];

export default function AboutValuesSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              What We Stand For
            </div>

            <h2 className={styles.title}>
              Built for Work That Has
              <span> Real Consequences.</span>
            </h2>
          </div>


        </div>

        <div className={styles.mainGrid}>
          {/* Image */}

          <div className={styles.visual}>
            <Image
              src="/images/about-values.jpg"
              alt="International professionals working together on business and institutional development"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.image}
            />

            <div className={styles.overlay}></div>

            <div className={styles.imageContent}>
              <span>
                Western Bridge
              </span>

              <h3>
                International work needs structure, context and responsible
                preparation.
              </h3>
            </div>
          </div>

          {/* Mission / Vision */}

          <div className={styles.direction}>
            <div className={styles.directionBlock}>
              <span className={styles.directionNumber}>
                
              </span>

              <div>
                <span className={styles.directionLabel}>
                  Our Mission
                </span>

                <h3>
                  Make complex international pathways easier to understand and
                  prepare for.
                </h3>

                <p>
                  By combining consulting, training, research, qualification
                  support, technology, and international connections in one
                  structured service environment.
                </p>
              </div>
            </div>

            <div className={styles.directionBlock}>
              <span className={styles.directionNumber}>
                
              </span>

              <div>
                <span className={styles.directionLabel}>
                  Our Vision
                </span>

                <h3>
                  Become a trusted bridge between regional ambition and
                  international opportunity.
                </h3>

                <p>
                  With Germany as a central gateway and broader connections
                  across Europe and international markets.
                </p>
              </div>
            </div>

            <div className={styles.positioning}>
              <span className={styles.positioningLabel}>
                Our Position
              </span>

              <p>
                Western Bridge operates where preparation, capability,
                institutions, markets, and international connections meet.
              </p>
            </div>
          </div>
        </div>

        {/* Standards */}

        <div className={styles.standards}>
          <div className={styles.standardsIntro}>
            <span>
              Operating Standards
            </span>

            <h3>
              How we expect the work to be done.
            </h3>
          </div>

          <div className={styles.standardList}>
            {standards.map((standard) => (
              <article
                key={standard.number}
                className={styles.standard}
              >
                <span className={styles.standardNumber}>
                  {standard.number}
                </span>

                <h4>
                  {standard.title}
                </h4>

                <p>
                  {standard.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Final CTA */}

        <div className={styles.final}>
          <div>
            <span className={styles.finalLabel}>
              Western Bridge
            </span>

            <h3>
              Have an objective that crosses borders?
            </h3>

            <p>
              Tell us what you are trying to achieve. We will help determine
              whether Western Bridge can support the route, preparation, or
              connection required.
            </p>
          </div>

          <div className={styles.finalActions}>
            <Link
              href="/services"
              className={styles.secondaryButton}
            >
              View Services
            </Link>

            <Link
              href="/contact"
              className={styles.primaryButton}
            >
              Contact Western Bridge
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}