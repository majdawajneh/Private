import Link from "next/link";

import Container from "../ui/Container";
import styles from "./GermanyRouteFinderSection.module.css";

const routes = [
  {
    number: "01",
    category: "Education",
    title: "University Study",
    audience: "Students & Graduates",
    description:
      "For people considering academic study in Germany and needing to understand preparation, language, documents, and institutional requirements.",
    preparation: [
      "Study direction",
      "Language readiness",
      "Academic documents",
      "Application preparation",
    ],
    dependency: "University & program requirements",
    href: "/education",
  },
  {
    number: "02",
    category: "Training",
    title: "Vocational & Professional Training",
    audience: "School Graduates & Career Starters",
    description:
      "For people exploring structured vocational or professional training routes and the preparation needed before approaching suitable programs.",
    preparation: [
      "Training field",
      "German language",
      "Qualification review",
      "Application readiness",
    ],
    dependency: "Training provider & program requirements",
    href: "/contact",
  },
  {
    number: "03",
    category: "Professional",
    title: "Skilled Professional Pathway",
    audience: "Qualified Professionals",
    description:
      "For professionals who already hold qualifications and experience and want to understand how those credentials may fit the German market.",
    preparation: [
      "Qualification profile",
      "Experience",
      "Recognition where applicable",
      "Professional readiness",
    ],
    dependency: "Role, qualification & applicable rules",
    href: "/individuals",
  },
  {
    number: "04",
    category: "Healthcare",
    title: "Medical & Healthcare",
    audience: "Nurses, Doctors & Healthcare Professionals",
    description:
      "A regulated pathway where language, professional recognition, licensing requirements, and documentation can play a central role.",
    preparation: [
      "German language",
      "Recognition file",
      "Licensing readiness",
      "Professional communication",
    ],
    dependency: "Profession & competent authority",
    href: "/medical",
    featured: true,
  },
  {
    number: "05",
    category: "Business",
    title: "Germany Market Entry",
    audience: "Companies & Entrepreneurs",
    description:
      "For businesses evaluating Germany as a market for expansion, partnerships, institutional access, or commercial development.",
    preparation: [
      "Market analysis",
      "Entry strategy",
      "Business readiness",
      "Partner mapping",
    ],
    dependency: "Business model & target market",
    href: "/businesses",
    anchor: "germany-business",
  },
  {
    number: "06",
    category: "Institutional",
    title: "Education & Institutional Cooperation",
    audience: "Universities & Training Providers",
    description:
      "For educational organizations exploring academic connections, training cooperation, institutional networks, and Germany-facing initiatives.",
    preparation: [
      "Cooperation objective",
      "Institution profile",
      "Target organizations",
      "Partnership concept",
    ],
    dependency: "Institutional fit & mutual interest",
    href: "/education",
    anchor: "germany-education",
  },
];

export default function GermanyRouteFinderSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Germany Route Finder
            </div>

            <h2 className={styles.title}>
              Start With the Route.
              <br />
              <span className={styles.goldText}>
                Then Build the Preparation.
              </span>
            </h2>
          </div>

          <div className={styles.headerCopy}>
            <p>
              Germany has different systems for education, regulated
              professions, skilled professionals, businesses, and
              institutions. The first useful decision is identifying which
              system actually applies to your objective.
            </p>
          </div>
        </div>

        <div className={styles.directory}>
          <div className={styles.directoryHeader}>
            <span>Route</span>
            <span>Who It Is For</span>
            <span>Preparation</span>
            <span>Main Dependency</span>
          </div>

          {routes.map((route) => (
            <article
              key={route.number}
              id={route.anchor}
              className={`${styles.route} ${
                route.featured ? styles.featured : ""
              }`}
            >
              <div className={styles.routeIdentity}>
                <span className={styles.number}>
                  {route.number}
                </span>

                <span className={styles.category}>
                  {route.category}
                </span>

                <h3 className={styles.routeTitle}>
                  {route.title}
                </h3>
              </div>

              <div className={styles.audience}>
                <strong>{route.audience}</strong>

                <p>{route.description}</p>
              </div>

              <div className={styles.preparation}>
                {route.preparation.map((item) => (
                  <div
                    key={item}
                    className={styles.preparationItem}
                  >
                    <span
                      className={styles.dot}
                      aria-hidden="true"
                    ></span>

                    {item}
                  </div>
                ))}
              </div>

              <div className={styles.dependency}>
                <span className={styles.dependencyLabel}>
                  Depends on
                </span>

                <p>{route.dependency}</p>

                <Link
                  href={route.href}
                  className={styles.routeLink}
                >
                  View Route
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div
          id="germany-individuals"
          className={styles.individualNote}
        >
          <div className={styles.noteNumber}>
            DE
          </div>

          <div>
            <span className={styles.noteLabel}>
              For Individuals
            </span>

            <h3 className={styles.noteTitle}>
              Don&apos;t begin with “How do I move to Germany?”
            </h3>

            <p className={styles.noteText}>
              Begin with your actual objective: study, vocational training,
              professional work, healthcare, qualification recognition, or
              another defined route. That determines what preparation makes
              sense.
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.noteButton}
          >
            Identify My Route
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <p className={styles.legal}>
          Requirements can vary by profession, qualification, institution,
          federal state, responsible authority, and individual circumstances.
          Western Bridge provides preparation and advisory support; formal
          decisions remain with the relevant German authorities, institutions,
          employers, and organizations.
        </p>
      </Container>
    </section>
  );
}