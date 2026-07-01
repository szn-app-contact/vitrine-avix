'use client';

import { motion } from 'framer-motion';
import { Globe, MapPin, Smartphone, Eye, Headphones, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';

const solutions = [
  { icon: Globe, text: "Un site vitrine clair et moderne" },
  { icon: MapPin, text: "Une fiche Google mieux présentée" },
  { icon: Smartphone, text: "Un support NFC pour faciliter les avis" },
  { icon: Eye, text: "Une présence locale plus cohérente" },
  { icon: Headphones, text: "Un accompagnement simple et concret" },
];

export default function Solution() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div>
            <SectionHeader
              centered={false}
              badge="Notre réponse"
              title="Une solution digitale complète et cohérente"
              subtitle="Nous ne faisons pas que des sites internet. Nous construisons une présence en ligne pensée pour convertir les habitants de votre région en clients."
            />
            
            <div className="space-y-4 mb-10">
              {solutions.map((item, index) => (
                <AnimateOnScroll key={index} delay={index * 0.1} direction="up">
                  <div className="flex items-center gap-4 bg-navy-800/50 rounded-xl p-4 border border-white/5 hover:bg-navy-800 hover:border-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <item.icon className="text-blue-400" size={20} />
                    </div>
                    <span className="text-lg font-medium text-slate-200">{item.text}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
            
            <AnimateOnScroll delay={0.6}>
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 flex items-start gap-4">
                <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={24} />
                <div>
                  <h4 className="text-white font-semibold mb-1">Pas d'abonnement caché</h4>
                  <p className="text-sm text-slate-300">
                    Pas d'abonnement mensuel imposé par AVIX. Les coûts techniques comme le nom de domaine ou l'hébergement restent à votre nom.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          
          <div className="relative">
            <AnimateOnScroll direction="left" className="relative z-10">
              <Card className="p-2 border-white/10 bg-navy-950/80 shadow-2xl shadow-blue-900/20">
                <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                  {/* Abstract visual representation of a clean website/dashboard */}
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900 flex flex-col p-6">
                    <div className="flex items-center gap-2 mb-8">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="w-1/3 h-6 bg-white/10 rounded-md mb-6" />
                    <div className="w-full h-32 bg-white/5 rounded-lg mb-4" />
                    <div className="flex gap-4">
                      <div className="w-1/2 h-24 bg-white/5 rounded-lg" />
                      <div className="w-1/2 h-24 bg-white/5 rounded-lg" />
                    </div>
                  </div>
                </div>
              </Card>
            </AnimateOnScroll>
            
            {/* Floating elements */}
            <AnimateOnScroll delay={0.3} direction="right" className="absolute -bottom-10 -left-10 z-20">
              <Card className="p-4 flex items-center gap-4 bg-navy-800/90 shadow-xl backdrop-blur-md">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <div className="text-white font-bold">Avis Google</div>
                  <div className="text-emerald-400 text-sm">Boostez votre réputation</div>
                </div>
              </Card>
            </AnimateOnScroll>
          </div>
          
        </div>
      </div>
    </section>
  );
}
