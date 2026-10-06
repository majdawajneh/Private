import ServicesHero from "@/components/services/ServicesHero";
import ServiceSystemSection from "@/components/services/ServiceSystemSection";
import ServicesCapabilitiesSection from "@/components/services/ServicesCapabilitiesSection";
import ServicesDeliverySection from "@/components/services/ServicesDeliverySection";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title:
    "International Consulting & Qualification Services | Western Bridge",

  description:
    "Explore Western Bridge services in international consulting, professional preparation, qualification, healthcare, education, business development, technology and institutional networking.",

  path: "/services",

  image:
    "/images/services-hero-consulting.jpg",
});

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />

      <ServiceSystemSection />

      <ServicesCapabilitiesSection />

      <ServicesDeliverySection />
    </main>
  );
}