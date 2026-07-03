'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Button from '@/components/ui/Button';

// ─── Schéma Zod (miroir du schéma serveur) ───────────────────────────────────
const schema = z.object({
  name: z.string().min(2, 'Veuillez indiquer votre nom.'),
  businessName: z.string().optional(),
  email: z.email('Adresse email invalide.'),
  phone: z.string().optional(),
  city: z.string().optional(),
  projectType: z.string().min(1, 'Veuillez choisir un type de projet.'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Le message doit faire au moins 10 caractères.'),
  _hp: z.string().optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

// ─── Styles ───────────────────────────────────────────────────────────────────
const inputBase =
  'w-full bg-navy-950/50 border rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 transition-colors';
const inputOk = `${inputBase} border-white/10 focus:border-blue-500 focus:ring-blue-500`;
const inputErr = `${inputBase} border-red-500/60 focus:border-red-500 focus:ring-red-500`;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="text-xs text-red-400 mt-1 flex items-center gap-1.5">
      <AlertCircle size={12} />
      {message}
    </p>
  );
}

// ─── Composant ────────────────────────────────────────────────────────────────
export default function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      businessName: '',
      email: '',
      phone: '',
      city: '',
      projectType: '',
      budget: '',
      message: '',
      _hp: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const json = await res.json();

      if (!res.ok || json.error) {
        setServerError(
          json.error ||
            'Une erreur est survenue. Vous pouvez aussi nous écrire directement à avix.digital.contact@gmail.com.'
        );
        return;
      }

      reset();
      setSubmitted(true);
    } catch {
      setServerError(
        'Une erreur est survenue. Vous pouvez aussi nous écrire directement à avix.digital.contact@gmail.com.'
      );
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setServerError(null);
    reset();
  };

  return (
    <div className="bg-navy-900/50 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Glow décoratif */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

      <AnimatePresence mode="wait">
        {submitted ? (
          /* ── Succès ── */
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
              Merci, votre demande a bien été envoyée. Nous revenons vers vous sous 24 à 48h.
            </p>
            <Button className="mt-8" onClick={handleReset} variant="outline">
              Envoyer un autre message
            </Button>
          </motion.div>
        ) : (
          /* ── Formulaire ── */
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-6 relative z-10"
          >
            {/* Honeypot (invisible) */}
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0 }}
            >
              <input tabIndex={-1} autoComplete="off" {...register('_hp')} />
            </div>

            {/* Nom + Entreprise */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Nom &amp; Prénom <span className="text-blue-400">*</span>
                </label>
                <input
                  id="nom"
                  type="text"
                  placeholder="Jean Dupont"
                  className={errors.name ? inputErr : inputOk}
                  {...register('name')}
                />
                <FieldError message={errors.name?.message} />
              </div>
              <div>
                <label htmlFor="entreprise" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Entreprise / Commerce
                </label>
                <input
                  id="entreprise"
                  type="text"
                  placeholder="Le Relais Vendéen"
                  className={inputOk}
                  {...register('businessName')}
                />
              </div>
            </div>

            {/* Email + Téléphone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Email <span className="text-blue-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jean@exemple.com"
                  className={errors.email ? inputErr : inputOk}
                  {...register('email')}
                />
                <FieldError message={errors.email?.message} />
              </div>
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Téléphone
                </label>
                <input
                  id="telephone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  className={inputOk}
                  {...register('phone')}
                />
              </div>
            </div>

            {/* Ville + Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="ville" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Ville / Commune
                </label>
                <input
                  id="ville"
                  type="text"
                  placeholder="La Roche-sur-Yon"
                  className={inputOk}
                  {...register('city')}
                />
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Budget approximatif
                </label>
                <select
                  id="budget"
                  className={`${inputOk} appearance-none`}
                  {...register('budget')}
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="Moins de 500€">Moins de 500€</option>
                  <option value="500€ - 1000€">500€ - 1000€</option>
                  <option value="1000€ - 2000€">1000€ - 2000€</option>
                  <option value="Plus de 2000€">Plus de 2000€</option>
                </select>
              </div>
            </div>

            {/* Type de projet */}
            <div>
              <label htmlFor="projet" className="block text-sm font-medium text-slate-300 mb-1.5">
                Type de projet <span className="text-blue-400">*</span>
              </label>
              <select
                id="projet"
                className={`${errors.projectType ? inputErr : inputOk} appearance-none`}
                {...register('projectType')}
              >
                <option value="">Que recherchez-vous ?</option>
                <option value="Pack Avis Express">Pack Avis Express (149€)</option>
                <option value="Site vitrine">Site vitrine (Pack Visibilité Locale)</option>
                <option value="Optimisation fiche Google">Optimisation fiche Google seule</option>
                <option value="Refonte de site">Refonte d&apos;un site existant</option>
                <option value="Autre demande">Autre demande</option>
              </select>
              <FieldError message={errors.projectType?.message} />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                Votre message <span className="text-blue-400">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Décrivez brièvement votre activité et vos besoins..."
                className={`${errors.message ? inputErr : inputOk} resize-none`}
                {...register('message')}
              />
              <FieldError message={errors.message?.message} />
            </div>

            {/* Erreur serveur */}
            {serverError && (
              <div className="flex items-start gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{serverError}</span>
              </div>
            )}

            {/* Bouton */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2 justify-center">
                  <Loader2 size={16} className="animate-spin" />
                  Envoi en cours...
                </span>
              ) : (
                'Envoyer ma demande'
              )}
            </Button>

            <p className="text-center text-xs text-slate-500 mt-4">
              En soumettant ce formulaire, vous acceptez d&apos;être recontacté par AVIX. Aucune donnée ne sera partagée.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
