'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import OfferCard from '@/components/shared/OfferCard';
import { offers } from '@/data/offers';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import { ShieldCheck } from 'lucide-react';

export default function OffersPreview() {
  return (
    <section className="section-padding bg-navy-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Nos offres"
          title="Des solutions claires, des tarifs transparents"
          subtitle="Choisissez l'accompagnement qui correspond aux besoins de votre commerce. Pas de frais cachés, pas de surprises."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {offers.map((offer, index) => (
            <OfferCard key={offer.id} offer={offer} index={index} />
          ))}
        </div>

        <AnimateOnScroll delay={0.4} className="flex justify-center">
          <div className="inline-flex items-center gap-3 bg-navy-800/50 rounded-full px-6 py-3 border border-white/5">
            <ShieldCheck className="text-blue-400" size={20} />
            <span className="text-sm text-slate-300">
              Nous facilitons les avis authentiques de vos vrais clients, sans fausses promesses.
            </span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
