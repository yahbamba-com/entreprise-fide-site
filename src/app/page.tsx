'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ChevronRight, 
  ChevronDown,
  Play,
  Shield, 
  Sun, 
  Monitor, 
  Printer, 
  Leaf,
  Zap,
  Target,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Users,
  Building2,
  Globe,
  Cpu,
  Radio,
  Camera,
  Wifi,
  Battery,
  Droplets,
  Server,
  Smartphone,
  Palette,
  Wrench,
  Tractor,
  Waves,
  Globe2,
  MapPinned,
  Handshake,
  Upload
} from 'lucide-react'

// Framer Motion
import { motion } from 'framer-motion'

// Types
interface SiteConfig {
  companyName: string
  slogan: string
  description: string
  phone: string
  email: string
  address: string
  logoUrl?: string
}

// Stats data
const stats = [
  { number: '15+', label: 'Années d\'expérience', icon: Award },
  { number: '500+', label: 'Projets réalisés', icon: Building2 },
  { number: '200+', label: 'Clients satisfaits', icon: Users },
  { number: '7', label: 'Pays couverts', icon: Globe },
]

// Business Divisions
const divisions = [
  {
    id: 'securite',
    title: 'Télécommunications & Sécurité Électronique',
    subtitle: 'Solutions de connectivité et protection avancées',
    description: 'Déploiement d\'infrastructures télécom et systèmes de sécurité de nouvelle génération pour entreprises et institutions.',
    icon: Radio,
    color: 'from-blue-600 to-cyan-500',
    services: ['Réseaux téléphoniques', 'Interphones & visiophones', 'Alarmes sans fil', 'Vidéosurveillance CCTV', 'Radiocommunication', 'VSAT'],
    image: '/services/securite.jpeg',
    features: ['Installation professionnelle', 'Maintenance 24/7', 'Support technique']
  },
  {
    id: 'energie',
    title: 'Énergie, Électricité & Solaire',
    subtitle: 'Solutions énergétiques durables et fiables',
    description: 'Conception et installation de systèmes électriques et solaires pour une autonomie énergétique optimale.',
    icon: Sun,
    color: 'from-orange-500 to-yellow-500',
    services: ['Électricité générale', 'Systèmes solaires', 'Groupes électrogènes', 'Froid industriel', 'Pompage solaire'],
    image: '/services/energie.jpeg',
    features: ['Études personnalisées', 'Installation clé en main', 'Garantie étendue']
  },
  {
    id: 'digital',
    title: 'IT & Ingénierie Digitale',
    subtitle: 'Transformation numérique et innovation technologique',
    description: 'Développement de solutions numériques sur mesure et infrastructures IT pour l\'entreprise moderne.',
    icon: Cpu,
    color: 'from-purple-600 to-pink-500',
    services: ['Réseaux informatiques', 'Développement web', 'Applications mobiles', 'ERP & CRM', 'Paiements mobiles'],
    image: '/services/digital.png',
    features: ['Technologies modernes', 'Solutions sur mesure', 'Support continu']
  },
  {
    id: 'communication',
    title: 'Branding, Communication & Impression',
    subtitle: 'Identité visuelle et supports de communication',
    description: 'Création d\'identités visuelles impactantes et production de supports publicitaires de haute qualité.',
    icon: Palette,
    color: 'from-rose-500 to-red-500',
    services: ['Identité visuelle', 'Impression grand format', 'Bâches & affiches', 'Branding véhicules', 'Produits promotionnels'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    features: ['Design créatif', 'Production rapide', 'Qualité premium']
  },
  {
    id: 'generaux',
    title: 'Services Généraux',
    subtitle: 'Support opérationnel et logistique',
    description: 'Fourniture d\'équipements, maintenance et gestion d\'infrastructures pour un environnement de travail optimal.',
    icon: Wrench,
    color: 'from-slate-600 to-gray-500',
    services: ['Fournitures de bureau', 'Distribution équipements', 'Maintenance', 'Petits travaux', 'Gestion technique'],
    image: '/services/general.jpeg',
    features: ['Réactivité', 'Polyvalence', 'Service complet']
  },
  {
    id: 'services',
    title: 'Agriculture Intelligente & Hydraulique',
    subtitle: 'Solutions agricoles technologiques et durables',
    description: 'Systèmes d\'irrigation intelligents et solutions hydrauliques pour une agriculture moderne et productive.',
    icon: Tractor,
    color: 'from-green-600 to-emerald-500',
    services: ['Irrigation solaire', 'Systèmes goutte-à-goutte', 'Pompage agricole', 'Infrastructures rurales'],
    image: '/services/agriculture.jpeg',
    features: ['Économie d\'eau', 'Technologie solaire', 'Productivité accrue']
  }
]

// Countries of intervention
const countries = [
  { name: 'Côte d\'Ivoire', flag: '🇨🇮', code: 'CI' },
  { name: 'Ghana', flag: '🇬🇭', code: 'GH' },
  { name: 'Burkina Faso', flag: '🇧🇫', code: 'BF' },
  { name: 'Sénégal', flag: '🇸🇳', code: 'SN' },
  { name: 'Mali', flag: '🇲🇱', code: 'ML' },
  { name: 'Bénin', flag: '🇧🇯', code: 'BJ' },
  { name: 'Togo', flag: '🇹🇬', code: 'TG' },
];

// Cities in Côte d'Ivoire
const cities = [
  'Abidjan', 'San-Pedro', 'Yamoussoukro', 'Bouaké', 'Korhogo', 'Daloa',
  'Dabakala', 'Boundiali', 'Bonoua', 'Adiaké', 'Man', 'Ferkessédougou'
]

// Default partners (fallback)
const defaultPartners = [
  {
    id: 'default-1',
    name: 'Africa Sourcing',
    description: 'Entreprise spécialisée dans l\'achat et l\'exportation de fèves de cacao et de café.',
    logoUrl: '/partners/partner-1.jpeg',
    category: 'Agro-export',
    website: null,
    order: 0,
    isActive: true
  },
  {
    id: 'default-2',
    name: 'Ivory Cashew Nuts',
    description: 'Acteur de la filière de transformation et d\'exportation de la noix de cajou.',
    logoUrl: '/partners/partner-2.jpeg',
    category: 'Agro-industrie',
    website: null,
    order: 1,
    isActive: true
  },
  {
    id: 'default-3',
    name: 'CI-Cajou',
    description: 'Conseil du Coton et de l\'Anacarde - Organe de régulation des filières coton et anacarde en Côte d\'Ivoire.',
    logoUrl: '/partners/partner-3.jpeg',
    category: 'Institution',
    website: null,
    order: 2,
    isActive: true
  },
  {
    id: 'default-4',
    name: 'NCI',
    description: 'Nouvelle Chaîne Ivoirienne - Chaîne de télévision privée généraliste ivoirienne.',
    logoUrl: '/partners/partner-4.jpeg',
    category: 'Média',
    website: null,
    order: 3,
    isActive: true
  },
  {
    id: 'default-5',
    name: 'Radio Nostalgie',
    description: 'Station de radio leader en Côte d\'Ivoire.',
    logoUrl: '/partners/partner-5.png',
    category: 'Média',
    website: null,
    order: 4,
    isActive: true
  },
  {
    id: 'default-6',
    name: 'OIC',
    description: 'Office Ivoirien des Chargeurs - Institution d\'assistance aux chargeurs et de facilitation des transports.',
    logoUrl: '/partners/partner-6.png',
    category: 'Institution',
    website: null,
    order: 5,
    isActive: true
  }
]

// Projects
const projects = [
  {
    title: 'Système de Vidéosurveillance',
    category: 'Sécurité',
    image: '/projects/projet-1.jpeg',
    description: 'Installation complète de 150 caméras HD avec centre de contrôle.'
  },
  {
    title: 'Ferme Solaire 500kW - dabakala',
    category: 'Énergie',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    description: 'Centrale photovoltaïque pour une coopérative agricole.'
  },
  {
    title: 'Plateforme Gouvernementale',
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    description: 'Application web de gestion administrative nationale.'
  },
  {
    title: 'Irrigation Intelligente ',
    category: 'Agriculture',
    image: '/projects/projet-7.jpeg',
    description: 'Système d\'irrigation solaire pour 200 hectares de cultures.'
  }
]

// Partner type
interface Partner {
  id: string
  name: string
  description?: string
  logoUrl?: string | null
  category?: string
  website?: string | null
  order: number
  isActive: boolean
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({})
  const [counters, setCounters] = useState<{[key: string]: number}>({})
  const [siteConfig, setSiteConfig] = useState<SiteConfig>({
    companyName: 'ENTREPRISE FIDE',
    slogan: 'Excellence Technique & Innovation Digitale',
    description: 'Leader ouest-africain en ingénierie et technologies',
    phone: '+225 07 07 14 96 06',
    email: 'entreprisefide@gmail.com',
    address: 'Abidjan, Côte d\'Ivoire'
  })
  const [partners, setPartners] = useState<Partner[]>(defaultPartners)

  const heroSlides = [
    {
      image: '/hero/hero-1.jpeg',
      alt: 'Infrastructure moderne en Afrique'
    },
    {
      image: '/hero/hero-2.jpeg',
      alt: 'Technologie et innovation'
    },
    {
      image: '/hero/hero-3.png',
      alt: 'Ingénierie digitale'
    }
  ]

  // Cities scroll animation
  const citiesRef = useRef<HTMLDivElement>(null)
  const [citiesScrollPosition, setCitiesScrollPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (citiesRef.current) {
        const maxScroll = citiesRef.current.scrollHeight - citiesRef.current.clientHeight
        if (citiesScrollPosition >= maxScroll) {
          setCitiesScrollPosition(0)
          citiesRef.current.scrollTop = 0
        } else {
          setCitiesScrollPosition(prev => prev + 1)
          citiesRef.current.scrollTop = citiesScrollPosition
        }
      }
    }, 50)
    return () => clearInterval(interval)
  }, [citiesScrollPosition])

  // Fetch site config
  useEffect(() => {
    fetch('/api/cms/site-config')
      .then(res => res.json())
      .then(data => setSiteConfig(data))
      .catch(() => {})
  }, [])

  // Fetch partners
  useEffect(() => {
    fetch('/api/cms/partners?activeOnly=true')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setPartners(data)
        }
      })
      .catch(() => {})
  }, [])

  // Auto-slide hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* ========================================
          HERO SECTION - Cinematic Full Screen
          ======================================== */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        {/* Background Slides */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-[10000ms]"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)'
                }}
              />
            </div>
          ))}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 to-[#0A1628]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-up">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse"></span>
                  <span className="text-sm font-medium text-white/90">Leader Ouest-Africain en Ingénierie</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <span className="text-white">ENTREPRISE</span>
                  <br />
                  <span className="hero-text-gradient">FIDE</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl sm:text-2xl text-white/80 mb-4 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Excellence Technique & Innovation Digitale
                </p>

                {/* Description */}
                <p className="text-lg text-white/60 mb-8 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  Solutions intégrées en télécommunications, énergie, informatique et infrastructure 
                  pour entreprises, institutions et projets stratégiques en Afrique.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <Link href="/services">
                    <button className="btn-primary inline-flex items-center gap-2 text-lg">
                      Découvrir nos services
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="btn-secondary inline-flex items-center gap-2 text-lg">
                      Démarrer un projet
                    </button>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-6 mt-10 pt-10 border-t border-white/10 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A227]" />
                    <span className="text-white/70 text-sm">+500 Projets réalisés</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A227]" />
                    <span className="text-white/70 text-sm">+15 ans d&apos;expérience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A227]" />
                    <span className="text-white/70 text-sm">7 pays couverts</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Stats Card */}
              <div className="hidden lg:block animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/20 to-transparent rounded-3xl blur-3xl"></div>
                  <div className="relative glass rounded-3xl p-8 border border-white/10">
                    <h3 className="text-white font-semibold text-lg mb-6">Nos chiffres clés</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {stats.map((stat, index) => {
                        const IconComponent = stat.icon
                        return (
                          <div key={index} className="stat-card">
                            <IconComponent className="w-6 h-6 text-[#C9A227] mx-auto mb-3" />
                            <div className="stat-number">{stat.number}</div>
                            <div className="text-white/60 text-sm">{stat.label}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-12 bg-[#C9A227]' 
                  : 'w-6 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 right-10 z-20 hidden lg:flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs uppercase tracking-widest rotate-90 origin-center translate-y-8">Fide</span>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#C9A227] to-transparent"></div>
        </div>
      </section>

      {/* ========================================
          ABOUT SECTION - Company Overview
          ======================================== */}
      <section id="about" className="section-padding bg-white" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <img 
                      src="/propos/propos-1.png" 
                      alt="Technologie" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <img 
                      src="/propos/propos-3.jpeg" 
                      alt="Énergie solaire" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <img 
                      src="/propos/propos-2.jpeg" 
                      alt="Infrastructure" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80" 
                      alt="Agriculture" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#C9A227] text-[#0A1628] rounded-2xl p-6 shadow-2xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm font-medium">Années d&apos;excellence</div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="badge-gold mb-6">À propos de nous</div>
              <h2 className="section-title">
                Une entreprise multidisciplinaire au service de l&apos;Afrique
              </h2>
              <div className="gold-accent mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                <strong className="text-[#0A1628]">ENTREPRISE FIDE</strong> est une société d&apos;ingénierie et de technologie 
                de premier plan, offrant des solutions intégrées dans les domaines des télécommunications, 
                de l&apos;énergie, de l&apos;informatique et des services généraux.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Notre mission est d&apos;accompagner la transformation numérique et infrastructurelle de l&apos;Afrique 
                en fournissant des solutions technologiques de qualité mondiale, adaptées aux réalités locales 
                et aux besoins spécifiques de nos clients : entreprises, institutions, ONG, projets agricoles 
                et particuliers.
              </p>

              {/* Key Points */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Target, text: 'Vision stratégique' },
                  { icon: Zap, text: 'Innovation continue' },
                  { icon: Shield, text: 'Fiabilité éprouvée' },
                  { icon: Users, text: 'Équipe experte' }
                ].map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                      <div className="w-10 h-10 rounded-lg bg-[#0A1628] flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-[#C9A227]" />
                      </div>
                      <span className="font-medium text-gray-800">{item.text}</span>
                    </div>
                  )
                })}
              </div>

              <Link href="/about">
                <button className="btn-dark inline-flex items-center gap-2">
                  En savoir plus sur nous
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          INTERNATIONAL PRESENCE SECTION
          ======================================== */}
      <section id="international" className="section-padding section-dark" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Globe2 className="w-4 h-4 text-[#C9A227]" />
              <span className="text-[#C9A227] text-sm font-medium">Présence Internationale</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Nos <span className="text-[#C9A227]">Zones d&apos;Intervention</span>
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
              Entreprise FIDE intervient dans plusieurs pays d&apos;Afrique de l&apos;Ouest dans la mise en œuvre 
              de solutions techniques intégrées, notamment dans les domaines des télécommunications, 
              de la sécurité, de la géolocalisation GPS de véhicules, de l&apos;énergie solaire et des 
              infrastructures techniques pour entreprises.
            </p>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            {countries.map((country, index) => (
              <div 
                key={country.code}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-[#C9A227]/50 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {country.flag}
                </div>
                <h3 className="text-white font-medium text-sm">{country.name}</h3>
              </div>
            ))}
          </div>

          {/* Missions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#C9A227]" />
              Nos équipes ont réalisé plusieurs missions techniques
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Radio, text: 'Installation et maintenance de systèmes Autocom' },
                { icon: Phone, text: 'Mise en place de postes de communication dans les bureaux' },
                { icon: MapPinned, text: 'Déploiement de solutions GPS pour la localisation et la gestion de flotte de véhicules' }
              ].map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#C9A227]/20 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-[#C9A227]" />
                    </div>
                    <p className="text-white/80 text-sm">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          CITIES OF INTERVENTION SECTION
          ======================================== */}
      <section id="cities" className="section-padding bg-gradient-to-br from-gray-50 to-white" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="badge-gold mb-4">Couverture Nationale</div>
              <h2 className="section-title mb-4">
                Principales Villes d&apos;Intervention en Côte d&apos;Ivoire
              </h2>
              <div className="gold-accent mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-8">
                Dans ces villes, Entreprise FIDE a réalisé plusieurs interventions techniques dans les secteurs 
                de l&apos;agriculture, de l&apos;énergie solaire et des infrastructures technologiques pour entreprises 
                et institutions. Notre présence sur l&apos;ensemble du territoire ivoirien nous permet de répondre 
                rapidement aux besoins de nos clients où qu&apos;ils se trouvent.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-[#0A1628]">12</div>
                  <div className="text-gray-500 text-sm">Villes couvertes</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-[#0A1628]">50+</div>
                  <div className="text-gray-500 text-sm">Interventions</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-[#0A1628]">24/7</div>
                  <div className="text-gray-500 text-sm">Support</div>
                </div>
              </div>
            </div>

            {/* Right - Cities Scroll */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10 pointer-events-none rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white z-10 pointer-events-none rounded-2xl"></div>
              <div 
                ref={citiesRef}
                className="h-96 overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  {cities.map((city, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-[#C9A227]/10 hover:border-[#C9A227] border border-transparent transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#0A1628] flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-[#C9A227]" />
                      </div>
                      <span className="font-medium text-gray-800">{city}</span>
                    </div>
                  ))}
                  {/* Duplicate for seamless scroll */}
                  {cities.map((city, index) => (
                    <div 
                      key={`dup-${index}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-[#C9A227]/10 hover:border-[#C9A227] border border-transparent transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#0A1628] flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-[#C9A227]" />
                      </div>
                      <span className="font-medium text-gray-800">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          DIVISIONS SECTION - Business Divisions
          ======================================== */}
      <section id="divisions" className="section-padding section-dark" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="text-[#C9A227] text-sm font-medium">Nos Domaines d&apos;Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Divisions. <span className="text-[#C9A227]">Une expertise complète.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Des solutions intégrées couvrant l&apos;ensemble des besoins technologiques et infrastructurels 
              de votre organisation.
            </p>
          </div>

          {/* Divisions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((division, index) => {
              const IconComponent = division.icon
              return (
                <div 
                  key={division.id}
                  className="group division-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={division.image} 
                      alt={division.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-60"></div>
                    
                    {/* Icon Badge */}
                    <div className={`absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br ${division.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0A1628] mb-2 group-hover:text-[#C9A227] transition-colors">
                      {division.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">{division.subtitle}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{division.description}</p>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {division.services.slice(0, 3).map((service, i) => (
                        <span 
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                        >
                          {service}
                        </span>
                      ))}
                      {division.services.length > 3 && (
                        <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                          +{division.services.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Link */}
                    <Link href={`/services/${division.id}`} className="inline-flex items-center gap-2 text-[#0A1628] font-medium text-sm group-hover:text-[#C9A227] transition-colors">
                      Explorer cette division
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/services">
              <button className="btn-primary inline-flex items-center gap-2 text-lg">
                Voir tous nos services
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          PROJECTS SECTION - Featured Projects
          ======================================== */}
      <section id="projects" className="section-padding bg-white" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="badge-gold mb-4">Nos Réalisations</div>
              <h2 className="section-title mb-2">Projets & Accomplissements</h2>
              <p className="section-subtitle">
                Découvrez nos projets les plus emblématiques à travers l&apos;Afrique de l&apos;Ouest.
              </p>
            </div>
            <Link href="/projects" className="mt-6 md:mt-0">
              <button className="btn-dark inline-flex items-center gap-2">
                Voir tous les projets
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ height: index === 0 || index === 3 ? '400px' : '300px' }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/30 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#C9A227] text-[#0A1628] text-xs font-semibold">
                  {project.category}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#C9A227] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          PARTNERS SECTION
          ======================================== */}
      <section id="partners" className="section-padding section-gradient" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Handshake className="w-4 h-4 text-[#C9A227]" />
              <span className="text-[#C9A227] text-sm font-medium">Nos Partenaires</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
              Ils nous font <span className="text-[#C9A227]">confiance</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des partenaires stratégiques qui partagent notre vision d&apos;excellence et d&apos;innovation 
              pour le développement de l&apos;Afrique.
            </p>
          </div>

          {/* Partners Carousel */}
          <div className="overflow-hidden relative">
            <div className="partner-scroll flex gap-8 animate-scroll">
              {[...partners, ...partners].map((partner, index) => (
                <div 
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  {/* Logo */}
                  <div className="h-28 bg-gray-50 rounded-xl flex items-center justify-center mb-4 overflow-hidden p-4 border border-gray-200">
                    {partner.logoUrl ? (
                      <img 
                        src={partner.logoUrl} 
                        alt={`Logo ${partner.name}`}
                        loading="lazy"
                        className="h-16 w-auto object-contain"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-[#0A1628]">{partner.name.charAt(0)}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-[#0A1628]">{partner.name}</h3>
                    {partner.category && (
                      <span className="text-xs px-2 py-1 rounded-full bg-[#C9A227]/10 text-[#C9A227]">
                        {partner.category}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{partner.description}</p>
                  {partner.website && (
                    <a 
                      href={partner.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-xs text-[#003366] hover:text-[#C9A227] transition-colors"
                    >
                      <Globe className="w-3 h-3" />
                      Visiter le site
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          WHY CHOOSE US SECTION
          ======================================== */}
      <section className="section-padding bg-white" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <div className="badge-gold mb-4">Pourquoi nous choisir</div>
              <h2 className="section-title">
                Un partenaire de confiance pour vos projets
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Nous combinons expertise technique, innovation continue et engagement envers l&apos;excellence 
                pour transformer vos défis en opportunités de croissance.
              </p>

              {/* Advantages List */}
              <div className="space-y-4">
                {[
                  { icon: Target, title: 'Expertise multidisciplinaire', desc: 'Une équipe polyvalente capable de gérer des projets complexes' },
                  { icon: Zap, title: 'Innovation technologique', desc: 'Solutions de pointe adaptées aux réalités africaines' },
                  { icon: Shield, title: 'Fiabilité éprouvée', desc: 'Plus de 500 projets réalisés avec succès' },
                  { icon: Users, title: 'Support dédié', desc: 'Accompagnement personnalisé à chaque étape' }
                ].map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 rounded-xl bg-[#0A1628] flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-[#C9A227]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0A1628] mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right - Stats */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/10 to-transparent rounded-3xl"></div>
              <div className="relative bg-[#0A1628] rounded-3xl p-10">
                <h3 className="text-white text-2xl font-bold mb-8 text-center">
                  Notre impact en chiffres
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon
                    return (
                      <div key={index} className="text-center">
                        <IconComponent className="w-8 h-8 text-[#C9A227] mx-auto mb-3" />
                        <div className="text-4xl font-bold text-white mb-1">{stat.number}</div>
                        <div className="text-white/60 text-sm">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>

                <div className="divider-white my-8"></div>

                <div className="text-center">
                  <p className="text-white/80 text-lg font-medium mb-4">
                    Prêt à démarrer votre projet ?
                  </p>
                  <Link href="/contact">
                    <button className="btn-primary w-full">
                      Contactez-nous
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          CTA SECTION
          ======================================== */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 to-[#0A1628]/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Transformez vos défis en opportunités
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Que vous soyez une entreprise, une institution, une ONG ou un porteur de projet, 
            ENTREPRISE FIDE est votre partenaire de confiance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="btn-primary inline-flex items-center gap-2 text-lg px-10">
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <a href={`tel:${siteConfig.phone}`}>
              <button className="btn-secondary inline-flex items-center gap-2 text-lg px-10">
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================
          CONTACT PREVIEW SECTION
          ======================================== */}
      <section id="contact-preview" className="section-padding bg-white" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Info */}
            <div>
              <div className="badge-gold mb-4">Contact</div>
              <h2 className="section-title mb-2">Parlons de votre projet</h2>
              <p className="section-subtitle mb-8">
                Notre équipe est à votre disposition pour répondre à vos questions 
                et vous accompagner dans vos projets.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A1628] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1628] mb-1">Notre adresse</h4>
                    <p className="text-gray-600">65 Rue El Hadj Dramane Diabaté<br/>Abidjan, Côte d&apos;Ivoire</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A1628] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1628] mb-1">Téléphones</h4>
                    <div className="text-gray-600 text-sm space-y-1">
                      <a href="https://wa.me/2250707149606" target="_blank" className="flex items-center gap-1 hover:text-green-600">
                        +225 07 07 14 96 06 <span className="text-green-500 text-xs">(WhatsApp Technique)</span>
                      </a>
                      <a href="https://wa.me/2250160000997" target="_blank" className="flex items-center gap-1 hover:text-green-600">
                        +225 01 60 00 09 97 <span className="text-green-500 text-xs">(WhatsApp Info)</span>
                      </a>
                      <p>+225 05 66 34 60 44</p>
                      <p>+225 01 01 36 18 44</p>
                      <p className="text-gray-400 text-xs mt-1">Appels, SMS et WhatsApp disponibles</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A1628] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1628] mb-1">Email</h4>
                    <p className="text-gray-600">entreprisefide@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A1628] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1628] mb-1">Horaires</h4>
                    <p className="text-gray-600">Lundi - Vendredi : 8h - 18h<br/>Samedi : 9h - 13h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Quick Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#0A1628] mb-6">Demande rapide</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Votre nom"
                    className="form-input"
                  />
                  <input 
                    type="email" 
                    placeholder="Votre email"
                    className="form-input"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Sujet"
                  className="form-input"
                />
                <textarea 
                  placeholder="Votre message"
                  rows={4}
                  className="form-input resize-none"
                ></textarea>
                <button type="submit" className="btn-dark w-full">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          ENGAGEMENT BANNER
          ======================================== */}
      <section className="bg-gradient-to-r from-[#C9A227] to-[#A68520] py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-[#0A1628]">
            {['SÉCURITÉ', 'PERFORMANCE', 'INNOVATION', 'SATISFACTION CLIENT'].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
