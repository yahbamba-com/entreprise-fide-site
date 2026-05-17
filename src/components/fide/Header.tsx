'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Settings } from 'lucide-react'

interface SiteConfig {
  companyName: string
  logoUrl?: string
}

const navigation = [
  { name: 'Accueil', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'Sécurité & Télécommunication', href: '/services/securite' },
      { name: 'Énergie & Solaire', href: '/services/energie' },
      { name: 'Informatique & Digital', href: '/services/digital' },
      { name: 'Communication & Imprimerie', href: '/services/communication' },
      { name: 'Services Généraux & Agricoles', href: '/services/generaux' },
    ]
  },
  { name: 'Méthodologie', href: '/methodologie' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [siteConfig, setSiteConfig] = useState<SiteConfig>({
    companyName: 'ENTREPRISE FIDE'
  })
  const pathname = usePathname()

  // Fetch site config
  useEffect(() => {
    fetch('/api/cms/site-config')
      .then(res => res.json())
      .then(data => {
        if (data && data.companyName) {
          setSiteConfig(data)
        }
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = pathname === '/'
  const isTransparent = isHome && !isScrolled
  const isAdmin = pathname.startsWith('/admin')

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHome ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {siteConfig.logoUrl ? (
              <img src={siteConfig.logoUrl} alt={siteConfig.companyName} className="h-10 md:h-12 w-auto" />
            ) : (
              <>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#003366] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg md:text-xl">F</span>
                </div>
                <div className="hidden sm:block">
                  <span className={`font-bold text-lg ${isScrolled || !isHome ? 'text-[#003366]' : 'text-white'}`}>
                    {siteConfig.companyName?.split(' ')[0]} <span className="text-[#FF0000]">{siteConfig.companyName?.split(' ')[1]}</span>
                  </span>
                </div>
              </>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`font-medium transition-colors hover:text-[#FF0000] flex items-center gap-1 ${
                        isScrolled || !isHome ? 'text-gray-700' : 'text-white'
                      } ${pathname.startsWith('/services') ? 'text-[#FF0000]' : ''}`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    
                    {/* Dropdown */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 border">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-4 py-3 text-sm transition-colors ${
                              pathname === subItem.href 
                                ? 'bg-[#003366] text-white' 
                                : 'text-gray-700 hover:bg-gray-50 hover:text-[#FF0000]'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-medium transition-colors hover:text-[#FF0000] ${
                      isScrolled || !isHome ? 'text-gray-700' : 'text-white'
                    } ${pathname === item.href ? 'text-[#FF0000]' : ''}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Admin Link */}
            <Link href="/admin" className="flex items-center gap-1 text-gray-500 hover:text-[#003366]">
              <Settings className="w-4 h-4" />
              <span className="text-sm">Admin</span>
            </Link>
            
            <Link href="/contact">
              <Button className="bg-[#FF0000] hover:bg-red-700 text-white rounded-full px-6">
                Demander un devis
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={isScrolled || !isHome ? 'text-[#003366]' : 'text-white'} />
            ) : (
              <Menu className={isScrolled || !isHome ? 'text-[#003366]' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg p-4 mt-2 mb-4">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <Link
                        href={item.href}
                        className="text-gray-700 font-medium hover:text-[#FF0000] transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-sm text-gray-600 hover:text-[#FF0000]"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 font-medium hover:text-[#FF0000] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/admin" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-gray-500">
                <Settings className="w-4 h-4" />
                <span>Administration</span>
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-[#FF0000] hover:bg-red-700 text-white rounded-full w-full">
                  Demander un devis
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
