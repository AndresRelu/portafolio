'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { Language } from '@/lib/translations'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  isAnimating: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleLanguage = useCallback(() => {
    setIsAnimating(true)
    // Small delay to let exit animation play, then switch language
    setTimeout(() => {
      setLanguage((prev) => (prev === 'en' ? 'es' : 'en'))
      // Update the html lang attribute
      document.documentElement.lang = language === 'en' ? 'es' : 'en'
    }, 300)
    setTimeout(() => {
      setIsAnimating(false)
    }, 600)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isAnimating }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
