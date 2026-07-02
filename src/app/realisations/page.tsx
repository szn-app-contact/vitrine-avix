'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import ConceptModal, { type ConceptData } from '@/components/interactive/ConceptModal';
import CtaFinal from '@/components/sections/CtaFinal';
import Button from '@/components/ui/Button';

const concepts: ConceptData[] = [
  {
    id: 'restaurant',
    emoji: '🍽️',
    title: 'Bistrot de Pays',
    sector: 'Restaurant & Brasserie',
    colorClass: 'text-amber-700',
    bgClass: 'bg-gradient-to-br from-amber-700 to-orange-800',
    description: 'Design chaud et appétissant, centré sur la photographie culinaire et l\'ambiance locale. Typographie classique et tons terreux pour inspirer confiance et donner envie.',
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
    colorClass: 'text-slate-700',
    bgClass: 'bg-gradient-to-br from-slate-700 to-slate-900',
    description: 'Design robuste et rassurant. Palette contrastée (anthracite/blanc/bleu) pour évoquer le professionnalisme mécanique. Centré sur la rapidité d\'action.',
    goals: [
      'Générer des appels et demandes de devis',
      'Rassurer sur les compétences et certifications',
      'Clarifier les services proposés et la zone d\'intervention',
      'Faciliter la prise de contact d\'urgence',
    ],
    features: [
      'Liste des prestations clair',
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
    colorClass: 'text-pink-700',
    bgClass: 'bg-gradient-to-br from-rose-400 to-pink-600',
    description: 'Design épuré et élégant, axé sur le bien-être. Palette douce avec de nombreux espaces blancs et une typographie fine pour évoquer le soin et la détente.',
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
    colorClass: 'text-orange-700',
    bgClass: 'bg-gradient-to-br from-orange-600 to-amber-700',
    description: 'Design sérieux, structuré et fiable. Mise en avant des réalisations concrètes, des certifications et de la zone d\'intervention pour maximiser la confiance.',
    goals: [
      'Générer des demandes de devis qualifiées',
      'Prouver l\'expertise par les réalisations photos',
      'Clarifier la zone d\'intervention géographique',
      'Afficher les certifications (RGE, Qualibat...)',
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
    colorClass: 'text-purple-700',
    bgClass: 'bg-gradient-to-br from-violet-700 to-purple-900',
    description: 'Design immersif et festif. Fond sombre maîtrisé, accents vibrants et animations pour retranscrire l\'ambiance et attirer pour les soirées événements.',
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
    colorClass: 'text-emerald-700',
    bgClass: 'bg-gradient-to-br from-emerald-600 to-teal-700',
    description: 'Design naturel, familial et accueillant. Couleurs vertes et tons bois, large espace pour la photographie de paysage et les activités.',
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

// Card hover effect
function ConceptCard({
  concept,
  onClick,
}: {
  concept: ConceptData;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full text-left group rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Visual area */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className={`absolute inset-0 ${concept.bgClass} transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`} />

        {/* Emoji & floating elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-7xl filter drop-shadow-lg">{concept.emoji}</div>
        </div>

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/75 backdrop-blur-[2px] flex items-center justify-center"
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
      </div>

      {/* Content */}
      <div className="p-5 flex-grow">
        <div className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${concept.colorClass}`}>
          {concept.sector}
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1.5">{concept.title}</h3>
        <p className="text-sm text-slate-600 line-clamp-2">{concept.description}</p>
      </div>
    </button>
  );
}

export default function RealisationsPage() {
  const [selectedConcept, setSelectedConcept] = useState<ConceptData | null>(null);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-heading">
            Réalisations & Concepts
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Explorez nos directions visuelles par secteur. Cliquez sur un concept pour voir en détail les objectifs, fonctionnalités et palette de couleurs.
          </p>

          {/* Disclaimer */}
          <div className="inline-flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4 text-left max-w-2xl">
            <AlertCircle className="text-blue-500 shrink-0 mt-0.5" size={18} />
            <p className="text-sm text-blue-900">
              <strong>Transparence :</strong> Ces exemples sont des <strong>concepts visuels imaginés</strong> pour présenter différentes directions possibles. Ils ne représentent pas encore des clients réels. Nos premières réalisations clients seront ajoutées prochainement.
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {concepts.map((concept) => (
              <ConceptCard
                key={concept.id}
                concept={concept}
                onClick={() => setSelectedConcept(concept)}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 bg-slate-50 rounded-3xl p-10 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
              Votre activité n&apos;est pas listée ?
            </h2>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">
              Nous créons des sites pour tous types de commerces locaux. Contactez-nous pour discuter de votre projet spécifique.
            </p>
            <Button href="/contact">
              Discuter de mon projet
            </Button>
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
