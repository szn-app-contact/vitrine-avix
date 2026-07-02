import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2, ArrowRight, Smartphone, MapPin, Star,
  Wifi, Shield, AlertCircle, Zap
} from 'lucide-react';
import Button from '@/components/ui/Button';
import CtaFinal from '@/components/sections/CtaFinal';

export const metadata: Metadata = {
  title: 'Support NFC avis Google — AVIX | Facilitez les avis de vos clients',
  description:
    'Le support NFC AVIX permet à vos clients satisfaits de laisser un avis Google en approchant simplement leur téléphone. Installation sur place, configuration incluse. Vendée et régions voisines.',
  keywords: [
    'support NFC avis Google',
    'avis Google commerce local',
    'faciliter avis Google',
    'NFC plaque avis Google',
    'obtenir avis Google restaurant',
    'avis Google artisan Vendée',
    'support NFC Vendée',
  ],
  openGraph: {
    title: 'Supports NFC avis Google — AVIX',
    description: 'Facilitez les avis Google de vos vrais clients avec un support NFC simple à utiliser.',
    url: 'https://avix-digital.com/services/nfc-avis-google',
  },
};

const steps = [
  {
    num: 1,
    icon: '📍',
    title: 'Installation sur place',
    desc: 'Nous venons installer et programmer votre support NFC directement dans votre établissement. Configuration et test inclus.',
  },
  {
    num: 2,
    icon: '📱',
    title: 'Le client approche son téléphone',
    desc: 'Compatible avec 98% des smartphones modernes (iPhone et Android). Aucune application à télécharger.',
  },
  {
    num: 3,
    icon: '🌐',
    title: 'La page d\'avis s\'ouvre directement',
    desc: 'Le téléphone ouvre instantanément la page d\'avis Google de votre établissement. Rien à rechercher.',
  },
  {
    num: 4,
    icon: '⭐',
    title: 'Le client laisse son avis',
    desc: 'En moins de 30 secondes, votre client peut laisser un avis authentique depuis son compte Google.',
  },
];

const inclus = [
  'Programmation du support NFC à votre lien d\'avis Google',
  'Récupération et configuration du lien d\'avis Google',
  'Optimisation de votre fiche Google Business Profile',
  'Installation et test sur place dans votre établissement',
  'Amélioration des informations : horaires, description, photos, services',
  'Conseils pour demander des avis de façon naturelle et éthique',
];

const faq = [
  {
    q: 'Est-ce que ça fonctionne avec tous les téléphones ?',
    a: 'Oui, la technologie NFC est intégrée dans la quasi-totalité des smartphones depuis 2019 (iPhone 7+, Android 4.4+). Aucune application à installer.',
  },
  {
    q: 'Est-ce que vous garantissez des avis 5 étoiles ?',
    a: 'Non. Les avis doivent toujours provenir de vrais clients et être laissés librement, sans aucune contrepartie. Nous facilitons l\'accès à la page d\'avis, pas le contenu.',
  },
  {
    q: 'Combien d\'avis vais-je avoir ?',
    a: 'Nous ne promettons pas un nombre d\'avis. Le NFC réduit la friction pour les clients satisfaits qui veulent vous soutenir mais n\'ont pas le temps de rechercher. L\'objectif est de simplifier leur démarche.',
  },
  {
    q: 'Où placer le support NFC ?',
    a: 'À la caisse, sur les tables, à l\'entrée ou à la sortie — selon votre activité. Nous vous conseillons sur l\'emplacement optimal lors de l\'installation.',
  },
  {
    q: 'Qu\'est-ce qui se passe si je veux changer de lien d\'avis ?',
    a: 'Nous pouvons reconfigurer le support NFC à distance gratuitement si votre lien Google change.',
  },
];

// NFC Visual CSS Component
function NfcVisual() {
  return (
    <div className="relative flex items-center justify-center gap-8 py-8">
      {/* Phone */}
      <div className="relative">
        <div className="w-32 bg-slate-800 rounded-[2rem] p-2 shadow-2xl">
          <div className="bg-white rounded-[1.5rem] overflow-hidden">
            <div className="bg-slate-100 h-5 flex items-center justify-center">
              <div className="w-8 h-1.5 bg-slate-300 rounded" />
            </div>
            <div className="p-3 bg-white">
              {/* Google Maps-like review screen */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <MapPin size={12} className="text-white" />
                </div>
                <div>
                  <div className="w-12 h-1.5 bg-slate-800 rounded mb-1" />
                  <div className="w-8 h-1 bg-slate-300 rounded" />
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={10} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="space-y-1 mb-3">
                <div className="w-full h-1.5 bg-slate-100 rounded" />
                <div className="w-3/4 h-1.5 bg-slate-100 rounded" />
              </div>
              <div className="bg-blue-600 rounded-lg h-6 flex items-center justify-center">
                <div className="w-10 h-1.5 bg-white/70 rounded" />
              </div>
            </div>
          </div>
        </div>
        {/* NFC waves */}
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
          {[1,2,3].map(i => (
            <div
              key={i}
              className="border-r-2 border-t-2 border-blue-400 rounded-tr-full opacity-80"
              style={{ width: `${i * 10}px`, height: `${i * 10}px` }}
            />
          ))}
        </div>
      </div>

      {/* NFC Card/Stand */}
      <div className="flex flex-col items-center">
        <div className="w-28 h-36 bg-white border-2 border-slate-800 rounded-2xl shadow-xl flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800" />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="text-white font-bold text-xl tracking-widest">AVIX</div>
            <Wifi className="text-white/80 rotate-90" size={28} />
            <div className="text-white/70 text-xs text-center px-2">Laissez un avis !</div>
          </div>
        </div>
        <div className="text-xs text-slate-500 mt-2 font-medium">Support NFC</div>
      </div>
    </div>
  );
}

export default function NfcAvisGooglePage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-6"
              >
                ← Retour aux services
              </Link>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full">
                <Wifi size={14} />
                Supports NFC avis Google
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 font-heading leading-tight">
                Vos clients satisfaits méritent de pouvoir vous le dire facilement
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Le support NFC AVIX facilite l&apos;accès à votre page d&apos;avis Google pour vos clients satisfaits. En approchant simplement leur téléphone, la page s&apos;ouvre instantanément.
              </p>

              {/* Mention légale obligatoire */}
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
                <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-amber-900">
                  <strong>Notre engagement :</strong> Les avis doivent toujours venir de vrais clients et être laissés librement, sans aucune contrepartie. Nous facilitons le parcours, pas le contenu.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact?projet=nfc" size="lg">
                  Découvrir le Pack Avis Express
                  <ArrowRight size={18} />
                </Button>
                <Button href="/offres" variant="outline" size="lg">
                  Voir les tarifs
                </Button>
              </div>
            </div>

            {/* Visual */}
            <div className="flex items-center justify-center">
              <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-lg">
                <NfcVisual />
                <p className="text-center text-sm text-slate-500 mt-2">
                  Démonstration du parcours client
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche — 4 étapes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              Comment ça fonctionne ?
            </h2>
            <p className="text-slate-600">
              Quatre étapes simples, de l&apos;installation à l&apos;avis.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-slate-200 z-0" style={{width: 'calc(100% - 4rem)'}} />
                )}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 relative z-10 hover:border-blue-200 hover:shadow-md transition-all text-center">
                  <div className="text-4xl mb-3">{step.icon}</div>
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5 font-heading">
                Inclus dans le Pack Avis Express
              </h2>
              <ul className="space-y-4">
                {inclus.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-emerald-500" size={32} />
              </div>
              <div className="text-5xl font-bold text-slate-900 mb-1">149 €</div>
              <div className="text-slate-400 line-through text-lg mb-2">199 €</div>
              <div className="text-emerald-600 text-sm font-medium mb-6">Prix de lancement</div>
              <Button href="/contact?projet=pack-avis-express" className="w-full justify-center mb-3">
                Demander ce pack
                <ArrowRight size={18} />
              </Button>
              <p className="text-xs text-slate-400">
                Paiement unique — installation sur place incluse
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que le NFC ne garantit PAS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <Shield className="text-blue-600" size={20} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Notre engagement de transparence</h2>
            </div>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Le support NFC <strong>facilite l&apos;accès</strong> à votre page d&apos;avis Google pour vos clients satisfaits.
              Il ne garantit pas un nombre d&apos;avis précis, ni un classement Google, ni des avis 5 étoiles.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Chaque avis doit provenir d&apos;un vrai client, laissé librement et sans contrepartie. 
              Notre rôle est de supprimer la barrière technique pour les clients qui veulent vous soutenir mais manquent de temps.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center font-heading">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <div key={item.q} className="bg-white border border-slate-200 rounded-2xl p-6">
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
