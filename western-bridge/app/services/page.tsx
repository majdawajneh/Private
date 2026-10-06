import type { Metadata } from "next";

import ServicesHero from "@/components/services/ServicesHero";
import ServiceSystemSection from "@/components/services/ServiceSystemSection";
import ServicesCapabilitiesSection from "@/components/services/ServicesCapabilitiesSection";
import ServicesDeliverySection from "@/components/services/ServicesDeliverySection";

export const metadata: Metadata = {
  title: "Services",

  description:
    "Western Bridge provides international consulting, training, qualification support, healthcare preparation, education and institutional cooperation, business development, market research, digital solutions, and international networking services.",
};

export default function ServicesPage() {
  return (
    <main id="services-page">
      <ServicesHero />
      <ServiceSystemSection />
      <ServicesCapabilitiesSection />
      <ServicesDeliverySection />
    </main>
  );
}