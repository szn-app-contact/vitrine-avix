import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import Zone from '@/components/sections/Zone';
import CtaFinal from '@/components/sections/CtaFinal';
import { Target, Zap, ShieldCheck, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'À propos — AVIX | Agence de visibilité locale en Vendée',
  description: 'AVIX est une entreprise locale en Vendée spécialisée dans la création de sites vitrines, l\'optimisation Google et l\'accompagnement digital des commerces.',
};

export default function AProposPage() {
  const values = [
    {
      title: "Clarté",
      description: "Pas de jargon technique. Nous vous expliquons les choses simplement pour que vous compreniez chaque action.",
      icon: Target
    },
    {
      title: "Réactivité",
      description: "Une question ? Un besoin ? Nous répondons rapidement car nous savons que votre temps est précieux.",
      icon: Zap
    },
    {
      title: "Transparence",
      description: "Nos tarifs sont clairs, pas d'abonnement caché ni de coûts surprises en cours de route.",
      icon: ShieldCheck
    },
    {
      title: "Proximité",
      description: "Une entreprise vendéenne au service des commerces vendéens. L'humain reste au cœur de nos échanges.",
      icon: Heart
    }
  ];

  return (
    <>
      <div className="pt-32 pb-16 bg-navy-950 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="À propos d'AVIX"
            subtitle="Une équipe passionnée, au service des commerces locaux."
            className="mb-8"
          />
        </div>
      </div>

      <section className="pb-24 bg-navy-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* L'Histoire */}
            <div className="bg-navy-900/50 rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p>
                  AVIX est une jeune entreprise locale née en Vendée, fondée par des profils issus de l'informatique et du web.
                </p>
                <p>
                  En observant les commerces autour de nous, nous avons fait un constat simple : beaucoup de professionnels 
                  font un travail formidable sur le terrain, mais leur image sur internet ne reflète pas cette qualité. 
                  Sites web vieillissants, fiches Google incomplètes, peu d'avis clients...
                </p>
                <p>
                  Notre objectif : aider les entreprises locales à avoir une présence digitale propre, professionnelle et efficace, 
                  sans les noyer sous des termes techniques compliqués.
                </p>
              </div>
            </div>

            {/* Citation */}
            <blockquote className="text-center p-8">
              <p className="text-2xl md:text-3xl font-heading font-medium text-white italic">
                "Une présence digitale claire, professionnelle et pensée pour convertir vos clients locaux."
              </p>
            </blockquote>

            {/* Nos Valeurs */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-8 text-center">Nos Valeurs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="bg-navy-800/30 p-6 rounded-2xl border border-white/5 hover:bg-navy-800/50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                      <value.icon className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-slate-400">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Zone />
      <CtaFinal />
    </>
  );
}
