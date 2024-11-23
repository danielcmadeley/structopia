"use client";

import FeaturesSection from "./_components/features-section";
import MarketingHero from "./_components/marketing-hero";
import StructuralCalculations from "./_components/structural-calculations";
import StructopiaReplaces from "./_components/structopia-replaces";
import { AIEurocodes } from "./_components/ai-eurocodes";

export default function LandingPage() {
  return (
    <>
      <MarketingHero />
      <FeaturesSection />
      <StructopiaReplaces />
      <AIEurocodes />
      <StructuralCalculations />
    </>
  );
}
