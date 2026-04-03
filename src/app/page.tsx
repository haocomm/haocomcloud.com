import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { PlatformAdvantages } from "@/components/PlatformAdvantages";
import { DashboardPreview } from "@/components/DashboardPreview";
import { TrustSection } from "@/components/TrustSection";
import { DeployedSystems } from "@/components/DeployedSystems";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <WorkflowSection />
        <PlatformAdvantages />
        <DashboardPreview />
        <TrustSection />
        <DeployedSystems />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
