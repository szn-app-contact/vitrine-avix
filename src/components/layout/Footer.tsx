import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import { footerNavLinks } from '@/data/navigation';
import { siteConfig } from '@/data/site';

const offerLinks = [
  { label: 'Pack Avis Express', href: '/offres#pack-avis-express' },
  { label: 'Pack Visibilité Locale', href: '/offres#pack-visibilite-locale' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
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
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Nos offres */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Nos offres
            </h4>
            <ul className="space-y-2.5">
              {offerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2.5 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <Mail size={16} className="text-blue-400 mt-0.5 shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <Phone size={16} className="text-blue-400 shrink-0" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <MapPin size={16} className="text-blue-400 shrink-0" />
                <span>Zone d&apos;intervention : Vendée</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} AVIX. Tous droits réservés.
          </p>
          <Link
            href="#"
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
