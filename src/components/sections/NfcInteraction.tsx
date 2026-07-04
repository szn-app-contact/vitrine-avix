'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Star, MapPin, Wifi, ArrowRight } from 'lucide-react';
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
      className="py-16 md:py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full">
              <Wifi size={14} />
              Support NFC — avis Google
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-heading leading-tight">
              Un geste simple pour récolter plus facilement des avis authentiques
            </h2>

            <p className="text-lg text-slate-600 mb-5 leading-relaxed">
              Le support NFC est une petite plaque posée dans votre commerce. Quand un client approche son téléphone, votre page d&apos;avis Google s&apos;ouvre automatiquement. Il peut alors laisser un avis plus facilement, sans chercher votre entreprise sur Google.
            </p>

            {/* Comment ça marche — 4 étapes simples */}
            <div className="mb-5 space-y-2">
              <p className="text-sm font-semibold text-slate-700 mb-3">Comment ça fonctionne :</p>
              {[
                'Nous préparons votre lien d\'avis Google.',
                'Nous programmons une plaque NFC avec ce lien.',
                'Vous placez la plaque sur votre comptoir ou votre caisse.',
                'Le client approche son téléphone : la page d\'avis s\'ouvre.',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-600">{step}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-slate-500 mb-6 bg-amber-50 border border-amber-100 rounded-xl p-3">
              Les avis doivent toujours venir de vrais clients satisfaits, laissés librement et sans contrepartie. Nous facilitons l&apos;accès, pas le contenu.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/services/nfc-avis-google">
                Installer une plaque NFC dans mon commerce
                <ArrowRight size={16} />
              </Button>
              <Button href="/offres" variant="outline">
                Voir le Pack Avis Express
              </Button>
            </div>
          </div>

          {/* Right: Interactive Visual */}
          <div className="flex items-center justify-center py-10">
            <div className="relative" style={{ width: 340, height: 420 }}>

              {/* NFC Stand */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  style={{ scale: wave1Scale, opacity: wave1Opacity }}
                  className="absolute inset-0 -m-8 rounded-full border-2 border-blue-400"
                />
                <motion.div
                  style={{ scale: wave2Scale, opacity: wave2Opacity }}
                  className="absolute inset-0 -m-8 rounded-full border border-blue-300"
                />
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

              {/* Phone */}
              <motion.div
                style={{ y: phoneY, opacity: phoneOpacity }}
                className="absolute right-0 top-0"
              >
                <div className="w-28 bg-slate-800 rounded-[2rem] p-1.5 shadow-2xl">
                  <div className="bg-white rounded-[1.5rem] overflow-hidden">
                    <div className="h-5 bg-white flex items-center justify-between px-3">
                      <div className="w-6 h-1.5 bg-slate-800 rounded" />
                      <div className="w-4 h-2.5 bg-slate-300 rounded-sm" />
                    </div>
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
