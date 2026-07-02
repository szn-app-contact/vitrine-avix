'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight, CheckCircle2, MapPin, Smartphone, Store,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/interactive/FadeIn';

// CSS Mockup: stylized "website preview"
function WebsiteMockup() {
  return (
    <div className="w-full max-w-sm">
      {/* Browser chrome */}
      <div className="bg-slate-200 rounded-t-2xl px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1 bg-white/80 rounded-full h-4 text-[10px] text-slate-400 flex items-center px-2">
          votre-commerce.fr
        </div>
      </div>
      {/* Site content */}
      <div className="rounded-b-2xl border-2 border-t-0 border-slate-200 overflow-hidden shadow-2xl shadow-slate-200/60">
        {/* Hero gradient */}
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 p-6">
          <div className="w-8 h-8 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
            <Store size={18} className="text-white" />
          </div>
          <div className="w-3/4 h-5 bg-white/50 rounded-lg mb-2" />
          <div className="w-1/2 h-3 bg-white/30 rounded-lg mb-5" />
          <div className="flex gap-2">
            <div className="h-8 w-24 bg-white rounded-xl" />
            <div className="h-8 w-20 bg-white/20 border border-white/40 rounded-xl" />
          </div>
        </div>
        {/* Services section */}
        <div className="bg-white p-4">
          <div className="w-32 h-3 bg-slate-200 rounded mb-4 mx-auto" />
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3].map(i => (
              <div key={i} className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex flex-col items-center gap-1.5">
                <div className="w-6 h-6 bg-blue-100 rounded-lg" />
                <div className="w-full h-2 bg-slate-200 rounded" />
              </div>
            ))}
          </div>
        </div>
        {/* Contact bar */}
        <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <MapPin size={12} className="text-blue-400" />
            <div className="w-24 h-2 bg-white/30 rounded" />
          </div>
          <div className="w-16 h-6 bg-blue-500 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

// CSS Mockup: Google Business Profile mini card
function GoogleProfileMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 w-64">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
          <Store className="text-slate-400" size={20} />
        </div>
        <div>
          <div className="font-bold text-slate-900 text-sm mb-1">Votre Commerce</div>
          <div className="flex gap-0.5 mb-1">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="w-3 h-3 bg-amber-400 rounded-sm" />
            ))}
          </div>
          <div className="text-xs text-slate-500">Ouvert ⋅ Ferme à 19h00</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        <div className="bg-blue-50 border border-blue-100 text-blue-700 rounded-xl py-1.5 text-center text-xs font-medium">
          Itinéraire
        </div>
        <div className="bg-slate-50 border border-slate-100 text-slate-600 rounded-xl py-1.5 text-center text-xs font-medium">
          Appeler
        </div>
        <div className="bg-slate-50 border border-slate-100 text-slate-600 rounded-xl py-1.5 text-center text-xs font-medium">
          Avis
        </div>
      </div>
    </div>
  );
}

// CSS Mockup: NFC Mobile card
function NfcMobileMockup() {
  return (
    <div className="flex items-center gap-4">
      <div className="w-24 bg-slate-800 rounded-[1.5rem] p-1.5 shadow-xl">
        <div className="bg-white rounded-[1.2rem] overflow-hidden">
          <div className="h-4 bg-slate-100" />
          <div className="p-2">
            <div className="w-full h-1.5 bg-slate-800 rounded mb-1" />
            <div className="w-3/4 h-1 bg-slate-300 rounded mb-2" />
            <div className="h-5 bg-blue-600 rounded-lg" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {[1,2,3].map(i => (
          <div key={i} className="border-r-2 border-t-2 border-blue-400 rounded-tr-full opacity-70"
            style={{ width: i * 10, height: i * 10 }} />
        ))}
      </div>
      <div className="w-16 h-20 bg-gradient-to-b from-blue-700 to-blue-900 rounded-xl shadow-lg flex flex-col items-center justify-center gap-1.5">
        <div className="text-white font-bold text-xs">AVIX</div>
        <Smartphone size={16} className="text-white/60" />
      </div>
    </div>
  );
}

const benefits = [
  { label: 'Site professionnel', desc: 'Conçu pour rassurer et convertir vos visiteurs locaux' },
  { label: 'Visible sur Google', desc: 'Fiche Business Profile optimisée et cohérente avec votre site' },
  { label: 'Avis facilités', desc: 'Support NFC pour simplifier le parcours client' },
  { label: 'Sans abonnement', desc: 'Paiement unique — vous gardez votre site et vos accès' },
];

export default function HeroImmersive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left: Content */}
          <div>
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                </span>
                Agence web locale — Vendée & régions voisines
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-heading leading-[1.1] mb-6">
                Votre commerce mérite une présence en ligne{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                  qui inspire confiance.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                AVIX crée des sites vitrines professionnels, optimise votre fiche Google et facilite les avis clients grâce à des supports NFC — pour les commerces locaux en Vendée et ses environs.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button href="/contact" size="lg">
                  Demander un devis gratuit
                  <ArrowRight size={18} />
                </Button>
                <Button href="/offres" variant="outline" size="lg">
                  Voir nos offres
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <div key={b.label} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <div className="text-sm font-semibold text-slate-800">{b.label}</div>
                      <div className="text-xs text-slate-500">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: Visual Composite */}
          <motion.div style={{ y: parallaxY }} className="hidden lg:block">
            <div className="relative h-[560px] flex items-center justify-center">

              {/* Main: Website Mockup */}
              <div className="absolute top-0 right-0 left-0">
                <WebsiteMockup />
              </div>

              {/* Floating: Google profile card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-20 -left-8 drop-shadow-2xl"
              >
                <GoogleProfileMockup />
              </motion.div>

              {/* Floating: NFC visual */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute bottom-0 right-0 bg-white rounded-2xl border border-slate-200 p-4 shadow-xl"
              >
                <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">
                  Support NFC inclus
                </p>
                <NfcMobileMockup />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
