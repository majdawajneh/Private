import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./GermanyBusinessInstitutionsSection.module.css";

const businessPoints = [
  "German market positioning",
  "Market and feasibility analysis",
  "Partner and network mapping",
  "Institutional introductions",
  "Business readiness",
];

const institutionPoints = [
  "University and institutional mapping",
  "Academic cooperation concepts",
  "Training partnerships",
  "International program development",
  "Professional and sector networks",
];

export default function GermanyBusinessInstitutionsSection() {
  return (
    <section
      id="germany-business-institutions"
      className={styles.section}
    >
      <Container>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Germany Beyond Individual Pathways
            </div>

            <h2 className={styles.title}>
              Germany for Business,
              <br />
              <span>Education & Institutions.</span>
            </h2>
          </div>

          <p className={styles.intro}>
            Western Bridge also works with organizations that want to
            understand Germany as a market, institutional environment,
            education ecosystem, and potential cooperation destination.
          </p>
        </div>

        {/* Business */}

        <article
          id="germany-business-entry"
          className={`${styles.story} ${styles.businessStory}`}
        >
          <div className={styles.storyImage}>
            <Image
              src="/images/germany-frankfurt-business.jpg"
              alt="Frankfurt business district representing market entry and business development in Germany"
              fill
              sizes="(max-width: 850px) 100vw, 52vw"
              className={styles.image}
            />

            <div className={styles.imageOverlay}></div>

            <div className={styles.imageLocation}>
              <span>Germany</span>
              <strong>Business & Market</strong>
            </div>
          </div>

          <div className={styles.storyContent}>
            <span className={styles.storyNumber}>
              01
            </span>

            <span className={styles.storyLabel}>
              Business Expansion
            </span>

            <h3 className={styles.storyTitle}>
              Enter Germany With a Market Strategy,
              Not Just an Address.
            </h3>

            <p className={styles.storyText}>
              Germany can offer access to major industries, institutions,
              commercial networks, and European markets. But successful
              expansion starts with understanding where the business fits,
              who the relevant stakeholders are, and what needs to be
              prepared before market entry.
            </p>

            <div className={styles.points}>
              {businessPoints.map((point) => (
                <div
                  key={point}
                  className={styles.point}
                >
                  <span
                    className={styles.pointLine}
                    aria-hidden="true"
                  ></span>

                  {point}
                </div>
              ))}
            </div>

            <Link
              href="/businesses"
              className={styles.textLink}
            >
              Germany Business Services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>

        {/* Education & Institutions */}

        <article
          id="germany-education-entry"
          className={`${styles.story} ${styles.educationStory}`}
        >
          <div className={styles.storyContent}>
            <span className={styles.storyNumber}>
              02
            </span>

            <span className={styles.storyLabel}>
              Education & Institutional Cooperation
            </span>

            <h3 className={styles.storyTitle}>
              Build Connections Between Institutions,
              Not Just Between People.
            </h3>

            <p className={styles.storyText}>
              Universities, training providers, academies, professional
              organizations, and other institutions may have opportunities
              to develop relationships with German counterparts around
              education, training, knowledge exchange, and professional
              development.
            </p>

            <div className={styles.points}>
              {institutionPoints.map((point) => (
                <div
                  key={point}
                  className={styles.point}
                >
                  <span
                    className={styles.pointLine}
                    aria-hidden="true"
                  ></span>

                  {point}
                </div>
              ))}
            </div>

            <Link
              href="/education"
              className={styles.textLink}
            >
              Education & Institution Services
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className={styles.storyImage}>
            <Image
              src="/images/germany-university-institution.jpg"
              alt="German university and institutional environment representing international academic cooperation"
              fill
              sizes="(max-width: 850px) 100vw, 52vw"
              className={styles.image}
            />

            <div className={styles.imageOverlay}></div>

            <div className={styles.imageLocation}>
              <span>Germany</span>
              <strong>Academic & Institutional</strong>
            </div>
          </div>
        </article>

        {/* Bottom statement */}

        <div className={styles.bottom}>
          <div className={styles.bottomLead}>
            <span className={styles.bottomLabel}>
              Western Bridge Germany Desk
            </span>

            <h3>
              The connection has to make sense on both sides.
            </h3>
          </div>

          <p>
            Western Bridge can support research, preparation, networking,
            introductions, and cooperation development. Commercial agreements,
            academic partnerships, institutional approvals, and final decisions
            remain with the organizations involved.
          </p>

          <Link
            href="/contact"
            className={styles.button}
          >
            Discuss a Germany Project
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}