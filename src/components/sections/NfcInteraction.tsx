import Image from 'next/image';
import { Wifi, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NfcInteraction() {
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full">
              <Wifi size={14} />
              Support NFC — avis Google
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-heading leading-tight">
              Un geste simple pour récolter plus facilement des avis authentiques
            </h2>

            <p className="text-lg text-slate-600 mb-5 leading-relaxed">
              Le support NFC est une petite plaque posée dans votre commerce. Quand un client approche son téléphone, votre page d'avis Google s'ouvre automatiquement. Il peut alors laisser un avis plus facilement, sans chercher votre entreprise sur Google.
            </p>

            {/* Comment ça marche — 4 étapes simples */}
            <div className="mb-5 space-y-2">
              <p className="text-sm font-semibold text-slate-700 mb-3">Comment ça fonctionne :</p>
              {[
                'Nous préparons votre lien d\'avis Google.',
                'Nous programmons une plaque NFC avec ce lien.',
                'Vous placez la plaque sur votre comptoir ou votre caisse.',
                'Le client approche son téléphone : la page d\'avis s\'ouvre.',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-600">{step}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-slate-500 mb-6 bg-amber-50 border border-amber-100 rounded-xl p-3">
              Les avis doivent toujours venir de vrais clients satisfaits, laissés librement et sans contrepartie. Nous facilitons l'accès, pas le contenu.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/services/nfc-avis-google">
                Installer une plaque NFC dans mon commerce
                <ArrowRight size={16} />
              </Button>
              <Button href="/offres" variant="outline">
                Voir le Pack Avis Express
              </Button>
            </div>
          </div>

          {/* Right: Static Image */}
          <div className="flex items-center justify-center py-8 lg:py-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 w-full max-w-[560px]">
              <Image
                src="/images/nfc/interaction/nfc-plate-photo.png"
                alt="Plaque NFC AVIX pour avis Google dans son environnement"
                width={1000}
                height={750}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
