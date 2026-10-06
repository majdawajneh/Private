import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./MedicalHero.module.css";

const professions = [
  "Nurses",
  "Doctors",
  "Pharmacists",
  "Allied Health",
];

const pathway = [
  {
    number: "01",
    title: "German Language",
  },
  {
    number: "02",
    title: "Qualification Recognition",
  },
  {
    number: "03",
    title: "Licensing & Exams",
  },
  {
    number: "04",
    title: "Professional Readiness",
  },
  {
    number: "05",
    title: "Opportunity Exploration",
  },
];

export default function MedicalHero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.wrapper}>
          {/* Content */}

          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Medical & Healthcare Pathways
            </div>

            <h1 className={styles.title}>
              Your Medical Career.
              <br />
              A Clearer Route to{" "}
              <span className={styles.goldText}>
                Germany.
              </span>
            </h1>

            <p className={styles.description}>
              Western Bridge supports healthcare professionals in
              understanding the language, recognition, licensing,
              documentation, and professional preparation involved in
              building a medical pathway toward Germany.
            </p>

            <div className={styles.professions}>
              {professions.map((profession) => (
                <span
                  key={profession}
                  className={styles.profession}
                >
                  <span className={styles.professionDot}></span>
                  {profession}
                </span>
              ))}
            </div>

            <div className={styles.actions}>
              <Link
                href="#medical-pathway"
                className={styles.primaryButton}
              >
                Explore the Medical Pathway
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/contact"
                className={styles.secondaryButton}
              >
                Discuss Your Case
              </Link>
            </div>

            <p className={styles.disclaimer}>
              Western Bridge provides guidance, preparation, training,
              and pathway support. Recognition, licensing, visas, and
              employment decisions remain with the relevant authorities
              and organizations.
            </p>
          </div>

          {/* Visual */}

          <div className={styles.visual}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/medical-hero.jpg"
                alt="Healthcare professional working in a modern hospital environment"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
                className={styles.image}
              />

              <div className={styles.overlay}></div>

              <div className={styles.imageContent}>
                <span className={styles.imageLabel}>
                  Germany Healthcare Pathway
                </span>

                <h2 className={styles.imageTitle}>
                  Prepare for a regulated profession with a clearer plan.
                </h2>
              </div>
            </div>

            {/* Pathway Strip */}

            <div className={styles.pathway}>
              <div className={styles.pathwayHeader}>
                <div>
                  <span className={styles.pathwayLabel}>
                    Medical Path
                  </span>

                  <h3 className={styles.pathwayTitle}>
                    From Preparation to Professional Readiness
                  </h3>
                </div>

              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}