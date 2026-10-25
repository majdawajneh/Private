import ContactSection from "@/components/contact/ContactSection";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title:
    "Contact Western Bridge | الجسر الغربي",

  description:
    "Contact Western Bridge (الجسر الغربي / ويسترن بريدج) for international consulting, healthcare, business, education, institutional cooperation and professional preparation inquiries.",

  path: "/contact",

  image: "/images/contact-hero.jpg",
});

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}