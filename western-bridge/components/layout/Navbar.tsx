"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import {
  Link,
  usePathname,
  useRouter,
} from "@/i18n/navigation";

import type { Locale } from "@/i18n/routing";

import styles from "./Navbar.module.css";

const navLinks = [
  { key: "home", href: "/" },
  { key: "individuals", href: "/individuals" },
  { key: "businesses", href: "/businesses" },
  { key: "education", href: "/education" },
  { key: "medical", href: "/medical" },
  { key: "germany", href: "/germany" },
  { key: "services", href: "/services" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const;

const languages: {
  code: Locale;
  labelKey: "german" | "english" | "arabic";
  short: string;
  flag: string;
  alt: string;
}[] = [
  {
    code: "de",
    labelKey: "german",
    short: "DE",
    flag: "/images/flags/germany.svg",
    alt: "Germany",
  },
  {
    code: "en",
    labelKey: "english",
    short: "EN",
    flag: "/images/flags/united-kingdom.svg",
    alt: "United Kingdom",
  },
  {
    code: "ar",
    labelKey: "arabic",
    short: "AR",
    flag: "/images/flags/jordan.svg",
    alt: "Jordan",
  },
];

export default function Navbar() {
  const locale = useLocale() as Locale;

  const t = useTranslations("Navigation");
  const languageT = useTranslations("Languages");
  const commonT = useTranslations("Common");

  const pathname = usePathname();
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [languageMenuOpen, setLanguageMenuOpen] =
    useState(false);

  const languageRef =
    useRef<HTMLDivElement | null>(null);

  const isArabic = locale === "ar";

  const currentLanguage =
    languages.find(
      (language) => language.code === locale
    ) ?? languages[0];

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        languageRef.current &&
        !languageRef.current.contains(
          event.target as Node
        )
      ) {
        setLanguageMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setLanguageMenuOpen(false);
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  function changeLanguage(nextLocale: Locale) {
    setLanguageMenuOpen(false);
    setMobileMenuOpen(false);

    if (nextLocale === locale) {
      return;
    }

    router.replace(pathname, {
      locale: nextLocale,
    });
  }

  function isActiveRoute(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  }

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="Western Bridge"
          onClick={() =>
            setMobileMenuOpen(false)
          }
        >
          <Image
            src="/logo/western-bridge-mark.jpeg"
            alt="Western Bridge"
            width={100}
            height={100}
            priority
            className={styles.logo}
          />

          <span className={styles.brandText}>
            <strong>WESTERN</strong>
            <strong>BRIDGE</strong>
          </span>
        </Link>

        <nav
          className={styles.desktopNav}
          aria-label={
            isArabic
              ? "التنقل الرئيسي"
              : "Main navigation"
          }
        >
          {navLinks.map((item) => {
            const active =
              isActiveRoute(item.href);

            return (
              <Link
                key={item.key}
                href={item.href}
                className={`${styles.navLink} ${
                  active
                    ? styles.navLinkActive
                    : ""
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <div
            ref={languageRef}
            className={styles.languageWrapper}
          >
            <button
              type="button"
              className={`${styles.languageTrigger} ${
                languageMenuOpen
                  ? styles.languageTriggerOpen
                  : ""
              }`}
              aria-label={
                isArabic
                  ? "تغيير اللغة"
                  : "Change language"
              }
              aria-haspopup="menu"
              aria-expanded={languageMenuOpen}
              onClick={() =>
                setLanguageMenuOpen(
                  (current) => !current
                )
              }
            >
              <span className={styles.currentFlag}>
                <Image
                  src={currentLanguage.flag}
                  alt={currentLanguage.alt}
                  width={28}
                  height={19}
                  className={styles.flagImage}
                />
              </span>

              <span className={styles.currentLanguage}>
                {currentLanguage.short}
              </span>

              <svg
                className={styles.chevron}
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  d="M5.5 7.5 10 12l4.5-4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className={`${styles.languageMenu} ${
                languageMenuOpen
                  ? styles.languageMenuOpen
                  : ""
              }`}
              role="menu"
            >
              <div className={styles.languageMenuHeader}>
                <span className={styles.languageMenuEyebrow}>
                  LANGUAGE
                </span>

                <strong>
                  {isArabic
                    ? "اختر اللغة"
                    : "Choose language"}
                </strong>
              </div>

              <div className={styles.languageOptions}>
                {languages.map(
                  (language, index) => {
                    const active =
                      language.code === locale;

                    return (
                      <button
                        key={language.code}
                        type="button"
                        role="menuitem"
                        className={`${styles.languageOption} ${
                          active
                            ? styles.languageOptionActive
                            : ""
                        }`}
                        style={
                          {
                            "--language-index":
                              index,
                          } as React.CSSProperties
                        }
                        onClick={() =>
                          changeLanguage(
                            language.code
                          )
                        }
                      >
                        <span className={styles.languageFlag}>
                          <Image
                            src={language.flag}
                            alt={language.alt}
                            width={34}
                            height={23}
                            className={styles.flagImage}
                          />
                        </span>

                        <span className={styles.languageContent}>
                          <strong>
                            {languageT(
                              language.labelKey
                            )}
                          </strong>

                          <small>
                            {language.short}
                          </small>
                        </span>

                        <span
                          className={styles.languageCheck}
                          aria-hidden="true"
                        >
                          {active ? "✓" : ""}
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          <button
            type="button"
            className={`${styles.menuButton} ${
              mobileMenuOpen
                ? styles.menuButtonOpen
                : ""
            }`}
            aria-label={
              mobileMenuOpen
                ? commonT("closeMenu")
                : commonT("openMenu")
            }
            aria-expanded={mobileMenuOpen}
            onClick={() =>
              setMobileMenuOpen(
                (current) => !current
              )
            }
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`${styles.mobileMenu} ${
          mobileMenuOpen
            ? styles.mobileMenuOpen
            : ""
        }`}
      >
        <nav
          className={styles.mobileNav}
          aria-label={
            isArabic
              ? "قائمة التنقل"
              : "Mobile navigation"
          }
        >
          {navLinks.map((item, index) => (
            <Link
              key={item.key}
              href={item.href}
              className={styles.mobileLink}
              style={
                {
                  "--mobile-index": index,
                } as React.CSSProperties
              }
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              <span>{t(item.key)}</span>

              <span aria-hidden="true">
                {isArabic ? "←" : "→"}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}