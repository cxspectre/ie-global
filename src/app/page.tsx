import { Hero } from '@/components/hero';
import { ProblemOutcome } from '@/components/problem-outcome';
import { ServicesSnapshot } from '@/components/services-snapshot';
import { FeaturedWork } from '@/components/featured-work';
import { ScaleFramework } from '@/components/scale-framework';
import { CapabilitiesStack } from '@/components/capabilities-stack';
import { PerformanceKPIs } from '@/components/performance-kpis';
import { PrimaryCTABand } from '@/components/primary-cta-band';
import { AboutSnapshot } from '@/components/about-snapshot';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemOutcome />
      <ServicesSnapshot />
      <FeaturedWork />
      <ScaleFramework />
      <CapabilitiesStack />
      <PerformanceKPIs />
      <PrimaryCTABand />
      <AboutSnapshot />
    </>
  );
}

