import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET - Récupérer toutes les images de la galerie
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    
    const where: any = { isActive: true }
    if (category) where.category = category
    
    const images = await db.galleryImage.findMany({
      where,
      orderBy: { order: 'asc' }
    })
    
    return NextResponse.json(images)
  } catch (error) {
    console.error('Error fetching gallery images:', error)
    return NextResponse.json({ error: 'Erreur lors de la récupération des images' }, { status: 500 })
  }
}

// POST - Ajouter une nouvelle image
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const image = await db.galleryImage.create({ data })
    return NextResponse.json(image)
  } catch (error) {
    console.error('Error creating gallery image:', error)
    return NextResponse.json({ error: 'Erreur lors de l\'ajout de l\'image' }, { status: 500 })
  }
}

// PUT - Mettre à jour une image
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json()
    const { id, ...updateData } = data
    
    const image = await db.galleryImage.update({
      where: { id },
      data: updateData
    })
    
    return NextResponse.json(image)
  } catch (error) {
    console.error('Error updating gallery image:', error)
    return NextResponse.json({ error: 'Erreur lors de la mise à jour de l\'image' }, { status: 500 })
  }
}

// DELETE - Supprimer une image
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 })
    }
    
    await db.galleryImage.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting gallery image:', error)
    return NextResponse.json({ error: 'Erreur lors de la suppression de l\'image' }, { status: 500 })
  }
}
