import type { Metadata } from 'next';
import HeroImmersive from '@/components/sections/HeroImmersive';
import BeforeAfterBento from '@/components/sections/BeforeAfterBento';
import InteractiveSectors from '@/components/sections/InteractiveSectors';
import PaletteShowcase from '@/components/sections/PaletteShowcase';
import NfcInteraction from '@/components/sections/NfcInteraction';
import StickyTimeline from '@/components/sections/StickyTimeline';
import PremiumOffers from '@/components/sections/PremiumOffers';
import WhyAvix from '@/components/sections/WhyAvix';
import Zone from '@/components/sections/Zone';
import FaqSection from '@/components/sections/FaqSection';
import CtaFinal from '@/components/sections/CtaFinal';

export const metadata: Metadata = {
  title: 'AVIX — Sites vitrines, avis Google et visibilité locale en Vendée',
  description: 'Une présence digitale claire, professionnelle et pensée pour convertir vos clients locaux. AVIX crée des sites modernes et facilite vos avis clients.',
};

export default function Home() {
  return (
    <>
      <HeroImmersive />
      <BeforeAfterBento />
      <InteractiveSectors />
      <PaletteShowcase />
      <NfcInteraction />
      <PremiumOffers />
      <StickyTimeline />
      <WhyAvix />
      <Zone />
      <FaqSection limit={6} />
      <CtaFinal />
    </>
  );
}
