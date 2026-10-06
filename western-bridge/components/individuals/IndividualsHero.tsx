import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./IndividualsHero.module.css";

const focusItems = [
  "Germany-focused pathways",
  "Professional preparation",
  "Medical & non-medical guidance",
  "Training & qualification",
];

export default function IndividualsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.circleOne}></div>
      <div className={styles.circleTwo}></div>

      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              For Individuals
            </div>

            <h1 className={styles.title}>
              Build Your{" "}
              <span className={styles.goldText}>
                International Path
              </span>
            </h1>

            <p className={styles.description}>
              Western Bridge helps individuals understand international
              professional and training pathways, with a strong focus on
              Germany, qualification readiness, language preparation, and
              professional development.
            </p>

            <div className={styles.actions}>
              <Link
                href="#individual-pathways"
                className={styles.primaryButton}
              >
                Explore Your Options
              </Link>

              <button
                type="button"
                className={styles.secondaryButton}
              >
                Ask AI Advisor ✦
              </button>
            </div>

            <div className={styles.focusList}>
              {focusItems.map((item) => (
                <div
                  key={item}
                  className={styles.focusItem}
                >
                  <span className={styles.focusDot}></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.visual}>
            <Image
              src="/images/individuals-hero.jpg"
              alt="Professional exploring international pathways"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.image}
            />

            <div className={styles.overlay}></div>

            <div className={styles.pathCard}>
              <span className={styles.pathLabel}>
                Your Path Starts Here
              </span>

              <h2 className={styles.pathTitle}>
                Understand. Prepare. Move Forward.
              </h2>

              <p className={styles.pathText}>
                Explore the preparation, qualification, training, and
                international guidance that may support your professional
                goals.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}