# ENTREPRISE FIDE - Site Web avec CMS

Site web professionnel avec système de gestion de contenu (CMS) pour **ENTREPRISE FIDE**, entreprise d'ingénierie et technologie basée en Côte d'Ivoire.

## 🚀 Fonctionnalités

### Site Public
- **Page d'accueil** avec carrousel hero animé
- **6 divisions de services** : Télécom, Énergie, IT, Communication, Services Généraux, Agriculture
- **Présence internationale** : 7 pays d'Afrique de l'Ouest
- **Villes d'intervention** : 12 villes en Côte d'Ivoire
- **Section Partenaires** avec logos dynamiques
- **Page Contact** avec liens WhatsApp

### Panel Admin CMS (/admin)
- **Configuration du site** : nom, slogan, contact, réseaux sociaux
- **Gestion du Hero** : images du carrousel
- **Gestion des Services** : descriptions et images
- **Gestion des Vidéos** : YouTube, Vimeo
- **Galerie d'images** : projets et réalisations
- **Partenaires** : logos et descriptions
- **Avantages** : points forts
- **Upload de fichiers** : images et vidéos directement depuis le PC

## 📦 Technologies

- **Next.js 16** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Prisma ORM** - Base de données
- **SQLite** - Stockage de données
- **shadcn/ui** - Composants UI
- **Framer Motion** - Animations

## 🛠️ Installation

### Prérequis
- Node.js 18+ ou Bun
- npm ou bun

### Étapes

1. **Installer les dépendances**
```bash
npm install
# ou
bun install
```

2. **Configurer l'environnement**
```bash
cp .env.example .env
```

3. **Initialiser la base de données**
```bash
npx prisma generate
npx prisma db push
```

4. **Lancer le serveur de développement**
```bash
npm run dev
# ou
bun dev
```

5. **Accéder au site**
- Site public : http://localhost:3000
- Admin CMS : http://localhost:3000/admin

## 📁 Structure du Projet

```
├── src/
│   ├── app/
│   │   ├── page.tsx          # Page d'accueil
│   │   ├── admin/            # Panel CMS
│   │   ├── api/              # API routes
│   │   ├── contact/          # Page contact
│   │   └── services/         # Pages services
│   ├── components/
│   │   ├── ui/               # Composants shadcn
│   │   └── fide/             # Composants personnalisés
│   └── lib/
│       └── db.ts             # Prisma client
├── prisma/
│   └── schema.prisma         # Modèles de données
├── public/
│   ├── uploads/              # Fichiers uploadés
│   └── logo-fide.jpeg        # Logo
└── package.json
```

## 🎨 Personnalisation

### Couleurs principales
- **Bleu foncé** : `#003366`
- **Rouge** : `#FF0000`
- **Or** : `#C9A227`

### Informations de contact
Modifiez les informations dans le panel Admin > Configuration ou directement dans la base de données.

## 📞 Contact

**ENTREPRISE FIDE**
- Adresse : 65 Rue El Hadj Dramane Diabaté, Abidjan, Côte d'Ivoire
- WhatsApp Technique : +225 07 07 14 96 06
- WhatsApp Info : +225 01 60 00 09 97
- Email : entreprisefide@gmail.com

---

Copyright © 2026 Entreprise Fide | Solutions Techniques Intégrées. All Rights Reserved. by yb.com
