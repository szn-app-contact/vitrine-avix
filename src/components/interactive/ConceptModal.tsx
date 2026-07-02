'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ArrowRight, CheckCircle2, Palette, Globe,
  Phone, MapPin, MessageSquare, Star,
} from 'lucide-react';
import Button from '@/components/ui/Button';

// ─── Type ────────────────────────────────────────────────────────────────────
export interface ConceptData {
  id: string;
  emoji: string;
  title: string;
  sector: string;
  sectorColor: string;       // hex — couleur du texte secteur
  gradientFrom: string;      // hex — début du dégradé
  gradientTo: string;        // hex — fin du dégradé
  description: string;
  goals: string[];
  features: string[];
  palette: { name: string; hex: string }[];
}

// ─── Mini mockup navigateur dans la modal ────────────────────────────────────
function ConceptBrowser({ concept }: { concept: ConceptData }) {
  const gradient = `linear-gradient(135deg, ${concept.gradientFrom} 0%, ${concept.gradientTo} 100%)`;

  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-200 shadow-lg">
      {/* Barre navigateur */}
      <div className="bg-slate-100 px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1 bg-white rounded-full h-5 text-[10px] text-slate-400 flex items-center px-3">
          votre-{concept.id}.fr (concept)
        </div>
      </div>

      {/* Hero coloré — gradient inline */}
      <div style={{ background: gradient }} className="p-6 text-white">
        <div className="text-3xl mb-3">{concept.emoji}</div>
        <div className="w-2/3 h-4 bg-white/40 rounded-lg mb-2" />
        <div className="w-1/2 h-3 bg-white/25 rounded-lg mb-4" />
        <div className="flex gap-2">
          <div className="h-7 w-20 bg-white rounded-lg" />
          <div className="h-7 w-16 rounded-lg border border-white/40" style={{ background: 'rgba(255,255,255,0.15)' }} />
        </div>
      </div>

      {/* Contenu simulé */}
      <div className="bg-white p-4">
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[Phone, MapPin, MessageSquare].map((Icon, i) => (
            <div key={i} className="bg-slate-50 rounded-xl p-3 flex flex-col items-center gap-1.5 border border-slate-100">
              <Icon size={14} className="text-slate-400" />
              <div className="w-full h-1.5 bg-slate-200 rounded" />
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          <div className="w-full h-2 bg-slate-100 rounded" />
          <div className="w-3/4 h-2 bg-slate-100 rounded" />
        </div>
        {/* Bande avis Google */}
        <div className="mt-4 flex items-center gap-2 bg-slate-50 rounded-xl px-3 py-2 border border-slate-100">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => <Star key={i} size={9} className="fill-amber-400 text-amber-400" />)}
          </div>
          <div className="w-20 h-1.5 bg-slate-200 rounded" />
        </div>
      </div>
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
interface ConceptModalProps {
  isOpen: boolean;
  onClose: () => void;
  concept: ConceptData | null;
}

export default function ConceptModal({ isOpen, onClose, concept }: ConceptModalProps) {
  if (!concept) return null;

  const gradient = `linear-gradient(135deg, ${concept.gradientFrom} 0%, ${concept.gradientTo} 100%)`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(15,23,42,0.65)', backdropFilter: 'blur(4px)' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* En-tête coloré — gradient inline */}
            <div
              style={{ background: gradient }}
              className="p-6 flex items-center justify-between flex-shrink-0"
            >
              <div className="flex items-center gap-3">
                <span className="text-4xl">{concept.emoji}</span>
                <div>
                  <div className="inline-flex items-center text-xs font-bold text-white/80 bg-white/20 px-2.5 py-1 rounded-full mb-1">
                    CONCEPT VISUEL
                  </div>
                  <h2 className="text-xl font-bold text-white">{concept.title}</h2>
                  <p className="text-white/70 text-sm">{concept.sector}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors hover:bg-white/20"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Corps */}
            <div className="overflow-y-auto flex-1">
              <div className="grid md:grid-cols-2">
                {/* Gauche : Mockup + Palette */}
                <div className="p-6 border-b md:border-b-0 md:border-r border-slate-100">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Globe size={13} /> Aperçu du concept
                  </h3>
                  <ConceptBrowser concept={concept} />

                  {/* Palette */}
                  <div className="mt-5">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Palette size={13} /> Palette de couleurs
                    </h3>
                    <div className="flex gap-3 flex-wrap">
                      {concept.palette.map((c) => (
                        <div key={c.hex} className="flex flex-col items-center gap-1.5">
                          <div
                            className="w-10 h-10 rounded-xl shadow-sm border border-slate-200"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span className="text-xs text-slate-500">{c.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Droite : Détails */}
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                      Description
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed">{concept.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                      Objectifs du site
                    </h3>
                    <ul className="space-y-2">
                      {concept.goals.map((g) => (
                        <li key={g} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <div className="w-4 h-4 bg-blue-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          </div>
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                      Fonctionnalités recommandées
                    </h3>
                    <div className="space-y-2">
                      {concept.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2.5 bg-slate-50 rounded-xl px-3 py-2 border border-slate-100"
                        >
                          <CheckCircle2 className="text-emerald-500 shrink-0" size={14} />
                          <span className="text-sm text-slate-700">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pied de modal */}
            <div className="border-t border-slate-100 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 flex-shrink-0">
              <p className="text-xs text-slate-500 max-w-xs">
                Concept visuel uniquement. Votre site sera 100 % personnalisé à votre image.
              </p>
              <div className="flex gap-3 shrink-0">
                <Button variant="ghost" onClick={onClose}>
                  Fermer
                </Button>
                <Button href="/contact">
                  Créer un site similaire
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
