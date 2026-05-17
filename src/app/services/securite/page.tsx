'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Shield, 
  Phone, 
  Video, 
  Bell, 
  Radio,
  Wifi,
  Lock,
  Eye,
  ChevronRight,
  CheckCircle2
} from 'lucide-react'

const serviceCategories = [
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Réseaux Téléphoniques",
    items: [
      "Autocommutateurs (Panasonic, Alcatel, Siemens)",
      "Postes opérateurs & postes simples",
      "Fax & passerelles GSM",
      "Configuration et maintenance"
    ]
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Vidéosurveillance",
    items: [
      "Caméras HD et 4K",
      "Systèmes d'enregistrement numérique",
      "Télésurveillance à distance",
      "Monitoring 24h/24"
    ]
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: "Alarmes & Sécurité",
    items: [
      "Alarmes sans fil & filaires",
      "Détecteurs de présence",
      "Alarmes anti-vol / intrusion",
      "Systèmes d'alerte connectés"
    ]
  },
  {
    icon: <Radio className="w-8 h-8" />,
    title: "Radiocommunication",
    items: [
      "Systèmes VSAT",
      "Réseaux radio professionnel",
      "Interphones & visiophones",
      "Solutions de communication terrain"
    ]
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Protection Physique",
    items: [
      "Barbelés & ronces de sécurité",
      "Contrôle d'accès",
      "Badges et biométrie",
      "Portails automatiques"
    ]
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Monitoring",
    items: [
      "Centrale de télésurveillance",
      "Alertes en temps réel",
      "Rapports d'incidents",
      "Maintenance préventive"
    ]
  }
]

const brands = ["Panasonic", "Alcatel", "Siemens", "Hikvision", "Dahua", "Honeywell"]

export default function SecuritePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Télécommunication & Sécurité
              </h1>
              <p className="text-white/80 mt-2">Solutions de protection et communication professionnelle</p>
            </div>
          </div>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Sécurité & Télécommunication</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">
                Protégez vos locaux avec des solutions de sécurité professionnelles
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                ENTREPRISE FIDE vous propose une gamme complète de solutions de télécommunication et de sécurité électronique pour protéger efficacement vos bâtiments, vos biens et votre personnel. De l'installation de systèmes d'alarme à la vidéosurveillance en passant par les réseaux téléphoniques professionnels, nous vous accompagnons avec expertise.
              </p>
              <ul className="space-y-3">
                {["Installation par des techniciens certifiés", "Maintenance préventive et corrective", "Formations à l'utilisation des équipements", "Support technique 7j/7"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF0000]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80"
                  alt="Système de sécurité"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#003366] text-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-[#FF0000]" />
                  <div>
                    <p className="font-bold text-lg">100%</p>
                    <p className="text-sm text-white/80">Sécurité garantie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Nos Solutions en Détail
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des équipements de qualité professionnelle pour une protection optimale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#003366]">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-[#FF0000] mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500 mb-6">Marques partenaires</p>
          <div className="flex flex-wrap justify-center gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="px-6 py-3 bg-gray-100 rounded-lg">
                <span className="font-semibold text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#003366]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Besoin d'un système de sécurité ?
          </h2>
          <p className="text-white/80 mb-8">
            Contactez-nous pour un audit gratuit de vos besoins en sécurité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#FF0000] hover:bg-red-700 text-white rounded-full px-8">
                Demander un devis
              </Button>
            </Link>
            <a href="tel:+2250707149606">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#003366] rounded-full px-8">
                Appeler maintenant
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003366] mb-6 text-center">
            Découvrez nos autres services
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Énergie & Solaire", href: "/services/energie" },
              { name: "Informatique & Digital", href: "/services/digital" },
              { name: "Communication", href: "/services/communication" },
              { name: "Services Généraux", href: "/services/generaux" },
            ].map((service, index) => (
              <Link key={index} href={service.href}>
                <Button variant="outline" className="rounded-full border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white">
                  {service.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
