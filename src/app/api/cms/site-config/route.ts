import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET - Récupérer la configuration du site
export async function GET() {
  try {
    let config = await db.siteConfig.findFirst()
    
    // Créer une configuration par défaut si elle n'existe pas
    if (!config) {
      config = await db.siteConfig.create({
        data: {
          companyName: "ENTREPRISE FIDE",
          slogan: "Sécurité • Énergie • Digital • Communication",
          description: "Solutions technologiques, sécuritaires, énergétiques et digitales pour entreprises, institutions, ONG et projets stratégiques.",
          phone: "+225 07 07 14 96 06",
          email: "entreprisefide@gmail.com",
          address: "Abidjan, Côte d'Ivoire"
        }
      })
    }
    
    return NextResponse.json(config)
  } catch (error) {
    console.error('Error fetching site config:', error)
    return NextResponse.json({ error: 'Erreur lors de la récupération de la configuration' }, { status: 500 })
  }
}

// PUT - Mettre à jour la configuration du site
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json()
    
    let config = await db.siteConfig.findFirst()
    
    if (!config) {
      config = await db.siteConfig.create({ data })
    } else {
      config = await db.siteConfig.update({
        where: { id: config.id },
        data
      })
    }
    
    return NextResponse.json(config)
  } catch (error) {
    console.error('Error updating site config:', error)
    return NextResponse.json({ error: 'Erreur lors de la mise à jour de la configuration' }, { status: 500 })
  }
}
