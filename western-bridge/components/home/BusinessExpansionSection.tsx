import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./BusinessExpansionSection.module.css";

const services = [
  {
    title: "Market Research",
    text: "Understand target markets, customer segments, and expansion conditions before making strategic decisions.",
  },
  {
    title: "Business Development",
    text: "Support for growth planning, market entry preparation, and international business development.",
  },
  {
    title: "International Partnerships",
    text: "Build connections with institutions, businesses, and professional networks across international markets.",
  },
  {
    title: "Digital Solutions",
    text: "Support through digital platforms, HR solutions, online presence, marketing, and content management.",
  },
];

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    (
      <svg
        key="market"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 19V10"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M10 19V5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M16 19V13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M22 19V8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),

    (
      <svg
        key="business"
        width="22"
        height="22"
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
      </svg>
    ),

    (
      <svg
        key="partnership"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="8"
          cy="8"
          r="3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="17"
          cy="8"
          r="3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M3 19C3.5 15.8 5.2 14 8 14C10.8 14 12.5 15.8 13 19"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M12 19C12.4 15.8 14.2 14 17 14C19.8 14 21.5 15.8 22 19"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),

    (
      <svg
        key="digital"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="13"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M8 21H16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M12 17V21"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
  ];

  return icons[index] ?? icons[0];
}

export default function BusinessExpansionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.decorationOne}></div>
      <div className={styles.decorationTwo}></div>

      <Container>
        <div className={styles.wrapper}>
          {/* Content */}

          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Business Growth & Partnerships
            </div>

            <h2 className={styles.title}>
              Expand Your Business{" "}
              <span className={styles.goldText}>
                Beyond Borders
              </span>
            </h2>

            <p className={styles.description}>
              Western Bridge supports businesses seeking international
              growth through strategic consulting, market insight,
              partnership development, digital solutions, and access
              to relevant institutional and commercial networks.
            </p>

            <div className={styles.services}>
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className={styles.serviceCard}
                >
                  <div className={styles.serviceIcon}>
                    <ServiceIcon index={index} />
                  </div>

                  <h3 className={styles.serviceTitle}>
                    {service.title}
                  </h3>

                  <p className={styles.serviceText}>
                    {service.text}
                  </p>
                </article>
              ))}
            </div>

            <div className={styles.actions}>
              <Link
                href="/businesses"
                className={styles.primaryButton}
              >
                Explore Business Services
              </Link>

              <Link
                href="/contact"
                className={styles.secondaryButton}
              >
                Contact Western Bridge
              </Link>
            </div>
          </div>

          {/* Visual */}

          <div className={styles.visual}>
            <Image
              src="/images/business-expansion.jpg"
              alt="International business growth and partnerships"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.image}
            />

            <div className={styles.imageOverlay}></div>

            <div className={styles.expansionCard}>
              <span className={styles.expansionLabel}>
                International Growth
              </span>

              <h3 className={styles.expansionTitle}>
                Strategy. Networks. Expansion.
              </h3>

              <p className={styles.expansionText}>
                From market research to partnership development,
                Western Bridge helps businesses better prepare for
                international growth and cross-border collaboration.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}