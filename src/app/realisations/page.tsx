'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import CtaFinal from '@/components/sections/CtaFinal';
import { AlertCircle, Utensils, Wrench, Scissors, Beer, Hammer, Tent } from 'lucide-react';
import FadeIn from '@/components/interactive/FadeIn';
import ConceptModal from '@/components/interactive/ConceptModal';

const concepts = [
  {
    id: 'restaurant',
    title: 'Bistrot de Pays',
    sector: 'Concept Restaurant',
    color: 'amber',
    icon: Utensils,
    description: 'Une ambiance chaleureuse et appétissante. Design axé sur la photographie culinaire, les couleurs chaudes et une typographie classique pour rassurer et donner faim.',
    features: ['Menu digital dynamique', 'Bouton de réservation', 'Horaires et infos pratiques', 'Galerie photo', 'Avis Google intégrés'],
    goals: ['Convertir les visiteurs en réservations', 'Mettre en valeur le terroir et la carte', 'Faciliter l\'accès avec un plan interactif']
  },
  {
    id: 'garage',
    title: 'Mécanique Express',
    sector: 'Concept Garage & Auto',
    color: 'red',
    icon: Wrench,
    description: 'Un design robuste, rassurant et direct. Couleurs contrastées (rouge/noir/blanc) pour évoquer la réactivité et le professionnalisme mécanique.',
    features: ['Listing clair des prestations', 'Formulaire de devis rapide', 'Bouton d\'appel d\'urgence', 'Avis Google intégrés', 'Zone d\'intervention'],
    goals: ['Générer des appels immédiats', 'Rassurer sur les compétences techniques', 'Clarifier la tarification']
  },
  {
    id: 'coiffeur',
    title: 'L\'Atelier Beauté',
    sector: 'Concept Salon de Coiffure',
    color: 'pink',
    icon: Scissors,
    description: 'Élégant, épuré et relaxant. Palette douce, beaucoup d\'espaces blancs, typographie fine pour évoquer le soin et le bien-être.',
    features: ['Galerie avant/après', 'Intégration outil de prise de RDV (Planity, etc.)', 'Présentation de l\'équipe', 'Tarifs clairs', 'Avis Google intégrés'],
    goals: ['Inspirer confiance par l\'esthétique', 'Simplifier la prise de rendez-vous', 'Fidéliser la clientèle locale']
  },
  {
    id: 'bar',
    title: 'Le Nocturne',
    sector: 'Concept Bar & Soirée',
    color: 'purple',
    icon: Beer,
    description: 'Immersif et festif. Fond sombre (dark mode maîtrisé), accents néon, animations dynamiques pour retranscrire l\'ambiance de la vie nocturne.',
    features: ['Agenda des événements/soirées', 'Menu des cocktails', 'Lien vers réseaux sociaux', 'Horaires et plan', 'Avis Google intégrés'],
    goals: ['Créer une communauté', 'Attirer pour les événements spécifiques', 'Partager l\'ambiance visuellement']
  },
  {
    id: 'artisan',
    title: 'Rénovation Pro',
    sector: 'Concept Artisan / BTP',
    color: 'orange',
    icon: Hammer,
    description: 'Sérieux, structuré et fiable. Mise en avant des réalisations concrètes, badges de certification (RGE) et réassurance maximale.',
    features: ['Portfolio de chantiers', 'Formulaire de demande de devis', 'Présentation des garanties', 'Bouton d\'appel direct', 'Avis Google intégrés'],
    goals: ['Générer des demandes de devis qualifiées', 'Prouver l\'expertise par l\'image', 'Rassurer face à la concurrence']
  },
  {
    id: 'camping',
    title: 'Les Pins Verts',
    sector: 'Concept Camping & Plein Air',
    color: 'emerald',
    icon: Tent,
    description: 'Naturel, familial et accueillant. Couleurs vertes et bois, grand espace pour la vidéo ou la photographie de paysage.',
    features: ['Système de réservation (Booking/Direct)', 'Carte interactive du domaine', 'Présentation des activités', 'Avis Google intégrés', 'FAQ'],
    goals: ['Augmenter les réservations directes', 'Montrer l\'écosystème du lieu', 'Répondre aux questions fréquentes']
  }
];

export default function RealisationsPage() {
  const [selectedConcept, setSelectedConcept] = useState<any>(null);

  return (
    <div className="bg-white min-h-screen">
      <div className="pt-32 pb-16 bg-slate-50 relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Réalisations & concepts"
            subtitle="Explorez nos directions visuelles interactives. Cliquez sur un concept pour découvrir en détail ses objectifs et fonctionnalités."
            className="mb-8"
            theme="light"
          />
          
          <div className="max-w-3xl mx-auto flex items-start gap-3 bg-blue-50 border border-blue-100 p-4 rounded-xl mt-8">
            <AlertCircle className="text-blue-600 shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-blue-900">
              <strong>Transparence :</strong> Nos premières réalisations clients seront ajoutées prochainement. En attendant, ces exemples interactifs sont des concepts visuels imaginés pour vous présenter notre expertise et nos différentes directions possibles.
            </p>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {concepts.map((concept, index) => {
              const Icon = concept.icon;
              return (
                <FadeIn key={concept.id} delay={index * 0.1}>
                  <button 
                    onClick={() => setSelectedConcept(concept)}
                    className="w-full text-left group rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-blue-300 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
                  >
                    <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden flex items-center justify-center border-b border-slate-100">
                      <div className={`absolute inset-0 bg-gradient-to-br from-${concept.color}-500/5 to-${concept.color}-600/10 group-hover:scale-105 transition-transform duration-700`} />
                      
                      <div className={`w-20 h-20 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className={`text-${concept.color}-500`} size={32} />
                      </div>

                      <div className="absolute inset-0 bg-navy-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-20">
                        <span className="px-6 py-2 bg-white text-navy-950 font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          Voir le concept
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className={`text-${concept.color}-600 text-xs font-bold uppercase tracking-wider mb-2`}>{concept.sector}</div>
                      <h3 className="text-xl font-bold text-navy-950 mb-2">{concept.title}</h3>
                      <p className="text-slate-600 text-sm line-clamp-2">{concept.description}</p>
                    </div>
                  </button>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </section>

      <CtaFinal />

      <ConceptModal 
        isOpen={!!selectedConcept} 
        onClose={() => setSelectedConcept(null)} 
        concept={selectedConcept} 
      />
    </div>
  );
}
