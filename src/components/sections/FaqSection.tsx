'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import FaqItem from '@/components/shared/FaqItem';
import { faqItems } from '@/data/faq';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';

interface FaqSectionProps {
  limit?: number;
}

export default function FaqSection({ limit }: FaqSectionProps) {
  const displayedFaqs = limit ? faqItems.slice(0, limit) : faqItems;

  return (
    <section className="section-padding bg-navy-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Questions fréquentes"
          subtitle="Vous avez des questions sur nos services, nos tarifs ou notre façon de travailler ? Voici nos réponses."
        />

        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-navy-900/50 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 md:p-8">
            {displayedFaqs.map((item, index) => (
              <FaqItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {limit && limit < faqItems.length && (
          <AnimateOnScroll delay={0.4} className="text-center">
            <Button href="/contact" variant="outline">
              Une autre question ? Écrivez-nous
            </Button>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
