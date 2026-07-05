import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactForm from '@/components/sections/ContactForm';
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/site';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Contact — AVIX | Devis gratuit site vitrine Vendée',
  description:
    'Contactez AVIX pour discuter de votre projet web. Création de site vitrine, optimisation fiche Google ou support NFC en Vendée, Loire-Atlantique, Charente-Maritime. Réponse sous 48h.',
  openGraph: {
    title: 'Contact — AVIX | Demandez votre devis gratuit',
    description: 'Contactez AVIX pour votre projet de site vitrine ou de visibilité locale en Vendée.',
    url: 'https://avix-digital.com/contact',
  },
};

const raisons = [
  'Vous n\'avez pas de site web ou il est daté',
  'Votre fiche Google est incomplète ou incorrecte',
  'Vos clients ne pensent pas à laisser des avis',
  'Vous voulez améliorer votre image en ligne',
  'Vous voulez savoir ce qu\'on peut faire pour vous',
];

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full">
            <Clock size={14} />
            Réponse sous 24 à 48h
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-heading">
            Parlons de votre projet
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Que vous soyez restaurant, garage, artisan ou commerce local — décrivez-nous votre situation et nous revenons vers vous rapidement avec nos recommandations.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">

            {/* Left — Infos & Raisons */}
            <div className="lg:col-span-2 space-y-8">
              {/* Coordonnées */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-5">Nos coordonnées</h2>
                <div className="space-y-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition-colors">
                      <Mail className="text-blue-600" size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 mb-0.5 uppercase tracking-wide">Email</div>
                      <div className="text-sm font-medium text-slate-800 break-all">{siteConfig.email}</div>
                    </div>
                  </a>

                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors">
                      <Phone className="text-emerald-600" size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 mb-0.5 uppercase tracking-wide">Téléphone</div>
                      <div className="text-sm font-medium text-slate-800">{siteConfig.phoneDisplay}</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                      <MapPin className="text-amber-600" size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wide">Zone d&apos;intervention</div>
                      <div className="text-sm text-slate-700">
                        Vendée, Loire-Atlantique,<br />
                        Charente-Maritime, Maine-et-Loire
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Raisons de contact */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Pourquoi nous contacter ?</h3>
                <ul className="space-y-3">
                  {raisons.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-slate-700">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Offres rapides */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <h3 className="text-sm font-bold text-slate-900 mb-3">Nos offres de départ</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-700">Pack Avis Express</span>
                    <span className="text-sm font-bold text-blue-600">149 €</span>
                  </div>
                  <div className="h-px bg-blue-100" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-700">Pack Visibilité Locale</span>
                    <span className="text-sm font-bold text-blue-600">790 €</span>
                  </div>
                </div>
                <Button href="/offres" variant="outline" size="sm" className="w-full mt-4 justify-center">
                  Voir le détail des offres
                </Button>
              </div>
            </div>

            {/* Right — Formulaire */}
            <div className="lg:col-span-3">
              <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-100/80">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Envoyez votre demande</h2>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
