'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Leaf, 
  Droplets, 
  Building, 
  Wrench,
  Package,
  SprayCan,
  ChevronRight,
  CheckCircle2,
  Sun
} from 'lucide-react'

const generalServices = [
  {
    icon: <Package className="w-8 h-8" />,
    title: "Fournitures de Bureau",
    description: "Équipement et consommables pour votre entreprise",
    items: [
      "Fournitures administratives",
      "Papeterie et consommables",
      "Équipements de bureau",
      "Mobilier de bureau"
    ]
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Petits Travaux de Construction",
    description: "Travaux de rénovation et aménagement",
    items: [
      "Rénovation de locaux",
      "Peinture et revêtements",
      "Plomberie sanitaire",
      "Aménagement intérieur"
    ]
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Entretien Général",
    description: "Maintenance et entretien de vos installations",
    items: [
      "Entretien de bureaux",
      "Maintenance technique",
      "Réparations diverses",
      "Service de nettoyage"
    ]
  }
]

const agriculturalServices = [
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Irrigation Goutte-à-goutte",
    description: "Systèmes d'irrigation économiques et efficaces",
    items: [
      "Installation de systèmes goutte-à-goutte",
      "Automatisation de l'arrosage",
      "Programmateurs hydrauliques",
      "Optimisation de la consommation d'eau"
    ]
  },
  {
    icon: <SprayCan className="w-8 h-8" />,
    title: "Arrosage par Spray Laser",
    description: "Technologie de précision pour grandes surfaces",
    items: [
      "Installation de sprays laser",
      "Couverture uniforme",
      "Programmation intelligente",
      "Maintenance des équipements"
    ]
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Pompage Solaire",
    description: "Solutions énergétiques pour l'agriculture",
    items: [
      "Pompes solaires pour forages",
      "Stations de pompage autonomes",
      "Réservoirs de stockage",
      "Adduction d'eau solaire"
    ]
  }
]

const benefits = [
  { title: "Économie d'eau", value: "-60%", desc: "Grâce à l'irrigation intelligente" },
  { title: "Autonomie", value: "100%", desc: "Avec le solaire" },
  { title: "Rendement", value: "+40%", desc: "Meilleures récoltes" },
  { title: "Durabilité", value: "10+ ans", desc: "Équipements durables" },
]

export default function GenerauxPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-emerald-700 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Services Généraux & Agricoles
              </h1>
              <p className="text-white/80 mt-2">Fournitures, maintenance et solutions agricoles intelligentes</p>
            </div>
          </div>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Services Généraux & Agricoles</span>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-green-800 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <p className="text-green-200 text-sm">{benefit.title}</p>
                <p className="text-2xl font-bold text-white">{benefit.value}</p>
                <p className="text-green-200 text-xs">{benefit.desc}</p>
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
                Solutions complètes pour votre quotidien
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                ENTREPRISE FIDE propose une gamme de services généraux et de solutions agricoles innovantes pour répondre aux besoins des entreprises, exploitations agricoles et projets de développement.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nos systèmes d'irrigation intelligents et nos solutions de pompage solaire vous permettent d'optimiser vos ressources tout en augmentant votre productivité.
              </p>
              <ul className="space-y-3">
                {["Expertise technique qualifiée", "Équipements de qualité", "Accompagnement sur mesure", "Service après-vente réactif"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80"
                  alt="Agriculture moderne"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-green-500 text-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Droplets className="w-8 h-8" />
                  <div>
                    <p className="font-bold text-lg">Irrigation</p>
                    <p className="text-sm text-white/80">Intelligente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Généraux */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Services Généraux
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fournitures, travaux et entretien pour votre quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {generalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#003366]">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
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

      {/* Agricultural Solutions */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Solutions Agricoles & Hydrauliques
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Technologies innovantes pour une agriculture moderne et durable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {agriculturalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg h-full bg-white">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 text-green-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#003366] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
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

      {/* Applications */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#003366] mb-8 text-center">
            Domaines d'Application
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Building className="w-8 h-8" />, title: "Entreprises", desc: "Fournitures et entretien" },
              { icon: <Leaf className="w-8 h-8" />, title: "Agriculture", desc: "Irrigation et pompage" },
              { icon: <Droplets className="w-8 h-8" />, title: "Hydraulique", desc: "Adduction d'eau" },
              { icon: <Wrench className="w-8 h-8" />, title: "BTP", desc: "Travaux et rénovation" },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#003366] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#003366]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Besoin de nos services ?
          </h2>
          <p className="text-white/80 mb-8">
            Contactez-nous pour discuter de vos besoins en fournitures ou solutions agricoles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8">
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
              { name: "Informatique & Digital", href: "/services/digital" },
              { name: "Communication", href: "/services/communication" },
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
