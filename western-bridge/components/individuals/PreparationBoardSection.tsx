import Container from "../ui/Container";
import styles from "./PreparationBoardSection.module.css";

const groups = [
  {
    number: "01",
    id: "profile",
    title: "Your Professional Profile",
    items: [
      "Professional background",
      "Academic qualifications",
      "Work experience",
      "Current career position",
    ],
  },
  {
    number: "02",
    id: "readiness",
    title: "Your Readiness",
    items: [
      "Current language level",
      "Sector-specific requirements",
      "Professional examination needs",
      "Licensing or qualification preparation",
    ],
  },
  {
    number: "03",
    id: "documents",
    title: "Your Documents",
    items: [
      "Qualification documents",
      "Certified translation requirements",
      "Authentication and verification",
      "Recognition-related documentation",
    ],
  },
  {
    number: "04",
    id: "direction",
    title: "Your Next Direction",
    items: [
      "Suitable pathway direction",
      "Relevant institutions and channels",
      "Professional opportunity exploration",
      "Recommended preparation steps",
    ],
  },
];

function GroupIcon({ id }: { id: string }) {
  if (id === "readiness") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 3V21"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M7 8L12 3L17 8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 16L12 21L17 16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (id === "documents") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 3H15L19 7V21H6V3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M15 3V7H19"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M9 12H16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M9 16H14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === "direction") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="8"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M15.5 8.5L13 13L8.5 15.5L11 11L15.5 8.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="7"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5 20C5.6 15.8 8 13 12 13C16 13 18.4 15.8 19 20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PreparationBoardSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.board}>
          <span
            className={styles.cornerAccent}
            aria-hidden="true"
          ></span>

          <span
            className={styles.watermark}
            aria-hidden="true"
          >
            READY
          </span>

          <div className={styles.top}>
            <div>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine}></span>
                Preparation Assessment
              </div>

              <h2 className={styles.title}>
                Build the Pieces of{" "}
                <span className={styles.goldText}>
                  Your International Path
                </span>
              </h2>
            </div>

            <p className={styles.introText}>
              A successful international pathway usually depends on
              more than one requirement. Western Bridge helps you
              understand what needs to be prepared, what may already
              be ready, and where additional support could be useful.
            </p>
          </div>

          <div className={styles.assessmentGrid}>
            {groups.map((group) => (
              <article
                key={group.id}
                className={styles.group}
              >
                <span className={styles.groupNumber}>
                  {group.number}
                </span>

                <div className={styles.groupHeader}>
                  <div className={styles.iconBox}>
                    <GroupIcon id={group.id} />
                  </div>

                  <h3 className={styles.groupTitle}>
                    {group.title}
                  </h3>
                </div>

                <div className={styles.list}>
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className={styles.item}
                    >
                      <span className={styles.check}>
                        ✓
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className={styles.progressStrip}>
            <div className={styles.progressContent}>
              <span className={styles.progressLabel}>
                Personalized Guidance
              </span>

              <h3 className={styles.progressTitle}>
                Not Every Path Requires the Same Preparation
              </h3>

              <p className={styles.progressText}>
                Your profession, qualifications, destination, language
                level, and goals can change the preparation you may
                need. The Western Bridge AI Advisor can help you
                identify the most relevant areas to explore first.
              </p>
            </div>

            <button
              type="button"
              className={styles.button}
            >
              Start Your Assessment
              <span aria-hidden="true">✦</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}