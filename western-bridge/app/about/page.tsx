import AboutHero from "@/components/about/AboutHero";
import AboutPurposeSection from "@/components/about/AboutPurposeSection";
import AboutValuesSection from "@/components/about/AboutValuesSection";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title:
    "About Western Bridge | الجسر الغربي",

  description:
    "Learn about Western Bridge (الجسر الغربي / ويسترن بريدج), our international consulting approach, preparation, qualification, institutional cooperation and responsible pathway development.",

  path: "/about",

  image: "/images/about-hero.jpg",
});

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <AboutPurposeSection />

      <AboutValuesSection />
    </main>
  );
}