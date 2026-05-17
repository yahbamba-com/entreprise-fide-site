'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Sun, 
  Zap, 
  Battery, 
  Droplets,
  Wrench,
  Thermometer,
  ChevronRight,
  CheckCircle2
} from 'lucide-react'

const serviceCategories = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Électricité Générale",
    items: [
      "Installations électriques domestiques",
      "Installations industrielles",
      "Mise aux normes électriques",
      "Dépannage et réparation"
    ]
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Énergie Solaire",
    items: [
      "Panneaux solaires photovoltaïques",
      "Kits solaires complets",
      "Onduleurs et régulateurs",
      "Batteries de stockage"
    ]
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Motopompes Solaires",
    items: [
      "Pompes solaires pour forages",
      "Systèmes d'irrigation solaire",
      "Stations de pompage",
      "Adduction d'eau"
    ]
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Groupes Électrogènes",
    items: [
      "Installation de groupes électrogènes",
      "Maintenance préventive",
      "Réparation et dépannage",
      "Groups de secours automatiques"
    ]
  },
  {
    icon: <Thermometer className="w-8 h-8" />,
    title: "Froid Industriel",
    items: [
      "Chambres froides",
      "Climatisation industrielle",
      "Réfrigération commerciale",
      "Maintenance des systèmes"
    ]
  },
  {
    icon: <Battery className="w-8 h-8" />,
    title: "Stockage d'Énergie",
    items: [
      "Batteries solaires",
      "Systèmes hybrides",
      "Onduleurs solaires",
      "Gestion intelligente de l'énergie"
    ]
  }
]

const benefits = [
  { title: "Économies d'énergie", description: "Réduisez vos factures jusqu'à 80%" },
  { title: "Écologique", description: "Énergie propre et renouvelable" },
  { title: "Autonomie", description: "Indépendance énergétique" },
  { title: "Fiabilité", description: "Équipements de qualité professionnelle" },
]

export default function EnergiePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 to-yellow-600 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <Sun className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Énergie – Électricité – Solaire
              </h1>
              <p className="text-white/80 mt-2">Solutions énergétiques durables et économiques</p>
            </div>
          </div>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Énergie & Solaire</span>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-[#003366] py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="text-white font-bold">{benefit.title}</h3>
                <p className="text-white/70 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">
                Passez à l'énergie solaire pour plus d'autonomie
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                ENTREPRISE FIDE vous accompagne dans votre transition énergétique avec des solutions solaires adaptées à vos besoins. Que ce soit pour votre domicile, votre entreprise ou vos installations agricoles, nous concevons et installons des systèmes photovoltaïques performants et durables.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Notre expertise couvre également l'électricité générale, les groupes électrogènes et le froid industriel pour répondre à tous vos besoins énergétiques.
              </p>
              <ul className="space-y-3">
                {["Étude personnalisée de vos besoins", "Installation par des électriciens qualifiés", "Garantie sur les équipements", "Service après-vente réactif"].map((item, i) => (
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
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80"
                  alt="Panneaux solaires"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Sun className="w-8 h-8" />
                  <div>
                    <p className="font-bold text-lg">-80%</p>
                    <p className="text-sm text-white/80">Sur vos factures</p>
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
              Nos Solutions Énergétiques
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour tous vos besoins en énergie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#003366]">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
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

      {/* Solar Applications */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Applications de l'Énergie Solaire
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-2">Domestique</h3>
              <p className="text-gray-600">Alimentation électrique de votre maison, eau chaude solaire, éclairage</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-2">Entreprise</h3>
              <p className="text-gray-600">Bureaux, usines, entrepôts, centres commerciaux</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-2">Agricole</h3>
              <p className="text-gray-600">Pompage solaire, irrigation, fermes, élevage</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#003366]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Faites le choix de l'énergie solaire
          </h2>
          <p className="text-white/80 mb-8">
            Demandez une étude gratuite pour dimensionner votre installation solaire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8">
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
