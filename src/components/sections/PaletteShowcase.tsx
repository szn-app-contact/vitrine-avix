'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { palettes } from '@/data/palettes';
import { cn } from '@/lib/utils';
import { Check, ArrowRight, Star } from 'lucide-react';

export default function PaletteShowcase() {
  const [activePaletteId, setActivePaletteId] = useState(palettes[0].id);
  const activePalette = palettes.find(p => p.id === activePaletteId) || palettes[0];

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Design Sur Mesure"
          title="Une identité visuelle adaptée à votre activité"
          subtitle="Chaque commerce a son ambiance. Nous adaptons les couleurs, la mise en page et le style à votre image."
          theme="light"
        />

        <div className="mt-16 max-w-6xl mx-auto grid lg:grid-cols-12 gap-8">
          
          {/* Controls (Left) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {palettes.map((palette) => {
              const isActive = activePaletteId === palette.id;
              return (
                <button
                  key={palette.id}
                  onClick={() => setActivePaletteId(palette.id)}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-xl border transition-all duration-300 group",
                    isActive 
                      ? "bg-white border-blue-200 shadow-md" 
                      : "bg-white/50 border-slate-200 hover:bg-white hover:border-slate-300"
                  )}
                >
                  <div className="flex items-center gap-3">
                    {/* Color Dots */}
                    <div className="flex -space-x-2">
                      {Object.values(palette.colors).slice(0, 3).map((color, i) => (
                        <div 
                          key={i} 
                          className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: color as string }}
                        />
                      ))}
                    </div>
                    <span className={cn("font-medium", isActive ? "text-navy-950" : "text-slate-600")}>
                      {palette.name}
                    </span>
                  </div>
                  {isActive && <Check size={18} className="text-blue-600" />}
                </button>
              );
            })}
          </div>

          {/* Interactive Preview (Right) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePalette.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border shadow-2xl overflow-hidden flex flex-col h-full transition-colors duration-500"
                style={{ 
                  backgroundColor: activePalette.colors.background,
                  borderColor: `${activePalette.colors.primary}33` // 20% opacity border
                }}
              >
                {/* Browser Bar */}
                <div className="h-10 border-b flex items-center px-4 gap-2 transition-colors duration-500" style={{ borderColor: `${activePalette.colors.text}11`, backgroundColor: `${activePalette.colors.text}05` }}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                </div>

                {/* Simulated Website UI */}
                <div className="p-8 flex-1 flex flex-col">
                  {/* Nav */}
                  <div className="flex justify-between items-center mb-12">
                    <div className="w-24 h-6 rounded transition-colors duration-500" style={{ backgroundColor: activePalette.colors.primary }} />
                    <div className="flex gap-4">
                      <div className="w-12 h-2 rounded transition-colors duration-500" style={{ backgroundColor: `${activePalette.colors.text}44` }} />
                      <div className="w-12 h-2 rounded transition-colors duration-500" style={{ backgroundColor: `${activePalette.colors.text}44` }} />
                      <div className="w-12 h-2 rounded transition-colors duration-500" style={{ backgroundColor: `${activePalette.colors.text}44` }} />
                    </div>
                  </div>

                  {/* Hero Content */}
                  <div className="max-w-md">
                    <h3 className="text-3xl font-bold font-heading mb-4 transition-colors duration-500" style={{ color: activePalette.colors.text }}>
                      {activePalette.name}
                    </h3>
                    <p className="mb-8 transition-colors duration-500" style={{ color: `${activePalette.colors.text}CC` }}>
                      {activePalette.description}
                    </p>
                    <div className="flex gap-4">
                      <div className="px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-500 flex items-center gap-2" style={{ backgroundColor: activePalette.colors.primary, color: '#fff' }}>
                        Action Principale <ArrowRight size={16} />
                      </div>
                      <div className="px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-500 border" style={{ borderColor: activePalette.colors.primary, color: activePalette.colors.primary }}>
                        En savoir plus
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements (to show palette depth) */}
                  <div className="mt-auto pt-12 flex gap-4">
                    <div className="p-4 rounded-xl border flex-1 transition-colors duration-500" style={{ backgroundColor: `${activePalette.colors.secondary}22`, borderColor: `${activePalette.colors.secondary}44` }}>
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} style={{ color: activePalette.colors.accent }} className="fill-current" />)}
                      </div>
                      <div className="w-full h-2 rounded mb-2 transition-colors duration-500" style={{ backgroundColor: `${activePalette.colors.text}22` }} />
                      <div className="w-2/3 h-2 rounded transition-colors duration-500" style={{ backgroundColor: `${activePalette.colors.text}22` }} />
                    </div>
                    <div className="p-4 rounded-xl border flex-1 transition-colors duration-500" style={{ backgroundColor: `${activePalette.colors.primary}11`, borderColor: `${activePalette.colors.primary}33` }}>
                      <div className="w-8 h-8 rounded-full mb-3 transition-colors duration-500" style={{ backgroundColor: activePalette.colors.primary }} />
                      <div className="w-full h-2 rounded mb-2 transition-colors duration-500" style={{ backgroundColor: `${activePalette.colors.text}22` }} />
                    </div>
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
