'use client'

import { Card } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Image from 'next/image'
import { motion } from 'framer-motion'

const skills = [
  { name: 'JavaScript', logo: '/logos/javascript.svg' },
  { name: 'HTML', logo: '/logos/html.svg' },
  { name: 'CSS', logo: '/logos/css.svg' },
  { name: 'Tailwind CSS', logo: '/logos/tailwind.svg' },
  { name: 'React', logo: '/logos/react.svg' },
  { name: 'React Native', logo: '/logos/react-native.svg' },
  { name: 'Next.js', logo: '/logos/nextjs.svg' },
  { name: 'TypeScript', logo: '/logos/typescript.svg' },
  { name: 'FastAPI', logo: '/logos/fastapi.svg' },
  { name: 'Git', logo: '/logos/git.svg' },
  { name: 'GitHub', logo: '/logos/github.svg' },
  { name: 'Linux', logo: '/logos/linux.svg' },
  { name: 'Conda', logo: '/logos/conda.svg' },
  { name: 'VS Code', logo: '/logos/vscode.svg' },
  { name: 'Markdown', logo: '/logos/markdown.svg' },
  { name: 'Docker', logo: '/logos/docker.svg' },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="habilidades" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          <span className="text-transparent bg-gradient-to-r from-purple-500 via-purple-400 to-blue-400 bg-clip-text">
            Mis habilidades
          </span>
        </motion.h2>

        <TooltipProvider>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3"
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="p-3 bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <div className="flex items-center justify-center aspect-square w-full">
                          <Image
                            src={skill.logo}
                            alt={skill.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <p className="text-slate-300 text-xs font-medium text-center">{skill.name}</p>
                      </div>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </motion.div>
        </TooltipProvider>
      </div>
    </section>
  )
}
