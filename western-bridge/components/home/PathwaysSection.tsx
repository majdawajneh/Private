import Link from "next/link";

import Container from "../ui/Container";
import styles from "./PathwaysSection.module.css";

type Pathway = {
  id: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  href: string;
  featured?: boolean;
};

const pathways: Pathway[] = [
  {
    id: "individuals",
    label: "For Individuals",
    title: "Build Your International Path",
    description:
      "Explore guidance, qualification, training, and international pathways designed around your professional goals.",
    features: [
      "International career guidance",
      "Qualification and readiness support",
      "Training and language pathways",
    ],
    href: "/individuals",
  },

  {
    id: "medical",
    label: "Healthcare Focus",
    title: "Medical Professionals",
    description:
      "Specialized support for healthcare professionals preparing for Germany and international professional pathways.",
    features: [
      "German & Medical German preparation",
      "Professional recognition guidance",
      "Licensing and qualification preparation",
    ],
    href: "/medical",
    featured: true,
  },

  {
    id: "businesses",
    label: "For Businesses",
    title: "Grow Beyond Borders",
    description:
      "Support your business expansion through market insight, strategic consulting, partnerships, and international networking.",
    features: [
      "Business development consulting",
      "Market and feasibility studies",
      "International partnerships",
    ],
    href: "/businesses",
  },
];

function PathwayIcon({ id }: { id: string }) {
  if (id === "medical") {
    return (
      <svg
        width="30"
        height="30"
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

  if (id === "businesses") {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 8H20V19H4V8Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />

        <path
          d="M9 8V5H15V8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M4 12H20"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M10 12V14H14V12"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="30"
      height="30"
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

export default function PathwaysSection() {
  return (
    <section
      id="pathways"
      className={styles.section}
    >
      <div className={styles.decorationOne}></div>
      <div className={styles.decorationTwo}></div>

      <Container>
        {/* Section Heading */}

        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine}></span>

            Choose Your Path

            <span className={styles.eyebrowLine}></span>
          </div>

          <h2 className={styles.title}>
            Your Goal. Your Path.
            <br />
            Our Guidance.
          </h2>

          <p className={styles.description}>
            Whether you are building your professional future,
            preparing for a healthcare pathway, or expanding your
            business internationally, Western Bridge helps you
            understand the next step.
          </p>
        </div>

        {/* Cards */}

        <div className={styles.grid}>
          {pathways.map((pathway) => (
            <article
              key={pathway.id}
              className={`${styles.card} ${
                pathway.featured ? styles.featuredCard : ""
              }`}
            >
              <div className={styles.cardAccent}></div>

              <div className={styles.iconWrapper}>
                <PathwayIcon id={pathway.id} />
              </div>

              <span className={styles.cardLabel}>
                {pathway.label}
              </span>

              <h3 className={styles.cardTitle}>
                {pathway.title}
              </h3>

              <p className={styles.cardDescription}>
                {pathway.description}
              </p>

              <ul className={styles.features}>
                {pathway.features.map((feature) => (
                  <li
                    key={feature}
                    className={styles.feature}
                  >
                    <span className={styles.check}>✓</span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={pathway.href}
                className={styles.cardLink}
              >
                Explore Pathway

                <span
                  className={styles.arrow}
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom Note */}

        <div className={styles.bottomNote}>
          <span className={styles.bottomDot}></span>

          Not sure which path fits you? The Western Bridge AI Advisor
          will help you explore your options.
        </div>
      </Container>
    </section>
  );
}