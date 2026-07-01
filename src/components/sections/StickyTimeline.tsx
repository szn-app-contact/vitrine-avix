'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { methodSteps } from '@/data/method';
import * as LucideIcons from 'lucide-react';

export default function StickyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section className="bg-slate-50 py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Notre Méthode"
          title="Un accompagnement étape par étape"
          subtitle="Pas de processus compliqué. Nous gérons la technique pour que vous puissiez vous concentrer sur votre métier."
          theme="light"
        />

        <div className="mt-20 max-w-4xl mx-auto relative">
          {/* Progress Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 md:-translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-blue-600"
              style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            />
          </div>

          <div className="space-y-12 md:space-y-24 relative">
            {methodSteps.map((step, index) => {
              const IconComponent = (LucideIcons as any)[step.icon];
              const isEven = index % 2 === 0;

              return (
                <div key={step.step} className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.5 }}
                      className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="text-blue-600 font-bold mb-2">Étape {step.step}</div>
                      <h3 className="text-xl font-bold font-heading text-navy-950 mb-3">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Icon Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-slate-50 shadow-md z-10">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      {IconComponent && <IconComponent size={20} />}
                    </div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
