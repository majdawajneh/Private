import Link from "next/link";

import Container from "../ui/Container";
import styles from "./ProfessionPathsSection.module.css";

const medicalProfessions = [
  "Nurses",
  "Doctors",
  "Pharmacists",
  "Allied Health",
];

const nonMedicalProfessions = [
  "IT Professionals",
  "Engineers",
  "Business Professionals",
  "Skilled Professionals",
  "Other Fields",
];

const medicalDetails = [
  "German and Medical German preparation",
  "Professional recognition guidance",
  "Licensing and qualification preparation",
  "Document and professional readiness support",
];

const nonMedicalDetails = [
  "Career pathway assessment",
  "Qualification and training guidance",
  "German language preparation",
  "International opportunity exploration",
];

export default function ProfessionPathsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine}></span>
            Different Professions. Different Paths.
            <span className={styles.eyebrowLine}></span>
          </div>

          <h2 className={styles.title}>
            Find the Path That Matches{" "}
            <span className={styles.goldText}>
              Your Profession
            </span>
          </h2>

          <p className={styles.description}>
            International preparation depends heavily on your profession.
            Healthcare fields often require regulated recognition and licensing,
            while other sectors may follow different qualification, language,
            and professional-readiness routes.
          </p>
        </div>

        <div className={styles.split}>
          {/* Medical */}

          <article className={`${styles.panel} ${styles.medical}`}>
            <div className={styles.panelContent}>
              <div className={styles.panelLabel}>
                <span className={styles.panelLabelLine}></span>
                Healthcare Pathway
              </div>

              <h3 className={styles.panelTitle}>
                Medical & Healthcare Professionals
              </h3>

              <p className={styles.panelText}>
                Healthcare pathways can require more structured preparation,
                especially when recognition, licensing, language standards, or
                regulated professional requirements apply.
              </p>

              <div className={styles.professions}>
                {medicalProfessions.map((profession) => (
                  <span
                    key={profession}
                    className={styles.profession}
                  >
                    <span className={styles.professionDot}></span>
                    {profession}
                  </span>
                ))}
              </div>

              <div className={styles.details}>
                {medicalDetails.map((detail) => (
                  <div
                    key={detail}
                    className={styles.detail}
                  >
                    <span className={styles.detailIcon}>✓</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/medical"
                className={styles.action}
              >
                Explore Medical Pathways
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <span
              className={styles.bigNumber}
              aria-hidden="true"
            >
              01
            </span>
          </article>

          {/* Non-Medical */}

          <article className={`${styles.panel} ${styles.nonMedical}`}>
            <div className={styles.panelContent}>
              <div className={styles.panelLabel}>
                <span className={styles.panelLabelLine}></span>
                Broader Professional Pathways
              </div>

              <h3 className={styles.panelTitle}>
                Non-Medical Professionals
              </h3>

              <p className={styles.panelText}>
                Other professions may follow different international pathways,
                depending on qualifications, experience, language requirements,
                market demand, and the target country or sector.
              </p>

              <div className={styles.professions}>
                {nonMedicalProfessions.map((profession) => (
                  <span
                    key={profession}
                    className={styles.profession}
                  >
                    <span className={styles.professionDot}></span>
                    {profession}
                  </span>
                ))}
              </div>

              <div className={styles.details}>
                {nonMedicalDetails.map((detail) => (
                  <div
                    key={detail}
                    className={styles.detail}
                  >
                    <span className={styles.detailIcon}>✓</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className={styles.action}
              >
                Explore Professional Support
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <span
              className={styles.bigNumber}
              aria-hidden="true"
            >
              02
            </span>
          </article>

          <div
            className={styles.centerBadge}
            aria-hidden="true"
          >
            WB
          </div>
        </div>

        <div className={styles.note}>
          <span className={styles.noteIcon}>✦</span>

          <span>
            Western Bridge provides guidance, preparation, qualification
            support, and international pathway exploration. Employment and
            regulatory decisions remain with the relevant employers,
            institutions, and authorities.
          </span>
        </div>
      </Container>
    </section>
  );
}