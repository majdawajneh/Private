import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./GermanyFinalSection.module.css";

const directions = [
  {
    number: "01",
    title: "Individual",
    text: "Study, training, qualification or professional pathway.",
    href: "/individuals",
  },
  {
    number: "02",
    title: "Healthcare",
    text: "Medical German, recognition, licensing and readiness.",
    href: "/medical",
  },
  {
    number: "03",
    title: "Business",
    text: "Market entry, partnerships and Germany expansion.",
    href: "/businesses",
  },
  {
    number: "04",
    title: "Institution",
    text: "Academic, training and institutional cooperation.",
    href: "/education",
  },
];

export default function GermanyFinalSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.frame}>
          <Image
            src="/images/germany-final.jpg"
            alt="German city skyline representing international pathways through Western Bridge"
            fill
            sizes="100vw"
            className={styles.image}
          />

          <div className={styles.overlay}></div>

          <div className={styles.content}>
            <div className={styles.main}>
              <span className={styles.eyebrow}>
                Western Bridge Germany Desk
              </span>

              <h2 className={styles.title}>
                Your Germany Plan Should Start With
                <span> the Right Question.</span>
              </h2>

              <p className={styles.description}>
                Tell us who you are, what you want to achieve, and where you
                currently stand. From there, we can identify the preparation,
                institutions, requirements, and next steps that are actually
                relevant to your case.
              </p>

              <Link
                href="/contact"
                className={styles.primaryButton}
              >
                Discuss Your Germany Case
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className={styles.selector}>
              <div className={styles.selectorTop}>
                <span>What brings you to Germany?</span>
                <strong>Choose a direction</strong>
              </div>

              <div className={styles.routes}>
                {directions.map((direction) => (
                  <Link
                    key={direction.number}
                    href={direction.href}
                    className={styles.route}
                  >
                    <span className={styles.number}>
                      {direction.number}
                    </span>

                    <div>
                      <h3>{direction.title}</h3>
                      <p>{direction.text}</p>
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
            </div>
          </div>

          <div className={styles.footerLine}>
            <span>Germany</span>

            <span className={styles.dot}></span>

            <span>Europe</span>

            <span className={styles.dot}></span>

            <span>Western Bridge</span>
          </div>
        </div>

        <p className={styles.disclaimer}>
          Western Bridge provides consulting, preparation, training,
          networking and pathway support. Visa, employment, admission,
          recognition, licensing and formal partnership decisions remain with
          the relevant authorities, employers, institutions and organizations.
        </p>
      </Container>
    </section>
  );
}