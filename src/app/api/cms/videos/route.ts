import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET - Récupérer toutes les vidéos
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const section = searchParams.get('section')
    
    const where: any = { isActive: true }
    if (section) where.section = section
    
    const videos = await db.video.findMany({
      where,
      orderBy: { order: 'asc' }
    })
    
    return NextResponse.json(videos)
  } catch (error) {
    console.error('Error fetching videos:', error)
    return NextResponse.json({ error: 'Erreur lors de la récupération des vidéos' }, { status: 500 })
  }
}

// POST - Créer une nouvelle vidéo
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Extraire l'ID de la vidéo YouTube/Vimeo
    let thumbnailUrl = data.thumbnailUrl
    if (!thumbnailUrl && data.videoUrl) {
      if (data.videoUrl.includes('youtube.com') || data.videoUrl.includes('youtu.be')) {
        const videoId = extractYouTubeId(data.videoUrl)
        if (videoId) {
          thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
        }
      }
    }
    
    const video = await db.video.create({
      data: {
        ...data,
        thumbnailUrl
      }
    })
    
    return NextResponse.json(video)
  } catch (error) {
    console.error('Error creating video:', error)
    return NextResponse.json({ error: 'Erreur lors de la création de la vidéo' }, { status: 500 })
  }
}

// PUT - Mettre à jour une vidéo
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json()
    const { id, ...updateData } = data
    
    const video = await db.video.update({
      where: { id },
      data: updateData
    })
    
    return NextResponse.json(video)
  } catch (error) {
    console.error('Error updating video:', error)
    return NextResponse.json({ error: 'Erreur lors de la mise à jour de la vidéo' }, { status: 500 })
  }
}

// DELETE - Supprimer une vidéo
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 })
    }
    
    await db.video.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting video:', error)
    return NextResponse.json({ error: 'Erreur lors de la suppression de la vidéo' }, { status: 500 })
  }
}

// Fonction utilitaire pour extraire l'ID YouTube
function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/shorts\/([^&\n?#]+)/
  ]
  
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  
  return null
}
