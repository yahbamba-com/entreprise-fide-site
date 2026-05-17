import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET - Récupérer tous les services
export async function GET() {
  try {
    const services = await db.service.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' }
    })
    
    // Retourner des services par défaut si aucun n'existe
    if (services.length === 0) {
      const defaultServices = [
        {
          id: 'default-1',
          slug: 'securite',
          title: 'Sécurité & Télécommunication',
          shortDesc: 'Réseaux téléphoniques, vidéosurveillance, alarmes, télésurveillance et solutions de sécurité électronique.',
          description: 'Solutions complètes de sécurité électronique et télécommunication pour entreprises et particuliers.',
          icon: 'Shield',
          color: 'from-blue-600 to-blue-800',
          order: 0,
          isActive: true
        },
        {
          id: 'default-2',
          slug: 'energie',
          title: 'Énergie & Solaire',
          shortDesc: 'Électricité générale, installations solaires, groupes électrogènes et solutions énergétiques durables.',
          description: 'Solutions énergétiques complètes incluant l\'électricité générale et les installations solaires.',
          icon: 'Sun',
          color: 'from-orange-500 to-yellow-600',
          order: 1,
          isActive: true
        },
        {
          id: 'default-3',
          slug: 'digital',
          title: 'Informatique & Digital',
          shortDesc: 'Développement web & mobile, applications e-commerce, intégration de paiements mobiles locaux.',
          description: 'Solutions digitales sur mesure : sites web, applications mobiles, intégration de paiements.',
          icon: 'Monitor',
          color: 'from-cyan-500 to-blue-600',
          order: 2,
          isActive: true
        },
        {
          id: 'default-4',
          slug: 'communication',
          title: 'Communication & Imprimerie',
          shortDesc: 'Branding, identité visuelle, impression tous formats et supports publicitaires.',
          description: 'Services de communication visuelle et impression pour votre image de marque.',
          icon: 'Printer',
          color: 'from-red-500 to-pink-600',
          order: 3,
          isActive: true
        },
        {
          id: 'default-5',
          slug: 'generaux',
          title: 'Services Généraux & Agricoles',
          shortDesc: 'Fournitures, maintenance, irrigation intelligente et solutions agricoles innovantes.',
          description: 'Services généraux et solutions agricoles pour optimiser vos activités.',
          icon: 'Leaf',
          color: 'from-green-500 to-emerald-600',
          order: 4,
          isActive: true
        }
      ]
      return NextResponse.json(defaultServices)
    }
    
    return NextResponse.json(services)
  } catch (error) {
    console.error('Error fetching services:', error)
    return NextResponse.json({ error: 'Erreur lors de la récupération des services' }, { status: 500 })
  }
}

// POST - Créer un nouveau service
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const service = await db.service.create({ data })
    return NextResponse.json(service)
  } catch (error) {
    console.error('Error creating service:', error)
    return NextResponse.json({ error: 'Erreur lors de la création du service' }, { status: 500 })
  }
}

// PUT - Mettre à jour un service
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json()
    const { id, ...updateData } = data
    
    const service = await db.service.update({
      where: { id },
      data: updateData
    })
    
    return NextResponse.json(service)
  } catch (error) {
    console.error('Error updating service:', error)
    return NextResponse.json({ error: 'Erreur lors de la mise à jour du service' }, { status: 500 })
  }
}

// DELETE - Supprimer un service
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 })
    }
    
    await db.service.update({
      where: { id },
      data: { isActive: false }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting service:', error)
    return NextResponse.json({ error: 'Erreur lors de la suppression du service' }, { status: 500 })
  }
}
