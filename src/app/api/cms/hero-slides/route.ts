import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET - Récupérer tous les slides du hero
export async function GET() {
  try {
    const slides = await db.heroSlide.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' }
    })
    
    // Retourner des slides par défaut si aucun n'existe
    if (slides.length === 0) {
      const defaultSlides = [
        {
          id: 'default-1',
          imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80",
          altText: "Technologie moderne",
          order: 0,
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 'default-2',
          imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
          altText: "Bureau moderne",
          order: 1,
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 'default-3',
          imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
          altText: "Digital workspace",
          order: 2,
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
      return NextResponse.json(defaultSlides)
    }
    
    return NextResponse.json(slides)
  } catch (error) {
    console.error('Error fetching hero slides:', error)
    return NextResponse.json({ error: 'Erreur lors de la récupération des slides' }, { status: 500 })
  }
}

// POST - Créer un nouveau slide
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const slide = await db.heroSlide.create({ data })
    return NextResponse.json(slide)
  } catch (error) {
    console.error('Error creating hero slide:', error)
    return NextResponse.json({ error: 'Erreur lors de la création du slide' }, { status: 500 })
  }
}

// PUT - Mettre à jour l'ordre des slides
export async function PUT(request: NextRequest) {
  try {
    const { slides } = await request.json()
    
    for (const slide of slides) {
      await db.heroSlide.update({
        where: { id: slide.id },
        data: { order: slide.order }
      })
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating slide order:', error)
    return NextResponse.json({ error: 'Erreur lors de la mise à jour de l\'ordre' }, { status: 500 })
  }
}

// DELETE - Supprimer un slide
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 })
    }
    
    await db.heroSlide.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting hero slide:', error)
    return NextResponse.json({ error: 'Erreur lors de la suppression du slide' }, { status: 500 })
  }
}
