import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2, ArrowRight,
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

export default function NfcAvisGooglePage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Texte */}
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
                Une petite plaque posée sur votre comptoir. Quand un client approche son téléphone, votre page d&apos;avis Google s&apos;ouvre automatiquement. Simple, rapide, efficace.
              </p>

              {/* Engagement légal */}
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
                <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-amber-900">
                  <strong>Notre engagement :</strong> Les avis doivent toujours venir de vrais clients et être laissés librement, sans aucune contrepartie. Nous facilitons le parcours, pas le contenu.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact?projet=nfc" size="lg">
                  Installer une plaque dans mon commerce
                  <ArrowRight size={18} />
                </Button>
                <Button href="/offres" variant="outline" size="lg">
                  Voir les tarifs
                </Button>
              </div>
            </div>

            {/* Image hero — plaque + téléphone + ondes NFC */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/nfc/hero/nfc-plate-hero-waves.jpg"
                alt="Plaque NFC AVIX avec téléphone affichant la page d'avis Google"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Comment ça marche — image 3 étapes ───────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3 font-heading">
              Comment ça fonctionne ?
            </h2>
            <p className="text-slate-600">
              Trois gestes simples. Aucune application à télécharger, aucune manipulation technique.
            </p>
          </div>

          {/* Étapes textuelles */}
          <div className="grid sm:grid-cols-3 gap-6 mt-8 text-center">
            {[
              { num: 1, title: 'Placer la plaque', desc: 'Posez la plaque sur votre comptoir, caisse ou table.' },
              { num: 2, title: 'Approcher le téléphone', desc: 'Le client approche son smartphone NFC — aucune appli nécessaire.' },
              { num: 3, title: 'La page d\'avis s\'ouvre', desc: 'La page d\'avis Google de votre établissement s\'ouvre instantanément.' },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg mb-3">
                  {step.num}
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dans votre commerce — image réelle comptoir ───────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Image comptoir boutique */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/images/nfc/context/nfc-plate-shop-counter.jpg"
                alt="Client approchant son téléphone de la plaque NFC AVIX posée sur un comptoir de boutique"
                width={700}
                height={470}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Texte */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full">
                Dans votre commerce
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading leading-tight">
                Un geste simple pour faciliter les avis authentiques
              </h2>
              <p className="text-slate-600 mb-5 leading-relaxed">
                La plaque NFC se pose à plat sur votre comptoir, à côté de votre caisse ou sur vos tables. Quand un client satisfait approche son téléphone, votre page d&apos;avis Google s&apos;ouvre directement. Il peut laisser un avis plus rapidement, sans rechercher votre établissement sur Google.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Compatible avec la grande majorité des smartphones récents',
                  'Aucune application à installer pour vos clients',
                  'Installation et configuration incluses sur place',
                  'Fonctionne aussi bien à la caisse, sur les tables ou à l\'entrée',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact?projet=nfc">
                Installer une plaque dans mon commerce
                <ArrowRight size={16} />
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* ── Pack Avis Express — produit + tarif ──────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Liste inclus */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5 font-heading">
                Inclus dans le Pack Avis Express
              </h2>
              <ul className="space-y-3 mb-6">
                {inclus.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prix */}
            <div className="flex flex-col gap-6 h-full justify-center">

              {/* Carte tarif */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center shadow-sm">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-emerald-500" size={28} />
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-slate-900">149 €</span>
                  <span className="text-emerald-600 text-sm font-semibold tracking-wide">— prix de lancement</span>
                </div>
                <div className="text-slate-500 text-sm mb-6">
                  Puis 199 €
                </div>
                <Button href="/contact?projet=pack-avis-express" className="w-full justify-center mb-3">
                  Demander ce pack
                  <ArrowRight size={18} />
                </Button>
                <p className="text-xs text-slate-400">
                  Paiement unique — hors frais éventuels de nom de domaine et d'hébergement, réglés directement par le client.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* ── Transparence ────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
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

      {/* ── FAQ ─────────────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center font-heading">
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
