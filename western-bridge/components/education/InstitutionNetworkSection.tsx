import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./InstitutionNetworkSection.module.css";

const cooperationAreas = [
  {
    number: "01",
    label: "Academic Cooperation",
    title: "University Connections",
    text: "Explore potential connections between universities, colleges, educational organizations, and relevant international academic ecosystems.",
    type: "Universities",
  },
  {
    number: "02",
    label: "Training Cooperation",
    title: "Training & Education Providers",
    text: "Support the exploration of cooperation between training centers, vocational providers, professional academies, and educational institutions.",
    type: "Training",
  },
  {
    number: "03",
    label: "Program Development",
    title: "Academic & Professional Programs",
    text: "Explore opportunities for collaborative learning initiatives, professional programs, training projects, and institutional development.",
    type: "Programs",
  },
  {
    number: "04",
    label: "International Networking",
    title: "Institutional Connections",
    text: "Identify relevant associations, educational networks, professional bodies, and institutions that may support international cooperation.",
    type: "Networking",
  },
  {
    number: "05",
    label: "Sector Cooperation",
    title: "Professional & Industry Bodies",
    text: "Explore relationships between education providers and professional or industry organizations where academic and workforce development intersect.",
    type: "Professional",
  },
];

export default function InstitutionNetworkSection() {
  return (
    <section
      id="institution-network"
      className={styles.section}
    >
      <span
        className={styles.backgroundWord}
        aria-hidden="true"
      >
        PARTNERS
      </span>

      <Container>
        {/* Header */}

        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Universities & Institutions
            </div>

            <h2 className={styles.title}>
              Build Connections Across the{" "}
              <span className={styles.goldText}>
                Education Ecosystem
              </span>
            </h2>
          </div>

          <p className={styles.headerText}>
            Western Bridge supports educational institutions that want
            to explore international cooperation, academic networking,
            training partnerships, professional connections, and new
            institutional development opportunities.
          </p>
        </div>

        {/* Institutional Image */}

        <div className={styles.visual}>
          <Image
            src="/images/education-institution-network.jpg"
            alt="Representatives of universities and educational institutions discussing international academic cooperation"
            fill
            sizes="100vw"
            className={styles.image}
          />

          <div className={styles.overlay}></div>

          <div className={styles.visualContent}>
            <span className={styles.visualLabel}>
              International Academic Cooperation
            </span>

            <h3 className={styles.visualTitle}>
              Education Grows Through Connection
            </h3>

            <p className={styles.visualText}>
              Universities and educational organizations often need
              access to new networks, expertise, institutions, markets,
              and cooperation models. Western Bridge helps explore those
              connections in a structured way.
            </p>
          </div>

          <div className={styles.academicTag}>
            <div className={styles.academicMark}>
              WB
            </div>

            <div>
              <span className={styles.academicLabel}>
                Education Desk
              </span>

              <div className={styles.academicTitle}>
                Institutional Cooperation
              </div>
            </div>
          </div>
        </div>

        {/* Cooperation Framework */}

        <div className={styles.framework}>
          <div className={styles.index}>
            <span className={styles.indexLabel}>
              Cooperation Framework
            </span>

            <h3 className={styles.indexTitle}>
              Where Institutional Connections Can Begin
            </h3>

            <p className={styles.indexText}>
              The structure of every cooperation project is different.
              These areas represent potential starting points based on
              the objectives of the institutions involved.
            </p>
          </div>

          <div className={styles.rows}>
            {cooperationAreas.map((area) => (
              <article
                key={area.number}
                className={styles.row}
              >
                <span className={styles.rowNumber}>
                  {area.number}
                </span>

                <div>
                  <span className={styles.rowLabel}>
                    {area.label}
                  </span>

                  <h3 className={styles.rowTitle}>
                    {area.title}
                  </h3>

                  <p className={styles.rowText}>
                    {area.text}
                  </p>
                </div>

                <span className={styles.type}>
                  {area.type}
                </span>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}

        <div className={styles.cta}>
          <div>
            <span className={styles.ctaLabel}>
              Institutional Cooperation
            </span>

            <h3 className={styles.ctaTitle}>
              Looking for an International Education Connection?
            </h3>

            <p className={styles.ctaText}>
              Tell Western Bridge about your institution, the type of
              cooperation you are exploring, the target market, and the
              organizations you would like to connect with.
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.ctaButton}
          >
            Discuss a Partnership
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
