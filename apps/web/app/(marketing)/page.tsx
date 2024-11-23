"use client";

import FeaturesSection from "./_components/features-section";
import MarketingHero from "./_components/marketing-hero";
import StructuralCalculations from "./_components/structural-calculations";
import StructopiaReplaces from "./_components/structopia-replaces";
import { AIEurocodes } from "./_components/ai-eurocodes";
import ProjectManager from "./_components/project-manager";
import StructuralDatabases from "./_components/structural-databases";
import KnowledgeHub from "./_components/knowledge-hub";
export default function LandingPage() {
  return (
    <>
      <MarketingHero />
      <FeaturesSection />
      <StructopiaReplaces />
      <AIEurocodes />
      <ProjectManager />
      <StructuralCalculations />
      <StructuralDatabases />
      <KnowledgeHub />
    </>
  );
}
