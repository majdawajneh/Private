import Link from "next/link";

import Container from "../ui/Container";
import styles from "./GermanyJourneySection.module.css";

const journeySteps = [
  {
    number: "01",
    title: "Define Your Direction",
    text: "We begin by understanding your profession, experience, current qualifications, language level, and the type of pathway you want to explore in Germany.",
    tags: [
      "Career Goal",
      "Professional Background",
      "Germany Focus",
    ],
  },
  {
    number: "02",
    title: "Language & Qualification",
    text: "Depending on your field, your preparation may include German language development, sector-specific language, professional training, or qualification readiness.",
    tags: [
      "German Language",
      "Medical German",
      "Professional Training",
    ],
  },
  {
    number: "03",
    title: "Documents & Recognition",
    text: "For regulated professions and specific pathways, the process may involve preparing documents, translations, authentication, and understanding professional recognition requirements.",
    tags: [
      "Recognition Guidance",
      "Translation",
      "Document Preparation",
    ],
    highlight: true,
  },
  {
    number: "04",
    title: "Professional Readiness",
    text: "We help you understand the skills, examinations, licensing preparation, communication standards, and professional expectations that may apply to your target pathway.",
    tags: [
      "Exam Preparation",
      "Professional Readiness",
      "Licensing Guidance",
    ],
  },
  {
    number: "05",
    title: "Explore Relevant Opportunities",
    text: "Once your preparation is clearer, Western Bridge can help you identify relevant channels, institutions, professional ecosystems, and opportunities to explore independently.",
    tags: [
      "Opportunity Guidance",
      "Professional Networks",
      "International Pathways",
    ],
  },
];

export default function GermanyJourneySection() {
  return (
    <section className={styles.section}>
      <span
        className={styles.backgroundWord}
        aria-hidden="true"
      >
        GERMANY
      </span>

      <Container>
        <div className={styles.wrapper}>
          {/* Left Intro */}

          <div className={styles.intro}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowNumber}>02</span>

              <span className={styles.eyebrowLine}></span>

              Your Germany Path
            </div>

            <h2 className={styles.title}>
              From Where You Are
              <br />
              to{" "}
              <span className={styles.goldText}>
                Where You Want to Be
              </span>
            </h2>

            <p className={styles.description}>
              Germany does not have one universal pathway for every
              person. Your profession, qualifications, language level,
              and personal goals can all affect the preparation you may
              need. Western Bridge helps you understand that journey
              step by step.
            </p>

            <div className={styles.germanyBlock}>
              <span className={styles.germanyLabel}>
                Primary Destination
              </span>

              <span className={styles.germanyWord}>
                Germany
              </span>

              <span className={styles.germanySub}>
                Professional • Training • Qualification • Business
              </span>

              <span
                className={styles.germanyAccent}
                aria-hidden="true"
              ></span>
            </div>
          </div>

          {/* Journey */}

          <div className={styles.journey}>
            {journeySteps.map((step) => (
              <article
                key={step.number}
                className={`${styles.step} ${
                  step.highlight ? styles.highlightStep : ""
                }`}
              >
                <span className={styles.node}>
                  <span className={styles.nodeInner}></span>
                </span>

                <div className={styles.stepTop}>
                  <span className={styles.stepNumber}>
                    STEP {step.number}
                  </span>

                  <h3 className={styles.stepTitle}>
                    {step.title}
                  </h3>
                </div>

                <p className={styles.stepText}>
                  {step.text}
                </p>

                <div className={styles.tags}>
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className={styles.tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}

            {/* Destination */}

            <div className={styles.destination}>
              <div className={styles.destinationContent}>
                <span className={styles.destinationLabel}>
                  Your Next Step
                </span>

                <h3 className={styles.destinationTitle}>
                  Build a Clearer Germany Pathway
                </h3>

                <p className={styles.destinationText}>
                  Every case is different. Western Bridge can help you
                  understand which preparation areas may be relevant
                  before you move forward.
                </p>
              </div>

              <Link
                href="/germany"
                className={styles.destinationButton}
              >
                Explore Germany
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}