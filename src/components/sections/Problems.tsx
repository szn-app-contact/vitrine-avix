'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import { problems } from '@/data/problems';

export default function Problems() {
  return (
    <section className="section-padding bg-navy-950 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Le constat"
          title="Des obstacles qui freinent votre croissance"
          subtitle="Aujourd'hui, une mauvaise présence en ligne fait douter vos clients potentiels. Vous perdez des opportunités tous les jours."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const IconComponent = (LucideIcons as any)[problem.icon];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={index >= 3 ? "lg:col-span-1.5" : ""} // Make last 2 center nicely if desired, but flex is better for that. Grid handles it okay.
              >
                <Card className="h-full group">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-colors">
                    {IconComponent && <IconComponent className="text-amber-400" size={24} />}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white mb-3">{problem.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{problem.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
