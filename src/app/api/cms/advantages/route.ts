import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET - Récupérer tous les avantages
export async function GET() {
  try {
    const advantages = await db.advantage.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' }
    })
    
    // Retourner des avantages par défaut si aucun n'existe
    if (advantages.length === 0) {
      const defaultAdvantages = [
        { id: 'default-1', icon: 'Zap', text: 'Solutions complètes et intégrées', order: 0, isActive: true },
        { id: 'default-2', icon: 'CheckCircle2', text: 'Un seul interlocuteur pour plusieurs besoins', order: 1, isActive: true },
        { id: 'default-3', icon: 'Target', text: 'Expertise technique & digitale', order: 2, isActive: true },
        { id: 'default-4', icon: 'Zap', text: 'Interventions rapides et fiables', order: 3, isActive: true },
        { id: 'default-5', icon: 'CheckCircle2', text: 'Solutions adaptées aux réalités locales', order: 4, isActive: true },
        { id: 'default-6', icon: 'Target', text: 'Accompagnement sur mesure', order: 5, isActive: true }
      ]
      return NextResponse.json(defaultAdvantages)
    }
    
    return NextResponse.json(advantages)
  } catch (error) {
    console.error('Error fetching advantages:', error)
    return NextResponse.json({ error: 'Erreur lors de la récupération des avantages' }, { status: 500 })
  }
}

// POST - Créer un nouvel avantage
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const advantage = await db.advantage.create({ data })
    return NextResponse.json(advantage)
  } catch (error) {
    console.error('Error creating advantage:', error)
    return NextResponse.json({ error: 'Erreur lors de la création de l\'avantage' }, { status: 500 })
  }
}

// PUT - Mettre à jour un avantage
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json()
    const { id, ...updateData } = data
    
    const advantage = await db.advantage.update({
      where: { id },
      data: updateData
    })
    
    return NextResponse.json(advantage)
  } catch (error) {
    console.error('Error updating advantage:', error)
    return NextResponse.json({ error: 'Erreur lors de la mise à jour de l\'avantage' }, { status: 500 })
  }
}

// DELETE - Supprimer un avantage
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 })
    }
    
    await db.advantage.update({
      where: { id },
      data: { isActive: false }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting advantage:', error)
    return NextResponse.json({ error: 'Erreur lors de la suppression de l\'avantage' }, { status: 500 })
  }
}
