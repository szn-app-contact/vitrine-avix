'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Star, MapPin, Wifi } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NfcInteraction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const phoneY = useTransform(scrollYProgress, [0.2, 0.6], [60, 0]);
  const phoneOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const wave1Scale = useTransform(scrollYProgress, [0.4, 0.65], [0.5, 1.5]);
  const wave1Opacity = useTransform(scrollYProgress, [0.4, 0.55, 0.65], [0, 0.6, 0]);
  const wave2Scale = useTransform(scrollYProgress, [0.5, 0.7], [0.5, 1.8]);
  const wave2Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 0.4, 0]);
  const popupY = useTransform(scrollYProgress, [0.6, 0.8], [30, 0]);
  const popupOpacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full">
              <Wifi size={14} />
              Technologie NFC
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 font-heading leading-tight">
              Vos clients n&apos;ont plus d&apos;excuse pour ne pas laisser un avis
            </h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              Fini les &quot;je le ferai plus tard&quot;. En approchant simplement leur téléphone de votre plaque AVIX, la page d&apos;avis s&apos;ouvre instantanément.
            </p>
            <p className="text-sm text-slate-500 mb-8 bg-amber-50 border border-amber-100 rounded-xl p-3">
              ⚠️ Les avis doivent toujours provenir de vrais clients satisfaits, laissés librement. Nous facilitons l&apos;accès, pas le contenu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/services/nfc-avis-google">
                Découvrir le Pack Avis Express
              </Button>
              <Button href="/services/nfc-avis-google" variant="outline">
                En savoir plus
              </Button>
            </div>
          </div>

          {/* Right: Interactive Visual */}
          <div className="flex items-center justify-center py-12">
            <div className="relative" style={{ width: 340, height: 420 }}>

              {/* NFC Stand — static */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Waves */}
                <motion.div
                  style={{ scale: wave1Scale, opacity: wave1Opacity }}
                  className="absolute inset-0 -m-8 rounded-full border-2 border-blue-400"
                />
                <motion.div
                  style={{ scale: wave2Scale, opacity: wave2Opacity }}
                  className="absolute inset-0 -m-8 rounded-full border border-blue-300"
                />

                {/* NFC Card */}
                <div className="w-32 h-44 rounded-2xl shadow-2xl border-2 border-slate-200 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-900" />
                  <div className="relative z-10 h-full flex flex-col items-center justify-center gap-3 p-3">
                    <div className="text-white font-bold text-2xl tracking-widest">AVIX</div>
                    <Wifi className="text-white/60 rotate-90" size={32} />
                    <div className="text-white/60 text-xs text-center leading-tight">
                      Approchez votre téléphone
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone — animates in */}
              <motion.div
                style={{ y: phoneY, opacity: phoneOpacity }}
                className="absolute right-0 top-0"
              >
                <div className="w-28 bg-slate-800 rounded-[2rem] p-1.5 shadow-2xl">
                  <div className="bg-white rounded-[1.5rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="h-5 bg-white flex items-center justify-between px-3">
                      <div className="w-6 h-1.5 bg-slate-800 rounded" />
                      <div className="w-4 h-2.5 bg-slate-300 rounded-sm" />
                    </div>
                    {/* Google Maps review */}
                    <div className="p-2 bg-white">
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                          <MapPin size={10} className="text-white" />
                        </div>
                        <div>
                          <div className="w-10 h-1.5 bg-slate-800 rounded mb-0.5" />
                          <div className="w-7 h-1 bg-slate-300 rounded" />
                        </div>
                      </div>
                      <div className="flex gap-0.5 mb-2 justify-center">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} size={8} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <div className="h-8 bg-slate-50 rounded-lg border border-slate-100 mb-1.5" />
                      <div className="h-5 bg-blue-600 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-1.5 bg-white/70 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Success popup */}
              <motion.div
                style={{ y: popupY, opacity: popupOpacity }}
                className="absolute bottom-0 left-0 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center">
                  <Star size={16} className="fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Avis publié !</div>
                  <div className="text-xs text-slate-500">Il y a 2 secondes</div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
