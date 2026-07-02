import type { Metadata } from 'next';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import CtaFinal from '@/components/sections/CtaFinal';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Nos services — AVIX | Sites vitrines, Google et NFC en Vendée',
  description:
    'Découvrez tous les services AVIX : création de site vitrine, optimisation Google Business Profile, supports NFC avis clients et accompagnement digital pour commerces locaux en Vendée.',
  openGraph: {
    title: 'Nos services — AVIX',
    description: 'Sites vitrines, optimisation Google et supports NFC pour commerces locaux en Vendée.',
    url: 'https://avix-digital.com/services',
  },
};

const quickLinks = [
  {
    icon: 'Globe',
    title: 'Création de site vitrine',
    desc: 'Un site professionnel et responsive pour votre commerce',
    href: '/services/site-vitrine',
    color: 'blue',
  },
  {
    icon: 'Wifi',
    title: 'Supports NFC avis Google',
    desc: 'Facilitez les avis authentiques de vos clients',
    href: '/services/nfc-avis-google',
    color: 'emerald',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-heading">
            Nos services en détail
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Une approche complète pour développer votre clientèle locale. Pas de jargon technique, des solutions concrètes.
          </p>
        </div>
      </div>

      {/* Quick access cards */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {quickLinks.map((link) => {
              const Icon = (LucideIcons as any)[link.icon];
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-4 p-5 bg-white border border-slate-200 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    link.color === 'blue' ? 'bg-blue-50' : 'bg-emerald-50'
                  }`}>
                    {Icon && <Icon className={link.color === 'blue' ? 'text-blue-600' : 'text-emerald-600'} size={24} />}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900 mb-0.5">{link.title}</div>
                    <div className="text-sm text-slate-500">{link.desc}</div>
                  </div>
                  <LucideIcons.ArrowRight className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all shrink-0" size={20} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services list — alternating layout */}
      <div className="py-20 space-y-24">
        {services.map((service, index) => {
          const IconComponent = (LucideIcons as any)[service.icon];
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl ${
                index > 0 ? 'pt-6 border-t border-slate-100' : ''
              }`}
            >
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm">
                      {IconComponent && <IconComponent className="text-blue-600" size={28} />}
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 font-heading">{service.title}</h2>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-8 text-lg">{service.longDescription}</p>

                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6">
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">
                      Ce que cela vous apporte
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature: string) => (
                        <li key={feature} className="flex items-start gap-3">
                          <LucideIcons.CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button href="/contact">
                    Discuter de ce service
                    <LucideIcons.ArrowRight size={18} />
                  </Button>
                </div>

                {/* Visual panel */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-8 shadow-lg">
                    {index === 0 && (
                      <>
                        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                          Pour qui ?
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {['Restaurant & Bar', 'Garage & Auto', 'Salon de coiffure', 'Artisan & BTP', 'Camping & Loisirs', 'Commerce & Boutique'].map((s) => (
                            <div key={s} className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-700 font-medium text-center">
                              {s}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                          Votre fiche Google optimisée
                        </h3>
                        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                              <LucideIcons.Store className="text-slate-500" size={18} />
                            </div>
                            <div>
                              <div className="font-bold text-slate-900 text-sm">Votre Commerce</div>
                              <div className="flex gap-0.5">
                                {[1,2,3,4,5].map(i => <LucideIcons.Star key={i} size={10} className="fill-amber-400 text-amber-400" />)}
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {['Itinéraire', 'Appeler', 'Avis'].map((a) => (
                              <div key={a} className="bg-blue-50 text-blue-700 text-xs text-center py-1.5 rounded-lg font-medium border border-blue-100">
                                {a}
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                          Parcours client simplifié
                        </h3>
                        <div className="space-y-3">
                          {[
                            { step: '1', label: 'Client satisfait à la caisse' },
                            { step: '2', label: 'Approche son téléphone du support NFC' },
                            { step: '3', label: 'La page d\'avis s\'ouvre automatiquement' },
                            { step: '4', label: 'Il laisse un avis authentique' },
                          ].map((item) => (
                            <div key={item.step} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-slate-100">
                              <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                                {item.step}
                              </div>
                              <span className="text-sm text-slate-700">{item.label}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {index > 2 && (
                      <div className="flex flex-col items-center justify-center py-8 text-center">
                        {IconComponent && <IconComponent className="text-blue-200" size={80} />}
                        <p className="text-slate-500 text-sm mt-4 max-w-xs">{service.longDescription}</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </div>

      <CtaFinal />
    </div>
  );
}
