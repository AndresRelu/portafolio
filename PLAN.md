# Plan de Desarrollo - Portafolio Web Andrés Romero

## 🎨 Diseño y Estética

### Paleta de Colores
- **Primario**: Morado (#8B5CF6, #A855F7)
- **Secundario**: Azul (#3B82F6, #60A5FA)
- **Neutros**: Grises y negros difuminados (#1F2937, #374151, #4B5563)
- **Fondo**: Degradado oscuro con efectos glassmorphism

### Recursos Visuales
- Logos de tecnologías (SVG de alta calidad)
- Iconos de redes sociales
- Efectos de hover y transiciones suaves
- Animaciones sutiles con Framer Motion
- Componentes de Shadcn UI
- Next.js Image optimization para mejor performance

---

## 📋 Estructura del Proyecto

### Tecnologías Base
```
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI
- Framer Motion (animaciones)
- Lucide Icons (incluido con Shadcn)
- Next.js Image & Font optimization
```

### Ventajas de Next.js para este Proyecto
- **SEO optimizado**: Meta tags y Open Graph automáticos
- **Performance**: Image optimization, lazy loading automático
- **Routing**: Sistema de archivos para navegación (si se expande)
- **Static Export**: Para deploy como sitio estático
- **Font Optimization**: Google Fonts con zero layout shift
- **Built-in TypeScript**: Soporte completo sin configuración adicional

---

## 🏗️ Estructura de Secciones

### 1. Hero Section (Presentación Inicial)
**Contenido:**
```
Andrés Romero
Desarrollador de software con conocimientos en machine learning

De Guanajuato, México. Especializado en el desarrollo de soluciones 
de software inteligentes que conectan la inteligencia artificial con 
aplicaciones escalables. Experto en diseñar, implementar y desplegar 
sistemas impulsados por IA con prácticas modernas de ingeniería de 
software. Familiarizado con el trabajo en equipo.
```

**Elementos:**
- Nombre en grande (tipografía bold)
- Foto profile_picture.jpeg (fotografía mia)
- Subtítulo con énfasis en "machine learning" (color morado)
- Descripción profesional
- Tres botones de acción:
  - 🔗 GitHub → `https://github.com/AndresRelu`
  - 📧 Email → `andres.romero.vired@gmail.com` (copiar al portapapeles + toast "Copiado")
  - 📄 Descargar CV → (pendiente de link)

**Componentes Shadcn:**
- Button
- Toast (para notificación de copiado)
- Badge (para etiquetas)

---

### 2. Sección Experiencia y Proyectos

**Título:** "Experiencia y Proyectos"

#### Proyecto Featured: AlineaDent
**Card con:**
- Imagen: `alineadent.jpeg` (desde /public/)
- Título: "AlineaDent - Dental Clinic Management System"
- Descripción:
```
Sistema integral de gestión para clínicas dentales desarrollado con 
Next.js y Python/FastAPI. Administra pacientes, citas y tratamientos 
dentales con calendario visual, comunicación integrada de WhatsApp, 
monitoreo de conversaciones con IA y generación automática de reportes. 
Cuenta con diseño responsivo adaptable a cualquier dispositivo.
```

- Stack tecnológico con logos:
  - JavaScript
  - HTML5
  - CSS3
  - Tailwind CSS
  - Next.js
  - Python
  - FastAPI
  - PostgreSQL

- Botón "Ver video de funcionamiento" → `https://drive.google.com/file/d/1z6yksLOkjBW50mauP8OHpfmqBcF_Z063/view`

**Componentes Shadcn:**
- Card
- Badge (para tecnologías)
- Button

---

### 3. Sección Habilidades

**Título:** "Mis habilidades en el diseño web"

**Grid de tecnologías con logos:**
- JavaScript
- HTML
- CSS
- Tailwind CSS
- React
- React Native
- Next.js
- TypeScript
- FastAPI
- Git
- GitHub
- Linux
- Conda
- VS Code
- Markdown

**Componentes Shadcn:**
- Card pequeños con hover effect
- Tooltip (nombre de la tecnología)

---

### 4. Sección Sobre Mí

**Título:** "Sobre mí"

**Contenido:**
```
Soy Jorge Andrés López Romero, un desarrollador de software de 19 años 
de Guanajuato, México. Tengo fascinación por el desarrollo de software, 
el diseño web y el machine learning. Me apasiona crear soluciones 
tecnológicas innovadoras y aprender continuamente sobre nuevas 
herramientas y metodologías de desarrollo.
```

**Resaltados en morado:**
- "Andrés"
- "Romero"
- Algunas palabras clave estratégicas

**Componentes Shadcn:**
- Card con borde sutil
- Avatar (foto opcional)

---

### 5. Footer

**Estructura:**
```
Andrés Romero
Desarrollador de software

Contáctame
```

**Links sociales con iconos:**
- 🔗 GitHub: `https://github.com/AndresRelu`
- 📷 Instagram: `https://www.instagram.com/andrxsuki/`
- 📘 Facebook: `https://www.facebook.com/andres.779732`

**Copyright:**
```
© 2025 Andrés Romero. All rights reserved.
```

**Componentes Shadcn:**
- Separator
- Button (variante ghost para links)

---

## 🎯 Palabras Clave a Resaltar en Morado

*Usar con moderación para mantener elegancia*

- Andrés / Romero (Sobre mí)
- machine learning
- inteligencia artificial
- Next.js
- React
- TypeScript
- Guanajuato, México (primera mención)

---

## � Diseño Responsivo para Dispositivos Móviles

### Breakpoints de Tailwind
```
- sm: 640px  (móvil grande / tablet pequeña)
- md: 768px  (tablet)
- lg: 1024px (laptop)
- xl: 1280px (desktop)
- 2xl: 1536px (pantalla grande)
```

### Hero Section - Mobile
**Mobile (< 640px):**
- Nombre: `text-4xl` (36px)
- Subtítulo: `text-base` (16px)
- Descripción: `text-sm` (14px)
- Botones: Stack vertical (flex-col), ancho completo
- Padding: `px-4 py-8`
- Avatar/Foto: `w-32 h-32` centrado

**Tablet (640px - 1024px):**
- Nombre: `text-5xl` (48px)
- Subtítulo: `text-lg` (18px)
- Descripción: `text-base` (16px)
- Botones: Grid 2 columnas para GitHub y Email, CV abajo
- Padding: `px-6 py-12`
- Avatar/Foto: `w-40 h-40`

**Desktop (> 1024px):**
- Nombre: `text-6xl md:text-7xl` (60-72px)
- Subtítulo: `text-xl` (20px)
- Descripción: `text-lg` (18px)
- Botones: Horizontal (flex-row), espaciado entre ellos
- Padding: `px-8 py-16`
- Avatar/Foto: `w-48 h-48`

### Proyectos Section - Mobile
**Mobile:**
- Card: Ancho completo, padding `p-4`
- Imagen/Video: Aspect ratio 16:9, ancho 100%
- Stack tecnológico: Grid 4 columnas, logos `w-10 h-10`
- Descripción: `text-sm`, líneas limitadas
- Botón: Ancho completo

**Tablet:**
- Card: Max width con margen automático
- Stack tecnológico: Grid 4-5 columnas, logos `w-12 h-12`
- Descripción: `text-base`

**Desktop:**
- Card: Grid 2 columnas (imagen izq, contenido der)
- Stack tecnológico: Flex wrap, logos `w-14 h-14`
- Más espacio para descripción

### Skills Section - Mobile
**Mobile:**
- Grid: 3 columnas (`grid-cols-3`)
- Logos: `w-12 h-12`
- Texto: `text-xs` debajo del logo
- Gap: `gap-4`

**Tablet:**
- Grid: 4 columnas (`grid-cols-4`)
- Logos: `w-14 h-14`
- Texto: `text-sm`
- Gap: `gap-6`

**Desktop:**
- Grid: 6-7 columnas (`grid-cols-6 lg:grid-cols-7`)
- Logos: `w-16 h-16`
- Texto: `text-base`
- Gap: `gap-8`
- Hover effect más pronunciado

### Sobre Mí Section - Mobile
**Mobile:**
- Card: Padding `p-4`, texto `text-sm`
- Avatar: Centrado arriba, `w-24 h-24`
- Texto: Justificado, line height 1.6

**Tablet/Desktop:**
- Card: Padding `p-6 md:p-8`
- Avatar: Flotante a la izquierda
- Texto: `text-base md:text-lg`
- Max width `max-w-3xl` centrado

### Footer - Mobile
**Mobile:**
- Stack vertical completo
- Links sociales: Iconos grandes `w-10 h-10`
- Espaciado: `space-y-4`
- Texto centrado

**Desktop:**
- Grid 3 columnas o flex horizontal
- Links sociales: `w-8 h-8`
- Copyright en línea separada

### Clases Tailwind Responsivas Clave
```jsx
// Contenedor principal
className="container mx-auto px-4 sm:px-6 lg:px-8"

// Tipografía responsiva
className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"

// Spacing responsivo
className="py-8 sm:py-12 md:py-16 lg:py-20"

// Grid responsivo
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"

// Flex responsivo
className="flex flex-col sm:flex-row items-center gap-4"

// Hidden en mobile
className="hidden md:block"

// Solo en mobile
className="block md:hidden"
```

### Optimizaciones Mobile
- **Touch targets**: Mínimo 44x44px para botones
- **Font size**: Mínimo 16px para inputs (evitar zoom en iOS)
- **Scroll suave**: `scroll-behavior: smooth`
- **Viewport**: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- **Performance**: Lazy loading de imágenes y logos
- **Gestos**: Swipe opcional para navegación de proyectos

### Animaciones en Móvil - Mejores Prácticas
- **Reducir duración**: 200-300ms en mobile vs 400-600ms en desktop
- **Desactivar parallax**: Puede causar lag en móviles de gama baja
- **Prefer transform y opacity**: Mejor performance que width/height
- **Use will-change**: Para propiedades que se animarán
- **Limitar animaciones simultáneas**: Máximo 3-4 elementos animándose
- **Respect prefers-reduced-motion**: Para accesibilidad

```css
/* Respeta las preferencias de animación del usuario */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

```tsx
// En React con Framer Motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<motion.div
  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
>
  {/* Contenido */}
</motion.div>
```

---

##  Componentes de Shadcn a Instalar

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add toast
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add tooltip
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add skeleton  # Para estados de carga
npx shadcn-ui@latest add dialog    # Para modales si es necesario
```

### Dependencias Adicionales para Animaciones
```bash
npm install framer-motion
npm install react-intersection-observer  # Para detectar scroll
npm install lucide-react  # Iconos (viene con Shadcn)
```

---

## 🎨 Efectos Visuales Lujosos

### Glassmorphism
- Cards semi-transparentes con backdrop-blur
- Bordes sutiles con gradientes

### Animaciones con Shadcn y Framer Motion
- **Fade in al scroll**: Elementos aparecen gradualmente
- **Slide in**: Cards y secciones se deslizan desde los lados
- **Scale**: Botones y logos crecen sutilmente en hover
- **Stagger animations**: Logos de tecnologías aparecen uno tras otro
- **Hover effects**: Cards se elevan con sombra y brillo
- **Transiciones suaves**: Entre todas las secciones (300-500ms)
- **Parallax sutil**: En hero section para profundidad
- **Reveal on scroll**: Usando Intersection Observer

#### Variantes de Framer Motion a Usar
```typescript
// Fade In
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
}

// Slide Up
const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

// Stagger Container
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

// Scale on Hover
const scaleHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } }
}
```

### Gradientes
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
background: linear-gradient(to right, #8B5CF6, #3B82F6);
```

### Efectos de Iluminación
- Glow effects en hover
- Sombras con color (box-shadow con tonos morados/azules)

### Ejemplos de Animaciones Implementadas con Next.js

#### 1. Hero Section con Fade In (Next.js Client Component)
```tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center">
        <Image
          src="/profile_picture.jpeg"
          alt="Andrés Romero"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-6"
          priority // Para hero image
        />
        <h1 className="text-5xl md:text-7xl font-bold">Andrés Romero</h1>
      </div>
    </motion.section>
  )
}
```

#### 2. Cards con Stagger Effect (Next.js)
```tsx
'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Skills() {
  const skills = ['JavaScript', 'TypeScript', 'Next.js', 'React', ...]
  
  return (
    <motion.div 
      variants={container} 
      initial="hidden" 
      animate="show"
      className="grid grid-cols-3 md:grid-cols-6 gap-6"
    >
      {skills.map((skill) => (
        <motion.div key={skill} variants={item}>
          <Card className="p-4">{skill}</Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
```

#### 3. Scroll-triggered Animations (Next.js)
```tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-20 px-4"
    >
      {/* Proyectos */}
    </motion.section>
  )
}
```

#### 4. Botones con Hover y Tap (Next.js)
```tsx
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function ContactButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)' }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Button className="bg-primary text-white px-6 py-3 rounded-lg">
        Contáctame
      </Button>
    </motion.div>
  )
}
```

#### 5. Logo Grid con Hover Individual (Next.js + Image Optimization)
```tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function TechStack() {
  const technologies = [
    { name: 'JavaScript', logo: '/logos/javascript.svg' },
    { name: 'TypeScript', logo: '/logos/typescript.svg' },
    { name: 'Next.js', logo: '/logos/nextjs.svg' },
    // ... más tecnologías
  ]
  
  return (
    <motion.div
      className="grid grid-cols-3 md:grid-cols-6 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {technologies.map((tech) => (
        <motion.div
          key={tech.name}
          variants={item}
          whileHover={{ 
            scale: 1.1, 
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 }
          }}
          className="flex flex-col items-center"
        >
          <Image 
            src={tech.logo} 
            alt={tech.name} 
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <span className="text-sm mt-2">{tech.name}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
```

#### 6. Texto con Gradient Animation (Next.js globals.css)
```css
/* En src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .gradient-text {
    background: linear-gradient(
      90deg,
      #8B5CF6,
      #3B82F6,
      #8B5CF6
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradient-shift 3s ease infinite;
  }
  
  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
}
```

#### 7. Copy to Clipboard con Toast (Next.js)
```tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Mail } from 'lucide-react'

export default function EmailButton() {
  const { toast } = useToast()
  const email = 'andres.romero.vired@gmail.com'
  
  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    toast({
      title: "¡Copiado!",
      description: "Email copiado al portapapeles",
    })
  }
  
  return (
    <Button onClick={copyEmail} variant="outline">
      <Mail className="mr-2 h-4 w-4" />
      Email
    </Button>
  )
}
```
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 3s ease infinite;
}
```

---

## 📁 Estructura de Archivos Next.js (App Router)

```
portafolio/
├── public/
├── public/
│   ├── logos/              # Logos de tecnologías (SVG)
│   ├── profile_picture.jpeg  # Foto de perfil
│   ├── alineadent.jpeg     # Imagen del proyecto AlineaDent
│   └── cv.pdf              # CV para descargar
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout principal con metadata
│   │   ├── page.tsx        # Página principal (home)
│   │   ├── globals.css     # Estilos globales + Tailwind
│   │   └── favicon.ico     # Favicon
│   ├── components/
│   │   ├── ui/             # Componentes Shadcn
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── avatar.tsx
│   │   ├── Hero.tsx        # Sección Hero
│   │   ├── Projects.tsx    # Sección Proyectos
│   │   ├── Skills.tsx      # Sección Habilidades
│   │   ├── About.tsx       # Sección Sobre Mí
│   │   └── Footer.tsx      # Footer
│   ├── lib/
│   │   └── utils.ts        # Utilidades (cn, etc.)
│   └── types/
│       └── index.ts        # TypeScript types
├── .gitignore
├── next.config.mjs         # Configuración Next.js
├── package.json
├── tailwind.config.ts      # Configuración Tailwind
├── tsconfig.json           # Configuración TypeScript
├── postcss.config.mjs      # PostCSS para Tailwind
└── components.json         # Configuración Shadcn
```

### Archivos Clave de Next.js

#### `src/app/layout.tsx`
```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Andrés Romero | Desarrollador de Software',
  description: 'Portafolio de Andrés Romero, desarrollador de software especializado en IA y machine learning. Guanajuato, México.',
  keywords: ['desarrollador', 'software', 'machine learning', 'IA', 'Next.js', 'React'],
  authors: [{ name: 'Andrés Romero' }],
  openGraph: {
    title: 'Andrés Romero | Desarrollador de Software',
    description: 'Especializado en desarrollo de software y machine learning',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

#### `src/app/page.tsx`
```tsx
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-dark">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </main>
  )
}
```

#### `next.config.mjs`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Para sitio estático
  images: {
    unoptimized: true, // Para export estático
  },
}

export default nextConfig
```

---

## 🚀 Pasos de Implementación

### Fase 1: Setup (45 min)
1. Crear proyecto con Next.js 14+ (App Router): `npx create-next-app@latest`
   - Seleccionar: TypeScript ✅, Tailwind CSS ✅, App Router ✅, src/ directory ✅
2. Configurar Shadcn UI: `npx shadcn-ui@latest init`
3. Instalar dependencias adicionales:
   ```bash
   npm install framer-motion
   npm install react-intersection-observer
   npm install tailwindcss-animate
   ```
4. Configurar Tailwind con animaciones personalizadas
5. Configurar metadata en layout.tsx
6. Configurar next.config.mjs para export estático

### Fase 2: Hero Section (1.5 horas)
1. Componente Hero con presentación y foto de perfil (Next.js Image)
2. Implementar animaciones de entrada (fade + slide) con Framer Motion
3. Botones de acción (GitHub, Email, CV) con hover effects
4. Implementar toast para copiar email (Shadcn Toast)
5. **Responsive**: Ajustar layout para mobile (stack vertical)
6. Añadir gradient background animado
7. Usar Next.js Font optimization para tipografía

### Fase 3: Proyectos (2 horas)
1. Card de proyecto AlineaDent con glassmorphism
2. Grid de logos de tecnologías con stagger animation
3. Link externo al video de funcionamiento
4. Efectos hover en card (elevación + glow)
5. **Responsive**: Card vertical en mobile, horizontal en desktop
6. Scroll-triggered animations con Intersection Observer
7. Optimizar imágenes con next/image

### Fase 4: Skills (1.5 horas)
1. Grid responsive de habilidades (3 cols mobile, 6-7 desktop)
2. Integrar logos de tecnologías desde /public/logos/
3. Tooltips informativos (Shadcn Tooltip)
4. Stagger animation para aparición de logos
5. Hover effects individuales (scale + rotate)
6. **Mobile**: Touch-friendly, logos más pequeños
7. Lazy loading automático de Next.js

### Fase 5: Sobre Mí (45 min)
1. Card con descripción personal y avatar (Next.js Image)
2. Resaltar palabras clave en morado con gradient CSS
3. Fade-in animation al scroll
4. **Responsive**: Avatar arriba en mobile, lateral en desktop
5. Tipografía adaptativa

### Fase 6: Footer (30 min)
1. Links de redes sociales con iconos animados (Lucide Icons)
2. Copyright con separador (Shadcn Separator)
3. Hover effects en iconos (scale + color)
4. **Responsive**: Stack vertical en mobile
5. Diseño elegante con gradiente sutil

### Fase 7: Pulido Final (1.5 horas)
1. **Testing responsive**: Mobile, tablet, desktop
2. Implementar prefers-reduced-motion para accesibilidad
3. Optimización de performance:
   - Verificar lazy loading de imágenes
   - Code splitting automático de Next.js
   - Optimizar bundle size
4. SEO: Completar metadata en layout.tsx (og:image, description)
5. Testing en diferentes navegadores (Chrome, Safari, Firefox)
6. Lighthouse audit y optimizaciones
7. Configurar smooth scroll behavior global
8. Build de producción: `npm run build`
9. Probar export estático: `npm run build && npm run start`
4. Implementar toast para copiar email
5. **Responsive**: Ajustar layout para mobile (stack vertical)
6. Añadir gradient background animado

### Fase 3: Proyectos (2 horas)
1. Card de proyecto AlineaDent con glassmorphism
2. Grid de logos de tecnologías con stagger animation
3. Link al video de funcionamiento
4. Efectos hover en card (elevación + glow)
5. **Responsive**: Card vertical en mobile, horizontal en desktop
6. Scroll-triggered animations con Intersection Observer

### Fase 4: Skills (1.5 horas)
1. Grid responsive de habilidades (3 cols mobile, 6-7 desktop)
2. Integrar logos de tecnologías con lazy loading
3. Tooltips informativos
4. Stagger animation para aparición de logos
5. Hover effects individuales (scale + rotate)
6. **Mobile**: Touch-friendly, logos más pequeños

### Fase 5: Sobre Mí (45 min)
1. Card con descripción personal y avatar
2. Resaltar palabras clave en morado con gradient
3. Fade-in animation al scroll
4. **Responsive**: Avatar arriba en mobile, lateral en desktop
5. Tipografía adaptativa

### Fase 6: Footer (30 min)
1. Links de redes sociales con iconos animados
2. Copyright con separador
3. Hover effects en iconos (scale + color)
4. **Responsive**: Stack vertical en mobile
5. Diseño elegante con gradiente sutil

### Fase 7: Pulido Final (1.5 horas)
1. **Testing responsive**: Mobile, tablet, desktop
2. Implementar prefers-reduced-motion
3. Optimización de performance (lazy loading, code splitting)
4. SEO básico (meta tags, og:image, description)
5. Testing en diferentes navegadores (Chrome, Safari, Firefox)
6. Lighthouse audit y optimizaciones
7. Smooth scroll behavior global
8. Error boundaries para robustez

---

## 🎨 Configuración de Tailwind Personalizada para Next.js

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B5CF6',
          light: '#A855F7',
          dark: '#7C3AED',
        },
        secondary: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#2563EB',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
        'gradient-dark': 'linear-gradient(to bottom, #0f172a, #1e293b)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.4)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.4)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
```

### Instalación de Dependencias
```bash
# Crear proyecto Next.js
npx create-next-app@latest portafolio --typescript --tailwind --app --src-dir

# Instalar dependencias adicionales
npm install framer-motion
npm install react-intersection-observer
npm install tailwindcss-animate

# Configurar Shadcn UI
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card badge toast separator tooltip avatar
```

---

## 📝 Recursos Necesarios

### Logos de Tecnologías
- Descargar desde: [DevIcons](https://devicon.dev/) o [Simple Icons](https://simpleicons.org/)
- Formato: SVG
- Colores: Conservar colores originales o adaptar a la paleta

### Iconos
- Lucide React (incluido con Shadcn)
- React Icons (alternativa)

### Fuentes
- Google Fonts: Inter, Poppins, o Montserrat
- Font weights: 400, 500, 600, 700

---

## ✅ Checklist Final

### Funcionalidad
- [ ] Funcionalidad de copiar email con toast
- [ ] Links externos funcionando correctamente (GitHub, Instagram, Facebook)
- [ ] Link a video de AlineaDent funcionando
- [ ] Botón de descarga de CV (cuando esté el link)
- [ ] Todos los logos de tecnologías cargando correctamente

### Diseño y Estética
- [ ] Paleta de colores morada/azul/gris implementada
- [ ] Palabras clave resaltadas en morado (moderadamente)
- [ ] Gradientes de fondo aplicados
- [ ] Efectos glassmorphism en cards
- [ ] Sombras con glow effects

### Animaciones
- [ ] Animaciones de entrada en Hero Section
- [ ] Scroll-triggered animations en todas las secciones
- [ ] Stagger effects en logos de tecnologías
- [ ] Hover effects en cards y botones
- [ ] Transiciones suaves entre secciones
- [ ] Prefers-reduced-motion implementado

### Responsive Design
- [ ] Mobile (< 640px): Layout optimizado, touch targets 44px+
- [ ] Tablet (640px - 1024px): Layout intermedio
- [ ] Desktop (> 1024px): Layout completo con todas las features
- [ ] Tipografía adaptativa en todas las secciones
- [ ] Imágenes y logos responsive
- [ ] Grid systems ajustándose correctamente
- [ ] Navegación touch-friendly en móvil

### Performance
- [ ] Lazy loading de imágenes implementado
- [ ] Code splitting para mejor carga
- [ ] Optimización de imágenes (WebP, tamaños correctos)
- [ ] Lighthouse score > 90 en todas las categorías
- [ ] Sin console errors o warnings

### SEO y Accesibilidad
- [ ] Meta tags (title, description, og:image)
- [ ] Alt text en todas las imágenes
- [ ] Estructura semántica HTML (header, main, section, footer)
- [ ] ARIA labels donde sea necesario
- [ ] Contraste de colores accesible (WCAG AA)
- [ ] Keyboard navigation funcional

### Testing
- [ ] Testing en Chrome
- [ ] Testing en Firefox
- [ ] Testing en Safari
- [ ] Testing en dispositivos móviles reales
- [ ] Testing de todos los links externos
- [ ] Testing de animaciones en diferentes dispositivos

### Deploy
- [ ] Build de producción sin errores
- [ ] Deploy en Vercel/Netlify
- [ ] Custom domain configurado (opcional)
- [ ] SSL funcionando
- [ ] Analytics configurado (opcional)

---

## 🌐 Deploy con Next.js

### Opción 1: Vercel (Recomendado - Oficial de Next.js)
**Ventajas:**
- Deploy automático desde GitHub
- Optimización automática de Next.js
- CDN global
- SSL gratuito
- Preview deployments para cada commit

**Pasos:**
1. Subir código a GitHub
2. Conectar repositorio en [vercel.com](https://vercel.com)
3. Deploy automático ✅

### Opción 2: Export Estático + Netlify/GitHub Pages
**Para sitio 100% estático:**

```bash
# En next.config.mjs, asegúrate de tener:
output: 'export'

# Build
npm run build

# La carpeta 'out' contendrá el sitio estático
# Sube esta carpeta a Netlify o GitHub Pages
```

**Netlify:**
```bash
# Build command: npm run build
# Publish directory: out
```

**GitHub Pages:**
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: ./out
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v2
```

### Comandos de Build
```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción (si no usas export)
npm run start

# Build + Start (para testing local)
npm run build && npm run start
```

---

## 📦 Comando Rápido de Inicio

```bash
# 1. Crear proyecto Next.js con todas las opciones
npx create-next-app@latest portafolio \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"

# 2. Entrar al directorio
cd portafolio

# 3. Instalar dependencias adicionales
npm install framer-motion react-intersection-observer tailwindcss-animate

# 4. Configurar Shadcn UI
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card badge toast separator tooltip avatar

# 5. Iniciar desarrollo
npm run dev
```

---

**Tiempo estimado total:** 8-10 horas
**Dificultad:** Intermedia-Avanzada
**Resultado:** Portafolio profesional y elegante con diseño moderno, completamente responsive y con animaciones fluidas

**Stack Tecnológico Final:**
- **Framework**: Next.js 14+ (App Router) con TypeScript
- **Estilos**: Tailwind CSS con animaciones personalizadas
- **Componentes UI**: Shadcn UI
- **Animaciones**: Framer Motion + React Intersection Observer
- **Optimización**: Next.js Image, Font Optimization, Static Export
- **Deploy**: Vercel (recomendado) o Netlify/GitHub Pages

**Ventajas de usar Next.js:**
✅ SEO optimizado automáticamente
✅ Performance superior con Image/Font optimization
✅ Zero-config TypeScript
✅ Hot reload ultra rápido
✅ Deploy sencillo en Vercel
✅ Exportación a sitio estático
✅ Mejor DX (Developer Experience)

---

*Plan creado el 14 de noviembre de 2025*
*Actualizado para Next.js con animaciones Shadcn y diseño responsive móvil*
*Actualizado con animaciones Shadcn y diseño responsive móvil*
