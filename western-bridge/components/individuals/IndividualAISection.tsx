import Container from "../ui/Container";
import styles from "./IndividualAISection.module.css";

const questions = [
  {
    number: "01",
    title: "Which professional area best describes you?",
    options: [
      "Medical Professional",
      "IT / Engineering",
      "Business",
      "Skilled Profession",
      "Other Field",
    ],
    active: "Medical Professional",
  },
  {
    number: "02",
    title: "Which destination are you currently exploring?",
    options: [
      "Germany",
      "Other Europe",
      "Gulf Countries",
      "Not Sure Yet",
    ],
    active: "Germany",
  },
  {
    number: "03",
    title: "What kind of support are you looking for?",
    options: [
      "Language",
      "Recognition",
      "Training",
      "Professional Readiness",
      "General Guidance",
    ],
    active: "Recognition",
  },
];

const trustPoints = [
  "Focused on Western Bridge services and international pathways",
  "Designed to help you identify relevant preparation areas",
  "Does not guarantee employment, visas, licensing, or recognition outcomes",
];

export default function IndividualAISection() {
  return (
    <section className={styles.section}>
      <div
        className={styles.gridPattern}
        aria-hidden="true"
      ></div>

      <div
        className={styles.glowOne}
        aria-hidden="true"
      ></div>

      <div
        className={styles.glowTwo}
        aria-hidden="true"
      ></div>

      <Container>
        <div className={styles.wrapper}>
          {/* Left Content */}

          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot}></span>
              Western Bridge AI Advisor
            </div>

            <h2 className={styles.title}>
              Start With a Smarter{" "}
              <span className={styles.goldText}>
                Pathway Assessment
              </span>
            </h2>

            <p className={styles.description}>
              Your profession, destination, qualifications, and goals
              can completely change the pathway you may need. The
              Western Bridge AI Advisor is designed to help you narrow
              down the most relevant preparation areas before you move
              forward.
            </p>

            <div className={styles.trustList}>
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className={styles.trustItem}
                >
                  <span className={styles.trustIcon}>
                    ✓
                  </span>

                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Assessment Preview */}

          <div className={styles.assessment}>
            <div className={styles.assessmentTop}>
              <div className={styles.assessmentIdentity}>
                <div className={styles.aiMark}>
                  ✦
                </div>

                <div>
                  <div className={styles.assessmentName}>
                    Pathway Assessment
                  </div>

                  <span className={styles.assessmentSub}>
                    Western Bridge AI Advisor
                  </span>
                </div>
              </div>

              <div className={styles.status}>
                <span className={styles.statusDot}></span>
                AI Advisor
              </div>
            </div>

            {questions.map((question) => (
              <div
                key={question.number}
                className={styles.question}
              >
                <div className={styles.questionHeader}>
                  <span className={styles.questionNumber}>
                    {question.number}
                  </span>

                  <h3 className={styles.questionTitle}>
                    {question.title}
                  </h3>
                </div>

                <div className={styles.options}>
                  {question.options.map((option) => (
                    <span
                      key={option}
                      className={`${styles.option} ${
                        option === question.active
                          ? styles.optionActive
                          : ""
                      }`}
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className={styles.progress}>
              <div className={styles.progressTop}>
                <span>Assessment preview</span>
                <span>72%</span>
              </div>

              <div className={styles.progressTrack}>
                <div className={styles.progressValue}></div>
              </div>
            </div>

            <div className={styles.actionArea}>
              <p className={styles.helperText}>
                The full advisor will ask a few more questions before
                suggesting relevant Western Bridge service areas and
                preparation topics.
              </p>

              <button
                type="button"
                className={styles.startButton}
              >
                Start AI Assessment
                <span aria-hidden="true">✦</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}