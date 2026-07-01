'use client';

import { Phone, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import GlowEffect from '@/components/ui/GlowEffect';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import { siteConfig } from '@/data/site';

export default function CtaFinal() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-blue-900/30 z-0" />
      <GlowEffect color="blue" size="lg" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="noise" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
            Prêt à améliorer votre visibilité locale ?
          </h2>
          <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
            Discutons de votre projet. Premier échange gratuit, sans engagement et sans jargon technique.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg" className="w-full sm:w-auto shadow-blue-500/25 shadow-xl">
              Demander un devis
              <ArrowRight size={18} />
            </Button>
            <Button 
              href={`tel:${siteConfig.phone}`} 
              variant="secondary" 
              size="lg" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-white/20"
            >
              <Phone size={18} className="mr-2" />
              {siteConfig.phoneDisplay}
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
