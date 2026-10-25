import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import styles from "./AboutHero.module.css";

const principles = [
  {
    number: "01",
    title: "Understand First",
    text: "We begin with the real objective, context, requirements, and constraints.",
  },
  {
    number: "02",
    title: "Prepare Properly",
    text: "Language, documents, qualifications, market knowledge, and readiness come before action.",
  },
  {
    number: "03",
    title: "Connect With Purpose",
    text: "Institutions, markets, professionals, and organizations are approached when the connection makes sense.",
  },
];

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              About Western Bridge
            </div>

            <h1 className={styles.title}>
              Built to Make International
              <span> Moves More Structured.</span>
            </h1>

            <p className={styles.lead}>
              Western Bridge is an international consulting and development
              platform connecting people, businesses, healthcare
              professionals, educational institutions, and organizations with
              clearer pathways toward Germany and wider international markets.
            </p>

            <p className={styles.secondary}>
              Our role is not to sell shortcuts. It is to understand the
              objective, identify what is required, prepare the client
              properly, and support the connections and next steps that make
              sense.
            </p>

            <div className={styles.actions}>
              <Link
                href="#our-position"
                className={styles.primaryButton}
              >
                How We Work
                <span aria-hidden="true">↓</span>
              </Link>

              <Link
                href="/contact"
                className={styles.secondaryButton}
              >
                Contact Western Bridge
              </Link>
            </div>
          </div>

          <div className={styles.visual}>
            <Image
              src="/images/about-hero.jpg"
              alt="International professionals discussing cross-border cooperation"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.image}
            />

            <div className={styles.overlay}></div>

            <div className={styles.imageContent}>
              <span className={styles.imageLabel}>
                Western Bridge
              </span>

              <h2>
                Between preparation and opportunity, there has to be a clear
                route.
              </h2>
            </div>
          </div>
        </div>

        <div
          id="our-position"
          className={styles.position}
        >
          <div className={styles.positionIntro}>
            <span className={styles.positionLabel}>
              Our Position
            </span>

            <h2>
              Not a recruitment agency.
              <br />
              Not a travel office.
              <br />
              <strong>An international bridge.</strong>
            </h2>
          </div>

          <div className={styles.principles}>
            {principles.map((principle) => (
              <article
                key={principle.number}
                className={styles.principle}
              >
                <span className={styles.number}>
                  {principle.number}
                </span>

                <h3>{principle.title}</h3>

                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}