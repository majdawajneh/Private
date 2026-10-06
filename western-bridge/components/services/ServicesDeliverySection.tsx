import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./ServicesDeliverySection.module.css";

const steps = [
  {
    number: "01",
    title: "Define the Requirement",
    text: "We start by understanding the real objective, current situation, target market, stakeholders, and constraints.",
  },
  {
    number: "02",
    title: "Map the Route",
    text: "We identify which service areas, institutions, markets, documents, capabilities, or preparation steps are relevant.",
  },
  {
    number: "03",
    title: "Build the Scope",
    text: "The project scope can combine consulting, research, training, technology, documentation, networking, or institutional support.",
  },
  {
    number: "04",
    title: "Execute & Coordinate",
    text: "We coordinate the agreed work, preparation, communication, research, and deliverables according to the project requirements.",
  },
  {
    number: "05",
    title: "Review the Next Step",
    text: "At each stage, we review what has been completed and what the client should do next with the relevant institution or market.",
  },
];

export default function ServicesDeliverySection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              How We Deliver
            </div>

            <h2 className={styles.title}>
              From Requirement
              <br />
              <span>to Execution.</span>
            </h2>

            <p className={styles.intro}>
              Western Bridge does not begin by forcing every client into the
              same package. The work starts with the requirement, then the
              service scope is built around it.
            </p>

            <div className={styles.steps}>
              {steps.map((step) => (
                <article
                  key={step.number}
                  className={styles.step}
                >
                  <span className={styles.number}>
                    {step.number}
                  </span>

                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.visual}>
            <Image
              src="/images/services-delivery.jpg"
              alt="Professional team planning and coordinating an international consulting project"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className={styles.image}
            />

            <div className={styles.overlay}></div>

            <div className={styles.imageContent}>
              <span>Project Delivery</span>

              <h3>
                One requirement can involve several disciplines.
              </h3>

              <p>
                The value is in connecting the right work together instead of
                treating every problem as a separate service.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.finalCta}>
          <div>
            <span className={styles.finalLabel}>
              Start With the Requirement
            </span>

            <h3>
              Tell us what you are trying to achieve.
            </h3>

            <p>
              Individual pathway, healthcare preparation, Germany market entry,
              institutional cooperation, training, research, technology, or a
              more complex combination — the first step is understanding the
              need properly.
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.button}
          >
            Start a Conversation
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <p className={styles.disclaimer}>
          Western Bridge provides consulting, preparation, training,
          research, technology, networking, and coordination support.
          Decisions made by authorities, employers, universities, licensing
          bodies, institutions, and other third parties remain outside Western
          Bridge&apos;s control.
        </p>
      </Container>
    </section>
  );
}