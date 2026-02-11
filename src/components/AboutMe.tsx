'use client'

import { Card } from '@/components/ui/card'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function AboutMe() {
  const { language } = useLanguage()
  const t = translations.about

  return (
    <section id="sobre-mi" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          <span className="grid [&>*]:col-start-1 [&>*]:row-start-1 justify-items-center">
            <span className="invisible" aria-hidden="true">{t.title.es}</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={language}
                initial={{ opacity: 0, y: 6, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -6, filter: 'blur(4px)' }}
                transition={{ duration: 0.3 }}
                className="inline-block text-transparent bg-gradient-to-r from-purple-500 via-purple-400 to-blue-400 bg-clip-text"
              >
                {t.title[language]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 md:p-12 bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
            <div className="grid [&>*]:col-start-1 [&>*]:row-start-1">
              <p className="invisible text-2xl md:text-3xl leading-relaxed text-center md:text-left" aria-hidden="true">
                {t.description.es}
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={language}
                  initial={{ opacity: 0, y: 6, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -6, filter: 'blur(4px)' }}
                  transition={{ duration: 0.3 }}
                  className="text-slate-300 text-2xl md:text-3xl leading-relaxed text-center md:text-left"
                >
                  {t.description[language]}
                </motion.p>
              </AnimatePresence>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
