import type { Metadata } from 'next';
import * as LucideIcons from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import CtaFinal from '@/components/sections/CtaFinal';
import { services } from '@/data/services';
import FadeIn from '@/components/interactive/FadeIn';
import { Star, Smartphone, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nos services — AVIX | Sites vitrines et optimisation Google',
  description: 'Création de sites vitrines, optimisation Google Business Profile, supports NFC avis, visibilité locale et accompagnement digital en Vendée.',
};

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="pt-32 pb-16 bg-slate-50 relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Nos services en détail"
            subtitle="Une approche complète et concrète pour développer votre clientèle locale, sans jargon technique."
            className="mb-8"
            theme="light"
          />
        </div>
      </div>

      <div className="py-20 space-y-32">
        {services.map((service, index) => {
          const IconComponent = (LucideIcons as any)[service.icon];
          const isEven = index % 2 === 0;

          return (
            <section key={service.id} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <FadeIn>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm">
                    {IconComponent && <IconComponent className="text-blue-600" size={32} />}
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold font-heading text-navy-950">{service.title}</h2>
                  </div>
                </div>
              </FadeIn>

              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16`}>
                
                {/* Main Content Column */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <FadeIn delay={0.1}>
                    <p className="text-lg text-slate-600 leading-relaxed mb-10">
                      {service.longDescription}
                    </p>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8">
                      <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider mb-4">Ce que cela vous apporte</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <LucideIcons.CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button href="/contact" className="w-full sm:w-auto self-start">
                      Discuter de ce service
                    </Button>
                  </FadeIn>
                </div>

                {/* Visual / Target Audience Column */}
                <div className="w-full lg:w-1/2">
                  <FadeIn delay={0.2} className="h-full">
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50 h-full flex flex-col justify-between relative overflow-hidden">
                      {/* Decorative Background */}
                      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-50 rounded-full blur-[60px] pointer-events-none" />

                      <div className="relative z-10 mb-8">
                         <h3 className="text-lg font-bold text-navy-950 mb-4 flex items-center gap-2">
                           <LucideIcons.Target className="text-blue-600" size={20} />
                           Pour qui ?
                         </h3>
                         <p className="text-slate-600">
                           {index === 0 && "Pour les commerces, artisans ou restaurants qui n'ont pas de site, ou dont le site actuel est daté et ne reflète plus la qualité de leur travail."}
                           {index === 1 && "Pour les établissements physiques qui veulent apparaître en premier sur Google Maps quand un client cherche leurs services à proximité."}
                           {index === 2 && "Pour les commerçants qui ont des clients satisfaits tous les jours, mais qui n'arrivent pas à récolter d'avis sur Google."}
                           {index > 2 && "Pour tout professionnel local souhaitant structurer sa présence en ligne de manière professionnelle sans se compliquer la vie."}
                         </p>
                      </div>

                      {/* Concrete Mockup Area */}
                      <div className="relative z-10 mt-auto bg-slate-50 rounded-xl border border-slate-200 p-4 aspect-[2/1] flex items-center justify-center">
                         {index === 0 && ( // Site mockup
                           <div className="w-full h-full bg-white rounded-md border border-slate-200 shadow-sm flex flex-col overflow-hidden">
                             <div className="h-4 bg-slate-100 border-b border-slate-200" />
                             <div className="p-2 flex gap-2">
                               <div className="w-1/3 h-16 bg-blue-50 rounded" />
                               <div className="w-2/3 h-16 bg-slate-50 rounded flex flex-col gap-1 p-1">
                                 <div className="w-full h-2 bg-slate-200 rounded" />
                                 <div className="w-3/4 h-2 bg-slate-200 rounded" />
                                 <div className="w-1/2 h-4 bg-blue-100 rounded mt-auto" />
                               </div>
                             </div>
                           </div>
                         )}
                         {index === 1 && ( // Google Maps Mockup
                           <div className="w-full max-w-[200px] bg-white rounded-xl border border-slate-200 shadow-sm p-3">
                             <div className="w-8 h-8 rounded-full bg-red-100 mb-2 flex items-center justify-center">
                               <LucideIcons.MapPin className="text-red-500" size={16} />
                             </div>
                             <div className="w-3/4 h-3 bg-slate-200 rounded mb-1" />
                             <div className="flex gap-0.5 mb-2">
                               {[...Array(5)].map((_, i) => <LucideIcons.Star key={i} size={10} className="fill-amber-400 text-amber-400" />)}
                             </div>
                             <div className="w-full h-6 bg-blue-50 rounded flex items-center justify-center text-[10px] text-blue-600 font-bold">
                               Itinéraire
                             </div>
                           </div>
                         )}
                         {index === 2 && ( // NFC Mockup
                            <div className="flex items-center gap-4">
                              <LucideIcons.Smartphone className="text-slate-700 w-12 h-12 -rotate-12" />
                              <div className="flex flex-col gap-1">
                                <div 
                                  className="w-4 h-4 rounded-full border-2 border-emerald-500 border-r-transparent border-b-transparent rotate-45 animate-pulse"
                                />
                              </div>
                              <div className="w-16 h-20 bg-white border border-slate-200 shadow-sm rounded-lg flex flex-col items-center justify-center">
                                <div className="text-[8px] font-bold text-slate-400">AVIX</div>
                                <LucideIcons.Wifi className="text-emerald-500 w-6 h-6 mt-1 rotate-90" />
                              </div>
                            </div>
                         )}
                         {index > 2 && (
                            <LucideIcons.LineChart className="text-blue-500 w-16 h-16 opacity-50" />
                         )}
                      </div>

                    </div>
                  </FadeIn>
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
