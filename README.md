# AVIX — Site Vitrine Officiel

Ce projet est le site vitrine officiel de l'entreprise **AVIX**, spécialisée dans la création de sites vitrines, l'optimisation Google et la mise en place de supports NFC pour faciliter les avis clients.

## 🚀 Stack Technique

- **Framework :** Next.js 15 (App Router)
- **Langage :** TypeScript
- **Styling :** Tailwind CSS v4 (utilisant `@theme inline` dans `globals.css`)
- **Animations :** Framer Motion
- **Icônes :** Lucide React
- **Déploiement prévu :** Vercel

## 📦 Installation et Lancement

1. **Installer les dépendances :**
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement :**
   ```bash
   npm run dev
   ```
   Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

3. **Compiler pour la production :**
   ```bash
   npm run build
   ```

## 🛠️ Personnalisation et Modification

L'architecture a été pensée pour faciliter les modifications de contenu sans avoir à toucher aux composants complexes.

### Où modifier les textes, offres et prix ?

Tous les contenus textuels importants sont centralisés dans le dossier `src/data/` :

- `src/data/site.ts` : Nom, description globale, email, téléphone.
- `src/data/offers.ts` : Titres, prix (promo/normal), caractéristiques des packs.
- `src/data/services.ts` : Description détaillée des services.
- `src/data/faq.ts` : Questions et réponses de la Foire Aux Questions.
- `src/data/whyAvix.ts` : Les arguments commerciaux "Pourquoi nous choisir".
- `src/data/zone.ts` : Les villes de la zone d'intervention.

### Où remplacer le logo ?

Les fichiers SVG temporaires ont été placés dans le dossier `public/images/brand/` :
- `logo-avix.svg`
- `logo-avix-white.svg`

**Pour mettre votre vrai logo :**
1. Remplacez simplement ces fichiers par les vôtres (en conservant les noms).
2. Si votre logo est au format `.png` au lieu de `.svg`, vous devrez modifier le chemin dans le composant `src/components/shared/Logo.tsx`.

### Où modifier les images de réalisations ?

Dans le dossier `public/images/portfolio/`. Vous pouvez ensuite lier ces images dans les données que vous ajouterez dans `src/app/realisations/page.tsx`.

## ✉️ Formulaire de Contact

Le formulaire (`src/components/shared/ContactForm.tsx`) gère actuellement tous les états côté client (validation, succès) pour la démonstration. 
Pour le rendre fonctionnel et envoyer des emails :
1. Choisissez un service (Resend, EmailJS, ou FormSpree).
2. Repérez le commentaire `TODO` dans la fonction `handleSubmit` du composant `ContactForm.tsx` pour y intégrer votre appel d'API.

## 📈 SEO

Le site est conçu avec les meilleures pratiques SEO :
- Metadata complètes par page (`layout.tsx`, `page.tsx`).
- Données structurées `LocalBusiness` intégrées dans le RootLayout.
- Balises sémantiques (main, section, article).
- Mots-clés ciblés sur la Vendée.
