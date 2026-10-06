import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./EducationPreparationSection.module.css";

const preparationAreas = [
  {
    number: "01",
    label: "Language",
    title: "Language Preparation",
    text: "Understand the language level that may be relevant to your study, training, professional, or destination requirements.",
    status: "Build Readiness",
  },
  {
    number: "02",
    label: "Documents",
    title: "Document Preparation",
    text: "Organize academic certificates, transcripts, professional records, translations, authentication, and supporting documents.",
    status: "Prepare File",
  },
  {
    number: "03",
    label: "Recognition",
    title: "Qualification Recognition",
    text: "Understand whether previous academic or professional qualifications may require recognition or evaluation for your intended pathway.",
    status: "Understand Process",
  },
  {
    number: "04",
    label: "Applications",
    title: "Application Readiness",
    text: "Prepare the information, documentation, communication, and supporting materials commonly needed when approaching institutions.",
    status: "Get Ready",
  },
  {
    number: "05",
    label: "Professional",
    title: "Professional Preparation",
    text: "For career-linked education pathways, identify additional training, exams, sector requirements, or professional readiness needs.",
    status: "Strengthen Profile",
  },
];

export default function EducationPreparationSection() {
  return (
    <section
      id="education-preparation"
      className={styles.section}
    >
      <Container>
        <div className={styles.wrapper}>
          {/* Left Side */}

          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Education Preparation Hub
            </div>

            <h2 className={styles.title}>
              Prepare More Than Just{" "}
              <span className={styles.goldText}>
                an Application
              </span>
            </h2>

            <p className={styles.description}>
              International education often involves several preparation
              areas at the same time. Western Bridge helps you understand
              the language, documents, qualifications, and professional
              requirements that may need attention before you move
              forward.
            </p>

            <div className={styles.visual}>
              <Image
                src="/images/education-preparation.jpg"
                alt="Student preparing documents and academic materials for an international education pathway"
                fill
                sizes="(max-width: 900px) 100vw, 38vw"
                className={styles.image}
              />

              <div className={styles.imageOverlay}></div>

              <div className={styles.imageCaption}>
                <span className={styles.captionLabel}>
                  Preparation Matters
                </span>

                <h3 className={styles.captionTitle}>
                  A stronger pathway starts with a clearer file.
                </h3>
              </div>
            </div>
          </div>

          {/* Preparation Workspace */}

          <div className={styles.workspace}>
            <div className={styles.workspaceTop}>
              <div>
                <span className={styles.workspaceLabel}>
                  Personal Preparation File
                </span>

                <h3 className={styles.workspaceTitle}>
                  Education Readiness
                </h3>
              </div>

              <span className={styles.workspaceCode}>
                WB / EDU / READY
              </span>
            </div>

            <div className={styles.progressHeader}>
              <span>Preparation Areas</span>
              <span>5 Core Areas</span>
            </div>

            <div className={styles.progressTrack}>
              <div className={styles.progressFill}></div>
            </div>

            <div className={styles.areas}>
              {preparationAreas.map((area) => (
                <article
                  key={area.number}
                  className={styles.area}
                >
                  <div className={styles.areaNumber}>
                    {area.number}
                  </div>

                  <div className={styles.areaContent}>
                    <span className={styles.areaLabel}>
                      {area.label}
                    </span>

                    <h3 className={styles.areaTitle}>
                      {area.title}
                    </h3>

                    <p className={styles.areaText}>
                      {area.text}
                    </p>
                  </div>

                  <span className={styles.areaStatus}>
                    {area.status}
                  </span>
                </article>
              ))}
            </div>

            <div className={styles.workspaceBottom}>
              <div>
                <span className={styles.bottomLabel}>
                  Your Requirements May Differ
                </span>

                <p className={styles.bottomText}>
                  The exact preparation depends on your destination,
                  institution, field, qualification level, and personal
                  circumstances.
                </p>
              </div>

              <Link
                href="/contact"
                className={styles.button}
              >
                Review Your Preparation
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}