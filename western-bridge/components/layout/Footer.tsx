import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import styles from "./Footer.module.css";

const individualLinks = [
  { label: "Individuals", href: "/individuals" },
  { label: "Germany Pathways", href: "/germany" },
  { label: "Medical Professionals", href: "/medical" },
  { label: "Training & Qualification", href: "/services" },
];

const businessLinks = [
  { label: "Business Consulting", href: "/businesses" },
  { label: "Market Studies", href: "/businesses" },
  { label: "International Partnerships", href: "/businesses" },
  { label: "Digital Solutions", href: "/services" },
];

const companyLinks = [
  { label: "About Western Bridge", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "AI Policy", href: "/ai-policy" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.circleOne}></div>
      <div className={styles.circleTwo}></div>

      <div className={styles.main}>
        <Container>
          <div className={styles.grid}>
            {/* Brand */}

            <div className={styles.brandColumn}>
              <Link href="/" aria-label="Western Bridge Home">
                <Image
                  src="/logo/western-bridge-logo.png"
                  alt="Western Bridge"
                  width={210}
                  height={80}
                  className={styles.logo}
                />
              </Link>

              <p className={styles.brandText}>
                Western Bridge supports individuals, healthcare
                professionals, and businesses through international
                consulting, qualification, training, strategic guidance,
                and cross-border connections.
              </p>

              <div className={styles.focusBadge}>
                <span className={styles.focusDot}></span>
                Germany-Focused. Internationally Connected.
              </div>
            </div>

            {/* Individuals */}

            <div>
              <h3 className={styles.columnTitle}>Individuals</h3>

              <div className={styles.links}>
                {individualLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={styles.link}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Businesses */}

            <div>
              <h3 className={styles.columnTitle}>Businesses</h3>

              <div className={styles.links}>
                {businessLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={styles.link}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company */}

            <div>
              <h3 className={styles.columnTitle}>Company</h3>

              <div className={styles.links}>
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={styles.link}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal */}

            <div>
              <h3 className={styles.columnTitle}>Legal</h3>

              <div className={styles.links}>
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={styles.link}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.divider}></div>

      <Container>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Western Bridge. All rights reserved.
          </p>

          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy" className={styles.bottomLink}>
              Privacy
            </Link>

            <Link href="/terms" className={styles.bottomLink}>
              Terms
            </Link>

            <Link href="/disclaimer" className={styles.bottomLink}>
              Disclaimer
            </Link>

            <Link href="/cookie-policy" className={styles.bottomLink}>
              Cookies
            </Link>

            <Link href="/ai-policy" className={styles.bottomLink}>
              AI Policy
            </Link>
          </div>
        </div>
      </Container>

      <div className={styles.disclaimer}>
        <Container>
          <p className={styles.disclaimerText}>
            Western Bridge provides consulting, preparation, training,
            qualification support, and international networking services.
            Western Bridge is not a direct recruitment agency and does not
            guarantee employment, visas, university admission, professional
            recognition, licensing, or immigration outcomes. Final decisions
            remain with the relevant employers, institutions, authorities, and
            regulatory bodies.
          </p>
        </Container>
      </div>
    </footer>
  );
}