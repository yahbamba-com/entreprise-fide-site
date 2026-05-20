'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const services = [
  { name: 'Sécurité & Télécommunication', href: '/services/securite' },
  { name: 'Énergie & Solaire', href: '/services/energie' },
  { name: 'Informatique & Digital', href: '/services/digital' },
  { name: 'Communication & Imprimerie', href: '/services/communication' },
  { name: 'Services Généraux & Agricoles', href: '/services/generaux' },
]

const links = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Méthodologie', href: '/methodologie' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#003366] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo-fide" 
                alt="ENTREPRISE FIDE" 
                className="h-12 w-auto rounded-lg"
              />
              <div>
                <span className="font-bold text-xl block">
                  ENTREPRISE <span className="text-[#FF0000]">FIDE</span>
                </span>
                <span className="text-white/60 text-xs">Leader Ouest-Africain en Ingénierie</span>
              </div>
            </div>
            <p className="text-white/70 mb-4">
              Excellence technique & Innovation Digitale en Afrique.
            </p>
            <p className="text-white/60 text-sm">
              Solutions technologiques, sécuritaires, énergétiques et digitales pour entreprises, institutions, ONG et projets agricoles.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#FF0000] font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens */}
          <div>
            <h3 className="text-[#FF0000] font-bold text-lg mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-[#FF0000] font-bold text-lg mb-4 mt-6">Engagement</h3>
            <div className="flex flex-wrap gap-2">
              {['Sécurité', 'Performance', 'Innovation', 'Satisfaction'].map((tag) => (
                <span key={tag} className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#FF0000] font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF0000] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">65 Rue El Hadj Dramane Diabaté</p>
                  <p className="text-white/80 text-sm">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FF0000] mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm space-y-1">
                  <a href="https://wa.me/2250707149606" target="_blank" className="flex items-center gap-1 hover:text-white transition-colors">
                    +225 07 07 14 96 06 <span className="text-green-400 text-xs">(WhatsApp Technique)</span>
                  </a>
                  <a href="https://wa.me/2250160000997" target="_blank" className="flex items-center gap-1 hover:text-white transition-colors">
                    +225 01 60 00 09 97 <span className="text-green-400 text-xs">(WhatsApp Info)</span>
                  </a>
                  <p>+225 05 66 34 60 44</p>
                  <p>+225 01 01 36 18 44</p>
                  <p className="text-white/50 text-xs mt-2">Appels, SMS et WhatsApp disponibles</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF0000] flex-shrink-0" />
                <a href="mailto:entreprisefide@gmail.com" className="text-white/80 hover:text-white text-sm">
                  entreprisefide@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#FF0000] flex-shrink-0" />
                <p className="text-white/80 text-sm">Lun - Ven : 8h - 18h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} ENTREPRISE FIDE | Solutions Techniques Intégrées | All Rights Reserved | by <Link href="https://yb.com" className="hover:text-white transition-colors">yb.com</Link>
            </p>
            <div className="flex gap-6 text-white/50 text-sm">
              <Link href="#" className="hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
