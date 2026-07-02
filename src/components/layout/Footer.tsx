import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import { footerNavLinks } from '@/data/navigation';
import { siteConfig } from '@/data/site';

const zones = [
  { dept: '85 — Vendée', villes: ['La Roche-sur-Yon', 'Challans', 'Les Sables-d\'Olonne', 'Saint-Gilles-Croix-de-Vie', 'Saint-Jean-de-Monts', 'Montaigu'] },
  { dept: '44 — Loire-Atlantique', villes: ['Nantes', 'Saint-Nazaire', 'Pornic'] },
  { dept: '17 — Charente-Maritime', villes: ['La Rochelle', 'Rochefort', 'Saintes'] },
  { dept: '49 — Maine-et-Loire', villes: ['Angers', 'Saumur', 'Cholet'] },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Zone d'intervention */}
      <div className="border-b border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-6 flex items-center gap-2">
            <MapPin size={16} />
            Zone d&apos;intervention
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {zones.map((zone) => (
              <div key={zone.dept}>
                <h4 className="text-sm font-bold text-white mb-3">{zone.dept}</h4>
                <ul className="space-y-1">
                  {zone.villes.map((ville) => (
                    <li key={ville} className="text-xs text-slate-400">{ville}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-6">
            Interventions principalement dans ces zones. Contactez-nous pour tout autre secteur.
          </p>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="white" className="mb-5" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-6">
              Nous aidons les commerces locaux à améliorer leur présence en ligne avec des sites vitrines modernes et des solutions NFC simples.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-blue-400 shrink-0" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-blue-400 shrink-0" />
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-0.5 text-blue-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Nos offres
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Pack Avis Express — 149 €', href: '/offres' },
                { label: 'Pack Visibilité Locale — 790 €', href: '/offres' },
                { label: 'Création site vitrine', href: '/services/site-vitrine' },
                { label: 'Supports NFC avis Google', href: '/services/nfc-avis-google' },
                { label: 'Optimisation fiche Google', href: '/services' },
              ].map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-0.5 text-blue-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Keywords SEO */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Création de sites
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>Site vitrine La Roche-sur-Yon</li>
              <li>Site vitrine Challans</li>
              <li>Site vitrine Les Sables-d&apos;Olonne</li>
              <li>Site internet Nantes</li>
              <li>Site internet La Rochelle</li>
              <li>Site internet Angers</li>
              <li>Visibilité locale Vendée</li>
              <li>Avis Google commerce local</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} AVIX. Tous droits réservés. — Agence web locale en Vendée.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/mentions-legales" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Mentions légales
            </Link>
            <Link href="/contact" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
