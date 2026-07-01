export interface Sector {
  id: string;
  name: string;
  description: string;
  needs: string;
  features: string[];
  image: string;
  color: string;
}

export const sectors: Sector[] = [
  {
    id: 'restaurant',
    name: 'Restaurant',
    description: 'Donnez faim à vos clients avant même qu\'ils ne passent la porte avec un site appétissant.',
    needs: 'Un restaurant a besoin de montrer sa carte, l\'ambiance de sa salle, et de simplifier la réservation.',
    features: ['Menu interactif', 'Photos haute qualité', 'Module de réservation', 'Horaires clairs', 'Avis Google mis en avant'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
    color: 'amber'
  },
  {
    id: 'bar',
    name: 'Bar & Soirée',
    description: 'Une présence en ligne vibrante qui reflète l\'ambiance de vos soirées.',
    needs: 'Un bar doit mettre en avant ses événements, sa carte de cocktails et ses horaires d\'happy hour.',
    features: ['Agenda des événements', 'Carte des boissons', 'Galerie d\'ambiance', 'Liens réseaux sociaux', 'Itinéraire rapide'],
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200',
    color: 'purple'
  },
  {
    id: 'coiffeur',
    name: 'Salon de coiffure',
    description: 'L\'élégance et le professionnalisme de votre salon, retranscrits sur le web.',
    needs: 'Un salon de coiffure doit présenter ses prestations, ses tarifs et rassurer sur la qualité de ses coupes.',
    features: ['Prestations & Tarifs', 'Prise de RDV en ligne', 'Galerie avant/après', 'Présentation de l\'équipe', 'Avis certifiés'],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200',
    color: 'rose'
  },
  {
    id: 'garage',
    name: 'Garage & Auto',
    description: 'Un site carré, rassurant et direct pour vos clients en panne ou en recherche de fiabilité.',
    needs: 'Un garage a besoin de montrer son expertise technique, ses services rapides et de faciliter le contact.',
    features: ['Liste des services', 'Bouton appel urgence', 'Demande de devis', 'Véhicules de courtoisie', 'Avis Google'],
    image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&q=80&w=1200',
    color: 'slate'
  },
  {
    id: 'artisan',
    name: 'Artisanat',
    description: 'Valorisez votre savoir-faire manuel et vos plus belles réalisations en Vendée.',
    needs: 'Un artisan doit montrer la qualité de son travail (avant/après) et délimiter clairement sa zone d\'intervention.',
    features: ['Portfolio de chantiers', 'Détail du savoir-faire', 'Formulaire de devis', 'Zone d\'intervention', 'Avis clients réels'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=1200',
    color: 'emerald'
  },
  {
    id: 'camping',
    name: 'Camping',
    description: 'Faites rêver les vacanciers avec un site immersif qui donne envie de réserver.',
    needs: 'Un camping doit mettre en valeur ses infrastructures, la région et simplifier au maximum la réservation.',
    features: ['Photos infrastructures', 'Carte du camping', 'Activités alentours', 'Lien système de réservation', 'Accès multilingue'],
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=1200',
    color: 'cyan'
  }
];
