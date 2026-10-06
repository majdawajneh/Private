import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./ServiceSystemSection.module.css";

const divisions = [
  {
    id: "individual-services",
    number: "01",
    label: "Individuals",
    title: "International Pathways & Professional Preparation",
    description:
      "For individuals who need a structured route toward education, training, qualification, professional development, or an international opportunity.",
    services: [
      "Pathway assessment",
      "Education & training guidance",
      "Language preparation planning",
      "Qualification & document readiness",
      "Professional profile preparation",
      "Germany-focused guidance",
    ],
    href: "/individuals",
  },
  {
    id: "medical-services",
    number: "02",
    label: "Healthcare",
    title: "Medical Qualification & Career Readiness",
    description:
      "For nurses, doctors, pharmacists, and healthcare professionals navigating language, recognition, licensing, documents, and professional preparation.",
    services: [
      "Medical German preparation",
      "Recognition file guidance",
      "Licensing readiness",
      "Professional document preparation",
      "Healthcare pathway assessment",
      "Professional communication preparation",
    ],
    href: "/medical",
  },
  {
    id: "business-services",
    number: "03",
    label: "Business",
    title: "Market Entry & International Growth",
    description:
      "For businesses evaluating new markets, partnerships, international expansion, commercial opportunities, and organizational development.",
    services: [
      "Market research",
      "Feasibility & business planning",
      "Market-entry strategy",
      "Partner mapping",
      "Business development support",
      "Digital & operational solutions",
    ],
    href: "/businesses",
  },
  {
    id: "education-services",
    number: "04",
    label: "Education & Institutions",
    title: "Academic & Institutional Cooperation",
    description:
      "For universities, training providers, educational organizations, and institutions seeking international connections and cooperation.",
    services: [
      "Institutional mapping",
      "University connections",
      "Training cooperation",
      "Program development",
      "Academic networking",
      "Professional & sector connections",
    ],
    href: "/education",
  },
];

const supportingCapabilities = [
  "Training",
  "Translation & Documentation",
  "Market Research",
  "Digital Platforms",
  "HR Solutions",
  "Digital Marketing",
  "Events & Conferences",
  "International Networking",
];

export default function ServiceSystemSection() {
  return (
    <section
      id="service-system"
      className={styles.section}
    >
      <Container>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              How Our Services Are Structured
            </div>

            <h2 className={styles.title}>
              One Company.
              <br />
              <span>Four Service Divisions.</span>
            </h2>
          </div>

          <p className={styles.intro}>
            Western Bridge combines different capabilities under one structure.
            The service starts with the client&apos;s objective, then the
            relevant advisory, preparation, training, research, technology, or
            networking support is built around it.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Left Visual */}

          <aside className={styles.visualColumn}>
            <div className={styles.visual}>
              <Image
                src="/images/services-system.jpg"
                alt="International consulting team reviewing strategy and client requirements"
                fill
                sizes="(max-width: 950px) 100vw, 38vw"
                className={styles.image}
              />

              <div className={styles.overlay}></div>

              <div className={styles.visualContent}>
                <span className={styles.visualLabel}>
                  Western Bridge Service Model
                </span>

                <h3>
                  Start with the requirement. Build the right combination of
                  services around it.
                </h3>
              </div>
            </div>

            <div className={styles.scopeNote}>
              <span className={styles.scopeNumber}>
                360°
              </span>

              <div>
                <strong>
                  Integrated Support
                </strong>

                <p>
                  Advisory, preparation, training, research, technology and
                  connections can work together when the project requires it.
                </p>
              </div>
            </div>
          </aside>

          {/* Divisions */}

          <div className={styles.divisions}>
            {divisions.map((division) => (
              <article
                key={division.number}
                id={division.id}
                className={styles.division}
              >
                <div className={styles.divisionHeading}>
                  <span className={styles.number}>
                    {division.number}
                  </span>

                  <div>
                    <span className={styles.label}>
                      {division.label}
                    </span>

                    <h3 className={styles.divisionTitle}>
                      {division.title}
                    </h3>
                  </div>
                </div>

                <p className={styles.description}>
                  {division.description}
                </p>

                <div className={styles.serviceList}>
                  {division.services.map((service) => (
                    <div
                      key={service}
                      className={styles.serviceItem}
                    >
                      <span
                        className={styles.serviceMark}
                        aria-hidden="true"
                      ></span>

                      {service}
                    </div>
                  ))}
                </div>

                <Link
                  href={division.href}
                  className={styles.link}
                >
                  View this division
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Supporting Capabilities */}

        <div className={styles.support}>
          <div className={styles.supportIntro}>
            <span className={styles.supportLabel}>
              Supporting Capabilities
            </span>

            <h3>
              Services that can support more than one division.
            </h3>
          </div>

          <div className={styles.capabilities}>
            {supportingCapabilities.map((capability) => (
              <span
                key={capability}
                className={styles.capability}
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}