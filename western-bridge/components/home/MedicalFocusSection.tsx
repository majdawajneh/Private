import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./MedicalFocusSection.module.css";

const services = [
  "German & Medical German preparation",
  "Professional recognition guidance",
  "Licensing and qualification preparation",
  "Document translation and authentication support",
  "Professional readiness and pathway guidance",
  "International opportunity exploration",
];

export default function MedicalFocusSection() {
  return (
    <section className={styles.section}>
      <div className={styles.circleOne}></div>
      <div className={styles.circleTwo}></div>

      <Container>
        <div className={styles.wrapper}>
          {/* Content */}

          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Healthcare Focus
            </div>

            <h2 className={styles.title}>
              Specialized Support for{" "}
              <span className={styles.goldText}>
                Medical Professionals
              </span>
            </h2>

            <p className={styles.description}>
              Western Bridge places strong focus on healthcare
              professionals preparing for international pathways,
              especially those connected to Germany. Our role is to
              support preparation, qualification, recognition,
              language development, and professional readiness.
            </p>

            <div className={styles.services}>
              {services.map((service) => (
                <div
                  key={service}
                  className={styles.service}
                >
                  <span className={styles.serviceIcon}>
                    ✓
                  </span>

                  <span className={styles.serviceText}>
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <Link
                href="/medical"
                className={styles.primaryButton}
              >
                Explore Medical Pathways
              </Link>

              <button
                type="button"
                className={styles.secondaryButton}
              >
                Ask AI Advisor ✦
              </button>
            </div>
          </div>

          {/* Visual */}

          <div className={styles.visual}>
            <Image
              src="/images/medical-focus.jpg"
              alt="Healthcare professionals preparing for international pathways"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.image}
            />

            <div className={styles.imageOverlay}></div>

            <div className={styles.pathwayCard}>
              <div className={styles.pathwayHeader}>
                <span className={styles.pathwayLabel}>
                  Germany Pathway
                </span>

                <span className={styles.pathwayTitle}>
                  Healthcare Professionals
                </span>
              </div>

              <p className={styles.pathwayText}>
                Preparation may include language development,
                qualification assessment, professional recognition,
                licensing preparation, and career pathway guidance.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}