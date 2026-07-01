'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { BentoGrid, BentoGridItem } from '@/components/interactive/BentoGrid';
import { AlertCircle, SearchX, Frown, CheckCircle2, TrendingUp, Smartphone } from 'lucide-react';
import FadeIn from '@/components/interactive/FadeIn';

export default function BeforeAfterBento() {
  return (
    // Changed bg-navy-950 to bg-slate-50 for high contrast breathing room
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Avant / Après"
          title="Votre image en ligne peut tout changer"
          subtitle="Voici pourquoi vos clients potentiels fuient aujourd'hui, et comment nous allons inverser la tendance demain."
          theme="light"
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mt-16 max-w-7xl mx-auto">
          
          {/* Avant */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-sm text-slate-600">1</span>
              La situation actuelle
            </h3>
            
            <BentoGrid className="md:grid-cols-1 md:auto-rows-[12rem]">
              <FadeIn delay={0.1} direction="left">
                <BentoGridItem
                  className="bg-white border-slate-200 hover:border-red-200 shadow-sm hover:shadow-md group"
                  title={<span className="text-slate-800 group-hover:text-red-500 transition-colors">Site ancien ou inexistant</span>}
                  description="Les clients ne vous trouvent pas ou tombent sur un design qui ne rassure pas sur la qualité de vos services."
                  icon={<SearchX className="text-slate-400 group-hover:text-red-500 mb-2 transition-colors" />}
                />
              </FadeIn>
              <FadeIn delay={0.2} direction="left">
                <BentoGridItem
                  className="bg-white border-slate-200 hover:border-orange-200 shadow-sm hover:shadow-md group"
                  title={<span className="text-slate-800 group-hover:text-orange-500 transition-colors">Fiche Google négligée</span>}
                  description="Horaires erronés, peu de photos, ou pire : des avis négatifs très visibles sans vrais avis pour compenser."
                  icon={<AlertCircle className="text-slate-400 group-hover:text-orange-500 mb-2 transition-colors" />}
                />
              </FadeIn>
              <FadeIn delay={0.3} direction="left">
                <BentoGridItem
                  className="bg-white border-slate-200 hover:border-amber-200 shadow-sm hover:shadow-md group"
                  title={<span className="text-slate-800 group-hover:text-amber-500 transition-colors">Avis difficiles à laisser</span>}
                  description="Vos clients satisfaits oublient de laisser un avis car la démarche est trop longue sur leur téléphone."
                  icon={<Frown className="text-slate-400 group-hover:text-amber-500 mb-2 transition-colors" />}
                />
              </FadeIn>
            </BentoGrid>
          </div>

          {/* Après */}
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]">2</span>
              Avec l'accompagnement AVIX
            </h3>
            
            <BentoGrid className="md:grid-cols-1 md:auto-rows-[12rem]">
              <FadeIn delay={0.4} direction="right">
                <BentoGridItem
                  className="bg-white border-blue-100 hover:border-blue-300 shadow-md hover:shadow-lg group"
                  title={<span className="text-navy-900 group-hover:text-blue-600 transition-colors">Une vitrine moderne et claire</span>}
                  description="Un site web rapide, responsive, qui donne envie de vous contacter et présente parfaitement vos services."
                  icon={<CheckCircle2 className="text-blue-500 mb-2" />}
                />
              </FadeIn>
              <FadeIn delay={0.5} direction="right">
                <BentoGridItem
                  className="bg-white border-emerald-100 hover:border-emerald-300 shadow-md hover:shadow-lg group"
                  title={<span className="text-navy-900 group-hover:text-emerald-600 transition-colors">Un parcours avis simplifié</span>}
                  description="Grâce au support NFC, un simple scan suffit pour qu'un client satisfait accède à votre page d'avis."
                  icon={<Smartphone className="text-emerald-500 mb-2" />}
                />
              </FadeIn>
              <FadeIn delay={0.6} direction="right">
                <BentoGridItem
                  className="bg-white border-purple-100 hover:border-purple-300 shadow-md hover:shadow-lg group"
                  title={<span className="text-navy-900 group-hover:text-purple-600 transition-colors">Une présence locale professionnelle</span>}
                  description="Une présentation claire et cohérente entre votre site et votre fiche Google. Vous inspirez confiance."
                  icon={<TrendingUp className="text-purple-500 mb-2" />}
                />
              </FadeIn>
            </BentoGrid>
          </div>

        </div>
      </div>
    </section>
  );
}
