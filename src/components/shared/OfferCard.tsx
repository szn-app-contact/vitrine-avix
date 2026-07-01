'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import type { Offer } from '@/types';

interface OfferCardProps {
  offer: Offer;
  index: number;
}

export default function OfferCard({ offer, index }: OfferCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex"
    >
      <Card
        className={`flex flex-col w-full ${
          offer.isPopular ? 'border-blue-500/30 glow-blue relative' : ''
        }`}
        glow={offer.isPopular}
      >
        {offer.isPopular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge variant="success">Offre recommandée</Badge>
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-2xl font-bold font-heading text-white mb-2">{offer.name}</h3>
          <p className="text-slate-400">{offer.subtitle}</p>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold font-heading text-white">{offer.pricePromo}€</span>
            <span className="text-lg text-slate-500 line-through">{offer.priceNormal}€</span>
          </div>
          <Badge variant="promo" className="mt-2">Prix de lancement</Badge>
        </div>

        <p className="text-slate-300 mb-6 leading-relaxed">{offer.description}</p>

        <ul className="space-y-3 mb-8 flex-grow">
          {offer.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="text-emerald-400" size={12} />
              </div>
              <span className="text-slate-300">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          href="/contact"
          variant={offer.isPopular ? 'primary' : 'secondary'}
          size="lg"
          className="w-full"
        >
          {offer.cta}
          <ArrowRight size={18} />
        </Button>
      </Card>
    </motion.div>
  );
}
