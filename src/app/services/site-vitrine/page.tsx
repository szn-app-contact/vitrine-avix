import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2, ArrowRight, Smartphone, Globe, MapPin, Phone,
  MessageSquare, Layers, Star, Clock, Shield, Zap
} from 'lucide-react';
import Button from '@/components/ui/Button';
import CtaFinal from '@/components/sections/CtaFinal';

export const metadata: Metadata = {
  title: 'Création site vitrine Vendée — AVIX | Sites web pour commerces locaux',
  description:
    'AVIX crée des sites vitrines modernes et professionnels pour les restaurants, garages, coiffeurs, artisans et commerces locaux en Vendée, Loire-Atlantique et Charente-Maritime. Devis gratuit.',
  keywords: [
    'création site vitrine Vendée',
    'site vitrine La Roche-sur-Yon',
    'site vitrine Challans',
    'site vitrine Les Sables-d\'Olonne',
    'site internet commerce local',
    'site web artisan Vendée',
    'création site internet Nantes',
    'création site internet La Rochelle',
    'site web restaurant Vendée',
    'site vitrine garage Vendée',
  ],
  openGraph: {
    title: 'Création site vitrine Vendée — AVIX',
    description: 'Sites vitrines professionnels pour commerces locaux en Vendée et régions voisines.',
    url: 'https://avix-digital.com/services/site-vitrine',
  },
};

const inclus = [
  { icon: Layers, title: 'Design sur mesure', desc: 'Adapté à votre secteur et à votre image de marque' },
  { icon: Smartphone, title: 'Responsive mobile', desc: 'Parfaitement lisible sur téléphone, tablette et ordinateur' },
  { icon: Phone, title: 'Bouton d\'appel direct', desc: 'Vos clients vous appellent en un clic depuis leur téléphone' },
  { icon: MapPin, title: 'Itinéraire Google Maps', desc: 'Un bouton qui ouvre directement l\'itinéraire vers votre commerce' },
  { icon: MessageSquare, title: 'Formulaire de contact', desc: 'Recevez des demandes directement par email' },
  { icon: Globe, title: 'Optimisation SEO de base', desc: 'Structure propre pour être trouvé sur Google' },
  { icon: Star, title: 'Intégration avis Google', desc: 'Lien vers votre page d\'avis pour simplifier le parcours client' },
  { icon: Shield, title: 'Vous gardez tout', desc: 'Vos accès et votre site vous appartiennent. Pas d\'abonnement AVIX.' },
];

const sectors = [
  {
    name: 'Restaurant & Bar',
    desc: 'Menu digital, réservation, horaires, galerie photo et lien avis Google.',
    color: 'amber',
    icon: '🍽️',
  },
  {
    name: 'Garage & Auto',
    desc: 'Liste des prestations, formulaire de devis rapide, bouton d\'appel, zone d\'intervention.',
    color: 'blue',
    icon: '🔧',
  },
  {
    name: 'Salon de coiffure',
    desc: 'Galerie avant/après, prise de rendez-vous, tarifs, présentation de l\'équipe.',
    color: 'pink',
    icon: '✂️',
  },
  {
    name: 'Artisan & BTP',
    desc: 'Portfolio de réalisations, formulaire de devis, zone d\'intervention, certifications.',
    color: 'orange',
    icon: '🏗️',
  },
  {
    name: 'Camping & Hôtel',
    desc: 'Galerie immersive, système de réservation, activités, carte interactive.',
    color: 'emerald',
    icon: '⛺',
  },
  {
    name: 'Commerce & Boutique',
    desc: 'Catalogue produits, horaires, localisation, promotions, lien réseaux sociaux.',
    color: 'purple',
    icon: '🛍️',
  },
];

const process = [
  { step: 1, title: 'Échange initial', desc: 'On discute de votre activité, vos besoins et vos attentes en 30 min.' },
  { step: 2, title: 'Proposition & devis', desc: 'Vous recevez une proposition claire et un devis détaillé sous 48h.' },
  { step: 3, title: 'Création du site', desc: 'Nous créons votre site en 1 à 2 semaines selon la complexité.' },
  { step: 4, title: 'Livraison & prise en main', desc: 'Mise en ligne + formation simple. Vous gardez tous vos accès.' },
];

const faq = [
  {
    q: 'Combien de temps pour créer un site vitrine ?',
    a: 'Généralement entre 1 et 2 semaines. Pour un site one-page, cela peut aller plus vite. Pour un site avec plusieurs sections, compter 2 semaines.',
  },
  {
    q: 'Est-ce que je serai propriétaire de mon site ?',
    a: 'Oui, absolument. Vous gardez tous vos accès (hébergement, nom de domaine, code). Pas d\'abonnement mensuel imposé par AVIX.',
  },
  {
    q: 'Est-ce que le site sera optimisé pour Google ?',
    a: 'Oui, une optimisation SEO de base est incluse : structure propre, balises correctes, performance mobile. Pour un référencement avancé, des prestations complémentaires existent.',
  },
  {
    q: 'Et si je veux modifier mon site après la livraison ?',
    a: 'Nous vous formons à faire des modifications simples. Pour des changements plus importants, nous proposons un suivi à la demande.',
  },
];

// --- CSS Mockup Desktop ---
function MockupDesktop() {
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Browser frame */}
      <div className="bg-slate-200 rounded-t-xl px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1 bg-white rounded-full h-5 text-xs text-slate-400 flex items-center px-3">
          votre-commerce.fr
        </div>
      </div>
      <div className="bg-white rounded-b-xl border-2 border-t-0 border-slate-200 overflow-hidden shadow-2xl">
        {/* Fake nav */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-slate-100">
          <div className="w-16 h-4 bg-blue-600 rounded-md" />
          <div className="flex gap-4">
            <div className="w-10 h-2 bg-slate-200 rounded" />
            <div className="w-10 h-2 bg-slate-200 rounded" />
            <div className="w-10 h-2 bg-slate-200 rounded" />
          </div>
          <div className="w-20 h-6 bg-blue-600 rounded-lg" />
        </div>
        {/* Hero */}
        <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
          <div className="w-2/3 h-6 bg-white/30 rounded-lg mb-3" />
          <div className="w-1/2 h-4 bg-white/20 rounded mb-6" />
          <div className="flex gap-3">
            <div className="h-8 w-28 bg-white rounded-lg" />
            <div className="h-8 w-24 bg-white/20 border border-white/40 rounded-lg" />
          </div>
        </div>
        {/* Services */}
        <div className="p-6 grid grid-cols-3 gap-3">
          {[1,2,3].map(i => (
            <div key={i} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
              <div className="w-6 h-6 bg-blue-100 rounded-lg mb-2" />
              <div className="w-full h-2 bg-slate-200 rounded mb-1.5" />
              <div className="w-2/3 h-2 bg-slate-100 rounded" />
            </div>
          ))}
        </div>
        {/* CTA bar */}
        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
          <div className="w-1/3 h-3 bg-white/20 rounded" />
          <div className="w-20 h-7 bg-blue-500 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

// --- CSS Mockup Mobile ---
function MockupMobile() {
  return (
    <div className="w-40 mx-auto">
      <div className="bg-slate-800 rounded-[2rem] p-2 shadow-2xl">
        <div className="bg-white rounded-[1.5rem] overflow-hidden">
          {/* Status bar */}
          <div className="bg-white h-6 flex items-center justify-between px-4">
            <div className="w-8 h-1.5 bg-slate-800 rounded" />
            <div className="w-6 h-3 bg-slate-800 rounded-sm" />
          </div>
          {/* Hero mobile */}
          <div className="bg-blue-600 p-3">
            <div className="w-3/4 h-3 bg-white/50 rounded mb-2" />
            <div className="w-1/2 h-2 bg-white/30 rounded mb-3" />
            <div className="w-full h-6 bg-white rounded-lg" />
          </div>
          {/* Content */}
          <div className="p-3 space-y-2">
            {[1,2,3].map(i => (
              <div key={i} className="flex items-center gap-2 bg-slate-50 rounded-lg p-2">
                <div className="w-5 h-5 bg-blue-100 rounded" />
                <div className="w-2/3 h-2 bg-slate-200 rounded" />
              </div>
            ))}
          </div>
          {/* CTA fixed */}
          <div className="bg-blue-600 mx-2 mb-2 rounded-xl h-8 flex items-center justify-center">
            <div className="w-16 h-2 bg-white/70 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SiteVitrineService() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/3 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-6"
              >
                ← Retour aux services
              </Link>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full">
                <Globe size={14} />
                Création de site vitrine
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 font-heading leading-tight">
                Un site web qui représente vraiment votre activité
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                AVIX crée des sites vitrines professionnels, modernes et adaptés à votre secteur — pour les restaurants, garages, artisans et commerces locaux en Vendée et ses environs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Demander un devis gratuit
                  <ArrowRight size={18} />
                </Button>
                <Button href="/offres" variant="outline" size="lg">
                  Voir nos tarifs
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-6 text-sm text-slate-500">
                <CheckCircle2 size={16} className="text-emerald-500" />
                Pas d&apos;abonnement mensuel — vous gardez votre site
              </div>
            </div>
            {/* Mockups côte à côte */}
            <div className="relative hidden lg:flex items-end gap-6 justify-center">
              <div className="flex-1">
                <MockupDesktop />
              </div>
              <div className="shrink-0 mb-4">
                <MockupMobile />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              Tout ce que comprend votre site vitrine
            </h2>
            <p className="text-slate-600">
              Chaque site est conçu pour être immédiatement utilisable et orienté vers vos clients locaux.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inclus.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              Adapté à chaque type de commerce
            </h2>
            <p className="text-slate-600">
              Chaque site est pensé selon les besoins spécifiques de votre activité. Pas de template générique.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{sector.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{sector.name}</h3>
                <p className="text-sm text-slate-600">{sector.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-slate-500 text-sm mb-4">Votre secteur n&apos;est pas listé ? Contactez-nous quand même.</p>
            <Button href="/contact" variant="outline">
              Discuter de mon projet spécifique
            </Button>
          </div>
        </div>
      </section>

      {/* Notre processus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              Comment ça se passe ?
            </h2>
            <p className="text-slate-600">Un processus simple, sans surprise ni jargon technique.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {process.map((step) => (
              <div key={step.step} className="flex items-start gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0 text-sm">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarif */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-sm font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full">
                <Zap size={14} />
                Offre recommandée
              </div>
              <h2 className="text-3xl font-bold mb-4 font-heading">Pack Visibilité Locale</h2>
              <p className="text-slate-300 mb-6">
                Le pack complet : site vitrine + fiche Google optimisée + support NFC avis.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Site one-page professionnel et responsive',
                  'Bouton appel + itinéraire + formulaire contact',
                  'Optimisation fiche Google Business Profile',
                  'Support NFC avis Google inclus',
                  'Pas d\'abonnement mensuel imposé',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={18} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
              <div className="text-5xl font-bold text-white mb-1">790 €</div>
              <div className="text-slate-400 line-through text-lg mb-2">990 € – 1 200 €</div>
              <div className="text-emerald-400 text-sm font-medium mb-6">Prix de lancement</div>
              <Button href="/contact" className="w-full justify-center mb-3">
                Demander un devis
                <ArrowRight size={18} />
              </Button>
              <p className="text-xs text-slate-400">
                Paiement unique — aucun abonnement AVIX
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center font-heading">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <div key={item.q} className="border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal />
    </div>
  );
}
