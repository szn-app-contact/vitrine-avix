import { Problem } from '@/types';

export const problems: Problem[] = [
  {
    icon: 'AlertTriangle',
    title: 'Un site qui ne rassure pas',
    description:
      'Votre site actuel est daté ou inexistant, et ne reflète pas la qualité de votre travail.',
  },
  {
    icon: 'MapPinOff',
    title: 'Une fiche Google incomplète',
    description:
      'Vos informations sont manquantes ou incorrectes sur Google, ce qui fait fuir les clients potentiels.',
  },
  {
    icon: 'MessageSquareOff',
    title: "Peu d'avis clients",
    description:
      'Vos clients satisfaits ne pensent pas à laisser un avis, et vous perdez en crédibilité face à vos concurrents.',
  },
  {
    icon: 'EyeOff',
    title: 'Une présence en ligne floue',
    description:
      'Votre image sur internet ne correspond pas à la qualité de vos services sur le terrain.',
  },
  {
    icon: 'TrendingDown',
    title: 'Des concurrents plus visibles',
    description:
      'Vos concurrents paraissent plus professionnels en ligne et captent les clients qui auraient dû venir chez vous.',
  },
];
