'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, ArrowRight } from 'lucide-react';
import ConceptModal, { type ConceptData } from '@/components/interactive/ConceptModal';
import CtaFinal from '@/components/sections/CtaFinal';
import Button from '@/components/ui/Button';

// ─── Données concepts ─────────────────────────────────────────────────────────
export const concepts: ConceptData[] = [
  {
    id: 'restaurant',
    emoji: '🍽️',
    title: 'Bistrot de Pays',
    sector: 'Restaurant & Brasserie',
    sectorColor: '#b45309',
    gradientFrom: '#92400e',
    gradientTo: '#c2410c',
    description:
      'Un site pour afficher votre menu, vos horaires, votre adresse, vos photos et faciliter les réservations. Design chaud et appétissant, pensé pour donner envie de venir.',
    goals: [
      'Convertir les visiteurs en réservations directes',
      'Présenter le menu et les spécialités du moment',
      'Faciliter le contact (réservation, itinéraire, appel)',
      'Mettre en valeur l\'ambiance et les photos du lieu',
    ],
    features: [
      'Menu digital responsive',
      'Bouton de réservation',
      'Horaires et fermetures',
      'Galerie photo',
      'Carte Google intégrée',
      'Lien avis Google (NFC)',
      'Bouton appel direct',
      'Lien Instagram',
    ],
    palette: [
      { name: 'Brun', hex: '#92400e' },
      { name: 'Terracotta', hex: '#c2410c' },
      { name: 'Crème', hex: '#fef3c7' },
      { name: 'Blanc', hex: '#ffffff' },
    ],
  },
  {
    id: 'garage',
    emoji: '🔧',
    title: 'Mécanique Express',
    sector: 'Garage & Auto',
    sectorColor: '#475569',
    gradientFrom: '#334155',
    gradientTo: '#0f172a',
    description:
      'Un site pour présenter vos prestations, recevoir des demandes de devis et permettre aux clients de vous appeler rapidement. Design rassurant et professionnel.',
    goals: [
      'Générer des appels et demandes de devis',
      'Rassurer sur les compétences et certifications',
      'Clarifier les services proposés et la zone d\'intervention',
      'Faciliter la prise de contact d\'urgence',
    ],
    features: [
      'Liste des prestations claire',
      'Formulaire devis rapide',
      'Bouton appel d\'urgence',
      'Zone d\'intervention',
      'Horaires d\'ouverture',
      'Lien avis Google (NFC)',
      'Badges certifications (RGE, etc.)',
    ],
    palette: [
      { name: 'Anthracite', hex: '#1e293b' },
      { name: 'Bleu', hex: '#2563eb' },
      { name: 'Gris', hex: '#64748b' },
      { name: 'Blanc', hex: '#ffffff' },
    ],
  },
  {
    id: 'coiffeur',
    emoji: '✂️',
    title: 'L\'Atelier Beauté',
    sector: 'Salon de Coiffure',
    sectorColor: '#e11d48',
    gradientFrom: '#fb7185',
    gradientTo: '#db2777',
    description:
      'Un site pour présenter vos prestations, vos tarifs, vos horaires et faciliter la prise de rendez-vous. Design épuré et élégant, centré sur le bien-être.',
    goals: [
      'Simplifier la prise de rendez-vous',
      'Présenter les prestations et les tarifs clairement',
      'Mettre en valeur l\'équipe et le style du salon',
      'Fidéliser la clientèle locale',
    ],
    features: [
      'Prise de RDV (Planity/Treatwell)',
      'Galerie avant/après',
      'Présentation de l\'équipe',
      'Grille tarifaire',
      'Horaires',
      'Lien avis Google (NFC)',
      'Lien Instagram & Pinterest',
    ],
    palette: [
      { name: 'Rose', hex: '#f43f5e' },
      { name: 'Beige', hex: '#fdf2f8' },
      { name: 'Gris doux', hex: '#f1f5f9' },
      { name: 'Noir', hex: '#0f172a' },
    ],
  },
  {
    id: 'artisan',
    emoji: '🏗️',
    title: 'Rénovation Pro',
    sector: 'Artisan & BTP',
    sectorColor: '#c2410c',
    gradientFrom: '#ea580c',
    gradientTo: '#b45309',
    description:
      'Un site pour montrer vos réalisations, expliquer vos services et recevoir des demandes de devis. Design sérieux et fiable, centré sur la confiance.',
    goals: [
      'Générer des demandes de devis qualifiées',
      'Prouver l\'expertise par les réalisations photos',
      'Clarifier la zone d\'intervention géographique',
      'Afficher les certifications (RGE, Qualibat…)',
    ],
    features: [
      'Portfolio de chantiers (avant/après)',
      'Formulaire de devis détaillé',
      'Zone d\'intervention (carte)',
      'Certifications et labels',
      'Bouton appel direct',
      'Lien avis Google (NFC)',
      'Témoignages clients réels',
    ],
    palette: [
      { name: 'Orange', hex: '#ea580c' },
      { name: 'Bois', hex: '#78350f' },
      { name: 'Beige', hex: '#fef3c7' },
      { name: 'Blanc', hex: '#ffffff' },
    ],
  },
  {
    id: 'bar',
    emoji: '🍺',
    title: 'Le Nocturne',
    sector: 'Bar & Soirées',
    sectorColor: '#7c3aed',
    gradientFrom: '#6d28d9',
    gradientTo: '#4c1d95',
    description:
      'Un site pour communiquer sur vos événements, partager votre ambiance et présenter votre carte. Design immersif et festif, fait pour attirer.',
    goals: [
      'Communiquer sur les événements et soirées',
      'Partager l\'ambiance visuellement',
      'Créer une communauté fidèle',
      'Présenter la carte et les spécialités',
    ],
    features: [
      'Agenda des événements',
      'Menu cocktails',
      'Galerie ambiance',
      'Horaires et lieu',
      'Liens réseaux sociaux',
      'Lien avis Google (NFC)',
    ],
    palette: [
      { name: 'Violet', hex: '#7c3aed' },
      { name: 'Nuit', hex: '#0f0a1e' },
      { name: 'Or', hex: '#f59e0b' },
      { name: 'Blanc', hex: '#ffffff' },
    ],
  },
  {
    id: 'camping',
    emoji: '⛺',
    title: 'Les Pins Verts',
    sector: 'Camping & Plein Air',
    sectorColor: '#059669',
    gradientFrom: '#059669',
    gradientTo: '#0d9488',
    description:
      'Un site pour augmenter vos réservations directes, présenter votre domaine et répondre aux questions fréquentes. Design naturel et accueillant.',
    goals: [
      'Augmenter les réservations directes',
      'Présenter le domaine et ses équipements',
      'Répondre aux questions fréquentes',
      'Mettre en valeur les activités et l\'environnement',
    ],
    features: [
      'Système de réservation',
      'Carte interactive du domaine',
      'Galerie photo/vidéo',
      'Présentation des emplacements',
      'FAQ saison',
      'Lien avis Google (NFC)',
      'Météo locale',
    ],
    palette: [
      { name: 'Vert', hex: '#059669' },
      { name: 'Forêt', hex: '#134e4a' },
      { name: 'Sable', hex: '#fef9c3' },
      { name: 'Blanc', hex: '#ffffff' },
    ],
  },
];

// ─── Carte concept ─────────────────────────────────────────────────────────────
function ConceptCard({
  concept,
  onClick,
}: {
  concept: ConceptData;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const gradient = `linear-gradient(135deg, ${concept.gradientFrom} 0%, ${concept.gradientTo} 100%)`;

  return (
    <div className="w-full text-left rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Zone colorée cliquable */}
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative aspect-video overflow-hidden w-full"
        aria-label={`Voir le concept ${concept.title}`}
      >
        <div
          className="absolute inset-0 transition-transform duration-500"
          style={{
            background: gradient,
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span className="text-7xl filter drop-shadow-lg select-none">{concept.emoji}</span>
        </div>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 flex items-center justify-center"
              style={{ background: 'rgba(15,23,42,0.72)' }}
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                className="text-center px-4"
              >
                <div className="bg-white text-slate-900 font-bold px-6 py-2.5 rounded-full text-sm mb-2 inline-block">
                  Voir le concept →
                </div>
                <p className="text-white/70 text-xs">Cliquez pour les détails</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Contenu texte */}
      <div className="p-5 flex flex-col flex-grow">
        <div
          className="text-xs font-bold uppercase tracking-wider mb-1.5"
          style={{ color: concept.sectorColor }}
        >
          {concept.sector}
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1.5">{concept.title}</h3>
        <p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-grow">{concept.description}</p>

        {/* CTA inline card */}
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={onClick}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-400 rounded-lg px-3 py-1.5 transition-colors"
          >
            Voir le concept
          </button>
          <a
            href="/contact"
            className="text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-3 py-1.5 transition-colors flex items-center gap-1"
          >
            Créer un site similaire
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Page principale ───────────────────────────────────────────────────────────
export default function RealisationsPage() {
  const [selectedConcept, setSelectedConcept] = useState<ConceptData | null>(null);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="pt-28 pb-10 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full">
            Concepts de sites vitrines
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 font-heading">
            Réalisations & Concepts
          </h1>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            Voici des exemples de sites que nous pouvons créer selon votre secteur. Cliquez sur un concept pour voir les fonctionnalités, les couleurs et ce que votre site pourrait offrir.
          </p>

          {/* Disclaimer transparent */}
          <div className="inline-flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4 text-left max-w-2xl">
            <AlertCircle className="text-blue-500 shrink-0 mt-0.5" size={18} />
            <p className="text-sm text-blue-900">
              <strong>Transparence :</strong> Ces exemples sont des{' '}
              <strong>concepts visuels imaginés</strong> pour montrer ce que nous pouvons créer selon votre secteur.
              Ils ne représentent pas encore des clients réels. Nos premières réalisations clients seront ajoutées prochainement.
            </p>
          </div>
        </div>
      </div>

      {/* Grille des concepts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {concepts.map((concept) => (
              <ConceptCard
                key={concept.id}
                concept={concept}
                onClick={() => setSelectedConcept(concept)}
              />
            ))}
          </div>

          {/* CTA bas de grille */}
          <div className="text-center mt-12 bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 font-heading">
              Votre secteur n&apos;est pas listé ?
            </h2>
            <p className="text-slate-600 mb-5 max-w-lg mx-auto">
              Boulangerie, pharmacie, librairie, cabinet médical, hôtel… Nous créons des sites pour tous types de commerces locaux. Contactez-nous pour parler de votre projet.
            </p>
            <Button href="/contact">Discuter de mon projet</Button>
          </div>
        </div>
      </section>

      <CtaFinal />

      {/* Modal */}
      <ConceptModal
        isOpen={!!selectedConcept}
        onClose={() => setSelectedConcept(null)}
        concept={selectedConcept}
      />
    </div>
  );
}
