'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { methodSteps } from '@/data/method';

export default function Method() {
  return (
    <section className="section-padding bg-navy-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Notre méthode"
          title="Un processus simple et efficace"
          subtitle="Nous avons conçu une approche claire pour ne pas vous faire perdre de temps. Vous continuez à gérer votre commerce, nous nous occupons de votre visibilité."
        />

        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Connecting Line Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />
          
          {/* Connecting Line Mobile */}
          <div className="block md:hidden absolute top-0 left-[27px] w-px h-full bg-white/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {methodSteps.map((step, index) => {
              const IconComponent = (LucideIcons as any)[step.icon];
              
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-4 md:text-center"
                >
                  {/* Step Number Badge */}
                  <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 -mt-4 bg-navy-900 px-2 text-sm font-bold text-slate-500 z-20">
                    0{step.step}
                  </div>

                  {/* Icon Circle */}
                  <div className="w-14 h-14 shrink-0 rounded-full bg-navy-800 border-4 border-navy-900 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] flex items-center justify-center relative z-10 group transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                    {IconComponent && <IconComponent className="text-blue-400 group-hover:scale-110 transition-transform" size={24} />}
                  </div>

                  {/* Content */}
                  <div className="pt-2 md:pt-4">
                    <h3 className="text-xl font-bold font-heading text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
