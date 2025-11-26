'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function AboutMe() {
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
          <span className="text-transparent bg-gradient-to-r from-purple-500 via-purple-400 to-blue-400 bg-clip-text">
            Sobre mí
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 md:p-12 bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
            <p className="text-slate-300 text-2xl md:text-3xl leading-relaxed text-center md:text-left">
              Soy Jorge <span className="text-purple-500 font-semibold">Andrés</span> López{' '}
              <span className="text-purple-500 font-semibold">Romero</span>, un{' '}
              <span className="text-purple-400">desarrollador de software</span> de 19 años de{' '}
              <span className="text-purple-400">Guanajuato, México</span>. Tengo fascinación por el{' '}
              <span className="text-purple-400">desarrollo de software</span>, el{' '}
              <span className="text-purple-400">diseño web</span> y el{' '}
              <span className="text-purple-500 font-semibold">machine learning</span>. Me apasiona crear{' '}
              <span className="text-purple-400">soluciones tecnológicas innovadoras</span> y aprender 
              continuamente sobre nuevas herramientas y metodologías de desarrollo.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
