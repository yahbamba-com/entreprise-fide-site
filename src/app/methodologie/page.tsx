'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Lightbulb, 
  FileText, 
  Wrench, 
  HeadphonesIcon,
  Target,
  Users,
  Clock,
  Award,
  ChevronRight,
  CheckCircle2
} from 'lucide-react'

const methodologySteps = [
  {
    number: "01",
    icon: <Lightbulb className="w-10 h-10" />,
    title: "Analyse du Besoin",
    description: "Nous commençons par une écoute attentive de vos besoins et objectifs. Cette phase permet de comprendre vos attentes, vos contraintes et votre environnement pour proposer la solution la plus adaptée.",
    details: [
      "Rencontre et discussion avec le client",
      "Identification des besoins réels",
      "Analyse de l'environnement technique",
      "Définition des objectifs et contraintes"
    ]
  },
  {
    number: "02",
    icon: <FileText className="w-10 h-10" />,
    title: "Proposition & Devis",
    description: "Suite à l'analyse, nous élaborons une proposition technique détaillée avec un devis transparent. Cette phase inclut les recommandations d'experts et les options possibles.",
    details: [
      "Étude technique approfondie",
      "Élaboration du devis détaillé",
      "Présentation des solutions recommandées",
      "Ajustements selon le budget"
    ]
  },
  {
    number: "03",
    icon: <Wrench className="w-10 h-10" />,
    title: "Réalisation",
    description: "La phase de réalisation est conduite par nos techniciens et ingénieurs qualifiés. Nous assurons une exécution professionnelle dans le respect des délais et des normes de qualité.",
    details: [
      "Planification détaillée du projet",
      "Installation et mise en œuvre",
      "Tests et vérifications",
      "Formation à l'utilisation"
    ]
  },
  {
    number: "04",
    icon: <HeadphonesIcon className="w-10 h-10" />,
    title: "Suivi & Support",
    description: "Notre engagement ne s'arrête pas à la livraison. Nous assurons un suivi régulier et un support technique réactif pour garantir la pérennité de vos installations.",
    details: [
      "Support technique continu",
      "Maintenance préventive",
      "Intervention rapide en cas de problème",
      "Conseil et accompagnement"
    ]
  }
]

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Engagement",
    description: "Nous nous engageons pleinement dans chaque projet pour atteindre vos objectifs."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Proximité",
    description: "Un interlocuteur unique et disponible pour un accompagnement personnalisé."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Réactivité",
    description: "Des interventions rapides et un respect strict des délais convenus."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Excellence",
    description: "Un niveau de qualité élevé sur tous nos services et réalisations."
  }
]

const commitments = [
  "Sécurité – Performance – Innovation – Satisfaction client",
  "Solutions complètes et intégrées",
  "Un seul interlocuteur pour plusieurs besoins",
  "Expertise technique & digitale",
  "Interventions rapides et fiables",
  "Solutions adaptées aux réalités locales",
  "Accompagnement sur mesure"
]

export default function MethodologiePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003366] to-[#004488] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              NOTRE MÉTHODOLOGIE
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Une approche structurée et éprouvée pour garantir le succès de vos projets
            </p>
          </div>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm mt-8">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Méthodologie</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#003366] mb-6">
              Un processus rigoureux pour des résultats concrets
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Chez ENTREPRISE FIDE, chaque projet suit une méthodologie éprouvée qui garantit 
              qualité, transparence et satisfaction client. De l'analyse initiale au support 
              après-vente, nous vous accompagnons à chaque étape.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Steps */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {methodologySteps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
                {/* Content */}
                <div className="flex-1">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-[#FF0000] text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                          {step.number}
                        </div>
                        <div className="w-14 h-14 bg-[#003366] text-white rounded-xl flex items-center justify-center">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-[#003366] mb-4">{step.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#FF0000] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? '1553877522-43269d4ea984' :
                        index === 1 ? '1454165804606-c3d57bc86b40' :
                        index === 2 ? '1581094794329-c8112a89af12' :
                        '1556761175-4b46a572b786'
                      }?w=600&q=80`}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Nos Valeurs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#003366] mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-12 bg-[#FF0000]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Notre Engagement
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {commitments.map((commitment, index) => (
              <div key={index} className="bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium">
                {commitment}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#003366]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-white/80 mb-8">
            Contactez-nous pour découvrir comment notre méthodologie peut vous aider à atteindre vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#FF0000] hover:bg-red-700 text-white rounded-full px-8">
                Contactez-nous
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#003366] rounded-full px-8">
                Voir nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
