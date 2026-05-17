'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle2,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react'

const phoneNumbers = [
  { number: "+225 07 07 14 96 06", label: "WhatsApp Service Technique", whatsapp: true },
  { number: "+225 01 60 00 09 97", label: "WhatsApp Info", whatsapp: true },
  { number: "+225 05 66 34 60 44", label: "Appel / SMS", whatsapp: false },
  { number: "+225 01 01 36 18 44", label: "Appel / SMS", whatsapp: false },
]

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Adresse",
    lines: ["65 Rue El Hadj Dramane Diabaté", "Abidjan, Côte d'Ivoire"]
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Téléphones",
    lines: ["+225 07 07 14 96 06 (WhatsApp Technique)", "+225 01 60 00 09 97 (WhatsApp Info)", "+225 05 66 34 60 44", "+225 01 01 36 18 44", "Tous disponibles pour appels et SMS"]
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    lines: ["entreprisefide@gmail.com"]
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Horaires",
    lines: ["Lundi - Vendredi : 8h - 18h", "Samedi : 9h - 13h"]
  }
]

const services = [
  "Sécurité & Télécommunication",
  "Énergie & Solaire",
  "Informatique & Digital",
  "Communication & Imprimerie",
  "Services Généraux & Agricoles",
  "Autre"
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003366] to-[#004488] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            CONTACTEZ-NOUS
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Nous sommes à votre écoute pour tous vos projets
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#003366] mb-6">
                    Demandez un devis gratuit
                  </h2>
                  
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold text-[#003366] mb-2">
                        Message envoyé !
                      </h3>
                      <p className="text-gray-600">
                        Nous vous répondrons dans les plus brefs délais.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nom complet *
                          </label>
                          <Input
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="Votre nom"
                            className="rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Téléphone *
                          </label>
                          <Input
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            placeholder="+225 XX XX XX XX XX"
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="votre@email.com"
                          className="rounded-lg"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service concerné
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#003366]/20 focus:border-[#003366]"
                        >
                          <option value="">Sélectionnez un service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Votre message *
                        </label>
                        <Textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Décrivez votre projet ou vos besoins..."
                          rows={5}
                          className="rounded-lg"
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-[#FF0000] hover:bg-red-700 text-white rounded-full py-6 text-lg">
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer ma demande
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#003366] mb-6">
                  Nos coordonnées
                </h2>
                <p className="text-gray-600 mb-8">
                  N'hésitez pas à nous contacter par téléphone, email ou à nous rendre visite. 
                  Notre équipe est disponible pour répondre à toutes vos questions.
                </p>
              </div>

              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-[#003366] mb-1">{info.title}</h3>
                          {info.lines.map((line, idx) => (
                            <p key={idx} className="text-gray-600 text-sm">{line}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4">
                  <h3 className="font-bold text-[#003366] mb-4">Suivez-nous</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center text-white hover:bg-sky-600 transition-colors">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.123456789!2d-4.0123456789!3d5.336389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjAnMTEuMCJOIDTCsDAwJzQ0LjQiVw!5e0!3m2!1sfr!2sci!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <a href="tel:+2250707149606" className="block bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors">
              <Phone className="w-10 h-10 text-[#FF0000] mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg">Appelez-nous</h3>
              <p className="text-white/70 text-sm">+225 07 07 14 96 06</p>
            </a>
            <a href="https://wa.me/2250707149606" target="_blank" className="block bg-green-600/80 p-6 rounded-xl hover:bg-green-600 transition-colors">
              <svg className="w-10 h-10 text-white mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <h3 className="text-white font-bold text-lg">WhatsApp Technique</h3>
              <p className="text-white/70 text-sm">+225 07 07 14 96 06</p>
            </a>
            <a href="https://wa.me/2250160000997" target="_blank" className="block bg-green-600/80 p-6 rounded-xl hover:bg-green-600 transition-colors">
              <svg className="w-10 h-10 text-white mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <h3 className="text-white font-bold text-lg">WhatsApp Info</h3>
              <p className="text-white/70 text-sm">+225 01 60 00 09 97</p>
            </a>
            <a href="mailto:entreprisefide@gmail.com" className="block bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors">
              <Mail className="w-10 h-10 text-[#FF0000] mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg">Envoyez un email</h3>
              <p className="text-white/70 text-sm">entreprisefide@gmail.com</p>
            </a>
          </div>
          <p className="text-center text-white/50 text-sm mt-6">
            📞 Tous nos numéros sont disponibles pour les appels directs et SMS
          </p>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-6">
            Des questions ?
          </h2>
          <p className="text-gray-600 mb-8">
            Notre équipe est disponible pour répondre à toutes vos interrogations sur nos services, 
            nos tarifs ou nos délais d'intervention.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+2250707149606">
              <Button size="lg" className="bg-[#003366] hover:bg-[#002244] text-white rounded-full px-8">
                Appeler maintenant
              </Button>
            </a>
            <a href="mailto:entreprisefide@gmail.com">
              <Button size="lg" variant="outline" className="rounded-full px-8 border-[#003366] text-[#003366]">
                Envoyer un email
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
