'use client';

import { MapPin } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import { zoneCities, zoneDescription } from '@/data/zone';

export default function Zone() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Decorative map-like background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Zone d'intervention"
          title="Nous intervenons en Vendée et ses alentours"
          subtitle={zoneDescription}
        />

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto mb-12">
          {zoneCities.map((city, index) => (
            <AnimateOnScroll key={index} delay={index * 0.05} direction="up">
              <div className="flex items-center gap-2 bg-navy-800/80 hover:bg-navy-700/80 border border-white/10 hover:border-blue-500/30 transition-colors px-4 py-2.5 rounded-full backdrop-blur-sm cursor-default">
                <MapPin className="text-blue-400" size={16} />
                <span className="text-sm md:text-base font-medium text-slate-200">{city.name}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.4} className="text-center">
          <Button href="/contact" variant="primary">
            Vous êtes dans la zone ? Contactez-nous
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
