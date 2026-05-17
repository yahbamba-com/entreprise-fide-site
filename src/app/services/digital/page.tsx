'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Monitor, 
  Smartphone, 
  Globe, 
  ShoppingCart,
  CreditCard,
  Settings,
  ChevronRight,
  CheckCircle2,
  Code,
  Database,
  Users
} from 'lucide-react'

const webServices = [
  {
    title: "Sites Vitrines & Corporate",
    description: "Sites internet professionnels pour présenter votre entreprise",
    features: ["Design moderne et responsive", "Optimisation SEO", "Formulaires de contact", "Intégration réseaux sociaux"]
  },
  {
    title: "E-commerce",
    description: "Boutiques en ligne avec paiement mobile intégré",
    features: ["Catalogue produits", "Panier et checkout", "Paiements Orange/MTN/Wave", "Gestion des commandes"]
  },
  {
    title: "Portails & Dashboards",
    description: "Applications web métier sur mesure",
    features: ["ERP personnalisé", "CRM client", "Tableaux de bord", "Rapports et analytics"]
  }
]

const mobileServices = [
  {
    title: "Applications Android & iOS",
    description: "Applications natives pour mobiles",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    title: "Applications Flutter",
    description: "Applications cross-platform performantes",
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "PWA (Progressive Web Apps)",
    description: "Applications web progressives",
    icon: <Globe className="w-6 h-6" />
  }
]

const paymentMethods = [
  { name: "Orange Money", color: "bg-orange-500" },
  { name: "MTN Money", color: "bg-yellow-400" },
  { name: "Moov Money", color: "bg-red-500" },
  { name: "Wave", color: "bg-blue-400" },
  { name: "Cartes bancaires", color: "bg-gray-700" },
]

const itServices = [
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Réseaux Informatiques",
    items: ["Installation de réseaux LAN/WAN", "Configuration serveurs", "Sécurité réseau", "Maintenance préventive"]
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Maintenance & Support",
    items: ["Dépannage informatique", "Maintenance poste de travail", "Installation logiciels", "Formation utilisateur"]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Infrastructure",
    items: ["Serveurs et stockage", "Sauvegarde de données", "Cloud & hébergement", "Migration système"]
  }
]

const appTypes = [
  { icon: <ShoppingCart className="w-6 h-6" />, label: "E-commerce" },
  { icon: <Users className="w-6 h-6" />, label: "Gestion PME" },
  { icon: <CreditCard className="w-6 h-6" />, label: "Finance" },
  { icon: <Globe className="w-6 h-6" />, label: "Géolocalisation" },
]

export default function DigitalPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 to-blue-700 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <Monitor className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Informatique & Digital
              </h1>
              <p className="text-white/80 mt-2">Sites web, applications mobiles et solutions IT</p>
            </div>
          </div>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Informatique & Digital</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">
                Transformez votre présence digitale
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                ENTREPRISE FIDE vous accompagne dans votre transformation numérique avec des solutions web et mobile adaptées aux réalités du marché ivoirien. Nous développons des applications sur mesure et intégrons les solutions de paiement mobile locaux.
              </p>
              <ul className="space-y-3">
                {["Développement web responsive", "Applications iOS & Android", "Intégration paiements mobiles", "Maintenance et support technique"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80"
                  alt="Développement mobile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-cyan-600" />
            </div>
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Développement Web
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des sites web modernes, rapides et optimisés pour le référencement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {webServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#003366] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Development */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Développement Mobile
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Applications iOS et Android pour tous vos besoins métier
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mobileServices.map((service, index) => (
              <div key={index} className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {appTypes.map((item, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-cyan-600 flex justify-center mb-2">{item.icon}</div>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Integration */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Intégration Paiements Mobiles
            </h2>
            <p className="text-white/80">
              Tous les moyens de paiement locaux intégrés dans vos applications
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className={`${method.color} text-white px-6 py-3 rounded-lg font-semibold shadow-lg`}>
                {method.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Services Informatiques
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Infrastructure et support informatique pour votre entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {itServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#003366]">{service.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
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

      {/* CTA */}
      <section className="section-padding bg-[#003366]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Lancez votre projet digital
          </h2>
          <p className="text-white/80 mb-8">
            Discutons de votre projet web ou mobile pour trouver la meilleure solution.
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
              { name: "Sécurité & Télécommunication", href: "/services/securite" },
              { name: "Énergie & Solaire", href: "/services/energie" },
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
