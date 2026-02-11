'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { getAssetPath } from '@/lib/assetPrefix'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

const technologies = [
  { name: 'JavaScript', logo: getAssetPath('/logos/javascript.svg') },
  { name: 'HTML', logo: getAssetPath('/logos/html.svg') },
  { name: 'CSS', logo: getAssetPath('/logos/css.svg') },
  { name: 'Tailwind CSS', logo: getAssetPath('/logos/tailwind.svg') },
  { name: 'Next.js', logo: getAssetPath('/logos/nextjs.svg') },
  { name: 'React', logo: getAssetPath('/logos/react.svg') },
  { name: 'React Native', logo: getAssetPath('/logos/react-native.svg') },
  { name: 'Python', logo: getAssetPath('/logos/python.svg') },
  { name: 'FastAPI', logo: getAssetPath('/logos/fastapi.svg') },
  { name: 'PostgreSQL', logo: getAssetPath('/logos/postgresql.svg') },
]

interface ProjectImage {
  src: string
  alt: { en: string; es: string }
}

interface Project {
  title: string
  subtitleKey: number
  descriptionKey: number
  image: string
  technologies: string[]
  videoUrl?: string
  images?: ProjectImage[]
  category: string
}

const projects: Project[] = [
  {
    title: 'AlineaDent',
    subtitleKey: 0,
    descriptionKey: 0,
    image: getAssetPath('/img/alineadent.jpeg'),
    technologies: ['JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL'],
    videoUrl: 'https://drive.google.com/file/d/1z6yksLOkjBW50mauP8OHpfmqBcF_Z063/view',
    category: 'Full-Stack'
  },
  {
    title: 'Work Orders Management System - Atta Montacargas',
    subtitleKey: 1,
    descriptionKey: 1,
    image: getAssetPath('/img/attaprofilepicture.png'),
    technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Python', 'FastAPI'],
    images: [
      { src: getAssetPath('/img/attamontacargas-sistema-foto1.png'), alt: { en: 'Order management panel', es: 'Panel de gestión de órdenes' } },
      { src: getAssetPath('/img/attamontacargas-sistema-foto2.png'), alt: { en: 'PDF report generation', es: 'Generación de reportes PDF' } }
    ],
    category: 'Full-Stack'
  }
]

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage()
  const t = translations.projects
  const [showImages, setShowImages] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projectTechs = technologies.filter(tech => 
    project.technologies.includes(tech.name)
  )

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImageIndex(null)
  }

  const nextImage = () => {
    if (project.images && selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % project.images.length)
    }
  }

  const prevImage = () => {
    if (project.images && selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? project.images.length - 1 : selectedImageIndex - 1
      )
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
    if (e.key === 'Escape') closeLightbox()
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="overflow-hidden bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Imagen del Proyecto */}
          <div className="relative h-64 sm:h-80 lg:h-full min-h-[300px] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent lg:bg-gradient-to-r lg:from-slate-900 lg:via-slate-900/50 lg:to-transparent" />
          </div>

          {/* Contenido del Proyecto */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Título del Proyecto */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {project.title}
              </h3>
              
              {/* Subtítulo */}
              <div className="min-h-[1.5rem] sm:min-h-[1.75rem] mb-4">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={language}
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, filter: 'blur(4px)' }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-400 font-semibold text-sm sm:text-base"
                >
                    {t.items[project.subtitleKey].subtitle[language]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Descripción */}
              <div className="min-h-[120px] sm:min-h-[100px] mb-6">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={language}
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, filter: 'blur(4px)' }}
                    transition={{ duration: 0.3 }}
                    className="text-slate-300 leading-relaxed text-sm sm:text-base"
                >
                    {t.items[project.descriptionKey].description[language]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Stack Tecnológico */}
              <div className="mb-6">
                <p className="text-slate-400 text-sm font-semibold mb-3">
                  {t.techStack[language]}
                </p>
                <motion.div
                  variants={containerVariant}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="flex flex-wrap gap-3"
                >
                  {projectTechs.map((tech) => (
                    <motion.div key={tech.name} variants={itemVariant}>
                      <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 hover:border-purple-500/50 transition-all px-3 py-2 rounded-md group">
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          width={20}
                          height={20}
                          className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <span className="text-white text-sm">{tech.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Galería de Imágenes (si está abierto) */}
              {showImages && project.images && project.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.images.map((img, index) => (
                      <div 
                        key={index} 
                        className="relative group cursor-pointer"
                        onClick={() => openLightbox(index)}
                      >
                        <div className="relative h-48 sm:h-56 overflow-hidden rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all">
                          <Image
                            src={img.src}
                            alt={img.alt[language]}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <ImageIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </div>
                        <p className="text-slate-400 text-xs mt-2 text-center">{img.alt[language]}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-3">
              {project.videoUrl && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1"
                >
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
                  >
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="min-w-[160px] text-center">{t.watchVideo[language]}</span>
                    </a>
                  </Button>
                </motion.div>
              )}
              
              {project.images && project.images.length > 0 && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1"
                >
                  <Button
                    size="lg"
                    onClick={() => setShowImages(!showImages)}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
                  >
                    <ImageIcon className="w-5 h-5 mr-2" />
                    <span className="min-w-[100px] text-center">{showImages ? t.hidePhotos[language] : t.viewPhotos[language]}</span>
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && project.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Botón Cerrar */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Botón Anterior */}
            {project.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
            )}

            {/* Imagen */}
            <motion.div
              key={selectedImageIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={project.images[selectedImageIndex].src}
                  alt={project.images[selectedImageIndex].alt[language]}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={100}
                />
              </div>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-center text-lg">
                  {project.images[selectedImageIndex].alt[language]}
                </p>
                <p className="text-slate-300 text-center text-sm mt-1">
                  {selectedImageIndex + 1} / {project.images.length}
                </p>
              </div>
            </motion.div>

            {/* Botón Siguiente */}
            {project.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  const { language } = useLanguage()
  const t = translations.projects
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="proyectos" ref={ref} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 min-h-[2.5rem] sm:min-h-[2.75rem] md:min-h-[3.25rem]"
        >
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
        </motion.h2>

        {/* Lista de Proyectos */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
