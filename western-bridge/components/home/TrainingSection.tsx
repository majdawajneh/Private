import Link from "next/link";

import Container from "../ui/Container";
import styles from "./TrainingSection.module.css";

const trainingItems = [
  {
    id: "german",
    label: "Language Preparation",
    title: "German Language",
    description:
      "Language preparation designed to support international study, training, professional, and relocation pathways connected to Germany.",
    href: "/services",
  },
  {
    id: "medical-german",
    label: "Healthcare Focus",
    title: "Medical German",
    description:
      "Specialized language preparation for healthcare professionals who need medical terminology, workplace communication, and professional readiness.",
    href: "/medical",
    featured: true,
  },
  {
    id: "licensing",
    label: "Professional Preparation",
    title: "Exams & Licensing",
    description:
      "Preparation support for professional, licensing, qualification, and sector-specific examinations where applicable.",
    href: "/services",
  },
  {
    id: "recognition",
    label: "Documents & Qualifications",
    title: "Recognition & Documentation",
    description:
      "Guidance related to qualification recognition, document preparation, translation, authentication, and international application readiness.",
    href: "/services",
  },
];

function TrainingIcon({ id }: { id: string }) {
  if (id === "medical-german") {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M9 3H15V9H21V15H15V21H9V15H3V9H9V3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (id === "licensing") {
    return (
      <svg
        width="28"
        height="28"
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

  if (id === "recognition") {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 4H19V20H5V4Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />

        <path
          d="M8 9H16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M8 13H16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M8 17H13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 5H20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M7 5C7.8 10.5 10.4 14.5 15 17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M16 5C15 11 11.5 15.5 6 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M14 15L18 21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function TrainingSection() {
  return (
    <section className={styles.section}>
      <div className={styles.decorationOne}></div>
      <div className={styles.decorationTwo}></div>

      <Container>
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine}></span>
            Training & Qualification
            <span className={styles.eyebrowLine}></span>
          </div>

          <h2 className={styles.title}>
            Prepare for Your{" "}
            <span className={styles.goldText}>
              International Path
            </span>
          </h2>

          <p className={styles.description}>
            Western Bridge supports professional readiness through
            language training, qualification preparation, exam
            preparation, recognition guidance, and document support.
          </p>
        </div>

        <div className={styles.grid}>
          {trainingItems.map((item) => (
            <article
              key={item.id}
              className={`${styles.card} ${
                item.featured ? styles.featuredCard : ""
              }`}
            >
              <div className={styles.iconWrapper}>
                <TrainingIcon id={item.id} />
              </div>

              <span className={styles.cardLabel}>
                {item.label}
              </span>

              <h3 className={styles.cardTitle}>
                {item.title}
              </h3>

              <p className={styles.cardDescription}>
                {item.description}
              </p>

              <Link
                href={item.href}
                className={styles.cardLink}
              >
                Learn More
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className={styles.bottomCta}>
          <div className={styles.bottomContent}>
            <h3 className={styles.bottomTitle}>
              Not sure where your preparation should begin?
            </h3>

            <p className={styles.bottomText}>
              Western Bridge can help you understand which language,
              qualification, recognition, or preparation pathway may
              fit your professional goal.
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.bottomButton}
          >
            Get Guidance
          </Link>
        </div>
      </Container>
    </section>
  );
}