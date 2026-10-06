import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./EducationEntrySection.module.css";

const studentFeatures = [
  "Study & training pathways",
  "Language preparation",
  "Qualification guidance",
  "International education exploration",
];

const institutionFeatures = [
  "University connections",
  "Training cooperation",
  "Academic networking",
  "International institutional partnerships",
];

export default function EducationEntrySection() {
  return (
    <section
      id="education-pathways"
      className={styles.section}
    >
      <span
        className={styles.backgroundWord}
        aria-hidden="true"
      >
        CONNECT
      </span>

      <Container>
        {/* Header */}

        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Two Sides of Education
            </div>

            <h2 className={styles.title}>
              Choose Where Your{" "}
              <span className={styles.goldText}>
                Journey Begins
              </span>
            </h2>
          </div>

          <p className={styles.headerText}>
            Western Bridge works across both sides of international
            education: supporting individuals who want to explore
            learning and qualification pathways, and supporting
            institutions seeking international cooperation, connections,
            and educational development.
          </p>
        </div>

        {/* Entry Portals */}

        <div className={styles.entries}>
          {/* Student Side */}

          <article
            className={`${styles.portal} ${styles.student}`}
          >
            <div className={styles.portalImage}>
              <Image
                src="/images/education-student-pathway.jpg"
                alt="Student exploring international education opportunities"
                fill
                sizes="(max-width: 850px) 100vw, 50vw"
                className={styles.image}
              />
            </div>

            <div className={styles.overlay}></div>

            <div className={styles.portalTop}>
              <span className={styles.portalNumber}>
                01 / INDIVIDUAL
              </span>

              <span className={styles.portalType}>
                Students & Learners
              </span>
            </div>

            <div className={styles.portalContent}>
              <span className={styles.portalLabel}>
                Individual Education Pathways
              </span>

              <h3 className={styles.portalTitle}>
                Build Your International Learning Path
              </h3>

              <p className={styles.portalText}>
                Explore study, professional training, language,
                qualification, and international learning pathways based
                on your goals, background, and preferred destination.
              </p>

              <div className={styles.features}>
                {studentFeatures.map((feature) => (
                  <span
                    key={feature}
                    className={styles.feature}
                  >
                    <span className={styles.featureDot}></span>
                    {feature}
                  </span>
                ))}
              </div>

              <Link
                href="#student-pathways"
                className={styles.action}
              >
                Explore Student Pathways
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          {/* Institution Side */}

          <article
            id="institutional-partnerships"
            className={`${styles.portal} ${styles.institution}`}
          >
            <div className={styles.portalImage}>
              <Image
                src="/images/education-institution-meeting.jpg"
                alt="University and educational institution representatives discussing international cooperation"
                fill
                sizes="(max-width: 850px) 100vw, 50vw"
                className={styles.image}
              />
            </div>

            <div className={styles.overlay}></div>

            <div className={styles.portalTop}>
              <span className={styles.portalNumber}>
                02 / INSTITUTION
              </span>

              <span className={styles.portalType}>
                Universities & Institutions
              </span>
            </div>

            <div className={styles.portalContent}>
              <span className={styles.portalLabel}>
                Institutional Cooperation
              </span>

              <h3 className={styles.portalTitle}>
                Build Academic Connections Across Borders
              </h3>

              <p className={styles.portalText}>
                Explore cooperation between universities, training
                providers, professional organizations, educational
                institutions, and relevant international academic
                ecosystems.
              </p>

              <div className={styles.features}>
                {institutionFeatures.map((feature) => (
                  <span
                    key={feature}
                    className={styles.feature}
                  >
                    <span className={styles.featureDot}></span>
                    {feature}
                  </span>
                ))}
              </div>

              <Link
                href="#institution-network"
                className={styles.action}
              >
                Explore Institutional Cooperation
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          {/* Western Bridge Marker */}

          <div
            className={styles.bridgeMarker}
            aria-hidden="true"
          >
            <div className={styles.bridgeInner}>
              <span className={styles.bridgeMark}>
                WB
              </span>

              <span className={styles.bridgeText}>
                Bridge
              </span>
            </div>
          </div>
        </div>

        {/* Legal / Positioning Note */}

        <div className={styles.bottom}>
          <span
            className={styles.bottomMark}
            aria-hidden="true"
          >
            ✦
          </span>

          <p className={styles.bottomText}>
            Western Bridge provides guidance, preparation, networking,
            and institutional cooperation support. University admission,
            scholarships, academic recognition, visas, and formal
            partnership decisions remain with the relevant universities,
            institutions, authorities, and participating organizations.
          </p>
        </div>
      </Container>
    </section>
  );
}