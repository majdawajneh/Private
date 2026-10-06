import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./ServicesHero.module.css";

const serviceAreas = [
  {
    number: "01",
    title: "Individuals",
    text: "International education, training, qualification and professional preparation.",
    href: "#individual-services",
  },
  {
    number: "02",
    title: "Healthcare",
    text: "Language, recognition, licensing readiness and medical professional preparation.",
    href: "#medical-services",
  },
  {
    number: "03",
    title: "Businesses",
    text: "Market research, international growth, partnerships and business development.",
    href: "#business-services",
  },
  {
    number: "04",
    title: "Education & Institutions",
    text: "Academic cooperation, training partnerships and institutional connections.",
    href: "#education-services",
  },
];

export default function ServicesHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image
          src="/images/services-hero-international.jpg"
          alt="International business and professional environment"
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
        />

        <div className={styles.backgroundOverlay}></div>
      </div>

      <Container>
        <div className={styles.layout}>
          {/* Left Content */}

          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Western Bridge Services
            </div>

            <h1 className={styles.title}>
              From Preparation to
              <span> International Growth.</span>
            </h1>

            <p className={styles.description}>
              Consulting, training, qualification support, market development,
              technology and institutional connections — organized around what
              the client actually needs.
            </p>

            <div className={styles.actions}>
              <Link
                href="#service-system"
                className={styles.primaryButton}
              >
                View Our Services
                <span aria-hidden="true">↓</span>
              </Link>

              <Link
                href="/contact"
                className={styles.secondaryButton}
              >
                Talk to Western Bridge
              </Link>
            </div>

            <div className={styles.scope}>
              <div>
                <span>01</span>
                <strong>Advisory</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Preparation</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Training</strong>
              </div>

              <div>
                <span>04</span>
                <strong>Connections</strong>
              </div>
            </div>
          </div>

          {/* Right Side */}

          <div className={styles.right}>
            <div className={styles.consultingImage}>
              <Image
                src="/images/services-hero-consulting.jpg"
                alt="Professional consulting meeting focused on international strategy"
                fill
                sizes="(max-width: 900px) 100vw, 43vw"
                className={styles.image}
              />

              <div className={styles.imageOverlay}></div>

              <div className={styles.imageCaption}>
                <span>Western Bridge</span>

                <h2>
                  International consulting with a practical route forward.
                </h2>
              </div>
            </div>

            <div className={styles.directory}>
              <div className={styles.directoryHeader}>
                <div>
                  <span className={styles.directoryLabel}>
                    Service Areas
                  </span>

                  <h2>
                    How can we support you?
                  </h2>
                </div>

                <span className={styles.code}>
                  WB / 04
                </span>
              </div>

              <div className={styles.services}>
                {serviceAreas.map((service) => (
                  <Link
                    key={service.number}
                    href={service.href}
                    className={styles.service}
                  >
                    <span className={styles.serviceNumber}>
                      {service.number}
                    </span>

                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
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
        </div>
      </Container>
    </section>
  );
}