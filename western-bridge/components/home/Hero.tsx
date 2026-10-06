import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.heroContainer}>
        <div className={styles.content}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Germany-Focused. Internationally Connected.
          </div>

          {/* Main Heading */}
          <h1 className={styles.title}>
            Your Bridge to{" "}
            <span className={styles.goldText}>Germany</span>
            <br />
            & Global Growth
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Western Bridge helps individuals, medical professionals,
            and businesses navigate international pathways through
            consulting, qualification, training, strategic guidance,
            and global partnerships.
          </p>

          {/* Actions */}
          <div className={styles.actions}>
            <Link
              href="#pathways"
              className={styles.primaryButton}
            >
              Explore Your Path
            </Link>

            <button
              type="button"
              className={styles.secondaryButton}
            >
              Ask AI Advisor ✦
            </button>
          </div>

          {/* Trust / Focus Areas */}
          <div className={styles.trustRow}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              Individuals
            </div>

            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              Medical Professionals
            </div>

            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              Businesses
            </div>
          </div>
        </div>
      </Container>

      {/* Brandenburg Gate */}
      <div className={styles.background}>
        <Image
          src="/images/brandenburg-gate.jpg"
          alt="Brandenburg Gate in Berlin, Germany"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 58vw"
          className={styles.backgroundImage}
        />

        <div className={styles.backgroundOverlay}></div>
      </div>

      <div className={styles.decorativeLine}></div>
    </section>
  );
}