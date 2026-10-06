import Link from "next/link";

import Container from "../ui/Container";
import styles from "./ProfessionRoutesSection.module.css";

const professions = [
  {
    code: "01",
    profession: "Nursing",
    audience: "Nurses",
    summary:
      "The nursing route usually centers on qualification recognition, German language readiness, professional documentation, and the requirements set by the responsible authority.",
    focus: [
      "Qualification recognition",
      "German language preparation",
      "Professional documents",
      "Possible compensatory measures",
    ],
    note:
      "The exact recognition route can differ depending on your qualification and the competent authority handling your case.",
  },
  {
    code: "02",
    profession: "Medicine",
    audience: "Doctors",
    summary:
      "Doctors normally face a licensing-focused route that can involve qualification assessment, German language requirements, professional communication, and additional examinations depending on the case.",
    focus: [
      "Medical qualification review",
      "Professional licensing",
      "Medical German",
      "Possible professional examinations",
    ],
    note:
      "Licensing requirements and assessment outcomes depend on the applicant’s qualification and the responsible German authority.",
  },
  {
    code: "03",
    profession: "Pharmacy",
    audience: "Pharmacists",
    summary:
      "For pharmacists, the pathway can combine recognition of the foreign qualification, professional language preparation, documentation, and licensing requirements.",
    focus: [
      "Qualification assessment",
      "Professional language",
      "Licensing requirements",
      "Recognition documentation",
    ],
    note:
      "Additional requirements may apply depending on the recognition decision and the authority responsible for the application.",
  },
  {
    code: "04",
    profession: "Allied Health",
    audience: "Healthcare Professionals",
    summary:
      "Allied health professions do not all follow the same process. The first step is identifying whether the specific occupation is regulated and which authority or recognition route applies.",
    focus: [
      "Occupation identification",
      "Recognition route",
      "Language requirements",
      "Professional preparation",
    ],
    note:
      "The correct pathway depends heavily on the exact profession, qualification, and intended scope of work.",
  },
];

export default function ProfessionRoutesSection() {
  return (
    <section
      id="medical-professions"
      className={styles.section}
    >
      <Container>
        <div className={styles.header}>
          <div className={styles.headerMain}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Healthcare Professions
            </div>

            <h2 className={styles.title}>
              One Healthcare Sector.
              <br />
              <span className={styles.goldText}>
                Different Professional Routes.
              </span>
            </h2>
          </div>

          <div className={styles.headerCopy}>
            <p>
              A nurse, doctor, pharmacist, and allied health professional
              should not be treated as if they have the same process.
              Western Bridge starts by identifying the profession first,
              then the preparation route around it.
            </p>
          </div>
        </div>

        <div className={styles.directory}>
          <div className={styles.directoryHeader}>
            <span>Profession</span>
            <span>Route Overview</span>
            <span>Preparation Focus</span>
          </div>

          {professions.map((item) => (
            <article
              key={item.code}
              className={styles.route}
            >
              <div className={styles.profession}>
                <span className={styles.code}>
                  {item.code}
                </span>

                <span className={styles.audience}>
                  {item.audience}
                </span>

                <h3 className={styles.professionName}>
                  {item.profession}
                </h3>
              </div>

              <div className={styles.overview}>
                <p className={styles.summary}>
                  {item.summary}
                </p>

                <p className={styles.note}>
                  {item.note}
                </p>
              </div>

              <div className={styles.focus}>
                {item.focus.map((point) => (
                  <div
                    key={point}
                    className={styles.focusItem}
                  >
                    <span
                      className={styles.focusMark}
                      aria-hidden="true"
                    ></span>

                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.caseBlock}>
          <div className={styles.caseNumber}>
            WB
          </div>

          <div className={styles.caseContent}>
            <span className={styles.caseLabel}>
              Start With the Profession
            </span>

            <h3 className={styles.caseTitle}>
              Before choosing a language course or preparing documents,
              identify the correct professional route.
            </h3>

            <p className={styles.caseText}>
              The profession, country of qualification, experience,
              language level, and intended destination in Germany can all
              affect what should happen next.
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.caseButton}
          >
            Review My Profession
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <p className={styles.legal}>
          Recognition and licensing decisions are made by the competent
          authorities. Western Bridge supports preparation, guidance,
          training, documentation readiness, and pathway planning.
        </p>
      </Container>
    </section>
  );
}