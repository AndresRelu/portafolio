'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Github, Mail, FileText } from 'lucide-react'
import { toast } from 'sonner'
import { getAssetPath } from '@/lib/assetPrefix'

export default function Hero() {
  const copyEmail = async () => {
    const email = 'andres.romero.vired@gmail.com'
    await navigator.clipboard.writeText(email)
    toast.success('andres.romero.vired@gmail.com copiado', {
      description: 'El correo ha sido copiado al portapapeles',
      style: {
        color: '#9333ea', // morado para el título
      },
      descriptionClassName: '!text-black',
    })
  }

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-8 sm:pt-28 sm:pb-12 md:pt-32 md:pb-16"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Avatar / Foto de Perfil */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="mb-6 sm:mb-8 cursor-pointer"
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 shadow-glow-purple transition-all duration-300 hover:ring-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/30">
            <Image
              src={getAssetPath("/profile_picture.jpeg")}
              alt="Andrés Romero"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
            />
          </div>
        </motion.div>

        {/* Nombre */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6"
        >
          Andrés Romero
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 sm:mb-10"
        >
          <span className="font-bold text-transparent bg-gradient-to-r from-purple-500 via-purple-400 to-blue-400 bg-clip-text">
            Desarrollador de software
          </span>
        </motion.p>

        {/* Descripción en Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <Card className="p-6 md:p-8 bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
            <p className="text-slate-300 text-lg md:text-xl lg:text-2xl leading-relaxed">
              Soy de <span className="text-purple-500 font-semibold">Guanajuato, México</span>. Me especializo en el{' '}
              <span className="text-purple-400">desarrollo de software</span> y en el{' '}
              <span className="text-purple-400">diseño web</span>, creando aplicaciones{' '}
              <span className="text-purple-400">modernas</span>,{' '}
              <span className="text-purple-400">funcionales</span> y pensadas para{' '}
              <span className="text-purple-400">escalar</span>. Trabajo con{' '}
              <span className="text-purple-400">buenas prácticas de ingeniería</span> para construir sistemas{' '}
              <span className="text-purple-400">confiables</span> y{' '}
              <span className="text-purple-400">bien estructurados</span>. Además, tengo experiencia en{' '}
              <span className="text-purple-500 font-semibold">machine learning</span> como un valor extra que puedo integrar cuando un proyecto lo requiere.
            </p>
          </Card>
        </motion.div>

        {/* Botones de Acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Botón GitHub */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
            >
              <a
                href="https://github.com/AndresRelu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-6 h-6 md:w-7 md:h-7" />
                GitHub
              </a>
            </Button>
          </motion.div>

          {/* Botón Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button
              onClick={copyEmail}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-purple-500/50 bg-purple-500/10 hover:bg-purple-500/20 text-white backdrop-blur-sm shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
            >
              <Mail className="w-6 h-6 md:w-7 md:h-7 mr-2" />
              Email
            </Button>
          </motion.div>

          {/* Botón Descargar CV */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-blue-500/50 bg-blue-500/10 hover:bg-blue-500/20 text-white backdrop-blur-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
            >
              <a
                href="https://drive.google.com/file/d/1Y117USXdYWDBdQyI6pxcgqXB5cBnO9rS/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="w-6 h-6 md:w-7 md:h-7" />
                Descargar CV
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
