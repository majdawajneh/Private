import Link from "next/link";

import Container from "../ui/Container";
import styles from "./MedicalPathwaySection.module.css";

const stages = [
  {
    number: "01",
    phase: "Profile Assessment",
    title: "Understand Your Starting Point",
    text: "Your profession, degree, professional license, experience, German level, and target role all affect the pathway you may need.",
    items: [
      "Profession & specialization",
      "Academic qualification",
      "Professional experience",
      "Current German level",
    ],
  },
  {
    number: "02",
    phase: "Language",
    title: "Build German Language Readiness",
    text: "Healthcare pathways in Germany commonly require German language preparation, with additional profession-specific communication requirements depending on the role.",
    items: [
      "General German",
      "Professional communication",
      "Medical terminology",
      "Exam preparation where applicable",
    ],
  },
  {
    number: "03",
    phase: "Recognition",
    title: "Prepare for Qualification Recognition",
    text: "Regulated healthcare professions may require your foreign qualification to be reviewed by the relevant German authority before professional practice is permitted.",
    items: [
      "Certificates & transcripts",
      "Professional records",
      "Translations",
      "Recognition documentation",
    ],
    featured: true,
  },
  {
    number: "04",
    phase: "Licensing",
    title: "Understand Licensing Requirements",
    text: "Depending on the profession and recognition result, additional examinations, language assessments, adaptation measures, or licensing steps may apply.",
    items: [
      "Professional requirements",
      "Possible examinations",
      "Sector-specific language",
      "Authority requirements",
    ],
  },
  {
    number: "05",
    phase: "Professional Readiness",
    title: "Prepare for the German Workplace",
    text: "Professional readiness goes beyond documents. Communication, workplace expectations, interviews, terminology, and healthcare culture can all matter.",
    items: [
      "Interview readiness",
      "Workplace communication",
      "German healthcare context",
      "Professional profile",
    ],
  },
  {
    number: "06",
    phase: "Next Direction",
    title: "Explore Relevant Opportunities",
    text: "Once the preparation path is clearer, you can explore relevant employers, institutions, professional channels, and other opportunities appropriate to your profile.",
    items: [
      "Opportunity channels",
      "Institutional connections",
      "Professional networks",
      "Next-step planning",
    ],
  },
];

export default function MedicalPathwaySection() {
  return (
    <section
      id="medical-pathway"
      className={styles.section}
    >
      <Container>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Germany Medical Pathway
            </div>

            <h2 className={styles.title}>
              What Does the Path Actually{" "}
              <span className={styles.goldText}>
                Look Like?
              </span>
            </h2>
          </div>

          <div className={styles.headerRight}>
            <p className={styles.description}>
              There is no single identical process for every healthcare
              professional. The exact route depends on the profession,
              qualification, federal state, recognition decision, and
              requirements of the responsible authorities.
            </p>

            <div className={styles.notice}>
              <span className={styles.noticeMark}>!</span>

              <p>
                Nurses, doctors, pharmacists, and other healthcare
                professionals can follow different recognition and
                licensing procedures.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.pathway}>
          {stages.map((stage) => (
            <article
              key={stage.number}
              className={`${styles.stage} ${
                stage.featured ? styles.featured : ""
              }`}
            >
              <div className={styles.stageRail}>
                <span className={styles.stageNode}>
                  {stage.number}
                </span>

                <span className={styles.railLine}></span>
              </div>

              <div className={styles.stageMain}>
                <span className={styles.phase}>
                  {stage.phase}
                </span>

                <h3 className={styles.stageTitle}>
                  {stage.title}
                </h3>

                <p className={styles.stageText}>
                  {stage.text}
                </p>
              </div>

              <div className={styles.stageItems}>
                {stage.items.map((item) => (
                  <div
                    key={item}
                    className={styles.item}
                  >
                    <span className={styles.itemMark}>
                      ✓
                    </span>

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomContent}>
            <span className={styles.bottomLabel}>
              Important
            </span>

            <h3 className={styles.bottomTitle}>
              Your Profession Determines the Detailed Route
            </h3>

            <p className={styles.bottomText}>
              The next section separates the pathways for nurses,
              doctors, pharmacists, and other healthcare professionals
              so you can understand the major differences.
            </p>
          </div>

          <Link
            href="#medical-professions"
            className={styles.button}
          >
            Compare Professions
            <span aria-hidden="true">↓</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}