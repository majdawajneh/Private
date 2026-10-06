"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Individuals", href: "/individuals" },
  { label: "Businesses", href: "/businesses" },
  { label: "Education", href: "/education" },
  { label: "Medical", href: "/medical" },
  { label: "Germany", href: "/germany" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <Container>
        <div className={styles.inner}>
          {/* Brand */}
          <Link
            href="/"
            className={styles.brand}
            aria-label="Western Bridge Home"
            onClick={closeMenu}
          >
            <Image
                src="/logo/western-bridge-logo.png"
                alt="Western Bridge"
                width={285}
                height={170}
                priority
                className={styles.logoImage}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={styles.navigation}
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.navLink}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.aiButton}
              aria-label="Open Western Bridge AI Advisor"
            >
              AI Advisor

              <span aria-hidden="true">✦</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={`${styles.menuButton} ${
                menuOpen ? styles.menuButtonOpen : ""
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((previous) => !previous)}
            >
              <span className={styles.menuLine}></span>
              <span className={styles.menuLine}></span>
              <span className={styles.menuLine}></span>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <Container>
          <nav
            className={styles.mobileNavigation}
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              className={styles.mobileAiButton}
              onClick={closeMenu}
            >
              AI Advisor

              <span aria-hidden="true">✦</span>
            </button>
          </nav>
        </Container>
      </div>
    </header>
  );
}