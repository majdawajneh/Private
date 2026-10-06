import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./GermanyHero.module.css";

const routes = [
  {
    number: "01",
    title: "Individuals",
    text: "Study, training, qualification and professional pathways.",
    href: "#germany-individuals",
  },
  {
    number: "02",
    title: "Healthcare",
    text: "Language, recognition and professional readiness.",
    href: "/medical",
  },
  {
    number: "03",
    title: "Business",
    text: "Market entry, partnerships and expansion into Germany.",
    href: "#germany-business-entry",
  },
  {
    number: "04",
    title: "Education",
    text: "Academic, training and institutional cooperation.",
    href: "#germany-education-entry",
  },
];

export default function GermanyHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.photo}>
        <Image
          src="/images/germany-hero.jpg"
          alt="Berlin cityscape representing Western Bridge Germany pathways"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />

        <div className={styles.overlay}></div>
      </div>

      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.flag} aria-hidden="true">
                <i></i>
                <i></i>
                <i></i>
              </span>

              Western Bridge — Germany Desk
            </div>

            <h1 className={styles.title}>
              Germany Is Not
              <br />
              One Path.
              <span> It&apos;s a System.</span>
            </h1>

            <p className={styles.description}>
              Western Bridge helps individuals, healthcare professionals,
              businesses, universities, and training institutions understand
              how to approach Germany with better preparation, clearer
              requirements, and the right institutional direction.
            </p>

            <div className={styles.actions}>
              <Link
                href="#germany-routes"
                className={styles.primaryButton}
              >
                Find Your Germany Route
                <span aria-hidden="true">↓</span>
              </Link>

              <Link
                href="/contact"
                className={styles.secondaryButton}
              >
                Talk to Germany Desk
              </Link>
            </div>

            <div className={styles.principle}>
              <span className={styles.principleLine}></span>

              <p>
                We focus on preparation and connection — not promises of
                employment, visas, admission, recognition, or licensing.
              </p>
            </div>
          </div>

          <div
            id="germany-routes"
            className={styles.routePanel}
          >
            <div className={styles.panelHeader}>
              <div>
                <span className={styles.panelLabel}>
                  Start Here
                </span>

                <h2 className={styles.panelTitle}>
                  What Brings You to Germany?
                </h2>
              </div>

              <span className={styles.panelCode}>
                DE / WB
              </span>
            </div>

            <div className={styles.routes}>
              {routes.map((route) => (
                <Link
                  key={route.number}
                  href={route.href}
                  className={styles.route}
                >
                  <span className={styles.routeNumber}>
                    {route.number}
                  </span>

                  <div className={styles.routeContent}>
                    <h3>{route.title}</h3>
                    <p>{route.text}</p>
                  </div>

                  <span
                    className={styles.arrow}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>

            <div className={styles.panelBottom}>
              <span className={styles.panelBottomLabel}>
                Germany Focus
              </span>

              <p>
                Qualification • Healthcare • Education • Business • Training
                • Institutional Connections
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div
        className={styles.countryMark}
        aria-hidden="true"
      >
        DE
      </div>
    </section>
  );
}