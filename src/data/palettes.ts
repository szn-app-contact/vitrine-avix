export interface Palette {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
}

export const palettes: Palette[] = [
  {
    id: 'premium-navy',
    name: 'Premium Navy',
    description: 'Le choix idéal pour les agences, le conseil ou les entreprises technologiques. Inspire sérieux, confiance et modernité.',
    colors: {
      primary: '#2563EB', // blue-600
      secondary: '#0F172A', // navy-900
      accent: '#38BDF8', // sky-400
      background: '#0a0f1e', // navy-950
      text: '#F8FAFC' // slate-50
    }
  },
  {
    id: 'restaurant-warm',
    name: 'Restaurant chaleureux',
    description: 'Des tons chauds et accueillants qui ouvrent l\'appétit et rappellent la convivialité d\'une bonne table.',
    colors: {
      primary: '#D97706', // amber-600
      secondary: '#451A03', // orange-950
      accent: '#F59E0B', // amber-500
      background: '#FEF3C7', // amber-50
      text: '#1C1917' // stone-900
    }
  },
  {
    id: 'coiffeur-elegant',
    name: 'Coiffeur élégant',
    description: 'Minimaliste, doux et épuré. Des tons rose pâle et beige pour souligner le soin, la beauté et la détente.',
    colors: {
      primary: '#DB2777', // pink-600
      secondary: '#FDF2F8', // pink-50
      accent: '#F472B6', // pink-400
      background: '#FFFFFF', // white
      text: '#3F3F46' // zinc-700
    }
  },
  {
    id: 'garage-robust',
    name: 'Garage robuste',
    description: 'Un contraste fort et mécanique. L\'anthracite et le rouge vif transmettent l\'efficacité et la fiabilité.',
    colors: {
      primary: '#DC2626', // red-600
      secondary: '#171717', // neutral-900
      accent: '#EF4444', // red-500
      background: '#262626', // neutral-800
      text: '#F5F5F5' // neutral-100
    }
  },
  {
    id: 'camping-nature',
    name: 'Camping nature',
    description: 'Des verts profonds et des teintes naturelles pour plonger immédiatement le visiteur dans l\'ambiance des vacances.',
    colors: {
      primary: '#059669', // emerald-600
      secondary: '#022C22', // emerald-950
      accent: '#34D399', // emerald-400
      background: '#ECFDF5', // emerald-50
      text: '#064E3B' // emerald-900
    }
  },
  {
    id: 'bar-nocturne',
    name: 'Bar nocturne',
    description: 'Ambiance néon. Des couleurs vibrantes sur fond sombre pour recréer l\'énergie d\'un établissement de nuit.',
    colors: {
      primary: '#9333EA', // purple-600
      secondary: '#09090B', // zinc-950
      accent: '#C084FC', // purple-400
      background: '#18181B', // zinc-900
      text: '#FAFAFA' // zinc-50
    }
  }
];
