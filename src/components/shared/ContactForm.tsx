'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    // TODO: Connecter ici votre API d'envoi d'email (Resend, EmailJS, Formspree, Supabase...)
    // Exemple : await fetch('/api/contact', { method: 'POST', body: new FormData(e.currentTarget) });
    
    // Simulation pour l'instant
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-navy-900/50 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-16"
          >
            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="text-emerald-400" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
            <p className="text-slate-400 max-w-sm">
              Nous avons bien reçu votre demande. Nous vous recontacterons sous 24h ouvrées pour discuter de votre projet.
            </p>
            <Button 
              className="mt-8" 
              onClick={() => setStatus('idle')}
              variant="outline"
            >
              Envoyer un autre message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6 relative z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="nom" className="text-sm font-medium text-slate-300">Nom & Prénom <span className="text-blue-400">*</span></label>
                <input required type="text" id="nom" name="nom" className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Jean Dupont" />
              </div>
              <div className="space-y-2">
                <label htmlFor="entreprise" className="text-sm font-medium text-slate-300">Entreprise / Commerce</label>
                <input type="text" id="entreprise" name="entreprise" className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Le Relais Vendéen" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email <span className="text-blue-400">*</span></label>
                <input required type="email" id="email" name="email" className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="jean@exemple.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="telephone" className="text-sm font-medium text-slate-300">Téléphone <span className="text-blue-400">*</span></label>
                <input required type="tel" id="telephone" name="telephone" className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="06 12 34 56 78" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="ville" className="text-sm font-medium text-slate-300">Ville <span className="text-blue-400">*</span></label>
                <input required type="text" id="ville" name="ville" className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="La Roche-sur-Yon" />
              </div>
              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium text-slate-300">Budget approximatif</label>
                <select id="budget" name="budget" className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none">
                  <option value="">Sélectionnez une option</option>
                  <option value="Moins de 500€">Moins de 500€</option>
                  <option value="500€ - 1000€">500€ - 1000€</option>
                  <option value="1000€ - 2000€">1000€ - 2000€</option>
                  <option value="Plus de 2000€">Plus de 2000€</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="projet" className="text-sm font-medium text-slate-300">Type de projet <span className="text-blue-400">*</span></label>
              <select required id="projet" name="projet" className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none">
                <option value="">Que recherchez-vous ?</option>
                <option value="Pack Avis Express">Pack Avis Express (149€)</option>
                <option value="Site vitrine">Site vitrine (Pack Visibilité Locale)</option>
                <option value="Optimisation fiche Google">Optimisation fiche Google seule</option>
                <option value="Refonte de site">Refonte d'un site existant</option>
                <option value="Autre demande">Autre demande</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Votre message <span className="text-blue-400">*</span></label>
              <textarea required id="message" name="message" rows={4} className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none" placeholder="Décrivez brièvement votre activité et vos besoins..."></textarea>
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg">
                <AlertCircle size={16} />
                Une erreur est survenue lors de l'envoi. Veuillez réessayer.
              </div>
            )}

            <Button 
              type="submit" 
              disabled={status === 'loading'} 
              className="w-full shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              {status === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </Button>
            
            <p className="text-center text-xs text-slate-500 mt-4">
              En soumettant ce formulaire, vous acceptez d'être recontacté par AVIX. Aucune donnée ne sera partagée.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
