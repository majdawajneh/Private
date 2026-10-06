import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./MedicalReadinessSection.module.css";

const workstreams = [
  {
    number: "01",
    title: "Medical German",
    subtitle: "Language & Communication",
    description:
      "Prepare the German language and professional communication needed for healthcare settings, interviews, examinations, and everyday clinical interaction.",
    support: [
      "General German planning",
      "Medical terminology",
      "Patient communication",
      "Professional language preparation",
    ],
    authority: "Language and examination providers",
  },
  {
    number: "02",
    title: "Recognition File",
    subtitle: "Documents & Qualification",
    description:
      "Build an organized recognition file around your academic qualification, professional history, required translations, and supporting documents.",
    support: [
      "Document checklist",
      "Translation preparation",
      "Qualification file review",
      "Recognition process guidance",
    ],
    authority: "Competent recognition authority",
  },
  {
    number: "03",
    title: "Licensing Readiness",
    subtitle: "Professional Authorization",
    description:
      "Understand what may remain after recognition, including profession-specific language requirements, examinations, adaptation measures, or licensing procedures.",
    support: [
      "Requirement mapping",
      "Exam preparation planning",
      "Professional readiness",
      "Next-step coordination",
    ],
    authority: "Relevant licensing authority",
  },
];

export default function MedicalReadinessSection() {
  return (
    <section
      id="medical-readiness"
      className={styles.section}
    >
      <Container>
        <div className={styles.top}>
          <div className={styles.heading}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Medical Readiness Desk
            </div>

            <h2 className={styles.title}>
              Language. Recognition.
              <br />
              <span className={styles.goldText}>Licensing.</span>
            </h2>
          </div>

          <p className={styles.intro}>
            These three areas often determine whether a healthcare
            professional is genuinely ready to move forward. Western Bridge
            helps organize the preparation around them without confusing
            advisory support with decisions made by German authorities.
          </p>
        </div>

        <div className={styles.workspace}>
          <div className={styles.visual}>
            <Image
              src="/images/medical-preparation.jpg"
              alt="Healthcare professional preparing language and qualification documents"
              fill
              sizes="(max-width: 900px) 100vw, 36vw"
              className={styles.image}
            />

            <div className={styles.imageOverlay}></div>

            <div className={styles.visualContent}>
              <span className={styles.visualLabel}>
                Before the Application
              </span>

              <h3 className={styles.visualTitle}>
                Build the file before chasing the outcome.
              </h3>

              <p className={styles.visualText}>
                Missing language preparation, incomplete documentation, or
                misunderstanding the recognition route can delay the entire
                process.
              </p>
            </div>
          </div>

          <div className={styles.workstreams}>
            {workstreams.map((item) => (
              <article
                key={item.number}
                className={styles.workstream}
              >
                <div className={styles.workstreamHead}>
                  <span className={styles.number}>
                    {item.number}
                  </span>

                  <div>
                    <span className={styles.subtitle}>
                      {item.subtitle}
                    </span>

                    <h3 className={styles.workstreamTitle}>
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className={styles.description}>
                  {item.description}
                </p>

                <div className={styles.supportBlock}>
                  <span className={styles.supportLabel}>
                    Western Bridge can support
                  </span>

                  <div className={styles.supportList}>
                    {item.support.map((point) => (
                      <span
                        key={point}
                        className={styles.supportItem}
                      >
                        <span
                          className={styles.supportMark}
                          aria-hidden="true"
                        ></span>

                        {point}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.authority}>
                  <span className={styles.authorityLabel}>
                    Final decision / formal process
                  </span>

                  <strong>
                    {item.authority}
                  </strong>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.finalBlock}>
          <div className={styles.finalIntro}>
            <span className={styles.finalLabel}>
              Medical Case Review
            </span>

            <h3 className={styles.finalTitle}>
              Start with your profession and current situation.
            </h3>

            <p className={styles.finalText}>
              Tell us your healthcare profession, country of qualification,
              experience, German level, and current documentation. From there,
              the preparation route becomes much clearer.
            </p>
          </div>

          <div className={styles.caseFields}>
            <span>Profession</span>
            <span>Qualification</span>
            <span>Experience</span>
            <span>German Level</span>
            <span>Documents</span>
            <span>Target Route</span>
          </div>

          <Link
            href="/contact"
            className={styles.cta}
          >
            Discuss Your Medical Path
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <p className={styles.legal}>
          Western Bridge provides consulting, preparation, training,
          documentation support, and pathway guidance. Qualification
          recognition, professional licensing, examinations, visas, and
          employment decisions remain with the responsible authorities,
          employers, and organizations.
        </p>
      </Container>
    </section>
  );
}