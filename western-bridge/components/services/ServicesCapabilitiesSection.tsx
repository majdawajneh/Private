import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./ServicesCapabilitiesSection.module.css";

const capabilities = [
  {
    number: "01",
    title: "Consulting & Business Development",
    text: "Administrative, professional, operational, and growth-focused consulting for individuals, businesses, and institutions.",
  },
  {
    number: "02",
    title: "Feasibility & Market Studies",
    text: "Market research, feasibility analysis, business planning, opportunity assessment, and structured market-entry preparation.",
  },
  {
    number: "03",
    title: "Training & Qualification",
    text: "Language, professional, vocational, employability, institutional, and sector-specific preparation programs.",
  },
  {
    number: "04",
    title: "Documentation & Qualification Support",
    text: "Document preparation, translation coordination, authentication guidance, and academic or professional recognition readiness.",
  },
  {
    number: "05",
    title: "Digital Platforms & Technology",
    text: "Design and development of recruitment, training, education, HR, and business-support digital platforms and systems.",
  },
  {
    number: "06",
    title: "HR & Organizational Solutions",
    text: "Digital HR tools, workforce-related systems, organizational workflows, capability development, and operational support.",
  },
  {
    number: "07",
    title: "Marketing, Content & Events",
    text: "Digital communication, content development, campaigns, seminars, conferences, exhibitions, and professional events.",
  },
  {
    number: "08",
    title: "International Networking",
    text: "Research, introductions, institutional connections, commercial mediation, and cooperation development across markets.",
  },
];

export default function ServicesCapabilitiesSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div className={styles.heading}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Core Capabilities
            </div>

            <h2 className={styles.title}>
              What Western Bridge
              <br />
              <span>Can Actually Deliver.</span>
            </h2>
          </div>

          <p className={styles.intro}>
            These capabilities can work as standalone services or as part of a
            larger client project. The combination depends on the objective,
            sector, market, and level of preparation required.
          </p>
        </div>

        <div className={styles.visual}>
          <Image
            src="/images/services-capabilities.jpg"
            alt="Professional team working on strategy, business development and international projects"
            fill
            sizes="100vw"
            className={styles.image}
          />

          <div className={styles.overlay}></div>

          <div className={styles.visualContent}>
            <span>Western Bridge Capability Framework</span>

            <h3>
              Strategy, preparation, technology and connections under one
              structure.
            </h3>
          </div>
        </div>

        <div className={styles.ledger}>
          <div className={styles.ledgerHeader}>
            <span>Capability</span>
            <span>Scope</span>
          </div>

          {capabilities.map((capability) => (
            <article
              key={capability.number}
              className={styles.row}
            >
              <div className={styles.identity}>
                <span className={styles.number}>
                  {capability.number}
                </span>

                <h3>{capability.title}</h3>
              </div>

              <p>{capability.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.bottom}>
          <div>
            <span className={styles.bottomLabel}>
              Need More Than One Capability?
            </span>

            <h3>
              Build a combined service scope around your project.
            </h3>

            <p>
              A project can combine consulting, research, training, technology,
              networking, and institutional support instead of treating each
              requirement separately.
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.button}
          >
            Discuss a Service Scope
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}