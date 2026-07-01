'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Check, Palette } from 'lucide-react';
import Button from '@/components/ui/Button';

interface ConceptData {
  id: string;
  title: string;
  sector: string;
  description: string;
  color: string;
  features: string[];
  goals: string[];
}

interface ConceptModalProps {
  isOpen: boolean;
  onClose: () => void;
  concept: ConceptData | null;
}

export default function ConceptModal({ isOpen, onClose, concept }: ConceptModalProps) {
  if (!isOpen || !concept) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/40 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-500 hover:text-navy-950 hover:bg-slate-100 transition-colors shadow-sm"
          >
            <X size={20} />
          </button>

          {/* Left Visual Area */}
          <div className={`w-full md:w-2/5 bg-${concept.color}-50 p-8 flex flex-col relative overflow-hidden`}>
            <div className={`absolute -top-20 -left-20 w-64 h-64 bg-${concept.color}-200/50 rounded-full blur-[60px]`} />
            
            <div className="relative z-10 mt-auto">
               <div className={`inline-block px-3 py-1 bg-white border border-${concept.color}-200 text-${concept.color}-700 text-xs font-bold rounded-full mb-4 shadow-sm`}>
                 CONCEPT
               </div>
               <h2 className="text-3xl font-bold font-heading text-navy-950 mb-2">{concept.title}</h2>
               <p className="text-slate-600 mb-8">{concept.sector}</p>
               
               <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white shadow-sm">
                 <h4 className="text-sm font-bold text-navy-950 mb-3 flex items-center gap-2">
                   <Palette size={16} className={`text-${concept.color}-500`} />
                   Ambiance Graphique
                 </h4>
                 <p className="text-sm text-slate-600">{concept.description}</p>
               </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="w-full md:w-3/5 p-8 md:p-10 overflow-y-auto">
            
            <div className="mb-8">
              <h3 className="text-lg font-bold text-navy-950 mb-4">Objectifs du site</h3>
              <ul className="space-y-3">
                {concept.goals.map((goal, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`mt-1 w-5 h-5 rounded-full bg-${concept.color}-100 flex items-center justify-center shrink-0`}>
                      <div className={`w-2 h-2 rounded-full bg-${concept.color}-500`} />
                    </div>
                    <span className="text-slate-700">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="text-lg font-bold text-navy-950 mb-4">Fonctionnalités incluses</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {concept.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <Check size={16} className="text-emerald-500 shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <p className="text-xs text-slate-400 max-w-xs">
                Ceci est une direction visuelle. Votre site final sera 100% personnalisé à votre image.
              </p>
              <Button href="/contact" className="w-full sm:w-auto">
                Demander ce style <ExternalLink size={16} className="ml-2" />
              </Button>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
