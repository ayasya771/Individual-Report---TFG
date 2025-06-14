import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TheWhySection from '@/components/sections/TheWhySection';
import DataInsightsSection from '@/components/sections/DataInsightsSection';
import ProjectJourneySection from '@/components/sections/ProjectJourneySection';
import ImpactFutureSection from '@/components/sections/ImpactFutureSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TheWhySection />
        <DataInsightsSection />
        <ProjectJourneySection />
        <ImpactFutureSection />
      </main>
      <Footer />
    </>
  );
}
