'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

const schema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  company: z.string().optional(),
  city: z.string().optional(),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().optional(),
  projectType: z.string().min(1, 'Veuillez sélectionner un type de projet'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

type FormData = z.infer<typeof schema>;

const projectTypes = [
  'Pack Avis Express (149 €)',
  'Pack Visibilité Locale (790 €)',
  'Création de site vitrine',
  'Refonte de site existant',
  'Optimisation fiche Google',
  'Supports NFC avis Google',
  'Autre demande / Conseil',
];

const budgets = [
  'Moins de 200 €',
  '200 € – 500 €',
  '500 € – 1 000 €',
  '1 000 € – 2 000 €',
  'Plus de 2 000 €',
  'Je ne sais pas encore',
];

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { projectType: '' },
  });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
        setErrorMessage(json.error || 'Une erreur est survenue.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Impossible d\'envoyer le message. Vérifiez votre connexion.');
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full bg-white border rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
      hasError
        ? 'border-red-400 focus:ring-red-300 focus:border-red-400'
        : 'border-slate-200 focus:ring-blue-300 focus:border-blue-500'
    }`;

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-10 text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="text-emerald-500" size={40} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Message envoyé !</h3>
        <p className="text-slate-600 mb-2">
          Merci pour votre demande. Nous revenons vers vous sous <strong>24 à 48h</strong>.
        </p>
        <p className="text-sm text-slate-500 mb-8">
          Un email de confirmation vous a été envoyé à votre adresse.
        </p>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Erreur globale */}
      {status === 'error' && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
          <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={18} />
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
            Nom & Prénom <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className={inputClass(!!errors.name)}
            placeholder="Jean Dupont"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
            Nom de l&apos;établissement
          </label>
          <input
            id="company"
            type="text"
            {...register('company')}
            className={inputClass(false)}
            placeholder="Restaurant Le Central"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={inputClass(!!errors.email)}
            placeholder="jean@monrestaurant.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className={inputClass(false)}
            placeholder="06 12 34 56 78"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1.5">
            Ville / Commune
          </label>
          <input
            id="city"
            type="text"
            {...register('city')}
            className={inputClass(false)}
            placeholder="Challans, La Roche-sur-Yon..."
          />
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-1.5">
            Type de projet <span className="text-red-500">*</span>
          </label>
          <select
            id="projectType"
            {...register('projectType')}
            className={inputClass(!!errors.projectType) + ' appearance-none'}
          >
            <option value="">Sélectionner...</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.projectType && (
            <p className="mt-1 text-xs text-red-500">{errors.projectType.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1.5">
          Budget approximatif
        </label>
        <select
          id="budget"
          {...register('budget')}
          className={inputClass(false) + ' appearance-none'}
        >
          <option value="">Sélectionner (optionnel)...</option>
          {budgets.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Votre message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={inputClass(!!errors.message) + ' resize-none'}
          placeholder="Décrivez brièvement votre activité et ce que vous souhaitez améliorer..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          disabled={status === 'loading'}
          className="w-full justify-center py-4 text-base"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              Envoyer ma demande
              <Send size={18} />
            </>
          )}
        </Button>
        <p className="text-xs text-center text-slate-500 mt-3 px-4">
          * Les informations recueillies sont nécessaires pour traiter votre demande. Elles restent strictement confidentielles et ne seront jamais cédées à des tiers, conformément au RGPD.
        </p>
      </div>
    </form>
  );
}
