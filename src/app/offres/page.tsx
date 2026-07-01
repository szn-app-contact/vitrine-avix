import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import PremiumOffers from '@/components/sections/PremiumOffers';
import CtaFinal from '@/components/sections/CtaFinal';

export const metadata: Metadata = {
  title: 'Nos offres et tarifs — AVIX',
  description: 'Découvrez nos packs transparents pour la création de votre site vitrine et l\'optimisation de votre fiche Google. Sans abonnement caché.',
};

export default function OffresPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="pt-32 pb-8 relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Des tarifs clairs et transparents"
            subtitle="Choisissez la formule qui correspond au besoin actuel de votre établissement."
            className="mb-8"
            theme="light"
          />
        </div>
      </div>

      <PremiumOffers />

      <CtaFinal />
    </div>
  );
}
