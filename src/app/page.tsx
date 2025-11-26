import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import AboutMe from '@/components/AboutMe'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Hero />
      <Projects />
      <Skills />
      <AboutMe />
      <Footer />
    </main>
  )
}
