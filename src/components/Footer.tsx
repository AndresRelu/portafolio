'use client'

import { Separator } from '@/components/ui/separator'
import { Github, Instagram, Facebook } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations.footer

  return (
    <footer id="contacto" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <Separator className="mb-12 bg-slate-700/50" />
        
        <div className="space-y-12">
          {/* Nombre y Título */}
          <div className="text-center space-y-3">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Andrés Romero
            </h3>
            <AnimatePresence mode="wait">
              <motion.p
                key={language}
                initial={{ opacity: 0, y: 6, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -6, filter: 'blur(4px)' }}
                transition={{ duration: 0.3 }}
                className="text-slate-400 text-xl md:text-2xl"
              >
                {t.role[language]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Contáctame */}
          <div className="text-center space-y-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={language}
                initial={{ opacity: 0, y: 6, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -6, filter: 'blur(4px)' }}
                transition={{ duration: 0.3 }}
                className="text-slate-300 font-semibold text-2xl md:text-3xl"
              >
                {t.contact[language]}
              </motion.p>
            </AnimatePresence>
            
            {/* Links Sociales */}
            <div className="flex justify-center items-center gap-8">
              <a
                href="https://github.com/AndresRelu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-300 hover:text-purple-400 transition-all hover:scale-110 duration-300"
              >
                <Github className="w-16 h-16 md:w-20 md:h-20" />
              </a>

              <a
                href="https://www.instagram.com/andrxsuki/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-slate-300 hover:text-purple-400 transition-all hover:scale-110 duration-300"
              >
                <Instagram className="w-16 h-16 md:w-20 md:h-20" />
              </a>

              <a
                href="https://www.facebook.com/andres.779732"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-slate-300 hover:text-purple-400 transition-all hover:scale-110 duration-300"
              >
                <Facebook className="w-16 h-16 md:w-20 md:h-20" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8">
            <p className="text-slate-500 text-sm">
              © 2025 Andrés Romero. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
