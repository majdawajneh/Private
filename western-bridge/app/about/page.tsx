import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import AboutPurposeSection from "@/components/about/AboutPurposeSection";
import AboutValuesSection from "@/components/about/AboutValuesSection";

export const metadata: Metadata = {
  title: "About Western Bridge",

  description:
    "Learn about Western Bridge, an international consulting and development platform supporting individuals, businesses, healthcare professionals, universities, training providers, and institutions through preparation, qualification, international growth, and strategic connections.",
};

export default function AboutPage() {
  return (
    <main id="about-page">
      <AboutHero />
      <AboutPurposeSection />
      <AboutValuesSection />
    </main>
  );
}