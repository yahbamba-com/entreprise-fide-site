'use client'

import { useState, useCallback } from 'react'
import { Upload, X, Loader2, Image as ImageIcon, Film } from 'lucide-react'

interface FileUploadProps {
  onUploadComplete: (url: string) => void
  category?: 'images' | 'videos'
  accept?: string
  currentUrl?: string
}

export default function FileUpload({ 
  onUploadComplete, 
  category = 'images',
  accept,
  currentUrl 
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [preview, setPreview] = useState(currentUrl || '')
  const [error, setError] = useState('')

  const acceptedTypes = accept || (category === 'videos' 
    ? 'video/mp4,video/webm,video/ogg' 
    : 'image/jpeg,image/png,image/gif,image/webp')

  const handleUpload = useCallback(async (file: File) => {
    setError('')
    setIsUploading(true)

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('category', category)

      const response = await fetch('/api/cms/upload', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'upload')
      }

      setPreview(data.file.url)
      onUploadComplete(data.file.url)

    } catch (err: any) {
      setError(err.message || 'Erreur lors de l\'upload')
    } finally {
      setIsUploading(false)
    }
  }, [category, onUploadComplete])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files[0]
    if (file) {
      handleUpload(file)
    }
  }, [handleUpload])

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleUpload(file)
    }
  }, [handleUpload])

  const clearPreview = () => {
    setPreview('')
    onUploadComplete('')
  }

  return (
    <div className="space-y-2">
      {preview ? (
        <div className="relative">
          {category === 'videos' ? (
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
              <video 
                src={preview} 
                className="w-full h-32 object-cover"
                controls
              />
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <Film className="w-3 h-3" />
                Vidéo
              </div>
            </div>
          ) : (
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={preview} 
                alt="Preview" 
                className="w-full h-32 object-cover"
              />
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <ImageIcon className="w-3 h-3" />
                Image
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={clearPreview}
            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`
            relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer
            transition-all duration-200
            ${isDragging 
              ? 'border-[#C9A227] bg-[#C9A227]/10' 
              : 'border-gray-300 hover:border-[#C9A227] hover:bg-gray-50'
            }
          `}
        >
          <input
            type="file"
            accept={acceptedTypes}
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          
          {isUploading ? (
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="w-8 h-8 text-[#C9A227] animate-spin" />
              <span className="text-sm text-gray-500">Upload en cours...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Upload className="w-8 h-8 text-gray-400" />
              <div className="text-sm text-gray-500">
                <span className="text-[#C9A227] font-medium">Cliquez pour uploader</span>
                {' '}ou glissez-déposez
              </div>
              <span className="text-xs text-gray-400">
                {category === 'videos' 
                  ? 'MP4, WebM, OGG (max 50MB)' 
                  : 'JPG, PNG, GIF, WebP (max 50MB)'}
              </span>
            </div>
          )}
        </div>
      )}

      {error && (
        <p className="text-red-500 text-xs">{error}</p>
      )}
    </div>
  )
}
