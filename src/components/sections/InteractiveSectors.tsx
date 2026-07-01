'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sectors } from '@/data/sectors';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { CheckCircle2, ArrowRight, Store } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function InteractiveSectors() {
  const [activeSectorId, setActiveSectorId] = useState(sectors[0].id);
  
  const activeSector = sectors.find(s => s.id === activeSectorId) || sectors[0];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Dynamic Background Glow based on active sector color (Light Theme) */}
      <div className="absolute inset-0 transition-colors duration-1000 ease-in-out z-0 pointer-events-none" style={{
        background: `radial-gradient(circle at 70% 50%, var(--color-${activeSector.color}-500) 0%, transparent 40%)`,
        opacity: 0.05
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Solutions sur mesure"
          title="Des sites adaptés à chaque activité locale"
          subtitle="Restaurant, bar, coiffeur, garage, artisan ou camping : chaque activité mérite une présence en ligne claire, moderne et crédible."
          theme="light"
        />

        <div className="flex flex-col lg:flex-row gap-12 mt-16 max-w-7xl mx-auto">
          
          {/* Left Menu (Tabs) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {sectors.map((sector) => {
              const isActive = activeSectorId === sector.id;
              
              return (
                <button
                  key={sector.id}
                  onClick={() => setActiveSectorId(sector.id)}
                  className={cn(
                    "text-left px-6 py-4 rounded-xl transition-all duration-300 relative overflow-hidden group",
                    isActive 
                      ? "bg-slate-50 border border-slate-200 shadow-sm" 
                      : "bg-transparent border border-transparent hover:bg-slate-50/50"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSectorIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className={cn(
                    "font-heading font-bold text-lg transition-colors",
                    isActive ? "text-navy-950" : "text-slate-500 group-hover:text-slate-700"
                  )}>
                    {sector.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Content (Preview & Features) */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSector.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 flex flex-col h-full"
              >
                {/* Visual Placeholder Area - Safe CSS Mockup (Light Theme) */}
                <div className="relative h-64 md:h-80 w-full overflow-hidden bg-slate-50 flex flex-col border-b border-slate-100">
                  {/* Fake UI Header */}
                  <div className="h-12 border-b border-slate-200 flex items-center px-4 bg-white/50">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400" />
                     </div>
                  </div>
                  
                  {/* Dynamic stylized background instead of fragile Unsplash image */}
                  <div className="flex-1 relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, black 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                    <motion.div 
                      className={`absolute w-[150%] h-[150%] rounded-full bg-${activeSector.color}-500/10 blur-[100px]`}
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <div className={`w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center mb-6`}>
                        <Store className={`text-${activeSector.color}-500`} size={40} />
                      </div>
                      <h3 className="text-3xl font-bold font-heading text-navy-950 mb-2">{activeSector.name}</h3>
                      <p className="text-slate-500 text-sm">Aperçu visuel (Concept)</p>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-white">
                  <div className="mb-8">
                    <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Besoins spécifiques</div>
                    <p className="text-slate-600">{activeSector.needs}</p>
                  </div>

                  <div className="mb-8 flex-grow">
                    <div className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4">Fonctionnalités recommandées</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeSector.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className={`text-${activeSector.color}-500 shrink-0`} size={18} />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <Button href="/contact" className="w-full sm:w-auto group bg-blue-600 hover:bg-blue-700 text-white">
                      Discuter de ce projet
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
