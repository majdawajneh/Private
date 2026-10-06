import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./GermanyGatewaySection.module.css";

const reasons = [
  {
    id: "economy",
    title: "Strong Business Environment",
    text: "A major European market for professionals, businesses, investment, and international partnerships.",
  },
  {
    id: "healthcare",
    title: "Healthcare Pathways",
    text: "A key destination for medical professionals seeking qualification, recognition, and professional development.",
  },
  {
    id: "training",
    title: "Education & Training",
    text: "Professional, vocational, language, and qualification pathways for different career stages.",
  },
  {
    id: "europe",
    title: "Gateway to Europe",
    text: "Germany can serve as a strategic starting point for broader European opportunities and partnerships.",
  },
];

function ReasonIcon({ id }: { id: string }) {
  if (id === "healthcare") {
    return (
      <svg
        width="22"
        height="22"
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

  if (id === "training") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 8L12 4L21 8L12 12L3 8Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />

        <path
          d="M6 10V15C6 17 8.7 19 12 19C15.3 19 18 17 18 15V10"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === "europe") {
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
          d="M4 12H20"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M12 4C14.5 6.2 16 8.8 16 12C16 15.2 14.5 17.8 12 20"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M12 4C9.5 6.2 8 8.8 8 12C8 15.2 9.5 17.8 12 20"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
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
      <path
        d="M4 18V10H9V18"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M10 18V6H15V18"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M16 18V12H20V18"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M3 18H21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function GermanyGatewaySection() {
  return (
    <section className={styles.section}>
      <div className={styles.decoration}></div>

      <Container>
        <div className={styles.wrapper}>
          {/* Visual */}

          <div className={styles.visual}>
            <Image
              src="/images/germany-gateway.jpg"
              alt="Berlin, Germany"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.image}
            />

            <div className={styles.imageOverlay}></div>

            <div className={styles.locationCard}>
              <div className={styles.locationTop}>
                <div className={styles.locationIcon}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 21C12 21 19 15 19 9.5C19 5.9 16.1 3 12 3C7.9 3 5 5.9 5 9.5C5 15 12 21 12 21Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />

                    <circle
                      cx="12"
                      cy="9.5"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                  </svg>
                </div>

                <span className={styles.locationTitle}>
                  Germany Focus
                </span>
              </div>

              <p className={styles.locationText}>
                Western Bridge places Germany at the center of many
                international professional, training, and business
                pathways.
              </p>
            </div>
          </div>

          {/* Content */}

          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Germany as Your Gateway
            </div>

            <h2 className={styles.title}>
              Connecting You With{" "}
              <span className={styles.goldText}>Germany</span>
              <br />
              and Beyond
            </h2>

            <p className={styles.description}>
              Germany is one of Western Bridge&apos;s primary international
              markets. We support individuals, medical professionals,
              and businesses in understanding the preparation,
              qualification, and strategic steps that may help them
              pursue suitable pathways connected to Germany and Europe.
            </p>

            <div className={styles.reasonsGrid}>
              {reasons.map((reason) => (
                <article
                  key={reason.id}
                  className={styles.reasonCard}
                >
                  <div className={styles.reasonIcon}>
                    <ReasonIcon id={reason.id} />
                  </div>

                  <h3 className={styles.reasonTitle}>
                    {reason.title}
                  </h3>

                  <p className={styles.reasonText}>
                    {reason.text}
                  </p>
                </article>
              ))}
            </div>

            <div className={styles.actions}>
              <Link
                href="/germany"
                className={styles.primaryButton}
              >
                Explore Germany Pathways
              </Link>

              <button
                type="button"
                className={styles.secondaryButton}
              >
                Ask AI Advisor ✦
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}