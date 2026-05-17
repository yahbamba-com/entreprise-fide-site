'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Shield, 
  Sun, 
  Monitor, 
  Printer, 
  Leaf,
  ChevronRight,
  Zap,
  CheckCircle2,
  Target
} from 'lucide-react'

const services = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Télécommunication & Sécurité",
    description: "Réseaux téléphoniques, autocommutateurs, vidéosurveillance, alarmes, télésurveillance, VSAT et systèmes de sécurité électronique pour une protection optimale de vos locaux.",
    href: "/services/securite",
    color: "from-blue-600 to-blue-800",
    features: ["Réseaux téléphoniques", "Vidéosurveillance", "Alarmes intrusion", "Télésurveillance", "VSAT"]
  },
  {
    icon: <Sun className="w-12 h-12" />,
    title: "Énergie – Électricité – Solaire",
    description: "Solutions énergétiques complètes : installations électriques domestiques et industrielles, groupes électrogènes, systèmes solaires photovoltaïques et motopompes solaires.",
    href: "/services/energie",
    color: "from-orange-500 to-yellow-600",
    features: ["Électricité générale", "Solaire photovoltaïque", "Groupes électrogènes", "Froid industriel", "Motopompes solaires"]
  },
  {
    icon: <Monitor className="w-12 h-12" />,
    title: "Informatique & Développement Digital",
    description: "Développement web et mobile sur mesure, applications e-commerce, intégration de paiements mobiles (Orange Money, MTN, Wave), réseaux informatiques et maintenance.",
    href: "/services/digital",
    color: "from-cyan-500 to-blue-600",
    features: ["Sites web & e-commerce", "Applications mobiles", "Intégration paiements", "Réseaux informatiques", "ERP & CRM"]
  },
  {
    icon: <Printer className="w-12 h-12" />,
    title: "Communication & Imprimerie",
    description: "Branding complet, identité visuelle, impression tous formats, supports publicitaires, vêtements personnalisés et signalétique pour renforcer votre image de marque.",
    href: "/services/communication",
    color: "from-red-500 to-pink-600",
    features: ["Branding & identité visuelle", "Impression tous formats", "Supports publicitaires", "Tee-shirts personnalisés", "Signalétique véhicule"]
  },
  {
    icon: <Leaf className="w-12 h-12" />,
    title: "Services Généraux & Agricoles",
    description: "Fournitures de bureau, travaux de construction, maintenance technique, systèmes d'irrigation intelligents et solutions agricoles innovantes pour l'agriculture moderne.",
    href: "/services/generaux",
    color: "from-green-500 to-emerald-600",
    features: ["Fournitures de bureau", "Petits travaux", "Maintenance générale", "Irrigation intelligente", "Pompage solaire"]
  }
]

const advantages = [
  { icon: <Zap className="w-6 h-6 text-[#FF0000]" />, title: "Solutions complètes", description: "Un seul prestataire pour tous vos besoins" },
  { icon: <CheckCircle2 className="w-6 h-6 text-[#FF0000]" />, title: "Expertise pluridisciplinaire", description: "Compétences techniques et digitales" },
  { icon: <Target className="w-6 h-6 text-[#FF0000]" />, title: "Adaptation locale", description: "Solutions adaptées aux réalités ivoiriennes" },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003366] to-[#004488] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            NOS SERVICES
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Une expertise pluridisciplinaire au service de votre réussite. Découvrez nos 6 domaines d'activités pour répondre à tous vos besoins.
          </p>
        </div>
      </section>

      {/* Advantages Banner */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((adv, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0">{adv.icon}</div>
                <div>
                  <h3 className="font-bold text-[#003366]">{adv.title}</h3>
                  <p className="text-sm text-gray-600">{adv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="block">
                <Card className="service-card group cursor-pointer border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3">
                      {/* Icon & Title */}
                      <div className={`bg-gradient-to-br ${service.color} p-8 text-white flex flex-col justify-center`}>
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                      
                      {/* Description */}
                      <div className="p-8 md:col-span-2 bg-white flex flex-col justify-between">
                        <div>
                          <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.features.map((feature, idx) => (
                              <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center text-[#003366] group-hover:text-[#FF0000] font-medium">
                          Découvrir ce service <ChevronRight className="w-5 h-5 ml-1" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#003366]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Contactez-nous pour discuter de votre projet et obtenir une proposition adaptée à vos besoins.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#FF0000] hover:bg-red-700 text-white rounded-full px-8 text-lg">
              Demander un devis gratuit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
