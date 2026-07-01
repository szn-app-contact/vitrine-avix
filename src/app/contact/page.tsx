import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactForm from '@/components/sections/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contactez-nous — AVIX',
  description: 'Une question ? Un projet de site vitrine ? Contactez AVIX pour discuter de la visibilité en ligne de votre commerce local.',
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="pt-32 pb-16 bg-slate-50 relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Parlons de votre projet"
            subtitle="Vous souhaitez améliorer votre visibilité locale ? Remplissez ce formulaire et nous vous recontacterons très vite."
            className="mb-8"
            theme="light"
          />
        </div>
      </div>

      <div className="py-20 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-xl font-bold font-heading text-navy-950 mb-6">Coordonnées</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                      <Mail className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy-950 mb-1">Email</div>
                      <a href={`mailto:${siteConfig.email}`} className="text-slate-600 hover:text-blue-600 transition-colors">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                      <Phone className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy-950 mb-1">Téléphone</div>
                      <a href={`tel:${siteConfig.phone}`} className="text-slate-600 hover:text-emerald-600 transition-colors">
                        {siteConfig.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100">
                      <MapPin className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy-950 mb-1">Zone d'intervention</div>
                      <p className="text-slate-600">Vendée (85)<br/>Déplacements sur site possibles.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-navy-950 mb-2">Pourquoi nous contacter ?</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Audit de votre visibilité actuelle</li>
                  <li>• Devis gratuit pour un site vitrine</li>
                  <li>• Questions sur les supports NFC</li>
                  <li>• Refonte de votre ancien site</li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
