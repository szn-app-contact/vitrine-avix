'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import { offers } from '@/data/offers';
import Button from '@/components/ui/Button';
import { Check, Info } from 'lucide-react';
import MagicCard from '@/components/interactive/MagicCard';
import FadeIn from '@/components/interactive/FadeIn';

export default function PremiumOffers() {
  return (
    <section className="py-14 md:py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Tarifs & Packs"
          title="Des formules claires, sans surprise"
          subtitle="Pas d’abonnement caché, pas de contrat forcé. Vous savez exactement ce que vous payez et ce que vous obtenez. Votre site vous appartient."
          theme="light"
        />

        {/* Info Banner */}
        <div className="max-w-2xl mx-auto mt-6 mb-8 bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
           <Info className="text-blue-600 shrink-0 mt-0.5" size={20} />
           <p className="text-sm text-blue-900 leading-relaxed">
             <strong>Transparence totale :</strong> Pas d’abonnement mensuel imposé par AVIX. Vous gardez tous vos accès et votre site vous appartient intégralement.
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offers.map((offer, index) => (
            <FadeIn key={offer.id} delay={index * 0.2}>
              <MagicCard 
                className={`h-full flex flex-col p-8 md:p-10 ${
                  offer.isPopular 
                    ? 'border-blue-500 shadow-xl shadow-blue-500/10' 
                    : 'border-slate-200 shadow-sm'
                } bg-white rounded-3xl`}
              >
                {offer.isPopular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      Pack complet
                    </span>
                  </div>
                )}

                <div className="mb-8 relative z-10">
                  <h3 className="text-2xl font-bold font-heading text-navy-950 mb-2">{offer.name}</h3>
                  <p className="text-slate-600 text-sm h-10">{offer.subtitle}</p>
                </div>

                <div className="mb-8 relative z-10">
                  <div className="flex flex-col gap-1 mb-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-bold text-navy-950">{offer.pricePromo} €</span>
                      <span className="text-emerald-600 text-sm font-semibold tracking-wide">— prix de lancement</span>
                    </div>
                    <div className="text-slate-500 text-sm mt-1">
                      Puis {offer.priceNormal} €{offer.id === 'pack-visibilite-locale' ? ' selon le projet' : ''}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    Paiement unique. Hors frais éventuels de nom de domaine et d&apos;hébergement, réglés directement par le client.
                  </p>
                </div>

                <div className="mb-8 relative z-10">
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    {offer.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-10 flex-grow relative z-10">
                  {offer.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <Check className="text-emerald-500" size={12} />
                      </div>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative z-10">
                  <Button 
                    href="/contact" 
                    className="w-full justify-center"
                    variant={offer.isPopular ? 'primary' : 'outline'}
                  >
                    {offer.cta}
                  </Button>
                </div>
              </MagicCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
