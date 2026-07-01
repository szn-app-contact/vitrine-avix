'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-navy-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Nos services"
          title="Tout ce qu'il faut pour votre visibilité locale"
          subtitle="Nous avons regroupé les outils les plus efficaces pour vous aider à développer votre activité en Vendée."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={service.id} className={index >= 3 && services.length === 5 ? "lg:col-span-1.5" : ""}>
               <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>

        <AnimateOnScroll delay={0.4} className="text-center">
          <Button href="/services" variant="outline" size="lg">
            Découvrir tous nos services
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
