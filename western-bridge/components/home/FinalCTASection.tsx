import Link from "next/link";

import Container from "../ui/Container";
import styles from "./FinalCTASection.module.css";

export default function FinalCTASection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.box}>
          <div className={styles.circleOne}></div>
          <div className={styles.circleTwo}></div>

          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Ready to Move Forward?
            </div>

            <h2 className={styles.title}>
              Build Your Next Step With{" "}
              <span className={styles.goldText}>
                Western Bridge
              </span>
            </h2>

            <p className={styles.description}>
              Whether you are an individual, a medical professional,
              or a business, Western Bridge helps you understand your
              options, prepare for the right pathway, and move forward
              with clearer direction.
            </p>
          </div>

          <div className={styles.actions}>
            <Link
              href="/contact"
              className={styles.primaryButton}
            >
              Talk to Western Bridge
            </Link>

            <button
              type="button"
              className={styles.secondaryButton}
            >
              Ask AI Advisor ✦
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}