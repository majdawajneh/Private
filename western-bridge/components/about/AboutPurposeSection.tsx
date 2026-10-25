import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import styles from "./AboutPurposeSection.module.css";

const bridgeLogic = [
  {
    number: "01",
    label: "The Gap",
    title: "Opportunity exists, but the route is often unclear.",
    text: "People and organizations may know where they want to go, but not which requirements, institutions, documents, markets, or preparation steps actually matter.",
  },
  {
    number: "02",
    label: "The Preparation",
    title: "Good opportunities still require readiness.",
    text: "Language, qualifications, professional documents, market knowledge, training, research, and organizational preparation can determine whether the next step is realistic.",
  },
  {
    number: "03",
    label: "The Connection",
    title: "The right connection matters more than a random introduction.",
    text: "Western Bridge focuses on relevant institutions, professional ecosystems, education providers, business networks, and international relationships.",
  },
  {
    number: "04",
    label: "The Direction",
    title: "The client should know what comes next.",
    text: "Our work is designed to leave the client with a clearer route, stronger preparation, and a better understanding of the next responsible step.",
  },
];

export default function AboutPurposeSection() {
  return (
    <section
      id="why-western-bridge"
      className={styles.section}
    >
      <Container>
        <div className={styles.layout}>
          {/* Visual */}

          <div className={styles.visualColumn}>
            <div className={styles.visual}>
              <Image
                src="/images/about-bridge.jpg"
                alt="Modern European bridge representing international connection and movement"
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
                className={styles.image}
              />

              <div className={styles.overlay}></div>

              <div className={styles.imageTop}>
                <span>WESTERN</span>
                <span>BRIDGE</span>
              </div>

              <div className={styles.imageContent}>
                <span className={styles.imageLabel}>
                  Why the Name Matters
                </span>

                <h3>
                  A bridge does not replace either side.
                  It makes the connection possible.
                </h3>
              </div>
            </div>

            <div className={styles.visualFoot}>
              <span>Jordan</span>

              <div className={styles.routeLine}>
                <span></span>
              </div>

              <strong>International Markets</strong>
            </div>
          </div>

          {/* Story */}

          <div className={styles.story}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Why Western Bridge Exists
            </div>

            <h2 className={styles.title}>
              The Problem Is Often
              <span> Not the Ambition.</span>
            </h2>

            <p className={styles.lead}>
              It is the distance between ambition and a realistic route.
            </p>

            <p className={styles.copy}>
              A professional may want to build a future in Germany. A company
              may want access to a new market. A university may want an
              international institutional relationship. A healthcare
              professional may need to understand recognition and licensing.
            </p>

            <p className={styles.copy}>
              Each objective is different, but the gap is often the same:
              fragmented information, unclear requirements, disconnected
              service providers, and no single structure connecting preparation
              with the next step.
            </p>

            <blockquote className={styles.statement}>
              Western Bridge was created around that gap.
            </blockquote>

            <p className={styles.copy}>
              Our role is to bring the relevant parts together — consulting,
              preparation, qualification, training, research, technology,
              documentation, and international connections — without
              pretending that one solution fits every client.
            </p>

            <Link
              href="/services"
              className={styles.link}
            >
              See How Our Services Connect
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Bridge Logic */}

        <div className={styles.logic}>
          <div className={styles.logicIntro}>
            <span>THE BRIDGE MODEL</span>

            <h3>
              What sits between an objective and a real next step?
            </h3>
          </div>

          <div className={styles.logicFlow}>
            {bridgeLogic.map((item) => (
              <article
                key={item.number}
                className={styles.logicItem}
              >
                <div className={styles.logicHead}>
                  <span className={styles.number}>
                    {item.number}
                  </span>

                  <span className={styles.logicLabel}>
                    {item.label}
                  </span>
                </div>

                <h4>{item.title}</h4>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}