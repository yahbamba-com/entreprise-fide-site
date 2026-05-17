import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

// POST - Initialiser les données par défaut
export async function POST() {
  try {
    // Vérifier si les données existent déjà
    const existingServices = await db.service.findMany()
    
    if (existingServices.length === 0) {
      // Créer les services par défaut
      await db.service.createMany({
        data: [
          {
            slug: 'securite',
            title: 'Sécurité & Télécommunication',
            shortDesc: 'Réseaux téléphoniques, vidéosurveillance, alarmes, télésurveillance et solutions de sécurité électronique.',
            description: 'Solutions complètes de sécurité électronique et télécommunication pour entreprises et particuliers.',
            icon: 'Shield',
            color: 'from-blue-600 to-blue-800',
            order: 0
          },
          {
            slug: 'energie',
            title: 'Énergie & Solaire',
            shortDesc: 'Électricité générale, installations solaires, groupes électrogènes et solutions énergétiques durables.',
            description: 'Solutions énergétiques complètes incluant l\'électricité générale et les installations solaires.',
            icon: 'Sun',
            color: 'from-orange-500 to-yellow-600',
            order: 1
          },
          {
            slug: 'digital',
            title: 'Informatique & Digital',
            shortDesc: 'Développement web & mobile, applications e-commerce, intégration de paiements mobiles locaux.',
            description: 'Solutions digitales sur mesure : sites web, applications mobiles, intégration de paiements.',
            icon: 'Monitor',
            color: 'from-cyan-500 to-blue-600',
            order: 2
          },
          {
            slug: 'communication',
            title: 'Communication & Imprimerie',
            shortDesc: 'Branding, identité visuelle, impression tous formats et supports publicitaires.',
            description: 'Services de communication visuelle et impression pour votre image de marque.',
            icon: 'Printer',
            color: 'from-red-500 to-pink-600',
            order: 3
          },
          {
            slug: 'generaux',
            title: 'Services Généraux & Agricoles',
            shortDesc: 'Fournitures, maintenance, irrigation intelligente et solutions agricoles innovantes.',
            description: 'Services généraux et solutions agricoles pour optimiser vos activités.',
            icon: 'Leaf',
            color: 'from-green-500 to-emerald-600',
            order: 4
          }
        ]
      })
    }
    
    // Créer les slides du hero par défaut
    const existingSlides = await db.heroSlide.findMany()
    if (existingSlides.length === 0) {
      await db.heroSlide.createMany({
        data: [
          {
            imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80",
            altText: "Technologie moderne",
            order: 0
          },
          {
            imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
            altText: "Bureau moderne",
            order: 1
          },
          {
            imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
            altText: "Digital workspace",
            order: 2
          }
        ]
      })
    }
    
    // Créer les avantages par défaut
    const existingAdvantages = await db.advantage.findMany()
    if (existingAdvantages.length === 0) {
      await db.advantage.createMany({
        data: [
          { icon: 'Zap', text: 'Solutions complètes et intégrées', order: 0 },
          { icon: 'CheckCircle2', text: 'Un seul interlocuteur pour plusieurs besoins', order: 1 },
          { icon: 'Target', text: 'Expertise technique & digitale', order: 2 },
          { icon: 'Zap', text: 'Interventions rapides et fiables', order: 3 },
          { icon: 'CheckCircle2', text: 'Solutions adaptées aux réalités locales', order: 4 },
          { icon: 'Target', text: 'Accompagnement sur mesure', order: 5 }
        ]
      })
    }
    
    // Créer les étapes de méthodologie par défaut
    const existingSteps = await db.methodologyStep.findMany()
    if (existingSteps.length === 0) {
      await db.methodologyStep.createMany({
        data: [
          { title: "Analyse du besoin", description: "Compréhension précise de vos attentes", icon: "Lightbulb", order: 0 },
          { title: "Proposition & Devis", description: "Étude technique et financière détaillée", icon: "FileText", order: 1 },
          { title: "Réalisation", description: "Mise en œuvre par des experts qualifiés", icon: "Wrench", order: 2 },
          { title: "Suivi & Support", description: "Accompagnement continu après livraison", icon: "Headphones", order: 3 }
        ]
      })
    }
    
    return NextResponse.json({ success: true, message: 'Données initialisées avec succès' })
  } catch (error) {
    console.error('Error initializing data:', error)
    return NextResponse.json({ error: 'Erreur lors de l\'initialisation des données' }, { status: 500 })
  }
}

// GET - Vérifier si les données sont initialisées
export async function GET() {
  try {
    const services = await db.service.count()
    const slides = await db.heroSlide.count()
    const advantages = await db.advantage.count()
    const steps = await db.methodologyStep.count()
    
    return NextResponse.json({
      initialized: services > 0 && slides > 0 && advantages > 0 && steps > 0,
      counts: { services, slides, advantages, steps }
    })
  } catch (error) {
    console.error('Error checking initialization:', error)
    return NextResponse.json({ error: 'Erreur lors de la vérification' }, { status: 500 })
  }
}
