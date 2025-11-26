'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    setIsMobileMenuOpen(false) // Cerrar el menú móvil después de navegar
  }

  return (
    <>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Nombre - Centrado en móvil */}
            <motion.a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text hover:from-purple-400 hover:to-blue-300 transition-all md:flex-none flex-1 text-center md:text-left"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Andrés Romero
            </motion.a>

            {/* Links de navegación - Desktop */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-4 lg:px-5 py-3 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                    activeSection === item.href.slice(1)
                      ? 'text-purple-400 bg-purple-500/10'
                      : 'text-slate-300 hover:text-purple-400 hover:bg-slate-800/50'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Botón menú hamburguesa - Móvil */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-purple-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menú lateral móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menú lateral */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-slate-950/98 backdrop-blur-md border-l border-slate-800/50 shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header del menú */}
                <div className="flex justify-between items-center p-6 border-b border-slate-800/50">
                  <span className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text">
                    Menú
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-slate-300 hover:text-purple-400 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Links de navegación */}
                <div className="flex flex-col p-4 gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
