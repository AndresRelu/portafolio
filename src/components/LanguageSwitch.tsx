'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center w-[72px] h-9 rounded-full bg-slate-800/80 border border-slate-700/50 hover:border-purple-500/50 transition-colors duration-300 cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
    >
      {/* Sliding indicator */}
      <motion.div
        className="absolute top-1 w-[32px] h-7 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30"
        animate={{ left: language === 'en' ? '2px' : '36px' }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />

      {/* EN label */}
      <span
        className={`relative z-10 flex-1 text-center text-xs font-bold transition-colors duration-300 ${
          language === 'en' ? 'text-white' : 'text-slate-400'
        }`}
      >
        EN
      </span>

      {/* ES label */}
      <span
        className={`relative z-10 flex-1 text-center text-xs font-bold transition-colors duration-300 ${
          language === 'es' ? 'text-white' : 'text-slate-400'
        }`}
      >
        ES
      </span>
    </motion.button>
  )
}
