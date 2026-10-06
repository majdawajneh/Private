import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./EducationHero.module.css";

const audiences = [
  "Students & Learners",
  "Universities",
  "Training Providers",
  "Educational Institutions",
];

export default function EducationHero() {
  return (
    <section className={styles.hero}>
      <span
        className={styles.backgroundWord}
        aria-hidden="true"
      >
        EDUCATION
      </span>

      <Container>
        <div className={styles.wrapper}>
          {/* Content */}

          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot}></span>
              Global Education Exchange
            </div>

            <h1 className={styles.title}>
              Connect Learning With{" "}
              <span className={styles.goldText}>
                Global Opportunity
              </span>
            </h1>

            <p className={styles.description}>
              Western Bridge supports students, learners, universities,
              training providers, and educational institutions in exploring
              international academic pathways, professional preparation,
              institutional cooperation, and cross-border education
              opportunities.
            </p>

            <div className={styles.audienceRow}>
              {audiences.map((audience) => (
                <div
                  key={audience}
                  className={styles.audienceItem}
                >
                  <span className={styles.audienceDot}></span>
                  {audience}
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <Link
                href="#education-pathways"
                className={styles.primaryButton}
              >
                Explore Education Pathways
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="#institutional-partnerships"
                className={styles.secondaryButton}
              >
                Institutional Partnerships
              </Link>
            </div>
          </div>

          {/* Visual */}

          <div className={styles.visual}>
            <span
              className={styles.goldCircle}
              aria-hidden="true"
            ></span>

            {/* Main Image */}

            <div className={styles.mainImage}>
              <Image
                src="/images/education-campus.jpg"
                alt="International university campus and academic environment"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
                className={styles.image}
              />

              <div className={styles.imageOverlay}></div>

              <div className={styles.imageCaption}>
                <span className={styles.captionLabel}>
                  International Education
                </span>

                <h2 className={styles.captionTitle}>
                  Academic pathways and learning across borders.
                </h2>
              </div>
            </div>

            {/* Secondary Image */}

            <div className={styles.secondaryImage}>
              <Image
                src="/images/education-students.jpg"
                alt="International students in a modern learning environment"
                fill
                sizes="(max-width: 650px) 65vw, 22vw"
                className={styles.image}
              />

              <div className={styles.secondaryOverlay}></div>

              <div className={styles.secondaryCaption}>
                <span>Students</span>
                <strong>International Learning</strong>
              </div>
            </div>

            {/* Floating Labels */}

            <span className={styles.labelGermany}>
              Germany
            </span>

            <span className={styles.labelUniversities}>
              Universities
            </span>

            <span className={styles.labelTraining}>
              Training & Learning
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}