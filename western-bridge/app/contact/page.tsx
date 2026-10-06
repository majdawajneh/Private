import type { Metadata } from "next";

import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Western Bridge",

  description:
    "Contact Western Bridge regarding international pathways, healthcare preparation, business development, Germany, education, training, and institutional cooperation.",
};

export default function ContactPage() {
  return (
    <main id="contact-page">
      <ContactSection />
    </main>
  );
}