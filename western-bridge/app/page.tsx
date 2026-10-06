
import PathwaysSection from "@/components/home/PathwaysSection";
import GermanyGatewaySection from "@/components/home/GermanyGatewaySection";
import MedicalFocusSection from "@/components/home/MedicalFocusSection";
import BusinessExpansionSection from "@/components/home/BusinessExpansionSection";
import TrainingSection from "@/components/home/TrainingSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import AIAdvisorSection from "@/components/home/AIAdvisorSection";
import FinalCTASection from "@/components/home/FinalCTASection";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <PathwaysSection />
      <GermanyGatewaySection />
      <MedicalFocusSection />
      <BusinessExpansionSection />
      <TrainingSection />
      <HowItWorksSection />
      <AIAdvisorSection />
      <FinalCTASection />
    </main>
  );
}