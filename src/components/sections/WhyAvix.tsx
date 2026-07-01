'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import { whyAvixItems } from '@/data/whyAvix';

export default function WhyAvix() {
  return (
    <section className="section-padding bg-navy-950 relative">
      <div className="noise" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Pourquoi AVIX"
          title="Les avantages de travailler avec nous"
          subtitle="Nous comprenons les enjeux des commerçants locaux. Notre approche est concrète, transparente et axée sur les résultats."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {whyAvixItems.map((item, index) => {
            const IconComponent = (LucideIcons as any)[item.icon];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              >
                <Card className="h-full flex gap-4 p-6 hover:bg-white/[0.04]">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    {IconComponent && <IconComponent className="text-blue-400" size={20} />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
