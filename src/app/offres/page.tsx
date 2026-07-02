import type { Metadata } from 'next';
import PremiumOffers from '@/components/sections/PremiumOffers';
import CtaFinal from '@/components/sections/CtaFinal';
import { CheckCircle2, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Offres & Tarifs — AVIX | Pack Avis Express et Pack Visibilité Locale',
  description:
    'Découvrez nos deux offres transparentes : Pack Avis Express à 149 € et Pack Visibilité Locale à 790 €. Tarifs clairs, sans abonnement caché. Devis gratuit pour les commerces en Vendée.',
  openGraph: {
    title: 'Offres & Tarifs — AVIX | Pack Avis Express et Visibilité Locale',
    description: 'Deux offres claires pour améliorer votre visibilité locale. Sans abonnement mensuel.',
    url: 'https://avix-digital.com/offres',
  },
};

const garanties = [
  'Paiement unique — aucun abonnement mensuel imposé par AVIX',
  'Vous gardez tous vos accès et votre site vous appartient',
  'Tarifs affichés dès le premier contact, sans surprise',
  'Devis gratuit, sans engagement',
];

export default function OffresPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-heading">
            Des tarifs clairs, sans surprise
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Deux offres simples pour partir sur de bonnes bases. Choisissez celle qui correspond à votre situation actuelle.
          </p>

          {/* Garanties */}
          <div className="inline-flex flex-col items-start gap-2 bg-blue-50 border border-blue-100 rounded-2xl p-5 text-left max-w-xl">
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-800 mb-1">
              <Info size={16} />
              Notre engagement
            </div>
            {garanties.map((g) => (
              <div key={g} className="flex items-start gap-2.5">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                <span className="text-sm text-slate-700">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PremiumOffers />
      <CtaFinal />
    </div>
  );
}
