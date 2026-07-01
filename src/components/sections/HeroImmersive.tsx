'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Smartphone, MapPin, Store, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/interactive/FadeIn';

export default function HeroImmersive() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-50 perspective-1000">
      {/* Background Gradients (Light) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 z-0" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="noise opacity-10" /> {/* Reduced noise opacity for light mode */}

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl relative z-20">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-sm font-medium text-blue-700 bg-blue-100 border border-blue-200 rounded-full shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                Agence web de proximité
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-navy-950 leading-[1.1] mb-6 tracking-tight">
                Donnez à votre commerce une présence en ligne qui <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500">inspire confiance.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light max-w-xl">
                AVIX crée des sites vitrines modernes, optimise votre visibilité Google et facilite les avis clients grâce à des supports NFC simples à utiliser.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button href="/contact" size="lg" className="w-full sm:w-auto group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white shadow-[0_10px_40px_rgba(37,99,235,0.2)]">
                  <span className="relative z-10 flex items-center">
                    Demander un devis
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                <Button href="/offres" variant="outline" size="lg" className="w-full sm:w-auto bg-white hover:bg-slate-50 border-slate-200 text-slate-700 shadow-sm">
                  Voir nos offres
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right Visual Composite (Light Premium Style) */}
          <motion.div 
            style={{ opacity }}
            className="relative lg:h-[600px] w-full hidden md:block perspective-[2000px] transform-style-3d"
          >
            {/* Main Mockup Container (White) */}
            <motion.div
              style={{ y: y1 }}
              initial={{ rotateY: -10, rotateX: 5, z: -100, opacity: 0 }}
              animate={{ rotateY: -15, rotateX: 5, z: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[80%] aspect-[3/4] rounded-2xl bg-white border border-slate-200 shadow-[20px_20px_60px_rgba(0,0,0,0.05),0_0_40px_rgba(37,99,235,0.05)] overflow-hidden flex flex-col"
            >
              {/* Browser Bar */}
              <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="mx-auto h-5 w-1/2 bg-white rounded-md border border-slate-200 shadow-sm" />
              </div>
              {/* Mockup Content */}
              <div className="flex-1 bg-gradient-to-b from-slate-50 to-white p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px]" />
                
                <div className="flex items-center justify-between mb-8">
                   <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                     <Store className="text-white w-4 h-4" />
                   </div>
                   <div className="flex gap-2">
                     <div className="w-12 h-3 bg-slate-200 rounded-full" />
                     <div className="w-12 h-3 bg-slate-200 rounded-full" />
                     <div className="w-12 h-3 bg-slate-200 rounded-full" />
                   </div>
                </div>

                <div className="w-3/4 h-12 bg-slate-200 rounded-lg mb-6" />
                <div className="w-1/2 h-4 bg-slate-100 rounded-lg mb-2" />
                <div className="w-1/3 h-4 bg-slate-100 rounded-lg mb-10" />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-slate-100 rounded-xl border border-slate-200 shadow-sm" />
                  <div className="aspect-square bg-slate-100 rounded-xl border border-slate-200 shadow-sm" />
                </div>
              </div>
            </motion.div>

            {/* Floating Neutral Card 1 : Google Profile Card */}
            <motion.div
              style={{ y: y2 }}
              initial={{ y: 50, opacity: 0, z: 50 }}
              animate={{ y: 0, opacity: 1, z: 50 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="absolute bottom-1/4 -left-10 w-72 bg-white/90 backdrop-blur-xl border border-slate-200 p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-blue-600 border border-slate-200">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-navy-950 font-bold text-sm mb-1">Votre Commerce</div>
                  <div className="flex gap-1 mb-1">
                     <div className="w-3 h-3 rounded-full bg-amber-400" />
                     <div className="w-3 h-3 rounded-full bg-amber-400" />
                     <div className="w-3 h-3 rounded-full bg-amber-400" />
                     <div className="w-3 h-3 rounded-full bg-amber-400" />
                     <div className="w-3 h-3 rounded-full bg-amber-400" />
                  </div>
                  <div className="text-slate-500 text-xs">Ouvert ⋅ Ferme à 19:00</div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                 <div className="h-8 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center text-xs font-semibold border border-blue-100">Itinéraire</div>
                 <div className="h-8 bg-slate-50 text-slate-700 rounded-lg flex items-center justify-center text-xs font-semibold border border-slate-200">Appeler</div>
                 <div className="h-8 bg-slate-50 text-slate-700 rounded-lg flex items-center justify-center text-xs font-semibold border border-slate-200">Avis</div>
              </div>
            </motion.div>

            {/* Floating NFC Badge + Phone */}
            <motion.div
              initial={{ y: -50, opacity: 0, z: 100 }}
              animate={{ 
                y: [-20, -10, -20],
                opacity: 1,
                z: 100
              }}
              transition={{ 
                opacity: { duration: 1, delay: 0.8 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              className="absolute top-1/4 right-[-20px] bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-slate-200 p-3 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-100">
                <Smartphone className="text-emerald-600 w-6 h-6" />
              </div>
              <div className="pr-2">
                 <div className="text-sm font-bold text-navy-950">Avis facilité</div>
                 <div className="text-xs text-slate-500">Support NFC inclus</div>
              </div>
            </motion.div>

            {/* Stats Card -> Neutral Confidence Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute top-10 left-10 bg-white/90 backdrop-blur-md border border-slate-200 p-4 rounded-xl flex items-center gap-4 shadow-lg"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center border border-emerald-100">
                <CheckCircle2 className="text-emerald-600" size={20} />
              </div>
              <div>
                <div className="text-navy-950 font-bold text-sm">Visibilité optimale</div>
                <div className="text-xs text-slate-500">Site + Fiche + NFC</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
