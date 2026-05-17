import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { prisma } from '@/lib/db'

// Allowed file types
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
const ALLOWED_VIDEO_TYPES = ['video/mp4', 'video/webm', 'video/ogg']
const MAX_FILE_SIZE = 50 * 1024 * 1024 // 50MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null
    const category = formData.get('category') as string || 'images'

    if (!file) {
      return NextResponse.json({ error: 'Aucun fichier fourni' }, { status: 400 })
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'Fichier trop volumineux (max 50MB)' }, { status: 400 })
    }

    // Validate file type
    const isImage = ALLOWED_IMAGE_TYPES.includes(file.type)
    const isVideo = ALLOWED_VIDEO_TYPES.includes(file.type)

    if (!isImage && !isVideo) {
      return NextResponse.json({ 
        error: 'Type de fichier non autorisé. Formats acceptés: JPG, PNG, GIF, WebP, MP4, WebM' 
      }, { status: 400 })
    }

    // Determine category based on file type
    const fileCategory = isImage ? 'images' : 'videos'
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', fileCategory)

    // Create directory if it doesn't exist
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    // Generate unique filename
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 8)
    const extension = file.name.split('.').pop() || 'bin'
    const filename = `${timestamp}-${randomString}.${extension}`
    const filepath = path.join(uploadDir, filename)

    // Write file
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    await writeFile(filepath, buffer)

    // Save to database
    const fileRecord = await prisma.fileUpload.create({
      data: {
        filename,
        originalName: file.name,
        mimeType: file.type,
        size: file.size,
        path: `/uploads/${fileCategory}/${filename}`,
        category: fileCategory
      }
    })

    return NextResponse.json({
      success: true,
      file: {
        id: fileRecord.id,
        url: fileRecord.path,
        originalName: fileRecord.originalName,
        size: fileRecord.size
      }
    })

  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de l\'upload du fichier' 
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')

    const where = category ? { category } : {}

    const files = await prisma.fileUpload.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 50
    })

    return NextResponse.json({ files })

  } catch (error) {
    console.error('Fetch files error:', error)
    return NextResponse.json({ error: 'Erreur lors de la récupération des fichiers' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 })
    }

    // Get file info
    const file = await prisma.fileUpload.findUnique({ where: { id } })
    if (!file) {
      return NextResponse.json({ error: 'Fichier non trouvé' }, { status: 404 })
    }

    // Delete from database
    await prisma.fileUpload.delete({ where: { id } })

    // Delete file from disk
    const filepath = path.join(process.cwd(), 'public', file.path)
    const { unlink } = await import('fs/promises')
    try {
      await unlink(filepath)
    } catch {
      // File might not exist, continue
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Delete file error:', error)
    return NextResponse.json({ error: 'Erreur lors de la suppression' }, { status: 500 })
  }
}
