'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import GlowEffect from '@/components/ui/GlowEffect';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900 z-0" />
      <div className="noise" />
      
      {/* Glow Effects */}
      <GlowEffect color="blue" size="lg" className="top-0 right-0 -translate-y-1/4 translate-x-1/4" />
      <GlowEffect color="cyan" size="lg" className="bottom-0 left-0 translate-y-1/4 -translate-x-1/4" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            Sites vitrines, avis Google et visibilité locale
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white leading-tight mb-8"
        >
          Donnez à votre commerce une présence en ligne qui{' '}
          <span className="gradient-text">inspire confiance.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          AVIX crée des sites vitrines modernes, optimise votre visibilité Google et facilite les avis clients grâce à des supports NFC simples à utiliser.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/contact" size="lg" className="w-full sm:w-auto">
            Demander un devis
            <ArrowRight size={18} />
          </Button>
          <Button href="/offres" variant="secondary" size="lg" className="w-full sm:w-auto">
            Voir nos offres
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-sm font-medium tracking-widest uppercase">Découvrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-blue-500/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
