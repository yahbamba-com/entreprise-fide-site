import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

// GET - Fetch all partners
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const activeOnly = searchParams.get('active') === 'true'

    const where = activeOnly ? { isActive: true } : {}

    const partners = await prisma.partner.findMany({
      where,
      orderBy: { order: 'asc' }
    })

    return NextResponse.json(partners)

  } catch (error) {
    console.error('Fetch partners error:', error)
    return NextResponse.json({ error: 'Erreur lors de la récupération des partenaires' }, { status: 500 })
  }
}

// POST - Create new partner
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const partner = await prisma.partner.create({
      data: {
        name: data.name,
        description: data.description || null,
        logoUrl: data.logoUrl || null,
        category: data.category || null,
        website: data.website || null,
        order: data.order || 0,
        isActive: data.isActive ?? true
      }
    })

    return NextResponse.json(partner)

  } catch (error) {
    console.error('Create partner error:', error)
    return NextResponse.json({ error: 'Erreur lors de la création du partenaire' }, { status: 500 })
  }
}

// PUT - Update partner
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json()

    if (!data.id) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 })
    }

    const partner = await prisma.partner.update({
      where: { id: data.id },
      data: {
        name: data.name,
        description: data.description || null,
        logoUrl: data.logoUrl || null,
        category: data.category || null,
        website: data.website || null,
        order: data.order,
        isActive: data.isActive
      }
    })

    return NextResponse.json(partner)

  } catch (error) {
    console.error('Update partner error:', error)
    return NextResponse.json({ error: 'Erreur lors de la mise à jour du partenaire' }, { status: 500 })
  }
}

// DELETE - Delete partner
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 })
    }

    await prisma.partner.delete({ where: { id } })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Delete partner error:', error)
    return NextResponse.json({ error: 'Erreur lors de la suppression du partenaire' }, { status: 500 })
  }
}
