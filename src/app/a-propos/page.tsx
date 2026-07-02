import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import Zone from '@/components/sections/Zone';
import CtaFinal from '@/components/sections/CtaFinal';
import { Target, Zap, ShieldCheck, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'À propos — AVIX | Agence de visibilité locale en Vendée',
  description:
    'AVIX est une entreprise locale en Vendée spécialisée dans la création de sites vitrines, l\'optimisation Google Business Profile et l\'accompagnement digital des commerces et artisans.',
  keywords: [
    'à propos AVIX',
    'agence web Vendée',
    'agence visibilité locale Vendée',
    'création site web Vendée',
    'agence digitale La Roche-sur-Yon',
    'accompagnement digital commerce Vendée',
  ],
  openGraph: {
    title: 'À propos — AVIX | Agence web locale en Vendée',
    description: 'AVIX aide les commerces locaux de Vendée à améliorer leur présence digitale avec des solutions simples, transparentes et efficaces.',
    url: 'https://avix-digital.com/a-propos',
  },
};

export default function AProposPage() {
  const values = [
    {
      title: 'Clarté',
      description: 'Pas de jargon technique. Nous vous expliquons les choses simplement pour que vous compreniez chaque action.',
      icon: Target,
      color: 'blue',
    },
    {
      title: 'Réactivité',
      description: 'Une question ? Un besoin ? Nous répondons rapidement car nous savons que votre temps est précieux.',
      icon: Zap,
      color: 'amber',
    },
    {
      title: 'Transparence',
      description: 'Nos tarifs sont clairs, pas d\'abonnement caché ni de coûts surprises en cours de route.',
      icon: ShieldCheck,
      color: 'emerald',
    },
    {
      title: 'Proximité',
      description: 'Une entreprise vendéenne au service des commerces vendéens. L\'humain reste au cœur de nos échanges.',
      icon: Heart,
      color: 'rose',
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; iconBg: string }> = {
    blue:    { bg: 'bg-blue-50',    text: 'text-blue-700',    iconBg: 'bg-blue-100' },
    amber:   { bg: 'bg-amber-50',   text: 'text-amber-700',   iconBg: 'bg-amber-100' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', iconBg: 'bg-emerald-100' },
    rose:    { bg: 'bg-rose-50',    text: 'text-rose-700',    iconBg: 'bg-rose-100' },
  };

  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-heading">
            À propos d&apos;AVIX
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Une équipe locale passionnée, au service des commerces de Vendée et de la région.
          </p>
        </div>
      </div>

      {/* Histoire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">Notre histoire</h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  AVIX est une jeune entreprise locale née en Vendée, fondée par des profils issus de l&apos;informatique et du web.
                </p>
                <p>
                  En observant les commerces autour de nous, nous avons fait un constat simple : beaucoup de professionnels
                  font un travail formidable sur le terrain, mais leur image sur internet ne reflète pas cette qualité.
                  Sites web vieillissants, fiches Google incomplètes, peu d&apos;avis clients…
                </p>
                <p>
                  Notre objectif : aider les entreprises locales à avoir une présence digitale propre, professionnelle et efficace,
                  sans les noyer sous des termes techniques compliqués.
                </p>
              </div>
            </div>

            {/* Visual quote */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white">
              <div className="text-5xl text-blue-400 font-serif mb-4">"</div>
              <blockquote className="text-xl font-heading font-medium italic text-white leading-relaxed">
                Une présence digitale claire, professionnelle et pensée pour convertir vos clients locaux.
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">A</div>
                <div>
                  <div className="font-bold text-white text-sm">L&apos;équipe AVIX</div>
                  <div className="text-slate-400 text-xs">Vendée, France</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Nos valeurs</h2>
            <p className="text-slate-600">Ce qui guide chacune de nos décisions et chacun de nos projets.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => {
              const c = colorMap[value.color];
              return (
                <div
                  key={value.title}
                  className={`${c.bg} rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-all`}
                >
                  <div className={`w-12 h-12 ${c.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <value.icon className={c.text} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Zone />
      <CtaFinal />
    </div>
  );
}
