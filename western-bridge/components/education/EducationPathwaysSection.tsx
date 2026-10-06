import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./EducationPathwaysSection.module.css";

const pathways = [
  {
    number: "01",
    label: "Academic Pathway",
    title: "University Study",
    text: "Explore undergraduate, postgraduate, and other academic study directions while understanding preparation, documentation, language, and institutional requirements.",
    href: "/contact",
  },
  {
    number: "02",
    label: "Practical Learning",
    title: "Vocational & Professional Training",
    text: "Explore practical training and skills-based education pathways that may support professional development and international career preparation.",
    href: "/services",
  },
  {
    number: "03",
    label: "Language Readiness",
    title: "Language Preparation",
    text: "Build the language foundation that may be required for academic study, vocational training, professional qualification, or everyday integration.",
    href: "/services",
  },
  {
    number: "04",
    label: "Career Development",
    title: "Professional Qualification",
    text: "Understand additional training, examinations, sector-specific preparation, and qualification development that may strengthen your professional pathway.",
    href: "/services",
  },
  {
    number: "05",
    label: "Academic Documents",
    title: "Recognition & Documentation",
    text: "Prepare for document translation, authentication, qualification recognition, and other administrative requirements that may apply to your intended pathway.",
    href: "/services",
  },
];

export default function EducationPathwaysSection() {
  return (
    <section
      id="student-pathways"
      className={styles.section}
    >
      <span
        className={styles.backgroundWord}
        aria-hidden="true"
      >
        LEARN
      </span>

      <Container>
        {/* Header */}

        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              International Education Pathways
            </div>

            <h2 className={styles.title}>
              More Than One Way to{" "}
              <span className={styles.goldText}>
                Learn Internationally
              </span>
            </h2>
          </div>

          <p className={styles.headerText}>
            International education can take many forms. Depending on
            your goals, background, language level, and profession, your
            pathway may involve university study, practical training,
            language preparation, professional qualification, or
            recognition of previous education.
          </p>
        </div>

        {/* Main Layout */}

        <div className={styles.layout}>
          {/* Image Side */}

          <div className={styles.visual}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/education-pathways.jpg"
                alt="Student exploring international education pathways at a European university campus"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                className={styles.image}
              />

              <div className={styles.imageOverlay}></div>

              <div className={styles.imageCaption}>
                <span className={styles.captionLabel}>
                  Your Education Direction
                </span>

                <h3 className={styles.captionTitle}>
                  Build the preparation behind your next learning step.
                </h3>

                <p className={styles.captionText}>
                  Study, training, language, qualifications, and
                  documentation can all form part of an international
                  education pathway.
                </p>
              </div>
            </div>

            <div className={styles.germanyBadge}>
              <span className={styles.badgeLabel}>
                Key Focus
              </span>

              <div className={styles.badgeTitle}>
                Germany
              </div>

              <div
                className={styles.badgeLine}
                aria-hidden="true"
              ></div>
            </div>
          </div>

          {/* Pathways */}

          <div className={styles.pathways}>
            {pathways.map((pathway) => (
              <article
                key={pathway.number}
                className={styles.pathway}
              >
                <span className={styles.number}>
                  {pathway.number}
                </span>

                <div>
                  <span className={styles.pathwayLabel}>
                    {pathway.label}
                  </span>

                  <h3 className={styles.pathwayTitle}>
                    {pathway.title}
                  </h3>

                  <p className={styles.pathwayText}>
                    {pathway.text}
                  </p>
                </div>

                <Link
                  href={pathway.href}
                  className={styles.arrow}
                  aria-label={`Explore ${pathway.title}`}
                >
                  →
                </Link>
              </article>
            ))}

            {/* CTA */}

            <div className={styles.bottom}>
              <div className={styles.bottomContent}>
                <span className={styles.bottomLabel}>
                  Need Help Choosing?
                </span>

                <h3 className={styles.bottomTitle}>
                  Your Education Path Depends on Your Goal
                </h3>

                <p className={styles.bottomText}>
                  Western Bridge can help you understand which study,
                  training, language, qualification, and preparation
                  areas may be relevant to your situation.
                </p>
              </div>

              <Link
                href="/contact"
                className={styles.button}
              >
                Discuss Your Path
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}