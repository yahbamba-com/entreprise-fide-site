'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { 
  Settings, 
  Image as ImageIcon, 
  Video, 
  Layers, 
  CheckCircle2,
  Plus,
  Trash2,
  Edit,
  Save,
  Loader2,
  ArrowLeft,
  Monitor,
  Sun,
  Shield,
  Printer,
  Leaf,
  Zap,
  Target,
  Handshake,
  Upload
} from 'lucide-react'
import Link from 'next/link'
import { useToast } from "@/hooks/use-toast"
import FileUpload from "@/components/fide/FileUpload"

// Types
interface SiteConfig {
  id?: string
  companyName: string
  slogan: string
  description: string
  phone: string
  email: string
  address: string
  website?: string
  facebook?: string
  instagram?: string
  linkedin?: string
  youtube?: string
  logoUrl?: string
}

interface HeroSlide {
  id: string
  title?: string
  subtitle?: string
  imageUrl: string
  altText?: string
  order: number
  isActive: boolean
}

interface Service {
  id?: string
  slug: string
  title: string
  shortDesc: string
  description: string
  icon: string
  color: string
  imageUrl?: string
  features?: string
  order: number
  isActive: boolean
}

interface VideoItem {
  id?: string
  title: string
  description?: string
  videoUrl: string
  thumbnailUrl?: string
  platform: string
  section?: string
  order: number
  isActive: boolean
}

interface GalleryImage {
  id?: string
  title?: string
  description?: string
  imageUrl: string
  category?: string
  order: number
  isActive: boolean
}

interface Advantage {
  id?: string
  icon: string
  text: string
  order: number
  isActive: boolean
}

interface Partner {
  id?: string
  name: string
  description?: string
  logoUrl?: string
  category?: string
  website?: string
  order: number
  isActive: boolean
}

// Icon mapping
const iconMap: Record<string, any> = {
  Shield, Sun, Monitor, Printer, Leaf, Zap, Target, CheckCircle2
}

export default function AdminPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  
  // State for all content
  const [siteConfig, setSiteConfig] = useState<SiteConfig>({
    companyName: 'ENTREPRISE FIDE',
    slogan: 'Sécurité • Énergie • Digital • Communication',
    description: '',
    phone: '',
    email: '',
    address: ''
  })
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [videos, setVideos] = useState<VideoItem[]>([])
  const [gallery, setGallery] = useState<GalleryImage[]>([])
  const [advantages, setAdvantages] = useState<Advantage[]>([])
  const [partners, setPartners] = useState<Partner[]>([])
  
  // Active tab
  const [activeTab, setActiveTab] = useState('config')
  
  // Fetch all data on mount
  useEffect(() => {
    fetchAllData()
  }, [])
  
  const fetchAllData = async () => {
    setLoading(true)
    try {
      // Initialize data first
      await fetch('/api/cms/init', { method: 'POST' })
      
      // Fetch all data in parallel
      const [configRes, slidesRes, servicesRes, videosRes, galleryRes, advantagesRes, partnersRes] = await Promise.all([
        fetch('/api/cms/site-config'),
        fetch('/api/cms/hero-slides'),
        fetch('/api/cms/services'),
        fetch('/api/cms/videos'),
        fetch('/api/cms/gallery'),
        fetch('/api/cms/advantages'),
        fetch('/api/cms/partners')
      ])
      
      if (configRes.ok) setSiteConfig(await configRes.json())
      if (slidesRes.ok) setHeroSlides(await slidesRes.json())
      if (servicesRes.ok) setServices(await servicesRes.json())
      if (videosRes.ok) setVideos(await videosRes.json())
      if (galleryRes.ok) setGallery(await galleryRes.json())
      if (advantagesRes.ok) setAdvantages(await advantagesRes.json())
      if (partnersRes.ok) setPartners(await partnersRes.json())
      
    } catch (error) {
      console.error('Error fetching data:', error)
      toast({
        title: "Erreur",
        description: "Impossible de charger les données",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }
  
  // Save site config
  const saveSiteConfig = async () => {
    setSaving(true)
    try {
      const res = await fetch('/api/cms/site-config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(siteConfig)
      })
      
      if (res.ok) {
        toast({ title: "Succès", description: "Configuration sauvegardée" })
      }
    } catch (error) {
      toast({ title: "Erreur", description: "Impossible de sauvegarder", variant: "destructive" })
    } finally {
      setSaving(false)
    }
  }
  
  // Add new hero slide
  const addHeroSlide = () => {
    setHeroSlides([...heroSlides, {
      id: `new-${Date.now()}`,
      imageUrl: '',
      altText: '',
      order: heroSlides.length,
      isActive: true
    }])
  }
  
  // Update hero slide
  const updateHeroSlide = (index: number, field: string, value: any) => {
    const updated = [...heroSlides]
    updated[index] = { ...updated[index], [field]: value }
    setHeroSlides(updated)
  }
  
  // Save hero slides
  const saveHeroSlides = async () => {
    setSaving(true)
    try {
      for (const slide of heroSlides) {
        if (slide.id.startsWith('new-')) {
          await fetch('/api/cms/hero-slides', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(slide)
          })
        } else {
          await fetch(`/api/cms/hero-slides?id=${slide.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(slide)
          })
        }
      }
      toast({ title: "Succès", description: "Slides sauvegardés" })
      fetchAllData()
    } catch (error) {
      toast({ title: "Erreur", description: "Impossible de sauvegarder", variant: "destructive" })
    } finally {
      setSaving(false)
    }
  }
  
  // Add new video
  const addVideo = () => {
    setVideos([...videos, {
      id: `new-${Date.now()}`,
      title: '',
      videoUrl: '',
      platform: 'youtube',
      section: 'home',
      order: videos.length,
      isActive: true
    }])
  }
  
  // Update video
  const updateVideo = (index: number, field: string, value: any) => {
    const updated = [...videos]
    updated[index] = { ...updated[index], [field]: value }
    setVideos(updated)
  }
  
  // Save videos
  const saveVideos = async () => {
    setSaving(true)
    try {
      for (const video of videos) {
        if (video.id?.startsWith('new-')) {
          await fetch('/api/cms/videos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(video)
          })
        } else if (video.id) {
          await fetch('/api/cms/videos', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(video)
          })
        }
      }
      toast({ title: "Succès", description: "Vidéos sauvegardées" })
      fetchAllData()
    } catch (error) {
      toast({ title: "Erreur", description: "Impossible de sauvegarder", variant: "destructive" })
    } finally {
      setSaving(false)
    }
  }
  
  // Add new gallery image
  const addGalleryImage = () => {
    setGallery([...gallery, {
      id: `new-${Date.now()}`,
      imageUrl: '',
      category: 'projets',
      order: gallery.length,
      isActive: true
    }])
  }
  
  // Update gallery image
  const updateGalleryImage = (index: number, field: string, value: any) => {
    const updated = [...gallery]
    updated[index] = { ...updated[index], [field]: value }
    setGallery(updated)
  }
  
  // Save gallery
  const saveGallery = async () => {
    setSaving(true)
    try {
      for (const image of gallery) {
        if (image.id?.startsWith('new-')) {
          await fetch('/api/cms/gallery', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(image)
          })
        } else if (image.id) {
          await fetch('/api/cms/gallery', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(image)
          })
        }
      }
      toast({ title: "Succès", description: "Galerie sauvegardée" })
      fetchAllData()
    } catch (error) {
      toast({ title: "Erreur", description: "Impossible de sauvegarder", variant: "destructive" })
    } finally {
      setSaving(false)
    }
  }
  
  // Update service
  const updateService = (index: number, field: string, value: any) => {
    const updated = [...services]
    updated[index] = { ...updated[index], [field]: value }
    setServices(updated)
  }
  
  // Save services
  const saveServices = async () => {
    setSaving(true)
    try {
      for (const service of services) {
        if (service.id) {
          await fetch('/api/cms/services', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(service)
          })
        }
      }
      toast({ title: "Succès", description: "Services sauvegardés" })
    } catch (error) {
      toast({ title: "Erreur", description: "Impossible de sauvegarder", variant: "destructive" })
    } finally {
      setSaving(false)
    }
  }
  
  // Update advantage
  const updateAdvantage = (index: number, field: string, value: any) => {
    const updated = [...advantages]
    updated[index] = { ...updated[index], [field]: value }
    setAdvantages(updated)
  }
  
  // Save advantages
  const saveAdvantages = async () => {
    setSaving(true)
    try {
      for (const advantage of advantages) {
        if (advantage.id) {
          await fetch('/api/cms/advantages', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(advantage)
          })
        }
      }
      toast({ title: "Succès", description: "Avantages sauvegardés" })
    } catch (error) {
      toast({ title: "Erreur", description: "Impossible de sauvegarder", variant: "destructive" })
    } finally {
      setSaving(false)
    }
  }
  
  // Add new partner
  const addPartner = () => {
    setPartners([...partners, {
      id: `new-${Date.now()}`,
      name: '',
      description: '',
      logoUrl: '',
      category: '',
      website: '',
      order: partners.length,
      isActive: true
    }])
  }
  
  // Update partner
  const updatePartner = (index: number, field: string, value: any) => {
    const updated = [...partners]
    updated[index] = { ...updated[index], [field]: value }
    setPartners(updated)
  }
  
  // Delete partner
  const deletePartner = async (index: number) => {
    const partner = partners[index]
    if (partner.id && !partner.id.startsWith('new-')) {
      try {
        await fetch(`/api/cms/partners?id=${partner.id}`, { method: 'DELETE' })
      } catch (error) {
        console.error('Delete error:', error)
      }
    }
    const updated = partners.filter((_, i) => i !== index)
    setPartners(updated)
  }
  
  // Save partners
  const savePartners = async () => {
    setSaving(true)
    try {
      for (const partner of partners) {
        if (partner.id?.startsWith('new-')) {
          await fetch('/api/cms/partners', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(partner)
          })
        } else if (partner.id) {
          await fetch('/api/cms/partners', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(partner)
          })
        }
      }
      toast({ title: "Succès", description: "Partenaires sauvegardés" })
      fetchAllData()
    } catch (error) {
      toast({ title: "Erreur", description: "Impossible de sauvegarder", variant: "destructive" })
    } finally {
      setSaving(false)
    }
  }
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-8 h-8 animate-spin text-[#003366]" />
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#003366] text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
              Retour au site
            </Link>
            <div className="h-6 w-px bg-white/30" />
            <h1 className="text-xl font-bold">Panneau d'Administration</h1>
          </div>
          <Badge variant="outline" className="text-white border-white/30">
            CMS FIDE
          </Badge>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 md:grid-cols-7 gap-2 mb-8 bg-white p-2 rounded-xl shadow overflow-x-auto">
            <TabsTrigger value="config" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Config</span>
            </TabsTrigger>
            <TabsTrigger value="hero" className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Hero</span>
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span className="hidden sm:inline">Services</span>
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              <span className="hidden sm:inline">Vidéos</span>
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Galerie</span>
            </TabsTrigger>
            <TabsTrigger value="partners" className="flex items-center gap-2">
              <Handshake className="w-4 h-4" />
              <span className="hidden sm:inline">Partenaires</span>
            </TabsTrigger>
            <TabsTrigger value="advantages" className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span className="hidden sm:inline">Avantages</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Configuration Tab */}
          <TabsContent value="config">
            <Card>
              <CardHeader>
                <CardTitle>Configuration du site</CardTitle>
                <CardDescription>Modifiez les informations générales de votre entreprise</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Nom de l'entreprise</Label>
                    <Input
                      id="companyName"
                      value={siteConfig.companyName}
                      onChange={(e) => setSiteConfig({...siteConfig, companyName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="slogan">Slogan</Label>
                    <Input
                      id="slogan"
                      value={siteConfig.slogan}
                      onChange={(e) => setSiteConfig({...siteConfig, slogan: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={siteConfig.description}
                    onChange={(e) => setSiteConfig({...siteConfig, description: e.target.value})}
                    rows={3}
                  />
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      value={siteConfig.phone}
                      onChange={(e) => setSiteConfig({...siteConfig, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={siteConfig.email}
                      onChange={(e) => setSiteConfig({...siteConfig, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Adresse</Label>
                    <Input
                      id="address"
                      value={siteConfig.address}
                      onChange={(e) => setSiteConfig({...siteConfig, address: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Logo de l'entreprise</Label>
                  <FileUpload
                    onUploadComplete={(url) => setSiteConfig({...siteConfig, logoUrl: url})}
                    currentUrl={siteConfig.logoUrl}
                    category="images"
                  />
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Réseaux sociaux</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label>Facebook</Label>
                      <Input
                        value={siteConfig.facebook || ''}
                        onChange={(e) => setSiteConfig({...siteConfig, facebook: e.target.value})}
                        placeholder="https://facebook.com/..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Instagram</Label>
                      <Input
                        value={siteConfig.instagram || ''}
                        onChange={(e) => setSiteConfig({...siteConfig, instagram: e.target.value})}
                        placeholder="https://instagram.com/..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>LinkedIn</Label>
                      <Input
                        value={siteConfig.linkedin || ''}
                        onChange={(e) => setSiteConfig({...siteConfig, linkedin: e.target.value})}
                        placeholder="https://linkedin.com/..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>YouTube</Label>
                      <Input
                        value={siteConfig.youtube || ''}
                        onChange={(e) => setSiteConfig({...siteConfig, youtube: e.target.value})}
                        placeholder="https://youtube.com/..."
                      />
                    </div>
                  </div>
                </div>
                
                <Button onClick={saveSiteConfig} disabled={saving} className="bg-[#003366] hover:bg-[#004488]">
                  {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                  Sauvegarder la configuration
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Hero Slides Tab */}
          <TabsContent value="hero">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Images du Hero (Carrousel)</CardTitle>
                    <CardDescription>Gérez les images qui défilent sur la page d'accueil</CardDescription>
                  </div>
                  <Button onClick={addHeroSlide} variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {heroSlides.map((slide, index) => (
                  <div key={slide.id} className="border rounded-lg p-4 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-1 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Image du slide</Label>
                            <FileUpload
                              onUploadComplete={(url) => updateHeroSlide(index, 'imageUrl', url)}
                              currentUrl={slide.imageUrl}
                              category="images"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Texte alternatif</Label>
                            <Input
                              value={slide.altText || ''}
                              onChange={(e) => updateHeroSlide(index, 'altText', e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Titre (optionnel)</Label>
                            <Input
                              value={slide.title || ''}
                              onChange={(e) => updateHeroSlide(index, 'title', e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Ordre</Label>
                            <Input
                              type="number"
                              value={slide.order}
                              onChange={(e) => updateHeroSlide(index, 'order', parseInt(e.target.value))}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button onClick={saveHeroSlides} disabled={saving} className="bg-[#003366] hover:bg-[#004488]">
                  {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                  Sauvegarder les slides
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Services Tab */}
          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Services</CardTitle>
                <CardDescription>Modifiez les descriptions de vos services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {services.map((service, index) => (
                  <div key={service.id} className="border rounded-lg p-4 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white`}>
                        {iconMap[service.icon] && (() => {
                          const IconComponent = iconMap[service.icon]
                          return <IconComponent className="w-6 h-6" />
                        })()}
                      </div>
                      <div className="flex-1">
                        <Input
                          value={service.title}
                          onChange={(e) => updateService(index, 'title', e.target.value)}
                          className="font-semibold text-lg border-0 p-0 focus-visible:ring-0"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Description courte</Label>
                      <Textarea
                        value={service.shortDesc}
                        onChange={(e) => updateService(index, 'shortDesc', e.target.value)}
                        rows={2}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Description complète</Label>
                      <Textarea
                        value={service.description}
                        onChange={(e) => updateService(index, 'description', e.target.value)}
                        rows={3}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Image du service</Label>
                        <FileUpload
                          onUploadComplete={(url) => updateService(index, 'imageUrl', url)}
                          currentUrl={service.imageUrl}
                          category="images"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Couleur (gradient)</Label>
                        <Input
                          value={service.color}
                          onChange={(e) => updateService(index, 'color', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button onClick={saveServices} disabled={saving} className="bg-[#003366] hover:bg-[#004488]">
                  {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                  Sauvegarder les services
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Videos Tab */}
          <TabsContent value="videos">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Vidéos</CardTitle>
                    <CardDescription>Ajoutez des vidéos YouTube ou Vimeo à votre site</CardDescription>
                  </div>
                  <Button onClick={addVideo} variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter une vidéo
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {videos.map((video, index) => (
                  <div key={video.id} className="border rounded-lg p-4 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Titre</Label>
                        <Input
                          value={video.title}
                          onChange={(e) => updateVideo(index, 'title', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>URL de la vidéo (YouTube/Vimeo)</Label>
                        <Input
                          value={video.videoUrl}
                          onChange={(e) => updateVideo(index, 'videoUrl', e.target.value)}
                          placeholder="https://youtube.com/watch?v=..."
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>Plateforme</Label>
                        <select
                          value={video.platform}
                          onChange={(e) => updateVideo(index, 'platform', e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                        >
                          <option value="youtube">YouTube</option>
                          <option value="vimeo">Vimeo</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label>Section</Label>
                        <select
                          value={video.section || 'home'}
                          onChange={(e) => updateVideo(index, 'section', e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                        >
                          <option value="home">Page d'accueil</option>
                          <option value="about">À propos</option>
                          <option value="services">Services</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label>Ordre</Label>
                        <Input
                          type="number"
                          value={video.order}
                          onChange={(e) => updateVideo(index, 'order', parseInt(e.target.value))}
                        />
                      </div>
                    </div>
                    {video.videoUrl && (
                      <div className="aspect-video rounded overflow-hidden bg-gray-100">
                        {video.platform === 'youtube' && video.videoUrl.includes('youtube') && (
                          <iframe
                            src={`https://www.youtube.com/embed/${video.videoUrl.split('v=')[1]?.split('&')[0] || video.videoUrl.split('/').pop()}`}
                            className="w-full h-full"
                            allowFullScreen
                          />
                        )}
                      </div>
                    )}
                  </div>
                ))}
                
                <Button onClick={saveVideos} disabled={saving} className="bg-[#003366] hover:bg-[#004488]">
                  {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                  Sauvegarder les vidéos
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Gallery Tab */}
          <TabsContent value="gallery">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Galerie d'images</CardTitle>
                    <CardDescription>Ajoutez des photos de vos projets et réalisations</CardDescription>
                  </div>
                  <Button onClick={addGalleryImage} variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter une image
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {gallery.map((image, index) => (
                    <div key={image.id} className="border rounded-lg p-4 space-y-2">
                      <div className="space-y-2">
                        <Label>Image</Label>
                        <FileUpload
                          onUploadComplete={(url) => updateGalleryImage(index, 'imageUrl', url)}
                          currentUrl={image.imageUrl}
                          category="images"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Titre</Label>
                        <Input
                          value={image.title || ''}
                          onChange={(e) => updateGalleryImage(index, 'title', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Catégorie</Label>
                        <select
                          value={image.category || 'projets'}
                          onChange={(e) => updateGalleryImage(index, 'category', e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                        >
                          <option value="projets">Projets</option>
                          <option value="equipe">Équipe</option>
                          <option value="realisations">Réalisations</option>
                          <option value="evenements">Événements</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button onClick={saveGallery} disabled={saving} className="bg-[#003366] hover:bg-[#004488] mt-6">
                  {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                  Sauvegarder la galerie
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Partners Tab */}
          <TabsContent value="partners">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Partenaires</CardTitle>
                    <CardDescription>Gérez vos partenaires et leurs logos</CardDescription>
                  </div>
                  <Button onClick={addPartner} variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter un partenaire
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {partners.map((partner, index) => (
                  <div key={partner.id} className="border rounded-lg p-4 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Nom du partenaire</Label>
                          <Input
                            value={partner.name}
                            onChange={(e) => updatePartner(index, 'name', e.target.value)}
                            placeholder="Nom de l'entreprise"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Catégorie</Label>
                          <select
                            value={partner.category || ''}
                            onChange={(e) => updatePartner(index, 'category', e.target.value)}
                            className="w-full px-3 py-2 border rounded-md"
                          >
                            <option value="">Sélectionner...</option>
                            <option value="Agro-export">Agro-export</option>
                            <option value="Agro-industrie">Agro-industrie</option>
                            <option value="Institution">Institution</option>
                            <option value="Média">Média</option>
                            <option value="Technologie">Technologie</option>
                            <option value="Autre">Autre</option>
                          </select>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deletePartner(index)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        value={partner.description || ''}
                        onChange={(e) => updatePartner(index, 'description', e.target.value)}
                        rows={2}
                        placeholder="Description du partenaire..."
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Logo</Label>
                        <FileUpload
                          onUploadComplete={(url) => updatePartner(index, 'logoUrl', url)}
                          currentUrl={partner.logoUrl}
                          category="images"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Site web</Label>
                        <Input
                          value={partner.website || ''}
                          onChange={(e) => updatePartner(index, 'website', e.target.value)}
                          placeholder="https://..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
                
                {partners.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    Aucun partenaire. Cliquez sur "Ajouter un partenaire" pour commencer.
                  </div>
                )}
                
                <Button onClick={savePartners} disabled={saving} className="bg-[#003366] hover:bg-[#004488]">
                  {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                  Sauvegarder les partenaires
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Advantages Tab */}
          <TabsContent value="advantages">
            <Card>
              <CardHeader>
                <CardTitle>Pourquoi nous choisir</CardTitle>
                <CardDescription>Modifiez vos points forts et avantages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={advantage.id} className="flex items-center gap-4 border rounded-lg p-4">
                    <div className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center text-white">
                      {iconMap[advantage.icon] && (() => {
                        const IconComponent = iconMap[advantage.icon]
                        return <IconComponent className="w-5 h-5" />
                      })()}
                    </div>
                    <div className="flex-1 grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Texte</Label>
                        <Input
                          value={advantage.text}
                          onChange={(e) => updateAdvantage(index, 'text', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Icône</Label>
                        <select
                          value={advantage.icon}
                          onChange={(e) => updateAdvantage(index, 'icon', e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                        >
                          <option value="Zap">Zap (Éclair)</option>
                          <option value="CheckCircle2">Check (Validation)</option>
                          <option value="Target">Target (Cible)</option>
                          <option value="Shield">Shield (Bouclier)</option>
                          <option value="Sun">Sun (Soleil)</option>
                          <option value="Monitor">Monitor (Écran)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button onClick={saveAdvantages} disabled={saving} className="bg-[#003366] hover:bg-[#004488]">
                  {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                  Sauvegarder les avantages
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
