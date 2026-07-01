import { Offer } from '@/types';

export const offers: Offer[] = [
  {
    id: 'pack-avis-express',
    name: 'Pack Avis Express',
    slug: 'pack-avis-express',
    subtitle: 'Boostez vos avis Google facilement',
    description:
      'Optimisez votre fiche Google et facilitez la collecte d\'avis clients grâce à un support NFC installé dans votre commerce.',
    pricePromo: 149,
    priceNormal: '199',
    isPopular: false,
    features: [
      'Optimisation fiche Google Business Profile',
      'Amélioration des informations visibles (horaires, description, services, photos)',
      'Récupération et configuration du lien d\'avis Google',
      'Programmation d\'un support NFC avis Google',
      'Installation et test sur place',
      'Mini-conseil pour demander des avis clients de manière propre et légale',
    ],
    cta: 'Choisir ce pack',
  },
  {
    id: 'pack-visibilite-locale',
    name: 'Pack Visibilité Locale',
    slug: 'pack-visibilite-locale',
    subtitle: 'Votre vitrine complète sur internet',
    description:
      'Un site one-page professionnel, une fiche Google optimisée et un support NFC pour les avis clients. Tout ce qu\'il faut pour être visible localement.',
    pricePromo: 790,
    priceNormal: '990 à 1 200',
    isPopular: true,
    features: [
      'Site one-page professionnel',
      'Design moderne et responsive',
      'Site optimisé mobile',
      'Bouton appel direct',
      'Bouton itinéraire Google Maps',
      'Formulaire de contact',
      'Présentation claire des services',
      'Optimisation de la fiche Google',
      'Support NFC avis Google inclus',
      'Installation et accompagnement simple',
    ],
    cta: 'Choisir ce pack',
  },
];
