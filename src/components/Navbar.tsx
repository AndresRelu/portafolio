'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detectar la sección activa
      const sections = navItems.map(item => item.href.slice(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.getElementById(href.slice(1))
    if (element) {
      const offset = 80 // Offset para el navbar fijo
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Nombre */}
          <motion.a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text hover:from-purple-400 hover:to-blue-300 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Andrés Romero
          </motion.a>

          {/* Links de navegación */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`px-5 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-purple-400 bg-purple-500/10'
                    : 'text-slate-300 hover:text-purple-400 hover:bg-slate-800/50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Menú móvil - Versión simplificada con iconos */}
          <div className="md:hidden flex items-center gap-2">
            {navItems.slice(1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-purple-400 bg-purple-500/10'
                    : 'text-slate-300 hover:text-purple-400 hover:bg-slate-800/50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
