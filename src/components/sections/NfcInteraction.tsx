'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { Smartphone, Star, MapPin } from 'lucide-react';

export default function NfcInteraction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Phone sliding up
  const phoneY = useTransform(scrollYProgress, [0.3, 0.6], [300, 0]);
  const phoneRotate = useTransform(scrollYProgress, [0.3, 0.6], [15, 0]);
  
  // NFC Wave expanding
  const waveScale = useTransform(scrollYProgress, [0.5, 0.65], [0, 3]);
  const waveOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 0.5, 0]);

  // Review Modal popping up
  const modalY = useTransform(scrollYProgress, [0.65, 0.8], [50, 0]);
  const modalOpacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
  const modalScale = useTransform(scrollYProgress, [0.65, 0.8], [0.8, 1]);

  return (
    <section ref={containerRef} className="section-padding bg-white relative overflow-hidden min-h-[120vh]">
      <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-slate-50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 sticky top-32">
        <SectionHeader
          badge="Technologie NFC"
          title="Vos clients n'ont plus d'excuse"
          subtitle="Fini les 'je le ferai plus tard'. En approchant simplement leur téléphone de votre plaque AVIX, la page d'avis s'ouvre instantanément."
          theme="light"
        />

        <div className="mt-20 relative h-[600px] max-w-4xl mx-auto flex items-center justify-center">
          
          {/* Base NFC Stand (Static) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-slate-50 rounded-3xl border border-slate-200 shadow-xl flex flex-col items-center pt-8">
            <div className="text-navy-950 font-bold text-xl mb-2">Votre Commerce</div>
            <div className="text-slate-500 text-sm mb-8">Laissez un avis !</div>
            <div className="w-24 h-24 rounded-full border-4 border-emerald-500/30 flex items-center justify-center relative">
              <Smartphone className="text-emerald-500" size={32} />
              
              {/* Animated Wave */}
              <motion.div 
                style={{ scale: waveScale, opacity: waveOpacity }}
                className="absolute inset-0 rounded-full border-2 border-emerald-500"
              />
            </div>
            <div className="mt-auto pb-6 text-xs text-slate-400 font-bold tracking-widest">AVIX</div>
          </div>

          {/* Animated Phone */}
          <motion.div 
            style={{ y: phoneY, rotateZ: phoneRotate }}
            className="absolute top-1/4 right-[20%] w-56 h-[450px] bg-white rounded-[2rem] border-8 border-slate-800 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-2xl z-20" />
            
            {/* Phone Content (Animated Modal) */}
            <div className="flex-1 bg-slate-50 flex items-center justify-center p-4 relative">
              <motion.div 
                style={{ y: modalY, opacity: modalOpacity, scale: modalScale }}
                className="w-full bg-white rounded-xl shadow-lg border border-slate-100 p-4"
              >
                <div className="flex gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-blue-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy-950">Votre Commerce</div>
                    <div className="text-xs text-slate-500">Avis Google</div>
                  </div>
                </div>
                
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i, duration: 0.2 }}
                      viewport={{ margin: "-20%" }}
                    >
                      <Star size={24} className="fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </div>

                <div className="h-20 bg-slate-50 rounded-lg border border-slate-100 mb-3" />
                <div className="h-8 bg-blue-600 rounded-lg w-full flex items-center justify-center text-white text-xs font-bold">
                  Publier
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
