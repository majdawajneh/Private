import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./GermanyInPracticeSection.module.css";

const areas = [
  {
    number: "01",
    label: "Living & Environment",
    title: "Cities, Regions & Everyday Germany",
    text: "Germany is not one uniform environment. Your destination can affect institutions, professional networks, cost of living, mobility, and the authorities you interact with.",
    image: "/images/germany-city.jpg",
    alt: "Modern German city and urban environment",
    className: "city",
  },
  {
    number: "02",
    label: "Education",
    title: "Universities, Training & Qualification",
    text: "Academic and professional education can involve universities, vocational training providers, language preparation, and qualification-specific requirements.",
    image: "/images/germany-university.jpg",
    alt: "University campus and students in Germany",
    className: "university",
  },
  {
    number: "03",
    label: "Healthcare",
    title: "A Regulated Professional Environment",
    text: "Healthcare professionals may need to address German language, recognition, licensing, documentation, and profession-specific requirements before practicing.",
    image: "/images/germany-healthcare.jpg",
    alt: "Healthcare professionals in a modern German medical environment",
    className: "healthcare",
  },
  {
    number: "04",
    label: "Business",
    title: "Market Access & Institutional Relationships",
    text: "Companies entering Germany need more than a translated website. Market position, local relationships, regulations, partners, and commercial readiness all matter.",
    image: "/images/germany-business.jpg",
    alt: "Professional business environment in Germany",
    className: "business",
  },
];

export default function GermanyInPracticeSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Germany in Practice
            </div>

            <h2 className={styles.title}>
              Understand the Country
              <br />
              <span>Behind the Opportunity.</span>
            </h2>
          </div>

          <div className={styles.intro}>
            <p>
              Moving toward Germany means entering a real system of
              institutions, professions, education providers, employers,
              authorities, and regional structures. Understanding that
              environment is part of being properly prepared.
            </p>

            <Link href="/contact" className={styles.introLink}>
              Talk to Germany Desk
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className={styles.gallery}>
          {areas.map((area) => (
            <article
              key={area.number}
              className={`${styles.photoBlock} ${
                styles[area.className]
              }`}
            >
              <Image
                src={area.image}
                alt={area.alt}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
                className={styles.image}
              />

              <div className={styles.overlay}></div>

              <span className={styles.number}>
                {area.number}
              </span>

              <div className={styles.photoContent}>
                <span className={styles.label}>
                  {area.label}
                </span>

                <h3>{area.title}</h3>

                <p>{area.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.context}>
          <div className={styles.contextTitle}>
            <span>Germany is federal.</span>

            <h3>
              Location can change the process.
            </h3>
          </div>

          <div className={styles.contextText}>
            <p>
              Some procedures, responsible authorities, recognition routes,
              institutions, and professional requirements can differ according
              to the profession and the German federal state involved.
            </p>
          </div>

          <div className={styles.contextTags}>
            <span>16 Federal States</span>
            <span>Different Authorities</span>
            <span>Regional Institutions</span>
          </div>
        </div>
      </Container>
    </section>
  );
}