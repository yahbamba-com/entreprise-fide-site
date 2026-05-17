'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Printer, 
  Palette, 
  Image, 
  Shirt,
  Truck,
  FileText,
  ChevronRight,
  CheckCircle2
} from 'lucide-react'

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Branding & Identité Visuelle",
    description: "Création d'une identité de marque forte et cohérente",
    items: [
      "Création de logo professionnel",
      "Charte graphique complète",
      "Choix des couleurs et typographies",
      "Déclinaison sur tous supports"
    ]
  },
  {
    icon: <Printer className="w-8 h-8" />,
    title: "Impression Tous Formats",
    description: "Service d'impression de qualité professionnelle",
    items: [
      "Impression grand format",
      "Impression numérique",
      "Supports publicitaires",
      "Documents administratifs"
    ]
  },
  {
    icon: <Image className="w-8 h-8" />,
    title: "Supports Publicitaires",
    description: "Matériel promotionnel pour votre communication",
    items: [
      "Flyers et dépliants",
      "Affiches et posters",
      "Bâches et banderoles",
      "Kakémonos et roll-up"
    ]
  },
  {
    icon: <Shirt className="w-8 h-8" />,
    title: "Vêtements Personnalisés",
    description: "Textiles publicitaires et corporatifs",
    items: [
      "Tee-shirts personnalisés",
      "Polos et chemises d'entreprise",
      "Tenues de travail",
      "Casquettes et accessoires"
    ]
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Signalétique Véhicule",
    description: "Marquage publicitaire sur vos véhicules",
    items: [
      "Marquage partiel ou total",
      "Adhésifs et lettrages",
      "Covering de véhicules",
      "Flotte automobile"
    ]
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Édition & Publications",
    description: "Documents d'entreprise et publications",
    items: [
      "Cartes de visite",
      "En-têtes et enveloppes",
      "Brochures et catalogues",
      "Rapports annuels"
    ]
  }
]

const printFormats = [
  { name: "Petit format", items: "Cartes, flyers, dépliants" },
  { name: "Moyen format", items: "Affiches A3, A2, posters" },
  { name: "Grand format", items: "Bâches, panneaux, enseignes" },
  { name: "Format spécial", items: "Kakémonos, roll-up, stands" },
]

export default function CommunicationPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-500 to-pink-600 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <Printer className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Communication & Imprimerie
              </h1>
              <p className="text-white/80 mt-2">Branding, impression et supports publicitaires</p>
            </div>
          </div>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Communication & Imprimerie</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">
                Renforcez votre image de marque
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                ENTREPRISE FIDE vous accompagne dans la création et la diffusion de votre identité visuelle. Du logo à l'impression en passant par les vêtements corporatifs, nous donnons vie à votre marque sur tous les supports.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Notre équipe de graphistes créatifs conçoit des visuels impactants qui reflètent vos valeurs et vous démarquent de la concurrence.
              </p>
              <ul className="space-y-3">
                {["Étude de votre image de marque", "Création graphique sur mesure", "Impression de qualité professionnelle", "Conseil en communication"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80"
                  alt="Communication et impression"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red-500 text-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Palette className="w-8 h-8" />
                  <div>
                    <p className="font-bold text-lg">Sur mesure</p>
                    <p className="text-sm text-white/80">Créations uniques</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Print Formats */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {printFormats.map((format, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm">
                <h3 className="font-bold text-[#003366]">{format.name}</h3>
                <p className="text-sm text-gray-600">{format.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Nos Prestations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour votre communication visuelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#003366]">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
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

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Notre Processus Créatif
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Briefing", desc: "Écoute de vos besoins" },
              { step: "02", title: "Création", desc: "Propositions graphiques" },
              { step: "03", title: "Validation", desc: "Ajustements et approbation" },
              { step: "04", title: "Production", desc: "Impression et livraison" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#003366]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Besoin de supports de communication ?
          </h2>
          <p className="text-white/80 mb-8">
            Contactez-nous pour discuter de votre projet de communication.
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
              { name: "Informatique & Digital", href: "/services/digital" },
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
