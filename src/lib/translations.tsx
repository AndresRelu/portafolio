export type Language = 'en' | 'es'

export const translations = {
  nav: {
    items: [
      { en: 'Home', es: 'Inicio', href: '#hero' },
      { en: 'Projects', es: 'Proyectos', href: '#proyectos' },
      { en: 'Skills', es: 'Habilidades', href: '#habilidades' },
      { en: 'About me', es: 'Sobre mí', href: '#sobre-mi' },
      { en: 'Contact', es: 'Contacto', href: '#contacto' },
    ],
    menu: { en: 'Menu', es: 'Menú' },
  },

  hero: {
    subtitle: {
      en: 'Software Developer',
      es: 'Desarrollador de software',
    },
    description: {
      en: (
        <>
          I&apos;m from <span className="text-purple-500 font-semibold">Guanajuato, Mexico</span>. I specialize in{' '}
          <span className="text-purple-400">software development</span> and{' '}
          <span className="text-purple-400">web design</span>, creating{' '}
          <span className="text-purple-400">modern</span>,{' '}
          <span className="text-purple-400">functional</span> applications built to{' '}
          <span className="text-purple-400">scale</span>. I work with{' '}
          <span className="text-purple-400">engineering best practices</span> to build{' '}
          <span className="text-purple-400">reliable</span> and{' '}
          <span className="text-purple-400">well-structured</span> systems. Additionally, I have experience in{' '}
          <span className="text-purple-500 font-semibold">machine learning</span> as an extra value I can integrate when a project requires it.
        </>
      ),
      es: (
        <>
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
        </>
      ),
    },
    toast: {
      title: {
        en: 'andres.romero.vired@gmail.com copied',
        es: 'andres.romero.vired@gmail.com copiado',
      },
      description: {
        en: 'Email has been copied to clipboard',
        es: 'El correo ha sido copiado al portapapeles',
      },
    },
    viewCV: { en: 'View CV', es: 'Ver CV' },
  },

  projects: {
    title: {
      en: 'Experience & Projects',
      es: 'Experiencia y Proyectos',
    },
    techStack: {
      en: 'Tech Stack:',
      es: 'Stack Tecnológico:',
    },
    watchVideo: {
      en: 'Watch demo video',
      es: 'Ver video de funcionamiento',
    },
    viewPhotos: {
      en: 'View photos',
      es: 'Ver fotos',
    },
    hidePhotos: {
      en: 'Hide photos',
      es: 'Ocultar fotos',
    },
    items: [
      {
        title: 'AlineaDent',
        subtitle: {
          en: 'Dental Clinic Management System',
          es: 'Dental Clinic Management System',
        },
        description: {
          en: 'Comprehensive management system for dental clinics developed with Next.js and Python/FastAPI. Manages patients, appointments and dental treatments with a visual calendar, integrated WhatsApp communication, AI-powered conversation monitoring, and automatic report generation. Features responsive design adaptable to any device.',
          es: 'Sistema integral de gestión para clínicas dentales desarrollado con Next.js y Python/FastAPI. Administra pacientes, citas y tratamientos dentales con calendario visual, comunicación integrada de WhatsApp, monitoreo de conversaciones con IA y generación automática de reportes. Cuenta con diseño responsivo adaptable a cualquier dispositivo.',
        },
      },
      {
        title: 'Work Orders Management System - Atta Montacargas',
        subtitle: {
          en: 'Mobile & Web Application for Work Order Management',
          es: 'Aplicación Móvil y Web para Gestión de Órdenes de Trabajo',
        },
        description: {
          en: 'Mobile application for work order management developed with React Native and FastAPI. It includes user role management, work order creation and tracking, automatic PDF generation, a real-time metrics dashboard, and a complete status management system.',
          es: 'Aplicación móvil para la gestión de órdenes de trabajo desarrollada con React Native y FastAPI. Incluye gestión de roles de usuario, creación y seguimiento de órdenes de trabajo, generación automática de PDF, un panel de métricas en tiempo real y un sistema completo de gestión de estados.',
        },
      },
    ],
    imageAlts: {
      en: ['Order management panel', 'PDF report generation'],
      es: ['Panel de gestión de órdenes', 'Generación de reportes PDF'],
    },
    lightbox: {
      close: { en: 'Close', es: 'Cerrar' },
      prev: { en: 'Previous image', es: 'Imagen anterior' },
      next: { en: 'Next image', es: 'Imagen siguiente' },
    },
  },

  skills: {
    title: {
      en: 'My Skills',
      es: 'Mis habilidades',
    },
  },

  about: {
    title: {
      en: 'About me',
      es: 'Sobre mí',
    },
    description: {
      en: (
        <>
          I&apos;m Jorge <span className="text-purple-500 font-semibold">Andrés</span> López{' '}
          <span className="text-purple-500 font-semibold">Romero</span>, a 20-year-old{' '}
          <span className="text-purple-400">software developer</span> from{' '}
          <span className="text-purple-400">Guanajuato, Mexico</span>. I have a passion for{' '}
          <span className="text-purple-400">software development</span>,{' '}
          <span className="text-purple-400">web design</span> and{' '}
          <span className="text-purple-500 font-semibold">machine learning</span>. I&apos;m passionate about creating{' '}
          <span className="text-purple-400">innovative technological solutions</span> and continuously learning
          about new tools and development methodologies.
        </>
      ),
      es: (
        <>
          Soy Jorge <span className="text-purple-500 font-semibold">Andrés</span> López{' '}
          <span className="text-purple-500 font-semibold">Romero</span>, un{' '}
          <span className="text-purple-400">desarrollador de software</span> de 20 años de{' '}
          <span className="text-purple-400">Guanajuato, México</span>. Tengo fascinación por el{' '}
          <span className="text-purple-400">desarrollo de software</span>, el{' '}
          <span className="text-purple-400">diseño web</span> y el{' '}
          <span className="text-purple-500 font-semibold">machine learning</span>. Me apasiona crear{' '}
          <span className="text-purple-400">soluciones tecnológicas innovadoras</span> y aprender
          continuamente sobre nuevas herramientas y metodologías de desarrollo.
        </>
      ),
    },
  },

  footer: {
    role: {
      en: 'Software Developer',
      es: 'Desarrollador de software',
    },
    contact: {
      en: 'Contact me',
      es: 'Contáctame',
    },
  },
} as const
