import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./GermanySystemSection.module.css";

const systemPoints = [
  {
    number: "01",
    title: "Your Objective",
    text: "Study, training, healthcare, professional work, business, and institutional cooperation do not enter Germany through the same system.",
  },
  {
    number: "02",
    title: "Your Qualification",
    text: "Your degree, vocational qualification, professional license, and previous experience influence what may need to be reviewed or prepared.",
  },
  {
    number: "03",
    title: "The Responsible Authority",
    text: "Recognition, licensing, residence, education, and professional matters can involve different authorities and institutions.",
  },
  {
    number: "04",
    title: "Your Federal State",
    text: "The competent authority and some procedures may depend on the profession, institution, and German federal state involved.",
  },
  {
    number: "05",
    title: "Language",
    text: "The required language level depends on the pathway. Healthcare and regulated professions can also involve profession-specific language requirements.",
  },
  {
    number: "06",
    title: "The File",
    text: "Certificates, transcripts, translations, professional records, identification documents, and supporting evidence need to be prepared around the actual route.",
  },
];

export default function GermanySystemSection() {
  return (
    <section
      id="germany-system"
      className={styles.section}
    >
      <Container>
        <div className={styles.layout}>
          <div className={styles.visualColumn}>
            <div className={styles.heading}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine}></span>
                How Germany Works
              </div>

              <h2 className={styles.title}>
                The Right Route Depends on{" "}
                <span>Who Is Responsible.</span>
              </h2>
            </div>

            <div className={styles.visual}>
              <Image
                src="/images/germany-system.jpg"
                alt="Professional preparing documents within a German institutional environment"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                className={styles.image}
              />

              <div className={styles.overlay}></div>

              <div className={styles.imageContent}>
                <span className={styles.imageLabel}>
                  German System
                </span>

                <h3>
                  One country. Multiple authorities, institutions and routes.
                </h3>

                <p>
                  Good preparation starts by identifying the system that
                  actually applies to your case.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.system}>
            <div className={styles.systemIntro}>
              <span className={styles.systemCode}>
                DE / SYSTEM MAP
              </span>

              <p>
                Before preparing applications or contacting organizations,
                clarify these six points. They determine which documents,
                institutions, and next steps are relevant.
              </p>
            </div>

            <div className={styles.points}>
              {systemPoints.map((point) => (
                <article
                  key={point.number}
                  className={styles.point}
                >
                  <div className={styles.pointNumber}>
                    {point.number}
                  </div>

                  <div className={styles.pointContent}>
                    <h3>{point.title}</h3>

                    <p>{point.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.rule}>
              <div className={styles.ruleMark}>
                DE
              </div>

              <div>
                <span className={styles.ruleLabel}>
                  Western Bridge Principle
                </span>

                <p>
                  We do not start with paperwork. We start by identifying
                  the route, responsible institution, and requirements —
                  then build the preparation around them.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className={styles.button}
            >
              Review My Germany Case
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}